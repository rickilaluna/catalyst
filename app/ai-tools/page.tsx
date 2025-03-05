"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, Code, MessageSquare, Image, Layout, GitBranch, Brain } from "lucide-react"

const categories = [
  { id: "all", label: "All Tools" },
  { id: "code", label: "Code Generation" },
  { id: "chat", label: "Chat & Conversation" },
  { id: "image", label: "Image Generation" },
  { id: "design", label: "Design & UI" },
  { id: "development", label: "Development" },
  { id: "ai", label: "AI & ML" },
]

const tools = [
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-powered code editor with built-in chat and code generation",
    category: "code",
    icon: Code,
    url: "https://cursor.sh",
    features: ["Code Generation", "Chat Interface", "Code Explanation"],
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "Advanced language model for conversation and text generation",
    category: "chat",
    icon: MessageSquare,
    url: "https://chat.openai.com",
    features: ["Text Generation", "Code Assistance", "Creative Writing"],
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic's AI assistant for analysis and conversation",
    category: "chat",
    icon: Brain,
    url: "https://claude.ai",
    features: ["Analysis", "Writing", "Research"],
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer that helps write better code",
    category: "code",
    icon: GitBranch,
    url: "https://github.com/features/copilot",
    features: ["Code Completion", "Documentation", "Test Generation"],
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "AI art generator for creating stunning visuals",
    category: "image",
    icon: Image,
    url: "https://www.midjourney.com",
    features: ["Image Generation", "Art Creation", "Style Transfer"],
  },
  {
    id: "vercel",
    name: "Vercel AI SDK",
    description: "Tools for building AI-powered applications",
    category: "development",
    icon: Layout,
    url: "https://vercel.com/ai",
    features: ["AI Integration", "API Tools", "Deployment"],
  },
  {
    id: "grok",
    name: "Grok",
    description: "xAI's conversational AI with real-time knowledge",
    category: "chat",
    icon: Brain,
    url: "https://grok.x.ai",
    features: ["Real-time Knowledge", "Conversation", "Analysis"],
  },
  {
    id: "figma-ai",
    name: "Figma AI",
    description: "AI-powered design tools within Figma",
    category: "design",
    icon: Layout,
    url: "https://www.figma.com/ai",
    features: ["Design Generation", "Layout Suggestions", "Component Creation"],
  },
  {
    id: "dall-e",
    name: "DALL-E",
    description: "OpenAI's AI system for creating realistic images from text",
    category: "image",
    icon: Image,
    url: "https://openai.com/dall-e-3",
    features: ["Image Generation", "Text-to-Image", "Style Control"],
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    description: "Open-source image generation model",
    category: "image",
    icon: Image,
    url: "https://stability.ai",
    features: ["Image Generation", "Custom Training", "Local Deployment"],
  },
  {
    id: "anthropic-claude",
    name: "Claude 3",
    description: "Latest version of Anthropic's Claude with enhanced capabilities",
    category: "chat",
    icon: Brain,
    url: "https://claude.ai",
    features: ["Advanced Analysis", "Vision Capabilities", "Long Context"],
  },
  {
    id: "replit-ghost",
    name: "Replit Ghost",
    description: "AI pair programmer integrated into Replit's IDE",
    category: "code",
    icon: Code,
    url: "https://replit.com/ghost",
    features: ["Code Generation", "Debugging", "Project Setup"],
  },
  {
    id: "amazon-codewhisperer",
    name: "Amazon CodeWhisperer",
    description: "AI-powered code suggestions from Amazon",
    category: "code",
    icon: Code,
    url: "https://aws.amazon.com/codewhisperer",
    features: ["Code Completion", "Security Scanning", "Open Source Training"],
  },
  {
    id: "runway",
    name: "Runway",
    description: "AI-powered creative tools for video and content creation",
    category: "design",
    icon: Layout,
    url: "https://runwayml.com",
    features: ["Video Generation", "Motion Graphics", "Style Transfer"],
  },
  {
    id: "synthesia",
    name: "Synthesia",
    description: "AI video generation platform for creating digital avatars",
    category: "design",
    icon: Layout,
    url: "https://www.synthesia.io",
    features: ["Avatar Creation", "Video Generation", "Multi-language Support"],
  }
]

export default function AIToolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">AI Tools Directory</h1>
        <p className="text-xl text-muted-foreground">
          Discover and explore AI tools that can enhance your development and design workflow
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTools.map((tool) => (
          <Card key={tool.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <tool.icon className="h-5 w-5 text-primary" />
                <CardTitle>{tool.name}</CardTitle>
              </div>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {tool.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full" asChild>
                  <a href={tool.url} target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 