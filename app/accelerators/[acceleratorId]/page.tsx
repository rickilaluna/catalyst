import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Clock, BookOpen, CheckCircle2, Code, Layers, Lightbulb, Palette, PanelRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

// Define the accelerator data structure
type Module = {
  id: string
  number: number
  title: string
  description: string
  duration: string
  status: "not-started" | "in-progress" | "completed"
  icon: LucideIcon
}

type Accelerator = {
  id: string
  title: string
  description: string
  level: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  modules: Module[]
  progress: number
  image: string
  prerequisites?: string[]
  learningOutcomes?: string[]
}

// Mock data for accelerators
const accelerators: Record<string, Accelerator> = {
  introduction: {
    id: "introduction",
    title: "Introduction to AI in UX Design",
    description: "Learn the fundamentals of AI and how it's transforming the UX design landscape.",
    level: "Beginner",
    duration: "4 hours",
    progress: 0,
    image: "/placeholder.svg?height=400&width=800",
    modules: [
      {
        id: "ai-fundamentals",
        number: 1,
        title: "AI Fundamentals for Designers",
        description: "Understand the basic concepts of AI and machine learning.",
        duration: "45 min",
        status: "not-started",
        icon: Lightbulb,
      },
      {
        id: "ai-tools-overview",
        number: 2,
        title: "Overview of AI Design Tools",
        description: "Explore the landscape of AI tools available for UX designers.",
        duration: "60 min",
        status: "not-started",
        icon: Layers,
      },
      {
        id: "design-workflows",
        number: 3,
        title: "AI-Enhanced Design Workflows",
        description: "Learn how to integrate AI into your existing design process.",
        duration: "60 min",
        status: "not-started",
        icon: PanelRight,
      },
      {
        id: "generative-design",
        number: 4,
        title: "Introduction to Generative Design",
        description: "Discover how AI can generate design variations and creative solutions.",
        duration: "75 min",
        status: "not-started",
        icon: Palette,
      },
    ],
    prerequisites: [
      "Basic understanding of UX design principles",
      "Familiarity with design tools like Figma or Sketch",
    ],
    learningOutcomes: [
      "Understand how AI is transforming UX design",
      "Identify opportunities to use AI in your design workflow",
      "Evaluate different AI tools for specific design tasks",
      "Create simple designs using AI assistance",
    ],
  },
  "design-builder": {
    id: "design-builder",
    title: "From Designer to Design Builder",
    description:
      "Learn to use AI tools to transition from design to implementation, bridging the gap between design and development.",
    level: "Intermediate",
    duration: "6 hours",
    progress: 25,
    image: "/placeholder.svg?height=400&width=800",
    modules: [
      {
        id: "design-to-code",
        number: 1,
        title: "Design-to-Code Fundamentals",
        description: "Learn the basics of translating designs into code with AI assistance.",
        duration: "60 min",
        status: "completed",
        icon: Code,
      },
      {
        id: "prototyping-ai",
        number: 2,
        title: "AI-Powered Prototyping",
        description: "Create interactive prototypes faster using AI tools.",
        duration: "60 min",
        status: "in-progress",
        icon: Layers,
      },
      {
        id: "component-systems",
        number: 3,
        title: "Building Component Systems",
        description: "Use AI to develop consistent, reusable component libraries.",
        duration: "60 min",
        status: "not-started",
        icon: PanelRight,
      },
      {
        id: "concept-exploration",
        number: 4,
        title: "Concept Exploration & Ideation",
        description: "Generate and refine design concepts using AI tools.",
        duration: "75 min",
        status: "not-started",
        icon: Lightbulb,
      },
      {
        id: "ux-interaction",
        number: 5,
        title: "UX & Interaction Design",
        description: "Enhance user interactions with AI-assisted design patterns.",
        duration: "75 min",
        status: "not-started",
        icon: Palette,
      },
      {
        id: "design-handoff",
        number: 6,
        title: "Streamlined Design Handoff",
        description: "Optimize the handoff process between design and development using AI.",
        duration: "60 min",
        status: "not-started",
        icon: ArrowRight,
      },
    ],
    prerequisites: [
      "Completion of 'Introduction to AI in UX Design' or equivalent knowledge",
      "Basic understanding of HTML/CSS",
      "Experience with design tools like Figma or Sketch",
    ],
    learningOutcomes: [
      "Convert designs to code using AI tools",
      "Build interactive prototypes with AI assistance",
      "Create consistent component systems",
      "Streamline the design-to-development handoff process",
      "Generate and refine design concepts with AI",
    ],
  },
  "analysis-iteration": {
    id: "analysis-iteration",
    title: "AI for UX Analysis & Iteration",
    description: "Master advanced AI techniques for user testing and design optimization.",
    level: "Advanced",
    duration: "8 hours",
    progress: 0,
    image: "/placeholder.svg?height=400&width=800",
    modules: [
      {
        id: "user-testing",
        number: 1,
        title: "AI-Powered User Testing",
        description: "Learn how AI can enhance and automate aspects of user testing.",
        duration: "90 min",
        status: "not-started",
        icon: Lightbulb,
      },
      {
        id: "data-analysis",
        number: 2,
        title: "UX Data Analysis with AI",
        description: "Use AI to analyze user behavior data and extract insights.",
        duration: "90 min",
        status: "not-started",
        icon: Layers,
      },
      {
        id: "design-optimization",
        number: 3,
        title: "Design Optimization Techniques",
        description: "Apply AI to iteratively improve designs based on user data.",
        duration: "90 min",
        status: "not-started",
        icon: PanelRight,
      },
      {
        id: "personalization",
        number: 4,
        title: "AI-Driven Personalization",
        description: "Create adaptive interfaces that respond to individual user needs.",
        duration: "90 min",
        status: "not-started",
        icon: Palette,
      },
      {
        id: "accessibility",
        number: 5,
        title: "Enhancing Accessibility with AI",
        description: "Use AI tools to improve the accessibility of your designs.",
        duration: "60 min",
        status: "not-started",
        icon: CheckCircle2,
      },
    ],
  },
}

