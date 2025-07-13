import { CalendarDays, Users, Clock, TrendingUp } from "lucide-react";
import { AttendanceRow } from "./AttendanceRow";
import { Card } from "@/components/ui/card";

// Sample data - in a real app this would come from an API
const attendanceData = [
  {
    employeeId: "001",
    name: "John Doe",
    date: "2025-07-14",
    totalDuration: "8h 45m",
    checkIn: "9:05",
    checkOut: "17:50",
    status: "on-time" as const,
    department: "Marketing",
    breaks: [
      {
        type: "Lunch Break",
        startTime: "13:00",
        endTime: "13:45",
        duration: "45 mins"
      },
      {
        type: "Tea Break",
        startTime: "16:00",
        endTime: "16:15",
        duration: "15 mins"
      }
    ],
    firstEntry: "9:05",
    lastExit: "17:50",
    totalBreakDuration: "60 mins",
    breakCount: 2
  },
  {
    employeeId: "002",
    name: "Jane Smith",
    date: "2025-07-14",
    totalDuration: "7h 55m",
    checkIn: "9:30",
    checkOut: "17:25",
    status: "late" as const,
    department: "Engineering",
    breaks: [
      {
        type: "Lunch Break",
        startTime: "12:30",
        endTime: "13:15",
        duration: "45 mins"
      }
    ],
    firstEntry: "9:30",
    lastExit: "17:25",
    totalBreakDuration: "45 mins",
    breakCount: 1
  },
  {
    employeeId: "003",
    name: "Robert Brown",
    date: "2025-07-14",
    totalDuration: "9h 05m",
    checkIn: "8:55",
    checkOut: "18:00",
    status: "on-time" as const,
    department: "Sales",
    breaks: [
      {
        type: "Coffee Break",
        startTime: "10:30",
        endTime: "10:45",
        duration: "15 mins"
      },
      {
        type: "Lunch Break",
        startTime: "13:15",
        endTime: "14:00",
        duration: "45 mins"
      },
      {
        type: "Tea Break",
        startTime: "16:30",
        endTime: "16:45",
        duration: "15 mins"
      }
    ],
    firstEntry: "8:55",
    lastExit: "18:00",
    totalBreakDuration: "75 mins",
    breakCount: 3
  },
  {
    employeeId: "004",
    name: "Emily Davis",
    date: "2025-07-14",
    totalDuration: "7h 30m",
    checkIn: "9:15",
    checkOut: "16:45",
    status: "early-leave" as const,
    department: "HR",
    breaks: [
      {
        type: "Lunch Break",
        startTime: "12:45",
        endTime: "13:30",
        duration: "45 mins"
      }
    ],
    firstEntry: "9:15",
    lastExit: "16:45",
    totalBreakDuration: "45 mins",
    breakCount: 1
  },
  {
    employeeId: "005",
    name: "Michael Wilson",
    date: "2025-07-14",
    totalDuration: "8h 30m",
    checkIn: "9:00",
    checkOut: "17:30",
    status: "on-time" as const,
    department: "Finance",
    breaks: [
      {
        type: "Coffee Break",
        startTime: "10:15",
        endTime: "10:30",
        duration: "15 mins"
      },
      {
        type: "Lunch Break",
        startTime: "13:00",
        endTime: "13:45",
        duration: "45 mins"
      }
    ],
    firstEntry: "9:00",
    lastExit: "17:30",
    totalBreakDuration: "60 mins",
    breakCount: 2
  }
];

export const AttendanceDashboard = () => {
  const totalEmployees = attendanceData.length;
  const onTimeEmployees = attendanceData.filter(emp => emp.status === "on-time").length;
  const averageDuration = "8h 13m";
  const totalBreaks = attendanceData.reduce((sum, emp) => sum + emp.breakCount, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-secondary to-secondary/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Employee Attendance Dashboard
              </h1>
              <p className="mt-2 text-muted-foreground">
                Track and manage employee attendance with detailed insights
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-muted-foreground">
              <CalendarDays className="w-5 h-5" />
              <span className="text-sm font-medium">July 14, 2025</span>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-card to-secondary/20 border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Employees</p>
                <p className="text-2xl font-bold text-foreground">{totalEmployees}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-success/5 border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-success/10 rounded-lg">
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">On Time</p>
                <p className="text-2xl font-bold text-foreground">{onTimeEmployees}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-info/5 border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-info/10 rounded-lg">
                <Clock className="w-5 h-5 text-info" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg Duration</p>
                <p className="text-2xl font-bold text-foreground">{averageDuration}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-warning/5 border border-border shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-warning/10 rounded-lg">
                <Users className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Breaks</p>
                <p className="text-2xl font-bold text-foreground">{totalBreaks}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Attendance Table */}
        <Card className="overflow-hidden border border-border shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/60 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                    Employee ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                    Check-in
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                    Check-out
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card divide-y divide-border">
                {attendanceData.map((employee) => (
                  <AttendanceRow key={employee.employeeId} data={employee} />
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};