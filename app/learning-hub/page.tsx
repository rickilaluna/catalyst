import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Award, BarChart, ChevronRight, BookMarked, Bookmark } from "lucide-react"

export default function LearningHubPage() {
  const inProgressTrails = [
    {
      id: "introduction",
      title: "Introduction to AI in UX Design",
      progress: 60,
      lastAccessed: "2 days ago",
      image: "/placeholder.svg?height=100&width=180",
    },
    {
      id: "design-builder",
      title: "From Designer to Design Builder",
      progress: 25,
      lastAccessed: "1 week ago",
      image: "/placeholder.svg?height=100&width=180",
    },
  ]

  const recommendedTrails = [
    {
      id: "analysis-iteration",
      title: "AI for UX Analysis & Iteration",
      level: "Advanced",
      duration: "8 hours",
      image: "/placeholder.svg?height=100&width=180",
    },
    {
      id: "generative-design",
      title: "Generative Design with AI",
      level: "Intermediate",
      duration: "5 hours",
      image: "/placeholder.svg?height=100&width=180",
    },
    {
      id: "ai-ethics",
      title: "Ethics in AI-Assisted Design",
      level: "All Levels",
      duration: "3 hours",
      image: "/placeholder.svg?height=100&width=180",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Learning Hub</h1>
          <p className="text-muted-foreground">Track your progress and continue your AI-assisted UX design journey</p>
        </div>
        <Button asChild>
          <Link href="/trails">Explore All Trails</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-card border rounded-lg p-6 flex flex-col items-center text-center">
          <BookOpen className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-medium mb-1">Trails Started</h3>
          <p className="text-2xl font-bold">2</p>
        </div>
        <div className="bg-card border rounded-lg p-6 flex flex-col items-center text-center">
          <Clock className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-medium mb-1">Learning Hours</h3>
          <p className="text-2xl font-bold">8.5</p>
        </div>
        <div className="bg-card border rounded-lg p-6 flex flex-col items-center text-center">
          <Award className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-medium mb-1">Modules Completed</h3>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="bg-card border rounded-lg p-6 flex flex-col items-center text-center">
          <BarChart className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-medium mb-1">Current Streak</h3>
          <p className="text-2xl font-bold">3 days</p>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">In Progress</h2>
          <Link href="/profile/trails" className="text-primary text-sm flex items-center">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inProgressTrails.map((trail) => (
            <div key={trail.id} className="border rounded-lg overflow-hidden bg-card flex">
              <img src={trail.image || "/placeholder.svg"} alt={trail.title} className="w-24 h-24 object-cover" />
              <div className="p-4 flex-1">
                <h3 className="font-semibold mb-2">{trail.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Last accessed {trail.lastAccessed}</span>
                </div>
                <div className="mb-3">
                  <div className="h-2 bg-secondary rounded-full">
                    <div className="h-2 bg-primary rounded-full" style={{ width: `${trail.progress}%` }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>{trail.progress}% complete</span>
                    <span>Module {Math.ceil(trail.progress / 20)} of 5</span>
                  </div>
                </div>
                <Button size="sm" asChild>
                  <Link href={`/trails/${trail.id}`}>Continue</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Recommended For You</h2>
          <Link href="/trails" className="text-primary text-sm flex items-center">
            View all <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedTrails.map((trail) => (
            <div key={trail.id} className="border rounded-lg overflow-hidden bg-card">
              <div className="relative">
                <img src={trail.image || "/placeholder.svg"} alt={trail.title} className="w-full h-32 object-cover" />
                <button className="absolute top-2 right-2 bg-background/80 p-1.5 rounded-full">
                  <Bookmark className="h-4 w-4" />
                </button>
                <div className="absolute top-2 left-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
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
              <div className="p-4">
                <h3 className="font-semibold mb-2">{trail.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{trail.duration}</span>
                  <BookMarked className="h-3 w-3 ml-3 mr-1" />
                  <span>5 modules</span>
                </div>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <Link href={`/trails/${trail.id}`}>Start Trail</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