export default function AcceleratorPage({ params }: { params: { acceleratorId: string } }) {
  const accelerator = accelerators[params.acceleratorId]

  if (!accelerator) {
    return <div>Accelerator not found</div>
  }

  // Find the module in the accelerator.modules array
  const conceptModule = accelerator.modules.find((m) => m.id === "concept-exploration")
  if (conceptModule) {
    // Update its status if needed
    conceptModule.status = "in-progress"
  }

  const completedModules = accelerator.modules.filter((m) => m.status === "completed").length
  const inProgressModules = accelerator.modules.filter((m) => m.status === "in-progress").length

  return (
    <div>
      <div className="relative mb-8">
        <img
          src={accelerator.image || "/placeholder.svg"}
          alt={accelerator.title}
          className="w-full h-64 md:h-80 object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex items-end">
          <div className="p-6 md:p-8 text-white w-full">
            <div className="flex flex-wrap gap-2 mb-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  accelerator.level === "Beginner"
                    ? "bg-green-500/80 text-white"
                    : accelerator.level === "Intermediate"
                      ? "bg-blue-500/80 text-white"
                      : "bg-purple-500/80 text-white"
                }`}
              >
                {accelerator.level}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700/80 text-white flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {accelerator.duration}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700/80 text-white flex items-center">
                <BookOpen className="h-3 w-3 mr-1" />
                {accelerator.modules.length} modules
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{accelerator.title}</h1>
            <p className="text-gray-200 max-w-3xl">{accelerator.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Modules</h2>
              <div className="text-sm text-muted-foreground">
                {completedModules} of {accelerator.modules.length} completed
              </div>
            </div>
            <Progress value={accelerator.progress} className="h-2 mb-6" />

            <div className="space-y-4">
              {accelerator.modules.map((module) => {
                const Icon = module.icon
                return (
                  <Card
                    key={module.id}
                    className={`${
                      module.status === "completed"
                        ? "border-green-200 bg-green-50"
                        : module.status === "in-progress"
                          ? "border-primary/20 bg-primary/5"
                          : ""
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div
                          className={`p-2 rounded-full mr-4 ${
                            module.status === "completed"
                              ? "bg-green-100"
                              : module.status === "in-progress"
                                ? "bg-primary/10"
                                : "bg-secondary"
                          }`}
                        >
                          <Icon
                            className={`h-6 w-6 ${
                              module.status === "completed"
                                ? "text-green-600"
                                : module.status === "in-progress"
                                  ? "text-primary"
                                  : "text-muted-foreground"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-lg">
                              {module.number}. {module.title}
                            </h3>
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded-full ${
                                module.status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : module.status === "in-progress"
                                    ? "bg-primary/10 text-primary"
                                    : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {module.status === "completed"
                                ? "Completed"
                                : module.status === "in-progress"
                                  ? "In Progress"
                                  : "Not Started"}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-4">{module.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {module.duration}
                            </span>
                            <Button variant={module.status === "completed" ? "outline" : "default"} size="sm" asChild>
                              <Link href={`/accelerators/${params.acceleratorId}/modules/${module.id}`}>
                                {module.status === "completed"
                                  ? "Review"
                                  : module.status === "in-progress"
                                    ? "Continue"
                                    : "Start"}
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Completion</span>
                  <span className="font-medium">{accelerator.progress}%</span>
                </div>
                <Progress value={accelerator.progress} className="h-2" />

                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="bg-secondary/30 p-3 rounded-lg text-center">
                    <div className="font-bold text-xl">{completedModules}</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                  <div className="bg-secondary/30 p-3 rounded-lg text-center">
                    <div className="font-bold text-xl">{inProgressModules}</div>
                    <div className="text-xs text-muted-foreground">In Progress</div>
                  </div>
                  <div className="bg-secondary/30 p-3 rounded-lg text-center">
                    <div className="font-bold text-xl">
                      {accelerator.modules.length - completedModules - inProgressModules}
                    </div>
                    <div className="text-xs text-muted-foreground">Remaining</div>
                  </div>
                  <div className="bg-secondary/30 p-3 rounded-lg text-center">
                    <div className="font-bold text-xl">{accelerator.duration}</div>
                    <div className="text-xs text-muted-foreground">Total Time</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link
                  href={`/accelerators/${params.acceleratorId}/modules/${
                    accelerator.modules.find((m) => m.status === "in-progress")?.id ||
                    accelerator.modules.find((m) => m.status === "not-started")?.id ||
                    accelerator.modules[0].id
                  }`}
                >
                  {accelerator.progress > 0 ? "Continue Learning" : "Start Learning"}
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {accelerator.prerequisites && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {accelerator.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{prerequisite}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {accelerator.learningOutcomes && (
            <Card>
              <CardHeader>
                <CardTitle>Learning Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {accelerator.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

