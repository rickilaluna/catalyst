"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Users, Lightbulb, TrendingUp, Clock } from "lucide-react"

const discussionSpaces = [
  {
    id: "design-ai",
    title: "Design & AI Integration",
    description: "Discuss how AI is transforming the design process",
    topics: 24,
    members: 156,
    lastActive: "2 hours ago",
  },
  {
    id: "code-generation",
    title: "Code Generation Tools",
    description: "Share experiences with AI code generation tools",
    topics: 18,
    members: 89,
    lastActive: "5 hours ago",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    description: "Learn and share effective prompt engineering techniques",
    topics: 32,
    members: 234,
    lastActive: "1 hour ago",
  },
  {
    id: "ai-ethics",
    title: "AI Ethics & Best Practices",
    description: "Discuss ethical considerations in AI development",
    topics: 15,
    members: 78,
    lastActive: "3 hours ago",
  },
]

const prompts = [
  {
    id: "design-system",
    title: "Design System Generation",
    description: "Generate a complete design system using AI",
    category: "Design",
    difficulty: "Intermediate",
    usage: 128,
  },
  {
    id: "component-library",
    title: "Component Library Creation",
    description: "Create a reusable component library with AI assistance",
    category: "Development",
    difficulty: "Advanced",
    usage: 95,
  },
  {
    id: "user-research",
    title: "User Research Analysis",
    description: "Analyze user research data using AI",
    category: "Research",
    difficulty: "Beginner",
    usage: 156,
  },
  {
    id: "accessibility",
    title: "Accessibility Testing",
    description: "Generate accessibility test cases and improvements",
    category: "Testing",
    difficulty: "Intermediate",
    usage: 82,
  },
]

const topDiscussions = [
  {
    id: "1",
    title: "How to effectively use AI for design system creation?",
    author: "Sarah Chen",
    replies: 12,
    views: 234,
    lastReply: "1 hour ago",
    category: "Design",
  },
  {
    id: "2",
    title: "Best practices for AI-assisted code generation",
    author: "Mike Johnson",
    replies: 8,
    views: 189,
    lastReply: "2 hours ago",
    category: "Development",
  },
  {
    id: "3",
    title: "Prompt engineering tips for better AI results",
    author: "Alex Wong",
    replies: 15,
    views: 312,
    lastReply: "30 minutes ago",
    category: "AI",
  },
]

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">Community Hub</h1>
        <p className="text-xl text-muted-foreground">
          Connect with fellow designers and developers, share knowledge, and learn together
        </p>
      </div>

      <Tabs defaultValue="discussions" className="space-y-6">
        <TabsList>
          <TabsTrigger value="discussions">
            <MessageSquare className="h-4 w-4 mr-2" />
            Discussions
          </TabsTrigger>
          <TabsTrigger value="spaces">
            <Users className="h-4 w-4 mr-2" />
            Discussion Spaces
          </TabsTrigger>
          <TabsTrigger value="prompts">
            <Lightbulb className="h-4 w-4 mr-2" />
            Prompts
          </TabsTrigger>
        </TabsList>

        {/* Top Discussions */}
        <TabsContent value="discussions" className="space-y-4">
          {topDiscussions.map((discussion) => (
            <Card key={discussion.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold">{discussion.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Posted by {discussion.author} • {discussion.replies} replies • {discussion.views} views
                    </p>
                  </div>
                  <Badge variant="secondary">{discussion.category}</Badge>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <Button variant="ghost" size="sm">
                    View Discussion
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Last reply {discussion.lastReply}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Discussion Spaces */}
        <TabsContent value="spaces" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {discussionSpaces.map((space) => (
              <Card key={space.id}>
                <CardHeader>
                  <CardTitle>{space.title}</CardTitle>
                  <CardDescription>{space.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span>{space.topics} topics</span>
                      <span>{space.members} members</span>
                    </div>
                    <span>Last active {space.lastActive}</span>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Join Space
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Prompts */}
        <TabsContent value="prompts" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {prompts.map((prompt) => (
              <Card key={prompt.id}>
                <CardHeader>
                  <CardTitle>{prompt.title}</CardTitle>
                  <CardDescription>{prompt.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{prompt.category}</Badge>
                      <Badge variant="outline">{prompt.difficulty}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4" />
                      <span>{prompt.usage} uses</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    View Prompt
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 