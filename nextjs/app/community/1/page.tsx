'use client'
import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { initialMessages, Message } from './chatData'
import { productList } from './productData'

export default function ChatPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const communityTitle = searchParams.get('title') || 'コミュニティ'

  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, user: '自分', content: newMessage }])
      setNewMessage('')
    }
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center p-4 border-b bg-white z-10">
        <button onClick={() => router.back()} className="mr-4">
          <ArrowLeft />
        </button>
        <h1 className="text-xl font-semibold">{communityTitle}</h1>
      </header>

      {/* Chat area with additional padding-bottom */}
      <div className="flex-1 p-4 space-y-4" style={{ paddingBottom: '100px' }}> {/* 余白を増やして重ならないように */}
        {messages.map((message) => (
          <div key={message.id} className="flex flex-col">
            <span className="font-semibold">{message.user}</span>
            {message.isProduct ? (
              <div className="bg-gray-100 p-4 rounded-lg">
                <img src={productList[0].imageUrl} alt={productList[0].name} className="w-full h-32 object-cover mb-2" />
                <p className="font-semibold">{productList[0].name}</p>
                <p className="text-lg font-bold">¥{productList[0].price.toLocaleString()}</p>
                <p className="text-sm text-gray-500 mt-2">{productList[0].description}</p>
                <div className="flex justify-between mt-4">
                  <button className="bg-red-500 text-white px-4 py-2 rounded">出品する</button>
                  <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">あとで</button>
                </div>
              </div>
            ) : (
              <p className="bg-gray-100 p-2 rounded-lg inline-block">{message.content}</p>
            )}
          </div>
        ))}
      </div>

      {/* Input area fixed at the bottom */}
      <form
        onSubmit={handleSendMessage}
        className="fixed bottom-20 left-0 w-full bg-white p-4 border-t"

      >
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="コメントする"
            className="flex-1 border rounded-full px-4 py-2"
          />
          <button type="submit" className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-full">
            送信
          </button>
        </div>
      </form>
    </div>
  )
}
