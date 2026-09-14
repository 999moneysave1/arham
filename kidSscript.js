let isAudioUnlocked = false;
let currentUserRole = null;
const ADMIN_PIN = "Sarfaraz1234";

/* 🔗 आपका लाइव RENDER NEURAL TTS API लिंक */
const MY_API_BASE_URL = "https://my-tts-api-kebt.onrender.com";

let studentsList = JSON.parse(localStorage.getItem('grammar_students')) || [
  { name: "arham", pass: "123" },
  { name: "aarav", pass: "123" },
  { name: "rohit", pass: "123" },
  { name: "ananya", pass: "123" }
];

function toggleSecretAdmin() {
  const studentBox = document.getElementById('student-login-box');
  const adminBox = document.getElementById('admin-login-box');
  const subtext = document.getElementById('login-subtext');

  if (adminBox.style.display === 'none') {
    studentBox.style.display = 'none';
    adminBox.style.display = 'block';
    subtext.innerText = "शिक्षक/एडमिन पोर्टल में लॉगिन करें:";
  } else {
    adminBox.style.display = 'none';
    studentBox.style.display = 'block';
    subtext.innerText = "इंग्लिश ग्रामर पाठशाला में लॉगिन करें:";
  }
}

function loginStudent() {
  const user = document.getElementById('stu-username').value.trim().toLowerCase();
  const pass = document.getElementById('stu-pass').value.trim();

  if (!user) {
    alert("कृपया छात्र का नाम लिखें!");
    return;
  }

  const found = studentsList.find(s => s.name === user);
  if (found) {
    if (found.pass === pass) {
      authenticateSuccess('student', found.name);
    } else {
      alert("❌ पासवर्ड सही नहीं है!");
    }
  } else {
    if (pass === "123") {
      studentsList.push({ name: user, pass: "123" });
      localStorage.setItem('grammar_students', JSON.stringify(studentsList));
      authenticateSuccess('student', user);
    } else {
      alert("❌ पासवर्ड सही नहीं है!");
    }
  }
}

