"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Video, FileText, CheckCircle2, Code2 } from "lucide-react"
import { useState } from "react"

export default function IntroductionPage() {
  const [progress, setProgress] = useState(0)
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [concepts, setConcepts] = useState([
    { id: "workflow", text: "Design-to-Code Workflow", checked: false },
    { id: "ai-role", text: "Role of AI in Design Implementation", checked: false },
    { id: "best-practices", text: "Best Practices for Design Handoff", checked: false },
  ])

  const handleConceptCheck = (id: string) => {
    setConcepts(concepts.map(concept => 
      concept.id === id ? { ...concept, checked: !concept.checked } : concept
    ))
    // Update progress based on checked concepts
    const newProgress = (concepts.filter(c => c.checked).length / concepts.length) * 100
    setProgress(newProgress)
  }

  const handleQuizAnswer = (answer: string) => {
    setQuizAnswer(answer)
    setShowFeedback(true)
    // Update progress when quiz is answered
    setProgress(prev => Math.min(prev + 33, 100))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/accelerators/design-builder/from-design-to-code">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Module
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Introduction to Design-to-Code</h1>
          <p className="text-xl text-muted-foreground">
            Learn the fundamentals of converting designs into code using AI
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="grid gap-6">
          {/* Video Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                <CardTitle>Video Tutorial</CardTitle>
              </div>
              <CardDescription>Watch this video to understand the design-to-code workflow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Video className="h-8 w-8" />
                  </div>
                </div>
                <p className="text-muted-foreground">Click to play video</p>
              </div>
            </CardContent>
          </Card>

          {/* Key Concepts with Interactive Checklist */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <CardTitle>Key Concepts</CardTitle>
              </div>
              <CardDescription>Track your understanding of key concepts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {concepts.map((concept) => (
                  <div key={concept.id} className="flex items-start space-x-4">
                    <Checkbox
                      id={concept.id}
                      checked={concept.checked}
                      onCheckedChange={() => handleConceptCheck(concept.id)}
                    />
                    <div className="space-y-1">
                      <label
                        htmlFor={concept.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {concept.text}
                      </label>
                      {concept.checked && (
                        <div className="text-sm text-muted-foreground">
                          {concept.id === "workflow" && (
                            <p>You understand the basic workflow of converting designs to code</p>
                          )}
                          {concept.id === "ai-role" && (
                            <p>You know how AI can assist in the design-to-code process</p>
                          )}
                          {concept.id === "best-practices" && (
                            <p>You're familiar with best practices for design handoff</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interactive Code Example */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                <CardTitle>Interactive Example</CardTitle>
              </div>
              <CardDescription>See how AI converts a design to code</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Design Preview</span>
                    <Button variant="outline" size="sm">View Design</Button>
                  </div>
                  <div className="h-32 bg-background border rounded-md flex items-center justify-center">
                    <p className="text-muted-foreground">Design Preview</p>
                  </div>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Generated Code</span>
                    <Button variant="outline" size="sm">Copy Code</Button>
                  </div>
                  <pre className="p-4 bg-background rounded-md overflow-x-auto">
                    <code>{`<div className="card">
  <div className="card-header">
    <h2>Design Preview</h2>
  </div>
  <div className="card-content">
    <p>This is an example of AI-generated code</p>
  </div>
</div>`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Knowledge Check */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <CardTitle>Knowledge Check</CardTitle>
              </div>
              <CardDescription>Test your understanding of the key concepts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-medium mb-4">What is the primary role of AI in design-to-code conversion?</p>
                  <div className="space-y-3">
                    {[
                      "To replace human developers completely",
                      "To automate repetitive tasks and streamline the process",
                      "To create designs from scratch",
                      "To replace design tools"
                    ].map((answer, index) => (
                      <label
                        key={index}
                        className={`flex items-center space-x-2 p-3 rounded-md cursor-pointer transition-colors ${
                          quizAnswer === answer
                            ? answer === "To automate repetitive tasks and streamline the process"
                              ? "bg-green-100 dark:bg-green-900"
                              : "bg-red-100 dark:bg-red-900"
                            : "hover:bg-muted"
                        }`}
                      >
                        <input
                          type="radio"
                          name="q1"
                          className="form-radio"
                          checked={quizAnswer === answer}
                          onChange={() => handleQuizAnswer(answer)}
                          disabled={!!quizAnswer}
                        />
                        <span>{answer}</span>
                      </label>
                    ))}
                  </div>
                  {showFeedback && (
                    <div className={`mt-4 p-3 rounded-md ${
                      quizAnswer === "To automate repetitive tasks and streamline the process"
                        ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                        : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                    }`}>
                      {quizAnswer === "To automate repetitive tasks and streamline the process"
                        ? "Correct! AI is meant to assist and enhance human capabilities, not replace them."
                        : "Not quite. AI tools are designed to assist and enhance human capabilities, not replace them."}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/accelerators/design-builder/from-design-to-code">
                Back to Module
              </Link>
            </Button>
            <Button asChild>
              <Link href="/accelerators/design-builder/from-design-to-code/ai-tools">
                Next Section <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 