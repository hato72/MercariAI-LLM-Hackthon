export interface CommunityTopic {
  id: number;
  title: string;
  followers: number;
  tags: string[];
}

export const recommendedCommunityData: CommunityTopic[] = [
  { id: 1, title: "車について語ろう", followers: 20, tags: ["車が好き", "車好き", "車が好き"] },
  { id: 2, title: "料理のコツを共有しよう", followers: 15, tags: ["料理", "レシピ", "クッキング"] },
];
