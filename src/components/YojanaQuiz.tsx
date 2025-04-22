
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

interface Question {
  id: number;
  text: string;
  category: string;
}

interface Scheme {
  title: string;
  description: string;
  eligibility: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Are you a farmer or involved in agriculture?",
    category: "agriculture"
  },
  {
    id: 2,
    text: "Are you above 60 years of age?",
    category: "senior"
  },
  {
    id: 3,
    text: "Do you have a BPL (Below Poverty Line) card?",
    category: "financial"
  },
  {
    id: 4,
    text: "Are you a woman or girl seeking education?",
    category: "education"
  },
  {
    id: 5,
    text: "Do you need housing assistance?",
    category: "housing"
  }
];

const schemes: Record<string, Scheme[]> = {
  agriculture: [
    {
      title: "PM-KISAN",
      description: "Direct income support for farmers",
      eligibility: ["Small and marginal farmers", "Land ownership documents required"]
    },
    {
      title: "Kisan Credit Card",
      description: "Easy credit access for agricultural needs",
      eligibility: ["All farmers", "Basic KYC documents"]
    }
  ],
  senior: [
    {
      title: "National Pension Scheme",
      description: "Pension benefits for elderly citizens",
      eligibility: ["Age above 60", "Indian citizenship"]
    }
  ],
  financial: [
    {
      title: "Pradhan Mantri Jan Dhan Yojana",
      description: "Financial inclusion program with zero balance account",
      eligibility: ["BPL card holders", "No existing bank account"]
    }
  ],
  education: [
    {
      title: "Beti Bachao Beti Padhao",
      description: "Education support for girl child",
      eligibility: ["Girl students", "Family income criteria"]
    }
  ],
  housing: [
    {
      title: "PM Awas Yojana",
      description: "Housing for all initiative",
      eligibility: ["No owned house", "Income criteria applicable"]
    }
  ]
};

interface YojanaQuizProps {
  dictionary: Record<string, string>;
}

export function YojanaQuiz({ dictionary }: YojanaQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: boolean) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: answer });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const getRecommendedSchemes = () => {
    const recommendedCategories = questions
      .filter((q) => answers[q.id])
      .map((q) => q.category);
    
    return recommendedCategories.flatMap((category) => schemes[category] || []);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border-2 border-desi-orange/10">
      <CardHeader className="bg-gradient-to-r from-desi-orange/10 to-desi-yellow/10">
        <CardTitle className="text-center text-desi-textDark">
          {dictionary.yojanaQuiz || "Yojana Suggestion Quiz"}
        </CardTitle>
        <CardDescription className="text-center text-desi-textDark/70">
          {dictionary.yojanaQuizDesc || "Answer a few questions to find suitable schemes"}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        {!showResults ? (
          <div className="space-y-6">
            <h3 className="text-lg font-medium">
              {dictionary.question || "Question"} {currentQuestion + 1} of {questions.length}
            </h3>
            <p className="text-lg">{questions[currentQuestion].text}</p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => handleAnswer(true)}
                variant="default"
                className="w-32"
              >
                <Check className="mr-2" />
                {dictionary.yes || "Yes"}
              </Button>
              <Button
                onClick={() => handleAnswer(false)}
                variant="outline"
                className="w-32"
              >
                <X className="mr-2" />
                {dictionary.no || "No"}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-center mb-4">
              {dictionary.recommendedSchemes || "Recommended Schemes for You"}
            </h3>
            <div className="space-y-4">
              {getRecommendedSchemes().map((scheme, index) => (
                <div
                  key={index}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <h4 className="font-medium text-green-800">{scheme.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{scheme.description}</p>
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-700">
                      {dictionary.eligibility || "Eligibility"}:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {scheme.eligibility.map((criterion, idx) => (
                        <li key={idx}>{criterion}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button onClick={resetQuiz}>
                {dictionary.retakeQuiz || "Retake Quiz"}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
