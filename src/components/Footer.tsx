
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

interface FooterProps {
  dictionary: Record<string, string>;
}

export function Footer({ dictionary }: FooterProps) {
  return (
    <footer className="bg-desi-warmBeige border-t border-desi-earthBrown/10 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-desi-textDark font-bold text-lg mb-4">सुनो और जानो</h3>
            <p className="text-desi-textDark/80 text-sm">
              {dictionary.home || "Home"} | {dictionary.benefits || "Benefits"} | {dictionary.eligibility || "Eligibility"} | {dictionary.help || "Help"}
            </p>
          </div>
          
          <div>
            <h3 className="text-desi-textDark font-bold text-lg mb-4">{dictionary.aboutUs || "About Us"}</h3>
            <ul className="space-y-2 text-desi-textDark/80 text-sm">
              <li><a href="#" className="hover:text-desi-orange">{dictionary.aboutUs || "About Us"}</a></li>
              <li><a href="#" className="hover:text-desi-orange">{dictionary.contactUs || "Contact Us"}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-desi-textDark font-bold text-lg mb-4">{dictionary.privacyPolicy || "Privacy Policy"}</h3>
            <ul className="space-y-2 text-desi-textDark/80 text-sm">
              <li><a href="#" className="hover:text-desi-orange">{dictionary.privacyPolicy || "Privacy Policy"}</a></li>
              <li><a href="#" className="hover:text-desi-orange">{dictionary.termsOfService || "Terms of Service"}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-desi-textDark font-bold text-lg mb-4">{dictionary.followUs || "Follow Us"}</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-desi-blue hover:text-desi-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-desi-blue hover:text-desi-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-desi-blue hover:text-desi-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="text-desi-blue hover:text-desi-orange transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-desi-earthBrown/10 mt-8 pt-6 text-center text-desi-textDark/70 text-sm">
          <p>{dictionary.copyright || "© 2025 Suno Aur Jaano. All rights reserved."}</p>
        </div>
      </div>
    </footer>
  );
}
