function renderAppContent() {
  if (!APP_DATA) return;

  // सक्रिय चैप्टर की पहचान
  const currentChKey = (typeof ALL_CHAPTERS !== "undefined")
    ? Object.keys(ALL_CHAPTERS).find(k => ALL_CHAPTERS[k] === APP_DATA) || "ch1"
    : "ch1";

  // 1. Render Understanding Tab
  const tab0 = document.getElementById("tab-0");
  if (tab0 && APP_DATA.understanding) {
    tab0.innerHTML = APP_DATA.understanding.map(item => {
      // ✅ चैप्टर 1 के लिए ओरिजिनल ID (ताकि पुराना ऑडियो वापस आ जाए)
      // ✅ चैप्टर 2 के लिए नई प्रीफिक्स वाली ID
      const uniqueId = (currentChKey === "ch1") ? item.id : `${currentChKey}_${item.id}`;

      return `
        <div class="card ${item.type}" id="card-${uniqueId}">
          <div class="q-badge" ${item.badgeStyle ? `style="${item.badgeStyle}"` : ''}>${item.badge}</div>
          <div class="sentence">${item.sentence}</div>
          <div class="hindi-meaning">${item.meaning}</div>
          <p style="font-size:14px;color:#334155;line-height:1.5;margin-bottom:12px;">${item.desc}</p>
          <div class="action-row">
            <button class="btn-touch btn-ai" onclick="toggleUnifiedTTS('${item.tts.replace(/'/g, "\\'")}', this)">🔊 AI आवाज़ सुनो</button>
            <button class="btn-touch btn-parent" id="play-${uniqueId}" onclick="toggleUnifiedCustomAudio('${uniqueId}', this)">▶️ शिक्षक की आवाज़</button>
            <button class="btn-rec" onclick="toggleRecord('${uniqueId}', this)">🔴 Record अपनी आवाज़</button>
          </div>
        </div>
      `;
    }).join('');
  }

  // 2. Render Exercises Tabs
  if (APP_DATA.exercises) {
    APP_DATA.exercises.forEach(ex => {
      const container = document.getElementById(ex.tabId);
      if (!container) return;

      let html = `
        <div class="exercise-guidance">
          <div class="guidance-text">${ex.guidance}</div>
          <button class="btn-guidance-voice" onclick="toggleUnifiedTTS('${ex.guidanceVoice.replace(/'/g, "\\'")}', this)">🔊 निर्देश सुनो</button>
        </div>
      `;

      html += ex.questions.map(q => {
        // ✅ चैप्टर 1 के लिए ओरिजिनल ID और चैप्टर 2 के लिए ch2_
        const uniqueId = (currentChKey === "ch1") ? q.id : `${currentChKey}_${q.id}`;

        return `
          <div class="card" id="card-${uniqueId}" data-ans="${q.ans}" data-exp="${q.exp}" ${q.spoken ? `data-spoken="${q.spoken}"` : ''}>
            <div class="q-badge">${q.qNo}</div>
            <div class="sentence">${q.sentence}</div>
            <div class="hindi-meaning">${q.meaning}</div>
            <div class="opts">
              ${q.options.map(opt => `<button class="opt-btn" onclick="check(this, '${opt.val}')">${opt.label}</button>`).join('')}
            </div>
            <div class="action-row">
              <button class="btn-touch btn-ai" onclick="playQuestionVoice(this)">🔊 AI आवाज़</button>
              <button class="btn-touch btn-parent" id="play-${uniqueId}" onclick="toggleUnifiedCustomAudio('${uniqueId}', this)">▶️ शिक्षक की आवाज़</button>
              <button class="btn-touch btn-why" onclick="toggleExp(this)">💡 Understand (कारण)</button>
              <button class="btn-rec" onclick="toggleRecord('${uniqueId}', this)">🔴 Record</button>
            </div>
            <div class="explain-box"></div>
          </div>
        `;
      }).join('');

      container.innerHTML = html;
    });
  }

  // सेव की गई आवाज़ें लोड करें
  if (typeof loadAllSavedAudios === "function") {
    loadAllSavedAudios();
  }
}

// चैप्टर चयन ड्रॉपडाउन इनिशियलाइज़ेशन


function initChapterDropdown() {
  const select = document.getElementById("selected-chapter");
  if (!select || typeof ALL_CHAPTERS === "undefined") return;

  const isSmallScreen = window.innerWidth <= 450;

  select.innerHTML = Object.keys(ALL_CHAPTERS).map(key => {
    let title = ALL_CHAPTERS[key].name;

    // "Chapter 1:" को सीधे "Ch 1:" में बदलें
    title = title.replace(/Chapter\s*(\d+):?/gi, "Ch $1:");

    // अगर मोबाइल स्क्रीन 360px से छोटी है तो उप-शीर्षक छोटा रखें
    if (isSmallScreen && title.length > 28) {
      title = title.substring(0, 26) + "...";
    }

    return `<option value="${key}">${title}</option>`;
  }).join('');
}
function switchChapter(chapterKey) {
  if (typeof ALL_CHAPTERS === "undefined" || !ALL_CHAPTERS[chapterKey]) return;

  APP_DATA = ALL_CHAPTERS[chapterKey];

  if (typeof stopAllPlayback === "function") stopAllPlayback();
  if (typeof openTab === "function") openTab(0);

  renderAppContent();

  // 🔊 Naye chapter ki aawaz GitHub se turant mangwayein
  if (typeof loadCloudVoices === "function") {
    loadCloudVoices();
  }

  const statusBar = document.getElementById("status-bar");
  if (statusBar) {
    statusBar.style.background = '#DCFCE7';
    statusBar.style.color = '#166534';
    statusBar.innerText = `📖 ${ALL_CHAPTERS[chapterKey].name} load ho gaya!`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initChapterDropdown();
  renderAppContent();
});


document.addEventListener("DOMContentLoaded", () => {
  initChapterDropdown();
  switchChapter("ch1"); // शुरुआत में Chapter 1 लोड होगा
});


// ✅ ऐप पूरी तरह लोड होने पर प्री-लोडर को हटाना
function hideGlobalLoader() {
  const loader = document.getElementById("app-global-loader");
  if (loader) {
    loader.classList.add("hide-loader");
    setTimeout(() => {
      loader.remove(); // DOM से पूरी तरह हटा दें
    }, 550);
  }
}

// विंडो और रिसोर्स लोड होते ही हटाएँ
window.addEventListener("load", () => {
  // अगर डेटा लोड होने में 1 सेकंड भी लगे, तो लोडर दिखेगा
  setTimeout(hideGlobalLoader, 600);
});
