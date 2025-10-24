import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-80 border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col transition-all duration-300 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 backdrop-blur-sm">
      <div className="border-b border-slate-200/50 dark:border-slate-700/50 w-full p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
            <Users className="size-5 text-white" />
          </div>
          <span className="font-semibold text-lg hidden lg:block gradient-text">Contacts</span>
        </div>
        {/* Enhanced filter toggle */}
        <div className="mt-4 hidden lg:flex items-center justify-between">
          <label className="cursor-pointer flex items-center gap-3 group">
            <div className="relative">
              <input
                type="checkbox"
                checked={showOnlineOnly}
                onChange={(e) => setShowOnlineOnly(e.target.checked)}
                className="sr-only"
              />
              <div className={`w-10 h-5 rounded-full transition-all duration-300 ${
                showOnlineOnly ? 'bg-gradient-to-r from-green-400 to-green-500' : 'bg-slate-300 dark:bg-slate-600'
              }`}>
                <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 mt-0.5 ${
                  showOnlineOnly ? 'translate-x-5' : 'translate-x-0.5'
                }`}></div>
              </div>
            </div>
            <span className="text-sm font-medium group-hover:text-blue-600 transition-colors">Show online only</span>
          </label>
          <div className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-green-700 dark:text-green-400">
              {onlineUsers.length - 1} online
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-4 space-y-2">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-4 mx-2 rounded-xl flex items-center gap-4
              transition-all duration-300 group user-card
              ${
                selectedUser?._id === user._id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
                  : "hover:bg-white/80 dark:hover:bg-slate-700/80 hover:shadow-md"
              }
            `}
          >
            <div className="relative">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="size-14 object-cover rounded-full border-2 border-white shadow-md"
              />
              {onlineUsers.includes(user._id) && (
                <span
                  className="absolute -bottom-1 -right-1 size-4 bg-green-500 
                  rounded-full ring-2 ring-white dark:ring-slate-800 animate-pulse"
                />
              )}
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className={`font-semibold truncate ${
                selectedUser?._id === user._id ? 'text-white' : 'text-slate-900 dark:text-white'
              }`}>
                {user.fullName}
              </div>
              <div className={`text-sm flex items-center gap-2 ${
                selectedUser?._id === user._id ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
              }`}>
                <div className={`w-2 h-2 rounded-full ${
                  onlineUsers.includes(user._id) ? 'bg-green-400 animate-pulse' : 'bg-slate-400'
                }`}></div>
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
              <Users className="size-8 text-slate-400" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-medium">No users found</p>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">
              {showOnlineOnly ? 'No online users' : 'No users available'}
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};
export default Sidebar;
