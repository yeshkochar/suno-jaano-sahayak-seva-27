
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
    
    // Footer
    aboutUs: "আমাদের সম্পর্কে",
    contactUs: "যোগাযোগ করুন",
    privacyPolicy: "গোপনীয়তা নীতি",
    termsOfService: "পরিষেবার শর্তাবলী",
    followUs: "আমাদের অনুসরণ করুন",
    copyright: "© 2025 সুনো আর জানো। সর্বস্বত্ব সংরক্ষিত।",
  }
};
