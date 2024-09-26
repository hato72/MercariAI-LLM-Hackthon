// components/header.tsx
import { Input } from "@/components/ui/input";
import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50"> {/* 固定表示 */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-red-500">mercari</h1>
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
          <Button variant="ghost">出品</Button>
          <Bell className="text-gray-600" size={24} />
          <User className="text-gray-600" size={24} />
        </nav>
      </div>
    </header>
  );
}
