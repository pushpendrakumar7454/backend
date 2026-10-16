import React from 'react'

const ChatPage = () => {
  return (
    <div className="h-screen w-full bg-[#f7f7f4] p-3">

      <div className="mx-auto flex h-full w-full max-w-4xl flex-col">

        {/* Messages Area */}
        <div className="flex flex-1 flex-col gap-5 overflow-y-auto px-2 py-3">

          {/* Outgoing Message - Right */}
          <div className="flex justify-end">
            <p className="max-w-[75%] break-words rounded-md bg-[#648653] px-3 py-2 text-xs text-white">
              Hello! This is an outgoing message.
            </p>
          </div>

          {/* Incoming Message - Left */}
          <div className="flex justify-start">
            <p className="max-w-[75%] break-words rounded-md bg-[#d6d6d6] px-3 py-2 text-xs text-gray-800">
              Hello! This is an incoming message.
            </p>
          </div>

          {/* Outgoing Message - Right */}
          <div className="flex justify-end">
            <p className="max-w-[75%] break-words rounded-md bg-[#648653] px-3 py-2 text-xs text-white">
              How are you?
            </p>
          </div>

          {/* Incoming Message - Left */}
          <div className="flex justify-start">
            <p className="max-w-[75%] break-words rounded-md bg-[#d6d6d6] px-3 py-2 text-xs text-gray-800">
              I am fine, thank you!
            </p>
          </div>

          {/* Outgoing Message - Right */}
          <div className="flex justify-end">
            <p className="max-w-[75%] break-words rounded-md bg-[#648653] px-3 py-2 text-xs text-white">
              That's great!
            </p>
          </div>

          {/* Incoming Message - Left */}
          <div className="flex justify-start">
            <p className="max-w-[75%] break-words rounded-md bg-[#d6d6d6] px-3 py-2 text-xs text-gray-800">
              Yes, absolutely!
            </p>
          </div>

        </div>

        {/* Input and Button - Same Line */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full shrink-0 items-center gap-2 border-t border-gray-200 py-3"
        >
          <input
            type="text"
            placeholder="Type a message..."
            className="h-11 min-w-0 flex-1 rounded-md border border-gray-300 bg-white px-4 text-sm outline-none focus:border-[#648653]"
          />

          <button
            type="button"
            className="h-11 shrink-0 rounded-md bg-[#648653] px-5 text-sm font-medium text-white hover:bg-[#526f43]"
          >
            Send
          </button>
        </form>

      </div>
    </div>
  )
}

export default ChatPage