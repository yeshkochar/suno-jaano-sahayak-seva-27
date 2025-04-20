
import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface EligibilityCheckerProps {
  dictionary: Record<string, string>;
}

export function EligibilityChecker({ dictionary }: EligibilityCheckerProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    income: "",
    state: "",
    occupation: "",
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // In a real implementation, this would send the data to an API
    console.log("Submitted:", formData);
    setStep(4); // Show results
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border-2 border-desi-orange/10">
      <CardHeader className="bg-gradient-to-r from-desi-orange/10 to-desi-yellow/10">
        <CardTitle className="text-center text-desi-textDark">
          {dictionary.eligibilityChecker || "Check Your Eligibility"}
        </CardTitle>
        <CardDescription className="text-center text-desi-textDark/70">
          {dictionary.eligibilityDescription || "Find government schemes you may qualify for"}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="age">{dictionary.age || "Age"}</Label>
              <Input
                id="age"
                type="number"
                placeholder={dictionary.enterAge || "Enter your age"}
                value={formData.age}
                onChange={(e) => handleChange("age", e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label>{dictionary.gender || "Gender"}</Label>
              <RadioGroup 
                value={formData.gender} 
                onValueChange={(value) => handleChange("gender", value)}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">{dictionary.male || "Male"}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">{dictionary.female || "Female"}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">{dictionary.other || "Other"}</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="pt-4 flex justify-end">
              <Button onClick={handleNext}>{dictionary.next || "Next"}</Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="income">{dictionary.monthlyIncome || "Monthly Income (₹)"}</Label>
              <Input
                id="income"
                type="number"
                placeholder={dictionary.enterIncome || "Enter your monthly income"}
                value={formData.income}
                onChange={(e) => handleChange("income", e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="state">{dictionary.state || "State"}</Label>
              <Select 
                value={formData.state} 
                onValueChange={(value) => handleChange("state", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={dictionary.selectState || "Select your state"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="up">Uttar Pradesh</SelectItem>
                  <SelectItem value="mh">Maharashtra</SelectItem>
                  <SelectItem value="wb">West Bengal</SelectItem>
                  <SelectItem value="tn">Tamil Nadu</SelectItem>
                  <SelectItem value="ka">Karnataka</SelectItem>
                  <SelectItem value="gj">Gujarat</SelectItem>
                  <SelectItem value="rj">Rajasthan</SelectItem>
                  <SelectItem value="ap">Andhra Pradesh</SelectItem>
                  <SelectItem value="tg">Telangana</SelectItem>
                  <SelectItem value="dl">Delhi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4 flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                {dictionary.back || "Back"}
              </Button>
              <Button onClick={handleNext}>{dictionary.next || "Next"}</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="occupation">{dictionary.occupation || "Occupation"}</Label>
              <Select 
                value={formData.occupation} 
                onValueChange={(value) => handleChange("occupation", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder={dictionary.selectOccupation || "Select your occupation"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="farmer">{dictionary.farmer || "Farmer"}</SelectItem>
                  <SelectItem value="laborer">{dictionary.laborer || "Daily Wage Laborer"}</SelectItem>
                  <SelectItem value="smallBusiness">{dictionary.smallBusiness || "Small Business Owner"}</SelectItem>
                  <SelectItem value="government">{dictionary.governmentEmployee || "Government Employee"}</SelectItem>
                  <SelectItem value="private">{dictionary.privateEmployee || "Private Sector Employee"}</SelectItem>
                  <SelectItem value="homemaker">{dictionary.homemaker || "Homemaker"}</SelectItem>
                  <SelectItem value="student">{dictionary.student || "Student"}</SelectItem>
                  <SelectItem value="unemployed">{dictionary.unemployed || "Unemployed"}</SelectItem>
                  <SelectItem value="retired">{dictionary.retired || "Retired"}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4 flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                {dictionary.back || "Back"}
              </Button>
              <Button onClick={handleSubmit}>{dictionary.submit || "Submit"}</Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-medium text-green-800 mb-2">
                {dictionary.eligibleSchemes || "You may be eligible for these schemes:"}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mr-2 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</div>
                  <div>
                    <p className="font-medium">{dictionary.pmKisan || "PM-KISAN"}</p>
                    <p className="text-sm text-gray-600">{dictionary.pmKisanDesc || "Financial assistance for farmers"}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mr-2 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</div>
                  <div>
                    <p className="font-medium">{dictionary.ayushman || "Ayushman Bharat"}</p>
                    <p className="text-sm text-gray-600">{dictionary.ayushmanDesc || "Health insurance coverage"}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 mr-2 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">✓</div>
                  <div>
                    <p className="font-medium">{dictionary.pmAwas || "PM Awas Yojana"}</p>
                    <p className="text-sm text-gray-600">{dictionary.pmAwasDesc || "Housing assistance"}</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-center">
              <Button 
                onClick={() => setStep(1)}
                variant="outline"
                className="mr-2"
              >
                {dictionary.checkAgain || "Check Again"}
              </Button>
              <Button>
                {dictionary.viewDetails || "View Details"}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
