/* ==========================================================================
   F1 2026 DASHBOARD — DATA FILE
   ==========================================================================
   This is the ONLY file you should need to touch for a weekly update.
   Edit the arrays below, bump APP_VERSION at the top, save, and drag the
   whole project folder onto Netlify Drop (or push it if the site is linked
   to a Git repo). Bumping APP_VERSION is what tells returning visitors'
   browsers there's a new version to fetch — see README.md.
   ========================================================================== */

const APP_VERSION = '2026.13.1'; // bump this on every content update (see README)
const LAST_UPDATED = '7 Sep 2026 — through Round 13 (Italian GP)';

const teamColor = {
  Mercedes: 'var(--mercedes)', Ferrari: 'var(--ferrari)', McLaren: 'var(--mclaren)',
  'Red Bull Racing': 'var(--redbull)', 'Racing Bulls': 'var(--racingbulls)', Alpine: 'var(--alpine)',
  'Aston Martin': 'var(--astonmartin)', Williams: 'var(--williams)', 'Haas F1 Team': 'var(--haas)',
  Audi: 'var(--audi)', Cadillac: 'var(--cadillac)'
};

// ---------- HERO ----------
const hero = {
  leaderName: 'K. Antonelli', leaderTeam: 'Mercedes', leaderPts: 267,
  gap: '+66', gapDriver: 'G. Russell', gapTeam: 'Mercedes', gapPts: 201,
  roundLabel: 'Rd 13 of 23', roundSub: 'Complete after Italian GP',
  nextRace: 'Spanish GP', nextSub: 'Madring · 11–13 Sep',
  railPct: 57,
};

// ---------- CALENDAR DATA ----------
const races = [
  {r:1,gp:'Australian GP',venue:'Melbourne',date:'6–8 Mar',status:'done',winner:'G. Russell',team:'Mercedes'},
  {r:2,gp:'Chinese GP',venue:'Shanghai',date:'13–15 Mar',status:'done',winner:'K. Antonelli',team:'Mercedes',sprint:true},
  {r:3,gp:'Japanese GP',venue:'Suzuka',date:'27–29 Mar',status:'done',winner:'K. Antonelli',team:'Mercedes'},
  {r:4,gp:'Miami GP',venue:'Miami',date:'1–3 May',status:'done',winner:'K. Antonelli',team:'Mercedes',sprint:true},
  {r:5,gp:'Canadian GP',venue:'Montreal',date:'22–24 May',status:'done',winner:'K. Antonelli',team:'Mercedes',sprint:true},
  {r:6,gp:'Monaco GP',venue:'Monte Carlo',date:'5–7 Jun',status:'done',winner:'K. Antonelli',team:'Mercedes'},
  {r:7,gp:'Spanish GP',venue:'Barcelona-Catalunya',date:'12–14 Jun',status:'done',winner:'L. Hamilton',team:'Ferrari'},
  {r:8,gp:'Austrian GP',venue:'Spielberg',date:'26–28 Jun',status:'done',winner:'G. Russell',team:'Mercedes'},
  {r:9,gp:'British GP',venue:'Silverstone',date:'3–5 Jul',status:'done',winner:'C. Leclerc',team:'Ferrari',sprint:true},
  {r:10,gp:'Belgian GP',venue:'Spa-Francorchamps',date:'17–19 Jul',status:'done',winner:'K. Antonelli',team:'Mercedes'},
  {r:11,gp:'Hungarian GP',venue:'Budapest',date:'24–26 Jul',status:'done',winner:'L. Norris',team:'McLaren'},
  {r:12,gp:'Dutch GP',venue:'Zandvoort',date:'21–23 Aug',status:'done',winner:'L. Norris',team:'McLaren',sprint:true},
  {r:13,gp:'Italian GP',venue:'Monza',date:'4–6 Sep',status:'done',winner:'K. Antonelli',team:'Mercedes'},
  {r:14,gp:'Spanish GP (Madrid)',venue:'Madring street circuit',date:'11–13 Sep',status:'now',isNew:true},
  {r:15,gp:'Azerbaijan GP',venue:'Baku',date:'24–26 Sep',status:'upcoming'},
  {r:16,gp:'Bahrain GP',venue:'Sepang, Malaysia',date:'2–4 Oct',status:'upcoming',isNew:true},
  {r:17,gp:'Singapore GP',venue:'Marina Bay',date:'9–11 Oct',status:'upcoming',sprint:true},
  {r:18,gp:'United States GP',venue:'Austin',date:'23–25 Oct',status:'upcoming'},
  {r:19,gp:'Mexico City GP',venue:'Mexico City',date:'30 Oct–1 Nov',status:'upcoming'},
  {r:20,gp:'São Paulo GP',venue:'Interlagos',date:'6–8 Nov',status:'upcoming'},
  {r:21,gp:'Las Vegas GP',venue:'Las Vegas',date:'19–21 Nov',status:'upcoming'},
  {r:22,gp:'Qatar GP',venue:'Lusail',date:'27–29 Nov',status:'upcoming'},
  {r:23,gp:'Abu Dhabi GP',venue:'Yas Marina',date:'4–6 Dec',status:'upcoming'},
];

