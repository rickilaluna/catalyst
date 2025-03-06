"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Code, Layout, Zap, Clock, CheckCircle2, BarChart } from "lucide-react"

export default function DesignBuilderPage() {
  const modules = [
    {
      id: "from-design-to-code",
      title: "From Design to Code",
      description: "Learn how to convert your designs into production-ready code using AI",
      duration: "2 hours",
      icon: Code,
      status: "not-started",
    },
    {
      id: "component-library",
      title: "Building a Component Library",
      description: "Create and maintain a scalable component library with AI assistance",
      duration: "1.5 hours",
      icon: Layout,
      status: "not-started",
    },
    {
      id: "ai-prototyping",
      title: "AI-Powered Prototyping",
      description: "Use AI to rapidly prototype and iterate on your designs",
      duration: "2.5 hours",
      icon: Zap,
      status: "not-started",
    },
  ]

  const completedModules = modules.filter(m => m.status === "completed").length
  const inProgressModules = modules.filter(m => m.status === "in-progress").length
  const progress = (completedModules / modules.length) * 100

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-accent to-background">
        <div className="absolute inset-0">
          <Image
            src="/images/design-builder/hero.jpg"
            alt="Design Builder Hero"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">Intermediate</span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-secondary/80 text-secondary-foreground flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                6 hours
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">From Designer to Design Builder</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Learn how to bridge the gap between design and development using AI tools. This accelerator will help you
              convert your designs into production-ready code and build scalable component libraries.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Modules</h2>
                <div className="text-sm text-muted-foreground">
                  {completedModules} of {modules.length} completed
                </div>
              </div>
              <Progress value={progress} className="h-2 mb-6" />

              <div className="space-y-4">
                {modules.map((module) => {
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
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="h-5 w-5 text-primary" />
                          <CardTitle>{module.title}</CardTitle>
                        </div>
                        <CardDescription>{module.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-muted-foreground">{module.duration}</span>
                          <span className="text-sm font-medium capitalize">{module.status}</span>
                        </div>
                        <Button className="w-full" asChild>
                          <Link href={`/accelerators/design-builder/${module.id}`}>
                            Start Module <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
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
                    <span className="font-medium">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />

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
                        {modules.length - completedModules - inProgressModules}
                      </div>
                      <div className="text-xs text-muted-foreground">Remaining</div>
                    </div>
                    <div className="bg-secondary/30 p-3 rounded-lg text-center">
                      <div className="font-bold text-xl">6 hours</div>
                      <div className="text-xs text-muted-foreground">Total Time</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 