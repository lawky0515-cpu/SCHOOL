const students = [
  {
    id: "evan-ryan-lazarus-anak-warlther",
    name: "EVAN RYAN LAZARUS ANAK WARLTHER",
    className: "TAHUN 5",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" },
      { title: "KEJOHANAN OLAHRAGA - LOMPAT JAUH", level: "校级", rank: "金", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "khairul-ikhwan-bin-abdullah",
    name: "KHAIRUL IKHWAN BIN ABDULLAH",
    className: "TAHUN 5",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" },
      { title: "TALI TEMALI BERKUMPULAN PUTERA", level: "州级", rank: "铜", year: "2026", category: "eMas" }
    ]
  },
  {
    id: "morris-lau-jia-rong",
    name: "MORRIS LAU JIA RONG",
    className: "TAHUN 5",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "daniel-hanniest-bin-nazry",
    name: "DANIEL HANNIEST BIN NAZRY",
    className: "TAHUN 5",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "alvin-cristian-nontias",
    name: "ALVIN CRISTIAN NONTIAS",
    className: "TAHUN 6",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" },
      { title: "KEJOHANAN OLAHRAGA - LONTAR PELURU", level: "校级", rank: "银", year: "2026", category: "MSS" },
      { title: "PENGUCAPAN AWAM INDIVIDU PUTERA", level: "州级", rank: "金", year: "2026", category: "eMas" }
    ]
  },
  {
    id: "phang-ju-hien",
    name: "PHANG JU HIEN",
    className: "TAHUN 5",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "braydernd-dickenson-anak-blury",
    name: "BRAYDERND DICKENSON ANAK BLURY",
    className: "TAHUN 5",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "michael-faith-anak-mola",
    name: "MICHAEL FAITH ANAK MOLA",
    className: "TAHUN 4",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "lester-engkamat-anak-samson",
    name: "LESTER ENGKAMAT ANAK SAMSON",
    className: "TAHUN 4",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "greadballe-owen-sintal-anak-miguel-lanie",
    name: "GREADBALLE OWEN SINTAL ANAK MIGUEL LANIE",
    className: "TAHUN 4",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" },
      { title: "KEJOHANAN OLAHRAGA - LOMPAT JAUH", level: "校级", rank: "铜", year: "2026", category: "MSS" },
      { title: "TALI TEMALI BERKUMPULAN PUTERA", level: "州级", rank: "铜", year: "2026", category: "eMas" }
    ]
  },
  {
    id: "kon-sen-fook",
    name: "KON SEN FOOK",
    className: "TAHUN 6",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "victor-loke",
    name: "VICTOR LOKE",
    className: "TAHUN 4",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "danisha-hii",
    name: "DANISHA HII",
    className: "TAHUN 6",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" },
      { title: "KEJOHANAN BOLA JARING", level: "校级", rank: "铜", year: "2026", category: "MSS" },
      { title: "KEJOHANAN OLAHRAGA - LOMPAT JAUH", level: "校级", rank: "银", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "elyysia-sofia-yati-anak-mosses",
    name: "ELYYSIA SOFIA YATI ANAK MOSSES",
    className: "TAHUN 6",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" },
      { title: "KEJOHANAN BOLA JARING", level: "校级", rank: "铜", year: "2026", category: "MSS" },
      { title: "KEJOHANAN OLAHRAGA - LOMPAT JAUH", level: "校级", rank: "银", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "christy-enzayan-bong-anak-susana-lenjai",
    name: "CHRISTY ENZAYAN BONG ANAK SUSANA LENJAI",
    className: "TAHUN 5",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" },
      { title: "KEJOHANAN BOLA JARING", level: "校级", rank: "铜", year: "2026", category: "MSS" },
      { title: "KEJOHANAN OLAHRAGA - LOMPAT TINGGI", level: "校级", rank: "铜", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "christy-valencia-layam-anak-jerampang",
    name: "CHRISTY VALENCIA LAYAM ANAK JERAMPANG",
    className: "TAHUN 6",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" },
      { title: "KEJOHANAN BOLA JARING", level: "校级", rank: "铜", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "evelyne-clarissa-anak-warlther",
    name: "EVELYNE CLARISSA ANAK WARLTHER",
    className: "TAHUN 6",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" },
      { title: "KEJOHANAN BOLA JARING", level: "校级", rank: "铜", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "adriana-dazellya-anak-blury",
    name: "ADRIANA DAZELLYA ANAK BLURY",
    className: "TAHUN 6",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" },
      { title: "KEJOHANAN BOLA JARING", level: "校级", rank: "铜", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "lannievanessa-anak-lanyau",
    name: "LANNIEVANESSA ANAK LANYAU",
    className: "TAHUN 5",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" },
      { title: "KEJOHANAN BOLA JARING", level: "校级", rank: "铜", year: "2026", category: "MSS" },
      { title: "KEJOHANAN OLAHRAGA - LONTAR PELURU", level: "校级", rank: "铜", year: "2026", category: "MSS" },
      { title: "KEJOHANAN OLAHRAGA - LARIAN 100M", level: "校级", rank: "金", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "asha-nathania-piah-anak-allister",
    name: "ASHA NATHANIA PIAH ANAK ALLISTER",
    className: "TAHUN 4",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "luxxiana-orlee-lunar-anak-jerry",
    name: "LUXXIANA ORLEE LUNAR ANAK JERRY",
    className: "TAHUN 4",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "kyraalexia-nawah-anak-donny",
    name: "KYRAALEXIA NAWAH ANAK DONNY",
    className: "TAHUN 4",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" },
      { title: "KEJOHANAN BOLA JARING", level: "校级", rank: "铜", year: "2026", category: "MSS" },
      { title: "KEJOHANAN OLAHRAGA - LARIAN 200M", level: "校级", rank: "金", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "clara-isabel-ng",
    name: "CLARA ISABEL NG",
    className: "TAHUN 4",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" },
      { title: "KEJOHANAN BOLA JARING", level: "校级", rank: "铜", year: "2026", category: "MSS" },
      { title: "KEJOHANAN OLAHRAGA - LOMPAT TINGGI", level: "校级", rank: "金", year: "2026", category: "MSS" },
      { title: "KEJOHANAN OLAHRAGA - LOMPAT TINGGI", level: "州级", rank: "银", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "pretty-anak-john-lee",
    name: "PRETTY ANAK JOHN LEE",
    className: "TAHUN 4",
    awards: [
      { title: "KEJOHANAN BOLA KERANJANG", level: "州级", rank: "第四", year: "2026", category: "MSS" },
      { title: "KEJOHANAN OLAHRAGA - LONTAR PELURU", level: "校级", rank: "银", year: "2026", category: "MSS" }
    ]
  },
  {
    id: "aeries-tiong-xin-ning",
    name: "AERIES TIONG XIN NING",
    className: "TAHUN 6",
    awards: [
      { title: "PERTANDINGAN PENULISAN KREATIF BC SR (PROSA)", level: "县级", rank: "金", year: "2026", category: "eMas" },
      { title: "PERTANDINGAN PENULISAN KREATIF BC SR (SAJAK)", level: "县级", rank: "铜", year: "2026", category: "eMas" },
      { title: "PERTADINGAN DEKLAMASI SAJAK BC SR TAHAP 2", level: "县级", rank: "第五", year: "2026", category: "eMas" }
    ]
  },
  {
    id: "muhammad-aiman-hakim-bin-adam-mukhriz",
    name: "MUHAMMAD AIMAN HAKIM BIN ADAM MUKHRIZ",
    className: "TAHUN 5",
    awards: [
      { title: "TALI TEMALI BERKUMPULAN PUTERA", level: "州级", rank: "铜", year: "2026", category: "eMas" }
    ]
  },
  {
    id: "jennifer-lesai-anak-kelvin",
    name: "JENNIFER LESAI ANAK KELVIN",
    className: "TAHUN 3",
    awards: [
      { title: "PERTADINGAN DEKLAMASI SAJAK BC SR TAHAP 1", level: "县级", rank: "铜", year: "2026", category: "eMas" }
    ]
  },
  {
    id: "giann-lee-zhi-en",
    name: "GIANN LEE ZHI EN",
    className: "TAHUN 2",
    awards: [
      { title: "PERTADINGAN DEKLAMASI SAJAK BC SR TAHAP 1", level: "县级", rank: "铜", year: "2026", category: "eMas" }
    ]
  },
  {
    id: "vellentino-akim-anak-merilia",
    name: "VELLENTINO AKIM ANAK MERILIA",
    className: "TAHUN 3",
    awards: [
      { title: "PERTADINGAN DEKLAMASI SAJAK BC SR TAHAP 1", level: "县级", rank: "铜", year: "2026", category: "eMas" }
    ]
  },
  {
    id: "dalisa-anak-dawi-martin",
    name: "DALISA ANAK DAWI MARTIN",
    className: "TAHUN 1",
    awards: [
      { title: "PERTADINGAN DEKLAMASI SAJAK BC SR TAHAP 1", level: "县级", rank: "金", year: "2026", category: "eMas" }
    ]
  }
];

const rankMap = {
  金: { countId: "goldCount", label: "金奖", className: "rank-gold" },
  银: { countId: "silverCount", label: "银奖", className: "rank-silver" },
  铜: { countId: "bronzeCount", label: "铜奖", className: "rank-bronze" },
  第四: { countId: "fourthCount", label: "第四名", className: "rank-fourth" },
  第五: { countId: "fifthCount", label: "第五名", className: "rank-fifth" }
};

const levelOrder = ["校级", "区级", "县级", "省级", "州级", "全国级", "国际级"];

const homeView = document.querySelector("#homeView");
const detailView = document.querySelector("#detailView");
const studentGrid = document.querySelector("#studentGrid");
const studentProfile = document.querySelector("#studentProfile");
const awardList = document.querySelector("#awardList");
const backButton = document.querySelector("#backButton");

function normalizeAwardLevels() {
  students.forEach((student) => {
    student.awards.forEach((award) => {
      if (award.title.includes("BOLA KERANJANG")) {
        award.level = "县级";
      }

      if (award.title.includes("BOLA JARING") || award.title.includes("KEJOHANAN OLAHRAGA")) {
        award.level = "区级";
      }
    });
  });
}

function countAwardsByRank() {
  const counts = { 金: 0, 银: 0, 铜: 0, 第四: 0, 第五: 0 };

  students.forEach((student) => {
    student.awards.forEach((award) => {
      if (counts[award.rank] !== undefined) {
        counts[award.rank] += 1;
      }
    });
  });

  Object.entries(counts).forEach(([rank, count]) => {
    document.querySelector(`#${rankMap[rank].countId}`).textContent = count;
  });
}

function getStudentAwardTotal(student) {
  return student.awards.length;
}

function getStudentMedalSummary(student) {
  const counts = { 金: 0, 银: 0, 铜: 0 };

  student.awards.forEach((award) => {
    if (counts[award.rank] !== undefined) {
      counts[award.rank] += 1;
    }
  });

  return `金 ${counts.金} · 银 ${counts.银} · 铜 ${counts.铜}`;
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

function getAvatarMarkup(student) {
  return `<span class="avatar avatar-initials" aria-label="${student.name} 的头像">${getInitials(student.name)}</span>`;
}

function renderStudents() {
  studentGrid.innerHTML = students
    .map(
      (student) => `
        <button class="student-card" type="button" data-student-id="${student.id}">
          ${getAvatarMarkup(student)}
          <span>
            <span class="student-name">${student.name}</span>
            <span class="class-name">${student.className}</span>
            <span class="medal-summary">${getStudentMedalSummary(student)}</span>
            <span class="award-total">共 ${getStudentAwardTotal(student)} 项奖项</span>
          </span>
        </button>
      `
    )
    .join("");
}

function groupAwardsByLevel(awards) {
  return levelOrder
    .map((level) => ({
      level,
      awards: awards.filter((award) => award.level === level)
    }))
    .filter((group) => group.awards.length > 0);
}

function renderStudentDetail(student) {
  studentProfile.innerHTML = `
    ${getAvatarMarkup(student)}
    <div>
      <h2>${student.name}</h2>
      <p class="class-name">${student.className}</p>
      <p class="award-total">共获得 ${getStudentAwardTotal(student)} 项奖项</p>
    </div>
  `;

  awardList.innerHTML = groupAwardsByLevel(student.awards)
    .map(
      (group) => `
        <article class="level-group">
          <div class="level-title">
            <h3>${group.level}</h3>
            <span>${group.awards.length} 项</span>
          </div>
          ${group.awards
            .map(
              (award) => `
                <div class="award-item">
                  <span class="rank-badge ${rankMap[award.rank].className}">${rankMap[award.rank].label}</span>
                  <div>
                    <p class="award-name">${award.title}</p>
                    <p class="award-meta">${award.level}赛事${award.category ? ` · ${award.category}` : ""}</p>
                  </div>
                  <span class="award-year">${award.year}</span>
                </div>
              `
            )
            .join("")}
        </article>
      `
    )
    .join("");
}

function showDetail(studentId) {
  const student = students.find((item) => item.id === studentId);
  if (!student) return;

  renderStudentDetail(student);
  homeView.hidden = true;
  detailView.hidden = false;
  backButton.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHome() {
  homeView.hidden = false;
  detailView.hidden = true;
  backButton.hidden = true;
}

studentGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-student-id]");
  if (card) {
    showDetail(card.dataset.studentId);
  }
});

backButton.addEventListener("click", showHome);

normalizeAwardLevels();
countAwardsByRank();
renderStudents();
