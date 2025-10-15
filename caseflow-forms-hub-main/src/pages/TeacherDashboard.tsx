import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, FileText, Eye } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const TeacherDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const students = [
    {
      id: 1,
      name: "Emma Johnson",
      facility: "Lincoln Elementary",
      conferenceDate: "2025-11-15",
      status: "Forms Due",
    },
    {
      id: 2,
      name: "Michael Chen",
      facility: "Washington Preschool",
      conferenceDate: "2025-11-20",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      facility: "Jefferson Early Learning",
      conferenceDate: "2025-12-01",
      status: "Completed",
    },
    {
      id: 4,
      name: "James Williams",
      facility: "Lincoln Elementary",
      conferenceDate: "2025-12-05",
      status: "Forms Due",
    },
  ];

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout title="Teacher Dashboard">
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold">My Students</h2>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add New Student
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search students..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Students Table */}
        <div className="border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-background-grey">
                  <th className="text-left py-3 px-4 font-bold text-sm">Student Name</th>
                  <th className="text-left py-3 px-4 font-bold text-sm">Primary Facility</th>
                  <th className="text-left py-3 px-4 font-bold text-sm">Conference Date</th>
                  <th className="text-left py-3 px-4 font-bold text-sm">Status</th>
                  <th className="text-left py-3 px-4 font-bold text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="border-b border-border-light hover:bg-background-hover">
                    <td className="py-3 px-4">{student.name}</td>
                    <td className="py-3 px-4 text-muted-foreground">{student.facility}</td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {new Date(student.conferenceDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium ${
                          student.status === "Completed"
                            ? "bg-background-grey"
                            : student.status === "In Progress"
                            ? "bg-muted"
                            : "bg-background-grey border border-border"
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-3 h-3 mr-1" />
                          View Profile
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="w-3 h-3 mr-1" />
                          Forms
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
