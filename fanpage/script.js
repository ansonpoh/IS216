// app.js
// Facts used by the wheel
const facts = [
  "Born March 1, 1994 in London, Ontario; raised in Stratford.",
  "Middle name is Drew — hence the brand name “Drew House.”",
  "Self-taught on drums, guitar, piano; started playing drums as a kid.",
  "Left-handed; often plays left-handed guitar live.",
  "Posted YouTube covers as a kid; discovered by Scooter Braun.",
  "Usher became an early mentor after the discovery.",
  "Signed to a major label soon after being discovered online.",
  "Debut EP: “My World” (2009) introduced him to a global audience.",
  "Debut album: “My World 2.0” (2010) with the smash hit “Baby.”",
  "Concert film “Never Say Never” (2011) was a major box-office hit.",
  "Holiday album “Under the Mistletoe” (2011) debuted at #1 on Billboard 200.",
  "“Believe” era (2012) brought a more mature pop sound and a world tour.",
  "R&B-leaning “Journals” (2013) became a cult favorite among fans.",
  "“Where Are Ü Now” with Skrillex & Diplo (2015) won a GRAMMY.",
  "“Purpose” (2015) era produced “What Do You Mean?,” “Sorry,” and “Love Yourself.”",
  "Purpose World Tour (2016–2017) packed arenas worldwide.",
  "Jumped onto “Despacito (Remix)” in 2017 — a global chart storm.",
  "Featured on Dan + Shay’s “10,000 Hours” (2019) — GRAMMY win in 2021.",
  "“Changes” (2020) leaned into sleek R&B textures.",
  "“Stuck with U” with Ariana Grande (2020) raised funds for charity.",
  "“Justice” (2021) delivered “Peaches” and other radio staples.",
  "“STAY” with The Kid LAROI (2021) spent weeks at #1 around the world.",
  "Remixed Wizkid & Tems’ “Essence” (2021), boosting Afrobeats on pop radio.",
  "Teamed with Ed Sheeran on “I Don’t Care” (2019), a worldwide hit.",
  "Joined DJ Khaled for “I’m the One” and “No Brainer.”",
  "Worked with Major Lazer on “Cold Water” and DJ Snake on “Let Me Love You.”",
  "Launched the Drew House clothing label — comfy, smiley-logo vibes.",
  "Known for high-production shows: lasers, pyro, huge choreo moments.",
  "Has multiple GRAMMY wins, plus many Billboard, AMA, and Juno awards.",
  "Documentary projects include the 2011 film and YouTube’s “Seasons” (2020).",
  "Fanbase nickname: “Beliebers.”",
  "Released acoustic projects like “My Worlds Acoustic” (2010) and “Believe Acoustic” (2013).",
  "Collaborates across genres: pop, R&B, EDM, hip-hop, country, Afrobeats, Latin.",
  "Frequently experiments with vocal production and falsetto-driven hooks.",
  "Early single “One Time” (2009) went Platinum in multiple countries.",
  "Known for switching styles across eras — hair, fashion, and stage design."
];

const spinBtn  = document.getElementById("spin");
const rolled   = document.getElementById("rolled");
const wheelEl  = document.getElementById("wheel");
const factList = document.getElementById("fact-list");
const gallery  = document.getElementById("gallery");

let rotation = 0;           // cumulative rotation (deg)
let spinning = false;       // lock to prevent double clicks

