// pages/mercari-clone.tsx
import { Button } from "@/components/ui/button";
import { productData } from "./productData";

export default function MercariClone() {
  return (
    <>
      {/* カテゴリーセクション */}
      <section className="mb-8"> {/* ヘッダーの高さ分の余白を追加 */}
        <h2 className="text-xl font-semibold mb-4">カテゴリーから探す</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {['レディース', 'メンズ', 'キッズ', 'インテリア・住まい', 'エンタメ', '本・音楽・ゲーム'].map((category) => (
            <Button key={category} variant="outline" className="text-sm">{category}</Button>
          ))}
        </div>
      </section>

      {/* おすすめの商品セクション */}
      <section>
        <h2 className="text-xl font-semibold mb-4">おすすめの商品</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {productData.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-2">
                <p className="text-sm truncate">{product.name}</p>
                <p className="text-sm font-bold">¥{product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* フローティングアクションボタン（モバイルでは非表示） */}
      <Button className="fixed right-8 bottom-20 rounded-full w-16 h-16 bg-red-500 hover:bg-red-600 text-white shadow-lg hidden md:flex md:items-center md:justify-center">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
        </svg>
      </Button>
    </>
  );
}
