import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { GraduationCap, Users, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border px-8 py-6">
        <h1 className="text-2xl font-bold tracking-tight">CaseFlow | Group 1</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Select Your Dashboard</h2>
            <p className="text-muted-foreground text-lg">
              Digital form management for special education case conferences
            </p>
          </div>

          {/* Dashboard Selection Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Teacher Dashboard */}
            <Link to="/teacher" className="block">
              <div className="border border-border bg-card p-8 hover:bg-background-hover transition-colors h-full flex flex-col">
                <div className="mb-6">
                  <GraduationCap className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Teacher Dashboard</h3>
                  <p className="text-muted-foreground text-sm">
                    Manage students, case conferences, and digital forms
                  </p>
                </div>
                <Button variant="outline" className="mt-auto w-full">
                  Access Dashboard
                </Button>
              </div>
            </Link>

            {/* Parent Dashboard */}
            <Link to="/parent" className="block">
              <div className="border border-border bg-card p-8 hover:bg-background-hover transition-colors h-full flex flex-col">
                <div className="mb-6">
                  <Users className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Parent Dashboard</h3>
                  <p className="text-muted-foreground text-sm">
                    View your child's progress reports and case information
                  </p>
                </div>
                <Button variant="outline" className="mt-auto w-full">
                  Access Dashboard
                </Button>
              </div>
            </Link>

            {/* Admin Dashboard */}
            <Link to="/admin" className="block">
              <div className="border border-border bg-card p-8 hover:bg-background-hover transition-colors h-full flex flex-col">
                <div className="mb-6">
                  <Shield className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Admin Dashboard</h3>
                  <p className="text-muted-foreground text-sm">
                    Overview of all teachers and students in the program
                  </p>
                </div>
                <Button variant="outline" className="mt-auto w-full">
                  Access Dashboard
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
