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
      id: "design-basics",
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
      id: "user-needs",
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
      id: "feature-requirements",
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
      id: "ai-assisted-ideation",
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
      id: "generating-design-concepts",
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
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Modules</h1>
        <div className="flex space-x-4">
          <Button variant="outline">Filter by Level</Button>
          <Button variant="outline">Filter by Duration</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.values(moduleData).map((module) => (
          <Card key={module.id} className="overflow-hidden">
            <img
              src={module.image || "/placeholder.svg"}
              alt={module.title}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-medium text-lg mb-2">{module.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
              <Button variant="outline" size="sm" asChild>
                <Link href={`/modules/${module.id}`}>View Module</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

