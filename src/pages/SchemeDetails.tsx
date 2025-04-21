
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { dictionaries } from "@/lib/dictionaries";
import { useState } from "react";
import { VoiceGuidedExplanation } from "@/components/VoiceGuidedExplanation";

// Dummy data for schemes by category
const schemesByCategory: Record<string, Array<{ id: string; title: string; description: string; eligibility: string[]; benefits: string[]; documents: string[] }>> = {
  health: [
    {
      id: "ayushman-bharat",
      title: "Ayushman Bharat",
      description: "Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY) is a national health insurance scheme that aims to provide free access to healthcare for low income earners in the country.",
      eligibility: ["Income below ₹5 lakh per annum", "Families identified by Socio-Economic Caste Census", "Previously identified RSBY families"],
      benefits: ["Health coverage up to ₹5 lakh per family per year", "Cashless and paperless treatment", "Coverage for pre and post hospitalization expenses"],
      documents: ["Aadhar Card", "Ration Card/BPL Card", "Income Certificate"]
    },
    {
      id: "pmjay",
      title: "Pradhan Mantri Jan Arogya Yojana",
      description: "Provides health insurance coverage to economically vulnerable families",
      eligibility: ["Income below ₹5 lakh per annum", "Families identified in SECC database"],
      benefits: ["Medical coverage up to ₹5 lakh per family", "Cashless treatment at empanelled hospitals"],
      documents: ["Aadhar Card", "Ration Card", "Income Certificate"]
    }
  ],
  education: [
    {
      id: "pm-vidya",
      title: "PM Vidya Scheme",
      description: "Scholarship program for students pursuing higher education in India.",
      eligibility: ["Students of recognized institutions", "Family income less than ₹8 lakh per annum", "Minimum 60% marks in previous academic year"],
      benefits: ["Tuition fee reimbursement", "Monthly stipend of ₹2,500", "Book allowance of ₹3,000 per year"],
      documents: ["Mark sheets of previous academic year", "Income certificate", "Institution ID card"]
    },
    {
      id: "national-scholarship",
      title: "National Scholarship Portal",
      description: "Central platform for various scholarships for students",
      eligibility: ["Students of recognized institutions", "Family income varies by scheme"],
      benefits: ["Financial assistance for education", "Merit-based scholarships"],
      documents: ["Academic records", "Income proof", "Identity documents"]
    }
  ],
  housing: [
    {
      id: "pm-awas",
      title: "PM Awas Yojana",
      description: "Housing subsidy scheme for urban and rural poor to construct or enhance their homes.",
      eligibility: ["No house ownership by family members", "EWS/LIG categories with annual income below ₹3 lakh", "First-time house buyers"],
      benefits: ["Interest subsidy on home loans", "Direct financial assistance up to ₹2.5 lakh", "Lower interest rates"],
      documents: ["Income Certificate", "Property documents", "Aadhar Card", "Bank account details"]
    },
    {
      id: "credit-linked-subsidy",
      title: "Credit Linked Subsidy Scheme",
      description: "Interest subsidy on housing loans for EWS/LIG/MIG",
      eligibility: ["Annual household income criteria as per category", "No existing house ownership"],
      benefits: ["Interest subsidy up to 6.5%", "Extended loan tenure"],
      documents: ["Income proof", "Aadhar card", "Property documents"]
    }
  ],
  agriculture: [
    {
      id: "pm-kisan",
      title: "PM-KISAN",
      description: "Direct income support to farmers across India.",
      eligibility: ["All landholding farmers with cultivable land", "Subject to exclusion criteria of higher income tax payers", "Institutional land holders not eligible"],
      benefits: ["₹6,000 per year in three equal installments", "Direct transfer to bank account", "Income support for farming inputs"],
      documents: ["Land records", "Aadhar Card", "Bank account details"]
    },
    {
      id: "kisan-credit",
      title: "Kisan Credit Card",
      description: "Credit facility for farmers with simplified procedures",
      eligibility: ["All farmers, tenants, and sharecroppers", "Self-help groups of farmers"],
      benefits: ["Working capital for cultivation", "Flexible withdrawal system", "Interest subvention"],
      documents: ["Land ownership proof", "Identity proof", "Passport size photos"]
    }
  ],
  employment: [
    {
      id: "pmkvy",
      title: "Pradhan Mantri Kaushal Vikas Yojana",
      description: "Skill development initiative scheme for youth to secure better livelihoods.",
      eligibility: ["Indian nationals between 15-45 years", "School/college dropouts or unemployed", "Minimum education requirements vary by course"],
      benefits: ["Free training in selected sectors", "Certification after course completion", "Placement assistance"],
      documents: ["Aadhar Card", "Bank account details", "Educational certificates"]
    },
    {
      id: "mudra-yojana",
      title: "Pradhan Mantri Mudra Yojana",
      description: "Loans for non-corporate small businesses",
      eligibility: ["Small businesses, entrepreneurs, self-employed individuals"],
      benefits: ["Loans up to ₹10 lakh without collateral", "Three categories: Shishu, Kishore, Tarun"],
      documents: ["Identity and address proof", "Business plan/proposal", "Bank account details"]
    }
  ],
  women: [
    {
      id: "beti-bachao",
      title: "Beti Bachao Beti Padhao",
      description: "Initiative to improve welfare services for girls in India.",
      eligibility: ["Girls in districts with low Child Sex Ratio", "Girl children for education benefits", "Pregnant women for maternity benefits"],
      benefits: ["Financial incentives for girl child education", "Awareness campaigns for gender equality", "Improved health services for girls"],
      documents: ["Birth certificate", "School enrollment proof", "Aadhar Card"]
    },
    {
      id: "sukanya-samriddhi",
      title: "Sukanya Samriddhi Yojana",
      description: "Small savings scheme for girl child education and marriage expenses",
      eligibility: ["Parents/guardians of girl child below 10 years", "Only for two girl children per family"],
      benefits: ["Higher interest rate", "Tax benefits", "Partial withdrawal for education at age 18"],
      documents: ["Birth certificate of girl child", "Identity proof of parents/guardians"]
    }
  ]
};