function loginAdmin() {
  const pin = document.getElementById('admin-pin').value.trim();
  if (pin === ADMIN_PIN) {
    authenticateSuccess('admin', 'Admin/Teacher');
    document.getElementById('admin-pin').value = "";
  } else {
    alert("❌ गलत पासवर्ड!");
  }
}
function authenticateSuccess(role, name) {
  currentUserRole = role;
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('main-app').style.display = 'block';

  const roleBadge = document.getElementById('role-badge');
  const displayUser = document.getElementById('display-username');
  const adminPanel = document.getElementById('admin-panel');

  if (role === 'admin') {
    document.body.classList.add('admin-mode'); // 👈 Yeh class saare record buttons ko turant visible kar degi
    roleBadge.className = 'user-badge badge-admin';
    roleBadge.innerText = '👑 Admin';
    displayUser.innerText = 'शिक्षक मोड (Active)';
    adminPanel.style.display = 'block';
  } else {
    document.body.classList.remove('admin-mode');
    roleBadge.className = 'user-badge badge-student';
    roleBadge.innerText = '👦 Student';
    displayUser.innerText = name;
    adminPanel.style.display = 'none';
  }

  loadAllSavedAudios();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// logout function ke andar bhi body se class hata dein:
function logout() {
  document.body.classList.remove('admin-mode'); // 👈 Logout par class hat jayegi
  stopAllPlayback();
  currentUserRole = null;
  document.getElementById('main-app').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('admin-login-box').style.display = 'none';
  document.getElementById('student-login-box').style.display = 'block';
  document.getElementById('login-subtext').innerText = "इंग्लिश ग्रामर पाठशाला में लॉगिन करें:";
  document.getElementById('stu-username').value = "";
  document.getElementById('stu-pass').value = "";
}

function logout() {
  stopAllPlayback();
  currentUserRole = null;
  document.getElementById('main-app').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('admin-login-box').style.display = 'none';
  document.getElementById('student-login-box').style.display = 'block';
  document.getElementById('login-subtext').innerText = "इंग्लिश ग्रामर पाठशाला में लॉगिन करें:";
  document.getElementById('stu-username').value = "";
  document.getElementById('stu-pass').value = "";
}

function addNewStudent() {
  const name = document.getElementById('new-stu-name').value.trim().toLowerCase();
  if (!name) return;
  if (studentsList.some(s => s.name === name)) {
    alert("यह छात्र पहले से मौजूद है!");
    return;
  }
  studentsList.push({ name: name, pass: "123" });
  localStorage.setItem('grammar_students', JSON.stringify(studentsList));
  document.getElementById('new-stu-name').value = "";
  alert("✅ नया छात्र '" + name + "' जुड़ गया!");
}

function unlockAudioOnce() {
  isAudioUnlocked = true;
}

function openTab(idx) {
  stopAllPlayback();
  document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  document.querySelectorAll('.content-section').forEach((s, i) => s.classList.toggle('active', i === idx));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ----------------------------------------------------
   DIRECT NEURAL AUDIO STREAMING & PERFECT SYNC ENGINE
---------------------------------------------------- */
let currentSoundType = null;
let currentActiveBtn = null;
let currentCustomPlayer = null;
let defaultBtnHtml = "";
let currentHighlightContainer = null;
let originalContainerText = "";

function resetActiveButtonState() {
  if (currentActiveBtn && defaultBtnHtml) {
    currentActiveBtn.innerHTML = defaultBtnHtml;
    currentActiveBtn.classList.remove('is-playing');
  }
  if (currentHighlightContainer) {
    currentHighlightContainer.innerHTML = originalContainerText;
    currentHighlightContainer = null;
    originalContainerText = "";
  }
  const statusBar = document.getElementById('status-bar');
  if (statusBar) {
    statusBar.style.background = '#DCFCE7';
    statusBar.style.color = '#166534';
    statusBar.innerText = "🔊 आवाज़ रेडी है!";
  }
}

function stopAllPlayback() {
  if (currentCustomPlayer) {
    currentCustomPlayer.pause();
    currentCustomPlayer.currentTime = 0;
    currentCustomPlayer = null;
  }
  resetActiveButtonState();
  currentSoundType = null;
  currentActiveBtn = null;
  defaultBtnHtml = "";
}

// हाइलाइटिंग इंजन: ऑडियो की सटीक गति के साथ शब्दों को सिंक करना
function setupWordHighlighting(containerEl) {
  if (!containerEl) return;
  currentHighlightContainer = containerEl;
  originalContainerText = containerEl.textContent;

  const words = originalContainerText.trim().split(/\s+/).filter(w => w.length > 0);
  containerEl.innerHTML = words.map((w, i) => `<span id="word-span-${i}">${w}</span>`).join(' ');

  const spans = containerEl.querySelectorAll('span');
  if (!spans.length || !currentCustomPlayer) return;

  currentCustomPlayer.ontimeupdate = function() {
    if (!currentCustomPlayer || !currentCustomPlayer.duration) return;

    // ऑडियो शुरू व अंत के मौन (Silence) को एडजस्ट करने के लिए टाइमिंग पैडिंग
    const totalDuration = currentCustomPlayer.duration;
    const currentTime = currentCustomPlayer.currentTime;

    const startOffset = totalDuration * 0.03;
    const effectiveDuration = totalDuration * 0.94;

    let progress = (currentTime - startOffset) / effectiveDuration;
    progress = Math.max(0, Math.min(progress, 1));

    const currentWordIdx = Math.min(
      Math.floor(progress * spans.length),
      spans.length - 1
    );

    spans.forEach((s, idx) => {
      if (idx === currentWordIdx && currentTime >= startOffset) {
        s.classList.add('word-highlight');
      } else {
        s.classList.remove('word-highlight');
      }
    });
  };
}

// function toggleUnifiedTTS(txt, btn, highlightEl = null) {
//   const statusBar = document.getElementById('status-bar');
//   const voicePicker = document.getElementById('selected-voice');
//   const selectedVoice = voicePicker ? voicePicker.value : 'hi-IN-MadhurNeural';

//   // Play / Pause टॉगल
//   if (currentActiveBtn === btn && currentSoundType === 'neural-tts' && currentCustomPlayer) {
//     if (!currentCustomPlayer.paused) {
//       currentCustomPlayer.pause();
//       btn.innerHTML = "▶️ चालू करें (Resume)";
//       btn.classList.remove('is-playing');
//       if (statusBar) statusBar.innerText = "⏸️ आवाज़ रुकी हुई है";
//     } else {
//       currentCustomPlayer.play();
//       btn.innerHTML = "⏸️ पॉज़ करें";
//       btn.classList.add('is-playing');
//       if (statusBar) statusBar.innerText = "🗣️ बोल रहा है...";
//     }
//     return;
//   }

//   stopAllPlayback();

//   currentSoundType = 'neural-tts';
//   currentActiveBtn = btn;
//   defaultBtnHtml = btn.innerHTML;

//   btn.innerHTML = "⏳ लोड हो रहा है...";
//   if (statusBar) {
//     statusBar.style.background = '#FEF08A';
//     statusBar.style.color = '#854D0E';
//     statusBar.innerText = "⏳ आवाज़ लोड हो रही है...";
//   }

//   // खाली स्थान को साफ 'डैश' बोलना
//   let cleanText = txt.replace(/_{2,}/g, ' डैश ');

//   const streamUrl = `${MY_API_BASE_URL}/speak?voice=${encodeURIComponent(selectedVoice)}&text=${encodeURIComponent(cleanText)}`;

//   currentCustomPlayer = new Audio(streamUrl);

//   // बच्चों के समझने लायक आरामदायक गति (0.90x गति - न ज्यादा तेज, न धीमी)
//   const targetSpeed = 0.90;
//   currentCustomPlayer.playbackRate = targetSpeed;

//   currentCustomPlayer.onloadedmetadata = function() {
//     currentCustomPlayer.playbackRate = targetSpeed;
//     setupWordHighlighting(highlightEl);
//   };

//   currentCustomPlayer.onplay = function() {
//     currentCustomPlayer.playbackRate = targetSpeed;
//     btn.innerHTML = "⏸️ पॉज़ करें";
//     btn.classList.add('is-playing');
//     const speakerName = selectedVoice.includes('Madhur') ? 'Madhur (हिंदी पुरुष)' :
//                         selectedVoice.includes('Swara') ? 'Swara (हिंदी महिला)' : 'Neerja (Indian English)';
//     if (statusBar) {
//       statusBar.innerText = "🗣️ " + speakerName + " बोल रहा है...";
//     }
//   };

//   currentCustomPlayer.onended = function() {
//     stopAllPlayback();
//   };

//   currentCustomPlayer.onerror = function() {
//     alert("ऑडियो लोड नहीं हो सका! कृपया इंटरनेट चेक करें।");
//     stopAllPlayback();
//   };

//   currentCustomPlayer.play().catch(e => {
//     console.error(e);
//     stopAllPlayback();
//   });
// }

function toggleUnifiedTTS(txt, btn, highlightEl = null) {
  const statusBar = document.getElementById('status-bar');
  const voicePicker = document.getElementById('selected-voice');
  const selectedVoice = voicePicker ? voicePicker.value : 'hi-IN-MadhurNeural';

  // 1. अगर पहले से वही आवाज़ चल रही है तो सिर्फ पॉज़ / रिज़्यूम करें
  if (currentActiveBtn === btn && currentSoundType === 'neural-tts' && currentCustomPlayer) {
    if (!currentCustomPlayer.paused) {
      currentCustomPlayer.pause();
      btn.innerHTML = "▶️ चालू करें";
      btn.classList.remove('is-playing');
      if (statusBar) statusBar.innerText = "⏸️ आवाज़ रुकी हुई है";
    } else {
      currentCustomPlayer.play();
      btn.innerHTML = "⏸️ पॉज़ करें";
      btn.classList.add('is-playing');
      if (statusBar) statusBar.innerText = "🗣️ बोल रहा है...";
    }
    return;
  }

  stopAllPlayback();

  currentSoundType = 'neural-tts';
  currentActiveBtn = btn;
  defaultBtnHtml = btn.innerHTML;

  // 🌟 2. SweetAlert2 का लोडिंग पॉप-अप (आपके पिक्सेल आइकन के साथ)
  if (typeof Swal !== "undefined") {
    Swal.fire({
      title: 'आवाज़ तैयार हो रही है...',
      html: `
        <div style="margin: 15px 0;">
          <svg viewBox="0 0 16 16" width="48" height="48" style="animation: spinPixels 1.2s linear infinite;">
            <rect x="9" y="1" width="3" height="3" fill="#dc2626" />
            <rect x="5" y="5" width="2" height="2" fill="#f59e0b" />
            <rect x="10" y="7" width="4" height="4" fill="#f59e0b" />
            <rect x="1" y="9" width="4" height="4" fill="#dc2626" />
            <rect x="6" y="11" width="4" height="4" fill="#f59e0b" />
          </svg>
        </div>
        <p style="font-size: 14px; color: #64748B; font-weight: 600;">बस कुछ ही सेकंड में आवाज़ शुरू होगी! 🎧</p>
      `,
      allowOutsideClick: false,
      showConfirmButton: false,
      background: '#FFFFFF',
      customClass: {
        popup: 'sweet-round-popup'
      }
    });
  }

  if (statusBar) {
    statusBar.style.background = '#FEF08A';
    statusBar.style.color = '#854D0E';
    statusBar.innerText = "⏳ आवाज़ तैयार हो रही है...";
  }

  let cleanText = txt.replace(/_{2,}/g, ' डैश ');
  const streamUrl = `${MY_API_BASE_URL}/speak?voice=${encodeURIComponent(selectedVoice)}&text=${encodeURIComponent(cleanText)}`;

  currentCustomPlayer = new Audio(streamUrl);
  currentCustomPlayer.playbackRate = 0.90;

  currentCustomPlayer.onloadedmetadata = function() {
    setupWordHighlighting(highlightEl);
  };

  // 🔊 3. जैसे ही ऑडियो बजना शुरू होगा, SweetAlert2 तुरंत बंद हो जाएगा
  currentCustomPlayer.onplay = function() {
    if (typeof Swal !== "undefined" && Swal.isVisible()) {
      Swal.close(); // पॉप-अप तुरंत बंद
    }

    btn.classList.add('is-playing');
    btn.innerHTML = "⏸️ पॉज़ करें";

    if (statusBar) {
      statusBar.style.background = '#DCFCE7';
      statusBar.style.color = '#166534';
      statusBar.innerText = "🗣️ AI बोल रहा है...";
    }
  };

  currentCustomPlayer.onended = function() {
    stopAllPlayback();
  };

  currentCustomPlayer.onerror = function() {
    if (typeof Swal !== "undefined") {
      Swal.fire({
        icon: 'error',
        title: 'इंटरनेट धीमा है!',
        text: 'आवाज़ लोड नहीं हो सकी, कृपया दोबारा कोशिश करें।',
        confirmButtonColor: '#2563EB'
      });
    }
    stopAllPlayback();
  };

  currentCustomPlayer.play().catch(e => {
    console.error(e);
    stopAllPlayback();
  });
}


function toggleUnifiedCustomAudio(id, btn) {
  if (!db) return;
  const statusBar = document.getElementById('status-bar');

  if (currentActiveBtn === btn && currentSoundType === 'custom' && currentCustomPlayer) {
    if (!currentCustomPlayer.paused) {
      currentCustomPlayer.pause();
      btn.innerHTML = "▶️ चालू करें (Resume)";
      btn.classList.remove('is-playing');
      if (statusBar) statusBar.innerText = "⏸️ शिक्षक की आवाज़ रुकी हुई है";
    } else {
      currentCustomPlayer.play();
      btn.innerHTML = "⏸️ पॉज़ करें";
      btn.classList.add('is-playing');
      if (statusBar) statusBar.innerText = "▶️ शिक्षक की आवाज़ चल रही है...";
    }
    return;
  }

  stopAllPlayback();

  const tx = db.transaction("recordings", "readonly");
  const req = tx.objectStore("recordings").get(id);

  req.onsuccess = function() {
    if (req.result && req.result.data) {
      currentSoundType = 'custom';
      currentActiveBtn = btn;
      defaultBtnHtml = btn.innerHTML;

      currentCustomPlayer = new Audio(req.result.data);

      currentCustomPlayer.onplay = function() {
        btn.innerHTML = "⏸️ पॉज़ करें";
        btn.classList.add('is-playing');
        if (statusBar) {
          statusBar.style.background = '#FEF08A';
          statusBar.style.color = '#854D0E';
          statusBar.innerText = "▶️ शिक्षक की आवाज़ चल रही है...";
        }
      };

      currentCustomPlayer.onended = function() { stopAllPlayback(); };
      currentCustomPlayer.onerror = function() { stopAllPlayback(); };

      currentCustomPlayer.play();
    } else {
      alert("इस प्रश्न के लिए अभी शिक्षक की आवाज़ रिकॉर्ड नहीं है!");
    }
  };
}

function playQuestionVoice(btn) {
  const card = btn.closest('.card');
  const sentenceEl = card.querySelector('.sentence');

  // हमेशा प्रश्न वाक्य को पढ़ेगा ताकि उत्तर लीक न हो
  let textToSpeak = sentenceEl.textContent;

  // नंबर (उदा. "1. ") हटाना
  textToSpeak = textToSpeak.replace(/^\d+\.\s*/, '');

  // खाली जगह (____) को 'डैश' बोलना
  textToSpeak = textToSpeak.replace(/_{2,}/g, ' डैश ');

  // ब्रैकेट वाले हिंट जैसे (live) को भी डैश बोलना
  textToSpeak = textToSpeak.replace(/\([^\)]+\)/g, '');

  toggleUnifiedTTS(textToSpeak, btn, sentenceEl);
}

function toggleExp(btn) {
  const card = btn.closest('.card');
  const box = card.querySelector('.explain-box');
  const exp = card.getAttribute('data-exp');

  if (box.style.display === 'block') {
    box.style.display = 'none';
    if (currentActiveBtn === btn) stopAllPlayback();
  } else {
    box.textContent = exp;
    box.style.display = 'block';
    toggleUnifiedTTS(exp, btn, box);
  }
}

function check(btn, ans) {
  const card = btn.closest('.card');
  const target = card.getAttribute('data-ans');
  const all = card.querySelectorAll('.opt-btn');

  all.forEach(b => {
    b.classList.remove('correct', 'wrong');
    if (b.textContent.trim().startsWith(target)) {
      b.classList.add('correct');
    }
  });

  if (ans === target) {
    sayInstantFeedback("शाबाश बेटा! बिल्कुल सही जवाब!");
  } else {
    btn.classList.add('wrong');
    sayInstantFeedback("अरे गलत हो गया! अंडरस्टैंड बटन दबाकर सुनो ऐसा क्यों हुआ।");
  }
}

function sayInstantFeedback(msg) {
  stopAllPlayback();
  const voicePicker = document.getElementById('selected-voice');
  const selectedVoice = voicePicker ? voicePicker.value : 'hi-IN-MadhurNeural';
  const streamUrl = `${MY_API_BASE_URL}/speak?voice=${encodeURIComponent(selectedVoice)}&text=${encodeURIComponent(msg)}`;
  const feedAudio = new Audio(streamUrl);
  feedAudio.play().catch(() => {});
}

let db;
const dbReq = indexedDB.open("KidsGrammarFinalSecuredDB", 1);
dbReq.onupgradeneeded = function(e) {
  db = e.target.result;
  if (!db.objectStoreNames.contains("recordings")) {
    db.createObjectStore("recordings", { keyPath: "id" });
  }
};

dbReq.onsuccess = function(e) {
  db = e.target.result;
  loadAllSavedAudios();
  loadCloudVoices();
};


let mediaRecorder;
let audioChunks = [];
let currentRecordingId = null;

async function toggleRecord(id, btn) {
  const statusBar = document.getElementById('status-bar');

  if (mediaRecorder && mediaRecorder.state === "recording") {
    if (currentRecordingId === id) {
      mediaRecorder.stop();
      return;
    } else {
      alert("पहले चालू रिकॉर्डिंग रोकें!");
      return;
    }
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioChunks = [];
    mediaRecorder = new MediaRecorder(stream);
    currentRecordingId = id;

    mediaRecorder.ondataavailable = e => audioChunks.push(e.data);
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = function() {
        const base64Audio = reader.result;
        const tx = db.transaction("recordings", "readwrite");
        tx.objectStore("recordings").put({ id: currentRecordingId, data: base64Audio });
        tx.oncomplete = () => {
          showPlayButton(currentRecordingId);
          if (statusBar) statusBar.innerText = "🔒 आवाज़ सुरक्षित सेव हो गई!";
        };
      };

      btn.classList.remove('recording');
      btn.innerText = "🔴 Record अपनी आवाज़";
      stream.getTracks().forEach(t => t.stop());
    };

    mediaRecorder.start();
    btn.classList.add('recording');
    btn.innerText = "⏹️ Stop (रोकें)";
    if (statusBar) statusBar.innerText = "🎙️ रिकॉर्डिंग चालू है... बोलकर Stop दबाएं।";
  } catch (err) {
    alert("माइक अनुमति चाहिए: " + err.message);
  }
}

