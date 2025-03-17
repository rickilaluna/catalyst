"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2, BookOpen, Code, Lightbulb, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"

// Message type
type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

// Step type for onboarding flow
type OnboardingStep = {
  id: string
  message: string
  options?: {
    text: string
    value: string
    icon?: React.ReactNode
  }[]
}

// Onboarding steps
const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: "welcome",
    message: "👋 Welcome to UX Catalyst! I'm Scout, your AI companion, here to help you make the most of our platform. What brings you here today?",
    options: [
      { 
        text: "I want to learn AI-UX design", 
        value: "learn",
        icon: <BookOpen className="h-4 w-4" />
      },
      { 
        text: "I need to build AI-powered designs", 
        value: "build",
        icon: <Code className="h-4 w-4" />
      },
      { 
        text: "Just exploring what's possible", 
        value: "explore",
        icon: <Lightbulb className="h-4 w-4" />
      },
      { 
        text: "I'm an experienced designer", 
        value: "experienced",
        icon: <Rocket className="h-4 w-4" />
      }
    ]
  }
]

// Response mapping based on user selection
const RESPONSE_MAP: Record<string, string> = {
  "learn": "That's great! Our learning accelerators are designed to take you from AI-curious to AI-proficient. I recommend starting with our 'Introduction to AI in UX Design' accelerator, which covers the fundamentals. Would you like me to direct you there?",
  "build": "Perfect! Our 'From Designer to Design Builder' accelerator will help you bridge the gap between design and implementation using AI tools. It includes practical exercises on using AI for code generation, prototyping, and design-to-code workflows.",
  "explore": "Exploration is a great way to start! I suggest checking out our AI Playground where you can experiment with different AI tools and see how they can enhance your design process. The Playground includes examples of AI-generated design components, UX copy, and user flows.",
  "experienced": "Welcome! For experienced designers, I recommend our advanced 'AI for UX Analysis & Iteration' accelerator. It covers sophisticated techniques like AI-powered usability testing, generating user personas, and optimizing user flows with machine learning."
}

export function OnboardingChat() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false)

  // Check if user has seen onboarding
  useEffect(() => {
    const onboardingSeen = localStorage.getItem("onboardingSeen")
    if (!onboardingSeen) {
      // Show onboarding dialog after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      setHasSeenOnboarding(true)
    }
  }, [])

  // Initialize the first message when dialog opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: Message = {
        id: "initial",
        role: "assistant",
        content: ONBOARDING_STEPS[0].message
      }
      setMessages([initialMessage])
    }
  }, [isOpen, messages.length])

  // Handle option selection
  const handleOptionSelect = (value: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: ONBOARDING_STEPS[currentStep].options?.find(o => o.value === value)?.text || value
    }
    
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)
    
    // Simulate delay
    setTimeout(() => {
      // Add assistant response
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: RESPONSE_MAP[value] || "I'm not sure how to help with that specifically, but you can explore our accelerators to find what you need."
      }
      
      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
      
      // Add final message with CTA
      setTimeout(() => {
        const finalMessage: Message = {
          id: (Date.now() + 2).toString(),
          role: "assistant",
          content: "Ready to start your AI-UX journey? You can always access help by clicking the chat icon in the bottom right corner."
        }
        
        setMessages(prev => [...prev, finalMessage])
      }, 1000)
    }, 1000)
  }

  // Handle closing the dialog
  const handleClose = () => {
    localStorage.setItem("onboardingSeen", "true")
    setHasSeenOnboarding(true)
    setIsOpen(false)
  }

  // Skip to a specific page based on selection
  const handleNavigate = (path: string) => {
    handleClose()
    router.push(path)
  }

  if (hasSeenOnboarding) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Welcome to UX Catalyst</DialogTitle>
        </DialogHeader>
        
        {/* Messages container */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-[40vh] pr-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex flex-col",
                message.role === "user" ? "items-end" : "items-start"
              )}
            >
              <div
                className={cn(
                  "rounded-lg px-4 py-2 max-w-[85%]",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
        
        {/* Options for current step */}
        {currentStep === 0 && messages.length === 1 && (
          <div className="grid grid-cols-2 gap-3 mb-4">
            {ONBOARDING_STEPS[currentStep].options?.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                className="h-auto py-3 px-4 flex items-center justify-start gap-2 text-left whitespace-normal"
                onClick={() => handleOptionSelect(option.value)}
              >
                {option.icon}
                <span>{option.text}</span>
              </Button>
            ))}
          </div>
        )}
        
        {/* Action buttons */}
        {messages.length >= 3 && (
          <div className="flex flex-col gap-2 mb-2">
            <Button onClick={() => handleNavigate("/accelerators")}>
              Explore Accelerators
            </Button>
            <Button variant="outline" onClick={handleClose}>
              Continue to Homepage
            </Button>
          </div>
        )}
        
        <DialogFooter className="text-xs text-muted-foreground">
          You can always access help via the chat icon in the bottom corner
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}