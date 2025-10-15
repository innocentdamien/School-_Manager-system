import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Search } from 'lucide-react';

export default function TeacherDashboard() {
  const students = [
    { id: 1, name: 'Emma Johnson', grade: 'Grade 3', status: 'Active' },
    { id: 2, name: 'Michael Chen', grade: 'Grade 3', status: 'Active' },
    { id: 3, name: 'Sofia Rodriguez', grade: 'Grade 3', status: 'Active' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
          </div>
        </div>
      </header>

      <main className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">My Students</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Student
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search students..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 font-medium text-gray-900">Student Name</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-900">Grade</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-6 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-t hover:bg-gray-50">
                      <td className="py-4 px-6 text-gray-900">{student.name}</td>
                      <td className="py-4 px-6 text-gray-600">{student.grade}</td>
                      <td className="py-4 px-6">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          {student.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}