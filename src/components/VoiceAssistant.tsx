
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { Card } from "./ui/card";

interface VoiceAssistantProps {
  dictionary: Record<string, string>;
  currentLanguage: string;
}

export function VoiceAssistant({ dictionary, currentLanguage }: VoiceAssistantProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  
  // Mock function for toggling listening state
  const toggleListening = () => {
    setIsListening(!isListening);
    
    if (!isListening) {
      // In a real implementation, this would connect to a speech recognition API
      // For now, we'll simulate a response after a delay
      setTimeout(() => {
        setTranscript(getMockQuery(currentLanguage));
        
        setTimeout(() => {
          setResponse(getMockResponse(currentLanguage));
          setIsListening(false);
        }, 2000);
      }, 1500);
    } else {
      setTranscript("");
      setResponse("");
    }
  };
  
  // Mock text based on language
  const getMockQuery = (lang: string) => {
    if (lang === "hi") return "मुझे प्रधानमंत्री आवास योजना के बारे में बताओ";
    if (lang === "bn") return "আমাকে প্রধানমন্ত্রী আবাস যোজনা সম্পর্কে বলুন";
    return "Tell me about the Prime Minister Housing Scheme";
  };
  
  const getMockResponse = (lang: string) => {
    if (lang === "hi") 
      return "प्रधानमंत्री आवास योजना एक सरकारी योजना है जो कम आय वाले परिवारों को किफायती आवास प्रदान करती है। आप इसके लिए पात्र हो सकते हैं यदि आपकी वार्षिक आय 3 लाख रुपये से कम है।";
    if (lang === "bn")
      return "প্রধানমন্ত্রী আবাস যোজনা হল একটি সরকারি প্রকল্প যা কম আয়ের পরিবারগুলিকে সাশ্রয়ী মূল্যের আবাসন সরবরাহ করে। আপনি যোগ্য হতে পারেন যদি আপনার বার্ষিক আয় 3 লাখ টাকার কম হয়।";
    return "The Prime Minister Housing Scheme is a government initiative that provides affordable housing to low-income families. You may be eligible if your annual income is less than 3 lakh rupees.";
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {(transcript || response) && (
        <Card className="p-4 mb-4 max-w-md bg-white shadow-lg rounded-xl">
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
          onClick={() => {
            // In a real implementation, this would read the last response aloud
            console.log("Reading response aloud");
          }}
        >
          <Volume2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
