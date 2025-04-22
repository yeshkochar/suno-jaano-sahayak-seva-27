
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Timer, Volume2, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface TimelineEvent {
  date: string;
  milestone: string;
  status: "upcoming" | "completed" | "pending";
}

interface SchemeTimeline {
  id: string;
  name: string;
  events: TimelineEvent[];
}

interface VoiceReview {
  id: string;
  userName: string;
  schemeName: string;
  reviewText: string;
  language: string;
}

const sampleTimelines: SchemeTimeline[] = [
  {
    id: "pm-kisan",
    name: "PM-KISAN",
    events: [
      {
        date: "2024-05-01",
        milestone: "Application Window Opens",
        status: "upcoming"
      },
      {
        date: "2024-06-15",
        milestone: "Document Verification Deadline",
        status: "upcoming"
      },
      {
        date: "2024-07-01",
        milestone: "First Installment Release",
        status: "upcoming"
      }
    ]
  },
  {
    id: "awas-yojana",
    name: "PM Awas Yojana",
    events: [
      {
        date: "2024-04-30",
        milestone: "Registration Deadline",
        status: "pending"
      },
      {
        date: "2024-05-15",
        milestone: "Document Submission",
        status: "upcoming"
      },
      {
        date: "2024-06-01",
        milestone: "Approval Process",
        status: "upcoming"
      }
    ]
  }
];

const sampleVoiceReviews: VoiceReview[] = [
  {
    id: "review-1",
    userName: "राजेश कुमार",
    schemeName: "PM-KISAN",
    reviewText: "पीएम-किसान योजना के माध्यम से मुझे समय पर सहायता मिली। आवेदन प्रक्रिया सरल थी, और इन निधियों ने मुझे आवश्यक कृषि उपकरण खरीदने में मदद की।",
    language: "hi-IN"
  },
  {
    id: "review-2",
    userName: "பிரியா சர்மா",
    schemeName: "அவாஸ் யோஜனா",
    reviewText: "அவாஸ் யோஜனா திட்டத்தின் மூலம் எனது குடும்பத்திற்கு ஒரு சரியான வீடு கிடைத்தது. இந்தத் திட்டம் எங்கள் வாழ்க்கையை மாற்றியுள்ளது.",
    language: "ta-IN"
  },
  {
    id: "review-3",
    userName: "અમિત પટેલ",
    schemeName: "PM-KISAN",
    reviewText: "PM-KISAN ની ત્રૈમાસિક હપ્તાની રકમે મને મારી કૃષિ જરૂરિયાતો માટે સ્થિર રોકડ પ્રવાહ જાળવવામાં મદદ કરી.",
    language: "gu-IN"
  }
];

interface SchemeTimelineProps {
  dictionary: Record<string, string>;
}

export function SchemeTimeline({ dictionary }: SchemeTimelineProps) {
  const [playingReviewId, setPlayingReviewId] = useState<string | null>(null);
  const [currentUtterance, setCurrentUtterance] = useState<SpeechSynthesisUtterance | null>(null);
  const { toast } = useToast();

  // Clean up speech synthesis when component unmounts
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const getStatusColor = (status: TimelineEvent["status"]) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50";
      case "pending":
        return "text-orange-600 bg-orange-50";
      case "upcoming":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const playVoiceReview = (review: VoiceReview) => {
    // If no speech synthesis is available, show a toast message
    if (!window.speechSynthesis) {
      toast({
        title: "Speech synthesis not supported",
        description: "Your browser does not support speech synthesis.",
        variant: "destructive",
      });
      return;
    }

    // If this review is already playing, stop it
    if (playingReviewId === review.id) {
      window.speechSynthesis.cancel();
      setPlayingReviewId(null);
      setCurrentUtterance(null);
      return;
    }

    // If another review is playing, stop it first
    if (playingReviewId) {
      window.speechSynthesis.cancel();
    }

    try {
      const utterance = new SpeechSynthesisUtterance(review.reviewText);
      utterance.lang = review.language;
      utterance.rate = 0.9;

      // Set up event handlers
      utterance.onend = () => {
        setPlayingReviewId(null);
        setCurrentUtterance(null);
      };

      utterance.onerror = (event) => {
        console.error("SpeechSynthesis error:", event);
        toast({
          title: "Playback error",
          description: "There was an error playing this review.",
          variant: "destructive",
        });
        setPlayingReviewId(null);
        setCurrentUtterance(null);
      };

      // Store the utterance and set the playing state
      setCurrentUtterance(utterance);
      setPlayingReviewId(review.id);
      
      // Play the speech
      window.speechSynthesis.speak(utterance);
      
      // Show toast for feedback
      toast({
        title: "Playing review",
        description: `Playing ${review.userName}'s review in ${review.language.split('-')[0]}`,
      });
    } catch (error) {
      console.error("Speech synthesis error:", error);
      toast({
        title: "Playback error",
        description: "There was an error playing this review.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full border-2 border-desi-purple/10">
      <CardHeader className="bg-gradient-to-r from-desi-purple/10 to-desi-blue/10">
        <CardTitle className="flex items-center gap-2 text-center text-desi-textDark">
          <Timer className="h-6 w-6" />
          {dictionary.schemeTimeline || "Scheme Timeline Tracker"}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {sampleTimelines.map((timeline) => (
          <div key={timeline.id} className="mb-6 last:mb-0">
            <h3 className="text-lg font-medium mb-3">{timeline.name}</h3>
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{dictionary.date || "Date"}</TableHead>
                    <TableHead>{dictionary.milestone || "Milestone"}</TableHead>
                    <TableHead>{dictionary.status || "Status"}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {timeline.events.map((event, index) => (
                    <TableRow key={index}>
                      <TableCell>{event.date}</TableCell>
                      <TableCell>{event.milestone}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(event.status)}`}>
                          {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ))}
        
        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">{dictionary.beneficiaryReviews || "Beneficiary Reviews"}</h3>
          <div className="grid gap-4">
            {sampleVoiceReviews.map((review) => (
              <div
                key={review.id}
                className="p-4 rounded-lg bg-gradient-to-r from-desi-orange/5 to-desi-yellow/5 border border-desi-orange/10"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-desi-textDark">{review.userName}</p>
                    <p className="text-sm text-desi-textDark/70">{review.schemeName}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => playVoiceReview(review)}
                  >
                    {playingReviewId === review.id ? (
                      <>
                        <Pause className="h-4 w-4" />
                        {dictionary.pause || "Pause"}
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" />
                        {dictionary.play || "Play"}
                      </>
                    )}
                  </Button>
                </div>
                <p className="mt-2 text-sm text-desi-textDark/80">{review.reviewText}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