const SchemeDetails = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const dictionary = dictionaries[currentLanguage] || dictionaries.en;

  const handleLanguageChange = (code: string) => {
    setCurrentLanguage(code);
  };

  // Get schemes for the current category
  const schemes = categoryId ? schemesByCategory[categoryId] || [] : [];

  // Translate category ID to display name
  const getCategoryTitle = () => {
    switch(categoryId) {
      case 'health': return dictionary.healthTitle;
      case 'education': return dictionary.educationTitle;
      case 'housing': return dictionary.housingTitle;
      case 'agriculture': return dictionary.agricultureTitle;
      case 'employment': return dictionary.employmentTitle;
      case 'women': return dictionary.womenTitle;
      default: return '';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-desi-warmBeige/30">
      <Header 
        currentLanguage={currentLanguage} 
        onLanguageChange={handleLanguageChange}
        dictionary={dictionary}
      />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center">
            <Button 
              variant="ghost" 
              className="mr-4" 
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {dictionary.back}
            </Button>
            <h1 className="text-2xl md:text-3xl font-bold text-desi-textDark">
              {getCategoryTitle()}
            </h1>
          </div>
          
          {schemes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {schemes.map((scheme) => (
                <div 
                  key={scheme.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-desi-purple/10 hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-desi-textDark mb-2">{scheme.title}</h2>
                    <p className="text-desi-textDark/80 mb-4">{scheme.description}</p>
                    
                    <div className="mb-4">
                      <h3 className="font-medium text-desi-textDark mb-2">Eligibility</h3>
                      <ul className="list-disc pl-5 text-desi-textDark/80">
                        {scheme.eligibility.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="font-medium text-desi-textDark mb-2">Benefits</h3>
                      <ul className="list-disc pl-5 text-desi-textDark/80">
                        {scheme.benefits.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-desi-textDark mb-2">Required Documents</h3>
                      <ul className="list-disc pl-5 text-desi-textDark/80">
                        {scheme.documents.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-desi-warmBeige/30 px-6 py-4 flex justify-between items-center">
                    <VoiceGuidedExplanation 
                      dictionary={dictionary}
                      currentLanguage={currentLanguage}
                      schemeId={scheme.id}
                    />
                    <Button 
                      className="bg-desi-orange hover:bg-desi-orange/90 text-white"
                    >
                      {dictionary.viewDetails}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-desi-textDark/70 text-lg">
                No schemes found for this category.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer dictionary={dictionary} />
    </div>
  );
};

export default SchemeDetails;