function showPlayButton(id) {
  const playBtn = document.getElementById('play-' + id);
  if (playBtn) {
    playBtn.style.display = 'flex';
  }
}

// शिक्षक ऑडियो केवल उसी चैप्टर के लिए दिखाना जिसके लिए रिकॉर्ड हुआ है
function loadAllSavedAudios() {
  if (!db) return;

  // पहले सभी शिक्षक ऑडियो बटनों को छिपा दें
  document.querySelectorAll('.btn-parent').forEach(btn => {
    btn.style.display = 'none';
  });

  const tx = db.transaction("recordings", "readonly");
  const req = tx.objectStore("recordings").getAll();
  req.onsuccess = function() {
    if (req.result) {
      req.result.forEach(item => {
        showPlayButton(item.id);
      });
    }
  };
}
// ✅ वर्तमान में खुले चैप्टर की सही ID पता करना
function getCurrentChapterKey() {
  const select = document.getElementById("selected-chapter");
  if (select && select.value) return select.value;
  if (typeof APP_DATA !== "undefined" && typeof ALL_CHAPTERS !== "undefined") {
    return Object.keys(ALL_CHAPTERS).find(k => ALL_CHAPTERS[k] === APP_DATA) || "ch1";
  }
  return "ch1";
}

// ✅ हर चैप्टर की अलग-अलग वॉइस फाइल GitHub से अपने-आप लोड करने वाला इंजन
async function loadCloudVoices() {
  const currentCh = getCurrentChapterKey();
  const fileName = `${currentCh}_voices.json`; // उदा. ch1_voices.json, ch19_voices.json

  try {
    const response = await fetch(`${fileName}?v=${new Date().getTime()}`);
    if (!response.ok) {
      console.log(`ℹ️ इस चैप्टर (${fileName}) की रिकॉर्डिंग GitHub पर अभी नहीं है।`);
      return;
    }
    const items = await response.json();

    if (!db) return;
    const tx = db.transaction("recordings", "readwrite");
    const store = tx.objectStore("recordings");
    items.forEach(item => store.put(item));

    tx.oncomplete = () => {
      loadAllSavedAudios();
      const statusBar = document.getElementById('status-bar');
      if (statusBar) {
        statusBar.innerText = `🎉 ${currentCh.toUpperCase()} की शिक्षक रिकॉर्डिंग लोड हो गई!`;
      }
    };
  } catch (e) {
    console.log("Offline or cloud voices not synced yet:", e);
  }
}

