import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Video,
  FileText,
  Layers,
  Lightbulb,
  PanelRight,
  MessageSquare,
} from "lucide-react"

// Define module content types
type ContentSection = {
  id: string
  title: string
  type: "video" | "article" | "interactive" | "exercise" | "quiz"
  duration: string
  completed: boolean
  content?: React.ReactNode
}

type ModuleData = {
  id: string
  title: string
  description: string
  duration: string
  completion: number
  image: string
  sections: ContentSection[]
  nextModule?: string
  prevModule?: string
}

// Mock data for modules
const moduleData: Record<string, ModuleData> = {
  "concept-exploration": {
    id: "concept-exploration",
    title: "Concept Exploration & Ideation",
    description: "Generate and refine design concepts using AI tools",
    duration: "75 min",
    completion: 0,
    image: "/placeholder.svg?height=300&width=600",
    sections: [
      {
        id: "intro",
        title: "Introduction to AI-Assisted Ideation",
        type: "video",
        duration: "10 min",
        completed: false,
      },
      {
        id: "prompt-engineering",
        title: "Prompt Engineering for Design Concepts",
        type: "article",
        duration: "15 min",
        completed: false,
      },
      {
        id: "concept-generation",
        title: "Generating Design Concepts with AI",
        type: "interactive",
        duration: "20 min",
        completed: false,
      },
      {
        id: "concept-refinement",
        title: "Refining Concepts with AI Feedback",
        type: "exercise",
        duration: "20 min",
        completed: false,
      },
      {
        id: "knowledge-check",
        title: "Knowledge Check",
        type: "quiz",
        duration: "10 min",
        completed: false,
      },
    ],
    prevModule: "component-systems",
    nextModule: "ux-interaction",
  },
  "ux-interaction": {
    id: "ux-interaction",
    title: "UX & Interaction Design",
    description: "Enhance user interactions with AI-assisted design patterns",
    duration: "75 min",
    completion: 0,
    image: "/placeholder.svg?height=300&width=600",
    sections: [
      {
        id: "intro",
        title: "AI-Enhanced Interaction Design",
        type: "video",
        duration: "15 min",
        completed: false,
      },
      {
        id: "interaction-patterns",
        title: "AI-Generated Interaction Patterns",
        type: "article",
        duration: "15 min",
        completed: false,
      },
      {
        id: "motion-design",
        title: "Creating Motion Design with AI",
        type: "interactive",
        duration: "20 min",
        completed: false,
      },
      {
        id: "micro-interactions",
        title: "Designing Micro-interactions",
        type: "exercise",
        duration: "15 min",
        completed: false,
      },
      {
        id: "knowledge-check",
        title: "Knowledge Check",
        type: "quiz",
        duration: "10 min",
        completed: false,
      },
    ],
    prevModule: "concept-exploration",
    nextModule: "design-handoff",
  },
}

export default function ModulePage({
  params,
}: {
  params: { acceleratorId: string; moduleId: string }
}) {
  const module = moduleData[params.moduleId]

  if (!module) {
    return <div>Module not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link
          href={`/accelerators/${params.acceleratorId}`}
          className="text-muted-foreground hover:text-foreground mr-4"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold">{module.title}</h1>
          <p className="text-muted-foreground">{module.description}</p>
        </div>
      </div>

      <div className="mb-8 relative">
        <img
          src={module.image || "/placeholder.svg"}
          alt={module.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700/80 text-white flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {module.duration}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 dark:bg-black/80 p-4 rounded-lg backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Progress</span>
              <span>{module.completion}% complete</span>
            </div>
            <div className="h-2 bg-secondary rounded-full">
              <div className="h-2 bg-primary rounded-full" style={{ width: `${module.completion}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="content" className="w-full mb-10">
        <TabsList className="mb-6">
          <TabsTrigger value="content">Module Content</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="discussion">Discussion</TabsTrigger>
        </TabsList>

        <TabsContent value="content">
          <div className="space-y-4">
            {module.sections.map((section, index) => (
              <Card key={section.id} className={section.completed ? "border-green-200" : ""}>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div
                      className={`p-2 rounded-full mr-4 ${
                        section.type === "video"
                          ? "bg-blue-100"
                          : section.type === "article"
                            ? "bg-purple-100"
                            : section.type === "interactive"
                              ? "bg-amber-100"
                              : section.type === "exercise"
                                ? "bg-green-100"
                                : "bg-red-100"
                      }`}
                    >
                      {section.type === "video" ? (
                        <Video className="h-5 w-5 text-blue-600" />
                      ) : section.type === "article" ? (
                        <FileText className="h-5 w-5 text-purple-600" />
                      ) : section.type === "interactive" ? (
                        <Layers className="h-5 w-5 text-amber-600" />
                      ) : section.type === "exercise" ? (
                        <PanelRight className="h-5 w-5 text-green-600" />
                      ) : (
                        <Lightbulb className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{section.title}</h3>
                        <div className="flex items-center">
                          <span className="text-sm text-muted-foreground mr-3">
                            <Clock className="h-3 w-3 inline mr-1" />
                            {section.duration}
                          </span>
                          {section.completed ? (
                            <span className="text-green-600">
                              <CheckCircle2 className="h-5 w-5" />
                            </span>
                          ) : (
                            <Button size="sm" variant="outline">
                              {index === 0 || module.sections[index - 1].completed ? "Start" : "Locked"}
                            </Button>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground capitalize mt-1">{section.type}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            {module.prevModule ? (
              <Button variant="outline" asChild>
                <Link href={`/accelerators/${params.acceleratorId}/modules/${module.prevModule}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous Module
                </Link>
              </Button>
            ) : (
              <Button variant="outline" asChild>
                <Link href={`/accelerators/${params.acceleratorId}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Accelerator
                </Link>
              </Button>
            )}

            {module.nextModule ? (
              <Button asChild>
                <Link href={`/accelerators/${params.acceleratorId}/modules/${module.nextModule}`}>
                  Next Module <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <Button asChild>
                <Link href={`/accelerators/${params.acceleratorId}/completion`}>
                  Complete Accelerator <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </TabsContent>

        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
              <CardDescription>Supplementary materials to enhance your learning</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start p-2 hover:bg-secondary/30 rounded-md">
                  <FileText className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h3 className="font-medium text-sm">Module PDF Guide</h3>
                    <p className="text-xs text-muted-foreground">Comprehensive guide covering all module topics</p>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    Download
                  </Button>
                </li>
                <li className="flex items-start p-2 hover:bg-secondary/30 rounded-md">
                  <Layers className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h3 className="font-medium text-sm">Practice Files</h3>
                    <p className="text-xs text-muted-foreground">Files to use with the exercises in this module</p>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    Download
                  </Button>
                </li>
                <li className="flex items-start p-2 hover:bg-secondary/30 rounded-md">
                  <Lightbulb className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h3 className="font-medium text-sm">Further Reading</h3>
                    <p className="text-xs text-muted-foreground">Articles and books related to this module</p>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    View List
                  </Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="discussion">
          <Card>
            <CardHeader>
              <CardTitle>Module Discussion</CardTitle>
              <CardDescription>Connect with other learners studying this module</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-medium mb-2">Join the conversation</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Share your thoughts, ask questions, and connect with peers
                </p>
                <Button>View Discussion Forum</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

