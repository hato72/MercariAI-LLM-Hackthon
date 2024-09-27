

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

// 初期商品データをエクスポート
export const productList: Product[] = [
  {
    id: 1,
    name: '車のパーツ',
    price: 2999,
    description: '家を整理していたら出てきたのでよかったら〜〜',
    imageUrl: '/placeholder.svg?height=100&width=100',
  },
  {
    id: 2,
    name: 'かきくけこ',
    price: 4999,
    description: '使用頻度が少なかったので状態良好です！',
    imageUrl: '/placeholder.svg?height=100&width=100',
  },
];
