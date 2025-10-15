import { Button } from "../components/ui/button";
import { FileText, Calendar } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";

const ParentDashboard = () => {
  // Mock data
  const childInfo = {
    name: "Emma Johnson",
    age: 4,
    teacher: "Ms. Sarah Anderson",
    facility: "Lincoln Elementary Preschool",
  };

  const recentConferences = [
    {
      id: 1,
      date: "2025-09-15",
      teacher: "Ms. Sarah Anderson",
      reportAvailable: true,
    },
    {
      id: 2,
      date: "2025-06-10",
      teacher: "Ms. Sarah Anderson",
      reportAvailable: true,
    },
    {
      id: 3,
      date: "2025-03-05",
      teacher: "Ms. Jennifer Lee",
      reportAvailable: true,
    },
  ];

  const upcomingConference = {
    date: "2025-12-15",
    teacher: "Ms. Sarah Anderson",
  };

  return (
    <DashboardLayout title="Parent Dashboard">
      <div className="max-w-4xl space-y-8">
        {/* Child Profile Header */}
        <div>
          <h2 className="text-2xl font-bold mb-6">My Child's Profile</h2>
          
          {/* Student Summary Card */}
          <div className="border border-border bg-card p-6">
            <h3 className="text-xl font-bold mb-4">{childInfo.name}</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Age</p>
                <p className="font-medium">{childInfo.age} years old</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Primary Teacher</p>
                <p className="font-medium">{childInfo.teacher}</p>
              </div>
              <div className="col-span-2">
                <p className="text-muted-foreground mb-1">Current Facility</p>
                <p className="font-medium">{childInfo.facility}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Conference */}
        <div>
          <h3 className="text-lg font-bold mb-4">Upcoming Conference</h3>
          <div className="border border-border bg-background-grey p-6">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 mt-1" />
              <div className="flex-1">
                <p className="font-bold mb-1">
                  {new Date(upcomingConference.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-sm text-muted-foreground">
                  with {upcomingConference.teacher}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Conferences & Reports */}
        <div>
          <h3 className="text-lg font-bold mb-4">Recent Conferences & Reports</h3>
          <div className="border border-border bg-card">
            <div className="divide-y divide-border-light">
              {recentConferences.map((conference) => (
                <div key={conference.id} className="p-4 hover:bg-background-hover">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium mb-1">
                        {new Date(conference.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <p className="text-sm text-muted-foreground">{conference.teacher}</p>
                    </div>
                    {conference.reportAvailable && (
                      <Button variant="outline" size="sm">
                        <FileText className="w-3 h-3 mr-1" />
                        View Report
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ParentDashboard;
