import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight">CaseFlow | Group 1</h1>
          </div>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
