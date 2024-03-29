import { useState } from "react"
import { MdClose, MdMarkUnreadChatAlt } from 'react-icons/md'

const ChatBot = () => {
  const [activeChat, setActiveChat] = useState(false)
  return (

    <div>
      <button title="Click here to chat" type="button" onClick={() => setActiveChat(true)} className="fixed bottom-4 right-4 xl:text-5xl text-green-500"><MdMarkUnreadChatAlt />
      </button>
      {activeChat &&
        <div className="fixed right-5 bottom-5 bg-slate-800 xl:w-[30%] mx-auto">

          <button title="Click here to close" className="absolute right-2 top-2 cursor-pointer z-50" onClick={() => setActiveChat(false)}><MdClose /></button>
          <div className="relative flex items-center p-3 border-b border-gray-300">
            <img className="object-cover w-10 h-10 rounded-full"
              src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
            <span className="block ml-2 font-bold text-gray-600">Emma</span>
            <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
            </span>
          </div>
          <div className="relative w-full p-6 overflow-y-auto h-auto xl:h-3/5">

            <ul className="space-y-2">
              <li className="flex justify-start">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                  <span className="block">Hi</span>
                </div>
              </li>
              <li className="flex justify-end">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                  <span className="block">Hiiii</span>
                </div>
              </li>
              <li className="flex justify-end">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                  <span className="block">how are you?</span>
                </div>
              </li>
              <li className="flex justify-start">
                <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                  <span className="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
                </div>
              </li>
            </ul>

          </div>

          <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">

            <button title="emoji">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button title="Click here to upload file">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </button>

            <input type="text" placeholder="Message"
              className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
              name="message" required />
            <button title="input box">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <button title="click to submit your chat" type="submit">
              <svg className="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>}
    </div>


  )
}


export default ChatBot