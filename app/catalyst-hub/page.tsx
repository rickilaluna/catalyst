import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Award, Sparkles, ArrowRight, CheckCircle2, BarChart } from "lucide-react"

export default function CatalystHubPage() {
  const learningPaths = [
    {
      id: "introduction",
      title: "Introduction to AI in UX Design",
      description: "Learn the fundamentals of AI and how it's transforming UX design",
      level: "Beginner",
      modules: 5,
      progress: 0,
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: "design-builder",
      title: "From Designer to Design Builder",
      description: "Learn to use AI tools to transition from design to implementation",
      level: "Intermediate",
      modules: 7,
      progress: 25,
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      id: "analysis-iteration",
      title: "AI for UX Analysis & Iteration",
      description: "Master advanced AI techniques for user testing and design optimization",
      level: "Advanced",
      modules: 9,
      progress: 0,
      image: "/placeholder.svg?height=200&width=350",
    },
  ]

  const modules = [
    {
      id: "design-basics",
      title: "Understanding Design Basics & Challenges",
      description: "Foundation concepts in design thinking and problem-solving",
      completionStatus: "completed",
      image: "/placeholder.svg?height=180&width=300",
    },
    {
      id: "user-needs",
      title: "User Needs Assessment & Research",
      description: "Techniques for understanding user needs with AI assistance",
      completionStatus: "in-progress",
      image: "/placeholder.svg?height=180&width=300",
    },
    {
      id: "feature-requirements",
      title: "Feature Requirements & Prioritization",
      description: "Using AI to analyze and prioritize feature requirements",
      completionStatus: "not-started",
      image: "/placeholder.svg?height=180&width=300",
    },
    {
      id: "concept-generation",
      title: "Concept Generation & Ideation",
      description: "AI-powered brainstorming and concept development",
      completionStatus: "not-started",
      image: "/placeholder.svg?height=180&width=300",
      subModules: [
        {
          id: "ai-assisted-ideation",
          title: "Introduction to AI-Assisted Ideation",
          description: "Learn how to leverage AI tools to enhance your ideation process",
          completionStatus: "not-started",
          image: "/placeholder.svg?height=180&width=300",
        },
        {
          id: "generating-design-concepts",
          title: "Generating Design Concepts with AI",
          description: "Master practical techniques for generating and refining design concepts using AI tools",
          completionStatus: "not-started",
          image: "/placeholder.svg?height=180&width=300",
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Learning Hub</h1>
          <p className="text-muted-foreground">Your personalized AI-assisted UX design learning center</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button asChild>
            <Link href="/profile">View Progress</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="bg-card shadow-sm">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <BookOpen className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-medium mb-1">Learning Paths</h3>
            <p className="text-2xl font-bold">3</p>
          </CardContent>
        </Card>
        <Card className="bg-card shadow-sm">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-medium mb-1">Modules Completed</h3>
            <p className="text-2xl font-bold">1/8</p>
          </CardContent>
        </Card>
        <Card className="bg-card shadow-sm">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Clock className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-medium mb-1">Learning Hours</h3>
            <p className="text-2xl font-bold">4.5</p>
          </CardContent>
        </Card>
        <Card className="bg-card shadow-sm">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <BarChart className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-medium mb-1">Current Streak</h3>
            <p className="text-2xl font-bold">2 days</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="learning-paths" className="w-full mb-12">
        <TabsList className="mb-6">
          <TabsTrigger value="learning-paths">Learning Paths</TabsTrigger>
          <TabsTrigger value="modules">Modules</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
        </TabsList>

        <TabsContent value="learning-paths">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningPaths.map((path) => (
              <Card key={path.id} className="overflow-hidden">
                <div className="relative aspect-video">
                  <img src={path.image || "/placeholder.svg"} alt={path.title} className="object-cover w-full h-full" />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        path.level === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : path.level === "Intermediate"
                            ? "bg-blue-100 text-blue-800"
                            : path.level === "Advanced"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {path.level}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{path.title}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">{path.progress}% complete</span>
                      <span className="text-muted-foreground">{path.modules} modules</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div className="h-2 bg-primary rounded-full" style={{ width: `${path.progress}%` }}></div>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href={`/accelerators/${path.id}`}>
                      {path.progress > 0 ? "Continue" : "Start Learning"} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="modules">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <Card key={module.id} className="overflow-hidden">
                <div className="flex flex-col">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img
                        src={module.image || "/placeholder.svg"}
                        alt={module.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-semibold text-lg">{module.title}</h3>
                        <div
                          className={`w-3 h-3 rounded-full ${
                            module.completionStatus === "completed"
                              ? "bg-green-500"
                              : module.completionStatus === "in-progress"
                                ? "bg-amber-500"
                                : "bg-gray-300"
                          }`}
                        ></div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{module.description}</p>
                      <Button
                        variant={module.completionStatus === "completed" ? "outline" : "default"}
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <Link href={`/modules/${module.id}`}>
                          {module.completionStatus === "completed"
                            ? "Review Module"
                            : module.completionStatus === "in-progress"
                              ? "Continue Module"
                              : "Start Module"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  {module.subModules && (
                    <div className="border-t p-4">
                      <h4 className="font-medium text-sm mb-3">Module Contents:</h4>
                      <div className="space-y-3">
                        {module.subModules.map((subModule) => (
                          <div key={subModule.id} className="flex items-center justify-between bg-secondary/20 p-3 rounded-lg">
                            <div>
                              <h5 className="font-medium text-sm">{subModule.title}</h5>
                              <p className="text-xs text-muted-foreground">{subModule.description}</p>
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                              <Link href={`/modules/${subModule.id}`}>
                                View <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recommended">
          <Card className="p-6 border-dashed">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-primary" />
                Recommended for you
              </CardTitle>
              <CardDescription>
                Based on your progress and interests, we recommend exploring these areas:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Complete "User Needs Assessment & Research"</h3>
                    <p className="text-muted-foreground text-sm">
                      Finish the module you've started to maintain your learning momentum.
                    </p>
                    <Button variant="link" className="p-0 mt-1 h-auto" asChild>
                      <Link href="/modules/user-needs">
                        Continue Module <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Try the AI Playground</h3>
                    <p className="text-muted-foreground text-sm">
                      Put your knowledge into practice with hands-on experimentation.
                    </p>
                    <Button variant="link" className="p-0 mt-1 h-auto" asChild>
                      <Link href="/playground">
                        Explore Playground <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
        <div className="bg-secondary/30 p-6 rounded-lg border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Explore Trails</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Follow structured learning paths to master AI-assisted UX design
              </p>
              <Button variant="outline" asChild size="sm">
                <Link href="/trails">Browse Trails</Link>
              </Button>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Try the AI Playground</h3>
              <p className="text-muted-foreground text-sm mb-4">Experiment with AI tools in a sandbox environment</p>
              <Button variant="outline" asChild size="sm">
                <Link href="/playground">Open Playground</Link>
              </Button>
            </div>

            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Join the Community</h3>
              <p className="text-muted-foreground text-sm mb-4">Connect with other UX designers learning AI tools</p>
              <Button variant="outline" asChild size="sm">
                <Link href="/community">Explore Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

