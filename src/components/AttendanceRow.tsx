import { useState } from "react";
import { ChevronDown, ChevronRight, Clock, Coffee, MapPin, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AttendanceData {
  employeeId: string;
  name: string;
  date: string;
  totalDuration: string;
  checkIn: string;
  checkOut: string;
  status: "on-time" | "late" | "early-leave";
  department: string;
  breaks: Array<{
    type: string;
    startTime: string;
    endTime: string;
    duration: string;
  }>;
  firstEntry: string;
  lastExit: string;
  totalBreakDuration: string;
  breakCount: number;
}

interface AttendanceRowProps {
  data: AttendanceData;
}

export const AttendanceRow = ({ data }: AttendanceRowProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "on-time":
        return <Badge className="bg-success text-success-foreground">On-time</Badge>;
      case "late":
        return <Badge className="bg-warning text-warning-foreground">Late</Badge>;
      case "early-leave":
        return <Badge className="bg-info text-info-foreground">Early Leave</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <>
      {/* Main Row */}
      <tr 
        className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors duration-200"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <td className="px-6 py-4 text-sm font-medium text-foreground">
          <div className="flex items-center gap-2">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            )}
            {data.employeeId}
          </div>
        </td>
        <td className="px-6 py-4 text-sm text-foreground font-medium">
          {data.name}
        </td>
        <td className="px-6 py-4 text-sm text-muted-foreground">
          {data.date}
        </td>
        <td className="px-6 py-4 text-sm text-foreground font-medium">
          {data.totalDuration}
        </td>
        <td className="px-6 py-4 text-sm text-muted-foreground">
          {data.checkIn}
        </td>
        <td className="px-6 py-4 text-sm text-muted-foreground">
          {data.checkOut}
        </td>
        <td className="px-6 py-4">
          {getStatusBadge(data.status)}
        </td>
      </tr>

      {/* Expanded Details Row */}
      {isExpanded && (
        <tr className="border-b border-border bg-secondary/30">
          <td colSpan={7} className="px-6 py-0">
            <div className="animate-fade-in py-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Employee Info */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Employee Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Department:</span>
                      <span className="font-medium text-foreground">{data.department}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Employee ID:</span>
                      <span className="font-medium text-foreground">{data.employeeId}</span>
                    </div>
                  </div>
                </div>

                {/* Time Details */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Time Details
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">First Entry:</span>
                      <span className="font-medium text-foreground">{data.firstEntry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Last Exit:</span>
                      <span className="font-medium text-foreground">{data.lastExit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Duration:</span>
                      <span className="font-medium text-foreground">{data.totalDuration}</span>
                    </div>
                  </div>
                </div>

                {/* Break Summary */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Coffee className="w-4 h-4" />
                    Break Summary
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Breaks:</span>
                      <span className="font-medium text-foreground">{data.breakCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Break Duration:</span>
                      <span className="font-medium text-foreground">{data.totalBreakDuration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Breaks */}
              {data.breaks.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Break Timeline
                  </h4>
                  <div className="space-y-2">
                    {data.breaks.map((breakItem, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="font-medium text-foreground">{breakItem.type}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {breakItem.startTime} - {breakItem.endTime}
                          <span className="ml-2 font-medium text-foreground">
                            ({breakItem.duration})
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </td>
        </tr>
      )}
    </>
  );
};