// ---------- STANDINGS DATA ----------
const drivers = [
  {p:1,name:'Kimi Antonelli',team:'Mercedes',pts:267},
  {p:2,name:'George Russell',team:'Mercedes',pts:201},
  {p:3,name:'Lewis Hamilton',team:'Ferrari',pts:191},
  {p:4,name:'Lando Norris',team:'McLaren',pts:171},
  {p:5,name:'Charles Leclerc',team:'Ferrari',pts:155},
  {p:6,name:'Max Verstappen',team:'Red Bull Racing',pts:127},
  {p:7,name:'Oscar Piastri',team:'McLaren',pts:116},
  {p:8,name:'Isack Hadjar',team:'Red Bull Racing',pts:71},
  {p:9,name:'Liam Lawson',team:'Racing Bulls',pts:51},
  {p:10,name:'Pierre Gasly',team:'Alpine',pts:41},
  {p:11,name:'Arvid Lindblad',team:'Racing Bulls',pts:29},
  {p:12,name:'Franco Colapinto',team:'Alpine',pts:21},
  {p:13,name:'Oliver Bearman',team:'Haas F1 Team',pts:18},
  {p:14,name:'Gabriel Bortoleto',team:'Audi',pts:10},
  {p:15,name:'Nico Hülkenberg',team:'Audi',pts:6},
  {p:16,name:'Carlos Sainz',team:'Williams',pts:6},
  {p:17,name:'Alexander Albon',team:'Williams',pts:5},
  {p:18,name:'Esteban Ocon',team:'Haas F1 Team',pts:3},
  {p:19,name:'Fernando Alonso',team:'Aston Martin',pts:3},
  {p:20,name:'Yuki Tsunoda',team:'Racing Bulls',pts:1},
  {p:21,name:'Lance Stroll',team:'Aston Martin',pts:0},
  {p:22,name:'Valtteri Bottas',team:'Cadillac',pts:0},
  {p:23,name:'Sergio Pérez',team:'Cadillac',pts:0},
];
const constructors = [
  {p:1,team:'Mercedes',pts:468},
  {p:2,team:'Ferrari',pts:346},
  {p:3,team:'McLaren',pts:287},
  {p:4,team:'Red Bull Racing',pts:204},
  {p:5,team:'Racing Bulls',pts:75},
  {p:6,team:'Alpine',pts:62},
  {p:7,team:'Haas F1 Team',pts:21},
  {p:8,team:'Audi',pts:16},
  {p:9,team:'Williams',pts:11},
  {p:10,team:'Aston Martin',pts:3},
  {p:11,team:'Cadillac',pts:0},
];
const nextRound = { label: 'Round 14 — Up Next', race: 'Spanish Grand Prix', date: '11–13 Sep', venue: 'Madring', roundOf: 'Rd 14/23', remaining: 10 };
const lastRoundHeadline = { title: 'Italian GP Headlines', winner: 'K. Antonelli', note1: 'From P19 to P1', note1sub: 'stunning comeback at Monza', note2: 'Leclerc', note2val: 'Crashed out, lap 2' };

