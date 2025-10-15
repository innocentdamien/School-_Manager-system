import { Link } from 'react-router-dom';
import { ArrowLeft, Users, GraduationCap, BookOpen, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Students', value: '1,234', icon: Users, color: 'blue' },
    { title: 'Total Teachers', value: '89', icon: GraduationCap, color: 'green' },
    { title: 'Active Classes', value: '45', icon: BookOpen, color: 'purple' },
    { title: 'Enrollment Rate', value: '94%', icon: TrendingUp, color: 'orange' },
  ];

  const recentActivities = [
    { id: 1, action: 'New student enrolled', user: 'John Smith', time: '2 hours ago' },
    { id: 2, action: 'Teacher profile updated', user: 'Ms. Johnson', time: '4 hours ago' },
    { id: 3, action: 'Class schedule modified', user: 'Admin', time: '6 hours ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b px-8 py-6">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>

      <main className="p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                purple: 'bg-purple-100 text-purple-600',
                orange: 'bg-orange-100 text-orange-600',
              };
              
              return (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h3 className="text-lg font-bold text-gray-900">Recent Activities</h3>
              </div>
              <div className="divide-y">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">by {activity.user}</p>
                      </div>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b">
                <h3 className="text-lg font-bold text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-6 space-y-4">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 text-left">
                  Add New Student
                </button>
                <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 text-left">
                  Add New Teacher
                </button>
                <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 text-left">
                  Create New Class
                </button>
                <button className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 text-left">
                  Generate Reports
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}