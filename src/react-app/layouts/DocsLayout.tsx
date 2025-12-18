import { Outlet } from 'react-router';
import Navbar from '@/react-app/components/Navbar';
import Sidebar from '@/react-app/components/Sidebar';

export default function DocsLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-68 mt-32">
          <div className="max-w-5xl mx-auto px-8 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