// ---------- HISTORY DATA (5-year) ----------
const history = [
  {yr:2026,inprog:true,driver:'Kimi Antonelli',dteam:'Mercedes',dstat:'267 pts · leader after Rd 13',constr:'Mercedes',cstat:'468 pts · leader after Rd 13',
   note:'Season in progress. A regulation reset (new chassis + 100%-sustainable-fuel hybrid power units) reshuffled the order: Mercedes leads both championships 1-2 in the drivers\' standings behind Antonelli and Russell, with Antonelli extending his lead to 66 points after a sensational comeback win from 19th on the grid at his home Italian Grand Prix in Monza. Lando Norris has closed in with back-to-back wins in Hungary and at Zandvoort\'s emotional Dutch GP finale, while Ferrari\'s Charles Leclerc crashed out on lap 2 at Monza.'},
  {yr:2025,driver:'Lando Norris',dteam:'McLaren',dstat:'423 pts · 7 wins · 7 poles · 18 podiums',constr:'McLaren',cstat:'10th constructors\' title — passed Williams for outright 2nd all-time',
   note:'Norris took his maiden title in a three-way fight with Verstappen (2nd, within 2 points late in the year) and teammate Piastri, who led the standings for 15 rounds before finishing 3rd, 13 points back. McLaren repeated as constructors\' champion, becoming just the second team in F1 history (after 1998) to sweep both titles back-to-back in that era.'},
  {yr:2024,driver:'Max Verstappen',dteam:'Red Bull Racing',dstat:'437 pts · 9 wins · 8 poles',constr:'McLaren',cstat:'9th constructors\' title — ended a 26-year drought since 1998',
   note:'Verstappen claimed a 4th consecutive drivers\' title despite a mid-season slump as Red Bull\'s form dipped. McLaren surged in the second half to snatch the constructors\' crown from Ferrari by 14 points at the Abu Dhabi finale.'},
  {yr:2023,driver:'Max Verstappen',dteam:'Red Bull Racing',dstat:'575 pts · 19 wins · record season',constr:'Red Bull Racing',cstat:'2nd consecutive constructors\' title',
   note:'The most dominant season in F1 history: 19 wins from 22 races (86.4%), 21 podiums, and a record 575 points — including a record 10 consecutive race wins.'},
  {yr:2022,driver:'Max Verstappen',dteam:'Red Bull Racing',dstat:'454 pts · 2nd title',constr:'Red Bull Racing',cstat:'1st constructors\' title since 2013',
   note:'The first season under new ground-effect aerodynamic regulations. Verstappen and Red Bull adapted fastest, ending Mercedes\' 8-year constructors\' reign.'},
  {yr:2021,driver:'Max Verstappen',dteam:'Red Bull Racing',dstat:'395.5 pts · maiden title',constr:'Mercedes',cstat:'8th and final consecutive constructors\' title (2014–2021)',
   note:'One of the closest and most contentious title fights ever, decided on the final lap of the final race in Abu Dhabi as Verstappen passed Hamilton after a late safety-car restart.'},
];

// ---------- RECORDS DATA ----------
const recDriverCareer = [
  {num:'106',who:'Lewis Hamilton',ctx:'Most career race wins'},
  {num:'105',who:'Lewis Hamilton',ctx:'Most career pole positions'},
  {num:'207',who:'Lewis Hamilton',ctx:'Most career podium finishes'},
  {num:'5,184.5',who:'Lewis Hamilton',ctx:'Most career points'},
  {num:'344',who:'Lewis Hamilton',ctx:'Most career points-finishes'},
  {num:'77',who:'Michael Schumacher',ctx:'Most career fastest laps'},
  {num:'436',who:'Fernando Alonso',ctx:'Most career race starts (23 seasons)'},
  {num:'19',who:'Michael Schumacher',ctx:'Most hat-tricks (pole+win+fastest lap)'},
];
const recSeason = [
  {num:'19',who:'Max Verstappen, 2023',ctx:'Most wins in a single season (of 22 races)'},
  {num:'575',who:'Max Verstappen, 2023',ctx:'Most points in a single season'},
  {num:'10',who:'Max Verstappen, 2023',ctx:'Most consecutive race wins'},
  {num:'21',who:'Max Verstappen, 2023',ctx:'Most podiums in a single season'},
  {num:'86.4%',who:'Max Verstappen, 2023',ctx:'Highest win rate in a season (19/22)'},
  {num:'15',who:'Sebastian Vettel, 2011',ctx:'Most pole positions in a season'},
];
const recTitles = [
  {num:'7',who:'M. Schumacher & L. Hamilton',ctx:'Most drivers\' World Championships'},
  {num:'5',who:'M. Schumacher, 2000–04',ctx:'Most consecutive titles'},
  {num:'23y 134d',who:'Sebastian Vettel, 2010',ctx:'Youngest World Champion'},
  {num:'46y 76d',who:'Juan Manuel Fangio, 1957',ctx:'Oldest World Champion'},
  {num:'5',who:'Juan Manuel Fangio',ctx:'Titles won with 4 different constructors'},
];
const recConstructors = [
  {num:'16',who:'Ferrari',ctx:'Most constructors\' titles — the only team to enter every season since 1950'},
  {num:'10',who:'McLaren',ctx:'2nd all-time constructors\' titles (passed Williams in 2025)'},
  {num:'9',who:'Williams',ctx:'3rd all-time constructors\' titles'},
  {num:'8',who:'Mercedes',ctx:'4th all-time — includes a record 8 consecutive titles, 2014–2021'},
  {num:'87',who:'Ferrari',ctx:'Most all-time 1–2 finishes'},
];

