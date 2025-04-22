
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Timer } from "lucide-react";

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

interface SchemeTimelineProps {
  dictionary: Record<string, string>;
}

export function SchemeTimeline({ dictionary }: SchemeTimelineProps) {
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
      </CardContent>
    </Card>
  );
}
