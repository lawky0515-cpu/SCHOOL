const googleSheetCsvUrl = "https://docs.google.com/spreadsheets/d/16SmLH_1JUQLcbUol4D5gfTyIH_ymbjHRMN1HoEFG5Ik/export?format=csv&gid=0";

let students = [
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

const levelLabels = {
  校级: "校级 / Sekolah",
  区级: "区级 / Zon",
  县级: "县级 / Daerah",
  省级: "省级 / Wilayah",
  州级: "州级 / Negeri",
  全国级: "全国级 / Kebangsaan",
  国际级: "国际级 / Antarabangsa"
};

const homeView = document.querySelector("#homeView");
const detailView = document.querySelector("#detailView");
const summary = document.querySelector(".summary");
const rankModal = document.querySelector("#rankModal");
const rankModalTitle = document.querySelector("#rankModalTitle");
const rankModalBody = document.querySelector("#rankModalBody");
const closeRankModal = document.querySelector("#closeRankModal");
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

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let insideQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"' && insideQuotes && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (char === "\r" && next === "\n") {
        i += 1;
      }
      row.push(cell);
      if (row.some((value) => value.trim() !== "")) {
        rows.push(row);
      }
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cell);
  if (row.some((value) => value.trim() !== "")) {
    rows.push(row);
  }

  return rows;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function mapSheetRank(value) {
  const normalized = String(value || "").trim().toUpperCase();
  const ranks = {
    "TEMPAT 1": "金",
    "TEMPAT 2": "银",
    "TEMPAT 3": "铜",
    "TEMPAT 4": "第四",
    "TEMPAT 5": "第五",
    "1": "金",
    "2": "银",
    "3": "铜",
    "4": "第四",
    "5": "第五",
    "金": "金",
    "银": "银",
    "铜": "铜",
    "第四": "第四",
    "第五": "第五"
  };

  return ranks[normalized] || "";
}

function mapSheetLevel(value) {
  const normalized = String(value || "").trim().toUpperCase();
  const levels = {
    SEKOLAH: "校级",
    ZON: "区级",
    DAERAH: "县级",
    BAHAGIAN: "州级",
    NEGERI: "州级",
    KEBANGSAAN: "全国级",
    ANTARABANGSA: "国际级",
    校级: "校级",
    区级: "区级",
    县级: "县级",
    省级: "省级",
    州级: "州级",
    全国级: "全国级",
    国际级: "国际级"
  };

  return levels[normalized] || value || "";
}

function rowsToStudents(rows) {
  const [headerRow, ...dataRows] = rows;
  const headers = headerRow.map((header) => String(header || "").trim());
  const studentMap = new Map();

  dataRows.forEach((row) => {
    const record = Object.fromEntries(headers.map((header, index) => [header, row[index] || ""]));
    const name = String(record["NAMA PENUH MURID"] || record.name || "").trim();
    const rank = mapSheetRank(record.PENCAPAIAN || record.rank);

    if (!name) return;

    if (!studentMap.has(name)) {
      studentMap.set(name, {
        id: slugify(name),
        name,
        className: record.KELAS || record.className || "",
        awards: []
      });
    }

    if (!rank) return;

    const mainProgram = record["PROGRAM/PERTANDINGAN"] || "";
    const subProgram = record["PROGRAM/PERTANDINGAN 2"] || "";
    const title = subProgram && mainProgram ? `${mainProgram} - ${subProgram}` : subProgram || mainProgram || "PERTANDINGAN";

    studentMap.get(name).awards.push({
      title,
      level: mapSheetLevel(record.PERINGKAT || record.level),
      rank,
      year: record.TAHUN || record.year || "2026",
      category: record.KATEGORI || record.category || ""
    });
  });

  return [...studentMap.values()].filter((student) => student.awards.length > 0);
}