// ---------- TRIVIA ----------
const trivia = [
  "Kimi Antonelli set the record for youngest pole position, youngest qualifying-race-fastest-lap 'hat-trick', and 2nd-youngest race win in F1 history — all before his 20th birthday, in only his second full F1 season.",
  "Lewis Hamilton switched from Mercedes to Ferrari for 2025 and sits P3 in the 2026 standings — his Mercedes seat was filled by 19-year-old Kimi Antonelli, who now leads the championship ahead of him.",
  "2026 is F1's biggest regulatory reset since the 2014 hybrid-era introduction: new lighter, more agile chassis, active aerodynamics, and power units running on 100% advanced sustainable fuel.",
  "The grid grows to 11 teams for the first time in over a decade — Audi enters as a full works manufacturer (built on the former Sauber outfit) and Cadillac, backed by General Motors, joins as an entirely new constructor.",
  "Spain hosts two rounds in 2026: the traditional Circuit de Barcelona-Catalunya race in June, and a brand-new street circuit in Madrid ('Madring') hosting the official Spanish Grand Prix in September.",
  "The Bahrain Grand Prix was relocated mid-year to Sepang, Malaysia — the circuit's first F1 race since 2017 — after regional conflict forced the cancellation of the original April Bahrain and Saudi Arabia dates.",
  "Max Verstappen's run of four consecutive drivers' titles (2021–2024) ended in 2025 when Lando Norris won a three-way fight that went down to the final rounds.",
  "The closest finish in F1 history remains 0.01 seconds — Peter Gethin over Ronnie Peterson at the 1971 Italian Grand Prix, still the fastest average-speed race ever run at the time.",
  "Ferrari is the only constructor to have entered every Formula 1 season since the championship began in 1950, and still holds the all-time record with 87 grand prix 1–2 finishes.",
  "Fernando Alonso, still on the grid in 2026 with Aston Martin, holds the all-time record for most race starts (436) across a 25-year career spanning 2001 to today.",
  "The 2026 Dutch Grand Prix was Zandvoort's last-ever Formula 1 race after the promoter's contract wasn't renewed — Lando Norris won it, his second straight victory, while home favourite Max Verstappen crashed out early after a heavy accident on the damp opening lap.",
];