// ✅ केवल उसी चैप्टर की आवाज़ें एक्सपोर्ट करना जो अभी खुला है
function exportVoices() {
  if (!db) return;
  const currentCh = getCurrentChapterKey();

  const tx = db.transaction("recordings", "readonly");
  const req = tx.objectStore("recordings").getAll();

  req.onsuccess = function() {
    if (!req.result || req.result.length === 0) {
      alert("कोई आवाज़ रिकॉर्ड नहीं है!");
      return;
    }

    // केवल सक्रिय चैप्टर की रिकॉर्डिंग्स फ़िल्टर करें
    const filteredVoices = req.result.filter(item => {
      if (currentCh === "ch1") {
        return !item.id.includes("_") || item.id.startsWith("ch1_") || item.id.startsWith("und_");
      }
      return item.id.startsWith(`${currentCh}_`);
    });

    if (filteredVoices.length === 0) {
      alert(`इस चैप्टर (${currentCh}) के लिए कोई आवाज़ रिकॉर्ड नहीं मिली!`);
      return;
    }

    const exportFileName = `${currentCh}_voices.json`;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(filteredVoices, null, 2));
    const a = document.createElement('a');
    a.setAttribute("href", dataStr);
    a.setAttribute("download", exportFileName);
    document.body.appendChild(a);
    a.click();
    a.remove();

    alert(`✅ ${exportFileName} डाउनलोड हो गई! इसे GitHub पर अपलोड कर दें।`);
  };
}

function importVoices(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const items = JSON.parse(e.target.result);
      const tx = db.transaction("recordings", "readwrite");
      const store = tx.objectStore("recordings");
      items.forEach(item => store.put(item));
      tx.oncomplete = () => {
        loadAllSavedAudios();
        alert("🎉 सारी आवाज़ें लोड हो गईं!");
      };
    } catch (err) {
      alert("त्रुटि: " + err.message);
    }
  };
  reader.readAsText(file);
}
