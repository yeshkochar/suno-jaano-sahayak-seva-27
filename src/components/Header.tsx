
import { useState } from "react";
import { Globe, Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी (Hindi)" },
  { code: "bn", name: "বাংলা (Bengali)" },
  { code: "ta", name: "தமிழ் (Tamil)" },
  { code: "te", name: "తెలుగు (Telugu)" },
  { code: "mr", name: "मराठी (Marathi)" },
  { code: "gu", name: "ગુજરાતી (Gujarati)" },
  { code: "kn", name: "ಕನ್ನಡ (Kannada)" },
  { code: "ml", name: "മലയാളം (Malayalam)" },
  { code: "pa", name: "ਪੰਜਾਬੀ (Punjabi)" },
  { code: "ur", name: "اردو (Urdu)" },
];

interface HeaderProps {
  currentLanguage: string;
  onLanguageChange: (code: string) => void;
  dictionary: Record<string, string>;
}

export function Header({ currentLanguage, onLanguageChange, dictionary }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-desi-warmBeige shadow-md px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/logo.svg" 
            alt="Suno Aur Jaano" 
            className="h-10 w-10"
          />
          <h1 className="text-xl md:text-2xl font-bold text-desi-orange">
            <span className="text-desi-orange">सुनो</span> <span className="text-desi-blue">और</span> <span className="text-desi-green">जानो</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-desi-textDark hover:text-desi-orange transition-colors">
            {dictionary.home || "Home"}
          </a>
          <a href="#benefits" className="text-desi-textDark hover:text-desi-orange transition-colors">
            {dictionary.benefits || "Benefits"}
          </a>
          <a href="#eligibility" className="text-desi-textDark hover:text-desi-orange transition-colors">
            {dictionary.eligibility || "Eligibility"}
          </a>
          <a href="#help" className="text-desi-textDark hover:text-desi-orange transition-colors">
            {dictionary.help || "Help"}
          </a>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="ml-4 flex gap-2 items-center">
                <Globe className="h-4 w-4" />
                <span>
                  {LANGUAGES.find(lang => lang.code === currentLanguage)?.name || "English"}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {LANGUAGES.map((language) => (
                <DropdownMenuItem 
                  key={language.code}
                  className={currentLanguage === language.code ? "bg-muted" : ""}
                  onClick={() => onLanguageChange(language.code)}
                >
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex gap-2 items-center">
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {LANGUAGES.map((language) => (
                <DropdownMenuItem 
                  key={language.code}
                  className={currentLanguage === language.code ? "bg-muted" : ""}
                  onClick={() => onLanguageChange(language.code)}
                >
                  {language.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 pt-8">
                <a href="#" className="text-lg font-medium text-desi-textDark hover:text-desi-orange transition-colors">
                  {dictionary.home || "Home"}
                </a>
                <a href="#benefits" className="text-lg font-medium text-desi-textDark hover:text-desi-orange transition-colors">
                  {dictionary.benefits || "Benefits"}
                </a>
                <a href="#eligibility" className="text-lg font-medium text-desi-textDark hover:text-desi-orange transition-colors">
                  {dictionary.eligibility || "Eligibility"}
                </a>
                <a href="#help" className="text-lg font-medium text-desi-textDark hover:text-desi-orange transition-colors">
                  {dictionary.help || "Help"}
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
