import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface ChatCardProps {
    id: string
    name: string
    lastMessage: string
    time: string
    unreadCount: number
    avatarUrl: string
}

export default function CommunityHomeCard({ chats }: { chats: ChatCardProps[] }) {
    const [selectedChat, setSelectedChat] = useState<string | null>(null)

    const handleChatSelect = (chatId: string) => {
        setSelectedChat(chatId)
        // Here you would typically navigate to the chat or update the UI
        console.log(`Selected chat: ${chatId}`)
    }

    return (
        <div className="space-y-4 p-4">
            {chats.map((chat) => (
                <Card
                    key={chat.id}
                    className={`cursor-pointer transition-colors hover:bg-accent ${selectedChat === chat.id ? 'bg-accent' : ''}`}
                    onClick={() => handleChatSelect(chat.id)}
                >
                    <CardHeader className="flex flex-row items-center space-x-4 p-4">
                        <Avatar>
                            <AvatarImage src={chat.avatarUrl} alt={chat.name} />
                            <AvatarFallback>{chat.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <CardTitle className="text-lg">{chat.name}</CardTitle>
                            <CardDescription className="text-sm text-muted-foreground truncate">
                                {chat.lastMessage}
                            </CardDescription>
                        </div>
                        <div className="flex flex-col items-end space-y-1">
                            <span className="text-xs text-muted-foreground">{chat.time}</span>
                            {chat.unreadCount > 0 && (
                                <Badge variant="destructive" className="rounded-full px-2 py-1">
                                    {chat.unreadCount}
                                </Badge>
                            )}
                        </div>
                    </CardHeader>
                </Card>
            ))}
        </div>
    )
}