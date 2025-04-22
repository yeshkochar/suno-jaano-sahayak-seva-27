import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Timer, Volume2, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
    userName: "Rajesh Kumar",
    schemeName: "PM-KISAN",
    reviewText: "I received timely support through PM-KISAN scheme. The application process was simple, and the funds helped me purchase essential farming equipment.",
    language: "hi-IN"
  },
  {
    id: "review-2",
    userName: "Priya Sharma",
    schemeName: "Awas Yojana",
    reviewText: "Thanks to Awas Yojana, I now have a proper home for my family. The scheme has truly changed our lives.",
    language: "en-IN"
  },
  {
    id: "review-3",
    userName: "Amit Patel",
    schemeName: "PM-KISAN",
    reviewText: "The quarterly installments from PM-KISAN have helped me maintain steady cash flow for my agricultural needs.",
    language: "gu-IN"
  }
];

interface SchemeTimelineProps {
  dictionary: Record<string, string>;
}

export function SchemeTimeline({ dictionary }: SchemeTimelineProps) {
  const [playingReviewId, setPlayingReviewId] = useState<string | null>(null);
  const [currentUtterance, setCurrentUtterance] = useState<SpeechSynthesisUtterance | null>(null);

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
    if (playingReviewId === review.id) {
      window.speechSynthesis.cancel();
      setPlayingReviewId(null);
      setCurrentUtterance(null);
      return;
    }

    if (playingReviewId) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(review.reviewText);
    utterance.lang = review.language;
    utterance.rate = 0.9;

    utterance.onend = () => {
      setPlayingReviewId(null);
      setCurrentUtterance(null);
    };

    setCurrentUtterance(utterance);
    setPlayingReviewId(review.id);
    window.speechSynthesis.speak(utterance);
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
