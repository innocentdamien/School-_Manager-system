import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, FileText } from 'lucide-react';

export default function ParentDashboard() {
  const childInfo = {
    name: 'Emma Johnson',
    grade: 'Grade 3',
    teacher: 'Ms. Sarah Anderson',
    school: 'Lincoln Elementary School',
  };

  const recentReports = [
    { id: 1, title: 'Progress Report - Q1', date: '2024-10-01', type: 'Academic' },
    { id: 2, title: 'Behavior Report', date: '2024-09-15', type: 'Behavioral' },
    { id: 3, title: 'Attendance Summary', date: '2024-09-01', type: 'Attendance' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b px-8 py-6">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Parent Dashboard</h1>
        </div>
      </header>

      <main className="p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Child Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Student Name</p>
                <p className="font-medium text-gray-900">{childInfo.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Grade</p>
                <p className="font-medium text-gray-900">{childInfo.grade}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Teacher</p>
                <p className="font-medium text-gray-900">{childInfo.teacher}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">School</p>
                <p className="font-medium text-gray-900">{childInfo.school}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-bold text-gray-900">Recent Reports</h3>
            </div>
            <div className="divide-y">
              {recentReports.map((report) => (
                <div key={report.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">{report.title}</p>
                        <p className="text-sm text-gray-600">{report.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{report.date}</p>
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        View Report
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-bold text-gray-900">Upcoming Events</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-900">Parent-Teacher Conference</span>
                <span className="text-sm text-gray-600">Oct 25, 2024</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-900">School Holiday</span>
                <span className="text-sm text-gray-600">Nov 1, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}