// Build the wheel background and labels dynamically using a conic-gradient
(function buildWheel(){
  const n = facts.length;
  if (!n) return;

  const step = 360 / n;

  // Force layout + get radius for labels
  const size = Math.min(wheelEl.offsetWidth || 320, wheelEl.offsetHeight || 320);
  const radius = size / 2 - 38;

  // Colors for slices
  const colors = Array.from({ length: n }, (_, i) =>
    `hsl(${Math.round((360 * i) / n)}, 85%, 65%)`
  );

  // Build VALID stops string: "color a° b°, color c° d°, ..."
  const stops = colors
    .map((c, i) => `${c} ${i * step}deg ${(i + 1) * step}deg`)
    .join(", ");

  // Layer a radial highlight under the conic gradient (never pure black)
  // Start conic FROM -90deg so slice 0 begins at 12 o’clock.
  const conic = `conic-gradient(from -90deg, ${stops})`;
  const glow  = `radial-gradient(circle at 50% 45%, rgba(255,255,255,.06), rgba(0,0,0,.22) 70%)`;

  // Apply both (radial on top adds depth; conic provides the slices)
  wheelEl.style.background = `${glow}, ${conic}`;

  // Rebuild labels at slice centers
  wheelEl.querySelectorAll(".label").forEach((l) => l.remove());
  for (let i = 0; i < n; i++) {
    const center = i * step + step / 2; // measured from 3 o’clock
    const label = document.createElement("span");
    label.className = "label";
    label.textContent = (i + 1).toString();
    // rotate to the slice center (from 12 o’clock), translate outward, rotate upright
    label.style.transform = `rotate(${center - 90}deg) translate(${radius}px) rotate(${90 - center}deg) translate(-50%, -50%)`;
    wheelEl.appendChild(label);
  }
})();

// Spin logic: choose a random segment, compute the angle so that its center lands at the pointer (top)
function spinWheel(){
  if (spinning) return;
  spinning = true;

  const n = facts.length;
  const step = 360 / n;

  // Pick target index
  const idx = Math.floor(Math.random() * n);
  const center = idx * step + step / 2;

  // Number of full spins for drama
  const spins = 4 + Math.floor(Math.random() * 3); // 4–6 full turns

  // Current rotation modulo 360
  const current = ((rotation % 360) + 360) % 360;

  // We want the chosen center to align with 0deg at the end.
  // So the delta to add is (360 - center) - current, plus full spins.
  const theta = (center - 90 + 360) % 360;     // center measured from 12 o’clock
  const delta = (360 - theta) - current;       // bring chosen slice center to 0° (top)
  const target = rotation + spins * 360 + delta;

  // Apply rotation
  wheelEl.style.transform = `rotate(${target}deg)`;

  // After the animation, announce the fact and unlock
  const onDone = () => {
    wheelEl.removeEventListener("transitionend", onDone);
    rotation = target;
    rolled.textContent = facts[idx];
    // little emphasis flash
    rolled.style.transition = "background .35s, padding .35s";
    rolled.style.padding = "0.2rem 0.4rem";
    rolled.style.background = "#1d2740";
    setTimeout(() => { rolled.style.background = ""; rolled.style.padding = ""; }, 380);
    spinning = false;
  };
  wheelEl.addEventListener("transitionend", onDone, { once: true });
}

spinBtn?.addEventListener("click", spinWheel);
wheelEl?.addEventListener("click", spinWheel); // click wheel to spin as well
wheelEl?.setAttribute("tabindex","0");
wheelEl?.addEventListener("keydown", (e)=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); spinWheel(); }});

// simple lightbox for gallery (unchanged)
let overlay;
function openLightbox(src, alt){
  overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.innerHTML = `
    <style>
      .lightbox{position:fixed;inset:0;background:rgba(0,0,0,.85);display:grid;place-items:center;z-index:9999}
      .lightbox img{max-width:92vw;max-height:82vh;border-radius:12px;box-shadow:0 25px 60px rgba(0,0,0,.6)}
      .lightbox .x{position:fixed;top:16px;right:16px;font-size:28px;color:#fff;cursor:pointer}
    </style>
    <span class="x" aria-label="Close">×</span>
    <img src="${src}" alt="${alt}">
  `;
  overlay.addEventListener("click", e => { if(e.target === overlay || e.target.classList.contains("x")) overlay.remove(); });
  document.body.appendChild(overlay);
}
gallery?.addEventListener("click", (e) => {
  const img = e.target.closest("img");
  if(!img) return;
  openLightbox(img.src, img.alt);
});

// tiny enhancement: clicking a fact highlights it briefly
factList?.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if(!li) return;
  li.style.transition = "background .4s";
  li.style.background = "#1d2740";
  setTimeout(() => li.style.background = "", 450);
});