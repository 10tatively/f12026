/* ==========================================================================
   F1 2026 DASHBOARD — APP LOGIC
   Rendering, tab switching, and PWA registration.
   Do not put season data here — that all lives in js/data.js.
   ========================================================================== */

// ---------- LAST UPDATED BADGE ----------
document.addEventListener('DOMContentLoaded', () => {
  const badge = document.getElementById('lastUpdated');
  if (badge) badge.textContent = LAST_UPDATED;
});

// ---------- HERO ----------
document.getElementById('heroLeader').innerHTML = `${hero.leaderName} <small>${hero.leaderTeam} · ${hero.leaderPts} pts</small>`;
document.getElementById('heroGap').innerHTML = `${hero.gap} <small>${hero.gapDriver}, ${hero.gapTeam} · ${hero.gapPts} pts</small>`;
document.getElementById('heroRound').innerHTML = `${hero.roundLabel} <small>${hero.roundSub}</small>`;
document.getElementById('heroNext').innerHTML = `${hero.nextRace} <small>${hero.nextSub}</small>`;
document.getElementById('railFill').style.width = hero.railPct + '%';
document.getElementById('railMarker').style.left = hero.railPct + '%';

// ---------- CALENDAR ----------
const calGrid = document.getElementById('calGrid');
races.forEach(rc=>{
  const results = typeof raceResults !== 'undefined' ? raceResults[rc.r] : null;
  const hasResult = rc.status==='done' && !!results;

  const card = document.createElement('div');
  card.className = 'cal-card' + (rc.status==='done'?' done':'') + (rc.status==='now'?' now':'') + (hasResult?' clickable':'');
  if (hasResult) {
    card.tabIndex = 0;
    card.setAttribute('role','button');
    card.setAttribute('aria-expanded','false');
  }
  let tags = '';
  if(rc.sprint) tags += '<span class="tag sprint">SPRINT</span>';
  if(rc.isNew) tags += '<span class="tag new">NEW</span>';
  if(rc.status==='now') tags += '<span class="tag now">THIS WEEKEND</span>';

  const resultRows = hasResult ? results.map((row,i)=>`
    <div class="res-row">
      <span class="res-pos">${i+1}</span>
      <span class="res-drv"><span class="teambar" style="background:${teamColor[row[1]]}"></span>${row[0]}</span>
      <span class="res-team">${row[1]}</span>
    </div>`).join('') : '';

  card.innerHTML = `
    <div class="rnd"><span>ROUND ${rc.r} / 23</span><span>${tags}</span></div>
    <div class="gp">${rc.gp}</div>
    <div class="venue">${rc.venue}</div>
    <div class="date">${rc.date}</div>
    ${rc.winner ? `<div class="winner"><span class="dot" style="background:${teamColor[rc.team]}"></span>Winner: <b>${rc.winner}</b></div>` : `<div class="winner" style="color:var(--muted2)">— result pending —</div>`}
    ${hasResult ? `<div class="expand-hint">Top 10 <span class="chevron">▾</span></div><div class="cal-result">${resultRows}</div>` : ''}
  `;
  calGrid.appendChild(card);

  if (hasResult) {
    const toggle = () => {
      const open = card.classList.toggle('open');
      card.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (e)=>{
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  }
});

// ---------- STANDINGS ----------
const driverTower = document.getElementById('driverTower');
drivers.forEach(d=>{
  const row = document.createElement('div');
  row.className = 'trow' + (d.p===1?' p1':'');
  row.innerHTML = `
    <div class="pos">${d.p}</div>
    <div class="drv"><span class="teambar" style="background:${teamColor[d.team]}"></span>
      <div style="min-width:0"><div class="name">${d.name}</div><div class="team">${d.team}</div></div>
    </div>
    <div class="pts">${d.pts}<small>PTS</small></div>
  `;
  driverTower.appendChild(row);
});

const constrList = document.getElementById('constrList');
constructors.forEach(c=>{
  const row = document.createElement('div');
  row.className = 'mini-row';
  row.innerHTML = `<span class="l"><span class="sw" style="background:${teamColor[c.team]}"></span>${c.p}. ${c.team}</span><span class="v">${c.pts}</span>`;
  constrList.appendChild(row);
});

const nextRoundEl = document.getElementById('nextRoundCard');
if (nextRoundEl) {
  nextRoundEl.innerHTML = `
    <h3>${nextRound.label}</h3>
    <div class="mini-row"><span class="l">${nextRound.race}</span><span class="v mono">${nextRound.date}</span></div>
    <div class="mini-row"><span class="l">${nextRound.venue}</span><span class="v mono">${nextRound.roundOf}</span></div>
    <div class="mini-row"><span class="l">Remaining rounds</span><span class="v mono">${nextRound.remaining}</span></div>
  `;
}
const lastHeadlineEl = document.getElementById('lastHeadlineCard');
if (lastHeadlineEl) {
  lastHeadlineEl.innerHTML = `
    <h3>${lastRoundHeadline.title}</h3>
    <div class="mini-row"><span class="l">Winner</span><span class="v">${lastRoundHeadline.winner}</span></div>
    <div class="mini-row"><span class="l">${lastRoundHeadline.note1}</span><span class="v">${lastRoundHeadline.note1sub}</span></div>
    <div class="mini-row"><span class="l">${lastRoundHeadline.note2}</span><span class="v" style="color:var(--red)">${lastRoundHeadline.note2val}</span></div>
  `;
}

// ---------- HISTORY ----------
const historyList = document.getElementById('historyList');
history.forEach(h=>{
  const block = document.createElement('div');
  block.className = 'yr-block';
  block.innerHTML = `
    <div class="yr-top">
      <div class="yr-num">${h.yr}</div>
      <div class="yr-body">
        <div class="yr-champs">
          <div class="champ-line">
            <div class="lbl">Drivers' Champion${h.inprog?' (leader)':''}</div>
            <div class="who"><span class="teambar" style="background:${teamColor[h.dteam]}; height:16px;"></span>${h.driver} <span style="color:var(--muted); font-weight:400; font-size:13px;">— ${h.dteam}</span></div>
            <div class="stat">${h.dstat}</div>
          </div>
          <div class="champ-line">
            <div class="lbl">Constructors' Champion${h.inprog?' (leader)':''}</div>
            <div class="who"><span class="teambar" style="background:${teamColor[h.constr]}; height:16px;"></span>${h.constr}</div>
            <div class="stat">${h.cstat}</div>
          </div>
        </div>
        <div class="yr-note">${h.note}</div>
      </div>
    </div>
  `;
  historyList.appendChild(block);
});

// ---------- RECORDS ----------
function fillRec(id, arr){
  const el = document.getElementById(id);
  arr.forEach(r=>{
    const c = document.createElement('div');
    c.className = 'rec-card';
    c.innerHTML = `<div class="lbl">${r.ctx}</div><div class="num">${r.num}</div><div class="who">${r.who}</div>`;
    el.appendChild(c);
  });
}
fillRec('recDriverCareer', recDriverCareer);
fillRec('recSeason', recSeason);
fillRec('recTitles', recTitles);
fillRec('recConstructors', recConstructors);

// ---------- TRIVIA ----------
const triviaGrid = document.getElementById('triviaGrid');
trivia.forEach((t,i)=>{
  const c = document.createElement('div');
  c.className = 'triv-card';
  c.innerHTML = `<div class="tnum">${String(i+1).padStart(2,'0')}</div><p>${t}</p>`;
  triviaGrid.appendChild(c);
});

// ---------- POINTS RACE ----------
raceDrivers.forEach(d=>{
  let cum = []; let t=0;
  d.pts.forEach(p=>{ t+=p; cum.push(t); });
  d.cum = cum;
});

const raceChart = document.getElementById('raceChart');
const ROUNDS_SO_FAR = roundNames.length;
const rowH = 38, rowGap = 4;
raceChart.style.height = (raceDrivers.length*(rowH+rowGap) + 14) + 'px';
const barEls = {};
raceDrivers.forEach(d=>{
  const row = document.createElement('div');
  row.className = 'race-row';
  row.innerHTML = `<div class="bar" style="background:${teamColor[d.team]}"><span class="bar-label">${d.name}</span></div><span class="bar-pts">0</span>`;
  raceChart.appendChild(row);
  barEls[d.name] = row;
});

function renderRound(roundIdx){ // 0-based index into cum array
  const vals = raceDrivers.map(d=>({...d, val: d.cum[roundIdx]}));
  vals.sort((a,b)=>b.val-a.val);
  const maxVal = vals[0].val || 1;
  vals.forEach((d,i)=>{
    const row = barEls[d.name];
    row.style.top = (i*(rowH+rowGap)) + 'px';
    const bar = row.querySelector('.bar');
    bar.style.width = Math.max((d.val/maxVal*100),3) + '%';
    row.querySelector('.bar-pts').textContent = d.val;
  });
  document.getElementById('roundNum').textContent = roundIdx+1;
  document.getElementById('roundName').textContent = roundNames[roundIdx] + ' GP';
}

const slider = document.getElementById('roundSlider');
slider.max = ROUNDS_SO_FAR;
slider.value = ROUNDS_SO_FAR;
renderRound(ROUNDS_SO_FAR - 1);

slider.addEventListener('input', ()=> renderRound(parseInt(slider.value)-1));

let playing = false, playTimer = null;
document.getElementById('playBtn').addEventListener('click', function(){
  if(playing){
    clearInterval(playTimer); playing=false; this.textContent='▶'; return;
  }
  playing = true; this.textContent='❚❚';
  if(parseInt(slider.value) >= ROUNDS_SO_FAR) slider.value = 1;
  renderRound(parseInt(slider.value)-1);
  playTimer = setInterval(()=>{
    let v = parseInt(slider.value);
    if(v>=ROUNDS_SO_FAR){ clearInterval(playTimer); playing=false; document.getElementById('playBtn').textContent='▶'; return; }
    v++; slider.value = v; renderRound(v-1);
  }, 1000);
});

// ---------- TICKET PRICES ----------
const ticketBody = document.getElementById('ticketBody');
tickets.forEach(t=>{
  const row = document.createElement('tr');
  row.innerHTML = `
    <td class="mono">${t.r}</td>
    <td class="name">${t.gp}${t.note?' <span style="color:var(--muted2);font-family:Inter,sans-serif;font-weight:400;font-size:11px;">('+t.note+')</span>':''}</td>
    <td class="num">$${t.ga}</td>
    <td class="num">$${t.cheap}</td>
    <td class="num">$${t.main}</td>
    <td class="num" style="color:var(--gold); font-weight:600;">$${t.avg}</td>
  `;
  ticketBody.appendChild(row);
});

// ---------- TABS ----------
document.querySelectorAll('.navbtn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.navbtn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.panel-section').forEach(s=>s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
    window.scrollTo({top: document.querySelector('.nav-wrap').offsetTop - 1, behavior:'smooth'});
  });
});

// ==========================================================================
// PWA: service worker registration + install prompt + update banner
// ==========================================================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(reg => {
      // Check for a newer service worker on every load
      reg.addEventListener('updatefound', () => {
        const newWorker = reg.installing;
        if (!newWorker) return;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            showUpdateBanner(reg);
          }
        });
      });
    }).catch(err => console.warn('SW registration failed:', err));
  });

  // When the new SW takes control, reload once to show fresh content
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
}

function showUpdateBanner(reg) {
  const banner = document.createElement('div');
  banner.id = 'updateBanner';
  banner.innerHTML = `
    <span>A newer version of this dashboard is available.</span>
    <button id="updateBtn">Refresh</button>
  `;
  document.body.appendChild(banner);
  document.getElementById('updateBtn').addEventListener('click', () => {
    if (reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });
    banner.remove();
  });
}

// ---------- Install prompt (Android/desktop Chrome) ----------
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById('installBtn');
  if (btn) btn.style.display = 'inline-flex';
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('installBtn');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    btn.style.display = 'none';
  });
  window.addEventListener('appinstalled', () => { btn.style.display = 'none'; });
});
