import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Filter, ArrowRight } from "lucide-react"

export default function TrailsPage() {
  const trails = [
    {
      id: "introduction",
      title: "Introduction to AI in UX Design",
      description: "Learn the fundamentals of AI and how it's transforming UX design",
      level: "Beginner",
      duration: "4 hours",
      modules: 5,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "design-builder",
      title: "From Designer to Design Builder",
      description: "Learn to use AI tools to transition from design to implementation",
      level: "Intermediate",
      duration: "6 hours",
      modules: 7,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "analysis-iteration",
      title: "AI for UX Analysis & Iteration",
      description: "Master advanced AI techniques for user testing and design optimization",
      level: "Advanced",
      duration: "8 hours",
      modules: 9,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "generative-design",
      title: "Generative Design with AI",
      description: "Explore how AI can generate design variations and creative solutions",
      level: "Intermediate",
      duration: "5 hours",
      modules: 6,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "ai-ethics",
      title: "Ethics in AI-Assisted Design",
      description: "Understand the ethical considerations when using AI in design",
      level: "All Levels",
      duration: "3 hours",
      modules: 4,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "ai-collaboration",
      title: "Collaborating with AI",
      description: "Learn effective ways to collaborate with AI tools in design teams",
      level: "Intermediate",
      duration: "4 hours",
      modules: 5,
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Learning Trails</h1>
          <p className="text-muted-foreground">Explore our curated learning paths to master AI-assisted UX design</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search trails..."
              className="pl-10 pr-4 py-2 w-full md:w-64 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trails.map((trail) => (
          <div key={trail.id} className="border rounded-lg overflow-hidden bg-card shadow-sm">
            <div className="aspect-video relative">
              <img src={trail.image || "/placeholder.svg"} alt={trail.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    trail.level === "Beginner"
                      ? "bg-green-100 text-green-800"
                      : trail.level === "Intermediate"
                        ? "bg-blue-100 text-blue-800"
                        : trail.level === "Advanced"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {trail.level}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-xl mb-2">{trail.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{trail.description}</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <span>{trail.duration}</span>
                <span>{trail.modules} modules</span>
              </div>
              <Button className="w-full" asChild>
                <Link href={`/trails/${trail.id}`}>
                  Start Trail <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

