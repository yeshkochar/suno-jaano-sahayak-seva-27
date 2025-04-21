export interface Dictionary {
  [key: string]: string;
}

export const dictionaries: { [key: string]: Dictionary } = {
  en: {
    // Header
    home: "Home",
    benefits: "Benefits",
    eligibility: "Eligibility",
    help: "Help",
    
    // Hero
    heroTitle: "Discover Government Schemes You Deserve",
    heroSubtitle: "Easy access to welfare benefits and government programs in your language",
    heroAction: "Check Eligibility",
    heroVoice: "Talk to Voice Assistant",
    
    // Categories
    categoriesTitle: "Browse by Category",
    categoriesSubtitle: "Explore government schemes and benefits by category",
    
    // Health
    healthTitle: "Health & Medical",
    healthDescription: "Medical insurance, healthcare subsidies, and health programs",
    healthCta: "Explore Health Schemes",
    
    // Education
    educationTitle: "Education & Skills",
    educationDescription: "Scholarships, loans, and training programs for students",
    educationCta: "Explore Education Schemes",
    
    // Housing
    housingTitle: "Housing & Property",
    housingDescription: "Affordable housing, property subsidies, and home loans",
    housingCta: "Explore Housing Schemes",
    
    // Agriculture
    agricultureTitle: "Agriculture & Farming",
    agricultureDescription: "Farm subsidies, equipment support, and crop insurance",
    agricultureCta: "Explore Agriculture Schemes",
    
    // Employment
    employmentTitle: "Employment & Livelihood",
    employmentDescription: "Job training, entrepreneurship support, and employment programs",
    employmentCta: "Explore Employment Schemes",
    
    // Women & Child
    womenTitle: "Women & Child",
    womenDescription: "Support for women, maternity benefits, and child welfare programs",
    womenCta: "Explore Women & Child Schemes",
    
    // Eligible schemes
    pmKisan: "PM-KISAN",
    pmKisanDesc: "Financial assistance for farmers",
    ayushman: "Ayushman Bharat",
    ayushmanDesc: "Health insurance coverage",
    pmAwas: "PM Awas Yojana",
    pmAwasDesc: "Housing assistance",
    
    // Eligibility checker
    eligibilityChecker: "Check Your Eligibility",
    eligibilityDescription: "Find government schemes you may qualify for",
    eligibleSchemes: "You may be eligible for these schemes:",
    checkAgain: "Check Again",
    viewDetails: "View Details",
    
    // Form fields
    age: "Age",
    enterAge: "Enter your age",
    gender: "Gender",
    male: "Male",
    female: "Female",
    other: "Other",
    monthlyIncome: "Monthly Income (₹)",
    enterIncome: "Enter your monthly income",
    state: "State",
    selectState: "Select your state",
    occupation: "Occupation",
    selectOccupation: "Select your occupation",
    farmer: "Farmer",
    laborer: "Daily Wage Laborer",
    smallBusiness: "Small Business Owner",
    governmentEmployee: "Government Employee",
    privateEmployee: "Private Sector Employee",
    homemaker: "Homemaker",
    student: "Student",
    unemployed: "Unemployed",
    retired: "Retired",
    next: "Next",
    back: "Back",
    submit: "Submit",
    
    // Voice assistant
    youSaid: "You said",
    assistantResponse: "Assistant",
    voiceAssistantActivated: "Voice Assistant Activated",
    speakNow: "Speak now to find government schemes",
    errorOccurred: "Error occurred",
    notSupported: "Not supported",
    browserNotSupported: "Your browser doesn't support speech recognition",
    speechNotSupported: "Your browser doesn't support text-to-speech",
    noResponse: "No response",
    noResponseMessage: "There is no response to read",
    
    // Voice Guided Explanation
    listenSchemeDetails: "Listen to scheme details",
    listenOrReadDetails: "Listen to or read detailed information about this scheme",
    playAll: "Play All",
    pause: "Pause",
    stop: "Stop",
    close: "Close",
    
    // Footer
    aboutUs: "About Us",
    contactUs: "Contact Us",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    followUs: "Follow Us",
    copyright: "© 2025 Suno Aur Jaano. All rights reserved.",
  },
  
  hi: {
    // Header
    home: "होम",
    benefits: "लाभ",
    eligibility: "पात्रता",
    help: "सहायता",
    
    // Hero
    heroTitle: "आपके लिए उपलब्ध सरकारी योजनाएँ खोजें",
    heroSubtitle: "अपनी भाषा में कल्याणकारी लाभ और सरकारी कार्यक्रमों तक आसान पहुंच",
    heroAction: "पात्रता जांचें",
    heroVoice: "आवाज सहायक से बात करें",
    
    // Categories
    categoriesTitle: "श्रेणी के अनुसार ब्राउज़ करें",
    categoriesSubtitle: "श्रेणी के अनुसार सरकारी योजनाओं और लाभों का पता लगाएं",
    
    // Health
    healthTitle: "स्वास्थ्य और चिकित्सा",
    healthDescription: "चिकित्सा बीमा, स्वास्थ्य सेवा सब्सिडी और स्वास्थ्य कार्यक्रम",
    healthCta: "स्वास्थ्य योजनाएँ देखें",
    
    // Education
    educationTitle: "शिक्षा और कौशल",
    educationDescription: "छात्रों के लिए छात्रवृत्ति, ऋण और प्रशिक्षण कार्यक्रम",
    educationCta: "शिक्षा योजनाएँ देखें",
    
    // Housing
    housingTitle: "आवास और संपत्ति",
    housingDescription: "किफायती आवास, संपत्ति सब्सिडी और गृह ऋण",
    housingCta: "आवास योजनाएँ देखें",
    
    // Agriculture
    agricultureTitle: "कृषि और खेती",
    agricultureDescription: "कृषि सब्सिडी, उपकरण समर्थन और फसल बीमा",
    agricultureCta: "कृषि योजनाएँ देखें",
    
    // Employment
    employmentTitle: "रोजगार और आजीविका",
    employmentDescription: "नौकरी प्रशिक्षण, उद्यमिता समर्थन और रोजगार कार्यक्रम",
    employmentCta: "रोजगार योजनाएँ देखें",
    
    // Women & Child
    womenTitle: "महिला और बाल",
    womenDescription: "महिलाओं के लिए समर्थन, मातृत्व लाभ, और बाल कल्याण कार्यक्रम",
    womenCta: "महिला और बाल योजनाएँ देखें",
    
    // Eligible schemes
    pmKisan: "पीएम-किसान",
    pmKisanDesc: "किसानों के लिए वित्तीय सहायता",
    ayushman: "आयुष्मान भारत",
    ayushmanDesc: "स्वास्थ्य बीमा कवरेज",
    pmAwas: "पीएम आवास योजना",
    pmAwasDesc: "आवास सहायता",
    
    // Eligibility checker
    eligibilityChecker: "अपनी पात्रता जांचें",
    eligibilityDescription: "जानें आप कौन सी सरकारी योजनाओं के लिए पात्र हो सकते हैं",
    eligibleSchemes: "आप इन योजनाओं के लिए पात्र हो सकते हैं:",
    checkAgain: "फिर से जांचें",
    viewDetails: "विवरण देखें",
    
    // Form fields
    age: "उम्र",
    enterAge: "अपनी उम्र दर्ज करें",
    gender: "लिंग",
    male: "पुरुष",
    female: "महिला",
    other: "अन्य",
    monthlyIncome: "मासिक आय (₹)",
    enterIncome: "अपनी मासिक आय दर्ज करें",
    state: "राज्य",
    selectState: "अपना राज्य चुनें",
    occupation: "व्यवसाय",
    selectOccupation: "अपना व्यवसाय चुनें",
    farmer: "किसान",
    laborer: "दैनिक मजदूर",
    smallBusiness: "छोटे व्यापारी",
    governmentEmployee: "सरकारी कर्मचारी",
    privateEmployee: "निजी क्षेत्र के कर्मचारी",
    homemaker: "गृहिणी",
    student: "छात्र",
    unemployed: "बेरोजगार",
    retired: "सेवानिवृत्त",
    next: "आगे",
    back: "पीछे",
    submit: "जमा करें",
    
    // Voice assistant
    youSaid: "आपने कहा",
    assistantResponse: "सहायक",
    voiceAssistantActivated: "आवाज सहायक सक्रिय किया गया",
    speakNow: "सरकारी योजनाओं के बारे में जानने के लिए अब बोलें",
    errorOccurred: "त्रुटि हुई",
    notSupported: "समर्थित नहीं है",
    browserNotSupported: "आपका ब्राउज़र स्पीच रिकग्निशन का समर्थन नहीं करता है",
    speechNotSupported: "आपका ब्राउज़र टेक्स्ट-टू-स्पीच का समर्थन नहीं करता है",
    noResponse: "कोई जवाब नहीं",
    noResponseMessage: "पढ़ने के लिए कोई जवाब नहीं है",
    
    // Voice Guided Explanation
    listenSchemeDetails: "योजना विवरण सुनें",
    listenOrReadDetails: "इस योजना के बारे में विस्तृत जानकारी सुनें या पढ़ें",
    playAll: "सभी सुनें",
    pause: "रोकें",
    stop: "बंद करें",
    close: "बंद करें",
    
    // Footer
    aboutUs: "हमारे बारे में",
    contactUs: "संपर्क करें",
    privacyPolicy: "गोपनीयता नीति",
    termsOfService: "सेवा की शर्तें",
    followUs: "हमें फॉलो करें",
    copyright: "© 2025 सुनो और जानो. सर्वाधिकार सुरक्षित.",
  },
  
  bn: {
    // Header - Bengali
    home: "হোম",
    benefits: "সুবিধা",
    eligibility: "যোগ্যতা",
    help: "সাহায্য",
    
    // Hero
    heroTitle: "আপনার প্রাপ্য সরকারি প্রকল্পগুলি আবিষ্কার করুন",
    heroSubtitle: "আপনার ভাষায় কল্যাণমূলক সুবিধা এবং সরকারি প্রোগ্রামে সহজ অ্যাক্সেস",
    heroAction: "যোগ্যতা যাচাই করুন",
    heroVoice: "ভয়েস সহকারীর সাথে কথা বলুন",
    
    // Categories
    categoriesTitle: "বিভাগ অনুযায়ী ব্রাউজ করুন",
    categoriesSubtitle: "বিভাগ অনুযায়ী সরকারি প্রকল্প এবং সুবিধাগুলি অন্বেষণ করুন",
    
    // Health
    healthTitle: "স্বাস্থ্য ও চিকিৎসা",
    healthDescription: "মেডিকেল ইনস্যুরেন্স, স্বাস্থ্যসেবা ভর্তুকি এবং স্বাস্থ্য প্রোগ্রাম",
    healthCta: "স্বাস্থ্য প্রকল্পগুলি দেখুন",
    
    // Education
    educationTitle: "শিক্ষা ও দক্ষতা",
    educationDescription: "ছাত্রদের জন্য বৃত্তি, ঋণ এবং প্রশিক্ষণ প্রোগ্রাম",
    educationCta: "শিক্ষা প্রকল্পগুলি দেখুন",
    
    // Housing
    housingTitle: "আবাসন ও সম্পত্তি",
    housingDescription: "সাশ্রয়ী আবাসন, সম্পত্তি ভর্তুকি এবং গৃহ ঋণ",
    housingCta: "আবাসন প্রকল্পগুলি দেখুন",
    
    // Agriculture
    agricultureTitle: "কৃষি ও চাষাবাদ",
    agricultureDescription: "কৃষি ভর্তুকি, সরঞ্জাম সমর্থন এবং ফসল বীমা",
    agricultureCta: "কৃষি প্রকল্পগুলি দেখুন",
    
    // Employment
    employmentTitle: "কর্মসংস্থান ও জীবিকা",
    employmentDescription: "কাজের প্রশিক্ষণ, উদ্যোক্তা সমর্থন এবং কর্মসংস্থান প্রোগ্রাম",
    employmentCta: "কর্মসংস্থান প্রকল্পগুলি দেখুন",
    
    // Women & Child
    womenTitle: "মহিলা ও শিশু",
    womenDescription: "মহিলাদের জন্য সহায়তা, মাতৃত্বকালীন সুবিধা, এবং শিশু কল্যাণ প্রোগ্রাম",
    womenCta: "মহিলা ও শিশু প্রকল্পগুলি দেখুন",
    
    // Eligible schemes
    pmKisan: "পিএম-কিষাণ",
    pmKisanDesc: "কৃষকদের জন্য আর্থিক সহায়তা",
    ayushman: "আয়ুষ্মান ভারত",
    ayushmanDesc: "স্বাস্থ্য বীমা কভারেজ",
    pmAwas: "পিএম আবাস যোজনা",
    pmAwasDesc: "আবাসন সহায়তা",
    
    // Eligibility checker
    eligibilityChecker: "আপনার যোগ্যতা যাচাই করুন",
    eligibilityDescription: "আপনি যে সরকারি প্রকল্পগুলির জন্য যোগ্য হতে পারেন তা খুঁজুন",
    eligibleSchemes: "আপনি এই প্রকল্পগুলির জন্য যোগ্য হতে পারেন:",
    checkAgain: "আবার যাচাই করুন",
    viewDetails: "বিবরণ দেখুন",
    
    // Form fields
    age: "বয়স",
    enterAge: "আপনার বয়স লিখুন",
    gender: "লিঙ্গ",
    male: "পুরুষ",
    female: "মহিলা",
    other: "অন্যান্য",
    monthlyIncome: "মাসিক আয় (₹)",
    enterIncome: "আপনার মাসিক আয় লিখুন",
    state: "রাজ্য",
    selectState: "আপনার রাজ্য নির্বাচন করুন",
    occupation: "পেশা",
    selectOccupation: "আপনার পেশা নির্বাচন করুন",
    farmer: "কৃষক",
    laborer: "দৈনিক মজুর",
    smallBusiness: "ক্ষুদ্র ব্যবসায়ী",
    governmentEmployee: "সরকারি কর্মচারী",
    privateEmployee: "বেসরকারি ক্ষেত্রের কর্মচারী",
    homemaker: "গৃহিণী",
    student: "ছাত্র",
    unemployed: "বেকার",
    retired: "অবসরপ্রাপ্ত",
    next: "পরবর্তী",
    back: "পেছনে",
    submit: "জমা দিন",
    
    // Voice assistant
    youSaid: "আপনি বলেছেন",
    assistantResponse: "সহকারী",
    voiceAssistantActivated: "ভয়েস সহকারী সক্রিয় করা হয়েছে",
    speakNow: "সরকারি প্রকল্প সম্পর্কে জানতে এখন কথা বলুন",
    errorOccurred: "ত্রুটি ঘটেছে",
    notSupported: "সমর্থিত নয়",
    browserNotSupported: "আপনার ব্রাউজার স্পিচ রিকগনিশন সমর্থন করে না",
    speechNotSupported: "আপনার ব্রাউজার টেক্সট-টু-স্পীচ সমর্থন করে না",
    noResponse: "কোনো উত্তর নেই",
    noResponseMessage: "পড়ার জন্য কোনো উত্তর নেই",
    
    // Voice Guided Explanation
    listenSchemeDetails: "প্রকল্পের বিবরণ শুনুন",
    listenOrReadDetails: "এই প্রকল্প সম্পর্কে বিস্তারিত তথ্য শুনুন বা পড়ুন",
    playAll: "সব শুনুন",
    pause: "বিরতি দিন",
    stop: "থামান",
    close: "বন্ধ করুন",
    
    // Footer
    aboutUs: "আমাদের সম্পর্কে",
    contactUs: "যোগাযোগ করুন",
    privacyPolicy: "গোপনীয়তা নীতি",
    termsOfService: "পরিষেবার শর্তাবলী",
    followUs: "আমাদের অনুসরণ করুন",
    copyright: "© 2025 সুনো আর জানো। সর্বস্বত্ব সংরক্ষিত।",
  },

  ml: {
    // Header
    home: "ഹോം",
    benefits: "ആനുകൂല്യങ്ങൾ",
    eligibility: "യോഗ്യത",
    help: "സഹായം",
    
    // Hero
    heroTitle: "നിങ്ങൾക്ക് അർഹതയുള്ള സർക്കാർ പദ്ധതികൾ കണ്ടെത്തുക",
    heroSubtitle: "നിങ്ങളുടെ ഭാഷയിൽ ക്ഷേമ ആനുകൂല്യങ്ങളും സർക്കാർ പദ്ധതികളും എളുപ്പത്തിൽ",
    heroAction: "യോഗ്യത പരിശോധിക്കുക",
    heroVoice: "വോയിസ് അസിസ്റ്റന്റുമായി സംസാരിക്കുക",
    
    // Categories
    categoriesTitle: "വിഭാഗം അനുസരിച്ച് ബ്രൗസ് ചെയ്യുക",
    categoriesSubtitle: "വിഭാഗം അനുസരിച്ച് സർക്കാർ പദ്ധതികളും ആനുകൂല്യങ്ങളും പര്യവേക്ഷണം ചെയ്യുക",
    
    // Health
    healthTitle: "ആരോഗ്യം & വൈദ്യ സഹായം",
    healthDescription: "മെഡിക്കൽ ഇൻഷുറൻസ്, ആരോഗ്യ സംരക്ഷണ സബ്സിഡികൾ, ആരോഗ്യ പരിപാടികൾ",
    healthCta: "ആരോഗ്യ പദ്ധതികൾ പര്യവേക്ഷണം ചെയ്യുക",
    
    // Education
    educationTitle: "വിദ്യാഭ്യാസം & നൈപുണ്യം",
    educationDescription: "വിദ്യാർത്ഥികൾക്കുള്ള സ്കോളർഷിപ്പുകൾ, വായ്പകൾ, പരിശീലന പരിപാടികൾ",
    educationCta: "വിദ്യാഭ്യാസ പദ്ധതികൾ പര്യവേക്ഷണം ചെയ്യുക",
    
    // Housing
    housingTitle: "ഭവനം & വസ്തുവകകൾ",
    housingDescription: "താങ്ങാനാവുന്ന ഭവനം, പ്രോപ്പർട്ടി സബ്സിഡികൾ, ഭവന വായ്പകൾ",
    housingCta: "ഭവന പദ്ധതികൾ പര്യവേക്ഷണം ചെയ്യുക",
    
    // Agriculture
    agricultureTitle: "കൃഷി & കൃഷിസ്ഥലം",
    agricultureDescription: "കൃഷി സബ്സിഡികൾ, ഉപകരണ സഹായം, വിള ഇൻഷുറൻസ്",
    agricultureCta: "കാർഷിക പദ്ധതികൾ പര്യവേക്ഷണം ചെയ്യുക",
    
    // Employment
    employmentTitle: "തൊഴിൽ & ഉപജീവനം",
    employmentDescription: "ജോലി പരിശീലനം, സംരംഭകത്വ പിന്തുണ, തൊഴിൽ പരിപാടികൾ",
    employmentCta: "തൊഴിൽ പദ്ധതികൾ പര്യവേക്ഷണം ചെയ്യുക",
    
    // Women & Child
    womenTitle: "സ്ത്രീകളും കുട്ടികളും",
    womenDescription: "സ്ത്രീകൾക്കുള്ള പിന്തുണ, മെറ്റേണിറ്റി ആനുകൂല്യങ്ങൾ, ശിശുക്ഷേമ പരിപാടികൾ",
    womenCta: "സ്ത്രീകളും കുട്ടികളും പദ്ധതികൾ പര്യവേക്ഷണം ചെയ്യുക",
    
    // Eligible schemes
    pmKisan: "പിഎം-കിസാൻ",
    pmKisanDesc: "കർഷകർക്കുള്ള സാമ്പത്തിക സഹായം",
    ayushman: "ആയുഷ്മാൻ ഭാരത്",
    ayushmanDesc: "ആരോഗ്യ ഇൻഷുറൻസ് പരിരക്ഷ",
    pmAwas: "പിഎം ആവാസ് യോജന",
    pmAwasDesc: "ഭവന സഹായം",
    
    // Eligibility checker
    eligibilityChecker: "നിങ്ങളുടെ യോഗ്യത പരിശോധിക്കുക",
    eligibilityDescription: "നിങ്ങൾക്ക് യോഗ്യത നേടാൻ കഴിയുന്ന സർക്കാർ പദ്ധതികൾ കണ്ടെത്തുക",
    eligibleSchemes: "നിങ്ങൾക്ക് ഈ പദ്ധതികൾക്ക് യോഗ്യതയുണ്ടായേക്കാം:",
    checkAgain: "വീണ്ടും പരിശോധിക്കുക",
    viewDetails: "വിശദാംശങ്ങൾ കാണുക",
    
    // Form fields
    age: "വയസ്സ്",
    enterAge: "നിങ്ങളുടെ വയസ്സ് നൽകുക",
    gender: "ലിംഗം",
    male: "പുരുഷൻ",
    female: "സ്ത്രീ",
    other: "മറ്റുള്ളവ",
    monthlyIncome: "പ്രതിമാസ വരുമാനം (₹)",
    enterIncome: "നിങ്ങളുടെ പ്രതിമാസ വരുമാനം നൽകുക",
    state: "സംസ്ഥാനം",
    selectState: "നിങ്ങളുടെ സംസ്ഥാനം തിരഞ്ഞെടുക്കുക",
    occupation: "തൊഴിൽ",
    selectOccupation: "നിങ്ങളുടെ തൊഴിൽ തിരഞ്ഞെടുക്കുക",
    farmer: "കർഷകൻ",
    laborer: "ദിവസക്കൂലിക്കാരൻ",
    smallBusiness: "ചെറുകിട ബിസിനസ്സ് ഉടമ",
    governmentEmployee: "സർക്കാർ ജീവനക്കാരൻ",
    privateEmployee: "സ്വകാര്യ മേഖലയിലെ ജീവനക്കാരൻ",
    homemaker: "വീട്ടമ്മ",
    student: "വിദ്യാർത്ഥി",
    unemployed: "തൊഴിലില്ലാത്ത",
    retired: "വിരമിച്ച",
    next: "അടുത്തത്",
    back: "പിന്നിലേക്ക്",
    submit: "സമർപ്പിക്കുക",
    
    // Voice assistant
    youSaid: "നിങ്ങൾ പറഞ്ഞു",
    assistantResponse: "അസിസ്റ്റന്റ്",
    voiceAssistantActivated: "വോയിസ് അസിസ്റ്റന്റ് സജീവമാക്കി",
    speakNow: "സർക്കാർ പദ്ധതികളെക്കുറിച്ച് അറിയാൻ ഇപ്പോൾ സംസാരിക്കുക",
    errorOccurred: "Error occurred",
    notSupported: "പിന്തുണക്കുന്നില്ല",
    browserNotSupported: "നിങ്ങളുടെ ബ്രൗസർ speech തിരിച്ചറിയലിനെ പിന്തുണക്കുന്നില്ല",
    speechNotSupported: "നിങ്ങളുടെ ബ്രൗസർ ടെക്സ്റ്റ്-ടു-സ്പീച്ച് പിന്തുണക്കുന്നില്ല",
    noResponse: "പ്രതികരണമില്ല",
    noResponseMessage: "വായിക്കാൻ പ്രതികരണമില്ല",
    
    // Voice Guided Explanation
    listenSchemeDetails: "പദ്ധതി വിവരങ്ങൾ കേൾക്കുക",
    listenOrReadDetails: "ഈ പദ്ധതിയെക്കുറിച്ച് വിശദമായ വിവരങ്ങൾ കേൾക്കുക അല്ലെങ്കിൽ വായിക്കുക",
    playAll: "എല്ലാം കേൾക്കുക",
    pause: "താൽക്കാലികമായി നിർത്തുക",
    stop: "നിർത്തുക",
    close: "അടയ്ക്കുക",
    
    // Footer
    aboutUs: "ഞങ്ങളെക്കുറിച്ച്",
    contactUs: "ഞങ്ങളെ ബന്ധപ്പെടുക",
    privacyPolicy: "സ്വകാര്യതാ നയം",
    termsOfService: "സേവന നിബന്ധനകൾ",
    followUs: "ഞങ്ങളെ പിന്തുടരുക",
    copyright: "© 2025 Suno Aur Jaano. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
  },

  ta: {
    // Header
    home: "முகப்பு",
    benefits: "நன்மைகள்",
    eligibility: "தகுதி",
    help: "உதவி",
    
    // Hero
    heroTitle: "உங்களுக்கு தகுதியான அரசு திட்டங்களைக் கண்டறியுங்கள்",
    heroSubtitle: "உங்கள் மொழியில் நல உதவிகள் மற்றும் அரசு திட்டங்களை எளிதாக அணுகுங்கள்",
    heroAction: "தகுதியைச் சரிபார்க்கவும்",
    heroVoice: "குரல் உதவியாளருடன் பேசுங்கள்",
    
    // Categories
    categoriesTitle: "வகை மூலம் உலாவுக",
    categoriesSubtitle: "வகை மூலம் அரசு திட்டங்கள் மற்றும் நலன்களை ஆராயுங்கள்",
    
    // Health
    healthTitle: "சுகாதாரம் & மருத்துவம்",
    healthDescription: "மருத்துவ காப்பீடு, சுகாதார மானியங்கள் மற்றும் சுகாதார திட்டங்கள்",
    healthCta: "சுகாதார திட்டங்களை ஆராயுங்கள்",
    
    // Education
    educationTitle: "கல்வி & திறன்கள்",
    educationDescription: "மாணவர்களுக்கான உதவித்தொகை, கடன்கள் மற்றும் பயிற்சி திட்டங்கள்",
    educationCta: "கல்வி திட்டங்களை ஆராயுங்கள்",
    
    // Housing
    housingTitle: "வீட்டுவசதி & சொத்து",
    housingDescription: "குறைந்த விலை வீடுகள், சொத்து மானியங்கள் மற்றும் வீட்டு கடன்கள்",
    housingCta: "வீட்டுவசதி திட்டங்களை ஆராயுங்கள்",
    
    // Agriculture
    agricultureTitle: "விவசாயம் & பண்ணை",
    agricultureDescription: "விவசாய மானியங்கள், உபகரண ஆதரவு மற்றும் பயிர் காப்பீடு",
    agricultureCta: "விவசாய திட்டங்களை ஆராயுங்கள்",
    
    // Employment
    employmentTitle: "வேலைவாய்ப்பு & வாழ்வாதாரம்",
    employmentDescription: "வேலை பயிற்சி, தொழில் முனைவோர் ஆதரவு மற்றும் வேலைவாய்ப்பு திட்டங்கள்",
    employmentCta: "வேலைவாய்ப்பு திட்டங்களை ஆராயுங்கள்",
    
    // Women & Child
    womenTitle: "பெண்கள் & குழந்தைகள்",
    womenDescription: "பெண்களுக்கான ஆதரவு, மகப்பேறு நன்மைகள் மற்றும் குழந்தை நல திட்டங்கள்",
    womenCta: "பெண்கள் & குழந்தைகள் திட்டங்களை ஆராயுங்கள்",
    
    // Eligible schemes
    pmKisan: "PM-KISAN",
    pmKisanDesc: "விவசாயிகளுக்கான நிதி உதவி",
    ayushman: "ஆயுஷ்மான் பாரத்",
    ayushmanDesc: "சுகாதார காப்பீட்டு பாதுகாப்பு",
    pmAwas: "PM Awas Yojana",
    pmAwasDesc: "வீட்டுவசதி உதவி",
    
    // Eligibility checker
    eligibilityChecker: "உங்கள் தகுதியை சரிபார்க்கவும்",
    eligibilityDescription: "நீங்கள் தகுதி பெறக்கூடிய அரசாங்க திட்டங்களைக் கண்டறியவும்",
    eligibleSchemes: "இந்த திட்டங்களுக்கு நீங்கள் தகுதி பெறலாம்:",
    checkAgain: "மீண்டும் சரிபார்க்கவும்",
    viewDetails: "விவரங்களைக் காண்க",
    
    // Form fields
    age: "வயது",
    enterAge: "உங்கள் வயதை உள்ளிடவும்",
    gender: "பாலினம்",
    male: "ஆண்",
    female: "பெண்",
    other: "மற்றவை",
    monthlyIncome: "மாத வருமானம் (₹)",
    enterIncome: "உங்கள் மாத வருமானத்தை உள்ளிடவும்",
    state: "மாநிலம்",
    selectState: "உங்கள் மாநிலத்தைத் தேர்ந்தெடுக்கவும்",
    occupation: "தொழில்",
    selectOccupation: "உங்கள் தொழிலைத் தேர்ந்தெடுக்கவும்",
    farmer: "விவசாயி",
    laborer: "தினசரி கூலி தொழிலாளி",
    smallBusiness: "சிறு வணிக உரிமையாளர்",
    governmentEmployee: "அரசு ஊழியர்",
    privateEmployee: "தனியார் துறை ஊழியர்",
    homemaker: "வீட்டு தயாரிப்பாளர்",
    student: "மாணவர்",
    unemployed: "வேலையில்லாதவர்",
    retired: "ஓய்வு பெற்றவர்",
    next: "அடுத்து",
    back: "பின்",
    submit: "சமர்ப்பிக்கவும்",
    
    // Voice assistant
    youSaid: "நீங்கள் சொன்னது",
    assistantResponse: "உதவியாளர்",
    voiceAssistantActivated: "குரல் உதவியாளர் செயல்படுத்தப்பட்டது",
    speakNow: "அரசாங்க திட்டங்களைக் கண்டுபிடிக்க இப்போது பேசுங்கள்",
    errorOccurred: "பிழை ஏற்பட்டது",
    notSupported: "ஆதரிக்கப்படவில்லை",
    browserNotSupported: "உங்கள் உலாவி பேச்சு அங்கீகாரத்தை ஆதரிக்கவில்லை",
    speechNotSupported: "உங்கள் உலாவி உரை-க்கு-பேச்சை ஆதரிக்கவில்லை",
    noResponse: "பதிலில்லை",
    noResponseMessage: "படிக்க எந்த பதிலும் இல்லை",
    
    // Voice Guided Explanation
    listenSchemeDetails: "திட்ட விவரங்களைக் கேளுங்கள்",
    listenOrReadDetails: "இந்த திட்டத்தைப் பற்றிய விரிவான தகவல்களைக் கேளுங்கள் அல்லது படியுங்கள்",
    playAll: "எல்லாம் இயக்கு",
    pause: "இடைநிறுத்து",
    stop: "நிறுத்து",
    close: "மூடு",
    
    // Footer
    aboutUs: "எங்களை பற்றி",
    contactUs: "எங்களை தொடர்பு கொள்ள",
    privacyPolicy: "தனியுரிமை கொள்கை",
    termsOfService: "சேவை விதிமுறைகள்",
    followUs: "எங்களை பின்தொடருங்கள்",
    copyright: "© 2025 Suno Aur Jaano. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  },

  pa: {
    // Header
    home: "ਹੋਮ",
    benefits: "ਲਾਭ",
    eligibility: "ਯੋਗਤਾ",
    help: "ਮਦਦ",
    
    // Hero
    heroTitle: "ਤੁਹਾਡੇ ਲਈ ਯੋਗ ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ ਲੱਭੋ",
    heroSubtitle: "ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਭਲਾਈ ਲਾਭਾਂ ਅਤੇ ਸਰਕਾਰੀ ਪ੍ਰੋਗਰਾਮਾਂ ਤੱਕ ਆਸਾਨ ਪਹੁੰਚ",
    heroAction: "ਯੋਗਤਾ ਦੀ ਜਾਂਚ ਕਰੋ",
    heroVoice: "ਵੌਇਸ ਅਸਿਸਟੈਂਟ ਨਾਲ ਗੱਲ ਕਰੋ",
    
    // Categories
    categoriesTitle: "ਸ਼੍ਰੇਣੀ ਅਨੁਸਾਰ ਬ੍ਰਾਊਜ਼ ਕਰੋ",
    categoriesSubtitle: "ਸ਼੍ਰੇਣੀ ਅਨੁਸਾਰ ਸਰਕਾਰੀ ਸਕੀਮਾਂ ਅਤੇ ਲਾਭਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ",
    
    // Health
    healthTitle: "ਸਿਹਤ ਅਤੇ ਡਾਕਟਰੀ",
    healthDescription: "ਮੈਡੀਕਲ ਬੀਮਾ, ਸਿਹਤ ਸੰਭਾਲ ਸਬਸਿਡੀਆਂ, ਅਤੇ ਸਿਹਤ ਪ੍ਰੋਗਰਾਮ",
    healthCta: "ਸਿਹਤ ਸਕੀਮਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ",
    
    // Education
    educationTitle: "ਸਿੱਖਿਆ ਅਤੇ ਹੁਨਰ",
    educationDescription: "ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਵਜ਼ੀਫ਼ੇ, ਕਰਜ਼ੇ, ਅਤੇ ਸਿਖਲਾਈ ਪ੍ਰੋਗਰਾਮ",
    educationCta: "ਸਿੱਖਿਆ ਸਕੀਮਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ",
    
    // Housing
    housingTitle: "ਰਿਹਾਇਸ਼ ਅਤੇ ਜਾਇਦਾਦ",
    housingDescription: "ਘੱਟ ਲਾਗਤ ਵਾਲੀ ਰਿਹਾਇਸ਼, ਜਾਇਦਾਦ ਸਬਸਿਡੀਆਂ, ਅਤੇ ਘਰ ਕਰਜ਼ੇ",
    housingCta: "ਰਿਹਾਇਸ਼ ਸਕੀਮਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ",
    
    // Agriculture
    agricultureTitle: "ਖੇਤੀਬਾੜੀ ਅਤੇ ਖੇਤੀ",
    agricultureDescription: "ਖੇਤੀਬਾੜੀ ਸਬਸਿਡੀਆਂ, ਸਾਜ਼ੋ-ਸਾਮਾਨ ਸਹਾਇਤਾ, ਅਤੇ ਫਸਲ ਬੀਮਾ",
    agricultureCta: "ਖੇਤੀਬਾੜੀ ਸਕੀਮਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ",
    
    // Employment
    employmentTitle: "ਰੁਜ਼ਗਾਰ ਅਤੇ ਰੋਜ਼ੀ-ਰੋਟੀ",
    employmentDescription: "ਨੌਕਰੀ ਦੀ ਸਿਖਲਾਈ, ਉੱਦਮਤਾ ਸਹਾਇਤਾ, ਅਤੇ ਰੁਜ਼ਗਾਰ ਪ੍ਰੋਗਰਾਮ",
    employmentCta: "ਰੁਜ਼ਗਾਰ ਸਕੀਮਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ",
    
    // Women & Child
    womenTitle: "ਔਰਤਾਂ ਅਤੇ ਬੱਚੇ",
    womenDescription: "ਔਰਤਾਂ ਲਈ ਸਹਾਇਤਾ, ਜਣੇਪਾ ਲਾਭ, ਅਤੇ ਬਾਲ ਭਲਾਈ ਪ੍ਰੋਗਰਾਮ",
    womenCta: "ਔਰਤਾਂ ਅਤੇ ਬੱਚਿਆਂ ਦੀਆਂ ਸਕੀਮਾਂ ਦੀ ਪੜਚੋਲ ਕਰੋ",
    
    // Eligible schemes
    pmKisan: "ਪੀਐਮ-ਕਿਸਾਨ",
    pmKisanDesc: "ਕਿਸਾਨਾਂ ਲਈ ਵਿੱਤੀ ਸਹਾਇਤਾ",
    ayushman: "ਆਯੂਸ਼ਮਾਨ ਭਾਰਤ",
    ayushmanDesc: "ਸਿਹਤ ਬੀਮਾ ਕਵਰੇਜ",
    pmAwas: "ਪੀਐਮ ਆਵਾਸ ਯੋਜਨਾ",
    pmAwasDesc: "ਰਿਹਾਇਸ਼ ਸਹਾਇਤਾ",
    
    // Eligibility checker
    eligibilityChecker: "ਆਪਣੀ ਯੋਗਤਾ ਦੀ ਜਾਂਚ ਕਰੋ",
    eligibilityDescription: "ਸਰਕਾਰੀ ਸਕੀਮਾਂ ਲੱਭੋ ਜਿਨ੍ਹਾਂ ਲਈ ਤੁਸੀਂ ਯੋਗ ਹੋ ਸਕਦੇ ਹੋ",
    eligibleSchemes: "ਤੁਸੀਂ ਇਹਨਾਂ ਸਕੀਮਾਂ ਲਈ ਯੋਗ ਹੋ ਸਕਦੇ ਹੋ:",
    checkAgain: "ਦੁਬਾਰਾ ਜਾਂਚ ਕਰੋ",
    viewDetails: "ਵੇਰਵੇ ਵੇਖੋ",
    
    // Form fields
    age: "ਉਮਰ",
    enterAge: "ਆਪਣੀ ਉਮਰ ਦਰਜ ਕਰੋ",
    gender: "ਲਿੰਗ",
    male: "ਮਰਦ",
    female: "ਔਰਤ",
    other: "ਹੋਰ",
    monthlyIncome: "ਮਹੀਨਾਵਾਰ ਆਮਦਨ (₹)",
    enterIncome: "ਆਪਣੀ ਮਹੀਨਾਵਾਰ ਆਮਦਨ ਦਰਜ ਕਰੋ",
    state: "ਰਾਜ",
    selectState: "ਆਪਣਾ ਰਾਜ ਚੁਣੋ",
    occupation: "ਕਿੱਤਾ",
    selectOccupation: "ਆਪਣਾ ਕਿੱਤਾ ਚੁਣੋ",
    farmer: "ਕਿਸਾਨ",
    laborer: "ਦਿਹਾੜੀਦਾਰ ਮਜ਼ਦੂਰ",
    smallBusiness: "ਛੋਟਾ ਕਾਰੋਬਾਰ ਮਾਲਕ",
    governmentEmployee: "ਸਰਕਾਰੀ ਕਰਮਚਾਰੀ",
    privateEmployee: "ਨਿੱਜੀ ਖੇਤਰ ਦਾ ਕਰਮਚਾਰੀ",
    homemaker: "ਘਰੇਲੂ ਔਰਤ",
    student: "ਵਿਦਿਆਰਥੀ",
    unemployed: "ਬੇਰੁਜ਼ਗਾਰ",
    retired: "ਸੇਵਾਮੁਕਤ",
    next: "ਅੱਗੇ",
    back: "ਪਿੱਛੇ",
    submit: "ਜਮ੍ਹਾਂ ਕਰੋ",
    
    // Voice assistant
    youSaid: "ਤੁਸੀਂ ਕਿਹਾ",
    assistantResponse: "ਸਹਾਇਕ",
    voiceAssistantActivated: "ਵੌਇਸ ਅਸਿਸਟੈਂਟ ਐਕਟੀਵੇਟ ਕੀਤਾ ਗਿਆ",
    speakNow: "ਸਰਕਾਰੀ ਸਕੀਮਾਂ ਲੱਭਣ ਲਈ ਹੁਣ ਬੋਲੋ",
    errorOccurred: "ਗਲਤੀ ਆਈ",
    notSupported: "ਸਮਰਥਿਤ ਨਹੀਂ ਹੈ",
    browserNotSupported: "ਤੁਹਾਡਾ ਬ੍ਰਾਊਜ਼ਰ ਸਪੀਚ ਰਿਕੋਗਨੀਸ਼ਨ ਨੂੰ ਸਪੋਰਟ ਨਹੀਂ ਕਰਦਾ",
    speechNotSupported: "ਤੁਹਾਡਾ ਬ੍ਰਾਊਜ਼ਰ ਟੈਕਸਟ-ਟੂ-ਸਪੀਚ ਨੂੰ ਸਪੋਰਟ ਨਹੀਂ ਕਰਦਾ",
    noResponse: "ਕੋਈ ਜਵਾਬ ਨਹੀਂ",
    noResponseMessage: "ਪੜ੍ਹਨ ਲਈ ਕੋਈ ਜਵਾਬ ਨਹੀਂ ਹੈ",
    
    // Voice Guided Explanation
    listenSchemeDetails: "ਸਕੀਮ ਦੇ ਵੇਰਵੇ ਸੁਣੋ",
    listenOrReadDetails: "ਇਸ ਸਕੀਮ ਬਾਰੇ ਵਿਸਤ੍ਰਿਤ ਜਾਣਕਾਰੀ ਸੁਣੋ ਜਾਂ ਪੜ੍ਹੋ",
    playAll: "ਸਭ ਚਲਾਓ",
    pause: "ਰੋਕੋ",
    stop: "ਬੰਦ ਕਰੋ",
    close: "ਬੰਦ ਕਰੋ",
    
    // Footer
    aboutUs: "ਸਾਡੇ ਬਾਰੇ",
    contactUs: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    privacyPolicy: "ਗੁਪਤ ਨੀਤੀ",
    termsOfService: "ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ",
    followUs: "ਸਾਨੂੰ ਫਾਲੋ ਕਰੋ",
    copyright: "© 2025 ਸੁਣੋ ਔਰ ਜਾਨੋ। ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।",
  },
};
