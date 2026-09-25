/* ============================================================
   HUMAN VS AI — GUESS THE TRANSLATION?
   Content data layer. All challenge content lives here, separate
   from UI/rendering logic, so it can be swapped later without
   touching script.js or index.html.

   Highlight syntax inside explanation strings:
     [[highlighted phrase||tooltip text]]
   script.js parses this into interactive <mark> tags. 
   ============================================================ */

const DUNGEONS = {

  academic: {
    key: "academic",
    name: "Academic",
    rank: "B-RANK DUNGEON",
    rankShort: "B-RANK",
    tagline: "The Archive of Endless Footnotes",
    env: "An ancient library sunk beneath the earth — towers of leaning books, drifting scrolls, and cold blue-violet witchlight.",

    mono: {
      en: {
        source: "Climate change affects ecosystems and human communities. Rising temperatures can disrupt natural processes and reduce biodiversity. Reducing greenhouse gas emissions is essential for a sustainable future.",
        targetB: {
          heading: "AI",
          content: "Climate change impacts both natural ecosystems and human populations. Increasing global temperatures threaten to disturb biological processes and decrease species diversity. Cutting back on greenhouse gas emissions is critical to achieving long-term sustainability."
        },
        targetA: {
          heading: "Human",
          content: "When the planet warms up, it messes with nature's balance and changes our daily lives, making many plants and animals disappear. If we want a good world to live in, cutting down on greenhouse gas emissions and pollution isn't just an option it's essential."
        },
        correct: "B"
      },
      ta: {
        source: "இரசாயன வினையின் வேகமானது வெப்பநிலை, அழுத்தம் மற்றும் வினையூக்கியின் செறிவு போன்ற காரணிகளால் குறிப்பிடத்தக்க அளவில் பாதிக்கப்படுகிறது. வினையூக்கிகள், வினையின் செயல்படுத்தும் ஆற்றலைக் குறைப்பதன் மூலம் வினைவேகத்தை அதிகரிக்கின்றன.",
        targetA: {
          heading: "AI",
          content: "இரசாயன வினையின் வேகம் வெப்பநிலை, அழுத்தம் மற்றும் வினையூக்கியின் செறிவு போன்ற காரணிகளால் கணிசமாக பாதிக்கப்படுகிறது. வினையூக்கிகள் செயல்படுத்தும் ஆற்றலைக் குறைப்பதன் மூலம் இரசாயன வினையின் வேகத்தை அதிகரிக்கின்றன."
        },
        targetB: {
          heading: "Human",
          content: "இரசாயன வினையின் வேகம் வெப்பநிலை, அழுத்தம் மற்றும் வினையை வேகப்படுத்தும் பொருளின் அளவு போன்ற காரணிகளால் மாறுபடுகிறது. இந்தப் பொருட்கள் தேவையான ஆற்றலைக் குறைத்து, இரசாயன வினை வேகமாக நடைபெற உதவுகின்றன."
        },
        correct: "A"
      }
    },

    bi: {
      en2ta: {
        source: "Machine translation replaces words using rules, but it often misses deeper meaning. Human translators understand culture, making their work much more accurate.",
        targetA: {
          heading: "AI",
          content: "இயந்திர மொழிபெயர்ப்பு விதிகளைப் பயன்படுத்தி சொற்களை மாற்றுகிறது, ஆனால் அது பெரும்பாலும் ஆழமான அர்த்தத்தைத் தவறவிடுகிறது. மனித மொழிபெயர்ப்பாளர்கள் கலாச்சாரத்தைப் புரிந்துகொள்வதால், அவர்களின் பணி மிகவும் துல்லியமாகிறது."
        },
        targetB: {
          heading: "Human",
          content: "இயந்திர மொழிபெயர்ப்பானது மொழி சார்ந்த இலக்கண மற்றும் கட்டமைப்பு விதிகளைப் பயன்படுத்தி சொற்களை மாற்றியமைக்கின்றது. ஆனால் அவை பெரும்பாலும் உள்ளார்ந்த மற்றும் ஆழமான கருத்துக்களை சரியாகப் புரிந்து கொள்ளத் தவறுகின்றன. மனித மொழிபெயர்ப்பாளர்கள் தங்களுடைய வேலைகளின் சரியான மற்றும் துல்லிய தன்மையை உறுதி செய்து கொள்ள கலாச்சார அம்சங்களைப் புரிந்து கொண்டு வேலை செய்கின்றார்கள்."
        },
        correct: "A"
      },
      ta2en: {
        source: "கல்வி என்பது மனிதனின் அறிவையும் சிந்தனைத் திறனையும் வளர்க்கும் முக்கியமான கருவியாகும். \nஉயர்கல்வி மாணவர்களின் அறிவை விரிவுபடுத்துவதுடன், அவர்களின் பகுப்பாய்வுத் திறனையும் மேம்படுத்துகிறது. \nஆய்வு நடவடிக்கைகள் மூலம் புதிய அறிவையும் தகவல்களையும் கண்டறிய முடியும்.",
        targetB: {
          heading: "AI",
          content: "Education is an important tool that develops human knowledge and thinking skills. Higher education expands students' knowledge and improves their analytical skills.Through research activities, new knowledge and information can be discovered."
        },
        targetA: {
          heading: "Human",
          content: "Education is an important tool that improves human knowledge and thinking skills. It expands higher education students' knowledge and develops their analytical skills. New knowledge and information can be discovered through research activities."
        },
        correct: "B"
      }
    },

    explanationMono:
    {
      en: "The [[First version||AI Version]] stays closer to the original scientific meaning and uses technical terms such as \"biological processes,\" \"species diversity,\" and \"long-term sustainability.\"\nThe [[Second version||Human Version]] uses simple, conversational language to make the scientific information easier for ordinary readers. For example, \"disrupt natural processes\" is expressed as \"messes with nature’s balance,\" making the idea more accessible. The human version also uses \"plants and animals disappear\" instead of the more technical  \"reduce biodiversity.\" It additionally expands the idea by mentioning \"pollution\" and \"our daily lives,\" which are not stated directly in the source. \nThe key difference is audience and style: the human version prioritizes [[simplicity and engagement||Conversational Tone]], while the AI version prioritizes technical precision and formal scientific language.",
      ta: "The human translation uses simplification and paraphrasing. It changes difficult terms into simple and natural Tamil. For example, \"வினையூக்கி\" is translated as [[\"வினையை வேகப்படுத்தும் பொருள்\"||Paraphrase Technique]]. So, it is easier for normal readers to understand. \nThe AI translation keeps more technical and academic terms such as [[\"இயக்கவியல்\"||Scientific Term]] and [[\"செயல்படுத்தும் ஆற்றல் தடை\"||Technical Term]]. This makes the text more difficult to understand."
    },

    explanationBi:
    {
      en: "The human translation is better because it provides a more accurate and complete representation of the original meaning. The AI translation is shorter and uses the general phrase \"மொழிபெயர்ப்பு விதிகள்,\" while the human version gives more precise meaning through [[\"இலக்கண மற்றும் கட்டமைப்பு விதிகளை.\"||Addition Technique]] The human translation also clearly explains that AI may fail to understand \"உள்ளார்ந்த மற்றும் ஆழமான கருத்துக்கள்\" and highlights the importance of cultural understanding in human translation. Therefore, the human version is more precise, detailed, and contextually appropriate.",
      ta: "The human translation is better because it is more concise, natural, and reader-friendly. The AI version uses \"develops human knowledge\" and \"expands students' knowledge,\" while the human version uses simpler expressions such as \"improves human knowledge\" and \"develops their analytical skills.\" The human translation also presents the ideas in a smoother order without adding unnecessary wording. Therefore, the human version is clearer, simpler, and more effective in conveying the original meaning."
    }
      
  },

  technical: {
    key: "technical",
    name: "Technical",
    rank: "A-RANK DUNGEON",
    rankShort: "A-RANK",
    tagline: "The Server Wastes",
    env: "A dark cyber-fantasy dungeon of humming server-monoliths, red-blue circuit veins etched into stone, and howling static in the dark.",

    mono: {
      en: {
        source: "Name of the Source: \n\tComputer Networking: A Top-Down Approach by Kurose & Ross \n\nSmart devices send large amounts of data across digital networks every day. Fast processing is needed to keep these systems secure and reliable.",
        targetA:{
          heading: "AI",
          content: "Smart devices continuously transmit massive data volumes over digital networks, requiring high-speed processing to ensure systemic security and reliability."
        },
        targetB:{
          heading: "Human",
          content: "Smart devices transfer the large amount of data around the world everyday. these devices need high speed data processing capacity to manage continuous data transmission without delay and it  helps to prevents systems from cyber threats and high speed without crashing."
        },
        correct: "A"
      },
      ta: {
        source: "தகவல் தொடர்பு என்பது ஒரு மூல முனையத்தில் (Source Node) உருவாக்கம் செய்யப்படும் தரவுகளை, மின்சார, ஒளியியல் அல்லது ரேடியோ அலைச் சமிக்ஞைகளாகக் (Signals) குறியாக்கம் செய்து, கம்பி (Guided) அல்லது கம்பியற்ற (Unguided) பரிமாற்ற ஊடகத்தின் (Transmission Medium) வழியாக இலக்கு முனையத்திற்குச் (Destination Node) செவ்வனே கடத்தி, மீண்டும் மூலத் தரவாக மறுமாற்றம் செய்து பரிமாறிக்கொள்ளும் ஒரு தொழில்நுட்ப முறைமையாகும்.",
        targetB:{
          heading: "AI",
          content: "தகவல் தொடர்பு என்பது ஒரு மூல இடத்திலிருந்து உருவாக்கப்படும் தகவல்களை, மின்சாரம், ஒளி அல்லது ரேடியோ அலைச் சமிக்ஞைகளாக மாற்றி, ஒயர் அல்லது ஒயர் இல்லாத ஊடகங்களின் வழியாக இலக்கு இடத்திற்கு அனுப்பிய பின், அவற்றை மீண்டும் தொடக்கக்காலத் தகவலாக மாற்றிப் பெற்றுக்கொள்ளும் ஒரு தொழில்நிகழ்வு அமைப்பாகும்."
        },
        targetA:{
          heading: "Human",
          content: "தரவுகளை அதன் பிறப்பிடத்திலிருந்து மின்சாரம், ஒளி அல்லது வானொலி அலைகளாக மாற்றம் செய்து வடம் அல்லது வடம் அற்ற கடத்தல் ஊடகத்தினூடாக அதன் முடிவிடத்தை நோக்கி அனுப்பிய பின்பு மாற்றம் செய்யப்பட்ட அத்தரவுகளை மீண்டும் மூலத் தரவாக மாற்றி பரிமாற்றத்தை மேற்கொள்ளும் ஒரு தொழில்நுட்ப முறையே தகவல் தொடர்பு எனப்படும்."
        },
        correct: "B"
      }
    },

    bi: {
      en2ta: {
        source: "Regular maintenance is essential to keep machinery operating safely and efficiently. Before using the equipment, the operator should check all major components for any signs of damage or malfunction. Any technical problems should be reported immediately to the maintenance team. Proper servicing and timely repairs can reduce breakdowns and extend the lifespan of the equipment.",
        targetB: {
          heading: "AI",
          content: "இயந்திரங்கள் பாதுகாப்பாகவும் திறமையாகவும் இயங்குவதற்கு வழக்கமான பராமரிப்பு அவசியமாகும். உபகரணங்களைப் பயன்படுத்துவதற்கு முன், இயக்குபவர் அதன் அனைத்து முக்கியப் பகுதிகளையும் பரிசோதித்து, சேதம் அல்லது செயலிழப்பு தொடர்பான அறிகுறிகள் உள்ளனவா என்பதை உறுதி செய்ய வேண்டும். ஏதேனும் தொழில்நுட்பப் பிரச்சினைகள் ஏற்பட்டால், அவை உடனடியாக பராமரிப்புக் குழுவிடம் தெரிவிக்கப்பட வேண்டும். முறையான சேவையிடுதல் மற்றும் உரிய நேரத்தில் மேற்கொள்ளப்படும் பழுதுபார்ப்புகள் மூலம் இயந்திரக் கோளாறுகளைக் குறைத்து, உபகரணங்களின் பயன்பாட்டு காலத்தை நீட்டிக்க முடியும்."
        },
        targetA: {
          heading: "Human",
          content: "தொடர் பராமரிப்பானது இயந்திரங்கள் பாதுகாப்பாகவும் வினைத்திறனாகவும் இயங்குவதற்கு அவசியமாகும். உபகரணங்களை பயன்படுத்துவதற்கு முன்பு, இயக்குபவர் அதன் முக்கிய பகுதிகளில் சேதம் அல்லது செயல் கோளாறுகளிற்கான அறிகுறிகள் ஏதேனும் உள்ளனவா என்பதை சரிபார்க்க வேண்டும்.தொழிநுட்ப பிரச்சினைகள் ஏதும் ஏற்பட்டால், அவை உடனடியாக பராமரிப்பு குழுவிடம் தெரிவிக்க வேண்டும்.முறையான சேவை மற்றும் பழுதுபார்த்தலை உரிய நேரத்தில் மேற்கொள்வதன் மூலம் இயந்திர பழுதடைவுகளை குறைத்து, உபகரணத்தின் பயன்பாட்டுகாலத்தை அதிகரிக்க முடியும்."
        },
        correct: "B"
      },
      ta2en: {
        source: "சூரிய சக்தி மின்சார உற்பத்திக்கு பயன்படுத்தப்படும் முக்கியமான புதுப்பிக்கத்தக்க ஆற்றல் வளமாகும். சூரிய மின்தகடுகள் சூரிய ஒளியை மின்சாரமாக மாற்றுகின்றன. மின்கல சேமிப்பு அமைப்புகள் உற்பத்தி செய்யப்படும் மின்சாரத்தைச் சேமிக்க உதவுகின்றன.",
        targetA: {
          heading: "AI",
          content: "Solar energy is an important renewable energy source used for electricity generation. Solar panels convert sunlight into electricity. Battery storage systems help store the electricity that is generated."
        },
        targetB: {
          heading: "Human",
          content: "Solar energy is an important renewable source used to produce electricity. Solar panels work by converting sunlight into electricity. Solar battery energy storage systems (BESS) help store the electricity generated from solar energy."
        },
        correct: "A"
      }
    },

    explanationMono:
    {
      en:"The [[second passage||Human-generated target text]] makes the technical information more accessible to general readers by explaining complex ideas in simpler language. For example, instead of using the highly technical expression \"systemic security and reliability,\" the human version explains the practical purpose through [[\"prevents systems from cyber threats.\"||Explanation]] It also makes the idea of continuous data transmission easier to understand by adding \"without delay\" and explaining the need for high-speed processing.The human translator therefore focuses not only on translating individual words, but also on communicating the intended message clearly to the target audience. Although the [[First passage||AI-generated target text]] uses more precise technical terminology, it remains more formal and abstract.The key advantage of the human version is the translator [[interprets and communicates the technical concept in a way that ordinary readers can understand more easily||Audience Awareness]].",
      ta:"The AI version difficult to understand because terms such as [[\"மூல இடம்,\" \"ஒயர்,\" \"இலக்கு,\" \"தொடக்கக் காலத் தகவல்,\" and \"தொழில்நிகழ்வு\"||Terminologies choosed by AI]] were unfamiliar to general readers. The AI also used \"தகவல்\" where \"தரவு\" was more appropriate for the technical context. Therefore, we choose \"தரவு\" because it specifically refers to data in the technical domain. Based on the [[target audience’s feedback||Collected Data from Target Audience]], the human version was clearer and easier to understand than the AI version."
    },

    explanationBi:
    {
      en: "The human translation is better because it is more direct and uses simpler, reader-friendly technical terms. The AI translation uses more formal expressions such as \"செயலிழப்பு,\" \"சேவையிடுதல்,\" and \"இயந்திரக் கோளாறுகள்,\" which can sound more complex. In contrast, the human version uses familiar terms such as [[\"செயல் கோளாறுகள்,\" \"சேவை,\" and \"இயந்திர பழுதடைவுகள்,\"||Understandable technical terms]] making the instructions easier to understand. Therefore, the human translation is clearer, simpler, and more accessible to the target readers.",
      ta: "The human translation is better because it is more precise and uses the correct technical terminology. The AI version uses the general term \"battery storage systems,\" while the human version uses the specific term [[\"Solar Battery Energy Storage Systems (BESS).\"||Accurate Technical Jargon]] The human translation also clearly connects the stored electricity to solar energy, making the meaning more specific. Therefore, the human version is more accurate, technical, and suitable for the target context."
    }
  },

  legal: {
    key: "legal",
    name: "Legal",
    rank: "S-RANK DUNGEON",
    rankShort: "S-RANK",
    tagline: "The Frozen Courtroom",
    env: "A frozen dungeon of ice pillars carved with old legal seals, a courtroom entombed in permafrost, and a cold blue hush over everything.",

    mono: {
      en: {
        source: "The parties agree to follow all the terms and conditions stated in this agreement. Any breach of the agreement may result in legal action. This agreement shall remain valid until it is terminated according to the applicable law.",
        targetA:{
          heading: "AI",
          content: "The parties agree to comply with all the terms and conditions set out in this agreement. Any violation of this agreement may lead to legal action. This agreement shall continue to be valid until it is terminated in accordance with the applicable law."
        },
        targetB:{
          heading: "Human",
          content: "The parties agree to follow all the terms and conditions stated in this agreement. Any breach of the agreement may result in legal action. This agreement shall remain valid until it is terminated according to the applicable law."
        },
        correct: "A"
      },
      ta: {
        source: "04.02.2017 ம் திகதியாகிய இன்று தங்களது தலைமையில் யாழ்ப்பாணம் அரச அதிபர் காரியாலயத்துக்கு முன்னால் A-09 பிரதான வீதியை வழிமறித்து கடற்றொழிலாளர்கள் சம்பந்தமான பிரச்சனையை முன்நிறுத்தி ஒன்று கூடல் ஒன்றை நடாத்த ஒழுங்குப்படுத்தி / திட்டமிட்டு இருப்பதாக குறிப்பிட்டு யாழ்ப்பாணம் தலைமையாக பொலிஸ் நிலைய பொறுப்பதிகாரி எனக்கு அறிக்கையிட்டுள்ளார்.",
        targetA:{
          heading: "AI",
          content: "2017 பிப்ரவரி 04 ஆம் தேதி, தங்களது தலைமையில் யாழ்ப்பாணம் அரச அதிபர் காரியாலயத்திற்கு முன்னால் A-09 பிரதான வீதியை மறித்து, கடற்றொழிலாளர்கள் தொடர்பான பிரச்சனையை முன்வைத்து ஒன்று கூடல் ஒன்றை நடத்த ஒழுங்குபடுத்தி இருப்பதாக, யாழ்ப்பாணம் தலைமையாக பொலிஸ் நிலைய பொறுப்பதிகாரி எனக்கு அறிக்கை அளித்துள்ளார்."
        },
        targetB:{
          heading: "Human",
          content: "இன்று (04.02.2017) கடற்றொழிலாளர் பிரச்சினை தொடர்பாக, தங்களது தலைமையில் யாழ்ப்பாண  அரசாங்க அதிபர் அலுவலகததிற்கு முன்பு A-09 பிரதான வீதியை மறித்து போராட்டமொன்றை நடாத்த திட்டமிட்டுள்ளதாக யாழ்ப்பாண பொலிஸ் நிலைய பொறுப்பதிகாரி எனக்குத் தெரிவித்துள்ளார்."
        },
        correct: "A"
      }
    },

    bi: {
      en2ta: {
        source: "An act to Amend the Judicature act, no. 2 of 1978 \nBe it enacted by the parliament of the Democratic Socialist Republic of Sri Lanka as follows: \nThis  act may be cited as the Judicature (Amendment) act, no. 8 of 2026.",
        targetB: {
          heading: "AI",
          content: "1978 ஆம் ஆண்டின் 2 ஆம் இலக்க நீதிநியாயச் சட்டத்தைத் திருத்துவதற்கான ஒரு சட்டம் \nஇலங்கைச் சனநாயக சோசலிசக் குடியரசின் பாராளுமன்றத்தினால் பின்வருமாறு சட்டமாக்கப்படுவதாக:- \n1. இச் சட்டம் 2026 ஆம் ஆண்டின் 8 ஆம் இலக்க நீதிநியாயச் சட்ட (திருத்தச்) சட்டம் என அழைக்கப்படலாம்."
        },
        targetA: {
          heading: "Human",
          content: "1978 ஆம் ஆண்டின் 2 ஆம் இலக்க, நீதித்துறைச் சட்டத்தினைத் திருத்துவதற்கானதொரு சட்டம் \nஇலங்கை  ஜனநாயக சோசலிச குடியரசின் பாராளுமன்றத்தினால் பின்வருமாறு சட்டமாக்கப்படுகிறது \n1. 2026 ஆம் ஆண்டின் 08 ஆம்  இலக்க நீதித்துறை ( திருத்தச் ) சட்டம் என இச்சட்டத்தை குறிப்பிடலாம்."
        },
        correct: "B"
      },
      ta2en: {
        source: "பெருந்தோட்டப் பிராந்தியங்களின் விடயத்தில், பிரதேச சபைகள் விசேட தீர்மானமொன்றை சேர்த்துக்கொண்டதன் மேல் அத்துடன் இயைபான தோட்டத்தின் நிருவாக அதிகாரிகளுடனான ஒருப்பாட்டுடனும், அந்தந்த பெருந்தோட்ட பிராந்தியங்களில் வதிவோரின் சேமநலனுக்கென அவசியமான வீதிகள், கிணறுகள் மற்றும் வேறு பொது வாழ்வசதிகளை வசதியளிப்பதற்கு பிரதேச சபை நிதியத்தை பயன்படுத்தலாம்.",
        targetB: {
          heading: "AI",
          content: "In the matter of plantation regions, upon a special resolution being passed by the Pradeshiya Sabhas, and with the agreement of the relevant estate's management authorities, the Pradeshiya Sabha fund may be utilized to provide roads, wells, and other public amenities necessary for the welfare of the residents of the respective plantation regions."
        },
        targetA: {
          heading: "Human",
          content: "In the case of plantation regions, the Pradeshiya Sabhas may, upon adoption of a special resolution and in concurrence with the administrative authority of the relevant estate, utilise the Pradeshiya Sabha fund to facilitate the residents of the respective plantation regions with roads, wells and other common amenities necessary for the welfare of such residents."
        },
        correct: "B"
      }
    },

    explanationMono:
    {
      en: "The [[first passage || AI version]] is grammatically correct and follows the source meaning closely, using formal expressions such as \"comply with all the terms and conditions,\" \"violation,\" and \"continue to be valid.\" However, some of these expressions are less natural in legal drafting. The [[second passage || Human version]] uses more appropriate and natural legal phrasing, particularly \"breach of the agreement,\" which is a commonly used legal expression for a failure to comply with an agreement. It also uses \"remain valid\" and \"according to the applicable law,\" making the wording smoother and more direct while preserving the original meaning. The key difference is *legal contextual awareness: while the AI produces a correct and formal translation, the human version uses more natural and [[appropriate legal language || Legal Terminology]] for the target context.*",
      ta: "The human translation is better because it preserves the original meaning and formal legal style more accurately. It clearly states that the police officer informed the speaker about a planned protest blocking the A-09 main road. The AI translation changes some meanings, such as [[\"போராட்டம்\"||Wrong Term]] into \"ஒன்று கூடல்\" and \"தெரிவித்துள்ளார்\" into [[\"அறிக்கை அளித்துள்ளார்,\"||Wrong Term]] which makes the statement less accurate. The human version also maintains the formal tone and structure of the original, while the AI version uses awkward expressions such as \"யாழ்ப்பாணம் தலைமையாக பொலிஸ் நிலைய.\" Overall, [[the human translation is clearer, more precise, and more appropriate for an official document||Correct form to translate legal]]. \nTherefore, the human translation focuses on clarity and readability, while the AI translation focuses on preserving the original structure and details."
    },

    explanationBi:
    {
      en: "The human translation is better because it follows the formal structure and terminology of a legal document more accurately. The AI translation changes the legal term \"நீதித்துறைச் சட்டம்\" to \"நீதிநியாயச் சட்டம்,\" which alters the established terminology. The human version also uses the formal legal expression \"என இச்சட்டத்தை குறிப்பிடலாம்,\" which is clearer and more appropriate for legislation. Therefore, the human translation is more precise, consistent, and suitable for legal translation.",
      ta: "The [[First passage||AI version]] stays closer to the source structure and terminology, using phrases like \"in concurrence with\" and \"administrative authority,\" making it more literal but slightly mechanical. The human version uses more natural legal expressions such as [[\"agreement\" and \"management authorities\"||Easy Flow]] and slightly restructures the sentence for smoother flow. Thus, the human version follows a more communicative and naturalized approach, while the AI follows a more semantic and source-oriented approach."
    }
  },

  literature: {
    key: "literature",
    name: "Literature",
    rank: "DOUBLE DUNGEON",
    rankShort: "DOUBLE",
    tagline: "The Last Chapter",
    env: "A burning castle of floating books and drifting manuscript pages, lit by furious red-purple fire — the final boss room.",

    mono: {
      en: {
        source: "Romance, who loves to nod and sing, \nWith drowsy head and folded wing, \nAmong the green leaves as they shake \nFar down within some shadowy lake, \nTo me a painted paroquet \nHath been- a most familiar bird- \nTaught me my alphabet to say- \nTo lisp my very earliest word \nWhile in the wild wood I did lie, \nA child- with a most knowing eye.",
        targetA:{
          heading: "AI",
          content: "Romance, which happily moves its head and sings, \nwith a sleepy head and wings folded, \nsits among the green leaves that move gently \ndeep inside a dark and mysterious lake. \n\nFor me, a colourful parrot \nhas always been a very familiar bird.\nIt taught me how to say my alphabet \nand helped me pronounce my very first words. \n\nI was lying in the wild forest, \na child with a very wise and curious mind."
        },
        targetB:{
          heading: "Human",
          content: "Romance, a spirit fond of humming tunes, \nIts head tipped low, its wings tucked in forest, \nNestled among the trembling green leaves \nDeep beneath some shadow-covered lake. \n\nTo me, a bright and colorful parrot \nHas always been a familiar friend \nIt taught me how to say my ABCs \nHelped me speak my very first small words. \n\nWhile I lay stretched out in the untamed woods, \nA child, with eyes that already seemed to know."
        },
        correct: "A"
      },
      ta: {
        source: "கறுப்பி நீ, \nஎன்ன நீ.... \nகருவிழியால் \nகாவியம் எழுதுகிறாய் \n\nகருப்பை நேசித்து \nஇரவை தனித்து \nஇரசிக்க வைக்கிறாய் \n\nகருங் கூந்தல் அதன் \nபின்னலில் என் \nமனதை பின்னி \nஅங்குமிங்கும் \nஊசலாட விடுகிறாய்.",
        targetB:{
          heading: "AI",
          content: "கருநிற அழகியே \nநீ எப்படிப்பட்டவள் என்றால்... \nஉனது கரிய விழிகளால் \nஅழகிய காவியத்தை எழுதுகிறாய் \n\n கருப்பு நிறத்தை விரும்பி \nஇரவின் தனிமையில் \nஅதனை இன்புற்று \nஇரசிக்கச் செய்கிறாய் \n\nஉனது அடர்ந்த கரிய கூந்தலினுடைய \nபின்னலுக்குள் என்னுடைய \nமனதைப் பிணைத்து சிக்க வைத்து \nஅங்குமிங்கும் அலைபாய வைக்கிறாய்."
        },
        targetA:{
          heading: "Human",
          content: "கருங்குழலியே \nயாரடி நீ.... \nகன்னங்கரேரென்ற காந்த விழியால் \nமனதை இதமூட்டும் காதல் காவியமெழுதுகிறாய் \n\nகருமை என்னும் அந்நிறத்தை நேசிக்கச்செய்து \nபரந்த அவ்விரவை தனிமையிலேயே என்னை இரசிக்க  வைக்கிறாய். \n\nஉன் கருங்குழலின் \nபின்னல்களுக்குள் \nஎன் மனதை தேரில் சிக்கிய \nமுல்லை கொடி போல சிக்கச் செய்து \nஇதமான காற்றில் அலைபாயவிடுகிறாய்."
        },
        correct: "B"
      }
    },

    bi: {
      en2ta: {
        source: "Sound of vernal showers \nOn the twinkling grass \nRain awaken’d flowers \nAll that ever was \nJoyous and clear and fresh-thy music doth surpass...",
        targetB: {
          heading: "AI",
          content: "வசந்த மழைத்தூறலின் ஓசை, \nபனித்துளி மின்னும் புல்வெளியில், \nமழை மலர்களை விழித்தெழச் செய்கிறது; \nஎன்றும் இருந்த அனைத்தையும் விட, \nமகிழ்ச்சியும், தெளிவும், புத்துணர்ச்சியும் நிறைந்த \nஉன் இசை அதைவிட மேலானது."
        },
        targetA: {
          heading: "Human",
          content: "மின்னும் பசிய புல் மீதிலே விழும் \nவேனில் மழைத்துளி ஓசையோ \nகன்னி மழைத்துளி வீழ்ந்ததும் உடன் \nகண்ணை விழிக்கும் மலர்களோ! \nஇன்னவை யாவுமுன் இன்னிசை இன்பம் \nதற்கிணை ஆகிடுமோ!"
        },
        correct: "B"
      },
      ta2en: {
        source: "அணிலே அணிலே ஓடிவா, \nஅழகிய அணிலே ஓடிவா! \nகொய்யா மரத்தில் ஏறிவா, \nகுண்டுப் பழத்தைக் கொண்டுவா, \nகொறித்துத் தின்னத் தந்திடு வா!",
        targetA: {
          heading: "AI",
          content: "O squirrel, O squirrel, run to me, \nBeautiful squirrel, run to me! \nClimb right up the guava tree, \nBring a plump fruit down for me, \nTo nibble and eat, give it to me!"
        },
        targetB: {
          heading: "Human",
          content: "O little squirrel, come come! \nCutie squirrel come come! \nClimb up in the Guava tree \nBring me down, round plummy fruit \nGive me to nibble and eat."
        },
        correct: "A"
      }
    },

    explanationMono: 
    {
      en: "The human translation is better at preserving the [[poetic style and imagery||True elements of poetic]] of the original. AI simplifies the poem into [[ordinary sentences||Not Aesthetic]], making it sound more like a description than a poem. The human uses poetic expressions such as \"a spirit fond of humming tunes\" and \"shadow-covered lake,\" while also maintaining the line breaks and rhythm. AI adds phrases such as \"sleepy head\" and \"dark and mysterious lake,\" which slightly changes the original imagery. Overall, the human translation feels more natural and poetic, while AI tends to simplify and explain the poem.",
      ta: "The [[first passage || AI version]] translates the poem closely to the original structure and focuses mainly on conveying the literal meaning. Although it is understandable, expressions such as \"கருநிற அழகியே\" and \"அடர்ந்த கரிய கூந்தல்\" are more direct and descriptive, with less emphasis on poetic creativity. \nThe [[second passage || human version]], however, uses [[synonyms and literary techniques||Synonyms, Pun, Metaphor, Simile]] to create a stronger poetic effect. For example, \"கூந்தல்\" is transformed into the more literary \"கருங்குழல்,\" and the title \"கருங்குழலியே\" is chosen to match the poetic tone. The human version also uses exaggeration in [[\"கன்னங்கரேரென்ற காந்த விழி\"||Exaggeration Technique]] and introduces a simile in [[\"தேரில் சிக்கிய முல்லைக்கொடி போல,\"||Simile Technique]] creating a vivid emotional image that is not explicitly present in the source. Therefore, the human version goes beyond simply transferring meaning and recreates the \"beauty, emotion, imagery, and literary effect\" of the poem, making it more suitable for a poetic translation."
    },
      
    explanationBi:
    {
      en: "Using expressions like [[\"மின்னும் பசிய புல்\"||Which expresses the rain drops on the grass. That makes it twinkling.]] for twinkling grass and \"கன்னி மழைத்துளி... கண்ணை விழிக்கும் மலர்கள்\" to show the flowers opening their eyes to the rain. \nwe ended it with a question [[\"இன்னவை யாவுமுன் இன்னிசை இன்பம் தற்கிணை ஆகிடுமோ!\"||Creates a strong impact on audience using - Question]] because in Tamil poetry, asking if anything could ever equal its beauty leaves a much stronger emotional impact. Ultimately, where an AI just translates vocabulary, we tried to recreate the actual art and soul of the original poem.",
      ta: "Here we used the terms that are mostly attached with kids/ children. we took the rhythm of the source and try to recreate the exact rhythm also in English Translation. we choose simple and direct terms because [[children are not capable for finding the hidden meanings||Simplicity]], so we choose words like come, [[little squirrel, round plummy fruit , nibble||Kid's Terminology]].  So these terms are basically contains direct meaning so they will easily understand, they won't struggle to catch the sense."
    }
  }
};

/* Dungeon selection order shown behind the four mystery gates.
   The mapping is randomised client-side at runtime so the
   player can't infer category from gate position. */
const DUNGEON_KEYS = ["academic", "technical", "legal", "literature"];
