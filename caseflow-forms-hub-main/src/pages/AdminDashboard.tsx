import { useState } from "react";
import { Users, FileText } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const AdminDashboard = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(1);

  // Mock data
  const teachers = [
    { id: 1, name: "Ms. Sarah Anderson", activeStudents: 12, pendingConferences: 3 },
    { id: 2, name: "Mr. David Thompson", activeStudents: 15, pendingConferences: 5 },
    { id: 3, name: "Ms. Jennifer Lee", activeStudents: 10, pendingConferences: 2 },
    { id: 4, name: "Mr. Robert Martinez", activeStudents: 14, pendingConferences: 4 },
  ];

  const studentsByTeacher: Record<number, any[]> = {
    1: [
      { id: 1, name: "Emma Johnson", facility: "Lincoln Elementary", status: "Forms Due" },
      { id: 2, name: "Michael Chen", facility: "Washington Preschool", status: "In Progress" },
      { id: 3, name: "Sofia Rodriguez", facility: "Jefferson Early Learning", status: "Completed" },
    ],
    2: [
      { id: 4, name: "James Williams", facility: "Lincoln Elementary", status: "Forms Due" },
      { id: 5, name: "Olivia Davis", facility: "Madison Preschool", status: "Completed" },
    ],
    3: [
      { id: 6, name: "Liam Brown", facility: "Roosevelt Early Learning", status: "In Progress" },
      { id: 7, name: "Ava Wilson", facility: "Kennedy Preschool", status: "Forms Due" },
    ],
    4: [
      { id: 8, name: "Noah Garcia", facility: "Lincoln Elementary", status: "In Progress" },
      { id: 9, name: "Isabella Miller", facility: "Washington Preschool", status: "Completed" },
    ],
  };

  const selectedTeacherData = teachers.find((t) => t.id === selectedTeacher);
  const students = selectedTeacher ? studentsByTeacher[selectedTeacher] || [] : [];

  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="grid lg:grid-cols-12 gap-6 h-full">
        {/* Left Panel - Teacher List */}
        <div className="lg:col-span-4 border border-border bg-card">
          <div className="border-b border-border p-4">
            <h3 className="font-bold">All Teachers</h3>
          </div>
          <div className="divide-y divide-border-light">
            {teachers.map((teacher) => (
              <button
                key={teacher.id}
                onClick={() => setSelectedTeacher(teacher.id)}
                className={`w-full text-left p-4 hover:bg-background-hover transition-colors ${
                  selectedTeacher === teacher.id ? "bg-selected text-selected-foreground" : ""
                }`}
              >
                <p className="font-medium mb-1">{teacher.name}</p>
                <div className="flex gap-4 text-xs">
                  <span className={selectedTeacher === teacher.id ? "text-selected-foreground/70" : "text-muted-foreground"}>
                    {teacher.activeStudents} students
                  </span>
                  <span className={selectedTeacher === teacher.id ? "text-selected-foreground/70" : "text-muted-foreground"}>
                    {teacher.pendingConferences} pending
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Panel - Teacher Detail */}
        <div className="lg:col-span-8 space-y-6">
          {selectedTeacherData ? (
            <>
              {/* Teacher Summary */}
              <div className="border border-border bg-card p-6">
                <h3 className="text-xl font-bold mb-4">{selectedTeacherData.name}</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-2xl font-bold">{selectedTeacherData.activeStudents}</p>
                      <p className="text-sm text-muted-foreground">Active Students</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-2xl font-bold">{selectedTeacherData.pendingConferences}</p>
                      <p className="text-sm text-muted-foreground">Pending Conferences</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Teacher's Student List */}
              <div>
                <h4 className="font-bold mb-4">Students</h4>
                <div className="border border-border bg-card">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border bg-background-grey">
                          <th className="text-left py-3 px-4 font-bold text-sm">Student Name</th>
                          <th className="text-left py-3 px-4 font-bold text-sm">Facility</th>
                          <th className="text-left py-3 px-4 font-bold text-sm">Conference Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.map((student) => (
                          <tr key={student.id} className="border-b border-border-light hover:bg-background-hover">
                            <td className="py-3 px-4">{student.name}</td>
                            <td className="py-3 px-4 text-muted-foreground">{student.facility}</td>
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
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="border border-border bg-card p-12 text-center">
              <p className="text-muted-foreground">Select a teacher to view details</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
