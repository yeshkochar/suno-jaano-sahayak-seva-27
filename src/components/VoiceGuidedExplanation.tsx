
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Volume2, Pause, Play, List } from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";
import { useToast } from "@/hooks/use-toast";

interface VoiceGuidedExplanationProps {
  dictionary: Dictionary;
  currentLanguage: string;
  schemeId?: string;
}

// These are more detailed explanations that will be narrated
const schemeExplanations: Record<string, Record<string, { title: string; content: string[] }>> = {
  "ayushman-bharat": {
    en: {
      title: "Ayushman Bharat Explained",
      content: [
        "Ayushman Bharat, also known as Pradhan Mantri Jan Arogya Yojana or PM-JAY, is India's flagship health insurance scheme.",
        "It provides a health cover of 5 lakh rupees per family per year for secondary and tertiary care hospitalization.",
        "The scheme targets around 50 crore beneficiaries from economically vulnerable families.",
        "To check eligibility, your name should be in the SECC database or you should meet specific socio-economic criteria.",
        "The scheme covers pre and post hospitalization expenses, including medicines, diagnostics, and follow-up care.",
        "You can avail cashless treatment at any empanelled public or private hospital across India.",
        "To apply, visit your nearest Common Service Centre or Ayushman Bharat Kendra with your Aadhaar card and a mobile phone."
      ]
    },
    hi: {
      title: "आयुष्मान भारत की व्याख्या",
      content: [
        "आयुष्मान भारत, जिसे प्रधानमंत्री जन आरोग्य योजना या पीएम-जेएवाई के नाम से भी जाना जाता है, भारत की प्रमुख स्वास्थ्य बीमा योजना है।",
        "यह प्रति परिवार प्रति वर्ष द्वितीयक और तृतीयक देखभाल अस्पताल में भर्ती के लिए 5 लाख रुपये का स्वास्थ्य कवर प्रदान करता है।",
        "इस योजना का लक्ष्य आर्थिक रूप से कमजोर परिवारों के लगभग 50 करोड़ लाभार्थी हैं।",
        "पात्रता की जांच करने के लिए, आपका नाम SECC डेटाबेस में होना चाहिए या आपको विशिष्ट सामाजिक-आर्थिक मानदंडों को पूरा करना चाहिए।",
        "इस योजना में दवाओं, नैदानिक और फॉलो-अप देखभाल सहित पूर्व और अस्पताल में भर्ती होने के बाद के खर्च शामिल हैं।",
        "आप पूरे भारत में किसी भी सूचीबद्ध सार्वजनिक या निजी अस्पताल में कैशलेस उपचार प्राप्त कर सकते हैं।",
        "आवेदन करने के लिए, अपने आधार कार्ड और मोबाइल फोन के साथ अपने निकटतम कॉमन सर्विस सेंटर या आयुष्मान भारत केंद्र पर जाएं।"
      ]
    },
    bn: {
      title: "আয়ুষ্মান ভারত ব্যাখ্যা",
      content: [
        "আয়ুষ্মান ভারত, যা প্রধানমন্ত্রী জন আরোগ্য যোজনা বা পিএম-জেএওয়াই নামেও পরিচিত, ভারতের ফ্ল্যাগশিপ স্বাস্থ্য বীমা প্রকল্প।",
        "এটি সেকেন্ডারি এবং টার্টিয়ারি কেয়ার হাসপাতালে ভর্তির জন্য প্রতি পরিবারকে প্রতি বছর ৫ লক্ষ টাকা স্বাস্থ্য কভার প্রদান করে।",
        "এই প্রকল্পের লক্ষ্য অর্থনৈতিকভাবে দুর্বল পরিবারের প্রায় ৫০ কোটি উপকারভোগী।",
        "যোগ্যতা যাচাই করতে, আপনার নাম SECC ডাটাবেসে থাকতে হবে বা আপনাকে নির্দিষ্ট আর্থ-সামাজিক মানদণ্ড পূরণ করতে হবে।",
        "এই প্রকল্পে ওষুধ, ডায়াগনস্টিক, এবং ফলো-আপ কেয়ার সহ হাসপাতালে ভর্তির আগে ও পরে খরচ কভার করে।",
        "আপনি ভারতজুড়ে যেকোনো তালিকাভুক্ত সরকারি বা বেসরকারি হাসপাতালে ক্যাশলেস চিকিৎসা পেতে পারেন।",
        "আবেদন করতে, আপনার আধার কার্ড এবং মোবাইল ফোন নিয়ে নিকটস্থ কমন সার্ভিস সেন্টার বা আয়ুষ্মান ভারত কেন্দ্রে যান।"
      ]
    }
  },
  "pm-kisan": {
    en: {
      title: "PM-KISAN Explained",
      content: [
        "Pradhan Mantri Kisan Samman Nidhi, or PM-KISAN, is a central government scheme that provides income support to farmers.",
        "Under this scheme, all landholding farmers receive up to 6,000 rupees per year as minimum income support.",
        "This amount is paid in three equal installments of 2,000 rupees every four months directly into the farmers' bank accounts.",
        "To be eligible, you must be a farmer with cultivable land registered in your name. However, certain categories like government employees and income tax payers are excluded.",
        "To apply, you need to approach your local agriculture officer or Common Service Centre with your land records, Aadhaar card, and bank account details.",
        "The scheme aims to supplement the financial needs of farmers for purchasing various inputs for ensuring proper crop health and appropriate yields.",
        "After registration, you can track your payment status on the PM-KISAN portal using your Aadhaar number or registration number."
      ]
    },
    hi: {
      title: "पीएम-किसान की व्याख्या",
      content: [
        "प्रधानमंत्री किसान सम्मान निधि, या पीएम-किसान, एक केंद्रीय सरकारी योजना है जो किसानों को आय सहायता प्रदान करती है।",
        "इस योजना के तहत, सभी भूमिधारक किसानों को न्यूनतम आय सहायता के रूप में प्रति वर्ष 6,000 रुपये तक प्राप्त होते हैं।",
        "यह राशि हर चार महीने में 2,000 रुपये की तीन बराबर किस्तों में सीधे किसानों के बैंक खातों में भुगतान की जाती है।",
        "पात्र होने के लिए, आपको अपने नाम पर पंजीकृत खेती योग्य भूमि वाला किसान होना चाहिए। हालांकि, सरकारी कर्मचारियों और आयकर दाताओं जैसी कुछ श्रेणियों को बाहर रखा गया है।",
        "आवेदन करने के लिए, आपको अपने भूमि रिकॉर्ड, आधार कार्ड और बैंक खाता विवरण के साथ अपने स्थानीय कृषि अधिकारी या कॉमन सर्विस सेंटर से संपर्क करना होगा।",
        "इस योजना का उद्देश्य उचित फसल स्वास्थ्य और उपयुक्त उपज सुनिश्चित करने के लिए विभिन्न इनपुट खरीदने के लिए किसानों की वित्तीय जरूरतों को पूरक करना है।",
        "पंजीकरण के बाद, आप अपने आधार नंबर या पंजीकरण संख्या का उपयोग करके पीएम-किसान पोर्टल पर अपनी भुगतान स्थिति को ट्रैक कर सकते हैं।"
      ]
    },
    bn: {
      title: "পিএম-কিষাণ ব্যাখ্যা",
      content: [
        "প্রধানমন্ত্রী কিষাণ সম্মান নিধি, বা পিএম-কিষাণ, একটি কেন্দ্রীয় সরকারি প্রকল্প যা কৃষকদের আয় সহায়তা প্রদান করে।",
        "এই প্রকল্পের অধীনে, সমস্ত জমির মালিক কৃষকরা ন্যূনতম আয় সহায়তা হিসাবে বছরে ৬,০০০ টাকা পর্যন্ত পান।",
        "এই পরিমাণ টাকা প্রতি চার মাসে ২,০০০ টাকার তিনটি সমান কিস্তিতে সরাসরি কৃষকদের ব্যাংক অ্যাকাউন্টে প্রদান করা হয়।",
        "যোগ্য হতে, আপনাকে আপনার নামে নিবন্ধিত চাষযোগ্য জমির মালিক কৃষক হতে হবে। তবে, সরকারি কর্মচারী এবং আয়কর দাতাদের মতো কিছু বিভাগকে বাদ দেওয়া হয়েছে।",
        "আবেদন করতে, আপনাকে আপনার জমির রেকর্ড, আধার কার্ড, এবং ব্যাংক অ্যাকাউন্টের বিবরণ সহ আপনার স্থানীয় কৃষি অফিসার বা কমন সার্ভিস সেন্টারে যেতে হবে।",
        "এই প্রকল্পের লক্ষ্য উপযুক্ত ফসলের স্বাস্থ্য এবং উপযুক্ত ফলন নিশ্চিত করার জন্য বিভিন্ন উপাদান কেনার জন্য কৃষকদের আর্থিক প্রয়োজন পূরণ করা।",
        "নিবন্ধনের পরে, আপনি আপনার আধার নম্বর বা নিবন্ধন নম্বর ব্যবহার করে পিএম-কিষাণ পোর্টালে আপনার পেমেন্ট স্ট্যাটাস ট্র্যাক করতে পারেন।"
      ]
    }
  },
  "pm-awas": {
    en: {
      title: "PM Awas Yojana Explained",
      content: [
        "Pradhan Mantri Awas Yojana, or PMAY, is a housing scheme launched by the Indian government to provide affordable housing to the urban and rural poor.",
        "The scheme is divided into two components: Pradhan Mantri Awas Yojana (Urban) and Pradhan Mantri Awas Yojana (Gramin) for urban and rural areas respectively.",
        "Under PMAY-Urban, beneficiaries can receive a subsidy of up to 2.67 lakh rupees based on their income category.",
        "Under PMAY-Gramin, eligible beneficiaries receive a direct financial assistance of 1.2 lakh rupees in plain areas and 1.3 lakh rupees in hilly or difficult areas.",
        "To be eligible, you must not own a pucca house (a house made of durable materials) in your or your family member's name, and meet specific income criteria.",
        "For urban areas, the scheme offers four options: in-situ slum redevelopment, credit-linked subsidy, affordable housing in partnership, and subsidy for individual house construction.",
        "To apply, you need to approach your local municipal office or gram panchayat with your identity proof, income certificate, and proof of non-ownership of a pucca house."
      ]
    },
    hi: {
      title: "पीएम आवास योजना की व्याख्या",
      content: [
        "प्रधानमंत्री आवास योजना, या पीएमएवाई, भारत सरकार द्वारा शहरी और ग्रामीण गरीबों को किफायती आवास प्रदान करने के लिए शुरू की गई एक आवास योजना है।",
        "इस योजना को दो घटकों में विभाजित किया गया है: प्रधानमंत्री आवास योजना (शहरी) और प्रधानमंत्री आवास योजना (ग्रामीण) क्रमशः शहरी और ग्रामीण क्षेत्रों के लिए।",
        "पीएमएवाई-शहरी के तहत, लाभार्थियों को उनकी आय श्रेणी के आधार पर 2.67 लाख रुपये तक की सब्सिडी मिल सकती है।",
        "पीएमएवाई-ग्रामीण के तहत, पात्र लाभार्थियों को मैदानी क्षेत्रों में 1.2 लाख रुपये और पहाड़ी या कठिन क्षेत्रों में 1.3 लाख रुपये की प्रत्यक्ष वित्तीय सहायता मिलती है।",
        "पात्र होने के लिए, आपके पास अपने या अपने परिवार के सदस्य के नाम पर पक्का घर (टिकाऊ सामग्री से बना घर) नहीं होना चाहिए, और विशिष्ट आय मानदंडों को पूरा करना चाहिए।",
        "शहरी क्षेत्रों के लिए, योजना चार विकल्प प्रदान करती है: इन-सीटू स्लम पुनर्विकास, क्रेडिट-लिंक्ड सब्सिडी, साझेदारी में किफायती आवास, और व्यक्तिगत घर निर्माण के लिए सब्सिडी।",
        "आवेदन करने के लिए, आपको अपने पहचान प्रमाण, आय प्रमाणपत्र और पक्के घर के गैर-स्वामित्व के प्रमाण के साथ अपने स्थानीय नगरपालिका कार्यालय या ग्राम पंचायत से संपर्क करना होगा।"
      ]
    },
    bn: {
      title: "পিএম আবাস যোজনা ব্যাখ্যা",
      content: [
        "প্রধানমন্ত্রী আবাস যোজনা, বা পিএমএওয়াই, শহর ও গ্রামীণ দরিদ্রদের সাশ্রয়ী মূল্যের আবাসন প্রদানের জন্য ভারত সরকার দ্বারা চালু করা একটি আবাসন প্রকল্প।",
        "এই প্রকল্পটি দুটি উপাদানে বিভক্ত: প্রধানমন্ত্রী আবাস যোজনা (আরবান) এবং প্রধানমন্ত্রী আবাস যোজনা (গ্রামীণ) যথাক্রমে শহর ও গ্রামীণ এলাকার জন্য।",
        "পিএমএওয়াই-আরবানের অধীনে, উপকারভোগীরা তাদের আয়ের বিভাগ অনুসারে ২.৬৭ লক্ষ টাকা পর্যন্ত ভর্তুকি পেতে পারেন।",
        "পিএমএওয়াই-গ্রামীণের অধীনে, যোগ্য উপকারভোগীরা সমতল এলাকায় ১.২ লক্ষ টাকা এবং পাহাড়ি বা দুর্গম এলাকায় ১.৩ লক্ষ টাকা সরাসরি আর্থিক সহায়তা পান।",
        "যোগ্য হতে, আপনার নিজের বা আপনার পরিবারের সদস্যের নামে একটি পাকা বাড়ি (টেকসই উপাদান দিয়ে তৈরি বাড়ি) থাকতে পারবে না, এবং নির্দিষ্ট আয়ের মানদণ্ড পূরণ করতে হবে।",
        "শহর এলাকার জন্য, প্রকল্পটি চারটি বিকল্প দেয়: ইন-সিটু বস্তি পুনর্গঠন, ক্রেডিট-লিঙ্কড ভর্তুকি, অংশীদারিত্বে সাশ্রয়ী আবাসন, এবং ব্যক্তিগত বাড়ি নির্মাণের জন্য ভর্তুকি।",
        "আবেদন করতে, আপনাকে আপনার পরিচয়পত্র, আয়ের সার্টিফিকেট, এবং পাকা বাড়ির অ-মালিকানার প্রমাণ সহ আপনার স্থানীয় মিউনিসিপাল অফিস বা গ্রাম পঞ্চায়েতে যেতে হবে।"
      ]
    }
  }
};

