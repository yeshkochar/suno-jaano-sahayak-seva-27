
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { Card } from "./ui/card";
import { useToast } from "@/hooks/use-toast";

interface VoiceAssistantProps {
  dictionary: Record<string, string>;
  currentLanguage: string;
}

export function VoiceAssistant({ dictionary, currentLanguage }: VoiceAssistantProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const { toast } = useToast();
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Initialize speech recognition
  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      const recognition = recognitionRef.current;
      
      recognition.continuous = false;
      recognition.interimResults = true;
      
      // Set language based on current selection
      if (currentLanguage === 'hi') {
        recognition.lang = 'hi-IN';
      } else if (currentLanguage === 'bn') {
        recognition.lang = 'bn-IN';
      } else {
        recognition.lang = 'en-US';
      }

      recognition.onresult = (event) => {
        const current = event.resultIndex;
        const currentTranscript = event.results[current][0].transcript;
        setTranscript(currentTranscript);
      };

      recognition.onend = () => {
        if (isListening) {
          // Generate response after recognition ends
          const userQuery = transcript;
          if (userQuery.trim()) {
            const botResponse = generateResponse(userQuery, currentLanguage);
            setResponse(botResponse);
          }
          setIsListening(false);
        }
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        toast({
          title: dictionary.errorOccurred || "Error occurred",
          description: event.error,
          variant: "destructive",
        });
        setIsListening(false);
      };
    } else {
      toast({
        title: dictionary.notSupported || "Not supported",
        description: dictionary.browserNotSupported || "Your browser doesn't support speech recognition",
        variant: "destructive",
      });
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [currentLanguage, isListening, toast, dictionary, transcript]);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      toast({
        title: dictionary.notSupported || "Not supported",
        description: dictionary.browserNotSupported || "Your browser doesn't support speech recognition",
        variant: "destructive",
      });
      return;
    }
    
    if (isListening) {
      recognitionRef.current.abort();
      setIsListening(false);
    } else {
      setTranscript("");
      setResponse("");
      recognitionRef.current.start();
      setIsListening(true);
    }
  };
  
  const speakResponse = () => {
    if (!window.speechSynthesis) {
      toast({
        title: dictionary.notSupported || "Not supported",
        description: dictionary.speechNotSupported || "Your browser doesn't support text-to-speech",
        variant: "destructive",
      });
      return;
    }
    
    if (!response) {
      toast({
        title: dictionary.noResponse || "No response",
        description: dictionary.noResponseMessage || "There is no response to read",
        variant: "warning",
      });
      return;
    }
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    // Create speech utterance
    speechSynthesisRef.current = new SpeechSynthesisUtterance(response);
    const voices = window.speechSynthesis.getVoices();
    
    // Set language based on current selection
    if (currentLanguage === 'hi') {
      speechSynthesisRef.current.lang = 'hi-IN';
    } else if (currentLanguage === 'bn') {
      speechSynthesisRef.current.lang = 'bn-IN';
    } else {
      speechSynthesisRef.current.lang = 'en-US';
    }
    
    // Try to find a matching language voice
    const matchingVoice = voices.find(voice => voice.lang.includes(speechSynthesisRef.current!.lang.substring(0, 2)));
    if (matchingVoice) {
      speechSynthesisRef.current.voice = matchingVoice;
    }
    
    // Speak
    window.speechSynthesis.speak(speechSynthesisRef.current);
  };
  
  // Simple response generator based on user query
  const generateResponse = (query: string, language: string): string => {
    // Simple pattern matching for scheme related queries
    const patterns = {
      housing: {
        en: ["housing", "home", "house", "accommodation", "property", "rent", "pm awas", "pradhan mantri awas"],
        hi: ["आवास", "घर", "मकान", "किराया", "पीएम आवास", "प्रधानमंत्री आवास"],
        bn: ["আবাসন", "বাড়ী", "বাড়ি", "ভাড়া", "পিএম আবাস", "প্রধানমন্ত্রী আবাস"]
      },
      health: {
        en: ["health", "medical", "hospital", "doctor", "ayushman", "insurance", "treatment", "medicine"],
        hi: ["स्वास्थ्य", "चिकित्सा", "अस्पताल", "डॉक्टर", "आयुष्मान", "बीमा", "उपचार", "दवा"],
        bn: ["স্বাস্থ্য", "চিকিৎসা", "হাসপাতাল", "ডাক্তার", "আয়ুষ্মান", "বীমা", "চিকিৎসা", "ওষুধ"]
      },
      agriculture: {
        en: ["farm", "agriculture", "crop", "farming", "kisan", "farmer", "pm kisan"],
        hi: ["खेती", "कृषि", "फसल", "किसान", "पीएम किसान"],
        bn: ["খামার", "কৃষি", "ফসল", "চাষাবাদ", "কিষাণ", "কৃষক", "পিএম কিষাণ"]
      },
      education: {
        en: ["education", "school", "college", "scholarship", "study", "student", "learning"],
        hi: ["शिक्षा", "स्कूल", "कॉलेज", "छात्रवृत्ति", "अध्ययन", "छात्र", "सीखना"],
        bn: ["শিক্ষা", "স্কুল", "কলেজ", "বৃত্তি", "অধ্যয়ন", "ছাত্র", "শিক্ষার্থী"]
      }
    };

    const lowercaseQuery = query.toLowerCase();
    let responseKey: string | null = null;

    // Check which category the query matches
    Object.entries(patterns).forEach(([category, langPatterns]) => {
      const currentLangPatterns = langPatterns[language as keyof typeof langPatterns] || langPatterns.en;
      if (currentLangPatterns.some(pattern => lowercaseQuery.includes(pattern))) {
        responseKey = category;
      }
    });

    // Return response based on matched category
    if (responseKey === "housing") {
      if (language === "hi") {
        return "प्रधानमंत्री आवास योजना एक सरकारी योजना है जो कम आय वाले परिवारों को किफायती आवास प्रदान करती है। आप इसके लिए पात्र हो सकते हैं यदि आपकी वार्षिक आय 3 लाख रुपये से कम है।";
      } else if (language === "bn") {
        return "প্রধানমন্ত্রী আবাস যোজনা হল একটি সরকারি প্রকল্প যা কম আয়ের পরিবারগুলিকে সাশ্রয়ী মূল্যের আবাসন সরবরাহ করে। আপনি যোগ্য হতে পারেন যদি আপনার বার্ষিক আয় 3 লাখ টাকার কম হয়।";
      } else {
        return "The Prime Minister Housing Scheme is a government initiative that provides affordable housing to low-income families. You may be eligible if your annual income is less than 3 lakh rupees.";
      }
    } else if (responseKey === "health") {
      if (language === "hi") {
        return "आयुष्मान भारत योजना एक स्वास्थ्य बीमा योजना है जो गरीब और कमजोर परिवारों को 5 लाख रुपये तक का स्वास्थ्य कवरेज प्रदान करती है। आप अपनी पात्रता हमारी वेबसाइट पर जांच सकते हैं।";
      } else if (language === "bn") {
        return "আয়ুষ্মান ভারত একটি স্বাস্থ্য বীমা প্রকল্প যা দরিদ্র ও দুর্বল পরিবারকে 5 লাখ টাকা পর্যন্ত স্বাস্থ্য কভারেজ প্রদান করে। আপনি আমাদের ওয়েবসাইটে আপনার যোগ্যতা পরীক্ষা করতে পারেন।";
      } else {
        return "Ayushman Bharat is a health insurance scheme that provides coverage up to 5 lakh rupees for poor and vulnerable families. You can check your eligibility on our website.";
      }
    } else if (responseKey === "agriculture") {
      if (language === "hi") {
        return "प्रधानमंत्री किसान सम्मान निधि योजना के तहत, सभी पात्र किसान परिवारों को सालाना 6,000 रुपये की आर्थिक सहायता मिलती है। इसे तीन समान किश्तों में साल में तीन बार भेजा जाता है।";
      } else if (language === "bn") {
        return "প্রধানমন্ত্রী কিষাণ সম্মান নিধি প্রকল্পের অধীনে, সমস্ত যোগ্য কৃষক পরিবার বার্ষিক ৬,০০০ টাকা আর্থিক সহায়তা পায়। এটি বছরে তিনবার তিনটি সমান কিস্তিতে পাঠানো হয়।";
      } else {
        return "Under the PM-KISAN scheme, all eligible farmer families receive financial assistance of Rs 6,000 per year. It is sent in three equal installments three times a year.";
      }
    } else if (responseKey === "education") {
      if (language === "hi") {
        return "केंद्र सरकार विभिन्न शिक्षा छात्रवृत्ति और ऋण योजनाएं प्रदान करती है। आप पोस्ट मैट्रिक छात्रवृत्ति, नेशनल स्कॉलरशिप पोर्टल और विद्या लक्ष्मी पोर्टल के माध्यम से आवेदन कर सकते हैं।";
      } else if (language === "bn") {
        return "কেন্দ্রীয় সরকার বিভিন্ন শিক্ষা বৃত্তি এবং ঋণ প্রকল্প প্রদান করে। আপনি পোস্ট মেট্রিক বৃত্তি, জাতীয় বৃত্তি পোর্টাল এবং বিদ্যা লক্ষ্মী পোর্টালের মাধ্যমে আবেদন করতে পারেন।";
      } else {
        return "The central government provides various education scholarships and loan schemes. You can apply through the Post Matric Scholarship, National Scholarship Portal, and Vidya Lakshmi Portal.";
      }
    } else {
      // Default response if no pattern matches
      if (language === "hi") {
        return "मुझे आपका प्रश्न समझ नहीं आया। कृपया सरकारी योजनाओं के बारे में स्पेसिफिक प्रश्न पूछें, जैसे कि स्वास्थ्य, शिक्षा, आवास या कृषि से संबंधित योजनाएं।";
      } else if (language === "bn") {
        return "আমি আপনার প্রশ্ন বুঝতে পারিনি। অনুগ্রহ করে সরকারি প্রকল্প সম্পর্কে নির্দিষ্ট প্রশ্ন জিজ্ঞাসা করুন, যেমন স্বাস্থ্য, শিক্ষা, আবাসন বা কৃষি সম্পর্কিত প্রকল্প।";
      } else {
        return "I didn't understand your question. Please ask specific questions about government schemes such as health, education, housing, or agriculture-related schemes.";
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {(transcript || response) && (
        <Card className="p-4 mb-4 max-w-md bg-white shadow-lg rounded-xl animate-fade-in">
          {transcript && (
            <div className="mb-3">
              <p className="text-sm text-gray-500">{dictionary.youSaid || "You said"}:</p>
              <p className="text-desi-textDark">{transcript}</p>
            </div>
          )}
          {response && (
            <div>
              <p className="text-sm text-gray-500">{dictionary.assistantResponse || "Assistant"}:</p>
              <p className="text-desi-textDark">{response}</p>
            </div>
          )}
        </Card>
      )}
      
      <div className="flex gap-2">
        <Button
          variant="outline" 
          size="icon"
          className={`w-12 h-12 rounded-full shadow-md ${isListening ? 'bg-red-100 text-red-500 border-red-200' : 'bg-desi-warmBeige text-desi-orange border-desi-orange/20'}`}
          onClick={toggleListening}
        >
          {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="w-12 h-12 rounded-full shadow-md bg-desi-warmBeige text-desi-blue border-desi-blue/20"
          onClick={speakResponse}
        >
          <Volume2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

// Add TypeScript declarations for Speech Recognition API if not present
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}
