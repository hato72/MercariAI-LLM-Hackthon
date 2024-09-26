import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Bell, User, Camera, Home, Users, Bell as BellIcon, PlusCircle, UserCircle, Menu } from "lucide-react"

export default function MercariClone() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-red-500">mercari</h1>
              <div className="relative hidden sm:block">
                <Input 
                  type="search" 
                  placeholder="なにをお探しですか？" 
                  className="pl-10 w-full sm:w-64 md:w-96"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
            <nav className="hidden sm:flex items-center space-x-4">
              <Button variant="ghost">出品</Button>
              <Bell className="text-gray-600" size={24} />
              <User className="text-gray-600" size={24} />
            </nav>
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <div className="mt-2 sm:hidden">
            <Input 
              type="search" 
              placeholder="なにをお探しですか？" 
              className="pl-10 w-full"
            />
            <Search className="absolute left-7 top-[4.2rem] transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Categories */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">カテゴリーから探す</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['レディース', 'メンズ', 'キッズ', 'インテリア・住まい', 'エンタメ', '本・音楽・ゲーム'].map((category) => (
              <Button key={category} variant="outline" className="text-sm">{category}</Button>
            ))}
          </div>
        </section>

        {/* Featured Items */}
        <section>
          <h2 className="text-xl font-semibold mb-4">おすすめの商品</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
                <img src={`/placeholder.svg?height=150&width=150`} alt="Product" className="w-full h-40 object-cover" />
                <div className="p-2">
                  <p className="text-sm truncate">商品名 {i + 1}</p>
                  <p className="text-sm font-bold">¥{(Math.random() * 10000).toFixed(0)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-xs text-gray-500 mb-2 sm:mb-0">
              © 2023 Mercari, Inc.
            </div>
            <div className="text-xs text-gray-500">
              <a href="#" className="hover:underline">利用規約</a> | 
              <a href="#" className="hover:underline ml-2">プライバシー</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4 sm:hidden">
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

      {/* Floating Action Button (visible on tablet and larger) */}
      <Button className="fixed right-8 bottom-8 rounded-full w-16 h-16 bg-red-500 hover:bg-red-600 text-white shadow-lg hidden sm:flex sm:items-center sm:justify-center">
        <Camera size={24} />
      </Button>
    </div>
  )
}