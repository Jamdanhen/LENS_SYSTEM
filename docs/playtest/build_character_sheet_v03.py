"""New v0.3 layout; reuses drawing helpers without rebuilding earlier drafts."""
from decimal import Decimal
import hashlib
import json
import re
from pathlib import Path
from pypdf import PdfReader
import pdfplumber
from build_character_sheet_v02 import Sheet, ROOT, OUT, TASKS, FIELDS, NARROW, ATTR, INK, TEAL, MUTED, PALE, white

QA=ROOT/'tmp/pdfs/character-sheet-v03'
QA.mkdir(parents=True,exist_ok=True)
MODULES={'01':'01','02':'02','03':'04','04':'05','05':'06','06':'07','07':'03'}

def factor(rank):
    return format(Decimal(1)+Decimal(rank)/10,'.1f')

class Draft(Sheet):
    def __init__(self,path,filled=False):
        super().__init__(path,filled)
        self.c.setTitle('LENS | '+('Mara Vale example' if filled else 'Character sheet')+' | v0.3')
    def t(self,x,y,value,size=9,font='Body',color=INK,align='left'):
        value=str(value).replace('V0.2','V0.3')
        value=re.sub(r'module (0[1-7])',lambda m:'module '+MODULES[m[1]],value)
        value=value.replace('HOLT and Axis details: 06.','HOLT and Axis details: 07.')
        return super().t(x,y,value,size,font,color,align)
    def header(self,title,module):
        old=module[:2]
        super().header(title,MODULES[old]+module[2:])

    def rank_factor(self,x,y,rank='',filled=False):
        self.box(x,y,24,21)
        self.box(x+29,y,40,21,PALE)
        if filled and rank!='':
            self.t(x+12,y+5,rank,10,'Bold',INK,'center')
            self.t(x+49,y+5,'×'+factor(rank),10,'Bold',TEAL,'center')

    def training(self):
        self.header('Training / Expressions','02 - Training')
        self.section(105,'TASKS','Rank -> multiplier: 7 -> ×1.7   /   5 -> ×1.5')
        for i in range(6):
            x,y=30+(i%3)*187,125+(i//3)*46
            self.box(x,y,178,40,r=4)
            self.t(x+100,y+5,'RANK',5.6,'Bold',MUTED)
            self.t(x+132,y+5,'FACTOR',5.6,'Bold',MUTED)
            self.rank_factor(x+98,y+14,TASKS[i][1] if self.filled else '',self.filled)
            if self.filled:self.t(x+9,y+20,TASKS[i][0],9.5,'Bold')
            else:self.ln(x+9,y+31,x+90,y+31)
        self.section(237,'FIELDS & RELATED EXPERTISE','Specialty and Precision each belong to the Field; use when applicable.')
        for i in range(6):
            x,y=30+(i%2)*282,257+(i//2)*97
            self.box(x,y,270,90,r=4)
            self.ln(x+9,y+1,x+185,y+1,TEAL,2)
            self.t(x+194,y+6,'RANK',5.8,'Bold',MUTED)
            self.t(x+230,y+6,'FACTOR',5.8,'Bold',MUTED)
            name,rank=FIELDS[i] if self.filled and i<len(FIELDS) else ('','')
            self.rank_factor(x+191,y+17,rank,bool(name))
            if name:self.t(x+10,y+21,name,11,'Bold',TEAL)
            else:
                self.t(x+10,y+9,'FIELD',6.5,'Bold',MUTED);self.ln(x+10,y+36,x+179,y+36)
            for j,kind in enumerate(['Specialty','Precision']):
                yy=y+44+j*22
                self.t(x+10,yy+5,kind.upper(),5.8,'Bold',MUTED)
                members=[r for r in NARROW if r[0]==kind and r[2]==name] if name else []
                r=members[0] if members else None
                self.rank_factor(x+191,yy,r[3] if r else '',r is not None)
                if r:self.t(x+65,yy+6,r[1],8.6)
                else:self.ln(x+65,yy+18,x+181,yy+18)
        self.section(568,'COMMON EXPRESSIONS','Raw = foundation × applicable training. Keep other factors separate.')
        routes=[('Take the load',['Might 6 + Strength 5','Exert 7','Mechanics 5','Rigging 6','Chain Hoists 5'],['11','1.7','1.5','1.6','1.5'],'67.32'),
                ('Repair the hoist',['Psyche 5 + Cognition 5','Repair 5','Mechanics 5','Rigging 6','Chain Hoists 5'],['10','1.5','1.5','1.6','1.5'],'54')]
        for i in range(2):
            y=588+i*84;self.box(30,y,552,77,r=4)
            self.t(41,y+8,routes[i][0] if self.filled else 'EXPRESSION / INTENT',10 if self.filled else 6.5,'Bold',TEAL)
            if not self.filled:self.ln(162,y+19,567,y+19)
            edges=[30,143,228,313,398,488,582]
            for j,label in enumerate(['FOUNDATION','TASK','FIELD','SPECIALTY','PRECISION','RAW']):
                x=(edges[j]+edges[j+1])/2
                self.t(x,y+29,label,6,'Bold',MUTED,'center')
                if j<5:
                    if self.filled:
                        self.t(x,y+43,routes[i][1][j],7.1,'Body',INK,'center')
                        self.t(x,y+59,routes[i][2][j],12,'Bold',TEAL,'center')
                    else:
                        self.ln(edges[j]+7,y+53,edges[j+1]-7,y+53)
                        self.ln(x-17,y+72,x+17,y+72)
                    if j>0:self.t(edges[j],y+58,'×',12,'Bold',MUTED,'center')
                else:
                    self.box(503,y+42,66,29,PALE)
                    if self.filled:self.t(536,y+50,routes[i][3],15,'Bold',TEAL,'center')
                    self.t(488,y+58,'=',12,'Bold',MUTED,'center')
        self.end()

    def expression(self):
        self.header('Expression / play','07 - Expression')
        self.field(30,101,552,'Intent / target / means','Rescue trapped workers using the archive chain hoist.' if self.filled else '')
        self.field(30,140,552,'Access / scope / actual challenge','Before shoulder strain; ordinary Access; D2; matched ordinary Scale.' if self.filled else '',8.5)
        self.section(188,'START WITH THE COMMON EXPRESSION')
        self.box(30,209,552,45,r=4)
        self.t(41,219,'Take the load' if self.filled else 'EXPRESSION / TRAINING ROUTE',10 if self.filled else 7,'Bold',TEAL)
        self.t(41,238,'11 × 1.7 × 1.5 × 1.6 × 1.5' if self.filled else '(A + D)  ×  Task factor  ×  Field factor  ×  Specialty factor  ×  Precision factor',8.4)
        self.t(467,220,'RAW',7,'Bold',MUTED)
        self.box(502,216,70,31,PALE)
        if self.filled:self.t(537,223,'67.32',17,'Bold',TEAL,'center')
        self.section(281,'APPLY WHAT FITS THIS ATTEMPT','Use ×1 for a factor that does not contribute.')
        labels=['AXIS','ASPECT','EQUIPMENT','FUNCTION','CONTEXT','SCALE','DIFFICULTY','÷ ACTIONS']
        vals=['1','1.1','1','1','1.2','1','0.588','1']
        for i,(label,value) in enumerate(zip(labels,vals)):
            x=30+i*69
            self.t(x+32,302,label,6.1,'Bold',MUTED,'center')
            self.box(x+2,315,63,25)
            if self.filled:self.t(x+33,322,value,12,'Bold',TEAL,'center')
        self.field(30,353,349,'Full value before final flooring','67.32 × 1.1 × 1.2 × 0.588 = 52.2510912' if self.filled else '',10)
        self.t(410,356,'FINAL RATING',7,'Bold',MUTED)
        self.box(499,349,83,34,PALE)
        if self.filled:self.t(540,354,'52',23,'Bold',TEAL,'center')
        self.field(30,395,552,'Why these adjustments apply','Rescue invokes the Aspect; one paid boost adds +0.20 context.' if self.filled else '',8.5)
        self.section(445,'RESOLUTION')
        for x,w,label,val in [(30,75,'Initial roll','28'),(117,143,'Continuation / reroll','None'),(272,94,'Final roll','28'),(378,78,'Margin','24'),(468,114,'Outcome','Success')]:
            self.field(x,465,w,label,val if self.filled else '')
        for x,w,label,val in [(30,80,'Effects','3'),(123,89,'Complication','0'),(225,130,'Opposed / remaining','Unopposed / 3'),(368,214,'Allocation / spending','Free workers / boost 1 point')]:
            self.field(x,507,w,label,val if self.filled else '',8.5)
        self.section(561,'ADDITIONAL CONDITIONS','One master ledger; continue entries here without duplicating them.')
        for i in range(2):
            y=581+i*57;self.box(30,y,552,52)
            self.field(41,y+5,35,'ID');self.field(88,y+5,280,'Name / cause')
            self.field(380,y+5,50,'Levels');self.field(442,y+5,128,'Scope P / M / F')
            self.t(41,y+38,'ACCESS / RECOVERY:',6.5,'Bold',MUTED);self.ln(144,y+46,570,y+46)
        self.section(711,'INITIATIVE / DELAY')
        for x,w,label in [(30,101,'Awareness Final'),(144,114,'Responsiveness Final'),(271,72,'Base'),(356,85,'Opening roll'),(454,128,'Result / current')]:
            self.field(x,731,w,label)
        self.end()

    def build(self):
        self.play();self.training();self.expression();self.identity();self.possessions();self.development()
        if not self.filled:self.holt()
        self.c.save()

def verify(path,filled):
    reader=PdfReader(path)
    assert len(reader.pages)==(6 if filled else 7)
    texts=[p.extract_text() for p in reader.pages]
    assert 'Training / Expressions' in texts[1] and 'Expression / play' in texts[2]
    assert 'Identity / provisions' in texts[3]
    for _,_,names,_ in ATTR:
        assert all(n in texts[0] for n in names)
    if filled:
        for name,_ in TASKS+FIELDS:assert name in texts[1],name
        for _,name,_,_ in NARROW:assert name in texts[1],name
        assert all(v in texts[1] for v in ['67.32','54','1.7','1.6','1.5'])
        assert '52.2510912' in texts[2]
    count=0
    with pdfplumber.open(path) as pdf:
        for i,p in enumerate(pdf.pages,1):
            for word in p.extract_words():
                assert 24<=word['x0']<=word['x1']<=588,(i,word)
                assert 15<=word['top']<=word['bottom']<=786,(i,word)
                count+=1
    return {'file':str(path),'pages':len(texts),'words_within_bounds':count}

if __name__=='__main__':
    # Preserve earlier artifacts and their builders byte for byte.
    previous=list(OUT.glob('lens*sheet*.pdf'))+[Path(__file__).with_name('build_character_sheet_v02.py')]
    previous=[p for p in previous if 'v0.3' not in p.name]
    hashes={str(p):hashlib.sha256(p.read_bytes()).hexdigest() for p in previous}
    raw=Decimal(11)
    for r in [7,5,6,5]:raw*=Decimal(factor(r))
    assert raw==Decimal('67.32')
    repair=Decimal(10)
    for r in [5,5,6,5]:repair*=Decimal(factor(r))
    assert repair==Decimal('54')
    assert raw*Decimal('1.1')*Decimal('1.2')*Decimal('.588')==Decimal('52.2510912')
    results=[]
    for name,filled in [('lens-character-sheet-v0.3.pdf',False),('lens-character-sheet-mara-example-v0.3.pdf',True)]:
        path=OUT/name;Draft(path,filled).build();results.append(verify(path,filled))
    assert all(hashlib.sha256(Path(p).read_bytes()).hexdigest()==h for p,h in hashes.items())
    (QA/'verification.json').write_text(json.dumps({'outputs':results,'earlier_drafts_unchanged':hashes},indent=2),encoding='utf-8')
    print(json.dumps(results,indent=2));print('Earlier drafts and v0.2 builder unchanged.')
