import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, CheckCircle2, Download, Share2, ArrowRight, Sparkles, BookOpen, Lightbulb } from "lucide-react"

export default function CompletionPage({ params }: { params: { acceleratorId: string } }) {
  // This would come from a database in a real app
  const acceleratorData = {
    "design-builder": {
      title: "From Designer to Design Builder",
      description: "Learn to use AI tools to transition from design to implementation",
      modules: 6,
      skills: [
        "Design-to-code conversion",
        "AI-powered prototyping",
        "Component system development",
        "Concept exploration with AI",
        "Interaction design enhancement",
        "Design handoff optimization",
      ],
      nextRecommendations: [
        {
          id: "analysis-iteration",
          title: "AI for UX Analysis & Iteration",
          description: "Master advanced AI techniques for user testing and design optimization",
          level: "Advanced",
        },
      ],
    },
  }

  const accelerator = acceleratorData[params.acceleratorId as keyof typeof acceleratorData]

  if (!accelerator) {
    return <div>Accelerator not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
            <Award className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Congratulations!</h1>
          <p className="text-xl text-muted-foreground mb-6">You've completed the "{accelerator.title}" accelerator</p>
          <div className="flex justify-center">
            <div className="px-4 py-2 bg-primary/10 rounded-full text-primary font-medium flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              All {accelerator.modules} modules completed
            </div>
          </div>
        </div>

        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-2xl">Your Certificate</CardTitle>
            <CardDescription>You've earned a certificate for completing this accelerator</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg p-8 bg-white text-center">
              <div className="mb-6">
                <img src="/placeholder.svg?height=100&width=100" alt="Catalyst Logo" className="h-16 w-16 mx-auto" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Certificate of Completion</h2>
              <p className="text-lg mb-4">This certifies that</p>
              <p className="text-xl font-bold mb-4">Alex Johnson</p>
              <p className="text-lg mb-6">has successfully completed</p>
              <p className="text-xl font-bold mb-6">{accelerator.title}</p>
              <p className="text-lg mb-8">March 4, 2025</p>
              <div className="border-t pt-4">
                <p className="text-sm text-muted-foreground">Verify this certificate at catalyst.ai/verify/abc123</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center space-x-4">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Certificate
            </Button>
            <Button variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Share Achievement
            </Button>
          </CardFooter>
        </Card>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Skills You've Gained</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accelerator.skills.map((skill, index) => (
              <div key={index} className="flex items-center p-4 border rounded-lg bg-card">
                <CheckCircle2 className="h-5 w-5 text-primary mr-3" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What's Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accelerator.nextRecommendations.map((recommendation, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle>{recommendation.title}</CardTitle>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        recommendation.level === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : recommendation.level === "Intermediate"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {recommendation.level}
                    </span>
                  </div>
                  <CardDescription>{recommendation.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/accelerators/${recommendation.id}`}>
                      Start Accelerator <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}

            <Card>
              <CardHeader>
                <CardTitle>Apply Your Skills</CardTitle>
                <CardDescription>Put your new skills to use in the AI Playground</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Design-to-Code Generator</h3>
                    <p className="text-xs text-muted-foreground">Convert your designs to code with AI</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">Interaction Pattern Generator</h3>
                    <p className="text-xs text-muted-foreground">Create interactive patterns with AI</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/playground">Go to Playground</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="flex justify-center">
          <Button size="lg" asChild>
            <Link href="/catalyst-hub">
              <BookOpen className="mr-2 h-5 w-5" />
              Return to Catalyst Hub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

