// components/footer.tsx
import Link from 'next/link'
import { Home, Users, PlusCircle, Bell as BellIcon, UserCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white py-4 border-t text-center z-50">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <Link href="/home">
            <div className="flex flex-col items-center">
              <Home size={24} className="text-gray-600" />
              <span className="text-xs mt-1">ホーム</span>
            </div>
          </Link>
          <Link href="/community">  {/* コミュニティページに遷移するリンク */}
            <div className="flex flex-col items-center">
              <Users size={24} className="text-gray-600" />
              <span className="text-xs mt-1">コミュニティ</span>
            </div>
          </Link>
          <Link href="/home">
            <div className="flex flex-col items-center">
              <PlusCircle size={40} className="text-red-500 -mt-5" />
              <span className="text-xs mt-1">出品</span>
            </div>
          </Link>
          <Link href="/home">
            <div className="flex flex-col items-center">
              <BellIcon size={24} className="text-gray-600" />
              <span className="text-xs mt-1">お知らせ</span>
            </div>
          </Link>
          <Link href="/home">
            <div className="flex flex-col items-center">
              <UserCircle size={24} className="text-gray-600" />
              <span className="text-xs mt-1">マイページ</span>
            </div>
          </Link>
        </nav>
      </div>
    </footer>
  )
}
