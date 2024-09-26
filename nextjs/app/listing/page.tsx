import { Search, ShoppingBag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ListingScreen() {
  return (
    <div className="bg-white flex flex-col h-full w-full overflow-x-hidden">
      <div className="flex-1 px-4 py-2 flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-3xl font-semibold">出品</h1>
        </div>
        
        <div className="space-y-4 w-full">
          <div className="bg-gray-200 h-32 rounded-lg w-full"></div>

          <div className="flex items-center justify-between py-2 border-b w-full">
            <span className="text-sm text-blue-500 flex items-center">
              <ShoppingBag className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="truncate">1件の発送・評価待ちの商品があります</span>
            </span>
            <span className="text-gray-400 ml-2 flex-shrink-0">&gt;</span>
          </div>

          <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-semibold">
            出品する
          </Button>

          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="出品したい商品の価格を調べる"
              className="pl-10 bg-gray-100 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}