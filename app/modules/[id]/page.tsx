import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Video,
  FileText,
  Layers,
  Lightbulb,
  PanelRight,
} from "lucide-react"

export default function ModulePage({ params }: { params: { id: string } }) {
  // This would come from a database in a real app
  const moduleData = {
    "design-basics": {
      title: "Understanding Design Basics & Challenges",
      description: "Foundation concepts in design thinking and problem-solving",
      level: "Beginner",
      duration: "2 hours",
      completion: 100,
      image: "/placeholder.svg?height=300&width=600",
      sections: [
        {
          title: "Introduction to Design Thinking",
          type: "video",
          duration: "15 min",
          completed: true,
        },
        {
          title: "Common UX Design Challenges",
          type: "article",
          duration: "10 min",
          completed: true,
        },
        {
          title: "How AI Can Enhance Design Processes",
          type: "interactive",
          duration: "20 min",
          completed: true,
        },
        {
          title: "Design Thinking Exercise",
          type: "exercise",
          duration: "30 min",
          completed: true,
        },
        {
          title: "Knowledge Check",
          type: "quiz",
          duration: "15 min",
          completed: true,
        },
      ],
      nextModule: "user-needs",
    },
    "user-needs": {
      title: "User Needs Assessment & Research",
      description: "Techniques for understanding user needs with AI assistance",
      level: "Beginner",
      duration: "3 hours",
      completion: 40,
      image: "/placeholder.svg?height=300&width=600",
      sections: [
        {
          title: "Introduction to User Research",
          type: "video",
          duration: "20 min",
          completed: true,
        },
        {
          title: "AI-Powered User Research Techniques",
          type: "article",
          duration: "15 min",
          completed: true,
        },
        {
          title: "Using AI to Generate User Personas",
          type: "interactive",
          duration: "30 min",
          completed: false,
        },
        {
          title: "Analyzing User Feedback with AI",
          type: "exercise",
          duration: "45 min",
          completed: false,
        },
        {
          title: "Knowledge Check",
          type: "quiz",
          duration: "20 min",
          completed: false,
        },
      ],
      nextModule: "feature-requirements",
    },
    "feature-requirements": {
      title: "Feature Requirements & Prioritization",
      description: "Using AI to analyze and prioritize feature requirements",
      level: "Intermediate",
      duration: "2.5 hours",
      completion: 0,
      image: "/placeholder.svg?height=300&width=600",
      sections: [
        {
          title: "Introduction to Feature Prioritization",
          type: "video",
          duration: "20 min",
          completed: false,
        },
        {
          title: "AI-Assisted Requirements Analysis",
          type: "article",
          duration: "15 min",
          completed: false,
        },
        {
          title: "Using AI to Identify Critical Features",
          type: "interactive",
          duration: "30 min",
          completed: false,
        },
        {
          title: "Feature Prioritization Exercise",
          type: "exercise",
          duration: "45 min",
          completed: false,
        },
        {
          title: "Knowledge Check",
          type: "quiz",
          duration: "20 min",
          completed: false,
        },
      ],
      nextModule: "concept-generation",
    },
    "ai-assisted-ideation": {
      title: "Introduction to AI-Assisted Ideation",
      description: "Learn how to leverage AI tools to enhance your ideation process and creative thinking",
      level: "Intermediate",
      duration: "1.5 hours",
      completion: 0,
      image: "/placeholder.svg?height=300&width=600",
      sections: [
        {
          title: "Understanding AI in Design Ideation",
          type: "video",
          duration: "15 min",
          completed: false,
          content: {
            overview: "Explore how AI can augment the creative ideation process in design",
            keyPoints: [
              "Role of AI in creative processes",
              "Types of AI tools for ideation",
              "Benefits and limitations of AI-assisted ideation"
            ],
            resources: [
              {
                type: "video",
                url: "#",
                title: "AI in Design: An Overview"
              },
              {
                type: "article",
                url: "#",
                title: "Best Practices for AI-Assisted Ideation"
              }
            ]
          }
        },
        {
          title: "Popular AI Tools for Ideation",
          type: "article",
          duration: "20 min",
          completed: false,
          content: {
            overview: "Deep dive into current AI tools that can help with design ideation",
            keyPoints: [
              "Overview of Midjourney, DALL-E, and other visual AI tools",
              "Text-based AI tools for concept development",
              "Choosing the right AI tool for your needs"
            ]
          }
        },
        {
          title: "Hands-on AI Ideation Exercise",
          type: "interactive",
          duration: "25 min",
          completed: false,
          content: {
            exercise: "Create initial design concepts using AI tools",
            steps: [
              "Define your design challenge",
              "Use AI to generate initial ideas",
              "Refine and iterate on AI suggestions",
              "Document your process and learnings"
            ]
          }
        },
        {
          title: "Best Practices & Ethics",
          type: "article",
          duration: "15 min",
          completed: false,
          content: {
            overview: "Understanding ethical considerations and best practices",
            topics: [
              "AI attribution and ownership",
              "Maintaining creative authenticity",
              "Ethical considerations in AI-assisted design"
            ]
          }
        }
      ]
    },
    "generating-design-concepts": {
      title: "Generating Design Concepts with AI",
      description: "Master practical techniques for generating and refining design concepts using AI tools",
      level: "Intermediate",
      duration: "2 hours",
      completion: 0,
      image: "/placeholder.svg?height=300&width=600",
      sections: [
        {
          title: "AI-Powered Design Generation",
          type: "video",
          duration: "20 min",
          completed: false,
          content: {
            overview: "Learn techniques for generating design concepts using AI",
            keyPoints: [
              "Setting up effective AI prompts",
              "Understanding design constraints",
              "Iterative concept generation"
            ],
            resources: [
              {
                type: "video",
                url: "#",
                title: "Mastering AI Design Generation"
              }
            ]
          }
        },
        {
          title: "Prompt Engineering for Design",
          type: "interactive",
          duration: "30 min",
          completed: false,
          content: {
            overview: "Master the art of writing effective prompts for AI design tools",
            exercises: [
              "Writing clear design prompts",
              "Using design-specific terminology",
              "Iterating and refining prompts"
            ]
          }
        },
        {
          title: "Concept Refinement Workshop",
          type: "exercise",
          duration: "40 min",
          completed: false,
          content: {
            workshop: "Hands-on session for refining AI-generated concepts",
            activities: [
              "Initial concept generation",
              "Critique and analysis",
              "Iterative refinement",
              "Final concept selection"
            ]
          }
        },
        {
          title: "Integration with Design Workflow",
          type: "article",
          duration: "15 min",
          completed: false,
          content: {
            overview: "Learn to seamlessly integrate AI-generated concepts into your design workflow",
            topics: [
              "Workflow optimization",
              "Collaboration with AI tools",
              "Quality control and validation"
            ]
          }
        }
      ]
    }
  }

  const module = moduleData[params.id as keyof typeof moduleData]
  if (!module) {
    return <div>Module not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link href="/catalyst-hub" className="text-muted-foreground hover:text-foreground mr-4">
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
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              module.level === "Beginner"
                ? "bg-green-100 text-green-800"
                : module.level === "Intermediate"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-purple-100 text-purple-800"
            }`}
          >
            {module.level}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 flex items-center">
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
              <Card key={index} className={section.completed ? "border-green-200" : ""}>
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
            <Button variant="outline" asChild>
              <Link href="/catalyst-hub">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Hub
              </Link>
            </Button>
            {module.completion < 100 ? (
              <Button asChild>
                <Link href={`/modules/${params.id}/content/${module.sections.findIndex((s) => !s.completed) + 1}`}>
                  Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <Button asChild>
                <Link href={`/modules/${module.nextModule}`}>
                  Next Module <ArrowRight className="ml-2 h-4 w-4" />
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
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
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

