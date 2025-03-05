"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, BookOpen, Users, Award } from "lucide-react"

export default function Home() {
  const router = useRouter()

  // This would normally check for authentication
  // const isLoggedIn = false;

  // Uncomment this to enable auto-redirect when implementing authentication
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     router.push('/catalyst-hub');
  //   }
  // }, [isLoggedIn, router]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Master AI-Assisted UX Design</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Learn how to leverage AI to enhance your design workflow, create better user experiences, and stay ahead in
            the evolving UX landscape.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/accelerators">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/playground">Try AI Playground</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Learn AI-Assisted UX Design?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Boost Productivity</h3>
              <p className="text-muted-foreground">
                Learn how AI tools can automate repetitive tasks and help you focus on creative problem-solving.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Structured Learning</h3>
              <p className="text-muted-foreground">
                Follow our curated learning accelerators with hands-on exercises and real-world applications.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-muted-foreground">
                Connect with fellow designers, share insights, and get feedback on your AI-assisted projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Accelerators</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the path that matches your experience level and learning goals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Beginner</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Introduction to AI in UX Design</h3>
              <p className="text-muted-foreground mb-4">
                Learn the fundamentals of AI and how it's transforming the UX design landscape.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>AI design fundamentals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Basic AI-assisted workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Introduction to generative design</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/accelerators/introduction">Start Trail</Link>
              </Button>
            </div>
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Intermediate
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">From Designer to Design Builder</h3>
              <p className="text-muted-foreground mb-4">
                Learn to use AI tools to transition from design to implementation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>AI-assisted code generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Prototyping with AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Design-to-code workflows</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/accelerators/design-builder">Start Trail</Link>
              </Button>
            </div>
            <div className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Advanced</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI for UX Analysis & Iteration</h3>
              <p className="text-muted-foreground mb-4">
                Master advanced AI techniques for user testing and design optimization.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Automated usability testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>AI-generated user personas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Optimizing user flows with AI</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/accelerators/analysis-iteration">Start Trail</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <Award className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Certified in AI-Assisted UX Design</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Complete our learning accelerators, showcase your projects, and earn a certification that demonstrates
              your AI-enhanced UX skills to employers.
            </p>
            <Button size="lg" asChild>
              <Link href="/signup">Create Free Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

