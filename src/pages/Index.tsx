
import { useState, useRef } from "react";
import { Header } from "@/components/Header";
import { VoiceAssistant } from "@/components/VoiceAssistant";
import { SchemeCategory } from "@/components/SchemeCategory";
import { EligibilityChecker } from "@/components/EligibilityChecker";
import { Footer } from "@/components/Footer";
import { dictionaries } from "@/lib/dictionaries";
import { Button } from "@/components/ui/button";
import { Mic, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [showVoiceAssistantDialog, setShowVoiceAssistantDialog] = useState(false);
  const eligibilityRef = useRef<HTMLDivElement>(null);
  const dictionary = dictionaries[currentLanguage] || dictionaries.en;
  const { toast } = useToast();

  const handleLanguageChange = (code: string) => {
    setCurrentLanguage(code);
  };

  const handleVoiceAssistantClick = () => {
    setShowVoiceAssistantDialog(true);
    toast({
      title: dictionary.voiceAssistantActivated || "Voice Assistant Activated",
      description: dictionary.speakNow || "Speak now to find government schemes",
    });
  };

  const scrollToEligibilityChecker = () => {
    eligibilityRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-desi-warmBeige/30">
      <Header 
        currentLanguage={currentLanguage} 
        onLanguageChange={handleLanguageChange}
        dictionary={dictionary}
      />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-desi-orange/10 to-desi-yellow/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-desi-textDark mb-6">
              {dictionary.heroTitle}
            </h1>
            <p className="text-xl text-desi-textDark/80 mb-8">
              {dictionary.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-desi-orange hover:bg-desi-orange/90 text-white"
                size="lg"
                onClick={scrollToEligibilityChecker}
              >
                {dictionary.heroAction}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-desi-blue/30 text-desi-blue hover:bg-desi-blue/10"
                size="lg"
                onClick={handleVoiceAssistantClick}
              >
                <Mic className="mr-2 h-4 w-4" />
                {dictionary.heroVoice}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNCODgxRkMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMCA0aDR2MWgtNHYtMXptMCA0aDR2MWgtNHYtMXptMCA0aDR2MWgtNHYtMXptMCA0aDR2MWgtNHYtMXptMCA0aDR2MWgtNHYtMXpNMTQgMzRoNHYxaC00di0xem0wIDRoNHYxaC00di0xem0wIDRoNHYxaC00di0xem0wIDRoNHYxaC00di0xem0wIDRoNHYxaC00di0xem0wIDRoNHYxaC00di0xeiIvPjwvZz48L2c+PC9zdmc+')]" />
      </div>
      
      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-desi-textDark mb-2">
              {dictionary.categoriesTitle}
            </h2>
            <p className="text-desi-textDark/70">
              {dictionary.categoriesSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SchemeCategory
              title={dictionary.healthTitle}
              description={dictionary.healthDescription}
              iconSrc="https://api.iconify.design/lucide:heart-pulse.svg?color=%23D35050"
              schemeCount={12}
              bgColor="bg-red-100"
              ctaText={dictionary.healthCta}
              categoryId="health"
            />
            
            <SchemeCategory
              title={dictionary.educationTitle}
              description={dictionary.educationDescription}
              iconSrc="https://api.iconify.design/lucide:book-open.svg?color=%232274A5"
              schemeCount={18}
              bgColor="bg-blue-100"
              ctaText={dictionary.educationCta}
              categoryId="education"
            />
            
            <SchemeCategory
              title={dictionary.housingTitle}
              description={dictionary.housingDescription}
              iconSrc="https://api.iconify.design/lucide:home.svg?color=%23227743"
              schemeCount={8}
              bgColor="bg-green-100"
              ctaText={dictionary.housingCta}
              categoryId="housing"
            />
            
            <SchemeCategory
              title={dictionary.agricultureTitle}
              description={dictionary.agricultureDescription}
              iconSrc="https://api.iconify.design/lucide:wheat.svg?color=%23F4C430"
              schemeCount={15}
              bgColor="bg-yellow-100"
              ctaText={dictionary.agricultureCta}
              categoryId="agriculture"
            />
            
            <SchemeCategory
              title={dictionary.employmentTitle}
              description={dictionary.employmentDescription}
              iconSrc="https://api.iconify.design/lucide:briefcase.svg?color=%239B5DE5"
              schemeCount={10}
              bgColor="bg-purple-100"
              ctaText={dictionary.employmentCta}
              categoryId="employment"
            />
            
            <SchemeCategory
              title={dictionary.womenTitle || "Women & Child"}
              description={dictionary.womenDescription || "Support for women, maternity benefits, and child welfare programs"}
              iconSrc="https://api.iconify.design/lucide:baby.svg?color=%23F15BB5"
              schemeCount={6}
              bgColor="bg-pink-100"
              ctaText={dictionary.womenCta || "Explore Women & Child Schemes"}
              categoryId="women"
            />
          </div>
        </div>
      </section>
      
      {/* Eligibility Checker Section */}
      <section className="py-16 bg-gradient-to-r from-desi-blue/5 to-desi-purple/5" ref={eligibilityRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-desi-textDark mb-2">
              {dictionary.eligibilityChecker}
            </h2>
            <p className="text-desi-textDark/70 max-w-2xl mx-auto">
              {dictionary.eligibilityDescription}
            </p>
          </div>
          
          <EligibilityChecker dictionary={dictionary} />
        </div>
      </section>
      
      <Footer dictionary={dictionary} />
      
      {/* Voice Assistant */}
      <VoiceAssistant 
        dictionary={dictionary}
        currentLanguage={currentLanguage}
      />
    </div>
  );
};

export default Index;
