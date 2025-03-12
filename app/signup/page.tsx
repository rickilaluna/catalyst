"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Mail, ArrowRight, CheckCircle2, Sparkles, BookOpen, Award } from "lucide-react"
import { useRouter } from "next/navigation"
import { useUser } from "@/app/contexts/UserContext"

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { login } = useUser()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Log in the user with the form data
      login({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      })
      setIsLoading(false)
      router.push("/onboarding")
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-3">Join Catalyst</h1>
            <p className="text-muted-foreground">
              Create your account and start your journey to mastering AI-assisted UX design
            </p>
          </div>

          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="social">Social Login</TabsTrigger>
            </TabsList>

            <TabsContent value="email">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">Sign up with email</CardTitle>
                  <CardDescription>Enter your information to create an account</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignup}>
                    <div className="grid gap-5">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First name</Label>
                          <Input 
                            id="firstName" 
                            placeholder="Enter your first name" 
                            required 
                            value={formData.firstName}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last name</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Enter your last name" 
                            required 
                            value={formData.lastName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Enter your email" 
                          required 
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password">Password</Label>
                          <Link href="#" className="text-xs text-primary hover:underline">
                            Password requirements
                          </Link>
                        </div>
                        <Input 
                          id="password" 
                          type="password" 
                          placeholder="Create a password" 
                          required 
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="text-sm font-normal">
                          I agree to the{" "}
                          <Link href="/terms" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="newsletter" defaultChecked />
                        <Label htmlFor="newsletter" className="text-sm font-normal">
                          Send me updates about new features and learning content
                        </Label>
                      </div>

                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Creating account..." : "Create account"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-4">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary font-medium hover:underline">
                      Log in
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="social">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">Sign up with social account</CardTitle>
                  <CardDescription>Choose your preferred social login method</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <Button variant="outline" className="w-full" onClick={() => setIsLoading(true)}>
                      <Github className="mr-2 h-4 w-4" />
                      Continue with GitHub
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => setIsLoading(true)}>
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                        <path d="M1 1h22v22H1z" fill="none" />
                      </svg>
                      Continue with Google
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => setIsLoading(true)}>
                      <Mail className="mr-2 h-4 w-4" />
                      Continue with Email
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-4">
                  <p className="text-sm text-muted-foreground">
                    By continuing, you agree to our{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Why join Catalyst?</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Personalized Learning</h3>
                  <p className="text-muted-foreground text-sm">
                    AI-powered assessment to create a customized learning path based on your skills and goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Practical Skills</h3>
                  <p className="text-muted-foreground text-sm">
                    Hands-on exercises and real-world projects to apply AI-assisted UX design techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Industry Recognition</h3>
                  <p className="text-muted-foreground text-sm">
                    Earn certificates and build a portfolio of AI-assisted UX design projects to showcase your skills.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Community Access</h3>
                  <p className="text-muted-foreground text-sm">
                    Join a community of UX designers learning to leverage AI in their workflow.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="User avatar"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">UX Designer at Figma</p>
                  </div>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm italic">
                "Catalyst helped me integrate AI into my UX workflow, making me more efficient and creative. The
                hands-on approach made learning practical and immediately applicable."
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/trails" className="text-primary flex items-center text-sm hover:underline">
              Preview learning trails before signing up <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

