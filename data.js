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
        ai: "Climate change impacts both natural ecosystems and human populations. Increasing global temperatures threaten to disturb biological processes and decrease species diversity. Cutting back on greenhouse gas emissions is critical to achieving long-term sustainability.",
        human: "When the planet warms up, it messes with nature's balance and changes our daily lives, making many plants and animals disappear. If we want a good world to live in, cutting down on greenhouse gas emissions and pollution isn't just an option it's essential.",
        correct: "A"
      },
      ta: {
        ai: "இந்த ஆய்வு பல்கலைக்கழக மாணவர்களிடையே தூக்க கால அளவிற்கும் கல்வி செயல்திறனுக்கும் இடையிலான தொடர்பை ஆராய்கிறது. போதுமான தூக்கத்திற்கும் மேம்பட்ட தேர்வு மதிப்பெண்களுக்கும் இடையே புள்ளியியல் ரீதியாக குறிப்பிடத்தக்க தொடர்பு இருப்பதாக முடிவுகள் தெரிவிக்கின்றன.",
        human: "பல்கலைக்கழக மாணவர்கள் எவ்வளவு தூங்குகிறார்கள், அது அவர்களின் மதிப்பெண்களை எப்படி பாதிக்கிறது என்பதை இந்த ஆய்வு பார்க்கிறது. போதுமான தூக்கம் பெறும் மாணவர்கள் பொதுவாக அதிக மதிப்பெண் பெறுவதை நாங்கள் கண்டறிந்தோம்.",
        correct: "A"
      }
    },

    bi: {
      en2ta: {
        source: "Machine translation replaces words using rules, but it often misses deeper meaning. Human translators understand culture, making their work much more accurate.",
        targetA: "இயந்திர மொழிபெயர்ப்பு விதிகளைப் பயன்படுத்தி சொற்களை மாற்றுகிறது, ஆனால் அது பெரும்பாலும் ஆழமான அர்த்தத்தைத் தவறவிடுகிறது. மனித மொழிபெயர்ப்பாளர்கள் கலாச்சாரத்தைப் புரிந்துகொள்வதால், அவர்களின் பணி மிகவும் துல்லியமாகிறது.",
        targetB: "இயந்திர மொழிபெயர்ப்பானது மொழி சார்ந்த இலக்கண மற்றும் கட்டமைப்பு விதிகளைப் பயன்படுத்தி சொற்களை மாற்றியமைக்கின்றது. ஆனால் அவை பெரும்பாலும் உள்ளார்ந்த மற்றும் ஆழமான கருத்துக்களை சரியாகப் புரிந்து கொள்ளத் தவறுகின்றன. மனித மொழிபெயர்ப்பாளர்கள் தங்களுடைய வேலைகளின் சரியான மற்றும் துல்லிய தன்மையை உறுதி செய்து கொள்ள கலாச்சார அம்சங்களைப் புரிந்து கொண்டு வேலை செய்கின்றார்கள்.",
        correct: "A"
      },
      ta2en: {
        source: "மாணவர்களின் ஒட்டுமொத்த வளர்ச்சிக்கு பாடத்திட்டத்திற்கு அப்பாற்பட்ட செயல்பாடுகள் — விளையாட்டு, கலை, மற்றும் சமூகப் பணி — மிகவும் முக்கியம் என ஆசிரியர்கள் நம்புகின்றனர்.",
        targetA: "Educators hold that extracurricular activities, encompassing athletics, the arts, and community service, are of considerable importance to the holistic development of the student body.",
        targetB: "Teachers believe that activities beyond the curriculum — sports, arts, and community work — are very important for the overall development of students.",
        correct: "A"
      }
    },

    explanationMono:
    {
      en: "The [[First version||AI Version]] stays closer to the original scientific meaning and uses technical terms such as \"biological processes,\" \"species diversity,\" and \"long-term sustainability.\"\nThe [[Second version||Human Version]] uses simple, conversational language to make the scientific information easier for ordinary readers. For example, \"disrupt natural processes\" is expressed as \"messes with nature’s balance,\" making the idea more accessible. The human version also uses \"plants and animals disappear\" instead of the more technical  \"reduce biodiversity.\" It additionally expands the idea by mentioning \"pollution\" and \"our daily lives,\" which are not stated directly in the source. \nThe key difference is audience and style: the human version prioritizes [[simplicity and engagement||Conversational Tone]], while the AI version prioritizes technical precision and formal scientific language.",
      ta: "[[முதல் பதிப்பு||AI பதிப்பு]] மூல அறிவியல் பொருளுக்கு நெருக்கமாக இருக்கிறது மற்றும் \"உயிரியல் செயல்முறைகள்,\" \"வகை பரிமாணம்,\" மற்றும் \"நீண்ட கால நிலைத்தன்மை\" போன்ற தொழில்நுட்ப சொற்களைப் பயன்படுத்துகிறது.\n[[இரண்டாவது பதிப்பு||மனித பதிப்பு]] அறிவியல் தகவலை பொதுவான வாசகர்களுக்கு எளிதாக புரியச் செய்ய எளிய, உரையாடல் மொழியைப் பயன்படுத்துகிறது. உதாரணமாக, \"செயல்முறைகளை சீர்குலைக்கிறது\" என்பது \"இயற்கையின் சமநிலையை குழப்புகிறது\" என்று வெளிப்படுத்தப்படுகிறது, இதனால் கருத்து எளிதாக புரியும். மனித பதிப்பு மேலும் \"பூச்சிகள் மற்றும் விலங்குகள் காணாமல் போகின்றன\" என்பதைக் குறிப்பிடுகிறது, இது \"வகை பரிமாணத்தை குறைக்கிறது\" என்ற தொழில்நுட்பமான சொல்லுக்கு பதிலாக உள்ளது. மேலும், \"மாசுபாடு\" மற்றும் \"எங்கள் தினசரி வாழ்க்கை\" என்பவற்றையும் குறிப்பிடுவதன் மூலம் கருத்தை விரிவாக்குகிறது, இது மூலத்தில் நேரடியாக குறிப்பிடப்படவில்லை. முக்கிய வேறுபாடு வாசகர் மற்றும் பாணி: மனித பதிப்பு [[எளிமை மற்றும் ஈடுபாடு||உரையாடல் பாணி]]க்கு முன்னுரிமை அளிக்கிறது, AI பதிப்பு தொழில்நுட்ப துல்லியத்திற்கும் அதிகாரபூர்வ அறிவியல் மொழிக்கும் முன்னுரிமை அளிக்கிறது."
    },

    explanationBi:
    {
      en: "Moving from source to [[Target A||AI-generated target text]], the translation keeps the sentence's original two-clause structure intact and renders each term with its closest dictionary equivalent, producing a fluent but slightly dense result. [[Target B||Human-generated target text]] breaks the long sentence into two shorter ideas and swaps in [[\"ரொம்ப முக்கியமான பங்கு\"||A more colloquial intensifier a native speaker reaches for instinctively, rather than a neutral dictionary match]], a register choice a machine model rarely makes unprompted because it optimises for fidelity over local colour. Where the AI privileges structural mirroring of the source, the human translator privileges what would sound natural if the sentence had been written in the target language from the start.",
      ta: "[[மூல உரை||AI மொழிபெயர்ப்பு]] மூல வாக்கியத்தின் இரண்டு பகுதி அமைப்பை முழுமையாக வைத்திருக்கிறது மற்றும் ஒவ்வொரு சொல்லையும் அதன் அருகிலுள்ள அகராதி இணைப்புடன் மொழிபெயர்க்கிறது, இதனால் சுருக்கமான ஆனால் கொஞ்சம் நெருக்கமான முடிவை உருவாக்குகிறது. [[மனித மொழிபெயர்ப்பு||மனித மொழிபெயர்ப்பு]] நீண்ட வாக்கியத்தை இரண்டு குறுகிய கருத்துகளாகப் பிரிக்கிறது மற்றும் [[\"ரொம்ப முக்கியமான பங்கு\"||ஒரு சொந்த மொழி பேசுபவர் இயற்கையாகவே பயன்படுத்தும் ஒரு சுருக்கமான வலியுறுத்தல், இது ஒரு நியூட்ரல் அகராதி இணைப்புக்கு பதிலாக உள்ளது]] போன்ற பாணி மாற்றங்களைச் சேர்க்கிறது, இது இயந்திர மாதிரி அரிதாக செய்யும் பதிவு தேர்வு ஆகும், ஏனெனில் அது உள்ளூர் நிறத்தை விட நம்பகத்தன்மைக்கு முன்னுரிமை அளிக்கிறது. AI மூலத்தின் கட்டமைப்பை முன்னுரிமை அளிக்கும் போது, மனித மொழிபெயர்ப்பாளர் இலக்கு மொழியில் வாக்கியம் ஆரம்பத்தில் எழுதப்பட்டிருந்தால் இயல்பாக கேட்கப்படும் வகையில் முன்னுரிமை அளிக்கிறார்."
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
        ai: "Smart devices continuously transmit massive data volumes over digital networks, requiring high-speed processing to ensure systemic security and reliability.",
        human: "Smart devices transfer the large amount of data around the world everyday. these devices need high speed data processing capacity to manage continuous data transmission without delay and it  helps to prevents systems from cyber threats and high speed without crashing .",
        correct: "A"
      },
      ta: {
        ai: "பிணைய இடைமுகத்தை உள்ளமைக்க, கணினி அமைப்புகள் பலகத்திற்குச் சென்று பொருத்தமான அடாப்டரைத் தேர்ந்தெடுக்கவும். மாற்றங்களைப் பயன்படுத்தி இணைப்பை மறுதொடக்கம் செய்வதற்கு முன், IP முகவரி சரியாக ஒதுக்கப்பட்டுள்ளதையும், சப்நெட் மாஸ்க் உள்ளூர் பிணைய உள்ளமைவுடன் பொருந்துவதையும் உறுதிசெய்யவும்.",
        human: "பிணைய அமைப்பை சரி செய்ய, சிஸ்டம் செட்டிங்ஸில் போய் சரியான அடாப்டரைத் தேர்வு செய்யுங்கள். IP முகவரியை ஒரு முறை சரிபார்த்து, சப்நெட் மாஸ்க் உங்கள் நெட்வொர்க்குடன் பொருந்துகிறதா என்று பாருங்க — அப்புறம் மாற்றங்களைச் சேமித்து இணைப்பை மறுதொடக்கம் செய்யுங்கள்.",
        correct: "A"
      }
    },

    bi: {
      en2ta: {
        source: "Regular maintenance is essential to keep machinery operating safely and efficiently. Before using the equipment, the operator should check all major components for any signs of damage or malfunction. Any technical problems should be reported immediately to the maintenance team. Proper servicing and timely repairs can reduce breakdowns and extend the lifespan of the equipment.",
        targetA: "இயந்திரங்கள் பாதுகாப்பாகவும் திறமையாகவும் இயங்குவதற்கு வழக்கமான பராமரிப்பு அவசியமாகும். உபகரணங்களைப் பயன்படுத்துவதற்கு முன், இயக்குபவர் அதன் அனைத்து முக்கியப் பகுதிகளையும் பரிசோதித்து, சேதம் அல்லது செயலிழப்பு தொடர்பான அறிகுறிகள் உள்ளனவா என்பதை உறுதி செய்ய வேண்டும். ஏதேனும் தொழில்நுட்பப் பிரச்சினைகள் ஏற்பட்டால், அவை உடனடியாக பராமரிப்புக் குழுவிடம் தெரிவிக்கப்பட வேண்டும். முறையான சேவையிடுதல் மற்றும் உரிய நேரத்தில் மேற்கொள்ளப்படும் பழுதுபார்ப்புகள் மூலம் இயந்திரக் கோளாறுகளைக் குறைத்து, உபகரணங்களின் பயன்பாட்டு காலத்தை நீட்டிக்க முடியும்.",
        targetB: "தொடர் பராமரிப்பானது இயந்திரங்கள் பாதுகாப்பாகவும் வினைத்திறனாகவும் இயங்குவதற்கு அவசியமாகும். உபகரணங்களை பயன்படுத்துவதற்கு முன்பு, இயக்குபவர் அதன் முக்கிய பகுதிகளில் சேதம் அல்லது செயல் கோளாறுகளிற்கான அறிகுறிகள் ஏதேனும் உள்ளனவா என்பதை சரிபார்க்க வேண்டும்.தொழிநுட்ப பிரச்சினைகள் ஏதும் ஏற்பட்டால், அவை உடனடியாக பராமரிப்பு குழுவிடம் தெரிவிக்க வேண்டும்.முறையான சேவை மற்றும் பழுதுபார்த்தலை உரிய நேரத்தில் மேற்கொள்வதன் மூலம் இயந்திர பழுதடைவுகளை குறைத்து, உபகரணத்தின் பயன்பாட்டுகாலத்தை அதிகரிக்க முடியும்.",
        correct: "A"
      },
      ta2en: {
        source: "சர்வர் அதிக சுமையின் கீழ் இருக்கும்போது, கோரிக்கைகளை பல எடுத்துக்கூறு நோடுகளுக்கு இடையே பகிர்ந்தளிக்க லோட் பேலன்சர் பயன்படுத்தப்படுகிறது.",
        targetA: "When the server is under heavy load, a load balancer is used to distribute requests across multiple backend nodes.",
        targetB: "A load balancer gets used to spread the incoming requests across several backend machines whenever the server starts getting overloaded.",
        correct: "A"
      }
    },

    explanationMono:
    {
      en:"The [[second passage||Human-generated target text]] makes the technical information more accessible to general readers by explaining complex ideas in simpler language. For example, instead of using the highly technical expression \"systemic security and reliability,\" the human version explains the practical purpose through \"prevents systems from cyber threats.\" It also makes the idea of continuous data transmission easier to understand by adding *\"without delay\"* and explaining the need for high-speed processing.The human translator therefore focuses not only on translating individual words, but also on communicating the intended message clearly to the target audience. Although the [[First passage||AI-generated target text]] uses more precise technical terminology, it remains more formal and abstract.The key advantage of the human version is the translator [[interprets and communicates the technical concept in a way that ordinary readers can understand more easily||Audience Awareness]].",
      ta:"[[இரண்டாவது உரை||மனித மொழிபெயர்ப்பு]] பொதுவான வாசகர்களுக்கு தொழில்நுட்ப தகவலை எளிதாக அணுகக்கூடியதாக மாற்றுகிறது, சிக்கலான கருத்துக்களை எளிய மொழியில் விளக்குகிறது. உதாரணமாக, மிகவும் தொழில்நுட்பமான வெளிப்பாடு \"சிஸ்டமிக் பாதுகாப்பு மற்றும் நம்பகத்தன்மை\" என்பதற்கு பதிலாக, மனித பதிப்பு \"சிஸ்டங்களை சைபர் அச்சுறுத்தல்களிலிருந்து தடுக்கும்\" என்ற நடைமுறை நோக்கத்தை விளக்குகிறது. மேலும், தொடர்ச்சியான தரவு பரிமாற்றத்தின் கருத்தை *\"தாமதமின்றி\"* சேர்த்து, உயர் வேக செயலாக்கத்தின் தேவையை விளக்குவதன் மூலம் புரிந்துகொள்ள எளிதாக்குகிறது. எனவே மனித மொழிபெயர்ப்பாளர் தனிப்பட்ட சொற்களை மட்டுமே மொழிபெயர்க்காமல், இலக்கு வாசகர்களுக்கு நோக்கத்தை தெளிவாகத் தெரிவிக்க கவனம் செலுத்துகிறார். [[முதல் உரை||AI மொழிபெயர்ப்பு]] அதிக துல்லியமான தொழில்நுட்ப சொற்களைப் பயன்படுத்தினாலும், அது இன்னும் அதிகாரபூர்வமாகவும் சுருக்கமாகவும் உள்ளது. மனித பதிப்பின் முக்கிய நன்மை என்பது மொழிபெயர்ப்பாளர் [[தொழில்நுட்பக் கருத்தை பொதுவான வாசகர்கள் எளிதில் புரிந்துகொள்ளக்கூடிய வகையில் விளக்குகிறார்||வாசகர் விழிப்புணர்வு]]."
    },

    explanationBi:
    {
      en: "[[Target A||AI-generated target text]] preserves the source's single long sentence and mirrors its technical nouns almost one-to-one, which reads as accurate but slightly stiff to a native reader. [[Target B||Human-generated target text]] shortens the terminology — using [[\"ஃபங்க்ஷன்\"||A commonly borrowed English loanword Tamil-speaking developers actually use in conversation, over the more formal Tamil equivalent]] instead of the fully Tamil equivalent — because that's genuinely how working programmers talk to each other, a register choice that requires real domain familiarity rather than dictionary lookup. This is a common tell in technical translation: AI output leans toward the 'textbook-correct' term, while human output reflects the jargon a practitioner would actually reach for.",
      ta: "[[Target A||AI மொழிபெயர்ப்பு]] மூல உரையின் ஒரே நீண்ட வாக்கியத்தை பாதுகாத்து, அதன் தொழில்நுட்பப் பெயர்களை சுமார் ஒரே-ஒரு வார்த்தையாக ஒத்திருக்கச் செய்கிறது, இது துல்லியமாக இருக்கிறது ஆனால் ஒரு சொந்த மொழி வாசகருக்கு கொஞ்சம் கடுமையாக வாசிக்கப்படுகிறது. [[Target B||மனித மொழிபெயர்ப்பு]] தொழில்நுட்ப சொற்களை சுருக்குகிறது — முழுமையான தமிழ் இணைப்புக்கு பதிலாக [[\"ஃபங்க்ஷன்\"||உண்மையில் தமிழில் பேசும் டெவலப்பர்கள் உரையாடலில் பயன்படுத்தும் பொதுவான ஆங்கில கடன் சொல்]] பயன்படுத்துகிறது — ஏனெனில் அது உண்மையில் வேலை செய்யும் நிரலாளர்கள் ஒருவருக்கொருவர் பேசும் விதமாகும், இது அகராதி தேடலுக்கு பதிலாக உண்மையான துறைக் கற்றலைத் தேவைப்படுத்தும் பதிவு தேர்வு ஆகும். இது தொழில்நுட்ப மொழிபெயர்ப்பில் பொதுவான குறிப்பு: AI வெளியீடு 'பாடநூல்-சரியான' சொல்லை நோக்குகிறது, மனித வெளியீடு ஒரு பயிற்சியாளர் உண்மையில் எதை அணுகுவார் என்பதை பிரதிபலிக்கிறது."
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
        ai: "The parties agree to comply with all the terms and conditions set out in this agreement. Any violation of this agreement may lead to legal action. This agreement shall continue to be valid until it is terminated in accordance with the applicable law.",
        human: "The parties agree to follow all the terms and conditions stated in this agreement. Any breach of the agreement may result in legal action. This agreement shall remain valid until it is terminated according to the applicable law.",
        correct: "A"
      },
      ta: {
        ai: "இந்த ஒப்பந்தம் நிறைவேற்றப்பட்டவுடன், முதல் தரப்பினர் முப்பது (30) நாட்களுக்குள் முழுத் தொகையையும் செலுத்த கடமைப்பட்டுள்ளனர், தவறினால் அது ஒரு பொருண்மையான மீறலாக கருதப்பட்டு, இரண்டாம் தரப்பினருக்கு பொருந்தும் சட்டத்தின் கீழ் கிடைக்கும் அனைத்து தீர்வுகளையும் நாடும் உரிமையை அளிக்கும்.",
        human: "இந்த ஒப்பந்தத்தில் கையெழுத்திட்ட பிறகு, முதல் தரப்பினர் முப்பது நாட்களுக்குள் முழு தொகையையும் கட்ட வேண்டும். அப்படி கட்டாவிட்டால், அது ஒப்பந்த மீறலாக கருதப்படும், அதனால் இரண்டாம் தரப்பினர் சட்டப்படி என்ன நடவடிக்கை எடுக்கலாம்னாலும் எடுக்கலாம்.",
        correct: "A"
      }
    },

    bi: {
      en2ta: {
        source: "An act to Amend the Judicature act, no. 2 of 1978 \nBe it enacted by the parliament of the Democratic Socialist Republic of Sri Lanka as follows: \nThis  act may be cited as the Judicature (Amendment) act, no. 8 of 2026.",
        targetA: "1978 ஆம் ஆண்டின் 2 ஆம் இலக்க நீதிநியாயச் சட்டத்தைத் திருத்துவதற்கான ஒரு சட்டம் \nஇலங்கைச் சனநாயக சோசலிசக் குடியரசின் பாராளுமன்றத்தினால் பின்வருமாறு சட்டமாக்கப்படுவதாக:- \n1. இச் சட்டம் 2026 ஆம் ஆண்டின் 8 ஆம் இலக்க நீதிநியாயச் சட்ட (திருத்தச்) சட்டம் என அழைக்கப்படலாம்.",
        targetB: "1978 ஆம் ஆண்டின் 2 ஆம் இலக்க, நீதித்துறைச் சட்டத்தினைத் திருத்துவதற்கானதொரு சட்டம் \nஇலங்கை  ஜனநாயக சோசலிச குடியரசின் பாராளுமன்றத்தினால் பின்வருமாறு சட்டமாக்கப்படுகிறது \n1. 2026 ஆம் ஆண்டின் 08 ஆம்  இலக்க நீதித்துறை ( திருத்தச் ) சட்டம் என இச்சட்டத்தை குறிப்பிடலாம்.",
        correct: "A"
      },
      ta2en: {
        source: "இந்த உடன்படிக்கையின் கீழ் எழும் அனைத்து சர்ச்சைகளும், மத்தியஸ்தம் மூலம் தீர்க்கப்படும் என்றும், அத்தகைய மத்தியஸ்தத்தின் முடிவு இரு தரப்பினருக்கும் இறுதியானதும் கட்டுப்பாடானதுமாக இருக்கும் என்றும் தரப்பினர் ஒப்புக்கொள்கின்றனர்.",
        targetA: "The parties agree that all disputes arising under this agreement shall be resolved through arbitration, and that the outcome of such arbitration shall be final and binding on both parties.",
        targetB: "Both sides agree that if any disagreement comes up under this agreement, they'll settle it through arbitration, and whatever the arbitrator decides is final — both sides have to stick to it.",
        correct: "A"
      }
    },

    explanationMono:
    {
      en: "The [[first passage || AI version]] is grammatically correct and follows the source meaning closely, using formal expressions such as \"comply with all the terms and conditions,\" \"violation,\" and \"continue to be valid.\" However, some of these expressions are less natural in legal drafting. The [[second passage || Human version]] uses more appropriate and natural legal phrasing, particularly \"breach of the agreement,\" which is a commonly used legal expression for a failure to comply with an agreement. It also uses \"remain valid\" and \"according to the applicable law,\" making the wording smoother and more direct while preserving the original meaning. The key difference is *legal contextual awareness: while the AI produces a correct and formal translation, the human version uses more natural and [[appropriate legal language || Legal Terminology]] for the target context.*",
      ta: "முதல் உரை (AI பதிப்பு) இலக்கண ரீதியாக சரியானது மற்றும் மூல பொருளை நெருக்கமாக பின்பற்றுகிறது, \"எல்லா விதிமுறைகளையும் பின்பற்றுதல்,\" \"மீறல்,\" மற்றும் \"சரியானதாக தொடரும்\" போன்ற அதிகாரபூர்வமான வெளிப்பாடுகளைப் பயன்படுத்துகிறது. இருப்பினும், இந்த வெளிப்பாடுகளில் சில சட்ட வடிவமைப்பில் இயல்பானவை அல்ல. இரண்டாவது உரை (மனித பதிப்பு) \"ஒப்பந்த மீறல்\" போன்ற அதிகமாகப் பயன்படுத்தப்படும் சட்ட வெளிப்பாடுகளைப் பயன்படுத்துகிறது, இது ஒப்பந்தத்தை பின்பற்றாததற்கான பொதுவான சட்ட வெளிப்பாடு ஆகும். இது \"சரியானதாக தொடரும்\" மற்றும் \"பொருந்தக்கூடிய சட்டத்தின் படி\" என்பவற்றையும் பயன்படுத்துகிறது, இதனால் சொற்கள் மென்மையாகவும் நேரடியாகவும் இருக்கின்றன, மூல பொருளை பாதுகாத்து. முக்கிய வேறுபாடு *சட்ட சூழல் விழிப்புணர்வு: AI சரியான மற்றும் அதிகாரபூர்வமான மொழிபெயர்ப்பை உருவாக்கும் போது, மனித பதிப்பு இலக்கு சூழலுக்கேற்ற இயல்பான மற்றும் [[சட்டத் தொடர்புடைய மொழி || Legal Terminology]] பயன்படுத்துகிறது.*"
    },

    explanationBi:
    {
      en: "[[Target A||AI-generated target text]] keeps the source's single dense conditional clause intact, including the formal [[\"notwithstanding any other provision\"||Standard legal boilerplate rendered with near word-for-word structural fidelity]] construction rendered nearly word-for-word in structure. [[Target B||Human-generated target text]] breaks the sentence in two and uses looser, spoken register — dropping the formal boilerplate connective entirely — which reads more naturally but arguably loses some of the precision a court document depends on. This is the central tension in legal translation: the AI target optimises for exact correspondence to the source's legal force, while the human target optimises for what a reader would actually understand on a first pass, sometimes at the cost of formal exactness.",
      ta: "[[Target A||AI மொழிபெயர்ப்பு]] மூல உரையின் ஒரே நெருக்கமான நிபந்தனை வாக்கியத்தை முழுமையாக வைத்திருக்கிறது, [[\"வேறு எந்த விதியிருந்தாலும்\"||மூல உரையின் கட்டமைப்பை வார்த்தை வார்த்தையாக ஒத்திருக்கச் செய்கிறது]] போன்ற அதிகாரபூர்வமான கட்டமைப்பையும் உள்ளடக்கியது. [[Target B||மனித மொழிபெயர்ப்பு]] வாக்கியத்தை இரண்டு பகுதிகளாகப் பிரிக்கிறது மற்றும் சுருக்கமான, பேசும் பாணியைப் பயன்படுத்துகிறது — அதிகாரபூர்வமான இணைப்பை முற்றிலும் விட்டு விடுகிறது — இது இயல்பாக வாசிக்கப்படுகிறது ஆனால் நீதிமன்ற ஆவணத்திற்கு தேவையான சில துல்லியத்தைக் குறைக்கக்கூடும். இது சட்ட மொழிபெயர்ப்பில் மையமான மோதல்: AI இலக்கு மூல உரையின் சட்ட சக்திக்கு துல்லியமான ஒத்துப்போக்கை மேம்படுத்துகிறது, மனித இலக்கு வாசகர் முதன்முதலில் உணர்வதை மேம்படுத்துகிறது, சில நேரங்களில் அதிகாரபூர்வ துல்லியத்தை இழக்கக்கூடும்."
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
        ai: "The old fisherman sat alone on the shore each evening, watching the waves return again and again, as if the sea itself were trying to remember something it had lost long ago.",
        human: "Every evening the old fisherman sat by himself on the shore, watching wave after wave roll in, like the sea was still trying to remember something it had lost a long, long time ago.",
        correct: "A"
      },
      ta: {
        ai: "கருநிற அழகியே \nநீ எப்படிப்பட்டவள் என்றால்... \nஉனது கரிய விழிகளால் \nஅழகிய காவியத்தை எழுதுகிறாய் \n\n கருப்பு நிறத்தை விரும்பி \nஇரவின் தனிமையில் \nஅதனை இன்புற்று \nஇரசிக்கச் செய்கிறாய் \n\nஉனது அடர்ந்த கரிய கூந்தலினுடைய \nபின்னலுக்குள் என்னுடைய \nமனதைப் பிணைத்து சிக்க வைத்து \nஅங்குமிங்கும் அலைபாய வைக்கிறாய்",
        human: "கருங்குழலியே \nயாரடி நீ.... \nகன்னங்கரேரென்ற காந்த விழியால் \nமனதை இதமூட்டும் காதல் காவியமெழுதுகிறாய் \n\nகருமை என்னும் அந்நிறத்தை நேசிக்கச்செய்து \nபரந்த அவ்விரவை தனிமையிலேயே என்னை இரசிக்க  வைக்கிறாய். \n\nஉன் கருங்குழலின் \nபின்னல்களுக்குள் \nஎன் மனதை தேரில் சிக்கிய \nமுல்லை கொடி போல சிக்கச் செய்து \nஇதமான காற்றில் அலைபாயவிடுகிறாய்",
        correct: "A"
      }
    },

    bi: {
      en2ta: {
        source: "Sound of vernal showers \nOn the twinkling grass \nRain awaken’d flowers \nAll that ever was \nJoyous and clear and fresh-thy music doth surpass...",
        targetA: "வசந்த மழைத்தூறலின் ஓசை, \nபனித்துளி மின்னும் புல்வெளியில், \nமழை மலர்களை விழித்தெழச் செய்கிறது; \nஎன்றும் இருந்த அனைத்தையும் விட, \nமகிழ்ச்சியும், தெளிவும், புத்துணர்ச்சியும் நிறைந்த \nஉன் இசை அதைவிட மேலானது.",
        targetB: "மின்னும் பசிய புல் மீதிலே விழும் \nவேனில் மழைத்துளி ஓசையோ \nகன்னி மழைத்துளி வீழ்ந்ததும் உடன் \nகண்ணை விழிக்கும் மலர்களோ! \nஇன்னவை யாவுமுன் இன்னிசை இன்பம் \nதற்கிணை ஆகிடுமோ!",
        correct: "A"
      },
      ta2en: {
        source: "மழை நின்ற பிறகும், அவன் ஜன்னலருகில் நின்று வானத்தைப் பார்த்துக் கொண்டிருந்தான், எதையோ இன்னும் காத்திருப்பது போல.",
        targetA: "Even after the rain had stopped, he stood by the window looking at the sky, as if he were still waiting for something.",
        targetB: "Even once the rain stopped, he just stood there by the window, eyes on the sky, still waiting on something.",
        correct: "A"
      }
    },

    explanationMono: 
    {
      en: "The [[first passage||AI translation]] preserves the original's syntax almost clause-for-clause, keeping the extended simile [[\"as if the sea itself were trying to remember\"||A structurally faithful rendering that mirrors the source sentence's shape closely]] in one continuous sentence, which reads elegant but slightly formal. The [[second passage||Human translation]] breaks rhythm deliberately — inserting the repetition [[\"a long, long time ago\"||A rhythmic doubling a literary translator adds for emotional emphasis, rarely produced by a model unless explicitly prompted]] that isn't a literal rendering of the source at all, but a stylistic choice made to recreate the feeling of lingering time rather than the words themselves. In literary translation this is the clearest tell: AI tends to translate meaning faithfully sentence by sentence, while human translators sometimes rewrite rhythm and emphasis to protect the emotional effect, even where it means departing from literal wording.",
      ta: "The [[first passage || AI version]] translates the poem closely to the original structure and focuses mainly on conveying the literal meaning. Although it is understandable, expressions such as \"கருநிற அழகியே\" and \"அடர்ந்த கரிய கூந்தல்\" are more direct and descriptive, with less emphasis on poetic creativity. \nThe [[second passage || human version]], however, uses synonyms and literary techniques to create a stronger poetic effect. For example, \"கூந்தல்\" is transformed into the more literary \"கருங்குழல்,\" and the title \"கருங்குழலியே\" is chosen to match the poetic tone. The human version also uses exaggeration in \"கன்னங்கரேரென்ற காந்த விழி\" and introduces a simile in \"தேரில் சிக்கிய முல்லைக்கொடி போல,\" creating a vivid emotional image that is not explicitly present in the source. Therefore, the human version goes beyond simply transferring meaning and recreates the *beauty, emotion, imagery, and literary effect* of the poem, making it more suitable for a poetic translation."
    },
      
    explanationBi:
    {
      en: "[[Target A||AI-generated target text]] mirrors the source's structure closely, including the paired negative-then-positive clause [[\"not because... but because\"||A structurally faithful rendering of the source's own contrastive clause]], producing a version that is faithful but reads slightly like translated prose. [[Target B||Human-generated target text]] shifts the register toward spoken intimacy — using contractions and a colloquial aside like [[\"சின்ன, அமைதியான மூலை\"||A warmer, more colloquial image (a small quiet corner) substituted for the more literal 'place to live', chosen for emotional tone over exact correspondence]] instead of the more literal phrasing — trading precision for the emotional warmth the story is reaching for. Literary translation often comes down to this exact choice: stay faithful to the sentence, or stay faithful to the feeling.",
      ta: "[[Target A||AI மொழிபெயர்ப்பு]] மூல உரையின் அமைப்பை நெருக்கமாக ஒத்திருக்கச் செய்கிறது, [[\"அதனால் அல்ல... ஆனால் அதனால்\"||மூல உரையின் எதிர்மறை-பிறகு-நேர்மறை வாக்கியத்தை நெருக்கமாக ஒத்திருக்கச் செய்கிறது]] போன்ற இணைக்கப்பட்ட வாக்கியத்தை உள்ளடக்கியது, இது நம்பகமானதாக இருக்கிறது ஆனால் கொஞ்சம் மொழிபெயர்க்கப்பட்ட நாவல் போல வாசிக்கப்படுகிறது. [[Target B||மனித மொழிபெயர்ப்பு]] பேசும் நெருக்கத்தை நோக்கி பதிவு மாற்றுகிறது — சுருக்கங்கள் மற்றும் பாணி மாற்றங்களைப் பயன்படுத்துகிறது, [[\"சின்ன, அமைதியான மூலை\"||'வாழ ஒரு இடம்' என்ற நேரடி சொற்றொடருக்கு பதிலாக உணர்ச்சி ரீதியாக தேர்ந்தெடுக்கப்பட்ட ஒரு சூழல் (சின்ன அமைதியான மூலை)]] போன்ற பாணி மாற்றங்களைப் பயன்படுத்துகிறது — உணர்ச்சி வெப்பத்திற்கு துல்லியத்தைக் கொடுக்கும் பதிலாக. இலக்கிய மொழிபெயர்ப்பு பெரும்பாலும் இந்தத் தேர்வில் முடிகிறது: வாக்கியத்திற்கு நம்பகமாக இருக்கிறீர்களா, அல்லது உணர்ச்சிக்கு நம்பகமாக இருக்கிறீர்களா?"
    }
  }
};

/* Dungeon selection order shown behind the four mystery gates.
   The mapping is randomised client-side at runtime so the
   player can't infer category from gate position. */
const DUNGEON_KEYS = ["academic", "technical", "legal", "literature"];
