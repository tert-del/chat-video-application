import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen relative overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-40 h-40 bg-blue-200/10 dark:bg-blue-800/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-0 -right-4 w-40 h-40 bg-purple-200/10 dark:bg-purple-800/10 rounded-full blur-2xl animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-32 h-32 bg-indigo-200/10 dark:bg-indigo-800/10 rounded-full blur-2xl animate-float animation-delay-4000"></div>
      </div>
      
      <div className="flex items-center justify-center pt-20 px-4 relative z-10">
        <div className="card-modern rounded-2xl shadow-2xl w-full max-w-7xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-2xl overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};
export default HomePage;
