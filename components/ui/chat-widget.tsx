"use client"

import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"
import { MessageCircle, X, Send, Zap, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

// Animation for welcome prompt
const fadeInAnimation = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
`

// Message type definition
type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

// Predefined suggestions for the chatbot
const SUGGESTIONS = [
  "How do I get started?",
  "AI tools for UX design?",
  "Learning accelerators",
  "AI for user research?",
]

// Initial welcome message from the assistant
const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content: "👋 Hi there! I'm Scout, your UX Catalyst companion. I can help you learn about AI-driven UX design, navigate the platform, or answer questions about our courses. What would you like to know?"
}

export function ChatWidget() {
  // State for the chat
  const [isOpen, setIsOpen] = useState(true) // Start with chat open
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isWelcomePromptVisible, setIsWelcomePromptVisible] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  // Auto-minimize chat after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false)
      setIsWelcomePromptVisible(false)
    }, 10000)
    
    return () => clearTimeout(timer)
  }, [])
  
  // Scroll to the bottom of the chat when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Simulated response function (to be replaced with actual AI integration)
  const getResponse = async (userMessage: string): Promise<string> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Simple response logic based on keywords
    const message = userMessage.toLowerCase()
    
    if (message.includes("get started") || message.includes("begin")) {
      return "To get started with UX Catalyst, I recommend checking out our Introduction to AI in UX Design accelerator. It covers the fundamentals and will help you understand how AI can enhance your design workflow. You can access it from the Accelerators page or directly through the homepage."
    } 
    else if (message.includes("tools") || message.includes("ai tools")) {
      return "We recommend several AI tools for UX designers:\n\n1. Midjourney or DALL-E for visual inspiration and mood boards\n2. ChatGPT or Claude for writing assistance and UX copy\n3. Figma with AI plugins for faster prototyping\n4. Uizard for converting sketches to wireframes\n\nYou can learn how to use these effectively in our Design Builder accelerator!"
    }
    else if (message.includes("accelerator") || message.includes("learning")) {
      return "We offer three main learning accelerators:\n\n1. Introduction to AI in UX Design (Beginner)\n2. From Designer to Design Builder (Intermediate)\n3. AI for UX Analysis & Iteration (Advanced)\n\nEach accelerator contains multiple modules with hands-on exercises and practical examples."
    }
    else if (message.includes("user research") || message.includes("research")) {
      return "AI can enhance user research in several ways:\n\n• Generate diverse user personas based on data\n• Analyze large amounts of user feedback quickly\n• Create realistic user scenarios for testing\n• Identify patterns in qualitative data\n\nOur advanced accelerator covers these techniques in depth."
    }
    else {
      return "Thanks for your question! I'd be happy to help with that. You can explore our Accelerators section to find more specific information about AI-driven UX design workflows, or check out our Playground to experiment with AI tools directly."
    }
  }

  // Handle sending a message
  const handleSendMessage = async () => {
    if (input.trim() === "") return
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    
    try {
      // Get AI response
      const response = await getResponse(userMessage.content)
      
      // Add assistant message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response
      }
      
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error getting response:", error)
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again later."
      }
      
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    // Optional: automatically send the suggestion
    // setInput(suggestion)
    // setTimeout(() => handleSendMessage(), 100)
  }

  // Handle key press (Enter to send)
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Add the CSS animation */}
      <style jsx global>{fadeInAnimation}</style>
      {/* Floating button with optional welcome prompt */}
      <div className="fixed bottom-6 right-6 z-50 flex items-end">
        {isWelcomePromptVisible && !isOpen && (
          <div className="bg-card rounded-lg p-3 mr-3 shadow-lg border animate-fade-in max-w-[240px] mb-2">
            <p className="text-sm">👋 Need help? I'm Scout, your AI guide!</p>
            <div className="w-3 h-3 bg-card rotate-45 absolute right-[-6px] bottom-6 border-r border-b"></div>
          </div>
        )}
        <Button
          className="rounded-full h-14 w-14 shadow-lg"
          onClick={() => {
            setIsOpen(true)
            setIsWelcomePromptVisible(false)
          }}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Scout</DialogTitle>
            <DialogDescription>
              Your AI-assisted UX design companion
            </DialogDescription>
          </DialogHeader>
          
          {/* Messages container */}
          <div className="flex-1 overflow-y-auto mb-4 space-y-4 max-h-[50vh] pr-2">
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
                    "rounded-lg px-4 py-2 max-w-[80%]",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="grid grid-cols-2 gap-2 mb-4">
              {SUGGESTIONS.map((suggestion) => (
                <Button
                  key={suggestion}
                  variant="outline"
                  className="h-auto py-2 px-3 text-xs justify-start text-left whitespace-normal"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          )}
          
          {/* Input area */}
          <div className="flex items-end gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              className="min-h-[60px] resize-none"
            />
            <Button
              size="icon"
              disabled={isLoading || input.trim() === ""}
              onClick={handleSendMessage}
              className="mb-1"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
          
          <DialogFooter className="text-xs text-muted-foreground">
            Scout is in beta - Responses may not always be accurate
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}