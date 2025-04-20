import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { Dictionary } from "@/lib/dictionaries";
import { useToast } from "@/hooks/use-toast";

interface VoiceAssistantProps {
  dictionary: Dictionary;
  currentLanguage: string;
}

export function VoiceAssistant({ dictionary, currentLanguage }: VoiceAssistantProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const recognitionRef = useRef<any>(null);
  const { toast } = useToast();

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = true;
        recognitionRef.current.interimResults = true;
        recognitionRef.current.lang = currentLanguage === "hi" ? "hi-IN" : 
                                      currentLanguage === "bn" ? "bn-IN" : "en-IN";
        
        recognitionRef.current.onresult = (event: any) => {
          const current = event.resultIndex;
          if (event.results[current].isFinal) {
            const transcriptText = event.results[current][0].transcript;
            setTranscript(transcriptText);
            
            // Mock response based on transcript
            generateResponse(transcriptText);
          }
        };
        
        recognitionRef.current.onerror = (event: any) => {
          console.error("Speech recognition error", event.error);
          setIsListening(false);
          toast({
            title: dictionary.errorOccurred || "Error occurred",
            description: event.error,
            variant: "destructive",
          });
        };
        
        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      } else {
        toast({
          title: dictionary.notSupported || "Not supported",
          description: dictionary.browserNotSupported || "Your browser doesn't support speech recognition",
          variant: "destructive",
        });
      }
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [currentLanguage]);
  
  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      setTranscript("");
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };
  
  const generateResponse = (text: string) => {
    // Mock response generation based on keywords
    const lowerText = text.toLowerCase();
    let responseText = "";
    
    if (lowerText.includes("health") || lowerText.includes("medical") || lowerText.includes("स्वास्थ्य") || lowerText.includes("चिकित्सा")) {
      responseText = "You may be eligible for Ayushman Bharat which provides health insurance coverage up to ₹5 lakh per family per year. Would you like to know more about health schemes?";
    } else if (lowerText.includes("education") || lowerText.includes("school") || lowerText.includes("college") || lowerText.includes("शिक्षा")) {
      responseText = "There are several education schemes like scholarships for students. The PM Vidya scheme provides financial assistance for higher education. Would you like to know more?";
    } else if (lowerText.includes("farmer") || lowerText.includes("agriculture") || lowerText.includes("farming") || lowerText.includes("किसान") || lowerText.includes("कृषि")) {
      responseText = "As a farmer, you may be eligible for PM-KISAN which provides income support of ₹6,000 per year. There are also schemes for crop insurance and subsidized equipment.";
    } else if (lowerText.includes("house") || lowerText.includes("home") || lowerText.includes("housing") || lowerText.includes("आवास") || lowerText.includes("घर")) {
      responseText = "PM Awas Yojana provides housing assistance for low-income families. You may be eligible for subsidies on home loans or direct financial assistance.";
    } else if (lowerText.includes("job") || lowerText.includes("employment") || lowerText.includes("work") || lowerText.includes("नौकरी") || lowerText.includes("रोजगार")) {
      responseText = "There are employment schemes like PMKVY for skill development and job training. MUDRA Yojana provides loans for small businesses and entrepreneurs.";
    } else if (lowerText.includes("women") || lowerText.includes("child") || lowerText.includes("girl") || lowerText.includes("महिला") || lowerText.includes("बच्चा")) {
      responseText = "Schemes for women and children include Beti Bachao Beti Padhao and Sukanya Samriddhi Yojana for girl child education and welfare.";
    } else {
      responseText = "I can help you find government schemes in categories like health, education, agriculture, housing, employment, and women & child welfare. Could you specify which area you're interested in?";
    }
    
    setResponse(responseText);
    speakResponse(responseText);
  };
  
  const speakResponse = (text: string) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = text;
      speech.lang = currentLanguage === "hi" ? "hi-IN" : 
                    currentLanguage === "bn" ? "bn-IN" : "en-US";
      speech.volume = 1;
      speech.rate = 0.9;
      speech.pitch = 1;
      
      window.speechSynthesis.speak(speech);
    } else {
      toast({
        title: dictionary.notSupported || "Not supported",
        description: dictionary.speechNotSupported || "Your browser doesn't support text-to-speech",
        variant: "destructive",
      });
    }
  };
  
  const handleSpeakResponse = () => {
    if (response) {
      speakResponse(response);
    } else {
      toast({
        title: dictionary.noResponse || "No response",
        description: dictionary.noResponseMessage || "There is no response to read",
        variant: "destructive",
      });
    }
  };
  
  return (
    <>
      <Button
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-desi-blue hover:bg-desi-blue/90 shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <Mic className="h-6 w-6" />
      </Button>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Voice Assistant</DialogTitle>
          </DialogHeader>
          
          <div className="flex flex-col space-y-4 p-4">
            {transcript && (
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-500 mb-1">{dictionary.youSaid || "You said"}</p>
                <p className="text-gray-900">{transcript}</p>
              </div>
            )}
            
            {response && (
              <div className="bg-desi-blue/10 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium text-desi-blue">{dictionary.assistantResponse || "Assistant"}</p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 w-8 p-0" 
                    onClick={handleSpeakResponse}
                  >
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-gray-900">{response}</p>
              </div>
            )}
            
            <div className="flex justify-center pt-4">
              <Button
                className={`rounded-full w-16 h-16 ${isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-desi-blue hover:bg-desi-blue/90'}`}
                onClick={toggleListening}
              >
                {isListening ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
