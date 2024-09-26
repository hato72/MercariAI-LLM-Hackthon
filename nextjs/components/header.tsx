// components/header.tsx
import { Input } from "@/components/ui/input";
import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50"> {/* 固定表示 */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/home">
          <Button variant="ghost" className="flex flex-col items-center h-auto p-0">
          <h1 className="text-2xl font-bold text-red-500">mercari</h1>
          </Button>
          </Link>
          <div className="relative">
            <Input
              type="search"
              placeholder="なにをお探しですか？"
              className="pl-10 w-96"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" aria-label="ユーザープロフィール">
            <User className="text-gray-600" size={24} />
          </Button>
          <Button variant="ghost" size="icon" aria-label="通知">
            <Bell className="text-gray-600" size={24} />
          </Button>
          <Link href="/listing">
          <Button 
            variant="default" 
            className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2"
          >
            出品
          </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
