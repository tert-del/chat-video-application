import { MessageSquare, Users, Sparkles } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/20 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-700/30">
      <div className="max-w-lg text-center space-y-8">
        {/* Animated Icon Display */}
        <div className="flex justify-center gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
            <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl float">
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold gradient-text">Welcome to ChatVerse!</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Select a conversation from the sidebar to start chatting with your friends
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-slate-700/20">
            <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Connect</p>
          </div>
          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-slate-700/20">
            <MessageSquare className="w-6 h-6 text-purple-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Chat</p>
          </div>
          <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-slate-700/20">
            <Sparkles className="w-6 h-6 text-pink-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;
