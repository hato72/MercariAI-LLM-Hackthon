// chatData.ts

export interface Message {
  id: number;
  user: string;
  content: string;
  isProduct?: boolean;
  productName?: string;
  productPrice?: number;
}

// 初期データをエクスポート
export const initialMessages: Message[] = [
  { id: 1, user: '佐藤', content: 'こんにちは！' },
  { id: 2, user: '佐藤', content: 'あああああああああああああああああああああああ' },
  { id: 3, user: '小林', content: '', isProduct: true, productName: 'あいうえお', productPrice: 2999 },
  { id: 4, user: '佐藤', content: 'こんにちは！' },
  { id: 5, user: '佐藤', content: 'あああああああああああああああああああああああ' },
];
