// components/footer.tsx
import { Home, Users, PlusCircle, Bell as BellIcon, UserCircle } from "lucide-react"

export default function Footer() {
  return (
    <>
      
      {/* ボトムナビゲーション */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4">
        <ul className="flex justify-between items-center">
          <li className="flex flex-col items-center">
            <Home size={24} className="text-gray-600" />
            <span className="text-xs mt-1">ホーム</span>
          </li>
          <li className="flex flex-col items-center">
            <Users size={24} className="text-gray-600" />
            <span className="text-xs mt-1">コミュニティ</span>
          </li>
          <li className="flex flex-col items-center">
            <PlusCircle size={40} className="text-red-500 -mt-5" />
            <span className="text-xs mt-1">出品</span>
          </li>
          <li className="flex flex-col items-center">
            <BellIcon size={24} className="text-gray-600" />
            <span className="text-xs mt-1">お知らせ</span>
          </li>
          <li className="flex flex-col items-center">
            <UserCircle size={24} className="text-gray-600" />
            <span className="text-xs mt-1">マイページ</span>
          </li>
        </ul>
      </nav>
    </>
  )
}
