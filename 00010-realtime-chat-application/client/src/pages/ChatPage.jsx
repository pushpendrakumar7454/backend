import React from "react";

const ChatPage = () => {
  return (
    <div className="h-screen bg-[#dfe5e7] p-0 md:p-4 lg:p-6">
      <div className="mx-auto flex h-full max-w-[1600px] overflow-hidden bg-white shadow-xl md:rounded-xl">

        {/* Sidebar */}
        <div className="flex w-full flex-col border-r border-gray-200 md:w-[350px] lg:w-[400px]">

          {/* Header */}
          <div className="flex items-center justify-between bg-[#f0f2f5] px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-lg font-bold text-white">
                C
              </div>
              <h1 className="text-xl font-bold text-gray-800">
                Chats
              </h1>
            </div>

            <div className="flex gap-4 text-xl text-gray-600">
              <button className="transition hover:text-emerald-600" title="New chat">
                <i className="fa-solid fa-message"></i>
              </button>
              <button className="transition hover:text-emerald-600" title="Menu">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </div>
          </div>

          {/* Search */}
          <div className="bg-white px-3 py-3">
            <div className="flex items-center gap-3 rounded-lg bg-[#f0f2f5] px-4 py-3">
              <i className="fa-solid fa-magnifying-glass text-sm text-gray-500"></i>
              <input
                type="text"
                placeholder="Search or start a new chat"
                className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 border-b border-gray-100 px-3 pb-3">
            <button className="rounded-full bg-[#d9fdd3] px-4 py-1.5 text-sm font-medium text-[#176b45]">
              All
            </button>
            <button className="rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-600 hover:bg-gray-200">
              Unread
            </button>
            <button className="rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-600 hover:bg-gray-200">
              Favorites
            </button>
          </div>

          {/* Contact List */}
          <div className="flex-1 overflow-y-auto">

            {/* Active Chat */}
            <div className="flex cursor-pointer items-center gap-3 bg-[#f0f2f5] px-4 py-3 transition hover:bg-gray-100">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500 text-lg font-semibold text-white">
                R
              </div>
              <div className="min-w-0 flex-1 border-b border-gray-200 pb-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-gray-800">Rahul Sharma</h3>
                  <span className="text-xs text-emerald-600">2:45 PM</span>
                </div>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <p className="truncate text-sm text-gray-500">
                    Hey! How are you doing?
                  </p>
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">
                    2
                  </span>
                </div>
              </div>
            </div>

            {/* Contact 2 */}
            <div className="flex cursor-pointer items-center gap-3 px-4 py-3 transition hover:bg-gray-50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500 text-lg font-semibold text-white">
                P
              </div>
              <div className="min-w-0 flex-1 border-b border-gray-100 pb-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-gray-800">Priya Verma</h3>
                  <span className="text-xs text-gray-400">1:30 PM</span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  Thank you so much!
                </p>
              </div>
            </div>

            {/* Contact 3 */}
            <div className="flex cursor-pointer items-center gap-3 px-4 py-3 transition hover:bg-gray-50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-lg font-semibold text-white">
                A
              </div>
              <div className="min-w-0 flex-1 border-b border-gray-100 pb-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-gray-800">Amit Kumar</h3>
                  <span className="text-xs text-gray-400">12:15 PM</span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  See you tomorrow bro!
                </p>
              </div>
            </div>

            {/* Contact 4 */}
            <div className="flex cursor-pointer items-center gap-3 px-4 py-3 transition hover:bg-gray-50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-500 text-lg font-semibold text-white">
                S
              </div>
              <div className="min-w-0 flex-1 border-b border-gray-100 pb-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-gray-800">Sneha Singh</h3>
                  <span className="text-xs text-gray-400">Yesterday</span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  <i className="fa-solid fa-check-double mr-1 text-blue-500"></i>
                  I will send you the photos.
                </p>
              </div>
            </div>

            {/* Contact 5 */}
            <div className="flex cursor-pointer items-center gap-3 px-4 py-3 transition hover:bg-gray-50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-500 text-lg font-semibold text-white">
                V
              </div>
              <div className="min-w-0 flex-1 border-b border-gray-100 pb-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-gray-800">Vikas Yadav</h3>
                  <span className="text-xs text-gray-400">Yesterday</span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  Okay, sounds good.
                </p>
              </div>
            </div>

            {/* Contact 6 */}
            <div className="flex cursor-pointer items-center gap-3 px-4 py-3 transition hover:bg-gray-50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-lg font-semibold text-white">
                N
              </div>
              <div className="min-w-0 flex-1 border-b border-gray-100 pb-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-gray-800">Neha Gupta</h3>
                  <span className="text-xs text-gray-400">Monday</span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  Good morning!
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Chat Window */}
        <div className="hidden flex-1 flex-col md:flex">

          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-gray-200 bg-[#f0f2f5] px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-500 text-lg font-semibold text-white">
                R
              </div>
              <div>
                <h2 className="font-semibold text-gray-800">
                  Rahul Sharma
                </h2>
                <p className="text-xs text-gray-500">
                  Online
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 text-lg text-gray-600">
              <button className="hover:text-emerald-600" title="Video call">
                <i className="fa-solid fa-video"></i>
              </button>
              <button className="hover:text-emerald-600" title="Voice call">
                <i className="fa-solid fa-phone"></i>
              </button>
              <button className="hover:text-emerald-600" title="Search messages">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <button className="hover:text-emerald-600" title="More options">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-6 sm:px-8 lg:px-14"
            style={{
              backgroundColor: "#efeae2",
              backgroundImage:
                "radial-gradient(#d8d0c5 0.6px, transparent 0.6px)",
              backgroundSize: "16px 16px",
            }}
          >
            <div className="self-center rounded-lg bg-white/90 px-4 py-2 text-xs text-gray-500 shadow-sm">
              TODAY
            </div>

            {/* Received Message */}
            <div className="max-w-[85%] self-start rounded-xl rounded-tl-none bg-white px-4 py-3 shadow-sm sm:max-w-[70%]">
              <p className="text-sm leading-6 text-gray-800">
                Hey! What's up? How are you doing?
              </p>
              <p className="mt-1 text-right text-[10px] text-gray-400">
                2:40 PM
              </p>
            </div>

            {/* Sent Message */}
            <div className="max-w-[85%] self-end rounded-xl rounded-tr-none bg-[#d9fdd3] px-4 py-3 shadow-sm sm:max-w-[70%]">
              <p className="text-sm leading-6 text-gray-800">
                Hey Rahul! I'm doing great. How about you?
              </p>
              <p className="mt-1 text-right text-[10px] text-gray-500">
                2:41 PM
                <i className="fa-solid fa-check-double ml-2 text-blue-500"></i>
              </p>
            </div>

            <div className="max-w-[85%] self-start rounded-xl rounded-tl-none bg-white px-4 py-3 shadow-sm sm:max-w-[70%]">
              <p className="text-sm leading-6 text-gray-800">
                I'm good too! What are you working on these days?
              </p>
              <p className="mt-1 text-right text-[10px] text-gray-400">
                2:42 PM
              </p>
            </div>

            <div className="max-w-[85%] self-end rounded-xl rounded-tr-none bg-[#d9fdd3] px-4 py-3 shadow-sm sm:max-w-[70%]">
              <p className="text-sm leading-6 text-gray-800">
                I'm building a real-time chat application using React and
                Tailwind CSS. Planning to add Socket.IO later!
              </p>
              <p className="mt-1 text-right text-[10px] text-gray-500">
                2:43 PM
                <i className="fa-solid fa-check-double ml-2 text-blue-500"></i>
              </p>
            </div>

            <div className="max-w-[85%] self-start rounded-xl rounded-tl-none bg-white px-4 py-3 shadow-sm sm:max-w-[70%]">
              <p className="text-sm leading-6 text-gray-800">
                That sounds awesome! Keep going, bro.
              </p>
              <p className="mt-1 text-right text-[10px] text-gray-400">
                2:44 PM
              </p>
            </div>

            <div className="max-w-[85%] self-end rounded-xl rounded-tr-none bg-[#d9fdd3] px-4 py-3 shadow-sm sm:max-w-[70%]">
              <p className="text-sm leading-6 text-gray-800">
                Thanks, bro! I'll share the project with you soon.
              </p>
              <p className="mt-1 text-right text-[10px] text-gray-500">
                2:45 PM
                <i className="fa-solid fa-check-double ml-2 text-blue-500"></i>
              </p>
            </div>
          </div>

          {/* Message Input */}
          <div className="flex items-center gap-3 bg-[#f0f2f5] px-3 py-3 sm:px-5">
            <button className="hidden text-xl text-gray-600 hover:text-emerald-600 sm:block" title="Emoji">
              <i className="fa-regular fa-face-smile"></i>
            </button>

            <button className="text-xl text-gray-600 hover:text-emerald-600" title="Attach file">
              <i className="fa-solid fa-paperclip"></i>
            </button>

            <input
              type="text"
              placeholder="Type a message"
              className="min-w-0 flex-1 rounded-lg bg-white px-4 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-emerald-500/30"
            />

            <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#00a884] text-white transition hover:bg-[#008f72]" title="Send message">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>

        </div>

        {/* Mobile Empty State */}
        <div className="hidden flex-1 flex-col items-center justify-center bg-[#f7f8fa] px-8 text-center md:hidden">
          <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100">
            <i className="fa-brands fa-whatsapp text-5xl text-emerald-600"></i>
          </div>
          <h2 className="text-2xl font-light text-gray-700">
            WhatsApp Web
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
            Send and receive messages without keeping your phone online.
            Select a chat to start messaging.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ChatPage;