// ---------- POINTS RACE DATA ----------
// Round-by-round points. Rounds 1–13 verified to sum exactly to each driver's
// official Round-13 total. Round 6 (Monaco) was revised after the fact: the
// FIA International Court of Appeal reinstated Pierre Gasly's two 5s pit-lane
// penalties on 3 Sep 2026 (McLaren/Red Bull appeal), dropping him from the
// podium (P3) to P7 there and promoting Hadjar/Piastri/Lawson one place each
// — the Round 6 column below reflects that final, official classification.
const roundNames = ['Australia','China','Japan','Miami','Canada','Monaco','Barcelona','Austria','Great Britain','Belgium','Hungary','Netherlands','Italy'];
const raceDrivers = [
  {name:'K. Antonelli', team:'Mercedes', pts:[18,29,25,28,31,25,0,15,8,25,15,23,25]},
  {name:'L. Hamilton',  team:'Ferrari',  pts:[12,21,8,10,21,18,25,10,22,12,10,14,8]},
  {name:'G. Russell',   team:'Mercedes', pts:[25,26,12,17,8,0,18,25,23,0,6,23,18]},
  {name:'C. Leclerc',   team:'Ferrari',  pts:[15,19,15,10,16,0,0,4,29,18,12,17,0]},
  {name:'L. Norris',    team:'McLaren',  pts:[10,5,10,26,7,0,15,6,18,6,25,31,12]},
  {name:'M. Verstappen',team:'Red Bull Racing', pts:[8,0,4,14,17,0,12,18,3,15,18,3,15]},
  {name:'O. Piastri',   team:'McLaren',  pts:[0,3,18,22,5,12,10,12,2,10,0,12,10]},
  {name:'I. Hadjar',    team:'Red Bull Racing', pts:[0,4,0,0,10,15,8,8,10,8,8,0,0]},
  {name:'L. Lawson',    team:'Racing Bulls', pts:[0,8,2,0,6,10,4,2,9,0,4,6,0]},
  {name:'P. Gasly',     team:'Alpine',   pts:[1,8,6,1,4,6,6,0,1,0,0,2,6]},
];

// ---------- PER-RACE TOP-10 RESULTS ----------
// One entry per completed round, keyed by round number. Each row is
// [driver name, team] in finishing order (1st place first) — position is
// just the row's index, so there's nothing else to type when a new race
// finishes. Shown when you tap/click a completed race in the Calendar tab.
// Rounds 1–12 are left exactly as previously published (not renumbered),
// even though Round 6's underlying points above were later revised by the
// Gasly appeal — see the note above the points-race data. Round 13 (Italian
// GP) is sourced directly from Formula1.com's official race classification.
const raceResults = {
  1:  [['G. Russell','Mercedes'],['K. Antonelli','Mercedes'],['C. Leclerc','Ferrari'],['L. Hamilton','Ferrari'],['L. Norris','McLaren'],['M. Verstappen','Red Bull Racing'],['P. Gasly','Alpine'],['O. Piastri','McLaren'],['I. Hadjar','Red Bull Racing'],['L. Lawson','Racing Bulls']],
  2:  [['K. Antonelli','Mercedes'],['G. Russell','Mercedes'],['L. Hamilton','Ferrari'],['C. Leclerc','Ferrari'],['L. Lawson','Racing Bulls'],['P. Gasly','Alpine'],['L. Norris','McLaren'],['I. Hadjar','Red Bull Racing'],['O. Piastri','McLaren'],['M. Verstappen','Red Bull Racing']],
  3:  [['K. Antonelli','Mercedes'],['O. Piastri','McLaren'],['C. Leclerc','Ferrari'],['G. Russell','Mercedes'],['L. Norris','McLaren'],['L. Hamilton','Ferrari'],['P. Gasly','Alpine'],['M. Verstappen','Red Bull Racing'],['L. Lawson','Racing Bulls'],['I. Hadjar','Red Bull Racing']],
  4:  [['K. Antonelli','Mercedes'],['L. Norris','McLaren'],['O. Piastri','McLaren'],['G. Russell','Mercedes'],['M. Verstappen','Red Bull Racing'],['L. Hamilton','Ferrari'],['C. Leclerc','Ferrari'],['P. Gasly','Alpine'],['I. Hadjar','Red Bull Racing'],['L. Lawson','Racing Bulls']],
  5:  [['K. Antonelli','Mercedes'],['L. Hamilton','Ferrari'],['M. Verstappen','Red Bull Racing'],['C. Leclerc','Ferrari'],['I. Hadjar','Red Bull Racing'],['G. Russell','Mercedes'],['L. Norris','McLaren'],['L. Lawson','Racing Bulls'],['O. Piastri','McLaren'],['P. Gasly','Alpine']],
  6:  [['K. Antonelli','Mercedes'],['L. Hamilton','Ferrari'],['P. Gasly','Alpine'],['I. Hadjar','Red Bull Racing'],['O. Piastri','McLaren'],['L. Lawson','Racing Bulls'],['G. Russell','Mercedes'],['C. Leclerc','Ferrari'],['L. Norris','McLaren'],['M. Verstappen','Red Bull Racing']],
  7:  [['L. Hamilton','Ferrari'],['G. Russell','Mercedes'],['L. Norris','McLaren'],['M. Verstappen','Red Bull Racing'],['O. Piastri','McLaren'],['I. Hadjar','Red Bull Racing'],['P. Gasly','Alpine'],['L. Lawson','Racing Bulls'],['K. Antonelli','Mercedes'],['C. Leclerc','Ferrari']],
  8:  [['G. Russell','Mercedes'],['M. Verstappen','Red Bull Racing'],['K. Antonelli','Mercedes'],['O. Piastri','McLaren'],['L. Hamilton','Ferrari'],['I. Hadjar','Red Bull Racing'],['L. Norris','McLaren'],['C. Leclerc','Ferrari'],['L. Lawson','Racing Bulls'],['P. Gasly','Alpine']],
  9:  [['C. Leclerc','Ferrari'],['G. Russell','Mercedes'],['L. Hamilton','Ferrari'],['L. Norris','McLaren'],['I. Hadjar','Red Bull Racing'],['L. Lawson','Racing Bulls'],['K. Antonelli','Mercedes'],['M. Verstappen','Red Bull Racing'],['O. Piastri','McLaren'],['P. Gasly','Alpine']],
  10: [['K. Antonelli','Mercedes'],['C. Leclerc','Ferrari'],['M. Verstappen','Red Bull Racing'],['L. Hamilton','Ferrari'],['O. Piastri','McLaren'],['I. Hadjar','Red Bull Racing'],['L. Norris','McLaren'],['G. Russell','Mercedes'],['L. Lawson','Racing Bulls'],['P. Gasly','Alpine']],
  11: [['L. Norris','McLaren'],['M. Verstappen','Red Bull Racing'],['K. Antonelli','Mercedes'],['C. Leclerc','Ferrari'],['L. Hamilton','Ferrari'],['I. Hadjar','Red Bull Racing'],['G. Russell','Mercedes'],['L. Lawson','Racing Bulls'],['O. Piastri','McLaren'],['P. Gasly','Alpine']],
  12: [['L. Norris','McLaren'],['K. Antonelli','Mercedes'],['G. Russell','Mercedes'],['C. Leclerc','Ferrari'],['L. Hamilton','Ferrari'],['O. Piastri','McLaren'],['L. Lawson','Racing Bulls'],['M. Verstappen','Red Bull Racing'],['P. Gasly','Alpine'],['I. Hadjar','Red Bull Racing']],
  13: [['K. Antonelli','Mercedes'],['G. Russell','Mercedes'],['M. Verstappen','Red Bull Racing'],['L. Norris','McLaren'],['O. Piastri','McLaren'],['L. Hamilton','Ferrari'],['P. Gasly','Alpine'],['A. Lindblad','Racing Bulls'],['F. Colapinto','Alpine'],['Y. Tsunoda','Racing Bulls']],
};

