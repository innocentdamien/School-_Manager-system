import { Link } from 'react-router-dom';
import { GraduationCap, Users, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900">School Manager System</h1>
      </header>

      <main className="flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Select Your Dashboard</h2>
            <p className="text-gray-600 text-lg">
              Digital management system for educational institutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/teacher" className="block">
              <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-md transition-shadow">
                <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Teacher Dashboard</h3>
                <p className="text-gray-600 text-sm">
                  Manage students, classes, and educational content
                </p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  Access Dashboard
                </button>
              </div>
            </Link>

            <Link to="/parent" className="block">
              <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-md transition-shadow">
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Parent Dashboard</h3>
                <p className="text-gray-600 text-sm">
                  View your child's progress and school information
                </p>
                <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                  Access Dashboard
                </button>
              </div>
            </Link>

            <Link to="/admin" className="block">
              <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-md transition-shadow">
                <Shield className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Admin Dashboard</h3>
                <p className="text-gray-600 text-sm">
                  System administration and user management
                </p>
                <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
                  Access Dashboard
                </button>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}