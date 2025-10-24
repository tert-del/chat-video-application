import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/50 dark:border-slate-700/50 fixed w-full top-0 z-40 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-3 hover:scale-105 transition-all duration-200 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative size-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
              </div>
              <h1 className="text-xl font-bold gradient-text">ChatVerse</h1>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {authUser && (
              <>
                <Link 
                  to={"/profile"} 
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-all duration-200 hover:scale-105"
                >
                  <User className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  <span className="hidden sm:inline font-medium text-slate-700 dark:text-slate-300">Profile</span>
                </Link>

                <button 
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-100/50 dark:bg-red-900/30 hover:bg-red-200/50 dark:hover:bg-red-800/50 transition-all duration-200 hover:scale-105 text-red-600 dark:text-red-400" 
                  onClick={logout}
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline font-medium">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
