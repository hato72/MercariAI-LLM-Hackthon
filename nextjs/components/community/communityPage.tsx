'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { CommunityTopic, recommendedCommunityData } from './communityData'  // データをインポート

export default function CommunityPage() {
  const router = useRouter()
  const [joinedCommunities, setJoinedCommunities] = useState<CommunityTopic[]>([])
  const [recommendedCommunities, setRecommendedCommunities] = useState<CommunityTopic[]>(recommendedCommunityData)

  useEffect(() => {
    // ページが表示された時にスクロールを無効化
    document.body.style.overflow = 'hidden';
    // クリーンアップで元に戻す
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const joinCommunity = (community: CommunityTopic) => {
    setJoinedCommunities([...joinedCommunities, community])
    setRecommendedCommunities(recommendedCommunities.filter(c => c.id !== community.id))
  }

  const enterChat = (communityId: number) => {
    router.push(`/community/${communityId}`)
  }

  const CommunityTopicComponent = ({ topic, onJoin, isJoined }: { topic: CommunityTopic; onJoin?: () => void; isJoined: boolean }) => (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h3 className="font-semibold mb-2">{topic.title}</h3>
      <p className="text-sm text-gray-600 mb-2">フォロー {topic.followers}人</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {topic.tags.map((tag, index) => (
          <span key={index} className="bg-white text-sm px-2 py-1 rounded">
            #{tag}
          </span>
        ))}
      </div>
      {isJoined ? (
        <button 
          className="w-full bg-blue-500 text-white py-2 rounded"
          onClick={() => enterChat(topic.id)}
        >
          チャットに入る
        </button>
      ) : onJoin && (
        <button 
          className="w-full bg-red-500 text-white py-2 rounded"
          onClick={onJoin}
        >
          コミュニティに参加する
        </button>
      )}
    </div>
  )

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">コミュニティ</h1>
      
      <section className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">現在参加中のコミュニティ</h2>
          <a href="#" className="text-blue-500 text-sm">
            すべて見る &gt;
          </a>
        </div>
        {joinedCommunities.length > 0 ? (
          joinedCommunities.map(community => (
            <CommunityTopicComponent key={community.id} topic={community} isJoined={true} />
          ))
        ) : (
          <p className="text-gray-600">新しいコミュニティに参加してみましょう</p>
        )}
      </section>
      
      <section className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">おすすめのコミュニティ</h2>
          <a href="#" className="text-blue-500 text-sm">
            すべて見る &gt;
          </a>
        </div>
        {recommendedCommunities.map(community => (
          <CommunityTopicComponent 
            key={community.id} 
            topic={community} 
            onJoin={() => joinCommunity(community)}
            isJoined={false}
          />
        ))}
      </section>
    </div>
  )
}
