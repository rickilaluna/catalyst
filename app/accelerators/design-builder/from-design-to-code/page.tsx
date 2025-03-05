"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, Video, FileText, Code2 } from "lucide-react"

export default function FromDesignToCodePage() {
  const sections = [
    {
      id: "introduction",
      title: "Introduction to Design-to-Code",
      type: "video",
      duration: "15 min",
      completed: false,
      content: {
        overview: "Learn the fundamentals of converting designs into code using AI",
        keyPoints: [
          "Understanding the design-to-code workflow",
          "Role of AI in design implementation",
          "Best practices for design handoff"
        ]
      }
    },
    {
      id: "ai-tools",
      title: "AI Tools for Design Implementation",
      type: "article",
      duration: "20 min",
      completed: false,
      content: {
        overview: "Explore popular AI tools that help convert designs to code",
        keyPoints: [
          "Overview of AI code generation tools",
          "Understanding tool capabilities and limitations",
          "Choosing the right tool for your needs"
        ]
      }
    },
    {
      id: "hands-on",
      title: "Hands-on Implementation",
      type: "interactive",
      duration: "45 min",
      completed: false,
      content: {
        exercise: "Convert a design to code using AI",
        steps: [
          "Prepare your design for AI conversion",
          "Use AI to generate initial code",
          "Refine and optimize the generated code",
          "Test and validate the implementation"
        ]
      }
    },
    {
      id: "best-practices",
      title: "Best Practices & Optimization",
      type: "article",
      duration: "20 min",
      completed: false,
      content: {
        overview: "Learn how to optimize AI-generated code",
        topics: [
          "Code quality and maintainability",
          "Performance optimization",
          "Accessibility considerations"
        ]
      }
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/accelerators/design-builder">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Design Builder
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">From Design to Code</h1>
          <p className="text-xl text-muted-foreground">
            Learn how to convert your designs into production-ready code using AI tools and best practices.
          </p>
        </div>

        <Tabs defaultValue="introduction" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            {sections.map((section) => (
              <TabsTrigger key={section.id} value={section.id}>
                <div className="flex items-center gap-2">
                  {section.type === "video" && <Video className="h-4 w-4" />}
                  {section.type === "article" && <FileText className="h-4 w-4" />}
                  {section.type === "interactive" && <Code2 className="h-4 w-4" />}
                  <span>{section.title}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {sections.map((section) => (
            <TabsContent key={section.id} value={section.id} className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{section.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{section.duration}</span>
                    </div>
                  </div>
                  <CardDescription>
                    {section.type === "video" && "Watch the video tutorial"}
                    {section.type === "article" && "Read the article"}
                    {section.type === "interactive" && "Complete the interactive exercise"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.content.overview && (
                      <div>
                        <h3 className="font-semibold mb-2">Overview</h3>
                        <p className="text-muted-foreground">{section.content.overview}</p>
                      </div>
                    )}
                    
                    {section.content.keyPoints && (
                      <div>
                        <h3 className="font-semibold mb-2">Key Points</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          {section.content.keyPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {section.content.steps && (
                      <div>
                        <h3 className="font-semibold mb-2">Steps</h3>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                          {section.content.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    )}

                    {section.content.topics && (
                      <div>
                        <h3 className="font-semibold mb-2">Topics Covered</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          {section.content.topics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href={`/accelerators/design-builder/from-design-to-code/${section.id}`}>
                    Start Section
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/accelerators/design-builder/component-library">
                    Next Module <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
} 