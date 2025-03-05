"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Layout, Zap } from "lucide-react"

export default function DesignBuilderPage() {
  const modules = [
    {
      id: "from-design-to-code",
      title: "From Design to Code",
      description: "Learn how to convert your designs into production-ready code using AI",
      duration: "2 hours",
      icon: Code,
      status: "not-started",
    },
    {
      id: "component-library",
      title: "Building a Component Library",
      description: "Create and maintain a scalable component library with AI assistance",
      duration: "1.5 hours",
      icon: Layout,
      status: "not-started",
    },
    {
      id: "ai-prototyping",
      title: "AI-Powered Prototyping",
      description: "Use AI to rapidly prototype and iterate on your designs",
      duration: "2.5 hours",
      icon: Zap,
      status: "not-started",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">From Designer to Design Builder</h1>
        <p className="text-xl text-muted-foreground">
          Learn how to bridge the gap between design and development using AI tools. This accelerator will help you
          convert your designs into production-ready code and build scalable component libraries.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => (
          <Card key={module.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <module.icon className="h-5 w-5 text-primary" />
                <CardTitle>{module.title}</CardTitle>
              </div>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">{module.duration}</span>
                <span className="text-sm font-medium capitalize">{module.status}</span>
              </div>
              <Button className="w-full" asChild>
                <Link href={`/accelerators/design-builder/${module.id}`}>
                  Start Module <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 