// ---------- TICKET PRICES DATA ----------
// Sourced from GPDestinations.com 2026 F1 ticket price analysis (official circuit/promoter listings, 3-day tickets unless noted)
const tickets = [
  {r:1, gp:'Australian GP', ga:258, cheap:377, main:549, avg:395, note:'4-day pass'},
  {r:2, gp:'Chinese GP', ga:68, cheap:226, main:367, avg:220},
  {r:3, gp:'Japanese GP', ga:122, cheap:140, main:639, avg:300},
  {r:4, gp:'Miami GP', ga:650, cheap:670, main:1175, avg:832},
  {r:5, gp:'Canadian GP', ga:299, cheap:319, main:777, avg:465},
  {r:6, gp:'Monaco GP', ga:293, cheap:1080, main:1289, avg:887},
  {r:7, gp:'Spanish GP (Barcelona)', ga:263, cheap:409, main:737, avg:470},
  {r:8, gp:'Austrian GP', ga:184, cheap:321, main:796, avg:434},
  {r:9, gp:'British GP', ga:431, cheap:618, main:959, avg:669},
  {r:10, gp:'Belgian GP', ga:240, cheap:368, main:731, avg:446},
  {r:11, gp:'Hungarian GP', ga:187, cheap:234, main:737, avg:386},
  {r:12, gp:'Dutch GP', ga:372, cheap:536, main:1024, avg:644, note:'final race at Zandvoort'},
];
