import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, CheckCircle2, Sparkles, Lightbulb, Code, Palette } from "lucide-react"

export default function GettingStartedPage() {
  const steps = [
    {
      id: 1,
      title: "Complete Your Profile",
      description: "Tell us about your experience level and learning goals",
      icon: <CheckCircle2 className="h-6 w-6 text-primary" />,
      status: "completed",
      link: "/profile",
      linkText: "View Profile",
    },
    {
      id: 2,
      title: "Join a Learning Path",
      description: "Start with a structured learning path that fits your needs",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      status: "in-progress",
      link: "/trails",
      linkText: "Browse Paths",
    },
    {
      id: 3,
      title: "Experiment in the Playground",
      description: "Try AI tools in a sandbox environment",
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      status: "not-started",
      link: "/playground",
      linkText: "Open Playground",
    },
    {
      id: 4,
      title: "Join the Community",
      description: "Connect with other designers learning AI tools",
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      status: "not-started",
      link: "/community",
      linkText: "Explore Community",
    },
  ]

  const quickLinks = [
    {
      title: "Introduction to AI in UX Design",
      description: "Start with the fundamentals",
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      link: "/trails/introduction",
    },
    {
      title: "Design Generator",
      description: "Generate design ideas with AI",
      icon: <Palette className="h-5 w-5 text-primary" />,
      link: "/playground?tab=design-generator",
    },
    {
      title: "Code Generator",
      description: "Convert designs to code with AI",
      icon: <Code className="h-5 w-5 text-primary" />,
      link: "/playground?tab=code-generator",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Getting Started with Catalyst</h1>
        <p className="text-muted-foreground">Follow these steps to begin your AI-assisted UX design journey</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {steps.map((step) => (
              <Card
                key={step.id}
                className={`border ${
                  step.status === "completed"
                    ? "border-green-200 bg-green-50"
                    : step.status === "in-progress"
                      ? "border-primary/20 bg-primary/5"
                      : "border-gray-200"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div
                      className={`p-2 rounded-full mr-4 ${
                        step.status === "completed"
                          ? "bg-green-100"
                          : step.status === "in-progress"
                            ? "bg-primary/10"
                            : "bg-gray-100"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-lg">
                          Step {step.id}: {step.title}
                        </h3>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            step.status === "completed"
                              ? "bg-green-100 text-green-800"
                              : step.status === "in-progress"
                                ? "bg-primary/10 text-primary"
                                : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {step.status === "completed"
                            ? "Completed"
                            : step.status === "in-progress"
                              ? "In Progress"
                              : "Not Started"}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <Button variant={step.status === "completed" ? "outline" : "default"} size="sm" asChild>
                        <Link href={step.link}>
                          {step.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">AI-Assisted UX Design</CardTitle>
                  <CardDescription>Learn how AI can enhance your design workflow</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Fundamentals of AI in design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>AI-powered design generation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Design-to-code workflows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>User testing with AI</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href="/trails">
                      Explore Learning Paths <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Practical Skills</CardTitle>
                  <CardDescription>Apply AI tools to real-world design scenarios</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>AI-assisted wireframing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Generative UI components</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Automated user flow optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>AI-powered project documentation</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link href="/playground">
                      Try the AI Playground <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
              <CardDescription>Popular resources to get you started</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.link}
                      className="flex items-start hover:bg-secondary/30 p-2 rounded-md transition-colors"
                    >
                      <div className="p-1.5 bg-primary/10 rounded-full mr-3">{link.icon}</div>
                      <div>
                        <h3 className="font-medium text-sm">{link.title}</h3>
                        <p className="text-xs text-muted-foreground">{link.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 ml-auto self-center text-muted-foreground" />
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Resources to support your learning journey</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href="/faq" className="flex items-start hover:bg-secondary/30 p-2 rounded-md transition-colors">
                <div className="p-1.5 bg-primary/10 rounded-full mr-3">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">Frequently Asked Questions</h3>
                  <p className="text-xs text-muted-foreground">Common questions about the platform</p>
                </div>
              </Link>
              <Link
                href="/community"
                className="flex items-start hover:bg-secondary/30 p-2 rounded-md transition-colors"
              >
                <div className="p-1.5 bg-primary/10 rounded-full mr-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">Community Forum</h3>
                  <p className="text-xs text-muted-foreground">Connect with other learners</p>
                </div>
              </Link>
              <Link href="/support" className="flex items-start hover:bg-secondary/30 p-2 rounded-md transition-colors">
                <div className="p-1.5 bg-primary/10 rounded-full mr-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">Support</h3>
                  <p className="text-xs text-muted-foreground">Get help from our team</p>
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

