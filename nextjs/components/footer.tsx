// components/footer.tsx
import { Home, Users, PlusCircle, Bell as BellIcon, UserCircle } from "lucide-react"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      
      {/* ボトムナビゲーション */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4">
        <ul className="flex justify-between items-center">
          <li>
          <Link href="/home">
            <Button variant="ghost" className="flex flex-col items-center h-auto p-0">
              <Home size={24} className="text-gray-600" />
              <span className="text-xs mt-1">ホーム</span>
            </Button>
          </Link>
          </li>
          <li>
            <Link href="/community">
            <Button variant="ghost" className="flex flex-col items-center h-auto p-0">
              <Users size={24} className="text-gray-600" />
              <span className="text-xs mt-1">コミュニティ</span>
            </Button>
            </Link>
          </li>
          <li>
            <Link href="/listing">
            <Button variant="ghost" className="flex flex-col items-center h-auto p-0">
              <PlusCircle size={40} className="text-red-500 -mt-5" />
              <span className="text-xs mt-1">出品</span>
            </Button>
            </Link>
          </li>
          <li>
            <Button variant="ghost" className="flex flex-col items-center h-auto p-0">
              <BellIcon size={24} className="text-gray-600" />
              <span className="text-xs mt-1">お知らせ</span>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="flex flex-col items-center h-auto p-0">
              <UserCircle size={24} className="text-gray-600" />
              <span className="text-xs mt-1">マイページ</span>
            </Button>
          </li>
        </ul>
      </nav>
    </>
  )
}
