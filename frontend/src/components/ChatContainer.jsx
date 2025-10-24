import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);

    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col chat-container">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-6 pb-0 space-y-6 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-700/30 flex flex-col justify-end">
        <div className="space-y-6">
          {messages.map((message, index) => (
          <div
            key={message._id}
            className={`flex ${message.senderId === authUser._id ? "justify-start" : "justify-end"} group`}
            ref={index === messages.length - 1 ? messageEndRef : null}
          >
            <div className={`flex items-end gap-3 max-w-xs sm:max-w-md lg:max-w-lg ${message.senderId === authUser._id ? "flex-row" : "flex-row-reverse"}`}>
              {/* Avatar - only show for sent messages (your messages) */}
              {message.senderId === authUser._id && (
                <div className="flex-shrink-0">
                  <img
                    src={authUser.profilePic || "/avatar.png"}
                    alt="profile pic"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-md object-cover"
                  />
                </div>
              )}
              
              {/* Message content */}
              <div className="flex flex-col">
                <div className={`message-bubble ${
                  message.senderId === authUser._id 
                    ? "message-bubble-sent" 
                    : "message-bubble-received"
                } group-hover:shadow-md transition-all duration-200`}>
                  {message.image && (
                    <img
                      src={message.image}
                      alt="Attachment"
                      className="sm:max-w-[200px] rounded-lg mb-2 shadow-sm"
                    />
                  )}
                  {message.text && (
                    <p className="whitespace-pre-wrap break-words">
                      {message.text}
                    </p>
                  )}
                </div>
                <div className={`text-xs text-slate-500 dark:text-slate-400 mt-1 px-2 ${
                  message.senderId === authUser._id ? "text-left" : "text-right"
                }`}>
                  {formatMessageTime(message.createdAt)}
                </div>
              </div>
              
              {/* Avatar for received messages (other person's messages) */}
              {message.senderId !== authUser._id && (
                <div className="flex-shrink-0">
                  <img
                    src={selectedUser.profilePic || "/avatar.png"}
                    alt="profile pic"
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-md object-cover"
                  />
                </div>
              )}
            </div>
          </div>
          ))}
        </div>
        
        {/* Typing indicator could go here */}
        {messages.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-medium">Start a conversation</p>
              <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">Send your first message below</p>
            </div>
          </div>
        )}
      </div>

      <MessageInput />
    </div>
  );
};
export default ChatContainer;
