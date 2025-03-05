"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, ArrowLeft, CheckCircle2, BookOpen, Code, Lightbulb, Palette, Zap, Clock } from "lucide-react"
import { useRouter } from "next/navigation"

export default function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      setLoading(true)
      // Simulate API call
      setTimeout(() => {
        setLoading(false)
        router.push("/learning-hub")
      }, 1500)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Set up your learning profile</h1>
            <div className="text-sm text-muted-foreground">Step {step} of 3</div>
          </div>

          <div className="w-full bg-secondary h-2 rounded-full mb-8">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>What's your experience level?</CardTitle>
              <CardDescription>This helps us personalize your learning journey</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="beginner" className="space-y-4">
                <div className="flex items-center space-x-3 border p-4 rounded-lg hover:bg-secondary/30 cursor-pointer">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner" className="flex-1 cursor-pointer">
                    <div className="font-medium">Beginner</div>
                    <div className="text-sm text-muted-foreground">I'm new to UX design and AI tools</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border p-4 rounded-lg hover:bg-secondary/30 cursor-pointer">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate" className="flex-1 cursor-pointer">
                    <div className="font-medium">Intermediate</div>
                    <div className="text-sm text-muted-foreground">
                      I have some UX design experience but I'm new to AI tools
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border p-4 rounded-lg hover:bg-secondary/30 cursor-pointer">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced" className="flex-1 cursor-pointer">
                    <div className="font-medium">Advanced</div>
                    <div className="text-sm text-muted-foreground">
                      I'm an experienced UX designer looking to integrate AI into my workflow
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" onClick={() => router.push("/")}>
                Skip for now
              </Button>
              <Button onClick={handleNext}>
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>What are your learning goals?</CardTitle>
              <CardDescription>Select all that apply to customize your learning path</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border p-4 rounded-lg hover:bg-secondary/30 cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="goal1" />
                    <div className="flex-1">
                      <Label htmlFor="goal1" className="flex items-center cursor-pointer">
                        <Zap className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">Improve Productivity</span>
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        Learn how to use AI to speed up my design workflow
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border p-4 rounded-lg hover:bg-secondary/30 cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="goal2" />
                    <div className="flex-1">
                      <Label htmlFor="goal2" className="flex items-center cursor-pointer">
                        <Palette className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">Enhance Creativity</span>
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        Use AI to generate new design ideas and concepts
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border p-4 rounded-lg hover:bg-secondary/30 cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="goal3" />
                    <div className="flex-1">
                      <Label htmlFor="goal3" className="flex items-center cursor-pointer">
                        <Code className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">Design to Code</span>
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">Convert designs into code with AI assistance</p>
                    </div>
                  </div>
                </div>

                <div className="border p-4 rounded-lg hover:bg-secondary/30 cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="goal4" />
                    <div className="flex-1">
                      <Label htmlFor="goal4" className="flex items-center cursor-pointer">
                        <Lightbulb className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">User Testing</span>
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        Use AI for usability testing and design optimization
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border p-4 rounded-lg hover:bg-secondary/30 cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="goal5" />
                    <div className="flex-1">
                      <Label htmlFor="goal5" className="flex items-center cursor-pointer">
                        <BookOpen className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">Career Growth</span>
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">Add AI skills to my resume and portfolio</p>
                    </div>
                  </div>
                </div>

                <div className="border p-4 rounded-lg hover:bg-secondary/30 cursor-pointer">
                  <div className="flex items-start space-x-3">
                    <Checkbox id="goal6" />
                    <div className="flex-1">
                      <Label htmlFor="goal6" className="flex items-center cursor-pointer">
                        <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                        <span className="font-medium">Certification</span>
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">Earn a certificate in AI-assisted UX design</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button onClick={handleNext}>
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Select learning trails to get started</CardTitle>
              <CardDescription>Based on your profile, we recommend these learning paths</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border p-4 rounded-lg hover:bg-secondary/30 cursor-pointer">
                  <div className="flex items-start">
                    <Checkbox id="trail1" defaultChecked />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="trail1" className="font-medium cursor-pointer">
                          Introduction to AI in UX Design
                        </Label>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Beginner</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Learn the fundamentals of AI and how it's transforming UX design
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground mt-2">
                        <span className="flex items-center mr-3">
                          <BookOpen className="h-3 w-3 mr-1" /> 5 modules
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> 4 hours
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border p-4 rounded-lg hover:bg-secondary/30 cursor-pointer">
                  <div className="flex items-start">
                    <Checkbox id="trail2" />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="trail2" className="font-medium cursor-pointer">
                          From Designer to Design Builder
                        </Label>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Intermediate</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Learn to use AI tools to transition from design to implementation
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground mt-2">
                        <span className="flex items-center mr-3">
                          <BookOpen className="h-3 w-3 mr-1" /> 7 modules
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> 6 hours
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border p-4 rounded-lg hover:bg-secondary/30 cursor-pointer">
                  <div className="flex items-start">
                    <Checkbox id="trail3" />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="trail3" className="font-medium cursor-pointer">
                          AI for UX Analysis & Iteration
                        </Label>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Advanced</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Master advanced AI techniques for user testing and design optimization
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground mt-2">
                        <span className="flex items-center mr-3">
                          <BookOpen className="h-3 w-3 mr-1" /> 9 modules
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> 8 hours
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              <Button onClick={handleNext} disabled={loading}>
                {loading ? "Setting up your profile..." : "Complete Setup"}
                {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}