export function VoiceGuidedExplanation({ dictionary, currentLanguage, schemeId }: VoiceGuidedExplanationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  // Get the explanation based on scheme ID and language
  const getExplanation = () => {
    if (!schemeId || !schemeExplanations[schemeId]) {
      return {
        title: "Scheme Information",
        content: ["No detailed explanation available for this scheme yet."]
      };
    }

    const langData = schemeExplanations[schemeId][currentLanguage] || schemeExplanations[schemeId].en;
    return langData;
  };

  const explanation = getExplanation();

  const playSpeech = (text: string) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = text;
      speech.lang = currentLanguage === "hi" ? "hi-IN" : 
                    currentLanguage === "bn" ? "bn-IN" : "en-US";
      speech.volume = 1;
      speech.rate = 0.9;
      speech.pitch = 1;
      
      // Store the speech synthesis instance
      if (audioRef.current) {
        audioRef.current = speech;
      }
      
      speech.onend = () => {
        // If there are more paragraphs, play the next one
        if (currentIndex < explanation.content.length - 1) {
          setCurrentIndex(prev => prev + 1);
          playSpeech(explanation.content[currentIndex + 1]);
        } else {
          setIsPlaying(false);
          setCurrentIndex(0);
        }
      };
      
      window.speechSynthesis.speak(speech);
      setIsPlaying(true);
    } else {
      toast({
        title: dictionary.notSupported || "Not supported",
        description: dictionary.speechNotSupported || "Your browser doesn't support text-to-speech",
        variant: "destructive",
      });
      setIsPlaying(false);
    }
  };
  
  const togglePlayPause = () => {
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      playSpeech(explanation.content[currentIndex]);
    }
  };
  
  const stopSpeech = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setCurrentIndex(0);
  };

  const playSpecificParagraph = (index: number) => {
    window.speechSynthesis.cancel();
    setCurrentIndex(index);
    playSpeech(explanation.content[index]);
  };
  
  return (
    <>
      <Button
        variant="outline"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2"
      >
        <Volume2 className="h-4 w-4" />
        {dictionary.listenSchemeDetails || "Listen to scheme details"}
      </Button>
      
      <Dialog open={isOpen} onOpenChange={(open) => {
        if (!open) stopSpeech();
        setIsOpen(open);
      }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{explanation.title}</DialogTitle>
            <DialogDescription>
              {dictionary.listenOrReadDetails || "Listen to or read detailed information about this scheme"}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col space-y-4 p-4">
            <div className="flex justify-center space-x-4 mb-4">
              <Button onClick={togglePlayPause} variant="outline">
                {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isPlaying ? dictionary.pause || "Pause" : dictionary.playAll || "Play All"}
              </Button>
            </div>
            
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
              {explanation.content.map((paragraph, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg flex items-start gap-3 ${currentIndex === index && isPlaying ? "bg-desi-orange/10 border border-desi-orange/20" : "bg-gray-100"}`}
                >
                  <button
                    onClick={() => playSpecificParagraph(index)}
                    className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-desi-orange/80 text-white flex items-center justify-center text-xs hover:bg-desi-orange transition-colors"
                    aria-label={`Play paragraph ${index + 1}`}
                  >
                    <Play className="h-3 w-3" />
                  </button>
                  <p className="text-sm">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>
          
          <DialogFooter>
            <div className="flex justify-between w-full">
              <Button variant="outline" onClick={stopSpeech} disabled={!isPlaying}>
                {dictionary.stop || "Stop"}
              </Button>
              <Button onClick={() => setIsOpen(false)}>
                {dictionary.close || "Close"}
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