async function loadStudentsFromGoogleSheet() {
  try {
    const response = await fetch(`${googleSheetCsvUrl}&cacheBust=${Date.now()}`);
    if (!response.ok) {
      throw new Error("Google Sheet cannot be loaded");
    }

    const text = await response.text();
    const sheetStudents = rowsToStudents(parseCsv(text));

    if (sheetStudents.length > 0) {
      students = sheetStudents;
    }
  } catch (error) {
    console.warn("Using local student data because Google Sheet could not be loaded.", error);
  }
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
  const counts = { 金: 0, 银: 0, 铜: 0, 第四: 0, 第五: 0 };

  student.awards.forEach((award) => {
    if (counts[award.rank] !== undefined) {
      counts[award.rank] += 1;
    }
  });

  return `
    <span title="金奖"><img src="assets/trophy-1.png" alt="金奖" /> ${counts.金}</span>
    <span title="银奖"><img src="assets/trophy-2.png" alt="银奖" /> ${counts.银}</span>
    <span title="铜奖"><img src="assets/trophy-3.png" alt="铜奖" /> ${counts.铜}</span>
    <span title="第四名"><img src="assets/trophy-4.png" alt="第四名" /> ${counts.第四}</span>
    <span title="第五名"><img src="assets/trophy-5.png" alt="第五名" /> ${counts.第五}</span>
  `;
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
  const avatarContent = student.avatar
    ? `<img class="avatar-photo" src="${student.avatar}" alt="${student.name} 的头像" />`
    : `<span class="avatar avatar-initials" aria-label="${student.name} 的头像">${getInitials(student.name)}</span>`;

  return `
    <span class="avatar-frame">
      <span class="avatar-window">${avatarContent}</span>
      <img class="frame-image" src="assets/student-frame.png" alt="" aria-hidden="true" />
    </span>
  `;
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

function getLevelLabel(level) {
  return levelLabels[level] || level;
}

function getAwardsByRank(rank) {
  return students.flatMap((student) =>
    student.awards
      .filter((award) => award.rank === rank)
      .map((award) => ({
        ...award,
        studentName: student.name,
        className: student.className
      }))
  );
}

function renderRankResults(rank) {
  const awards = getAwardsByRank(rank);
  const rankInfo = rankMap[rank];

  rankModalTitle.textContent = `${rankInfo.label}项目`;
  rankModalBody.innerHTML = awards.length
    ? awards
        .map(
          (award) => `
            <article class="rank-result-item">
              <span class="rank-badge ${rankInfo.className}">${rankInfo.label}</span>
              <div>
                <p class="award-name">${award.title}</p>
                <p class="award-meta">${award.studentName} · ${award.className} · ${getLevelLabel(award.level)}${award.category ? ` · ${award.category}` : ""}</p>
              </div>
              <span class="award-year">${award.year}</span>
            </article>
          `
        )
        .join("")
    : `<p class="empty-state">目前没有${rankInfo.label}项目。</p>`;

  rankModal.hidden = false;
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
            <h3>${getLevelLabel(group.level)}</h3>
            <span>${group.awards.length} 项</span>
          </div>
          ${group.awards
            .map(
              (award) => `
                <div class="award-item">
                  <span class="rank-badge ${rankMap[award.rank].className}">${rankMap[award.rank].label}</span>
                  <div>
                    <p class="award-name">${award.title}</p>
                    <p class="award-meta">${getLevelLabel(award.level)} 赛事${award.category ? ` · ${award.category}` : ""}</p>
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

summary.addEventListener("click", (event) => {
  const medal = event.target.closest("[data-rank]");
  if (medal) {
    renderRankResults(medal.dataset.rank);
  }
});

closeRankModal.addEventListener("click", () => {
  rankModal.hidden = true;
});

rankModal.addEventListener("click", (event) => {
  if (event.target === rankModal) {
    rankModal.hidden = true;
  }
});

backButton.addEventListener("click", showHome);

async function initPage() {
  await loadStudentsFromGoogleSheet();
  normalizeAwardLevels();
  students.sort((a, b) => a.name.localeCompare(b.name, "en"));
  countAwardsByRank();
  renderStudents();
}

initPage();
