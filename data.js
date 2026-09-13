const ALL_CHAPTERS = {
  "ch1": {
    name: "Chapter 1: Verbs and Simple Tenses",
    understanding: [
      {
        id: "und_verb",
        type: "concept",
        badge: "नियम 1",
        sentence: "Verb (क्रिया) क्या होता है?",
        meaning: "👉 काम वाले शब्द = Verb",
        desc: "Verb का मतलब होता है कोई भी <b>काम</b>! जैसे खेलना (Play), खाना (Eat), सोना (Sleep), नाचना (Dance)। जब भी कोई वाक्य आए, तो पूछो: <i>यहाँ क्या काम हो रहा है?</i> वही Verb है।",
        tts: "Verb का मतलब होता है कोई भी काम! जैसे खेलना, खाना, सोना, नाचना। जब भी कोई वाक्य आए तो पूछो यहाँ क्या काम हो रहा है, वही Verb है!"
      },
      {
        id: "und_tense",
        type: "concept",
        badge: "नियम 2",
        sentence: "Tense (समय की 3 घड़ियाँ)",
        meaning: "👉 Past, Future, Present",
        desc: "<b>1. Past:</b> जो काम खत्म हो चुका।<br><b>2. Future:</b> जो काम हम आगे करेंगे।<br><b>3. Present:</b> जो काम हम आज या रोज़ करते हैं।",
        tts: "दिनभर हम जो भी काम करते हैं वह तीन समय में होता है। पहला पास्ट जो हो चुका, दूसरा फ्यूचर जो आगे होगा, और तीसरा प्रेजेंट जो आज हो रहा है!"
      },
      {
        id: "und_magic",
        type: "magic",
        badge: "जादुई फॉर्मूला",
        badgeStyle: "background:#D1FAE5;color:#047857;",
        sentence: "⭐ 99% वाला जादुई नियम",
        meaning: "👉 परीक्षा में पहचानने का सीक्रेट",
        desc: "👉 <b>Will दिखा?</b> तो पक्का <b>Future</b> है!<br>👉 <b>-ed दिखा?</b> तो पक्का <b>Past</b> है!<br>👉 <b>Will भी नहीं, -ed भी नहीं?</b> तो <b>99% Present</b> है!",
        tts: "जादुई फॉर्मूला याद रखो। अगर वाक्य में विल दिखा तो फ्यूचर, ई डी दिखा तो पास्ट, और दोनों नहीं दिखे तो निन्यानवे परसेंट प्रेजेंट टेंस!"
      }
    ],
    exercises: [
      {
        tabId: "tab-1",
        guidance: "🎯 <b>एक्सरसाइज A में क्या करना है:</b><br>वाक्य को ध्यान से पढ़ो और पहचानो कि यह कौन-सा Tense है—Present (Pr), Past (P), या Future (F)!",
        guidanceVoice: "बच्चों, एक्सरसाइज ए में आपको वाक्य को ध्यान से पढ़ना है और बताना है कि यह काम प्रेजेंट में हो रहा है, पास्ट में हो चुका है, या फ्यूचर में होगा! सही विकल्प पर टैप करें।",
        questions: [
          {
            id: "a1",
            qNo: "Question 1",
            sentence: "1. The milk boiled over.",
            meaning: "👉 हिंदी: दूध उबलकर बाहर गिर गया।",
            ans: "P",
            spoken: "द मिल्क बॉइल्ड ओवर। मतलब दूध उबलकर बाहर गिर गया।",
            exp: "बच्चों, यहाँ ध्यान से देखो: वाक्य में काम वाला शब्द है 'boiled'। boil का मतलब होता है उबलना, और इसमें अंत में लगा है -ed। जब किसी काम में -ed लग जाता है, तो वह क्रिया का दूसरा रूप यानी Verb 2 बन जाता है। इसका मतलब है कि दूध अभी नहीं उबल रहा, बल्कि पहले ही उबलकर बाहर गिर चुका है! बीता हुआ समय यानी Past Tense, इसलिए सही जवाब P होगा।",
            options: [{label: "Pr", val: "Pr"}, {label: "P (Past)", val: "P"}, {label: "F (Future)", val: "F"}]
          },
          {
            id: "a2",
            qNo: "Question 2",
            sentence: "2. They will make a bridge here.",
            meaning: "👉 हिंदी: वे यहाँ एक पुल बनाएंगे।",
            ans: "F",
            spoken: "दे विल मेक अ ब्रिज हियर। मतलब वे यहाँ एक पुल बनाएंगे।",
            exp: "इस वाक्य में देखो लिखा है 'will make'। हमारा जादुई नियम याद करो: जहाँ भी वाक्य में will आ जाए, वहाँ हमेशा काम आगे होने वाला होता है। यानी पुल अभी बना नहीं है और न पहले बना था, वे आगे भविष्य में पुल बनाएंगे। इसलिए जहाँ will दिखे, बिना सोचे समझो कि वह Future Tense यानी F है!",
            options: [{label: "Pr", val: "Pr"}, {label: "P (Past)", val: "P"}, {label: "F (Future)", val: "F"}]
          },
          {
            id: "a3",
            qNo: "Question 3",
            sentence: "3. I watch television only on weekends.",
            meaning: "👉 हिंदी: मैं केवल शनिवार और रविवार को टीवी देखता हूँ।",
            ans: "Pr",
            spoken: "आई वॉच टेलीविज़न ओनली ऑन वीकेंड्स। मतलब मैं केवल शनिवार और रविवार को टीवी देखता हूँ।",
            exp: "यहाँ काम वाला शब्द है 'watch'। अब गौर करो: क्या इसमें will लगा है? नहीं। क्या इसमें -ed लगा है? नहीं। यह क्रिया का पहला रूप (Verb 1) है और यह बता रहा है कि बच्चा हर शनिवार-रविवार को टीवी देखता है, यानी यह उसकी नियमित आदत है। जो काम वर्तमान में आदत के रूप में होता है, वह Present Tense यानी Pr कहलाता है।",
            options: [{label: "Pr (Present)", val: "Pr"}, {label: "P", val: "P"}, {label: "F", val: "F"}]
          },
          {
            id: "a4",
            qNo: "Question 4",
            sentence: "4. My grandmother will visit us in January.",
            meaning: "👉 हिंदी: मेरी दादी जनवरी में हमसे मिलने आएँगी।",
            ans: "F",
            spoken: "माय ग्रैंडमदर विल विज़िट अस इन जनवरी। दादी जनवरी में हमसे मिलने आएँगी।",
            exp: "यहाँ वाक्य में लिखा है 'will visit'। will का मतलब होता है गा, गे, गी। यानी दादी अभी नहीं आई हैं, वे जनवरी के महीने में आने वाली हैं। जब भी आने वाले समय की बात हो और will लगा हो, तो वह हमेशा Future Tense यानी F होता है।",
            options: [{label: "Pr", val: "Pr"}, {label: "P", val: "P"}, {label: "F (Future)", val: "F"}]
          },
          {
            id: "a5",
            qNo: "Question 5",
            sentence: "5. I started my dance practice last year.",
            meaning: "👉 हिंदी: मैंने पिछले साल डांस की प्रैक्टिस शुरू की थी।",
            ans: "P",
            spoken: "आई स्टार्टेड माय डांस प्रैक्टिस लास्ट ईयर।",
            exp: "यहाँ क्रिया है 'started'। start में -ed लगकर क्रिया का दूसरा रूप (Verb 2) बना है। और साथ में 'last year' लिखा है, जिसका मतलब है पिछला साल। जो साल बीत गया और काम पहले ही शुरू हो चुका था, वह बीता हुआ समय होता है। इसलिए यह Past Tense यानी P है।",
            options: [{label: "Pr", val: "Pr"}, {label: "P (Past)", val: "P"}, {label: "F", val: "F"}]
          },
          {
            id: "a6",
            qNo: "Question 6",
            sentence: "6. Tom Sawyer called all his friends.",
            meaning: "👉 हिंदी: टॉम सॉयर ने अपने सभी दोस्तों को बुलाया।",
            ans: "P",
            spoken: "टॉम सॉयर कॉल्ड ऑल हिज़ फ्रेंड्स। टॉम सॉयर ने अपने सभी दोस्तों को बुलाया।",
            exp: "इस वाक्य में क्रिया है 'called'। call का मतलब बुलाना होता है और -ed लगने से यह बन गया Verb 2। टॉम ने अपने दोस्तों को पहले ही बुला लिया, काम खत्म हो चुका है। काम खत्म होने का मतलब Past Tense, इसलिए P पर टिक करेंगे।",
            options: [{label: "Pr", val: "Pr"}, {label: "P (Past)", val: "P"}, {label: "F", val: "F"}]
          },
          {
            id: "a7",
            qNo: "Question 7",
            sentence: "7. The river froze in winter.",
            meaning: "👉 हिंदी: सर्दियों में नदी जम गई।",
            ans: "P",
            spoken: "द रिवर फ़्रोज़ इन विंटर। सर्दियों में नदी जम गई।",
            exp: "यहाँ ध्यान देने वाली बात है: freeze का मतलब जमना होता है। लेकिन यहाँ 'froze' लिखा है। जैसे sing का sang होता है, वैसे ही freeze का Verb 2 'froze' होता है। यानी नदी सर्दियों में पहले ही जम गई थी। Verb 2 हमेशा बीते हुए समय यानी Past Tense (P) को दिखाता है।",
            options: [{label: "Pr", val: "Pr"}, {label: "P (Past)", val: "P"}, {label: "F", val: "F"}]
          },
          {
            id: "a8",
            qNo: "Question 8",
            sentence: "8. The package arrived yesterday.",
            meaning: "👉 हिंदी: पार्सल कल पहुँचा।",
            ans: "P",
            spoken: "द पैकेज अराइव्ड यस्टरडे। पार्सल कल पहुँचा।",
            exp: "यहाँ लिखा है 'arrived' और 'yesterday'। arrive में -d लगा है यानी यह Verb 2 है, और yesterday का मतलब होता है बीता हुआ कल। पार्सल कल ही आ चुका था, इसलिए यह Past Tense यानी P है।",
            options: [{label: "Pr", val: "Pr"}, {label: "P (Past)", val: "P"}, {label: "F", val: "F"}]
          },
          {
            id: "a9",
            qNo: "Question 9",
            sentence: "9. The Earth revolves around the Sun.",
            meaning: "👉 हिंदी: पृथ्वी सूरज के चारों ओर घूमती है।",
            ans: "Pr",
            spoken: "द अर्थ रिवॉल्व्स अराउंड द सन। पृथ्वी सूरज के चारों ओर घूमती है।",
            exp: "पृथ्वी सूरज के चारों ओर घूमती है। क्या यह कल घूमकर रुक गई? नहीं, यह कल भी घूमती थी, आज भी घूमती है और हमेशा घूमती रहेगी। जो बात हमेशा सच रहती है, उसमें हमेशा Verb 1 (revolves) लगता है। इसलिए यह Present Tense यानी Pr है।",
            options: [{label: "Pr (Present)", val: "Pr"}, {label: "P", val: "P"}, {label: "F", val: "F"}]
          },
          {
            id: "a10",
            qNo: "Question 10",
            sentence: "10. I feel very hungry in the evening.",
            meaning: "👉 हिंदी: मुझे शाम को बहुत भूख लगती है।",
            ans: "Pr",
            spoken: "आई फील वेरी हंग्री इन द ईवनिंग। मुझे शाम को बहुत भूख लगती है।",
            exp: "यहाँ काम वाला शब्द है 'feel'। इसमें न will है और न -ed। शाम को भूख लगना रोज की बात है, एक सामान्य अहसास है। सामान्य अनुभव और आदत हमेशा Present Tense यानी Pr में आते हैं।",
            options: [{label: "Pr (Present)", val: "Pr"}, {label: "P", val: "P"}, {label: "F", val: "F"}]
          }
        ]
      },
      {
        tabId: "tab-2",
        guidance: "🎯 <b>एक्सरसाइज B में क्या करना है:</b><br>ब्रैकेट में दी गई क्रिया (Verb) को देखकर खाली जगह (डैश) में उसका सही <b>Simple Past Tense</b> रूप चुनकर भरो!",
        guidanceVoice: "बच्चों, एक्सरसाइज बी में आपको खाली जगह यानी डैश में सही पास्ट टेंस का रूप चुनकर भरना है!",
        questions: [
          {
            id: "b1",
            qNo: "Question 1",
            sentence: "1. Shia _______ (brush) her teeth at night.",
            meaning: "👉 हिंदी: शिया ने रात में दाँत ब्रश किए।",
            ans: "brushed",
            exp: "यहाँ दो ऑप्शन हैं: 'brushed' और 'brushing'। ध्यान से समझो: brushing में -ing लगा है। -ing वाले शब्द कभी अकेले नहीं आते, उनके पहले is, am या are होना ज़रूरी होता है। लेकिन Shia के तुरंत बाद कोई is या was नहीं है! इसका मतलब है कि यहाँ काम हो चुका है। इसलिए brush का Verb 2 'brushed' सही उत्तर होगा।",
            options: [{label: "brushed", val: "brushed"}, {label: "brushing", val: "brushing"}]
          },
          {
            id: "b2",
            qNo: "Question 2",
            sentence: "2. These musicians _______ (play) rock music.",
            meaning: "👉 हिंदी: इन संगीतकारों ने रॉक संगीत बजाया।",
            ans: "played",
            exp: "यहाँ संगीतकारों द्वारा गाना बजाने की बात है। 'playes' नाम की कोई सही स्पेलिंग अंग्रेजी में नहीं होती। play का बीता हुआ समय (Verb 2) हमेशा -ed लगाकर 'played' बनता है, जिसका अर्थ है कि संगीतकारों ने संगीत बजाया।",
            options: [{label: "played", val: "played"}, {label: "playes", val: "playes"}]
          },
          {
            id: "b3",
            qNo: "Question 3",
            sentence: "3. The astronauts _______ (land) on the moon.",
            meaning: "👉 हिंदी: अंतरिक्ष यात्री चाँद पर उतरे।",
            ans: "landed",
            exp: "अंतरिक्ष यात्री चाँद पर उतर चुके हैं। यहाँ 'landing' गलत है क्योंकि उसके पहले were या are नहीं लगा हुआ है। काम समाप्त हो चुका है, इसलिए land का Past रूप (Verb 2) 'landed' सही जवाब है।",
            options: [{label: "landed", val: "landed"}, {label: "landing", val: "landing"}]
          },
          {
            id: "b4",
            qNo: "Question 4",
            sentence: "4. The little girl _______ (sing) happy songs.",
            meaning: "👉 हिंदी: छोटी लड़की ने खुशी के गाने गाए।",
            ans: "sang",
            exp: "बहुत ध्यान से सुनो: बच्चे अक्सर सोचते हैं कि पास्ट बनाने के लिए सिर्फ -ed लगाते हैं, पर अंग्रेजी में कई शब्द बदलते हैं! sing में कभी singed नहीं लगता, singed गलत शब्द है। sing का Verb 2 'sang' होता है और Verb 3 'sung' होता है। लड़की ने गाना गा लिया, इसलिए यहाँ 'sang' आएगा।",
            options: [{label: "singed", val: "singed"}, {label: "sang", val: "sang"}]
          },
          {
            id: "b5",
            qNo: "Question 5",
            sentence: "5. I _______ (be) polite to everyone.",
            meaning: "👉 हिंदी: मैं हर किसी के प्रति विनम्र था।",
            ans: "was",
            exp: "नियम याद रखो: I के साथ पास्ट टेंस में हमेशा 'was' लगता है। 'were' बहुवचन (We, They) के साथ लगता है। I के साथ were केवल तब लगता है जब हम कोई काल्पनिक इच्छा करते हैं, जैसे 'If I were a bird'। यहाँ साधारण बीते समय की बात है, इसलिए I was polite होगा।",
            options: [{label: "was", val: "was"}, {label: "were", val: "were"}]
          },
          {
            id: "b6",
            qNo: "Question 6",
            sentence: "6. My father _______ (write) stories for children.",
            meaning: "👉 हिंदी: मेरे पिताजी ने बच्चों के लिए कहानियाँ लिखीं।",
            ans: "wrote",
            exp: "write में -ed लगाकर 'writed' कभी नहीं बनता। write का Verb 2 होता है 'wrote' और Verb 3 होता है 'written'। पिताजी ने कहानियाँ लिखीं, यानी काम पूरा हो गया। इसलिए सही उत्तर 'wrote' है।",
            options: [{label: "writed", val: "writed"}, {label: "wrote", val: "wrote"}]
          },
          {
            id: "b7",
            qNo: "Question 7",
            sentence: "7. We _______ (study) French in school.",
            meaning: "👉 हिंदी: हमने स्कूल में फ्रेंच भाषा पढ़ी।",
            ans: "studied",
            exp: "अंग्रेजी व्याकरण का स्पेलिंग नियम: जब किसी शब्द के अंत में y हो और उससे पहले कोई व्यंजन (Consonant) हो, तो पास्ट बनाते समय y को हटाकर -ied लगाया जाता है। इसलिए studyed गलत है और 'studied' बिल्कुल सही है।",
            options: [{label: "studyed", val: "studyed"}, {label: "studied", val: "studied"}]
          },
          {
            id: "b8",
            qNo: "Question 8",
            sentence: "8. The President _______ (meet) all the ministers.",
            meaning: "👉 हिंदी: राष्ट्रपति सभी मंत्रियों से मिले।",
            ans: "met",
            exp: "meet का मतलब मिलना होता है। लेकिन पास्ट में कभी 'meeted' नहीं होता! meet का Verb 2 एक 'e' हटाकर 'met' बन जाता है। राष्ट्रपति मंत्रियों से मिले, काम खत्म हो चुका है, इसलिए 'met' सही है।",
            options: [{label: "meeted", val: "meeted"}, {label: "met", val: "met"}]
          },
          {
            id: "b9",
            qNo: "Question 9",
            sentence: "9. They _______ (drop) flyers from the hot-air balloon.",
            meaning: "👉 हिंदी: उन्होंने हॉट-एयर बैलून से फ़्लायर्स (पर्चे) गिराए।",
            ans: "dropped",
            exp: "drop शब्द में एक छोटा स्वर (Vowel 'o') और अंत में 'p' है। ऐसे शब्दों में जब -ed जोड़ते हैं, तो अंतिम अक्षर डबल हो जाता है। इसलिए droped गलत है और डबल 'p' वाला 'dropped' सही है।",
            options: [{label: "droped", val: "droped"}, {label: "dropped", val: "dropped"}]
          },
          {
            id: "b10",
            qNo: "Question 10",
            sentence: "10. The saplings _______ (grow) into trees.",
            meaning: "👉 हिंदी: छोटे पौधे बड़े होकर पेड़ बन गए।",
            ans: "grew",
            exp: "grow का पास्ट रूप कभी 'growed' नहीं होता। जैसे know का knew होता है, वैसे ही grow का Verb 2 'grew' होता है। पौधे बड़े होकर पेड़ बन गए, इसलिए 'grew' सही विकल्प है।",
            options: [{label: "growed", val: "growed"}, {label: "grew", val: "grew"}]
          }
        ]
      },
      {
        tabId: "tab-3",
        guidance: "🎯 <b>एक्सरसाइज C में क्या करना है:</b><br>वाक्य के समय को पहचानकर खाली जगह (डैश) में सही <b>Continuous Tense (is/was/will be + ing)</b> रूप भरो!",
        guidanceVoice: "बच्चों, एक्सरसाइज सी में आपको देखना है कि काम किस समय लगातार चल रहा है, और खाली जगह यानी डैश में सही कंटीन्यूअस टेंस भरना है!",
        questions: [
          {
            id: "c1",
            qNo: "Question 1",
            sentence: "1. I _______ (run) to catch the train.",
            meaning: "👉 हिंदी: मैं ट्रेन पकड़ने के लिए दौड़ रहा हूँ।",
            ans: "am running",
            exp: "यहाँ काम अभी जारी है। I के साथ वर्तमान में हमेशा 'am' आता है और क्रिया में -ing लगता है। 'was running' तब आता जब कल की बात होती। अभी ट्रेन पकड़ने दौड़ रहा है, इसलिए 'am running' बिल्कुल सही है।",
            options: [{label: "am running", val: "am running"}, {label: "was running", val: "was running"}]
          },
          {
            id: "c2",
            qNo: "Question 2",
            sentence: "2. The farmers _______ (harvest) the crop in April.",
            meaning: "👉 हिंदी: किसान अप्रैल में फसल काट रहे होंगे।",
            ans: "will be harvesting",
            exp: "वाक्य में लिखा है 'in April' (अप्रैल में)। अप्रैल का महीना भविष्य में आएगा। जब भविष्य में कोई काम लगातार चल रहा होगा, तो वहाँ 'will be' के साथ -ing लगता है। इसलिए 'will be harvesting' सही है।",
            options: [{label: "are harvesting", val: "are harvesting"}, {label: "will be harvesting", val: "will be harvesting"}]
          },
          {
            id: "c3",
            qNo: "Question 3",
            sentence: "3. The sun _______ (shine) brightly.",
            meaning: "👉 हिंदी: सूरज तेज़ी से चमक रहा था।",
            ans: "was shining",
            exp: "सूरज अकेला (एकवचन) है। एकवचन के साथ पास्ट में 'was' आता है और बहुवचन के साथ 'were' आता है। क्योंकि सूरज एक है, इसलिए 'were shining' गलत होगा और 'was shining' सही होगा।",
            options: [{label: "was shining", val: "was shining"}, {label: "were shining", val: "were shining"}]
          },
          {
            id: "c4",
            qNo: "Question 4",
            sentence: "4. I _______ (learn) a Spanish dance at this time tomorrow.",
            meaning: "👉 हिंदी: मैं कल इस समय स्पैनिश डांस सीख रहा हूँगा।",
            ans: "will be learning",
            exp: "वाक्य में लिखा है 'tomorrow' यानी आने वाला कल। जब कल इसी समय काम जारी रहेगा, तो Future Continuous Tense बनता है। इसमें 'will be' के साथ क्रिया में -ing लगता है, इसलिए 'will be learning' आएगा।",
            options: [{label: "will be learning", val: "will be learning"}, {label: "am learning", val: "am learning"}]
          },
          {
            id: "c5",
            qNo: "Question 5",
            sentence: "5. The hunter _______ (watch) from the treetop.",
            meaning: "👉 हिंदी: शिकारी पेड़ की चोटी से देख रहा है।",
            ans: "is watching",
            exp: "The hunter केवल एक शिकारी है (एकवचन)। जब एक व्यक्ति काम कर रहा होता है, तो 'is' लगता है, 'are' नहीं। शिकारी अभी पेड़ की चोटी से देख रहा है, इसलिए 'is watching' सही उत्तर है।",
            options: [{label: "is watching", val: "is watching"}, {label: "are watching", val: "are watching"}]
          },
          {
            id: "c6",
            qNo: "Question 6",
            sentence: "6. Rhea _______ (look) for her lost ring.",
            meaning: "👉 हिंदी: रिया अपनी खोई हुई अँगूठी ढूँढ रही थी।",
            ans: "was looking",
            exp: "रिया एक लड़की का नाम है (एकवचन)। पास्ट टेंस में एकवचन के साथ 'was' आता है और बहुवचन के साथ 'were' आता है। रिया एक है, इसलिए 'were looking' नहीं बल्कि 'was looking' सही होगा।",
            options: [{label: "was looking", val: "was looking"}, {label: "were looking", val: "were looking"}]
          },
          {
            id: "c7",
            qNo: "Question 7",
            sentence: "7. They _______ (practise) hockey early in the morning.",
            meaning: "👉 हिंदी: वे सुबह-सुबह हॉकी का अभ्यास कर रहे थे।",
            ans: "were practising",
            exp: "They का मतलब होता है 'वे सब'। बहुवचन के साथ बीते समय में हमेशा 'were' लगता है। इसलिए 'were practising' सही उत्तर है।",
            options: [{label: "was practising", val: "was practising"}, {label: "were practising", val: "were practising"}]
          },
          {
            id: "c8",
            qNo: "Question 8",
            sentence: "8. You _______ (perform) on stage for the annual day.",
            meaning: "👉 हिंदी: तुम एनुअल डे के लिए स्टेज पर परफॉर्म कर रहे होगे।",
            ans: "will be performing",
            exp: "एनुअल डे का कार्यक्रम भविष्य में आने वाला है। भविष्य में जब कोई काम स्टेज पर चल रहा होगा, तो Future Continuous बनेगा। इसलिए 'will be performing' सही होगा।",
            options: [{label: "are performing", val: "are performing"}, {label: "will be performing", val: "will be performing"}]
          },
          {
            id: "c9",
            qNo: "Question 9",
            sentence: "9. The elephants _______ (trumpet) to warn them off.",
            meaning: "👉 हिंदी: हाथी उन्हें चेतावनी देने के लिए चिंघाड़ रहे थे।",
            ans: "were trumpeting",
            exp: "The elephants बहुवचन है। बहुवचन के साथ पास्ट टेंस में 'were' आता है। इसलिए 'were trumpeting' सही है।",
            options: [{label: "was trumpeting", val: "was trumpeting"}, {label: "were trumpeting", val: "were trumpeting"}]
          },
          {
            id: "c10",
            qNo: "Question 10",
            sentence: "10. The sheep _______ (bask) in the sun.",
            meaning: "👉 हिंदी: भेड़ धूप सेक रही है।",
            ans: "is basking",
            exp: "भेड़ अभी वर्तमान में धूप सेक रही है। काम अभी चल रहा है, इसलिए 'is basking' सही है।",
            options: [{label: "is basking", val: "is basking"}, {label: "will be basking", val: "will be basking"}]
          }
        ]
      },
      {
        tabId: "tab-4",
        guidance: "🎯 <b>एक्सरसाइज D में क्या करना है:</b><br>सब्जेक्ट को देखो—एकवचन है या बहुवचन? उसके अनुसार खाली जगह (डैश) में सही <b>नकारात्मक (Negative: do not / does not / is not / are not)</b> रूप चुनो!",
        guidanceVoice: "बच्चों, एक्सरसाइज डी में आपको सब्जेक्ट देखकर सही नकारात्मक रूप चुनना है, जैसे डू नॉट, डज़ नॉट, या इज़ नॉट!",
        questions: [
          {
            id: "d1",
            qNo: "Question 1",
            sentence: "1. Monkeys _______ (use) their tongue to lap up water.",
            meaning: "👉 हिंदी: बंदर पानी पीने के लिए अपनी जीभ का उपयोग नहीं करते हैं।",
            ans: "do not use",
            exp: "Monkeys बहुवचन हैं। एकवचन के साथ does लगता है, और बहुवचन के साथ do लगता है। इसलिए 'do not use' बिल्कुल सही उत्तर होगा।",
            options: [{label: "do not use", val: "do not use"}, {label: "does not use", val: "does not use"}]
          },
          {
            id: "d2",
            qNo: "Question 2",
            sentence: "2. Most people _______ solar power.",
            meaning: "👉 हिंदी: ज्यादातर लोग सोलर पावर का उपयोग नहीं करते हैं।",
            ans: "do not harness",
            exp: "Most people बहुवचन हैं। सामान्य आदत या सत्य बताने के लिए बहुवचन के साथ 'do not' लगाते हैं। इसलिए 'do not harness' सही है।",
            options: [{label: "do not harness", val: "do not harness"}, {label: "are not harness", val: "are not harness"}]
          },
          {
            id: "d3",
            qNo: "Question 3",
            sentence: "3. Our oceans _______ of oil and garbage.",
            meaning: "👉 हिंदी: हमारे समुद्र तेल और कचरे से मुक्त नहीं हैं।",
            ans: "are not free",
            exp: "यहाँ 'free' विशेषता है। विशेषता बताने के लिए is/am/are लगाते हैं। Oceans बहुवचन है, इसलिए 'are not free' सही है।",
            options: [{label: "are not free", val: "are not free"}, {label: "do not free", val: "do not free"}]
          },
          {
            id: "d4",
            qNo: "Question 4",
            sentence: "4. Cutting down trees _______ the environment.",
            meaning: "👉 हिंदी: पेड़ों को काटना पर्यावरण की मदद नहीं करेगा।",
            ans: "will not help",
            exp: "पेड़ काटने से पर्यावरण को आगे कोई फायदा नहीं होगा। भविष्य की बात है, इसलिए will लगेगा: 'will not help' सही उत्तर है।",
            options: [{label: "will not help", val: "will not help"}, {label: "did not help", val: "did not help"}]
          },
          {
            id: "d5",
            qNo: "Question 5",
            sentence: "5. Plastic bags and bottles _______ for the well-being of sea creatures.",
            meaning: "👉 हिंदी: प्लास्टिक बैग और बोतलें समुद्री जीवों की भलाई के लिए उपयोगी नहीं हैं।",
            ans: "are not helpful",
            exp: "Bags and bottles बहुवचन हैं। बहुवचन के साथ हमेशा 'are' का प्रयोग होता है। इसलिए 'are not helpful' सही है।",
            options: [{label: "are not helpful", val: "are not helpful"}, {label: "is not helpful", val: "is not helpful"}]
          },
          {
            id: "d6",
            qNo: "Question 6",
            sentence: "6. Waste management _______ easy.",
            meaning: "👉 हिंदी: वेस्ट मैनेजमेंट आसान नहीं है।",
            ans: "is not easy",
            exp: "Waste management एकवचन है। इसलिए 'is not easy' सही उत्तर है।",
            options: [{label: "is not easy", val: "is not easy"}, {label: "are not easy", val: "are not easy"}]
          },
          {
            id: "d7",
            qNo: "Question 7",
            sentence: "7. The air we breathe _______ for us because of pollution.",
            meaning: "👉 हिंदी: प्रदूषण के कारण जो हवा हम साँस में लेते हैं वह हमारे लिए स्वास्थ्यवर्धक नहीं है।",
            ans: "is not healthy",
            exp: "The air (हवा) एकवचन मानी जाती है। इसके साथ 'is' लगता है, इसलिए 'is not healthy' सही है।",
            options: [{label: "is not healthy", val: "is not healthy"}, {label: "does not healthy", val: "does not healthy"}]
          },
          {
            id: "d8",
            qNo: "Question 8",
            sentence: "8. People _______ freshwater very carefully.",
            meaning: "👉 हिंदी: लोग ताज़े पानी का उपयोग बहुत सावधानी से नहीं कर रहे हैं।",
            ans: "are not using",
            exp: "People बहुवचन होता है। बहुवचन के साथ 'are' लगता है, इसलिए 'are not using' सही है।",
            options: [{label: "are not using", val: "are not using"}, {label: "is not using", val: "is not using"}]
          },
          {
            id: "d9",
            qNo: "Question 9",
            sentence: "9. All trash _______ recycled.",
            meaning: "👉 हिंदी: सभी कचरे को रीसायकल नहीं किया जा रहा है।",
            ans: "is not being",
            exp: "Trash (कचरा) अगणनीय है। इसके साथ हमेशा 'is' लगता है, इसलिए 'is not being' सही उत्तर होगा।",
            options: [{label: "is not being", val: "is not being"}, {label: "are not being", val: "are not being"}]
          },
          {
            id: "d10",
            qNo: "Question 10",
            sentence: "10. The people of the world _______ care of their forests.",
            meaning: "👉 हिंदी: दुनिया के लोग अपने जंगलों की देखभाल नहीं कर रहे हैं।",
            ans: "are not taking",
            exp: "यहाँ सब्जेक्ट 'The people of the world' है जो कि बहुवचन है। इसलिए 'are not taking' बिल्कुल सही है।",
            options: [{label: "are not taking", val: "are not taking"}, {label: "is not taking", val: "is not taking"}]
          }
        ]
      }
    ]
  },

  "ch2": {
    name: "Chapter 2: Perfect Tenses (Present & Past Perfect)",
    understanding: [
      {
        id: "und_present_perfect",
        type: "concept",
        badge: "नियम 1 (आज का काम)",
        sentence: "Present Perfect (Has / Have + 3rd form)",
        meaning: "👉 जो काम अभी-अभी खत्म हुआ है!",
        desc: "👉 <b>अकेला बच्चा (He, She, It, 1 नाम):</b> इसके साथ छोटा वाला <b>has</b> लगेगा!<br>👉 <b>दोस्तों की टोली (We, They, ज्यादा लोग) और I:</b> इनके साथ बड़ा वाला <b>have</b> लगेगा!<br>👉 और काम वाले शब्द का तीसरा रूप (Verb 3 जैसे eat का <b>eaten</b>, go का <b>gone</b>) आएगा।",
        tts: "याद रखो बच्चों! अकेला होगा तो हैज़, ज्यादा होंगे तो हैव, और साथ में आएगी वर्ब की तीसरी फॉर्म!"
      },
      {
        id: "und_past_perfect",
        type: "concept",
        badge: "नियम 2 (पुराना काम)",
        sentence: "Past Perfect (Had + 3rd form)",
        meaning: "👉 जो काम बहुत पहले ही हो चुका था!",
        desc: "👉 जब दो काम हुए हों, तो <b>जो काम सबसे पहले हुआ</b>, उसमें जादू का शब्द <b>had</b> लगेगा!<br>👉 इसमें चाहे एक बच्चा हो या पूरी क्लास, सबके साथ सिर्फ <b>had</b> ही आता है।",
        tts: "पास्ट परफेक्ट बहुत आसान है! जो काम सबसे पहले हुआ, उसमें बिना सोचे हैड लगा दो!"
      },
      {
        id: "und_since_for",
        type: "magic",
        badge: "जादुई फॉर्मूला",
        badgeStyle: "background:#D1FAE5;color:#047857;",
        sentence: "⭐ Since और For का सीक्रेट",
        meaning: "👉 घड़ी और कैलेंडर का जादू",
        desc: "👉 <b>पक्का नाम (Monday, 2 o'clock, July):</b> दिखे तो <b>Since</b> लगाओ!<br>👉 <b>गिनती (2 hours, 5 days, 10 years):</b> दिखे तो <b>For</b> लगाओ!",
        tts: "नाम दिखे तो सिंस, और गिनती दिखे तो फॉर! यह है हमारा जादुई नियम!"
      }
    ],
    exercises: [
      {
        tabId: "tab-1",
        guidance: "🎯 <b>Exercise A:</b> खाली जगह में सही रूप चुनो (has / have + 3rd form)!",
        guidanceVoice: "बच्चों, देखो कि कोई अकेला है या बहुत सारे लोग हैं, और सही उत्तर चुनो!",
        questions: [
          {
            id: "a1",
            qNo: "Question 1",
            sentence: "1. My parents _______ (live) here for 15 years.",
            meaning: "👉 हिंदी: मम्मी-पापा यहाँ 15 साल से रह रहे हैं।",
            ans: "have lived",
            spoken: "माय पेरेंट्स हैव लिव्ड हियर फॉर फिफ्टीन ईयर्स।",
            exp: "मम्मी और पापा मिलकर दो लोग बन गए (बहुत सारे)! जब एक से ज्यादा लोग होते हैं तो बड़ा वाला 'have' आता है। 'has' तो सिर्फ अकेले बच्चे के साथ आता है। इसलिए 'have lived' सही है!",
            options: [{label: "have lived", val: "have lived"}, {label: "has lived", val: "has lived"}]
          },
          {
            id: "a2",
            qNo: "Question 2",
            sentence: "2. Nobody _______ (arrive) yet.",
            meaning: "👉 हिंदी: अभी तक कोई नहीं आया है।",
            ans: "has arrived",
            spoken: "नोबडी हैज़ अराइव्ड येट।",
            exp: "Nobody का मतलब है कमरे में कोई नहीं है, सन्नाटा है (ज़ीरो)! जब कोई नहीं होता तो उसे एक अकेला मानकर छोटा वाला 'has' देते हैं। इसलिए 'has arrived' आएगा!",
            options: [{label: "has arrived", val: "has arrived"}, {label: "have arrived", val: "have arrived"}]
          },
          {
            id: "a3",
            qNo: "Question 3",
            sentence: "3. The flowers _______ (not bloom) yet.",
            meaning: "👉 हिंदी: फूल अभी तक नहीं खिले हैं।",
            ans: "have not bloomed",
            spoken: "द फ्लावर्स हैव नॉट ब्लूमड येट।",
            exp: "यहाँ एक फूल नहीं, बहुत सारे रंग-बिरंगे फूल (Flowers) हैं! ज्यादा चीजों के साथ हमेशा 'have' आता है। इसलिए 'have not bloomed' सही होगा!",
            options: [{label: "have not bloomed", val: "have not bloomed"}, {label: "has not bloomed", val: "has not bloomed"}]
          },
          {
            id: "a4",
            qNo: "Question 4",
            sentence: "4. Archaeologists _______ (find) an ancient city.",
            meaning: "👉 हिंदी: खोज करने वालों ने पुरानी बस्ती ढूँढ ली।",
            ans: "have found",
            spoken: "आर्कियोलॉजिस्ट्स हैव फाउंड एन एंशिएंट सिटी।",
            exp: "यहाँ Archaeologists में 's' लगा है, मतलब बहुत सारे अंकल लोग हैं! ज्यादा लोगों के लिए 'have' आएगा और find बदलकर 'found' बन जाएगा।",
            options: [{label: "have found", val: "have found"}, {label: "has found", val: "has found"}]
          },
          {
            id: "a5",
            qNo: "Question 5",
            sentence: "5. I _______ (not eat) since morning.",
            meaning: "👉 हिंदी: मैंने सुबह से कुछ नहीं खाया, बहुत भूख लगी है!",
            ans: "have not eaten",
            spoken: "आई हैव नॉट ईटन सिंस मॉर्निंग।",
            exp: "I (मैं) हमेशा राजा होता है! I के साथ कभी 'has' नहीं लगाते, हमेशा 'have' लगाते हैं। और eat का रूप बदलकर 'eaten' हो जाता है।",
            options: [{label: "have not eaten", val: "have not eaten"}, {label: "has not eaten", val: "has not eaten"}]
          },
          {
            id: "a6",
            qNo: "Question 6",
            sentence: "6. The cook _______ (already serve) dinner.",
            meaning: "👉 हिंदी: रसोइया अंकल ने खाना परोस दिया है।",
            ans: "has already served",
            spoken: "द कुक हैज़ ऑलरेडी सर्व्ड डिनर।",
            exp: "खाना बनाने वाले अंकल (The cook) अकेले हैं, सिर्फ एक! अकेले इंसान के साथ हमेशा छोटा वाला 'has' आता है। इसलिए 'has already served' सही है।",
            options: [{label: "has already served", val: "has already served"}, {label: "have already served", val: "have already served"}]
          },
          {
            id: "a7",
            qNo: "Question 7",
            sentence: "7. They _______ (send) a spaceship to Mars.",
            meaning: "👉 हिंदी: उन्होंने मंगल ग्रह पर रॉकेट भेज दिया है।",
            ans: "have sent",
            spoken: "दे हैव सेंट अ स्पेसशिप टू मार्स।",
            exp: "They का मतलब होता है वे सब (पूरी टीम)! जब बहुत सारे लोग मिलकर काम करते हैं तो 'have' आता है। send बदलकर 'sent' बन जाएगा।",
            options: [{label: "have sent", val: "have sent"}, {label: "has sent", val: "has sent"}]
          },
          {
            id: "a8",
            qNo: "Question 8",
            sentence: "8. My brother _______ (never ride) a bicycle.",
            meaning: "👉 हिंदी: मेरे भैया ने कभी साइकिल नहीं चलाई।",
            ans: "has never ridden",
            spoken: "माय ब्रदर हैज़ नेवर रिडन अ बाइसिकल।",
            exp: "भैया (My brother) अकेले हैं, सिर्फ एक! अकेले के लिए 'has' लगाते हैं और ride का तीसरा रूप 'ridden' बन जाता है।",
            options: [{label: "has never ridden", val: "has never ridden"}, {label: "have never ridden", val: "have never ridden"}]
          },
          {
            id: "a9",
            qNo: "Question 9",
            sentence: "9. The farmers _______ (not reap) the harvest yet.",
            meaning: "👉 हिंदी: किसानों ने अभी फसल नहीं काटी है।",
            ans: "have not reaped",
            spoken: "द फार्मर्स हैव नॉट रीप्ड द हार्वेस्ट येट।",
            exp: "यहाँ एक किसान नहीं, खेत में बहुत सारे किसान (Farmers) हैं! ज्यादा लोगों के साथ 'have' आता है। इसलिए 'have not reaped' सही है।",
            options: [{label: "have not reaped", val: "have not reaped"}, {label: "has not reaped", val: "has not reaped"}]
          },
          {
            id: "a10",
            qNo: "Question 10",
            sentence: "10. I _______ (just paint) a landscape of the sea.",
            meaning: "👉 हिंदी: मैंने अभी-अभी समुद्र की सुंदर पेंटिंग बनाई है।",
            ans: "have just painted",
            spoken: "आई हैव जस्ट पेंटेड अ लैंडस्केप ऑफ द सी।",
            exp: "I के साथ हमेशा पक्के दोस्त की तरह 'have' आता है! paint में -ed लगकर 'painted' बन जाएगा, इसलिए 'have just painted' सही है।",
            options: [{label: "have just painted", val: "have just painted"}, {label: "has just painted", val: "has just painted"}]
          }
        ]
      },
      {
        tabId: "tab-2",
        guidance: "🎯 <b>Exercise C:</b> जो काम पहले हुआ, उसमें 'had + 3rd form' लगाओ!",
        guidanceVoice: "बच्चों, जो काम दूसरे काम से भी पहले खत्म हो गया था, उसमें हैड लगाओ!",
        questions: [
          {
            id: "c1",
            qNo: "Question 1",
            sentence: "1. I _______ (study) for two hours before I left to play chess.",
            meaning: "👉 हिंदी: चेस खेलने जाने से पहले मैंने दो घंटे पढ़ाई कर ली थी।",
            ans: "had studied",
            spoken: "आई हैड स्टडीड फॉर टू आवर्स बिफोर आई लेफ्ट टू प्ले चेस।",
            exp: "खेलने तो बाद में गया, पहले कुर्सी पर बैठकर पढ़ाई खत्म की थी! जो काम सबसे पहले खत्म हुआ, उसमें जादू का 'had' लगेगा और study का 'studied' बन जाएगा।",
            options: [{label: "had studied", val: "had studied"}, {label: "have studied", val: "have studied"}]
          },
          {
            id: "c2",
            qNo: "Question 2",
            sentence: "2. The family _______ (go) to bed when the alarm went off.",
            meaning: "👉 हिंदी: अलार्म बजने से पहले ही सब सो चुके थे।",
            ans: "had gone",
            spoken: "द फैमिली हैड गॉन टू बेड व्हेन द अलार्म वेंट ऑफ।",
            exp: "घंटी बजने से पहले ही सबने आँखें बंद करके रजाई ओढ़ ली थी! पहले सोने का काम हुआ, इसलिए 'had' और go का 'gone' आएगा।",
            options: [{label: "had gone", val: "had gone"}, {label: "have gone", val: "have gone"}]
          },
          {
            id: "c3",
            qNo: "Question 3",
            sentence: "3. The sparrows _______ (fly) away before the cat could reach them.",
            meaning: "👉 हिंदी: बिल्ली के पहुँचने से पहले ही चिड़ियाँ उड़ गईं!",
            ans: "had flown",
            spoken: "द स्पैरोज़ हैड फ्लोन अवे बिफोर द कैट कुड रीच देम।",
            exp: "बिल्ली मौसी बाद में आई, चिड़ियाँ पहले ही फुर्रर्र से उड़ चुकी थीं! पहले वाले काम में 'had' और fly का 'flown' आएगा।",
            options: [{label: "had flown", val: "had flown"}, {label: "has flown", val: "has flown"}]
          },
          {
            id: "c4",
            qNo: "Question 4",
            sentence: "4. Sneha screamed because she _______ (step) on a lizard.",
            meaning: "👉 हिंदी: स्नेहा चीखी क्योंकि उसका पैर छिपकली पर पड़ गया था!",
            ans: "had stepped",
            spoken: "स्नेहा स्क्रीम्ड बिकॉज़ शी हैड स्टेप्ड ऑन अ लिज़र्ड।",
            exp: "मुँह से चीख बाद में निकली, पहले पैर छिपकली पर पड़ा था! जो पहले हुआ उसमें 'had' और step का 'stepped' आएगा।",
            options: [{label: "had stepped", val: "had stepped"}, {label: "has stepped", val: "has stepped"}]
          },
          {
            id: "c5",
            qNo: "Question 5",
            sentence: "5. They _______ (not lock) the door, so it was easy to break in.",
            meaning: "👉 हिंदी: उन्होंने ताला नहीं लगाया था, इसलिए चोर अंदर घुस गया।",
            ans: "had not locked",
            spoken: "दे हैड नॉट लॉक्ड द डोर, सो इट वॉज़ ईज़ी टू ब्रेक इन।",
            exp: "चोर बाद में घुसा, ताला लगाना पहले ही भूल गए थे! पहले हुई गलती के लिए 'had not locked' आएगा।",
            options: [{label: "had not locked", val: "had not locked"}, {label: "have not locked", val: "have not locked"}]
          },
          {
            id: "c6",
            qNo: "Question 6",
            sentence: "6. We did not swim because we _______ (forget) our swimsuits at home.",
            meaning: "👉 हिंदी: हम तैर नहीं पाए क्योंकि स्विमिंग वाले कपड़े घर भूल आए थे!",
            ans: "had forgotten",
            spoken: "वी डिड नॉट स्विम बिकॉज़ वी हैड फॉरगॉटन आर स्विमसूट्स एट होम।",
            exp: "नदी पर बाद में पहुँचे, कपड़े घर पर पहले ही छूट गए थे! पहले छूटे, इसलिए 'had' और forget का 'forgotten' लगेगा।",
            options: [{label: "had forgotten", val: "had forgotten"}, {label: "have forgotten", val: "have forgotten"}]
          },
          {
            id: "c7",
            qNo: "Question 7",
            sentence: "7. The dog would not have bitten him if he _______ (not tease) it.",
            meaning: "👉 हिंदी: अगर उसने कुत्ते को नहीं छेड़ा होता, तो कुत्ता उसे कभी नहीं काटता!",
            ans: "had not teased",
            spoken: "द डॉग वुड नॉट हैव बिटन हिम इफ ही हैड नॉट टीज़्ड इट।",
            exp: "कुत्ते ने बाद में काटा, बच्चे ने बदमाशी पहले की थी! पहले की गई छेड़खानी के लिए 'had not teased' आएगा।",
            options: [{label: "had not teased", val: "had not teased"}, {label: "has not teased", val: "has not teased"}]
          },
          {
            id: "c8",
            qNo: "Question 8",
            sentence: "8. They _______ (prepare) well, so they won the quiz easily.",
            meaning: "👉 हिंदी: उन्होंने अच्छी तैयारी की थी, इसलिए वे क्विज़ जीत गए।",
            ans: "had prepared",
            spoken: "दे हैड प्रिपेयर्ड वेल, सो दे वन द क्विज़ ईज़िली।",
            exp: "जीतने की ट्रॉफी बाद में मिली, पढ़ाई पहले कई दिनों तक की थी! पहले की गई मेहनत में 'had prepared' आएगा।",
            options: [{label: "had prepared", val: "had prepared"}, {label: "have prepared", val: "have prepared"}]
          },
          {
            id: "c9",
            qNo: "Question 9",
            sentence: "9. The hills were not green because it _______ (not rain) enough that year.",
            meaning: "👉 हिंदी: पहाड़ हरे नहीं थे क्योंकि बारिश ही नहीं हुई थी।",
            ans: "had not rained",
            spoken: "द हिल्स वर नॉट ग्रीन बिकॉज़ इट हैड नॉट रेंड इनफ दैट ईयर।",
            exp: "पेड़-पौधे बाद में सूखे, बादल पहले ही नहीं बरसे थे! जो पहले नहीं हुआ उसमें 'had not rained' सही है।",
            options: [{label: "had not rained", val: "had not rained"}, {label: "has not rained", val: "has not rained"}]
          },
          {
            id: "c10",
            qNo: "Question 10",
            sentence: "10. My family _______ (live) in Sri Lanka before we moved here.",
            meaning: "👉 हिंदी: यहाँ आने से पहले हमारा परिवार श्रीलंका में रहता था।",
            ans: "had lived",
            spoken: "माय फैमिली हैड लिव्ड इन श्रीलंका बिफोर वी मूव्ड हियर।",
            exp: "यहाँ तो हम नए घर में बाद में आए, श्रीलंका में पहले रहते थे! पुराने वाले घर के लिए 'had lived' लगेगा।",
            options: [{label: "had lived", val: "had lived"}, {label: "have lived", val: "have lived"}]
          }
        ]
      },
      {
        tabId: "tab-3",
        guidance: "🎯 <b>Exercise D:</b> कारण समझो और सही Tense चुनो!",
        guidanceVoice: "बच्चों, देखो कि काम पहले हुआ था या अभी का असर है, और सही उत्तर चुनो!",
        questions: [
          {
            id: "d1",
            qNo: "Question 1",
            sentence: "1. The child wanted a robot because she _______ (see) one with her friend.",
            meaning: "👉 हिंदी: बच्ची को रोबोट चाहिए था क्योंकि उसने सहेली के पास देखा था।",
            ans: "had seen",
            spoken: "द चाइल्ड वॉन्टेड अ रोबोट बिकॉज़ शी हैड सीन वन विद हर फ्रेंड।",
            exp: "रोबोट खिलौना बाद में माँगा, सहेली के हाथ में पहले ही देख लिया था! जो पहले देखा उसमें 'had seen' आएगा।",
            options: [{label: "had seen", val: "had seen"}, {label: "has seen", val: "has seen"}]
          },
          {
            id: "d2",
            qNo: "Question 2",
            sentence: "2. The climber slipped because he _______ (lose) hold.",
            meaning: "👉 हिंदी: पहाड़ चढ़ने वाला फिसल गया क्योंकि उसकी पकड़ छूट गई थी।",
            ans: "had lost",
            spoken: "द क्लाइंबर स्लिप्ड बिकॉज़ ही हैड लॉस्ट होल्ड।",
            exp: "पहाड़ से नीचे बाद में फिसला, हाथ से रस्सी पहले छूटी थी! पहले हाथ छूटा इसलिए 'had lost' सही है।",
            options: [{label: "had lost", val: "had lost"}, {label: "has lost", val: "has lost"}]
          },
          {
            id: "d3",
            qNo: "Question 3",
            sentence: "3. I recognise the pyramids because I _______ (see) their pictures before.",
            meaning: "👉 हिंदी: मैं पिरामिड पहचानता हूँ क्योंकि मैंने पहले फ़ोटो देखी है।",
            ans: "have seen",
            spoken: "आई रेकग्नाइज़ द पिरामिड्स बिकॉज़ आई हैव सीन देयर पिक्चर्स बिफोर।",
            exp: "पहचान आज अभी रहा है (recognise)! और I के साथ आज के समय में 'have seen' आता है।",
            options: [{label: "have seen", val: "have seen"}, {label: "had seen", val: "had seen"}]
          },
          {
            id: "d4",
            qNo: "Question 4",
            sentence: "4. His hair appears clean because he _______ (just comb) it.",
            meaning: "👉 हिंदी: उसके बाल साफ़ दिख रहे हैं क्योंकि उसने अभी-अभी कंघी की है।",
            ans: "has just combed",
            spoken: "हिज़ हेयर अपीयर्स क्लीन बिकॉज़ ही हैज़ जस्ट कोम्बड इट।",
            exp: "बाल अभी सुंदर दिख रहे हैं और लड़का अकेला (he) है! अकेले के लिए 'has just combed' सही है।",
            options: [{label: "has just combed", val: "has just combed"}, {label: "had just combed", val: "had just combed"}]
          },
          {
            id: "d5",
            qNo: "Question 5",
            sentence: "5. Boozo was happy because he _______ (play) with a ball.",
            meaning: "👉 हिंदी: बूज़ो कुत्ता खुश था क्योंकि वह गेंद से खेल चुका था।",
            ans: "had played",
            spoken: "बूज़ो वॉज़ हैप्पी बिकॉज़ ही हैड प्लेड विद अ बॉल।",
            exp: "बूज़ो खुश बाद में हुआ, गेंद से पहले खेला था! पहले वाले खेल के लिए 'had played' आएगा।",
            options: [{label: "had played", val: "had played"}, {label: "has played", val: "has played"}]
          },
          {
            id: "d6",
            qNo: "Question 6",
            sentence: "6. Brinda looks happy because she _______ (finish) first.",
            meaning: "👉 हिंदी: बृंदा खुश दिख रही है क्योंकि वह पहले नंबर पर आई है!",
            ans: "has finished",
            spoken: "बृंदा लुक्स हैप्पी बिकॉज़ शी हैज़ फिनिश्ड फर्स्ट।",
            exp: "बृंदा अभी मुस्कुरा रही है (looks) और बृंदा अकेली बच्ची है! इसलिए 'has finished' सही है।",
            options: [{label: "has finished", val: "has finished"}, {label: "had finished", val: "had finished"}]
          },
          {
            id: "d7",
            qNo: "Question 7",
            sentence: "7. Zany changed schools because her family _______ (move) houses.",
            meaning: "👉 हिंदी: ज़ैनी ने स्कूल बदला क्योंकि उसका परिवार दूसरे घर चला गया था।",
            ans: "had moved",
            spoken: "ज़ैनी चेंज्ड स्कूल्स बिकॉज़ हर फैमिली हैड मूव्द हाउसेस।",
            exp: "नया स्कूल बाद में मिला, पुराना घर पहले छोड़ा था! जो काम पहले खत्म हुआ उसमें 'had moved' आएगा।",
            options: [{label: "had moved", val: "had moved"}, {label: "has moved", val: "has moved"}]
          },
          {
            id: "d8",
            qNo: "Question 8",
            sentence: "8. The bees are upset because Priyam _______ (poke) the beehive.",
            meaning: "👉 हिंदी: मधुमक्खियाँ गुस्से में हैं क्योंकि प्रियम ने छत्ते में डंडा मारा है!",
            ans: "has poked",
            spoken: "द बीज़ आर अपसेट बिकॉज़ प्रियम हैज़ पोक्ड द बीहाइव।",
            exp: "मक्खियाँ अभी गुस्से में उड़ रही हैं (are) और प्रियम एक अकेला बच्चा है! अकेले के लिए 'has poked' आएगा।",
            options: [{label: "has poked", val: "has poked"}, {label: "had poked", val: "had poked"}]
          },
          {
            id: "d9",
            qNo: "Question 9",
            sentence: "9. Hansel and Gretel could find their way back because they _______ (mark) their way.",
            meaning: "👉 हिंदी: बच्चे रास्ता ढूँढ पाए क्योंकि उन्होंने रास्ते पर निशान बना दिए थे।",
            ans: "had marked",
            spoken: "हेंसल एंड ग्रेटेल कुड फाइंड देयर वे बैक बिकॉज़ दे हैड मार्क्ड देयर वे।",
            exp: "घर बाद में पहुँचे, रास्ते पर कंकड़ पहले ही गिरा दिए थे! पहले किए गए काम में 'had marked' आएगा।",
            options: [{label: "had marked", val: "had marked"}, {label: "have marked", val: "have marked"}]
          },
          {
            id: "d10",
            qNo: "Question 10",
            sentence: "10. Cinderella ran away because the clock _______ (strike) twelve.",
            meaning: "👉 हिंदी: सिंड्रेला पार्टी से भागी क्योंकि घड़ी में रात के बारह बज गए थे!",
            ans: "had struck",
            spoken: "सिंड्रेला रैन अवे बिकॉज़ द क्लॉक हैड स्ट्रक ट्वेल्व।",
            exp: "सिंड्रेला बाद में भागी, घड़ी में टन-टन 12 पहले बजे थे! पहले बजे इसलिए 'had struck' सही है।",
            options: [{label: "had struck", val: "had struck"}, {label: "has struck", val: "has struck"}]
          }
        ]
      },
      {
        tabId: "tab-4",
        guidance: "🎯 <b>Exercise F:</b> भूकंप से पहले जानवरों ने क्या किया? (सबमें had + 3rd form लगाओ)",
        guidanceVoice: "बच्चों, भूकंप आने से पहले ही जानवरों को पता चल गया था, इसलिए सबमें हैड लगाओ!",
        questions: [
          {
            id: "f1",
            qNo: "Question 1",
            sentence: "1. The snakes _______ (come) out from their holes.",
            meaning: "👉 हिंदी: भूकंप आने से पहले साँप बिलों से बाहर आ गए थे।",
            ans: "had come",
            spoken: "द स्नेक्स हैड कम आउट फ्रॉम देयर होल्स।",
            exp: "धरती बाद में हिली, साँप पहले ही बाहर आ गए थे! पहले हुए काम में 'had' आता है और come का तीसरा रूप भी 'come' ही रहता है।",
            options: [{label: "had come", val: "had come"}, {label: "has come", val: "has come"}]
          },
          {
            id: "f2",
            qNo: "Question 2",
            sentence: "2. Buffaloes _______ (stop) giving milk.",
            meaning: "👉 हिंदी: भैंसों ने दूध देना बंद कर दिया था।",
            ans: "had stopped",
            spoken: "बफेलोज़ हैड स्टॉप्ड गिविंग मिल्क।",
            exp: "भूकंप से पहले ही भैंस डर गई थी! पहले वाले काम में 'had stopped' आएगा (p दो बार लिखा जाएगा)।",
            options: [{label: "had stopped", val: "had stopped"}, {label: "have stopped", val: "have stopped"}]
          },
          {
            id: "f3",
            qNo: "Question 3",
            sentence: "3. Bees _______ (leave) their hives.",
            meaning: "👉 हिंदी: मधुमक्खियाँ अपने छत्ते छोड़कर उड़ गई थीं।",
            ans: "had left",
            spoken: "बीज़ हैड लेफ्ट देयर हाइव्स।",
            exp: "छत्ता पहले ही खाली हो गया था! पहले हुए काम में 'had' लगता है और leave बदलकर 'left' बन जाता है।",
            options: [{label: "had left", val: "had left"}, {label: "has left", val: "has left"}]
          },
          {
            id: "f4",
            qNo: "Question 4",
            sentence: "4. The flamingos _______ (fly) to higher grounds.",
            meaning: "👉 हिंदी: राजहंस पक्षी ऊँची जगहों पर उड़ गए थे।",
            ans: "had flown",
            spoken: "द फ्लेमिंगोज़ हैड फ्लोन टू हायर ग्राउंड्स।",
            exp: "पक्षी पहले ही आसमान में उड़ गए थे! पहले के काम में 'had' और fly का रूप 'flown' आता है।",
            options: [{label: "had flown", val: "had flown"}, {label: "have flown", val: "have flown"}]
          },
          {
            id: "f5",
            qNo: "Question 5",
            sentence: "5. The elephants _______ (begin) trumpeting loudly.",
            meaning: "👉 हिंदी: हाथियों ने चिंघाड़ना शुरू कर दिया था।",
            ans: "had begun",
            spoken: "द एलिफेंट्स हैड बिगन ट्रंपेटिंग लाउडली।",
            exp: "हाथी पहले ही आवाज़ करने लगे थे! पहले के लिए 'had' लगेगा और begin बदलकर 'begun' बन जाएगा।",
            options: [{label: "had begun", val: "had begun"}, {label: "has begun", val: "has begun"}]
          },
          {
            id: "f6",
            qNo: "Question 6",
            sentence: "6. Cats and dogs _______ (start) whining.",
            meaning: "👉 हिंदी: कुत्ते और बिल्लियाँ रोने जैसी आवाज़ निकालने लगे थे।",
            ans: "had started",
            spoken: "कैट्स एंड डॉग्स हैड स्टार्टेड वाइनिंग।",
            exp: "कुत्ते-बिल्लियाँ डर कर पहले ही रोने लगे थे! पहले हुए काम में 'had started' आएगा।",
            options: [{label: "had started", val: "had started"}, {label: "have started", val: "have started"}]
          },
          {
            id: "f7",
            qNo: "Question 7",
            sentence: "7. The ant colonies _______ (move) out of their mounds.",
            meaning: "👉 हिंदी: चींटियाँ अपने घरों से बाहर निकलने लगी थीं।",
            ans: "had moved",
            spoken: "द आंट कॉलोनीज़ हैड मूव्द आउट ऑफ देयर माउंट्स।",
            exp: "नन्हीं चींटियाँ पहले ही लाइन लगाकर बाहर आ गई थीं! पहले के काम में 'had moved' आएगा।",
            options: [{label: "had moved", val: "had moved"}, {label: "has moved", val: "has moved"}]
          },
          {
            id: "f8",
            qNo: "Question 8",
            sentence: "8. Apes _______ (climb up) the trees.",
            meaning: "👉 हिंदी: बंदर और लंगूर पेड़ों पर चढ़ गए थे।",
            ans: "had climbed up",
            spoken: "एप्स हैड क्लाइम्ब्ड अप द ट्रीज़।",
            exp: "बंदर मामा पहले ही पेड़ की डाल पर चढ़कर बैठ गए थे! पहले के लिए 'had climbed up' आएगा।",
            options: [{label: "had climbed up", val: "had climbed up"}, {label: "have climbed up", val: "have climbed up"}]
          },
          {
            id: "f9",
            qNo: "Question 9",
            sentence: "9. Horses _______ (bolt) from their stables.",
            meaning: "👉 हिंदी: घोड़े अपने अस्तबल से भाग खड़े हुए थे।",
            ans: "had bolted",
            spoken: "हॉर्सेस हैड बोल्टेड फ्रॉम देयर स्टेबल्स।",
            exp: "घोड़े पहले ही हिनहिना कर भाग गए थे! पहले हुए काम में 'had bolted' लगेगा।",
            options: [{label: "had bolted", val: "had bolted"}, {label: "has bolted", val: "has bolted"}]
          },
          {
            id: "f10",
            qNo: "Question 10",
            sentence: "10. Hens _______ (refuse) to lay eggs.",
            meaning: "👉 हिंदी: मुर्गियों ने अंडे देने से मना कर दिया था।",
            ans: "had refused",
            spoken: "हेन्स हैड रिफ्यूज्ड टू ले एग्स।",
            exp: "मुर्गियाँ पहले ही डर के मारे बैठ गई थीं! पहले के काम के लिए 'had refused' बिल्कुल सही है।",
            options: [{label: "had refused", val: "had refused"}, {label: "have refused", val: "have refused"}]
          }
        ]
      }
    ]
  }
};

// डिफ़ॉल्ट रूप से पहले चैप्टर का डेटा सेट रहेगा
let APP_DATA = ALL_CHAPTERS["ch1"];