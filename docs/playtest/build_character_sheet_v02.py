"""Build the v0.2 handwriting sheet and a staged Mara Vale example.

Source character: lens-first-playable-packet-v0.1.md, sections 6 and 9.
The example is a desk rehearsal, not an update to the source character.
Run with bundled Python. Outputs replace only this builder's v0.2 PDFs.
"""
from pathlib import Path
from decimal import Decimal as D
import json
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader
import pdfplumber

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'output/pdf'
QA = ROOT / 'tmp/pdfs/character-sheet-v02'
QA.mkdir(parents=True, exist_ok=True)
for name, filename in [('Body','segoeui.ttf'),('Bold','segoeuib.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(Path('C:/Windows/Fonts') / filename)))
W,H = 612,792
INK,TEAL,MUTED,LINE,PALE,PAPER = map(HexColor,
    ['#183237','#266D6C','#607477','#B0C0BE','#EDF3F1','#FAFAF7'])
ATTR = [
    ('MIGHT',6,['Strength','Toughness','Resistance','Vigor','Resilience'],[5,1,1,1,1]),
    ('MOBILITY',5,['Movement','Maneuverability','Stability','Coordination','Responsiveness'],[2,2,2,5,2]),
    ('PSYCHE',5,['Cognition','Learning','Awareness','Insight','Resolve'],[5,2,5,0,2]),
    ('INFLUENCE',5,['Presence','Projection','Connection','Manipulation','Control'],[2,0,1,1,2]),
    ('LEVERAGE',5,['Assets','Network','Authority','Reputation','Background'],[5,2,2,1,0]),
]
TASKS = [('Exert','7'),('Traverse','5'),('Block','5'),('Observation','5'),('Repair','5'),('Persuade','5')]
FIELDS = [('Mechanics','5'),('Athletics','5'),('Seamanship','5'),('Medicine','5'),('Commerce','5')]
NARROW = [('Specialty','Rigging','Mechanics','6'),('Specialty','Load Handling','Athletics','6'),
    ('Specialty','Dock Work','Seamanship','6'),('Specialty','First Aid','Medicine','6'),
    ('Specialty','Bargaining','Commerce','6'),('Precision','Chain Hoists','Mechanics','5'),
    ('Precision','Bandaging','Medicine','5')]

class Sheet:
    def __init__(self, path, filled=False):
        self.c = canvas.Canvas(str(path), pagesize=(W,H))
        self.c.setTitle('LENS | '+('Mara Vale desk rehearsal' if filled else 'Character sheet')+' | v0.2')
        self.c.setAuthor('LENS System')
        self.filled=filled
        self.page=0
        self.total=6 if filled else 7
    def t(self,x,y,value,size=9,font='Body',color=INK,align='left'):
        self.c.setFillColor(color); self.c.setFont(font,size)
        draw = {'left':self.c.drawString,'right':self.c.drawRightString,'center':self.c.drawCentredString}[align]
        draw(x,H-y-size*.8,str(value))
    def ln(self,x,y,x2,y2,color=LINE,width=.6):
        self.c.setStrokeColor(color); self.c.setLineWidth(width); self.c.line(x,H-y,x2,H-y2)
    def box(self,x,y,w,h,fill=white,stroke=LINE,r=3):
        self.c.setFillColor(fill);self.c.setStrokeColor(stroke);self.c.setLineWidth(.65)
        self.c.roundRect(x,H-y-h,w,h,r,fill=1,stroke=1)
    def circ(self,x,y,r,fill=white,stroke=TEAL):
        self.c.setFillColor(fill);self.c.setStrokeColor(stroke);self.c.setLineWidth(.8)
        self.c.circle(x,H-y,r,fill=1,stroke=1)
    def wrap(self,x,y,w,value,size=9,font='Body',leading=13,maxlines=None):
        lines=[]
        for paragraph in str(value).split('\n'):
            line=''
            for word in paragraph.split():
                trial=(line+' '+word).strip()
                if pdfmetrics.stringWidth(trial,font,size)>w and line:
                    lines.append(line);line=word
                else:line=trial
            lines.append(line)
        if maxlines is not None:
            assert len(lines)<=maxlines,(value,lines,maxlines)
        for i,s in enumerate(lines):self.t(x,y+i*leading,s,size,font)
        return y+len(lines)*leading
    def field(self,x,y,w,label,value='',size=9):
        self.t(x,y,label.upper(),6.7,'Bold',MUTED)
        if value:self.wrap(x,y+13,w,value,size,maxlines=1)
        self.ln(x,y+27,x+w,y+27)
    def section(self,y,title,hint=''):
        self.t(30,y,title,10,'Bold',TEAL)
        end=30+pdfmetrics.stringWidth(title,'Bold',10)
        self.ln(end+12,y+5,582,y+5)
        if hint:self.t(582,y-11,hint,7,'Body',MUTED,'right')
    def header(self,title,module):
        self.page+=1
        self.c.setFillColor(PAPER);self.c.rect(0,0,W,H,fill=1,stroke=0)
        self.c.setFillColor(TEAL);self.c.rect(0,H-7,W,7,fill=1,stroke=0)
        self.t(30,24,'LENS',27,'Bold')
        self.t(128,27,title,18,'Bold',TEAL)
        self.t(30,65,'MODULE '+module.split(' - ')[0],7,'Bold',MUTED)
        self.field(128,54,454,'Character','Mara Vale' if self.filled else '')
        self.ln(30,764,582,764)
        self.t(30,773,'V0.2  /  '+('MARA - STAGED DESK REHEARSAL' if self.filled else 'ORDINARY 10-CAPACITY PLAYTEST SHEET'),6.7,'Bold',MUTED)
        self.t(582,773,f'{self.page:02} / {self.total:02}',7,'Bold',MUTED,'right')
    def end(self):self.c.showPage()
    def table(self,x,y,widths,labels,rows,count,rowh=28):
        total=sum(widths)
        self.box(x,y,total,22,PALE,r=3)
        xx=x
        for w,label in zip(widths,labels):
            self.t(xx+7,y+7,label.upper(),6.8,'Bold',MUTED);xx+=w
        for i in range(count):
            yy=y+22+i*rowh
            self.box(x,yy,total,rowh,white,r=0)
            row=rows[i] if i<len(rows) else []
            xx=x
            for j,w in enumerate(widths):
                if j:self.ln(xx,yy+5,xx,yy+rowh-5)
                if j<len(row) and row[j] != '':
                    self.wrap(xx+7,yy+7,w-14,row[j],8.4,leading=11,maxlines=max(1,int((rowh-9)/11)))
                xx+=w
    def note_lines(self,x,y,w,n,values=None,spacing=22):
        for i in range(n):
            if values and i<len(values):self.t(x,y+i*spacing,values[i],8.8)
            self.ln(x,y+i*spacing+15,x+w,y+i*spacing+15)

    def play(self):
        self.header('Character / play','01 - Play')
        self.field(30,97,120,'Player')
        self.field(165,97,165,'Concept', 'Rigging foreman' if self.filled else '')
        self.field(345,97,170,'Profile / classification','Ordinary / river district' if self.filled else '')
        self.field(530,97,52,'Scale ref.','Ordinary' if self.filled else '',8)
        for i,(title,a,names,ds) in enumerate(ATTR):
            x,y=30+(i%3)*187,143+(i//3)*131
            self.box(x,y,178,123,r=5);self.ln(x+10,y+1,x+134,y+1,TEAL,2)
            self.t(x+11,y+13,title,11,'Bold',TEAL);self.circ(x+157,y+19,13)
            if self.filled:self.t(x+157,y+10,a,19,'Bold',TEAL,'center')
            self.t(x+114,y+35,'RANK',6.2,'Bold',MUTED,'center')
            self.t(x+153,y+35,'A + D',6.2,'Bold',MUTED,'center')
            for j,(name,d) in enumerate(zip(names,ds)):
                yy=y+47+j*14
                self.t(x+11,yy+2,name,8.2)
                self.box(x+104,yy,22,13,r=2);self.box(x+142,yy,22,13,PALE,r=2)
                if self.filled:
                    self.t(x+115,yy+2,d,9,'Bold',INK,'center');self.t(x+153,yy+2,a+d,9,'Bold',TEAL,'center')
        x,y=404,274
        self.box(x,y,178,123,PALE,r=5);self.t(x+11,y+12,'AT THE TABLE',10,'Bold',TEAL)
        self.t(x+11,y+35,'INITIATIVE',6.5,'Bold',MUTED);self.t(x+95,y+35,'AVAILABLE POINTS',6.1,'Bold',MUTED)
        self.box(x+11,y+47,69,30);self.box(x+95,y+47,70,30)
        if self.filled:
            self.t(x+46,y+55,'Not set',9,'Body',MUTED,'center');self.t(x+130,y+51,'4',22,'Bold',TEAL,'center')
        self.t(x+11,y+88,'READY / HELD RESPONSE',6.2,'Bold',MUTED)
        if self.filled:self.t(x+11,y+101,'No held response',8)
        self.ln(x+11,y+115,x+165,y+115)
        self.section(414,'CONDITION TRACKERS','Shade Load; unmarked = 0 Load / 100% Function.')
        fills=['#FFFFFF','#FFFFFF','#FAF4E4','#FAF4E4','#FAF4E4','#F5E5D5','#F5E5D5','#F0D8D2','#F0D8D2','#E4C5C1']
        for i,(title,scope) in enumerate([('PHYSICAL','Might / Mobility'),('MENTAL','Psyche / Influence'),('FRAMEWORK','Leverage')]):
            x,y=30+187*i,433;self.box(x,y,178,83,r=5)
            self.t(x+10,y+10,title,10,'Bold',TEAL);self.t(x+10,y+25,scope,6.7,'Body',MUTED)
            self.t(x+167,y+12,'C: 10',7,'Bold',MUTED,'right')
            for j in range(10):
                marked=self.filled and i==0 and j<3
                self.box(x+10+j*16,y+39,14,18,TEAL if marked else HexColor(fills[j]),INK,r=1)
                self.t(x+17+j*16,y+44,j+1,7,'Bold' if marked else 'Body',white if marked else INK,'center')
            for start,end,label in [(0,1,'100%'),(2,4,'75%'),(5,6,'50%'),(7,8,'25%'),(9,9,'Lost')]:
                left,right=x+10+start*16,x+10+end*16+14
                self.ln(left,y+61,right,y+61,MUTED,.5);self.t((left+right)/2,y+67,label,6.2,'Bold',MUTED,'center')
        self.section(532,'CURRENT CONDITIONS','Additional entries: module 07. Each Condition appears once.')
        for i in range(2):
            y=551+i*47
            self.box(30,y,552,43,r=3);self.t(39,y+8,f'{i+1:02}',8,'Bold',TEAL)
            self.t(63,y+5,'NAME / CAUSE',6,'Bold',MUTED);self.ln(63,y+24,356,y+24)
            self.t(369,y+5,'LEVELS',6,'Bold',MUTED);self.box(370,y+15,24,19)
            for j,s in enumerate('PMF'):
                xx=427+j*49;marked=self.filled and i==0 and j==0
                self.circ(xx,y+20,6,TEAL if marked else white);self.t(xx+10,y+16,s,7,'Bold',MUTED)
            self.t(63,y+29,'ACCESS / RECOVERY:',6,'Bold',MUTED)
            if self.filled and i==0:
                self.t(63,y+13,'Strained shoulder / later rigging mishap',8.4)
                self.t(382,y+19,'3',10,'Bold',INK,'center')
                self.t(153,y+28,'No Access loss; rest + appropriate care, GM sets recovery.',7.3)
        self.section(655,'COMMON EXPRESSIONS','Raw values exclude Aspect and all situational factors.')
        self.t(40,670,'INTENT',6.3,'Bold',MUTED)
        self.t(232,670,'CAPABILITIES / ROUTE IN MODULE 02',6.3,'Bold',MUTED)
        self.t(550,670,'RAW',6.3,'Bold',MUTED,'center')
        routes=[('Take the load','Strength + Exert / hoist route','67.32'),('Repair the hoist','Cognition + Repair / hoist route','54')]
        for i in range(2):
            y=683+i*34;self.box(30,y,552,29)
            self.ln(222,y+5,222,y+24);self.box(526,y+4,47,21,PALE)
            if self.filled:
                for x,v in zip([40,232],routes[i][:2]):self.t(x,y+10,v,8.5)
                self.t(550,y+9,routes[i][2],10,'Bold',TEAL,'center')
        self.end()

    def training(self):
        self.header('Training / expertise','02 - Training')
        self.section(105,'TASKS & FIELDS')
        self.table(30,125,[221,49],['Task / practiced activity','Rank'],TASKS if self.filled else [],6,27)
        self.table(312,125,[221,49],['Field / expertise','Rank'],FIELDS if self.filled else [],6,27)
        self.section(332,'SPECIALTIES & PRECISIONS')
        self.table(30,352,[76,188,231,57],['Type','Name / narrow application','Parent Field','Rank'],NARROW if self.filled else [],8,27)
        self.section(612,'SAVED ROUTES','Printed rows are space, not limits; repeat sections as needed.')
        routes=[('Take the load','Might 6 + Strength 5; Exert 7 / Mechanics 5 / Rigging 6 / Chain Hoists 5.','67.32'),
                ('Repair the hoist','Psyche 5 + Cognition 5; Repair 5 / Mechanics 5 / Rigging 6 / Chain Hoists 5.','54')]
        for i in range(2):
            y=632+i*59;self.box(30,y,552,53)
            self.t(41,y+8,'EXPRESSION / INTENT',6.5,'Bold',MUTED)
            self.t(552,y+8,'RAW',6.5,'Bold',MUTED,'center');self.box(528,y+21,45,24,PALE)
            if self.filled:
                self.t(166,y+6,routes[i][0],9,'Bold');self.t(551,y+28,routes[i][2],9,'Bold',TEAL,'center')
                self.wrap(41,y+25,475,routes[i][1],8.4,leading=11,maxlines=2)
            else:
                self.ln(166,y+20,507,y+20);self.ln(41,y+45,516,y+45)
        self.end()

    def identity(self):
        self.header('Identity / provisions','03 - Identity')
        self.section(104,'CHARACTER ASPECTS')
        for i in range(2):
            y=124+i*65;self.box(30,y,552,58,r=4)
            self.t(41,y+8,'ASPECT / WHAT IT MEANS',6.5,'Bold',MUTED)
            self.t(474,y+8,'RANK',6.5,'Bold',MUTED);self.box(472,y+23,38,24)
            self.t(530,y+8,'FACTOR',6.5,'Bold',MUTED);self.box(527,y+23,43,24,PALE)
            if self.filled and i==0:
                self.t(41,y+23,'Nobody Left Beneath the Load',11,'Bold')
                self.t(41,y+41,'Protect workers; refuses to abandon those trapped.',8)
                self.t(491,y+29,'1',12,'Bold',TEAL,'center');self.t(549,y+29,'1.1',12,'Bold',TEAL,'center')
            else:self.note_lines(41,y+23,411,1)
        self.t(30,261,'POTENTIALS',7,'Bold',MUTED)
        for i in range(4):
            x,y=30+(i%2)*282,280+(i//2)*27
            self.circ(x+5,y+5,4)
            if self.filled and i==0:self.t(x+18,y,'A Name Worth Trusting (Rank 0)',9)
            self.ln(x+18,y+15,x+270,y+15)
        self.section(346,'HOLD / IDENTITY PACKAGE')
        self.field(30,367,552,'Package / source / Profile','No separate HOLD package specified in the source fixture.' if self.filled else '',8.5)
        self.note_lines(30,407,552,2,['Rigging foreman; familiar with the archive lifting machinery.','Scenario provisions are listed in module 04.'] if self.filled else None)
        self.section(467,'BENEFITS')
        self.table(30,487,[169,298,85],['Name','Defined provision / limits','Paid / source'],[['None purchased','Source fixture','-']] if self.filled else [],2,39)
        self.section(610,'DRAWBACKS')
        self.table(30,630,[169,298,85],['Name','Credited burden / scope','Credit'],[['None','No starting drawback compensation','0']] if self.filled else [],2,39)
        self.t(31,742,'Acquisition, limitation adjustments, and prior payments: module 05. HOLT and Axis details: 06.',7,'Body',MUTED)
        self.end()

    def possessions(self):
        self.header('Equipment / connections','04 - Provisions')
        self.section(104,'EQUIPMENT & RESOURCES')
        rows=[['Work clothes','Ordinary workwear; no defined armor factor','Scenario'],
              ['Utility tool','Ordinary tool; no numerical bonus granted','Scenario'],
              ['Line + rigging tools','Ordinary rigging means','Scenario'],
              ['Archive chain hoist','Access to installed equipment; not ownership','Scenario']]
        self.table(30,124,[145,327,80],['Item / quantity','Use, permission, factors or limits','Source'],rows if self.filled else [],6,36)
        self.section(385,'PEOPLE & CONNECTIONS')
        self.table(30,405,[169,383],['Person / group','Relationship / what I can call on'],[['Archive workers','People Mara refuses to abandon; no extra resource bonus.']] if self.filled else [],3,34)
        self.section(550,'LANGUAGES')
        self.table(30,570,[180,292,80],['Language','Established scope','Source / paid'],[['Ordinary local language','Established ordinary use; no separate expertise ranks','Free grant']] if self.filled else [],2,31)
        self.section(678,'PREPARATIONS & ONGOING EFFECTS')
        self.note_lines(30,699,552,2,['None established in this rehearsal.'] if self.filled else None)
        self.end()

    def development(self):
        self.header('Development / session','05 - Development')
        self.section(104,'CREATION FUNDING')
        rows=[['Attributes','1,200','1,200','0'],['Derived Attributes','1,000','1,000','0'],
              ['Training','750','750','0 lost'],['Flexible base','125','120','5'],['Drawback compensation','0','0','0']]
        self.table(30,124,[243,103,103,103],['Allocation / eligibility','Received','Spent','Remainder'],rows if self.filled else [[r[0],'','',''] for r in rows],5,25)
        self.section(295,'PURCHASES & ADJUSTMENTS')
        rows=[['Creation','Might 5 to 6','Flexible','60',''],['Creation','Toughness 0 to 1','Flexible','20',''],
              ['Creation','Resistance 0 to 1','Flexible','20',''],['Creation','Exert 5 to 7','Flexible','20','']]
        self.table(30,315,[64,242,91,62,93],['Date / ref.','Purchase / change','Fund / source','Paid','Prior paid'],rows if self.filled else [],4,27)
        self.field(30,454,552,'Limitations / affected purchase / basis / reduction / prior credit','No negotiated limitations or buyoff in this source character.' if self.filled else '',8)
        self.section(505,'SESSION POINTS')
        for x,label,val in [(30,'Opening','5'),(171,'Awarded','0'),(312,'Spent','1'),(453,'Closing','4')]:
            self.field(x,525,129,label,val if self.filled else '',13)
        rows=[['Rehearsal','Boost on worker rescue','-1','4']]
        self.table(30,566,[86,306,80,80],['Date / category','Reason / recipient','Change','Balance'],rows if self.filled else [],3,27)
        self.section(688,'STORY AWARDS & DEVELOPMENT')
        self.note_lines(30,708,552,2,['No new grants or Aspect development; rehearsal only.'] if self.filled else None)
        self.end()

    def holt(self):
        self.header('HOLT / Axes','06 - Optional HOLT; repeat for each HOLT')
        self.t(582,89,'Optional sheet; repeat for each HOLT.',7,'Body',MUTED,'right')
        self.field(30,103,350,'HOLT name / thematic scope')
        self.field(400,103,182,'Access acquisition / source')
        self.section(151,'PERMISSION & MANIFESTATION')
        self.note_lines(30,174,552,3)
        self.section(259,'AXES')
        self.table(30,279,[158,130,56,208],['Axis / Derived link','Open / Condition / Closed','Rank','Access Condition / satisfied?'],[],5,47)
        self.section(555,'LIMITATIONS & ACTUAL PAYMENTS')
        self.field(30,578,552,'Burden / affected purchases')
        for x,w,label in [(30,126,'Purchase basis'),(172,126,'Reduction %'),(314,126,'Actual paid'),(456,126,'Prior payment ref.')]:
            self.field(x,621,w,label)
        self.note_lines(30,672,552,3)
        self.end()

    def expression(self):
        self.header('Expression / Conditions','07 - Repeatable play record')
        self.field(30,101,552,'Intent / target / means','Rescue trapped workers using the archive chain hoist.' if self.filled else '')
        self.field(30,140,552,'Access / scope / actual challenge','Before shoulder strain; ordinary Access; D2; matched ordinary Scale.' if self.filled else '',8.5)
        self.section(188,'ASSEMBLY','After A + D, enter factors; divide by the action divisor.')
        cells=[('A + D','11'),('Task','1.7'),('Field','1.5'),('Specialty','1.6'),('Precision','1.5'),('Axis','1'),('Aspect','1.1'),('Equipment','1'),
               ('Function','1'),('Context','1.2'),('Scale','1'),('Difficulty','0.588'),('Action divisor','1'),('Pre-floor','52.2510912'),('Final Rating','52')]
        # Eight factors on the first line; seven on the second, including the complete result.
        for i,(label,val) in enumerate(cells):
            row=0 if i<8 else 1;col=i if i<8 else i-8
            width=69 if row==0 else 552/7
            x,y=30+col*width,209+row*47
            self.t(x+3,y,label.upper(),5.9,'Bold',MUTED)
            self.box(x+2,y+13,width-6,25,PALE if label=='Final Rating' else white)
            if self.filled:self.t(x+(width-2)/2,y+21,val,8.3 if len(val)>7 else 11,'Bold',TEAL,'center')
        self.field(30,311,552,'Context sources / Aspect applicability','Boost +0.20; Nobody Left Beneath the Load applies to rescuing workers.' if self.filled else '',8.5)
        self.section(357,'RESOLUTION')
        for x,w,label,val in [(30,92,'Initial roll','28'),(134,190,'Continuation / replacement','None'),(336,112,'Completed result','28'),(460,122,'Outcome','Success')]:
            self.field(x,378,w,label,val if self.filled else '')
        for x,w,label,val in [(30,123,'Signed Margin','24'),(168,123,'Effects','3'),(306,123,'Complication','0'),(444,138,'Opposed / remaining','Unopposed / 3')]:
            self.field(x,420,w,label,val if self.filled else '')
        self.field(30,463,552,'Allocation / consequence / paid spending','3 Effects toward freeing workers; boost 1 point, logged in module 05.' if self.filled else '',8.5)
        self.section(513,'ADDITIONAL CONDITIONS','Continue the master ledger; do not duplicate existing entries.')
        for i in range(2):
            y=533+i*66;self.box(30,y,552,60)
            self.field(41,y+8,41,'ID');self.field(96,y+8,274,'Name / cause')
            self.field(384,y+8,57,'Levels');self.field(455,y+8,115,'Scope P / M / F')
            self.t(41,y+44,'ACCESS / RECOVERY:',6.7,'Bold',MUTED);self.ln(149,y+54,570,y+54)
        self.section(688,'INITIATIVE / DELAY')
        for x,w,label in [(30,101,'Awareness Final'),(144,114,'Responsiveness Final'),(271,72,'Base'),(356,85,'Opening roll'),(454,128,'Result / current')]:
            self.field(x,710,w,label)
        self.end()

    def build(self):
        self.play();self.training();self.identity();self.possessions();self.development()
        if not self.filled:self.holt()
        self.expression();self.c.save()

def verify(path,filled):
    reader=PdfReader(path)
    assert len(reader.pages)==(6 if filled else 7)
    alltext='\n'.join(p.extract_text() for p in reader.pages)
    first=reader.pages[0].extract_text()
    for _,_,names,_ in ATTR:
        for name in names: assert name in first,name
    for name in ['CURRENT CONDITIONS','SPECIALTIES & PRECISIONS','CHARACTER ASPECTS','DRAWBACKS','LANGUAGES','STORY AWARDS & DEVELOPMENT','ADDITIONAL CONDITIONS']:
        assert name in alltext,name
    if not filled:assert 'Open / Condition / Closed'.upper() in alltext
    if filled:
        for value in ['67.32','52.2510912','Nobody Left Beneath the Load','Chain Hoists','Strained shoulder']:
            assert value in alltext,value
    words=0
    with pdfplumber.open(path) as doc:
        for num,page in enumerate(doc.pages,1):
            for word in page.extract_words():
                assert 24<=word['x0']<=word['x1']<=588,(num,word)
                assert 15<=word['top']<=word['bottom']<=786,(num,word)
                words+=1
    return {'file':str(path),'pages':len(reader.pages),'words_within_bounds':words}

if __name__=='__main__':
    assert sum(a for _,a,_,_ in ATTR)==26
    assert sum(sum(ds) for _,_,_,ds in ATTR)==52
    assert all(d<=a for _,a,_,ds in ATTR for d in ds)
    assert 6*5*10+5*5*10+5*6*5+2*5*5==750
    raw=D(11)*D('1.7')*D('1.5')*D('1.6')*D('1.5')
    total=raw*D('1.1')*D('1.2')*D('.588')
    assert raw==D('67.32') and total==D('52.2510912')
    assert int(total)==52 and 52-28==24 and 1+24//10==3
    assert 125-60-20-20-20==5 and 5-1==4
    # Separate later Condition rehearsal: three Physical levels => 75% Function.
    assert int(raw*D('.75')*D('.588'))==29
    results=[]
    for name,filled in [('lens-character-sheet-v0.2.pdf',False),('lens-character-sheet-mara-example-v0.2.pdf',True)]:
        path=OUT/name;Sheet(path,filled).build();results.append(verify(path,filled))
    (QA/'verification.json').write_text(json.dumps(results,indent=2),encoding='utf-8')
    print(json.dumps(results,indent=2))
