
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface SchemeCategoryProps {
  title: string;
  description: string;
  iconSrc: string;
  schemeCount: number;
  bgColor: string;
  ctaText: string;
  categoryId?: string;
}

export function SchemeCategory({
  title,
  description,
  iconSrc,
  schemeCount,
  bgColor,
  ctaText,
  categoryId
}: SchemeCategoryProps) {
  const navigate = useNavigate();
  
  const handleExplore = () => {
    if (categoryId) {
      navigate(`/schemes/${categoryId}`);
    }
  };
  
  return (
    <Card className={`overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow ${bgColor}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 p-2">
            <img src={iconSrc} alt={title} className="w-8 h-8" />
          </div>
        </div>
        <CardDescription className="text-black/70">{schemeCount} schemes available</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4 text-black/80">{description}</p>
        <Button 
          variant="outline" 
          className="bg-white/80 hover:bg-white border-none text-desi-textDark w-full justify-between"
          onClick={handleExplore}
        >
          {ctaText}
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
}
