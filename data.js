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
  },

  "ch19": {
    name: "Chapter 19: Voice (Active and Passive)",
    understanding: [
      {
        id: "und_active",
        type: "concept",
        badge: "नियम 1 (हीरो आगे)",
        sentence: "Active Voice क्या होता है?",
        meaning: "👉 काम करने वाला राजा (Doer) सबसे आगे!",
        desc: "जब काम करने वाला (जैसे रोहन, मम्मी या बिल्ली) सबसे आगे खड़ा हो, तो उसे <b>Active Voice</b> कहते हैं! जैसे: <i>रोहन ने सेब खाया।</i> यहाँ रोहन हीरो है!",
        tts: "एक्टिव वॉइस में काम करने वाला हीरो सबसे आगे खड़ा होता है! जैसे रोहन ने गेंद फेंकी।"
      },
      {
        id: "und_passive",
        type: "concept",
        badge: "नियम 2 (चीज़ आगे)",
        sentence: "Passive Voice क्या होता है?",
        meaning: "👉 जिस चीज़ पर काम हुआ (Receiver) वो आगे!",
        desc: "जब जिस खिलौने, खाने या चीज़ पर काम हुआ, वो आगे आ जाए तो उसे <b>Passive Voice</b> कहते हैं! जैसे: <i>सेब रोहन द्वारा खाया गया।</i> बात वही है, बस बोलने का मज़ा बदल गया!",
        tts: "पैसिव वॉइस में खिलौना या चीज़ आगे आ जाती है! जैसे गेंद रोहन ने पकड़ी।"
      },
      {
        id: "und_voice_magic",
        type: "magic",
        badge: "जादुई फॉर्मूला",
        badgeStyle: "background:#D1FAE5;color:#047857;",
        sentence: "⭐ Active से Passive का 3-स्टेप जादू",
        meaning: "👉 कुर्सी की अदला-बदली!",
        desc: "👉 <b>स्टेप 1:</b> पीछे वाले को आगे बैठाओ!<br>👉 <b>स्टेप 2:</b> Be का रूप (is/am/are/was/were) + Verb की 3rd Form लगाओ!<br>👉 <b>स्टेप 3:</b> 'by' लगाकर पुराने हीरो को पीछे भेज दो!",
        tts: "पीछे वाले को आगे लाओ, हेल्पिंग वर्ब के साथ तीसरी फॉर्म लगाओ, और बाय लगाकर पुराने दोस्त को पीछे बैठा दो!"
      }
    ],
    exercises: [
      {
        tabId: "tab-warmup",
        guidance: "🎯 <b>Warm-up:</b> सही मतलब वाला वाक्य चुनो!",
        guidanceVoice: "बच्चों, दिए गए वाक्य का सही मतलब कौन सा है? सही विकल्प पर टैप करो!",
        questions: [
          {
            id: "w1",
            qNo: "Warm-up",
            sentence: "You must switch off your mobile.",
            meaning: "👉 हिंदी: तुम्हें अपना मोबाइल बंद कर देना चाहिए।",
            ans: "opt2",
            spoken: "यू मस्ट स्विच ऑफ योर मोबाइल।",
            exp: "मोबाइल खुद से अपने बटन नहीं दबा सकता! मोबाइल को तुम्हारे द्वारा बंद किया जाना चाहिए, इसलिए 'Your mobile must be switched off' सही है।",
            options: [
              {label: "1. Your mobile must switch you off.", val: "opt1"},
              {label: "2. Your mobile must be switched off.", val: "opt2"}
            ]
          }
        ]
      },
      {
        tabId: "tab-1",
        guidance: "🎯 <b>Exercise A:</b> पहचानो कि आगे खड़ा शब्द Doer (काम करने वाला - D) है या Receiver (जिस पर काम हुआ - R)!",
        guidanceVoice: "बच्चों, देखो जो आगे खड़ा है वो खुद काम कर रहा है (डी), या उस पर काम हो रहा है (आर)!",
        questions: [
          {
            id: "a1",
            qNo: "Question 1",
            sentence: "1. Our gardener is growing flowers.",
            meaning: "👉 हिंदी: हमारे माली अंकल फूल उगा रहे हैं।",
            ans: "D",
            spoken: "आर गार्डनर इज़ ग्रोइंग फ्लावर्स।",
            exp: "माली अंकल अपने हाथों से पौधे लगा रहे हैं! वो खुद काम कर रहे हैं, इसलिए वो Doer (D) हैं।",
            options: [{label: "D (Doer)", val: "D"}, {label: "R (Receiver)", val: "R"}]
          },
          {
            id: "a2",
            qNo: "Question 2",
            sentence: "2. My sister bought a crossword book for me.",
            meaning: "👉 हिंदी: मेरी बहन मेरे लिए किताब खरीद कर लाई।",
            ans: "D",
            spoken: "माय सिस्टर बॉट अ क्रॉसवर्ड बुक फॉर मी।",
            exp: "दीदी खुद दुकान गईं और किताब खरीदी! दीदी काम करने वाली हैं, इसलिए Doer (D) हैं।",
            options: [{label: "D (Doer)", val: "D"}, {label: "R (Receiver)", val: "R"}]
          },
          {
            id: "a3",
            qNo: "Question 3",
            sentence: "3. The cheese has been nibbled by the mouse.",
            meaning: "👉 हिंदी: चूहे ने पनीर को कुतर दिया।",
            ans: "R",
            spoken: "द चीज़ हैज़ बीन निबल्ड बाय द माउस।",
            exp: "पनीर (The cheese) बेचारा चुपचाप रखा था, चूहे ने आकर उसे खाया! पनीर पर काम हुआ, इसलिए वो Receiver (R) है।",
            options: [{label: "D (Doer)", val: "D"}, {label: "R (Receiver)", val: "R"}]
          },
          {
            id: "a4",
            qNo: "Question 4",
            sentence: "4. Parents love their children.",
            meaning: "👉 हिंदी: मम्मी-पापा अपने बच्चों से प्यार करते हैं।",
            ans: "D",
            spoken: "पेरेंट्स लव देयर चिल्ड्रन।",
            exp: "मम्मी-पापा प्यार करने वाले हीरो हैं! वे खुद काम कर रहे हैं, इसलिए Doer (D) हैं।",
            options: [{label: "D (Doer)", val: "D"}, {label: "R (Receiver)", val: "R"}]
          },
          {
            id: "a5",
            qNo: "Question 5",
            sentence: "5. Some children donate their toys.",
            meaning: "👉 हिंदी: कुछ प्यारे बच्चे अपने खिलौने दूसरों को देते हैं।",
            ans: "D",
            spoken: "सम चिल्ड्रन डोनेट देयर टॉयज़।",
            exp: "बच्चे खुद खुशी-खुशी अपने खिलौने दे रहे हैं! वे खुद काम कर रहे हैं, इसलिए Doer (D) हैं।",
            options: [{label: "D (Doer)", val: "D"}, {label: "R (Receiver)", val: "R"}]
          },
          {
            id: "a6",
            qNo: "Question 6",
            sentence: "6. These fruits were picked by us.",
            meaning: "👉 हिंदी: ये फल हमारे द्वारा तोड़े गए।",
            ans: "R",
            spoken: "दीज़ फ्रूट्स वर पिक्ड बाय अस।",
            exp: "मीठे फल (Fruits) पेड़ पर लटके थे, उन्हें तोड़ा गया! फलों पर काम हुआ, इसलिए वे Receiver (R) हैं।",
            options: [{label: "D (Doer)", val: "D"}, {label: "R (Receiver)", val: "R"}]
          },
          {
            id: "a7",
            qNo: "Question 7",
            sentence: "7. Roosters and crows make the most noise.",
            meaning: "👉 हिंदी: मुर्गे और कौवे बहुत शोर मचाते हैं।",
            ans: "D",
            spoken: "रूस्टर्स एंड क्रोज़ मेक द मोस्ट नॉइज़।",
            exp: "मुर्गे कुकड़ू-कूँ और कौवे काँव-काँव खुद बोल रहे हैं! वे आवाज़ निकाल रहे हैं, इसलिए Doer (D) हैं।",
            options: [{label: "D (Doer)", val: "D"}, {label: "R (Receiver)", val: "R"}]
          },
          {
            id: "a8",
            qNo: "Question 8",
            sentence: "8. The criminals were punished by the police.",
            meaning: "👉 हिंदी: चोरों को पुलिस अंकल ने सज़ा दी।",
            ans: "R",
            spoken: "द क्रिमिनल्स वर पनिश्ड बाय द पुलिस।",
            exp: "बदमाशों को पुलिस ने पकड़ा और सज़ा दी! सज़ा बदमाशों पर पड़ी, इसलिए वे Receiver (R) हैं।",
            options: [{label: "D (Doer)", val: "D"}, {label: "R (Receiver)", val: "R"}]
          },
          {
            id: "a9",
            qNo: "Question 9",
            sentence: "9. Apples are grown in Himachal Pradesh.",
            meaning: "👉 हिंदी: सेब हिमाचल प्रदेश में उगाए जाते हैं।",
            ans: "R",
            spoken: "एप्पल्स आर ग्रोन इन हिमाचल प्रदेश।",
            exp: "लाल सेब खुद नहीं उगते, किसान उन्हें उगाते हैं! सेब पर काम हुआ, इसलिए वे Receiver (R) हैं।",
            options: [{label: "D (Doer)", val: "D"}, {label: "R (Receiver)", val: "R"}]
          },
          {
            id: "a10",
            qNo: "Question 10",
            sentence: "10. The tourists made a big snowman.",
            meaning: "👉 हिंदी: घूमने आए लोगों ने बर्फ का बड़ा पुतला बनाया।",
            ans: "D",
            spoken: "द टूरिस्ट्स मेड अ बिग स्नोमैन।",
            exp: "लोगों ने अपने हाथों से बर्फ का स्नोमैन बनाया! वे बनाने वाले हैं, इसलिए Doer (D) हैं।",
            options: [{label: "D (Doer)", val: "D"}, {label: "R (Receiver)", val: "R"}]
          }
        ]
      },
      {
        tabId: "tab-2",
        guidance: "🎯 <b>Exercise B:</b> पहचानो कि वाक्य Active Voice (A) है या Passive Voice (P)!",
        guidanceVoice: "बच्चों, अगर काम करने वाला आगे है तो ए चुनो, और अगर चीज़ आगे है तो पी चुनो!",
        questions: [
          {
            id: "b1",
            qNo: "Question 1",
            sentence: "1. Shah Jahan built the Red Fort in Delhi.",
            meaning: "👉 हिंदी: शाहजहाँ ने दिल्ली का लाल किला बनवाया।",
            ans: "A",
            spoken: "शाहजहाँ बिल्ट द रेड फोर्ट इन दिल्ली।",
            exp: "राजा शाहजहाँ (काम करने वाला) सबसे आगे खड़ा है! इसलिए यह Active Voice (A) है।",
            options: [{label: "A (Active)", val: "A"}, {label: "P (Passive)", val: "P"}]
          },
          {
            id: "b2",
            qNo: "Question 2",
            sentence: "2. The Sanchi Stupa is surrounded by four gateways.",
            meaning: "👉 हिंदी: साँची स्तूप चार दरवाजों से घिरा हुआ है।",
            ans: "P",
            spoken: "द साँची स्तूपा इज़ सराउंडेड बाय फोर गेटवेज़।",
            exp: "स्तूप इमारत आगे है और साथ में 'is surrounded by' लगा है! इसलिए यह Passive Voice (P) है।",
            options: [{label: "A (Active)", val: "A"}, {label: "P (Passive)", val: "P"}]
          },
          {
            id: "b3",
            qNo: "Question 3",
            sentence: "3. Many historical monuments have been declared Heritage sites.",
            meaning: "👉 हिंदी: कई पुरानी इमारतों को हेरिटेज घोषित किया गया है।",
            ans: "P",
            spoken: "मैनी हिस्टोरिकल मॉन्यूमेंट्स हैव बीन डिक्लेयर्ड हेरिटेज साइट्स।",
            exp: "पुरानी इमारतें खुद कुछ नहीं कहतीं, उन्हें घोषित किया गया है! 'have been declared' लगा है, इसलिए Passive (P) है।",
            options: [{label: "A (Active)", val: "A"}, {label: "P (Passive)", val: "P"}]
          },
          {
            id: "b4",
            qNo: "Question 4",
            sentence: "4. The India Gate was designed by the famous British architect, Edwin Lutyens.",
            meaning: "👉 हिंदी: इंडिया गेट का नक्शा एडविन लुटियंस ने बनाया था।",
            ans: "P",
            spoken: "द इंडिया गेट वॉज़ डिज़ाइन्ड बाय द फेमस ब्रिटिश आर्किटेक्ट।",
            exp: "इंडिया गेट आगे बैठा है और बनाने वाले अंकल पीछे 'by' के साथ हैं! इसलिए यह Passive Voice (P) है।",
            options: [{label: "A (Active)", val: "A"}, {label: "P (Passive)", val: "P"}]
          },
          {
            id: "b5",
            qNo: "Question 5",
            sentence: "5. Santiniketan in West Bengal was set up by Rabindranath Tagore.",
            meaning: "👉 हिंदी: शांतिनिकेतन की स्थापना रवींद्रनाथ टैगोर ने की थी।",
            ans: "P",
            spoken: "शांतिनिकेतन इन वेस्ट बंगाल वॉज़ सेट अप बाय रवींद्रनाथ टैगोर।",
            exp: "शांतिनिकेतन स्कूल आगे है और टैगोर जी 'by' के साथ हैं! इसलिए यह Passive Voice (P) है।",
            options: [{label: "A (Active)", val: "A"}, {label: "P (Passive)", val: "P"}]
          },
          {
            id: "b6",
            qNo: "Question 6",
            sentence: "6. Sir Malcolm Hailey developed the Jim Corbett National Park in Nainital.",
            meaning: "👉 हिंदी: मैल्कम हेली ने जिम कॉर्बेट नेशनल पार्क बनाया।",
            ans: "A",
            spoken: "सर मैल्कम हेली डेवलप्ड द जिम कॉर्बेट नेशनल पार्क।",
            exp: "काम करने वाले अंकल (Sir Malcolm) सबसे आगे खड़े होकर काम कर रहे हैं! इसलिए Active Voice (A) है।",
            options: [{label: "A (Active)", val: "A"}, {label: "P (Passive)", val: "P"}]
          },
          {
            id: "b7",
            qNo: "Question 7",
            sentence: "7. The original wooden Mysore Palace was destroyed by fire.",
            meaning: "👉 हिंदी: लकड़ी का मैसूर महल आग से जल गया था।",
            ans: "P",
            spoken: "द ओरिजिनल वुडन मैसूर पैलेस वॉज़ डिस्ट्रॉयड बाय फायर।",
            exp: "सुंदर महल आगे है और आग 'by fire' पीछे है! इसलिए यह Passive Voice (P) है।",
            options: [{label: "A (Active)", val: "A"}, {label: "P (Passive)", val: "P"}]
          },
          {
            id: "b8",
            qNo: "Question 8",
            sentence: "8. The Ellora Caves were carved out of volcanic deposits.",
            meaning: "👉 हिंदी: एलोरा की गुफाएँ पत्थरों को तराश कर बनाई गई थीं।",
            ans: "P",
            spoken: "द एलोरा केव्स वर कार्व्ड आउट ऑफ वोल्केनिक डिपॉजिट्स।",
            exp: "गुफाएँ खुद नहीं बनीं, उन्हें तराशा गया! 'were carved' लगा है, इसलिए Passive Voice (P) है।",
            options: [{label: "A (Active)", val: "A"}, {label: "P (Passive)", val: "P"}]
          },
          {
            id: "b9",
            qNo: "Question 9",
            sentence: "9. Over 1,000 elephants transported heavy materials and supplies for the construction of the Taj Mahal.",
            meaning: "👉 हिंदी: एक हज़ार से ज्यादा हाथियों ने भारी पत्थर ढोए।",
            ans: "A",
            spoken: "ओवर वन थाउज़ेंड एलिफेंट्स ट्रांसपोर्टेड हैवी मटेरियल्स।",
            exp: "भारी-भरकम प्यारे हाथी खुद पत्थर ढो रहे थे! काम करने वाले आगे हैं, इसलिए Active Voice (A) है।",
            options: [{label: "A (Active)", val: "A"}, {label: "P (Passive)", val: "P"}]
          },
          {
            id: "b10",
            qNo: "Question 10",
            sentence: "10. The chariot shape of the Konark Sun Temple attracts many tourists.",
            meaning: "👉 हिंदी: कोणार्क सूर्य मंदिर का रथ जैसा रूप लोगों को आकर्षित करता है।",
            ans: "A",
            spoken: "द चैरियट शेप ऑफ द कोणार्क सन टेम्पल अट्रैक्ट्स मैनी टूरिस्ट्स।",
            exp: "मंदिर का सुंदर रथ-आकार खुद लोगों को खींच रहा है! इसलिए यह Active Voice (A) है।",
            options: [{label: "A (Active)", val: "A"}, {label: "P (Passive)", val: "P"}]
          }
        ]
      },
      {
        tabId: "tab-3",
        guidance: "🎯 <b>Exercise C:</b> Active वाक्य को Passive Voice में बदलो!",
        guidanceVoice: "बच्चों, पीछे वाली चीज़ को आगे लाओ और सही पैसिव रूप चुनो!",
        questions: [
          {
            id: "c1",
            qNo: "Question 1",
            sentence: "1. I clean my room every day.",
            meaning: "👉 हिंदी: मैं रोज़ अपना कमरा साफ़ करता हूँ।",
            ans: "My room is cleaned by me every day.",
            spoken: "आई क्लीन माय रूम एवरी डे।",
            exp: "कमरा (My room) आगे आ जाएगा! एक कमरा है इसलिए 'is cleaned' और I पीछे जाकर 'by me' बन जाएगा।",
            options: [
              {label: "My room is cleaned by me every day.", val: "My room is cleaned by me every day."},
              {label: "My room was cleaned by me every day.", val: "My room was cleaned by me every day."}
            ]
          },
          {
            id: "c2",
            qNo: "Question 2",
            sentence: "2. The teacher asked a question.",
            meaning: "👉 हिंदी: मैडम ने एक सवाल पूछा।",
            ans: "A question was asked by the teacher.",
            spoken: "द टीचर आस्क्ड अ क्वेश्चन।",
            exp: "सवाल (A question) आगे आएगा! बात पुरानी है इसलिए 'was asked' और मैडम पीछे जाकर 'by the teacher' बन जाएँगी।",
            options: [
              {label: "A question was asked by the teacher.", val: "A question was asked by the teacher."},
              {label: "A question is asked by the teacher.", val: "A question is asked by the teacher."}
            ]
          },
          {
            id: "c3",
            qNo: "Question 3",
            sentence: "3. The students wrote the answers.",
            meaning: "👉 हिंदी: बच्चों ने उत्तर लिखे।",
            ans: "The answers were written by the students.",
            spoken: "द स्टूडेंट्स रोट द आंसर्स।",
            exp: "उत्तर बहुत सारे हैं (The answers), इसलिए 'were written' आएगा और बच्चे पीछे जाकर 'by the students' बनेंगे।",
            options: [
              {label: "The answers were written by the students.", val: "The answers were written by the students."},
              {label: "The answers was written by the students.", val: "The answers was written by the students."}
            ]
          },
          {
            id: "c4",
            qNo: "Question 4",
            sentence: "4. My sister was baking a cake in the morning.",
            meaning: "👉 हिंदी: दीदी सुबह केक बना रही थीं।",
            ans: "A cake was being baked by my sister in the morning.",
            spoken: "माय सिस्टर वॉज़ बेकिंग अ केक इन द मॉर्निंग।",
            exp: "स्वादिष्ट केक (A cake) आगे आएगा! जब काम चल रहा था तो 'was being baked' लगता है।",
            options: [
              {label: "A cake was being baked by my sister in the morning.", val: "A cake was being baked by my sister in the morning."},
              {label: "A cake is being baked by my sister.", val: "A cake is being baked by my sister."}
            ]
          },
          {
            id: "c5",
            qNo: "Question 5",
            sentence: "5. The school has announced a holiday.",
            meaning: "👉 हिंदी: स्कूल ने छुट्टी की घोषणा कर दी है!",
            ans: "A holiday has been announced by the school.",
            spoken: "द स्कूल हैज़ अनाउंस्ड अ हॉलिडे।",
            exp: "छुट्टी (A holiday) आगे आएगी! 'has announced' बदल कर 'has been announced' बन जाएगा।",
            options: [
              {label: "A holiday has been announced by the school.", val: "A holiday has been announced by the school."},
              {label: "A holiday had been announced by the school.", val: "A holiday had been announced by the school."}
            ]
          },
          {
            id: "c6",
            qNo: "Question 6",
            sentence: "6. They have mowed the lawn.",
            meaning: "👉 हिंदी: उन्होंने बगीचे की घास काट दी है।",
            ans: "The lawn has been mowed by them.",
            spoken: "दे हैव मोड द लॉन।",
            exp: "बगीचा अकेला है (The lawn), इसलिए have की जगह 'has been mowed' आएगा और They पीछे जाकर 'by them' बन जाएगा।",
            options: [
              {label: "The lawn has been mowed by them.", val: "The lawn has been mowed by them."},
              {label: "The lawn have been mowed by them.", val: "The lawn have been mowed by them."}
            ]
          },
          {
            id: "c7",
            qNo: "Question 7",
            sentence: "7. My aunt is knitting a sweater for me.",
            meaning: "👉 हिंदी: चाची मेरे लिए स्वेटर बुन रही हैं।",
            ans: "A sweater is being knitted for me by my aunt.",
            spoken: "माय आंट इज़ निटिंग अ स्वेटर फॉर मी।",
            exp: "गर्म स्वेटर (A sweater) आगे आएगा! अभी बुन रही हैं, इसलिए 'is being knitted' आएगा।",
            options: [
              {label: "A sweater is being knitted for me by my aunt.", val: "A sweater is being knitted for me by my aunt."},
              {label: "A sweater was being knitted by my aunt.", val: "A sweater was being knitted by my aunt."}
            ]
          },
          {
            id: "c8",
            qNo: "Question 8",
            sentence: "8. I am packing the gift.",
            meaning: "👉 हिंदी: मैं गिफ्ट पैक कर रहा हूँ।",
            ans: "The gift is being packed by me.",
            spoken: "आई एम पैकिंग द गिफ्ट।",
            exp: "सुंदर उपहार (The gift) आगे आएगा! अभी काम चल रहा है, इसलिए 'is being packed by me' होगा।",
            options: [
              {label: "The gift is being packed by me.", val: "The gift is being packed by me."},
              {label: "The gift was packed by me.", val: "The gift was packed by me."}
            ]
          },
          {
            id: "c9",
            qNo: "Question 9",
            sentence: "9. The mechanic fixed the car.",
            meaning: "👉 हिंदी: मैकेनिक अंकल ने कार ठीक कर दी।",
            ans: "The car was fixed by the mechanic.",
            spoken: "द मैकेनिक फिक्स्ड द कार।",
            exp: "गाड़ी (The car) आगे आ जाएगी! काम हो चुका था, इसलिए 'was fixed by the mechanic' सही है।",
            options: [
              {label: "The car was fixed by the mechanic.", val: "The car was fixed by the mechanic."},
              {label: "The car is fixed by the mechanic.", val: "The car is fixed by the mechanic."}
            ]
          },
          {
            id: "c10",
            qNo: "Question 10",
            sentence: "10. The blind woman had grown these plants.",
            meaning: "👉 हिंदी: उन महिला ने ये पौधे बड़े प्यार से उगाए थे।",
            ans: "These plants had been grown by the blind woman.",
            spoken: "द ब्लाइंड वुमन हैड ग्रोन दीज़ प्लांट्स।",
            exp: "हरे पौधे (These plants) आगे आ जाएँगे! 'had grown' बदलकर 'had been grown' बन जाएगा।",
            options: [
              {label: "These plants had been grown by the blind woman.", val: "These plants had been grown by the blind woman."},
              {label: "These plants have been grown by the blind woman.", val: "These plants have been grown by the blind woman."}
            ]
          }
        ]
      },
      {
        tabId: "tab-4",
        guidance: "🎯 <b>Exercise D:</b> Passive वाक्य को Active Voice (सीधे तरीके) में बदलो!",
        guidanceVoice: "बच्चों, पीछे वाले काम करने वाले हीरो को वापस आगे लाओ!",
        questions: [
          {
            id: "d1",
            qNo: "Question 1",
            sentence: "1. The window was pushed open by the wind.",
            meaning: "👉 हिंदी: खिड़की हवा के झोंके से खुल गई।",
            ans: "The wind pushed open the window.",
            spoken: "द विंडो वॉज़ पुश्ड ओपन बाय द विंड।",
            exp: "हवा (The wind) ने खिड़की खोली! हवा आगे आ जाएगी: 'The wind pushed open the window'।",
            options: [
              {label: "The wind pushed open the window.", val: "The wind pushed open the window."},
              {label: "The wind pushes the window.", val: "The wind pushes the window."}
            ]
          },
          {
            id: "d2",
            qNo: "Question 2",
            sentence: "2. The grass has been eaten by the goats.",
            meaning: "👉 हिंदी: बकरियों ने घास खा ली है।",
            ans: "The goats have eaten the grass.",
            spoken: "द ग्रास हैज़ बीन ईटन बाय द गोट्स।",
            exp: "बकरियाँ (The goats) आगे आ जाएँगी! बहुत सारी बकरियाँ हैं इसलिए 'have eaten the grass' बनेगा।",
            options: [
              {label: "The goats have eaten the grass.", val: "The goats have eaten the grass."},
              {label: "The goats has eaten the grass.", val: "The goats has eaten the grass."}
            ]
          },
          {
            id: "d3",
            qNo: "Question 3",
            sentence: "3. This neat circle has been drawn by a small child.",
            meaning: "👉 हिंदी: यह सुंदर गोला एक छोटे बच्चे ने बनाया है।",
            ans: "A small child has drawn this neat circle.",
            spoken: "दिस नीट सर्कल हैज़ बीन ड्रॉन बाय अ स्मॉल चाइल्ड।",
            exp: "छोटा बच्चा (A small child) आगे आ जाएगा! एक बच्चा है इसलिए 'has drawn this neat circle' सही है।",
            options: [
              {label: "A small child has drawn this neat circle.", val: "A small child has drawn this neat circle."},
              {label: "A small child drew this neat circle.", val: "A small child drew this neat circle."}
            ]
          },
          {
            id: "d4",
            qNo: "Question 4",
            sentence: "4. Food was served by my father to the guests.",
            meaning: "👉 हिंदी: पापा ने मेहमानों को खाना खिलाया।",
            ans: "My father served food to the guests.",
            spoken: "फूड वॉज़ सर्व्ड बाय माय फादर टू द गेस्ट्स।",
            exp: "प्यारे पापा (My father) आगे आ जाएँगे! सीधा वाक्य बनेगा: 'My father served food to the guests'।",
            options: [
              {label: "My father served food to the guests.", val: "My father served food to the guests."},
              {label: "My father is serving food to the guests.", val: "My father is serving food to the guests."}
            ]
          },
          {
            id: "d5",
            qNo: "Question 5",
            sentence: "5. We were guided by the map in the forest.",
            meaning: "👉 हिंदी: जंगल में नक्शे ने हमारा रास्ता दिखाया।",
            ans: "The map guided us in the forest.",
            spoken: "वी वर गाइडेड बाय द मैप इन द फॉरेस्ट।",
            exp: "नक्शा (The map) आगे आएगा और We पीछे जाकर 'us' बन जाएगा: 'The map guided us in the forest'।",
            options: [
              {label: "The map guided us in the forest.", val: "The map guided us in the forest."},
              {label: "The map guides us in the forest.", val: "The map guides us in the forest."}
            ]
          },
          {
            id: "d6",
            qNo: "Question 6",
            sentence: "6. The stray dogs are fed by the kind lady.",
            meaning: "👉 हिंदी: दयालु आंटी गली के कुत्तों को खाना खिलाती हैं।",
            ans: "The kind lady feeds the stray dogs.",
            spoken: "द स्ट्रे डॉग्स आर फेड बाय द काइंड लेडी।",
            exp: "दयालु आंटी (The kind lady) आगे आ जाएँगी! रोज़ खिलाती हैं इसलिए 'feeds the stray dogs' होगा।",
            options: [
              {label: "The kind lady feeds the stray dogs.", val: "The kind lady feeds the stray dogs."},
              {label: "The kind lady fed the stray dogs.", val: "The kind lady fed the stray dogs."}
            ]
          },
          {
            id: "d7",
            qNo: "Question 7",
            sentence: "7. Money was collected by the students for the poor.",
            meaning: "👉 हिंदी: बच्चों ने गरीबों की मदद के लिए पैसे इकट्ठे किए।",
            ans: "The students collected money for the poor.",
            spoken: "मनी वॉज़ कलेक्टेड बाय द स्टूडेंट्स।",
            exp: "स्कूल के बच्चे (The students) आगे आ जाएँगे: 'The students collected money for the poor'।",
            options: [
              {label: "The students collected money for the poor.", val: "The students collected money for the poor."},
              {label: "The students collect money for the poor.", val: "The students collect money for the poor."}
            ]
          },
          {
            id: "d8",
            qNo: "Question 8",
            sentence: "8. Gold ornaments are sold by a jeweller.",
            meaning: "👉 हिंदी: सुनार अंकल सोने के गहने बेचते हैं।",
            ans: "A jeweller sells gold ornaments.",
            spoken: "गोल्ड ऑर्नामेंट्स आर सोल्ड बाय अ ज्वैलर।",
            exp: "सुनार अंकल (A jeweller) आगे आ जाएँगे! अकेला व्यक्ति है इसलिए 'sells gold ornaments' बनेगा।",
            options: [
              {label: "A jeweller sells gold ornaments.", val: "A jeweller sells gold ornaments."},
              {label: "A jeweller sold gold ornaments.", val: "A jeweller sold gold ornaments."}
            ]
          },
          {
            id: "d9",
            qNo: "Question 9",
            sentence: "9. Buildings are designed by architects.",
            meaning: "👉 हिंदी: आर्किटेक्ट अंकल इमारतों का नक्शा बनाते हैं।",
            ans: "Architects design buildings.",
            spoken: "बिल्डिंग्स आर डिज़ाइन्ड बाय आर्किटेक्ट्स।",
            exp: "आर्किटेक्ट (Architects) आगे आ जाएँगे! सीधा वाक्य बनेगा: 'Architects design buildings'।",
            options: [
              {label: "Architects design buildings.", val: "Architects design buildings."},
              {label: "Architects designed buildings.", val: "Architects designed buildings."}
            ]
          },
          {
            id: "d10",
            qNo: "Question 10",
            sentence: "10. A gold medal had been won by Meeta last year.",
            meaning: "👉 हिंदी: मीता ने पिछले साल सोने का तमगा जीता था।",
            ans: "Meeta had won a gold medal last year.",
            spoken: "अ गोल्ड मेडल हैड बीन वन बाय मीता लास्ट ईयर।",
            exp: "मीता (Meeta) आगे आ जाएगी! 'had been won' बदल कर 'had won' बन जाएगा।",
            options: [
              {label: "Meeta had won a gold medal last year.", val: "Meeta had won a gold medal last year."},
              {label: "Meeta has won a gold medal last year.", val: "Meeta has won a gold medal last year."}
            ]
          }
        ]
      },
      {
        tabId: "tab-5",
        guidance: "🎯 <b>Exercise E:</b> हुक्म या प्रार्थना वाले वाक्य (Imperative Sentences) पहचानो!",
        guidanceVoice: "बच्चों, जब हम किसी को प्यार से कुछ करने को कहते हैं, तो उसे कैसे बोलते हैं? सही विकल्प चुनो!",
        questions: [
          {
            id: "e1",
            qNo: "Question 1",
            sentence: "1. दरवाजा बंद करो!",
            meaning: "👉 अंग्रेजी: Close the door.",
            ans: "Close the door.",
            spoken: "क्लोज़ द डोर। दरवाजा बंद करो।",
            exp: "जब हम किसी को काम करने का हुक्म देते हैं, तो क्रिया सबसे आगे आती है जैसे 'Close the door'।",
            options: [{label: "Close the door.", val: "Close the door."}, {label: "The door closed.", val: "The door closed."}]
          },
          {
            id: "e2",
            qNo: "Question 2",
            sentence: "2. मुझे किताब पकड़ा दो!",
            meaning: "👉 अंग्रेजी: Pass the book to me.",
            ans: "Pass the book to me.",
            spoken: "पास द बुक टू मी।",
            exp: "सीधे काम बोलो: 'Pass the book to me'। इसमें 'You' छुपा होता है।",
            options: [{label: "Pass the book to me.", val: "Pass the book to me."}, {label: "Book passed to me.", val: "Book passed to me."}]
          },
          {
            id: "e3",
            qNo: "Question 3",
            sentence: "3. फुटबॉल को किक मारो!",
            meaning: "👉 अंग्रेजी: Kick the ball now.",
            ans: "Kick the ball now.",
            spoken: "किक द बॉल नाउ।",
            exp: "गेंद को लात मारने का हुक्म है, इसलिए 'Kick the ball now' सही है।",
            options: [{label: "Kick the ball now.", val: "Kick the ball now."}, {label: "Ball kicks you.", val: "Ball kicks you."}]
          },
          {
            id: "e4",
            qNo: "Question 4",
            sentence: "4. चुपचाप बैठ जाओ!",
            meaning: "👉 अंग्रेजी: Sit down quietly.",
            ans: "Sit down quietly.",
            spoken: "सिट डाउन क्वाइटली।",
            exp: "मैडम क्लास में कहती हैं ना—'Sit down quietly'! यह हुक्म वाला वाक्य है।",
            options: [{label: "Sit down quietly.", val: "Sit down quietly."}, {label: "You sitting quiet.", val: "You sitting quiet."}]
          },
          {
            id: "e5",
            qNo: "Question 5",
            sentence: "5. अपने हाथ अच्छे से धो लो!",
            meaning: "👉 अंग्रेजी: Wash your hands properly.",
            ans: "Wash your hands properly.",
            spoken: "वॉश योर हैंड्स प्रॉपर्ली।",
            exp: "खाना खाने से पहले मम्मी कहती हैं—'Wash your hands properly'।",
            options: [{label: "Wash your hands properly.", val: "Wash your hands properly."}, {label: "Hands wash you.", val: "Hands wash you."}]
          }
        ]
      }
    ]
  },

  "ch9": {
    name: "Chapter 9: Adverbs (Kinds)",
    understanding: [
      {
        id: "und_adverb_def",
        type: "concept",
        badge: "नियम 1 (जादुई मददगार)",
        sentence: "Adverb क्या होता है?",
        meaning: "👉 काम के बारे में और बताने वाला शब्द!",
        desc: "जब आप दौड़ते हो (Run), तो आप कैसे दौड़े? <b>तेज़ (Fast)</b> या <b>धीमे (Slow)</b>? जो शब्द यह बताए कि काम <b>कैसे (How)</b>, <b>कहाँ (Where)</b> या <b>कब (When)</b> हुआ, उसे <b>Adverb</b> कहते हैं!",
        tts: "एडवर्ब हमें बताता है कि कोई काम कैसे हुआ, कहाँ हुआ, या कब हुआ! जैसे चीता तेज़ दौड़ता है।"
      },
      {
        id: "und_adverb_kinds",
        type: "concept",
        badge: "नियम 2 (चार प्यारे दोस्त)",
        sentence: "Adverbs के प्रकार (Kinds)",
        meaning: "👉 Manner, Place, Time, Frequency & Degree",
        desc: "👉 <b>Manner (कैसे?):</b> softly, happily (ज्यादातर -ly वाले)<br>👉 <b>Place (कहाँ?):</b> upstairs, outside, here<br>👉 <b>Time (कब?):</b> today, soon, early<br>👉 <b>Frequency (कितनी बार?):</b> daily, always, never<br>👉 <b>Degree (कितना ज्यादा?):</b> very, almost, completely",
        tts: "चार सवाल पूछो: कैसे, कहाँ, कब, और कितनी बार? आपको तुरंत एडवर्ब का प्रकार मिल जाएगा!"
      },
      {
        id: "und_ly_magic",
        type: "magic",
        badge: "जादुई फॉर्मूला",
        badgeStyle: "background:#D1FAE5;color:#047857;",
        sentence: "⭐ 90% वाला -ly जादुई नियम",
        meaning: "👉 -ly दिखा तो Manner पक्का!",
        desc: "जब किसी गुण (Adjective) के पीछे <b>-ly</b> लग जाता है (जैसे slow + ly = slowly, loud + ly = loudly), तो वो 90% काम करने का तरीका (Manner) बताता है!",
        tts: "जादुई फॉर्मूला याद रखो! अगर शब्द के पीछे एल वाई लगा है तो नब्बे परसेंट वो एडवर्ब ऑफ मैनर है!"
      }
    ],
    exercises: [
      {
        tabId: "tab-1",
        guidance: "🎯 <b>Exercise A:</b> वाक्य में Adverb पहचानो!",
        guidanceVoice: "बच्चों, देखो कि काम की खासियत कौन सा शब्द बता रहा है, और सही एडवर्ब चुनो!",
        questions: [
          {
            id: "a1",
            qNo: "Question 1",
            sentence: "1. It has rained (enough).",
            meaning: "👉 हिंदी: काफी बारिश हो चुकी है।",
            ans: "enough",
            spoken: "इट हैज़ रेंड इनफ।",
            exp: "बारिश कितनी हुई? 'enough' यानी काफी! यह मात्रा (Degree) बता रहा है, इसलिए 'enough' एडवर्ब है।",
            options: [{label: "enough", val: "enough"}, {label: "rained", val: "rained"}]
          },
          {
            id: "a2",
            qNo: "Question 2",
            sentence: "2. The students recited the poem loudly.",
            meaning: "👉 हिंदी: बच्चों ने ज़ोर-ज़ोर से कविता सुनाई।",
            ans: "loudly",
            spoken: "द स्टूडेंट्स रिसाइटेड द पोयम लाउडली।",
            exp: "बच्चों ने कविता कैसे सुनाई? ज़ोर से (loudly)! अंत में -ly लगा है, इसलिए 'loudly' सही एडवर्ब है।",
            options: [{label: "loudly", val: "loudly"}, {label: "recited", val: "recited"}]
          },
          {
            id: "a3",
            qNo: "Question 3",
            sentence: "3. The painters will paint the house tomorrow.",
            meaning: "👉 हिंदी: पेंटर अंकल कल घर में रंग करेंगे।",
            ans: "tomorrow",
            spoken: "द पेंटर्स विल पेंट द हाउस टुमॉरो।",
            exp: "पेंटिंग का काम कब होगा? कल (tomorrow)! समय बताने वाला शब्द एडवर्ब होता है, इसलिए 'tomorrow' सही है।",
            options: [{label: "tomorrow", val: "tomorrow"}, {label: "paint", val: "paint"}]
          },
          {
            id: "a4",
            qNo: "Question 4",
            sentence: "4. The bus driver waited patiently for the signal.",
            meaning: "👉 हिंदी: ड्राइवर अंकल ने शांति से इंतज़ार किया।",
            ans: "patiently",
            spoken: "द बस ड्राइवर वेटेड पेशेंटली।",
            exp: "ड्राइवर अंकल ने कैसे इंतज़ार किया? बिना गुस्सा किए शांति से (patiently)! इसलिए 'patiently' एडवर्ब है।",
            options: [{label: "patiently", val: "patiently"}, {label: "waited", val: "waited"}]
          },
          {
            id: "a5",
            qNo: "Question 5",
            sentence: "5. They will launch the book soon.",
            meaning: "👉 हिंदी: वे जल्दी ही नई किताब निकालेंगे।",
            ans: "soon",
            spoken: "दे विल लॉन्च द बुक सून।",
            exp: "किताब कब आएगी? जल्दी ही (soon)! यह समय (Time) बता रहा है, इसलिए 'soon' सही एडवर्ब है।",
            options: [{label: "soon", val: "soon"}, {label: "launch", val: "launch"}]
          },
          {
            id: "a6",
            qNo: "Question 6",
            sentence: "6. All the children ran downstairs on seeing the ice cream man.",
            meaning: "👉 हिंदी: आइसक्रीम वाले को देखकर सारे बच्चे सीढ़ियों से नीचे भागे!",
            ans: "downstairs",
            spoken: "ऑल द चिल्ड्रन रैन डाउनस्टेयर्स।",
            exp: "बच्चे कहाँ भागे? नीचे सीढ़ियों की तरफ (downstairs)! यह जगह (Place) बता रहा है, इसलिए 'downstairs' एडवर्ब है।",
            options: [{label: "downstairs", val: "downstairs"}, {label: "ran", val: "ran"}]
          },
          {
            id: "a7",
            qNo: "Question 7",
            sentence: "7. Roma almost hit the tree while riding a bicycle.",
            meaning: "👉 हिंदी: रोमा साइकिल चलाते हुए पेड़ से टकराते-टकराते बची!",
            ans: "almost",
            spoken: "रोमा ऑलमोस्ट हिट द ट्री।",
            exp: "बस टकरा ही गई थी (almost - लगभग)! यह Degree बता रहा है, इसलिए 'almost' सही उत्तर है।",
            options: [{label: "almost", val: "almost"}, {label: "hit", val: "hit"}]
          },
          {
            id: "a8",
            qNo: "Question 8",
            sentence: "8. My grandfather has not gone to the library today.",
            meaning: "👉 हिंदी: दादाजी आज लाइब्रेरी नहीं गए।",
            ans: "today",
            spoken: "माय ग्रैंडफादर हैज़ नॉट गॉन टू द लाइब्रेरी टुडे।",
            exp: "दादाजी कब नहीं गए? आज (today)! आज का दिन समय (Time) है, इसलिए 'today' सही एडवर्ब है।",
            options: [{label: "today", val: "today"}, {label: "library", val: "library"}]
          },
          {
            id: "a9",
            qNo: "Question 9",
            sentence: "9. Mansi walked onto the stage proudly.",
            meaning: "👉 हिंदी: मानसी गर्व से मुस्कुराते हुए स्टेज पर गई।",
            ans: "proudly",
            spoken: "मानसी वॉक्ड ऑन टू द स्टेज प्राउडली।",
            exp: "मानसी स्टेज पर कैसे गई? शान से (proudly)! -ly लगा है, इसलिए 'proudly' सही एडवर्ब है।",
            options: [{label: "proudly", val: "proudly"}, {label: "walked", val: "walked"}]
          },
          {
            id: "a10",
            qNo: "Question 10",
            sentence: "10. Guneet always speaks confidently in meetings.",
            meaning: "👉 हिंदी: गुनीत हमेशा आत्मविश्वास से बोलता है।",
            ans: "always, confidently",
            spoken: "गुनीत ऑलवेज़ स्पीक्स कॉन्फिडेंटली।",
            exp: "कितनी बार? हमेशा (always)! और कैसे? हिम्मत के साथ (confidently)! इस वाक्य में दो एडवर्ब्स हैं।",
            options: [{label: "always, confidently", val: "always, confidently"}, {label: "speaks, meetings", val: "speaks, meetings"}]
          }
        ]
      },
      {
        tabId: "tab-2",
        guidance: "🎯 <b>Exercise B:</b> बॉक्स में से सही Adverb चुनो और उसका प्रकार (Kind) समझो!",
        guidanceVoice: "बच्चों, खाली जगह में सबसे प्यारा और सही शब्द भरो!",
        questions: [
          {
            id: "b1",
            qNo: "Question 1",
            sentence: "1. Zumba classes are held in the clubhouse _______.",
            meaning: "👉 हिंदी: ज़ुम्बा डांस क्लास रोज़ होती है।",
            ans: "daily",
            spoken: "ज़ुम्बा क्लासेस आर हेल्ड इन द क्लबहाउस डेली।",
            exp: "डांस क्लास कितनी बार होती है? हर रोज़ (daily)! यह Frequency बता रहा है, इसलिए 'daily' सही है।",
            options: [{label: "daily (Frequency)", val: "daily"}, {label: "never (Frequency)", val: "never"}]
          },
          {
            id: "b2",
            qNo: "Question 2",
            sentence: "2. The plane had _______ landed when it started raining.",
            meaning: "👉 हिंदी: बारिश शुरू होते ही हवाई जहाज बस उतर ही चुका था।",
            ans: "almost",
            spoken: "द प्लेन हैड ऑलमोस्ट लैंडेड व्हेन इट स्टार्टेड रेनिंग।",
            exp: "हवाई जहाज लगभग ज़मीन छू चुका था! लगभग को 'almost' (Degree) कहते हैं।",
            options: [{label: "almost (Degree)", val: "almost"}, {label: "daily (Frequency)", val: "daily"}]
          },
          {
            id: "b3",
            qNo: "Question 3",
            sentence: "3. I did not go swimming as the water was _______ cold.",
            meaning: "👉 हिंदी: मैं तैरने नहीं गया क्योंकि पानी बहुत ज्यादा ठंडा था!",
            ans: "extremely",
            spoken: "आई डिड नॉट गो स्विमिंग ऐज़ द वाटर वॉज़ एक्सट्रीमली कोल्ड।",
            exp: "पानी कितना ठंडा था? बर्फ जैसा बहुत ज्यादा (extremely)! इसलिए 'extremely' सही है।",
            options: [{label: "extremely (Degree)", val: "extremely"}, {label: "annually (Time)", val: "annually"}]
          },
          {
            id: "b4",
            qNo: "Question 4",
            sentence: "4. My mother _______ goes for a run in the morning.",
            meaning: "👉 हिंदी: मम्मी अक्सर सुबह दौड़ने जाती हैं।",
            ans: "usually",
            spoken: "माय मदर यूज़ुअली गोज़ फॉर अ रन इन द मॉर्निंग।",
            exp: "मम्मी ज्यादातर दिनों में जाती हैं, इसलिए 'usually' (Frequency) सही है।",
            options: [{label: "usually (Frequency)", val: "usually"}, {label: "quite (Degree)", val: "quite"}]
          },
          {
            id: "b5",
            qNo: "Question 5",
            sentence: "5. Are you old _______ to drive a car?",
            meaning: "👉 हिंदी: क्या तुम कार चलाने जितने बड़े हो गए हो?",
            ans: "enough",
            spoken: "आर यू ओल्ड इनफ टू ड्राइव अ कार?",
            exp: "क्या तुम्हारी उम्र काफी (enough) बड़ी है? इसलिए यहाँ 'enough' (Degree) आएगा।",
            options: [{label: "enough (Degree)", val: "enough"}, {label: "almost (Degree)", val: "almost"}]
          },
          {
            id: "b6",
            qNo: "Question 6",
            sentence: "6. My parents pay their taxes _______.",
            meaning: "👉 हिंदी: मम्मी-पापा साल में एक बार टैक्स भरते हैं।",
            ans: "annually",
            spoken: "माय पेरेंट्स पे देयर टैक्सेस एनुअली।",
            exp: "साल में एक बार होने वाले काम को 'annually' (Time/Frequency) कहते हैं।",
            options: [{label: "annually (Frequency)", val: "annually"}, {label: "daily (Frequency)", val: "daily"}]
          },
          {
            id: "b7",
            qNo: "Question 7",
            sentence: "7. Mallika is _______ late for school; she is very punctual.",
            meaning: "👉 हिंदी: मल्लिका कभी स्कूल लेट नहीं होती, वो बहुत अच्छी बच्ची है।",
            ans: "never",
            spoken: "मल्लिका इज़ नेवर लेट फॉर स्कूल।",
            exp: "समय पर आने वाली बच्ची 'कभी नहीं' लेट होती! कभी नहीं को 'never' कहते हैं।",
            options: [{label: "never (Frequency)", val: "never"}, {label: "always (Frequency)", val: "always"}]
          },
          {
            id: "b8",
            qNo: "Question 8",
            sentence: "8. Vihaan is _______ fidgeting around in the class.",
            meaning: "👉 हिंदी: विहान हमेशा क्लास में मस्ती करता रहता है।",
            ans: "always",
            spoken: "विहान इज़ ऑलवेज़ फिजेटिंग अराउंड इन द क्लास।",
            exp: "जो बच्चा हर समय उछल-कूद करता है, उसके लिए 'always' (हमेशा) आता है।",
            options: [{label: "always (Frequency)", val: "always"}, {label: "never (Frequency)", val: "never"}]
          },
          {
            id: "b9",
            qNo: "Question 9",
            sentence: "9. This new book is _______ interesting.",
            meaning: "👉 हिंदी: यह नई कहानी की किताब काफी मज़ेदार है।",
            ans: "quite",
            spoken: "दिस न्यू बुक इज़ क्वाइट इंटरेस्टिंग।",
            exp: "किताब सच में बहुत अच्छी है! काफी अच्छी को 'quite' (Degree) कहते हैं।",
            options: [{label: "quite (Degree)", val: "quite"}, {label: "annually (Time)", val: "annually"}]
          },
          {
            id: "b10",
            qNo: "Question 10",
            sentence: "10. The coach was not _______ satisfied with the team's performance.",
            meaning: "👉 हिंदी: कोच सर पूरी तरह खुश नहीं थे।",
            ans: "completely",
            spoken: "द कोच वॉज़ नॉट कम्प्लीटली सैटिस्फाइड।",
            exp: "पूरी तरह से संतुष्ट होने को 'completely' कहते हैं। इसलिए 'completely' सही है।",
            options: [{label: "completely (Degree)", val: "completely"}, {label: "daily (Frequency)", val: "daily"}]
          }
        ]
      },
      {
        tabId: "tab-3",
        guidance: "🎯 <b>Exercise C:</b> ब्रैकेट वाले Adverb को सही जगह पर बैठाओ!",
        guidanceVoice: "बच्चों, देखो कि ब्रैकेट वाला जादुई शब्द वाक्य में कहाँ सबसे सुंदर लगेगा!",
        questions: [
          {
            id: "c1",
            qNo: "Question 1",
            sentence: "1. The dog barked at the naughty boys teasing it. (angrily)",
            meaning: "👉 हिंदी: कुत्ते ने चिढ़ाने वाले बच्चों पर गुस्से में भौंका।",
            ans: "The dog barked angrily at the naughty boys teasing it.",
            spoken: "द डॉग बार्क्ड एंग्रिली।",
            exp: "कुत्ता कैसे भौंका? गुस्से में! इसलिए barked के तुरंत बाद 'angrily' बैठेगा।",
            options: [
              {label: "The dog barked angrily at the naughty boys teasing it.", val: "The dog barked angrily at the naughty boys teasing it."},
              {label: "The dog angrily barked teasing boys.", val: "The dog angrily barked teasing boys."}
            ]
          },
          {
            id: "c2",
            qNo: "Question 2",
            sentence: "2. I could not find the ball though I searched for it. (everywhere)",
            meaning: "👉 हिंदी: मुझे गेंद नहीं मिली, चाहे मैंने सब जगह ढूँढ लिया।",
            ans: "I could not find the ball though I searched everywhere for it.",
            spoken: "आई सर्चड एव्रीव्हेयर फॉर इट।",
            exp: "कहाँ ढूँढा? हर जगह (everywhere)! ढूँढने (searched) के बाद 'everywhere' आएगा।",
            options: [
              {label: "I could not find the ball though I searched everywhere for it.", val: "I could not find the ball though I searched everywhere for it."},
              {label: "Everywhere I could not find ball.", val: "Everywhere I could not find ball."}
            ]
          },
          {
            id: "c3",
            qNo: "Question 3",
            sentence: "3. Karan spends the weekends in his hill house. (sometimes)",
            meaning: "👉 हिंदी: करन कभी-कभी पहाड़ों वाले घर में छुट्टियाँ बिताता है।",
            ans: "Karan sometimes spends the weekends in his hill house.",
            spoken: "करन समटाइम्स स्पेंड्स द वीकेंड्स।",
            exp: "करन के तुरंत बाद काम करने से पहले 'sometimes' (कभी-कभी) आएगा।",
            options: [
              {label: "Karan sometimes spends the weekends in his hill house.", val: "Karan sometimes spends the weekends in his hill house."},
              {label: "Karan spends sometimes weekends.", val: "Karan spends sometimes weekends."}
            ]
          },
          {
            id: "c4",
            qNo: "Question 4",
            sentence: "4. My parents call me to know how I am. (often)",
            meaning: "👉 हिंदी: मम्मी-पापा मुझे अक्सर फोन करके हाल-चाल पूछते हैं।",
            ans: "My parents often call me to know how I am.",
            spoken: "माय पेरेंट्स ऑफन कॉल मी।",
            exp: "फोन करने (call) से ठीक पहले 'often' (अक्सर) बैठता है।",
            options: [
              {label: "My parents often call me to know how I am.", val: "My parents often call me to know how I am."},
              {label: "My parents call often me.", val: "My parents call often me."}
            ]
          },
          {
            id: "c5",
            qNo: "Question 5",
            sentence: "5. Kriti and Rohan were drenched by the time they got home. (completely)",
            meaning: "👉 हिंदी: घर पहुँचते-पहुँचते कृति और रोहन बारिश में पूरी तरह भीग गए!",
            ans: "Kriti and Rohan were completely drenched by the time they got home.",
            spoken: "वर कम्प्लीटली ड्रेंच्ड।",
            exp: "कितना भीगे? सिर से पैर तक पूरे (completely)! इसलिए were के बाद 'completely' आएगा।",
            options: [
              {label: "Kriti and Rohan were completely drenched by the time they got home.", val: "Kriti and Rohan were completely drenched by the time they got home."},
              {label: "Kriti and Rohan completely were drenched.", val: "Kriti and Rohan completely were drenched."}
            ]
          },
          {
            id: "c6",
            qNo: "Question 6",
            sentence: "6. You must spell all the words to win the spelling contest. (correctly)",
            meaning: "👉 हिंदी: प्रतियोगिता जीतने के लिए सारे शब्दों की स्पेलिंग सही लिखनी होगी।",
            ans: "You must spell all the words correctly to win the spelling contest.",
            spoken: "स्पेल ऑल द वर्ड्स करेक्टली।",
            exp: "स्पेलिंग कैसे लिखनी है? एकदम सही (correctly)! इसलिए शब्दों (words) के बाद 'correctly' आएगा।",
            options: [
              {label: "You must spell all the words correctly to win the spelling contest.", val: "You must spell all the words correctly to win the spelling contest."},
              {label: "You correctly must spell all words.", val: "You correctly must spell all words."}
            ]
          },
          {
            id: "c7",
            qNo: "Question 7",
            sentence: "7. This part of the city may be crowded but it is beautiful. (fairly)",
            meaning: "👉 हिंदी: यह इलाका भीड़ वाला है, लेकिन काफी सुंदर है।",
            ans: "This part of the city may be crowded but it is fairly beautiful.",
            spoken: "इट इज़ फेयरली ब्यूटीफुल।",
            exp: "सुंदरता कितनी है? काफी अच्छी (fairly)! इसलिए beautiful से ठीक पहले 'fairly' आएगा।",
            options: [
              {label: "This part of the city may be crowded but it is fairly beautiful.", val: "This part of the city may be crowded but it is fairly beautiful."},
              {label: "This part of city fairly is beautiful.", val: "This part of city fairly is beautiful."}
            ]
          },
          {
            id: "c8",
            qNo: "Question 8",
            sentence: "8. Are there any good hotels? (nearby)",
            meaning: "👉 हिंदी: क्या यहाँ पास में कोई अच्छा होटल है?",
            ans: "Are there any good hotels nearby?",
            spoken: "आर देयर एनी गुड होटल्स नियरबाय?",
            exp: "कहाँ ढूँढ रहे हैं? पास में (nearby)! वाक्य के अंत में 'nearby' बैठेगा।",
            options: [
              {label: "Are there any good hotels nearby?", val: "Are there any good hotels nearby?"},
              {label: "Nearby are there any hotels?", val: "Nearby are there any hotels?"}
            ]
          },
          {
            id: "c9",
            qNo: "Question 9",
            sentence: "9. We listen to Indian classical music. (generally)",
            meaning: "👉 हिंदी: हम आमतौर पर भारतीय शास्त्रीय संगीत सुनते हैं।",
            ans: "We generally listen to Indian classical music.",
            spoken: "वी जनरली लिसन टू इंडियन क्लासिकल म्यूजिक।",
            exp: "गाने सुनने (listen) से पहले आदत बताने वाला शब्द 'generally' बैठेगा।",
            options: [
              {label: "We generally listen to Indian classical music.", val: "We generally listen to Indian classical music."},
              {label: "We listen generally music.", val: "We listen generally music."}
            ]
          },
          {
            id: "c10",
            qNo: "Question 10",
            sentence: "10. The country has been hit by droughts in the past decade. (frequently)",
            meaning: "👉 हिंदी: पिछले दस सालों में देश में बार-बार सूखा पड़ा है।",
            ans: "The country has been frequently hit by droughts in the past decade.",
            spoken: "हैज़ बीन फ्रीक्वेंटली हिट।",
            exp: "सूखा कितनी बार पड़ा? बार-बार (frequently)! इसलिए has been के बाद 'frequently' आएगा।",
            options: [
              {label: "The country has been frequently hit by droughts in the past decade.", val: "The country has been frequently hit by droughts in the past decade."},
              {label: "Frequently the country hit droughts.", val: "Frequently the country hit droughts."}
            ]
          }
        ]
      },
      {
        tabId: "tab-4",
        guidance: "🎯 <b>Exercise D:</b> हर काम के लिए 3 सही Adverbs पहचानो!",
        guidanceVoice: "बच्चों, देखो कि दी गई क्रिया के साथ कौन-कौन से तीन शब्द बिल्कुल सही बैठते हैं!",
        questions: [
          {
            id: "d1",
            qNo: "Question 1",
            sentence: "1. reach (time - समय)",
            meaning: "👉 पहुँचना कब हुआ?",
            ans: "early, late, soon",
            spoken: "रीच: अर्ली, लेट, सून।",
            exp: "हम स्कूल कब पहुँच सकते हैं? जल्दी (early), देर से (late) या बस अभी (soon)! ये तीनों समय बताते हैं।",
            options: [{label: "early, late, soon", val: "early, late, soon"}, {label: "loudly, softly, sweet", val: "loudly, softly, sweet"}]
          },
          {
            id: "d2",
            qNo: "Question 2",
            sentence: "2. sing (manner - तरीका)",
            meaning: "👉 गाना कैसे गाया?",
            ans: "sweetly, beautifully, softly",
            spoken: "सिंग: स्वीटली, ब्यूटीफुली, सॉफ्टली।",
            exp: "गाना कैसे गा सकते हैं? मीठी आवाज़ में (sweetly), सुंदरता से (beautifully) या धीमे से (softly)!",
            options: [{label: "sweetly, beautifully, softly", val: "sweetly, beautifully, softly"}, {label: "yesterday, tomorrow, now", val: "yesterday, tomorrow, now"}]
          },
          {
            id: "d3",
            qNo: "Question 3",
            sentence: "3. camp (place - जगह)",
            meaning: "👉 तंबू कहाँ लगाया?",
            ans: "outside, here, nearby",
            spoken: "कैंप: आउटसाइड, हियर, नियरबाय।",
            exp: "तंबू कहाँ गाड़ेंगे? बाहर (outside), यहाँ (here) या पास में (nearby)!",
            options: [{label: "outside, here, nearby", val: "outside, here, nearby"}, {label: "slowly, quickly, fast", val: "slowly, quickly, fast"}]
          },
          {
            id: "d4",
            qNo: "Question 4",
            sentence: "4. bake (degree - कितना)",
            meaning: "👉 केक कितना पका?",
            ans: "completely, thoroughly, well",
            spoken: "बेक: कम्प्लीटली, थरली, वेल।",
            exp: "केक ओवन में कितना बेक हुआ? पूरा अच्छी तरह (completely), बढ़िया से (thoroughly) या खूब अच्छा (well)!",
            options: [{label: "completely, thoroughly, well", val: "completely, thoroughly, well"}, {label: "daily, never, often", val: "daily, never, often"}]
          },
          {
            id: "d5",
            qNo: "Question 5",
            sentence: "5. shout (manner - तरीका)",
            meaning: "👉 चिल्लाना कैसे हुआ?",
            ans: "loudly, angrily, fiercely",
            spoken: "शाउट: लाउडली, एंग्रिली, फियर्सली।",
            exp: "चीख कैसे निकली? तेज़ आवाज़ में (loudly), गुस्से में (angrily) या भयानक रूप से (fiercely)!",
            options: [{label: "loudly, angrily, fiercely", val: "loudly, angrily, fiercely"}, {label: "here, there, upstairs", val: "here, there, upstairs"}]
          },
          {
            id: "d6",
            qNo: "Question 6",
            sentence: "6. quarrel (frequency - कितनी बार)",
            meaning: "👉 झगड़ा कितनी बार करते हैं?",
            ans: "often, seldom, always",
            spoken: "क्वारल: ऑफन, सेल्डम, ऑलवेज़।",
            exp: "झगड़ा कितनी बार हुआ? अक्सर (often), कभी-कभार (seldom) या हमेशा (always)!",
            options: [{label: "often, seldom, always", val: "often, seldom, always"}, {label: "brightly, clearly, nicely", val: "brightly, clearly, nicely"}]
          },
          {
            id: "d7",
            qNo: "Question 7",
            sentence: "7. kick (manner - तरीका)",
            meaning: "👉 फुटबॉल को किक कैसे मारी?",
            ans: "hard, powerfully, skillfully",
            spoken: "किक: हार्ड, पावरफुली, स्किलफुली।",
            exp: "किक कैसे मारी? ज़ोर से (hard), पूरी ताकत से (powerfully) या हुनर से (skillfully)!",
            options: [{label: "hard, powerfully, skillfully", val: "hard, powerfully, skillfully"}, {label: "tomorrow, today, later", val: "tomorrow, today, later"}]
          },
          {
            id: "d8",
            qNo: "Question 8",
            sentence: "8. keep (place - जगह)",
            meaning: "👉 खिलौना कहाँ रखा?",
            ans: "inside, away, safely",
            spoken: "कीप: इनसाइड, अवे, सेफली।",
            exp: "चीज़ कहाँ संभाल कर रखी? बक्से के अंदर (inside), दूर (away) या सुरक्षित (safely)!",
            options: [{label: "inside, away, safely", val: "inside, away, safely"}, {label: "loudly, greedily, happily", val: "loudly, greedily, happily"}]
          },
          {
            id: "d9",
            qNo: "Question 9",
            sentence: "9. eat (manner - तरीका)",
            meaning: "👉 खाना कैसे खाया?",
            ans: "slowly, greedily, quietly",
            spoken: "ईट: स्लोली, ग्रीडिली, क्वाइटली।",
            exp: "खाना कैसे खाया? चबा-चबा कर धीमे (slowly), जल्दी-जल्दी लालच से (greedily) या चुपचाप (quietly)!",
            options: [{label: "slowly, greedily, quietly", val: "slowly, greedily, quietly"}, {label: "yearly, weekly, daily", val: "yearly, weekly, daily"}]
          },
          {
            id: "d10",
            qNo: "Question 10",
            sentence: "10. travel (frequency - कितनी बार)",
            meaning: "👉 घूमने कितनी बार जाते हैं?",
            ans: "frequently, rarely, regularly",
            spoken: "ट्रैवल: फ्रीक्वेंटली, रेयरली, रेगुलरली।",
            exp: "घूमने जाना कितनी बार होता है? बार-बार (frequently), बहुत कम (rarely) या नियम से हर साल (regularly)!",
            options: [{label: "frequently, rarely, regularly", val: "frequently, rarely, regularly"}, {label: "deeply, high, low", val: "deeply, high, low"}]
          }
        ]
      },
      {
        tabId: "tab-5",
        guidance: "🎯 <b>Exercise E:</b> जंगल में शेर दिखा! कहानी में सही Adverbs भरो!",
        guidanceVoice: "बच्चों, रणथंभौर के जंगल की रोमांचक कहानी में सही शब्द चुनकर भरो!",
        questions: [
          {
            id: "e1",
            qNo: "Part 1",
            sentence: "We _______ go to the forests of Ranthambore.",
            meaning: "👉 हिंदी: हम अक्सर रणथंभौर के जंगलों में घूमने जाते हैं।",
            ans: "often",
            spoken: "वी ऑफन गो टू द फॉरेस्ट्स।",
            exp: "हम कितनी बार जंगल जाते हैं? अक्सर (often)! इसलिए 'often' सही है।",
            options: [{label: "often", val: "often"}, {label: "rarely", val: "rarely"}]
          },
          {
            id: "e2",
            qNo: "Part 2",
            sentence: "We were _______ surprised to find a tiger when we had _______ given up.",
            meaning: "👉 हिंदी: हम बहुत खुशी से हैरान हो गए जब हमने लगभग उम्मीद छोड़ दी थी!",
            ans: "pleasantly, almost",
            spoken: "प्लेज़ेंटली सरप्राइज्ड, ऑलमोस्ट गिवेन अप।",
            exp: "खुशी वाली हैरानी को 'pleasantly' और लगभग हार मान लेने को 'almost' कहते हैं।",
            options: [{label: "pleasantly, almost", val: "pleasantly, almost"}, {label: "loudly, slowly", val: "loudly, slowly"}]
          },
          {
            id: "e3",
            qNo: "Part 3",
            sentence: "We were still moving _______ looking for pugmarks.",
            meaning: "👉 हिंदी: हम गाड़ी से धीमे-धीमे आगे बढ़ रहे थे और पंजों के निशान ढूँढ रहे थे।",
            ans: "slowly",
            spoken: "मूविंग स्लोली।",
            exp: "जंगल में गाड़ी तेज़ नहीं चलाते, बिल्कुल धीमे (slowly) चलाते हैं!",
            options: [{label: "slowly", val: "slowly"}, {label: "eagerly", val: "eagerly"}]
          },
          {
            id: "e4",
            qNo: "Part 4",
            sentence: "We heard a tiger roar _______.",
            meaning: "👉 हिंदी: हमने शेर की ज़ोर से दहाड़ने की आवाज़ सुनी!",
            ans: "loudly",
            spoken: "हर्ड अ टाइगर रोर लाउडली।",
            exp: "शेर कैसे दहाड़ता है? बहुत ज़ोर की आवाज़ में (loudly)! इसलिए 'loudly' आएगा।",
            options: [{label: "loudly", val: "loudly"}, {label: "quietly", val: "quietly"}]
          },
          {
            id: "e5",
            qNo: "Part 5",
            sentence: "Dad _______ turned the vehicle towards the waterhole.",
            meaning: "👉 हिंदी: पापा ने तुरंत गाड़ी पानी के तालाब की तरफ मोड़ दी।",
            ans: "immediately",
            spoken: "डैड इमीडिएटली टर्न्ड द व्हीकल।",
            exp: "दहाड़ सुनते ही बिना देर किए तुरंत (immediately) गाड़ी मोड़ी!",
            options: [{label: "immediately", val: "immediately"}, {label: "rarely", val: "rarely"}]
          },
          {
            id: "e6",
            qNo: "Part 6",
            sentence: "There stood a tiger _______ drinking water!",
            meaning: "👉 हिंदी: वहाँ बाघ प्यास बुझाने के लिए गट-गट पानी पी रहा था!",
            ans: "thirstily",
            spoken: "टाइगर थर्सटिली ड्रिंकिंग वाटर।",
            exp: "बाघ बहुत प्यासा था, इसलिए वो प्यासों की तरह (thirstily) पानी पी रहा था।",
            options: [{label: "thirstily", val: "thirstily"}, {label: "fairly", val: "fairly"}]
          },
          {
            id: "e7",
            qNo: "Part 7",
            sentence: "We parked our vehicle _______ and waited _______ for the tiger to quench its thirst.",
            meaning: "👉 हिंदी: हमने गाड़ी एक किनारे खड़ी की और बेसब्री से इंतज़ार करने लगे।",
            ans: "aside, eagerly",
            spoken: "पार्क्ड असाइड एंड वेटेड ईगर्ली।",
            exp: "गाड़ी एक तरफ (aside) लगाई और खुशी-खुशी उत्सुकता से (eagerly) देखने लगे।",
            options: [{label: "aside, eagerly", val: "aside, eagerly"}, {label: "slowly, never", val: "slowly, never"}]
          },
          {
            id: "e8",
            qNo: "Part 8",
            sentence: "We _______ waited for its next move.",
            meaning: "👉 हिंदी: हम सब चुपचाप साँस थाम कर बैठे रहे।",
            ans: "quietly",
            spoken: "वी क्वाइटली वेटेड।",
            exp: "शेर के सामने आवाज़ नहीं करते, बिल्कुल शांत (quietly) रहते हैं!",
            options: [{label: "quietly", val: "quietly"}, {label: "loudly", val: "loudly"}]
          }
        ]
      },
      {
        tabId: "tab-6",
        guidance: "🎯 <b>Exercise F:</b> सवालों के पूरे जवाब Adverb लगाकर दो!",
        guidanceVoice: "बच्चों, पूछे गए सवाल का सही और पूरा जवाब Adverb के साथ चुनो!",
        questions: [
          {
            id: "f1",
            qNo: "Question 1",
            sentence: "1. How did the dancers perform?",
            meaning: "👉 हिंदी: डांस करने वालों ने कैसा डांस किया?",
            ans: "The dancers performed gracefully.",
            spoken: "हाउ डिड द डांसर्स परफॉर्म?",
            exp: "डांस कैसे किया? सुंदरता और नज़ाकत से (gracefully)! इसलिए 'gracefully' सही Adverb है।",
            options: [
              {label: "The dancers performed gracefully.", val: "The dancers performed gracefully."},
              {label: "The dancers danced yesterday.", val: "The dancers danced yesterday."}
            ]
          },
          {
            id: "f2",
            qNo: "Question 2",
            sentence: "2. When do you wake up in the morning?",
            meaning: "👉 हिंदी: तुम सुबह कब सोकर उठते हो?",
            ans: "I wake up early in the morning.",
            spoken: "व्हेन डू यू वेक अप इन द मॉर्निंग?",
            exp: "अच्छे बच्चे सुबह कब उठते हैं? सवेरे जल्दी (early)! इसलिए समय बताने वाला शब्द 'early' आएगा।",
            options: [
              {label: "I wake up early in the morning.", val: "I wake up early in the morning."},
              {label: "I wake up softly in morning.", val: "I wake up softly in morning."}
            ]
          },
          {
            id: "f3",
            qNo: "Question 3",
            sentence: "3. How often do you attend school?",
            meaning: "👉 हिंदी: तुम स्कूल कितनी बार जाते हो?",
            ans: "I attend school regularly.",
            spoken: "हाउ ऑफन डू यू अटेंड स्कूल?",
            exp: "स्कूल रोज़ नियम से जाना चाहिए! नियम से जाने को 'regularly' कहते हैं।",
            options: [
              {label: "I attend school regularly.", val: "I attend school regularly."},
              {label: "I attend school upstairs.", val: "I attend school upstairs."}
            ]
          }
        ]
      }
    ]
  }
};

// डिफ़ॉल्ट रूप से पहले चैप्टर का डेटा सेट रहेगा
let APP_DATA = ALL_CHAPTERS["ch1"];
