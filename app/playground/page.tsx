"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Wand2, Lightbulb, Sparkles, Loader2 } from "lucide-react"

export default function PlaygroundPage() {
  // States for each tab
  const [isDesignGenerating, setIsDesignGenerating] = useState(false)
  const [designResult, setDesignResult] = useState<string | null>(null)
  const [designPrompt, setDesignPrompt] = useState("Create a modern dashboard layout with a sidebar navigation, stats cards at the top, and a main content area with a data table.")
  const [designStyle, setDesignStyle] = useState("Modern")
  const [designColorScheme, setDesignColorScheme] = useState("Light")
  
  const [isCodeGenerating, setIsCodeGenerating] = useState(false)
  const [codeResult, setCodeResult] = useState<string | null>(null)
  const [codePrompt, setCodePrompt] = useState("Create a responsive navigation bar with a logo, links, and a mobile menu that collapses into a hamburger menu on small screens.")
  const [codeFramework, setCodeFramework] = useState("React")
  const [codeStyleLibrary, setCodeStyleLibrary] = useState("Tailwind CSS")
  
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<string | null>(null)
  const [analysisPrompt, setAnalysisPrompt] = useState("A checkout form with multiple steps: customer information, shipping details, payment information, and order confirmation. The form has validation and progress indicators.")
  const [analysisFocus, setAnalysisFocus] = useState("Usability")
  const [userType, setUserType] = useState("General")
  
  // Simulated design results
  const designResults = {
    "Modern": {
      "Light": "/images/playground/dashboard-modern-light.jpg",
      "Dark": "/images/playground/dashboard-modern-dark.jpg",
      "Colorful": "/images/playground/dashboard-modern-colorful.jpg",
      "Monochrome": "/images/playground/dashboard-modern-mono.jpg"
    },
    "Minimal": {
      "Light": "/images/playground/dashboard-minimal-light.jpg",
      "Dark": "/images/playground/dashboard-minimal-dark.jpg",
      "Colorful": "/images/playground/dashboard-minimal-colorful.jpg",
      "Monochrome": "/images/playground/dashboard-minimal-mono.jpg"
    }
    // We'd have more options in a real implementation
  }
  
  // Simulated code snippets
  const codeSnippets = {
    "React": {
      "Tailwind CSS": `import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Dashboard
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Team
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Projects
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Calendar
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state */}
      <div className={isOpen ? 'block' : 'hidden'}>
        <div className="pt-2 pb-3 space-y-1">
          <a href="#" className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
            Dashboard
          </a>
          <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
            Team
          </a>
          <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
            Projects
          </a>
          <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;`
    },
    "Vue": {
      "Tailwind CSS": `<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-8 w-auto" src="/logo.svg" alt="Logo" />
          </div>
          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <a href="#" class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Dashboard
            </a>
            <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Team
            </a>
            <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Projects
            </a>
            <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              Calendar
            </a>
          </div>
        </div>
        <div class="md:hidden flex items-center">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg v-if="!isOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, toggle classes based on menu state -->
    <div :class="isOpen ? 'block' : 'hidden'">
      <div class="pt-2 pb-3 space-y-1">
        <a href="#" class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
          Dashboard
        </a>
        <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
          Team
        </a>
        <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
          Projects
        </a>
        <a href="#" class="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6">
          Calendar
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  }
}
</script>`
    }
    // We'd have more options in a real implementation
  }
  
  // Simulated UX analysis
  const uxAnalysisTemplates = {
    "Usability": `# UX Usability Analysis

## Strengths
- ✅ Multi-step approach breaks down a complex process appropriately
- ✅ Progress indicators help users understand where they are in the process
- ✅ Form validation provides immediate feedback

## Areas for Improvement
1. **Form Length Perception**
   - Consider showing a progress bar at the top to indicate overall completion
   - Break customer information into smaller logical sections

2. **Input Field Optimization**
   - Auto-format phone numbers and credit card numbers as the user types
   - Implement address auto-complete to reduce typing effort
   - Consider inline validation with helpful error messages

3. **Cognitive Load Reduction**
   - Show only the relevant fields for the current step
   - Remember information between sessions for returning customers
   - Provide clear "Next" and "Back" buttons with consistent positioning

## Usability Enhancement Recommendations
1. Add a "Save and continue later" feature for complex checkout processes
2. Implement a guest checkout option with the ability to create an account later
3. Show a summary of previous steps on the right side of advanced steps
4. Add inline examples of expected formats for complex inputs
5. Ensure all validation errors are descriptive and actionable

## Benchmark Comparison
Your multi-step form follows industry best practices but could be enhanced with:
- Persistent summary panel (like Apple)
- Simplified form fields (like Amazon)
- Express checkout options (like Shopify stores)`,

    "Accessibility": `# Accessibility Evaluation

## WCAG Compliance Assessment
- **Perceivable**: ⚠️ Needs improvement
- **Operable**: ⚠️ Needs improvement
- **Understandable**: ✅ Good
- **Robust**: ⚠️ Needs improvement

## Key Findings

### Critical Issues
1. **Form Labels and Instructions**
   - All form controls need properly associated labels
   - Instructions for completing fields should be provided before they're needed
   - Error messages must be clearly associated with their fields

2. **Keyboard Navigation**
   - Ensure logical tab order through multi-step process
   - Make sure all interactive elements are keyboard accessible
   - Provide keyboard shortcuts for navigation between steps

3. **Screen Reader Compatibility**
   - Use ARIA landmarks to identify different sections of the form
   - Ensure error messages are announced by screen readers
   - Confirm that progress indicators are accessible to all users

### Recommendations
1. Implement proper heading structure for each step (H1, H2, etc.)
2. Ensure color is not the only means of conveying information
3. Provide sufficient color contrast (minimum 4.5:1 for normal text)
4. Add focus indicators that are clearly visible
5. Test with actual screen readers (NVDA, JAWS, VoiceOver)
6. Implement ARIA attributes appropriately for complex interface elements

## Compliance Path
Following these recommendations would help your checkout form meet WCAG 2.1 AA standards, making it accessible to users with diverse abilities and assistive technologies.`
  }
  
  // Handler functions
  const handleDesignGenerate = () => {
    setIsDesignGenerating(true)
    setDesignResult(null)
    
    // Simulate API call delay
    setTimeout(() => {
      // Get the result based on selected options (default to first option if not found)
      const designImagePath = designResults[designStyle]?.[designColorScheme] || 
                            "/images/playground/dashboard-modern-light.jpg"
      
      setDesignResult(designImagePath)
      setIsDesignGenerating(false)
    }, 2500)
  }
  
  const handleCodeGenerate = () => {
    setIsCodeGenerating(true)
    setCodeResult(null)
    
    // Simulate API call delay
    setTimeout(() => {
      // Get the code based on selected options (default to first option if not found)
      const code = codeSnippets[codeFramework]?.[codeStyleLibrary] || 
                   codeSnippets.React["Tailwind CSS"]
      
      setCodeResult(code)
      setIsCodeGenerating(false)
    }, 3000)
  }
  
  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setAnalysisResult(null)
    
    // Simulate API call delay
    setTimeout(() => {
      // Get the analysis based on selected focus
      const analysis = uxAnalysisTemplates[analysisFocus] || 
                      uxAnalysisTemplates.Usability
      
      setAnalysisResult(analysis)
      setIsAnalyzing(false)
    }, 3500)
  }
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">AI Playground</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experiment with AI tools for UX design in a sandbox environment. Try different techniques and see the results
          in real-time.
        </p>
      </div>

      <Tabs defaultValue="design-generator" className="max-w-5xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="design-generator">Design Generator</TabsTrigger>
          <TabsTrigger value="code-generator">Code Generator</TabsTrigger>
          <TabsTrigger value="ux-analyzer">UX Analyzer</TabsTrigger>
        </TabsList>

        <TabsContent value="design-generator" className="border rounded-lg p-6 bg-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Panel: Input Controls */}
            <div className="md:col-span-1">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Wand2 className="mr-2 h-5 w-5 text-primary" />
                  AI Design Generator
                </h3>
                <p className="text-muted-foreground mb-4">
                  Describe the UI component or layout you want to create, and our AI will generate design options for
                  you.
                </p>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Design Prompt</label>
                  <textarea
                    className="w-full h-32 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Describe the UI component or layout you want to generate..."
                    value={designPrompt}
                    onChange={(e) => setDesignPrompt(e.target.value)}
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Style</label>
                    <select 
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={designStyle}
                      onChange={(e) => setDesignStyle(e.target.value)}
                    >
                      <option value="Minimal">Minimal</option>
                      <option value="Modern">Modern</option>
                      <option value="Playful">Playful</option>
                      <option value="Corporate">Corporate</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Color Scheme</label>
                    <select 
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={designColorScheme}
                      onChange={(e) => setDesignColorScheme(e.target.value)}
                    >
                      <option value="Light">Light</option>
                      <option value="Dark">Dark</option>
                      <option value="Colorful">Colorful</option>
                      <option value="Monochrome">Monochrome</option>
                    </select>
                  </div>
                </div>
                <Button 
                  className="w-full" 
                  onClick={handleDesignGenerate}
                  disabled={isDesignGenerating}
                >
                  {isDesignGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
                    </>
                  ) : (
                    <>
                      Generate Design <Sparkles className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            {/* Right Panel: Design Output */}
            <div className="md:col-span-2 border rounded-md bg-secondary/10 p-4 flex items-center justify-center min-h-[550px]">
              {isDesignGenerating ? (
                <div className="text-center">
                  <Loader2 className="h-12 w-12 text-primary mx-auto mb-4 animate-spin" />
                  <p className="text-muted-foreground font-medium">
                    Generating design based on your prompt...
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Analyzing {designStyle.toLowerCase()} design patterns with {designColorScheme.toLowerCase()} color scheme
                  </p>
                </div>
              ) : designResult ? (
                <div className="w-full h-full">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <h3 className="font-medium">Generated Dashboard Design</h3>
                      <p className="text-xs text-muted-foreground">Style: {designStyle} • Color Scheme: {designColorScheme}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                  
                  {/* Simulated Dashboard Layout */}
                  <div className={`border rounded-lg overflow-hidden h-[450px] relative ${
                    designColorScheme === "Dark" ? "bg-gray-900 text-gray-100" : 
                    designColorScheme === "Colorful" ? "bg-gradient-to-br from-blue-50 to-purple-50" : 
                    designColorScheme === "Monochrome" ? "bg-gray-100" : 
                    "bg-white"
                  }`}>
                    {/* Sidebar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-48 ${
                      designColorScheme === "Dark" ? "bg-gray-800" : 
                      designColorScheme === "Colorful" ? "bg-gradient-to-b from-indigo-500 to-purple-700 text-white" : 
                      designColorScheme === "Monochrome" ? "bg-gray-200" : 
                      designStyle === "Minimal" ? "bg-gray-50 border-r" : 
                      designStyle === "Modern" ? "bg-slate-800 text-white" :
                      designStyle === "Playful" ? "bg-amber-100 border-r border-amber-200" :
                      designStyle === "Corporate" ? "bg-blue-700 text-white" :
                      "bg-gray-100"
                    }`}>
                      {/* Logo Area */}
                      <div className={`h-14 border-b flex items-center justify-center ${
                        designColorScheme === "Dark" ? "border-gray-700" : 
                        designColorScheme === "Colorful" ? "border-indigo-400" : 
                        designColorScheme === "Monochrome" ? "border-gray-300" : 
                        designStyle === "Minimal" ? "border-gray-200" :
                        designStyle === "Modern" ? "border-slate-700" :
                        designStyle === "Playful" ? "border-amber-200" :
                        designStyle === "Corporate" ? "border-blue-600" :
                        "border-gray-200"
                      }`}>
                        <div className={`w-8 h-8 rounded-md ${
                          designColorScheme === "Colorful" ? "bg-white/20" :
                          designColorScheme === "Dark" ? "bg-gray-700" :
                          designColorScheme === "Monochrome" ? "bg-gray-400" :
                          designStyle === "Modern" ? "bg-sky-500" :
                          designStyle === "Playful" ? "bg-amber-400" :
                          designStyle === "Corporate" ? "bg-blue-200" :
                          "bg-primary/20"
                        }`}></div>
                      </div>
                      
                      {/* Menu Items */}
                      <div className="py-4 px-2">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className={`mb-1 h-10 rounded-md flex items-center px-3 ${
                            i === 1 ? 
                              designColorScheme === "Dark" ? "bg-gray-700" : 
                              designColorScheme === "Colorful" ? "bg-white/20" : 
                              designColorScheme === "Monochrome" ? "bg-gray-300" : 
                              designStyle === "Minimal" ? "bg-white border" :
                              designStyle === "Modern" ? "bg-slate-700" :
                              designStyle === "Playful" ? "bg-amber-200" :
                              designStyle === "Corporate" ? "bg-blue-600" :
                              "bg-white"
                            : ""
                          }`}>
                            <div className={`w-4 h-4 rounded ${
                              designColorScheme === "Colorful" ? "bg-fuchsia-300" :
                              designColorScheme === "Dark" ? "bg-gray-600" :
                              designColorScheme === "Monochrome" ? "bg-gray-400" :
                              designStyle === "Modern" ? "bg-sky-500" :
                              designStyle === "Playful" ? "bg-amber-400" :
                              designStyle === "Corporate" ? "bg-blue-200" :
                              "bg-primary/30"
                            } mr-3`}></div>
                            <div className={`h-2 w-16 rounded ${
                              designColorScheme === "Dark" ? "bg-gray-600" : 
                              designColorScheme === "Colorful" ? "bg-white/40" : 
                              designColorScheme === "Monochrome" ? "bg-gray-500" : 
                              "bg-gray-200"
                            }`}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="ml-48 h-full p-6">
                      {/* Header */}
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <div className={`h-4 w-32 rounded ${
                            designColorScheme === "Dark" ? "bg-gray-700" : 
                            designColorScheme === "Colorful" ? "bg-indigo-200" : 
                            designColorScheme === "Monochrome" ? "bg-gray-400" : 
                            "bg-gray-200"
                          } mb-2`}></div>
                          <div className={`h-3 w-48 rounded ${
                            designColorScheme === "Dark" ? "bg-gray-800" : 
                            designColorScheme === "Colorful" ? "bg-blue-100" : 
                            designColorScheme === "Monochrome" ? "bg-gray-300" : 
                            "bg-gray-100"
                          }`}></div>
                        </div>
                        <div className="flex gap-2">
                          <div className={`h-8 w-8 rounded-full ${
                            designColorScheme === "Dark" ? "bg-gray-700" : 
                            designColorScheme === "Colorful" ? "bg-purple-200" : 
                            designColorScheme === "Monochrome" ? "bg-gray-300" : 
                            designStyle === "Modern" ? "bg-slate-200" :
                            designStyle === "Playful" ? "bg-amber-200" :
                            designStyle === "Corporate" ? "bg-blue-100" :
                            "bg-gray-200"
                          }`}></div>
                          <div className={`h-8 w-20 rounded ${
                            designColorScheme === "Dark" ? "bg-gray-700" : 
                            designColorScheme === "Colorful" ? "bg-indigo-500 text-white" : 
                            designColorScheme === "Monochrome" ? "bg-gray-500" : 
                            designStyle === "Modern" ? "bg-slate-700 text-white" :
                            designStyle === "Playful" ? "bg-amber-400" :
                            designStyle === "Corporate" ? "bg-blue-600 text-white" :
                            "bg-primary/90 text-white"
                          }`}></div>
                        </div>
                      </div>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-4 gap-4 mb-6">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className={`p-4 rounded-lg ${
                            designColorScheme === "Dark" ? "bg-gray-800" : 
                            designColorScheme === "Colorful" ? 
                              i === 1 ? "bg-indigo-100" :
                              i === 2 ? "bg-blue-100" :
                              i === 3 ? "bg-fuchsia-100" :
                              "bg-purple-100"
                            : 
                            designColorScheme === "Monochrome" ? "bg-gray-200" : 
                            designStyle === "Minimal" ? "bg-white border" :
                            designStyle === "Modern" ? "bg-white shadow" :
                            designStyle === "Playful" ? "bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200" :
                            designStyle === "Corporate" ? "bg-white border-t-4 border-t-blue-500 shadow" :
                            "bg-white shadow-sm"
                          }`}>
                            <div className={`h-2 w-8 rounded mb-2 ${
                              designColorScheme === "Dark" ? "bg-gray-700" : 
                              designColorScheme === "Colorful" ? 
                                i === 1 ? "bg-indigo-400" :
                                i === 2 ? "bg-blue-400" :
                                i === 3 ? "bg-fuchsia-400" :
                                "bg-purple-400"
                              : 
                              designColorScheme === "Monochrome" ? "bg-gray-400" : 
                              designStyle === "Modern" ? "bg-slate-700" :
                              designStyle === "Playful" ? "bg-amber-400" :
                              designStyle === "Corporate" ? "bg-blue-600" :
                              "bg-gray-300"
                            }`}></div>
                            <div className={`h-5 w-12 rounded mb-1 ${
                              designColorScheme === "Dark" ? "bg-gray-600" : 
                              designColorScheme === "Colorful" ? 
                                i === 1 ? "bg-indigo-300" :
                                i === 2 ? "bg-blue-300" :
                                i === 3 ? "bg-fuchsia-300" :
                                "bg-purple-300"
                              : 
                              designColorScheme === "Monochrome" ? "bg-gray-500" : 
                              "bg-gray-200"
                            }`}></div>
                            <div className={`h-2 w-16 rounded ${
                              designColorScheme === "Dark" ? "bg-gray-700" : 
                              designColorScheme === "Colorful" ? 
                                i === 1 ? "bg-indigo-200" :
                                i === 2 ? "bg-blue-200" :
                                i === 3 ? "bg-fuchsia-200" :
                                "bg-purple-200"
                              : 
                              designColorScheme === "Monochrome" ? "bg-gray-300" : 
                              "bg-gray-100"
                            }`}></div>
                          </div>
                        ))}
                      </div>

                      {/* Data Table */}
                      <div className={`rounded-lg overflow-hidden border ${
                        designColorScheme === "Dark" ? "bg-gray-800 border-gray-700" : 
                        designColorScheme === "Colorful" ? "bg-white border-indigo-100" : 
                        designColorScheme === "Monochrome" ? "bg-white border-gray-300" : 
                        designStyle === "Minimal" ? "bg-white border-gray-200" :
                        designStyle === "Modern" ? "bg-white border-none shadow" :
                        designStyle === "Playful" ? "bg-white border-amber-200" :
                        designStyle === "Corporate" ? "bg-white border-gray-200" :
                        "bg-white border-gray-200"
                      }`}>
                        {/* Table Header */}
                        <div className={`grid grid-cols-5 gap-4 p-3 ${
                          designColorScheme === "Dark" ? "bg-gray-700 text-gray-300" : 
                          designColorScheme === "Colorful" ? "bg-indigo-50 text-indigo-800" : 
                          designColorScheme === "Monochrome" ? "bg-gray-100" : 
                          designStyle === "Minimal" ? "bg-gray-50 border-b" :
                          designStyle === "Modern" ? "bg-slate-100 border-b" :
                          designStyle === "Playful" ? "bg-amber-50 border-b border-amber-100" :
                          designStyle === "Corporate" ? "bg-blue-50 border-b" :
                          "bg-gray-50 border-b"
                        }`}>
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className={`h-4 rounded ${
                              designColorScheme === "Dark" ? "bg-gray-600" : 
                              designColorScheme === "Colorful" ? "bg-indigo-200" : 
                              designColorScheme === "Monochrome" ? "bg-gray-300" : 
                              "bg-gray-300"
                            }`}></div>
                          ))}
                        </div>
                        
                        {/* Table Body */}
                        {[1, 2, 3, 4, 5].map((row) => (
                          <div key={row} className={`grid grid-cols-5 gap-4 p-3 ${
                            row !== 5 ? 
                              designColorScheme === "Dark" ? "border-b border-gray-700" : 
                              designColorScheme === "Colorful" ? "border-b border-indigo-50" : 
                              designColorScheme === "Monochrome" ? "border-b border-gray-200" : 
                              "border-b"
                            : ""
                          }`}>
                            {[1, 2, 3, 4, 5].map((cell) => (
                              <div key={cell} className={`h-3 rounded ${
                                designColorScheme === "Dark" ? "bg-gray-700" : 
                                designColorScheme === "Colorful" ? 
                                  cell === 1 ? "bg-purple-100" : "bg-gray-100" : 
                                designColorScheme === "Monochrome" ? "bg-gray-200" : 
                                "bg-gray-100"
                              }`}></div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Variations */}
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Try these variations:</p>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      <button className="flex-shrink-0 border rounded p-1 hover:bg-gray-50">
                        <div className={`w-16 h-16 bg-blue-500 rounded relative overflow-hidden ${
                          designStyle === "Modern" ? "border-4 border-white" : ""
                        }`}>
                          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gray-800"></div>
                        </div>
                      </button>
                      <button className="flex-shrink-0 border rounded p-1 hover:bg-gray-50">
                        <div className={`w-16 h-16 bg-amber-100 rounded relative overflow-hidden ${
                          designStyle === "Playful" ? "border-4 border-white" : ""
                        }`}>
                          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-amber-300"></div>
                        </div>
                      </button>
                      <button className="flex-shrink-0 border rounded p-1 hover:bg-gray-50">
                        <div className={`w-16 h-16 bg-white rounded relative overflow-hidden ${
                          designStyle === "Minimal" ? "border-4 border-gray-200" : ""
                        }`}>
                          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gray-100"></div>
                        </div>
                      </button>
                      <button className="flex-shrink-0 border rounded p-1 hover:bg-gray-50">
                        <div className={`w-16 h-16 bg-blue-700 rounded relative overflow-hidden ${
                          designStyle === "Corporate" ? "border-4 border-white" : ""
                        }`}>
                          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-blue-900"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <Lightbulb className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Your generated designs will appear here. Try different prompts and settings to explore AI-assisted
                    design possibilities.
                  </p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code-generator" className="border rounded-lg p-6 bg-card">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Code className="mr-2 h-5 w-5 text-primary" />
                  AI Code Generator
                </h3>
                <p className="text-muted-foreground mb-4">
                  Convert your designs into code with AI assistance. Describe the component or upload a design image.
                </p>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Code Prompt</label>
                  <textarea
                    className="w-full h-32 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Describe the component you want to code..."
                    value={codePrompt}
                    onChange={(e) => setCodePrompt(e.target.value)}
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Framework</label>
                    <select 
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={codeFramework}
                      onChange={(e) => setCodeFramework(e.target.value)}
                    >
                      <option value="React">React</option>
                      <option value="Vue">Vue</option>
                      <option value="HTML/CSS">HTML/CSS</option>
                      <option value="Tailwind CSS">Tailwind CSS</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Style Library</label>
                    <select 
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={codeStyleLibrary}
                      onChange={(e) => setCodeStyleLibrary(e.target.value)}
                    >
                      <option value="Tailwind CSS">Tailwind CSS</option>
                      <option value="CSS Modules">CSS Modules</option>
                      <option value="Styled Components">Styled Components</option>
                      <option value="Plain CSS">Plain CSS</option>
                    </select>
                  </div>
                </div>
                <Button 
                  className="w-full"
                  onClick={handleCodeGenerate}
                  disabled={isCodeGenerating}
                >
                  {isCodeGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
                    </>
                  ) : (
                    <>
                      Generate Code <Sparkles className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
            <div className="flex-1 border rounded-md bg-secondary/10 p-4 flex items-center justify-center overflow-hidden">
              {isCodeGenerating ? (
                <div className="text-center">
                  <Loader2 className="h-12 w-12 text-primary mx-auto mb-4 animate-spin" />
                  <p className="text-muted-foreground font-medium">
                    Generating code based on your prompt...
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Analyzing requirements and optimizing for {codeFramework} with {codeStyleLibrary}
                  </p>
                </div>
              ) : codeResult ? (
                <div className="w-full h-full">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium">Generated Code:</p>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        Copy Code
                      </Button>
                      <Button variant="ghost" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-md overflow-auto bg-black/90 text-gray-200 p-4 h-[350px] font-mono text-xs">
                    <pre>{codeResult}</pre>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-muted-foreground">Framework: {codeFramework} • Style: {codeStyleLibrary}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <Code className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Your generated code will appear here. Try different prompts and settings to explore AI-assisted code
                    generation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="ux-analyzer" className="border rounded-lg p-6 bg-card">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                  UX Analyzer
                </h3>
                <p className="text-muted-foreground mb-4">
                  Get AI-powered analysis and feedback on your UX designs. Upload a design or provide a description.
                </p>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Design Description</label>
                  <textarea
                    className="w-full h-32 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Describe the design you want to analyze..."
                    value={analysisPrompt}
                    onChange={(e) => setAnalysisPrompt(e.target.value)}
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Analysis Focus</label>
                    <select 
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={analysisFocus}
                      onChange={(e) => setAnalysisFocus(e.target.value)}
                    >
                      <option value="Usability">Usability</option>
                      <option value="Accessibility">Accessibility</option>
                      <option value="Visual Design">Visual Design</option>
                      <option value="Information Architecture">Information Architecture</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">User Type</label>
                    <select 
                      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={userType}
                      onChange={(e) => setUserType(e.target.value)}
                    >
                      <option value="General">General</option>
                      <option value="Novice">Novice</option>
                      <option value="Expert">Expert</option>
                      <option value="Accessibility Needs">Accessibility Needs</option>
                    </select>
                  </div>
                </div>
                <Button 
                  className="w-full"
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
                    </>
                  ) : (
                    <>
                      Analyze Design <Sparkles className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
            <div className="flex-1 border rounded-md bg-secondary/10 p-4 flex items-center justify-center overflow-hidden">
              {isAnalyzing ? (
                <div className="text-center">
                  <Loader2 className="h-12 w-12 text-primary mx-auto mb-4 animate-spin" />
                  <p className="text-muted-foreground font-medium">
                    Analyzing design from your description...
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Evaluating {analysisFocus.toLowerCase()} for {userType.toLowerCase()} users
                  </p>
                </div>
              ) : analysisResult ? (
                <div className="w-full h-full">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium">UX Analysis:</p>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        Export PDF
                      </Button>
                      <Button variant="ghost" size="sm">
                        Share
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-md overflow-auto bg-white p-4 h-[350px] text-sm prose prose-sm max-w-none dark:prose-invert">
                    <div className="markdown">{analysisResult.split('\n').map((line, i) => {
                      // Simple markdown parsing for headings and lists
                      if (line.startsWith('# ')) {
                        return <h1 key={i} className="text-xl font-bold mt-4 mb-2">{line.replace('# ', '')}</h1>
                      } else if (line.startsWith('## ')) {
                        return <h2 key={i} className="text-lg font-bold mt-3 mb-2">{line.replace('## ', '')}</h2>
                      } else if (line.startsWith('### ')) {
                        return <h3 key={i} className="text-base font-bold mt-3 mb-1">{line.replace('### ', '')}</h3>
                      } else if (line.startsWith('- ')) {
                        return <li key={i} className="ml-4">{line.replace('- ', '')}</li>
                      } else if (line.trim() === '') {
                        return <br key={i} />
                      } else {
                        return <p key={i} className="mb-2">{line}</p>
                      }
                    })}</div>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-muted-foreground">Focus: {analysisFocus} • User Type: {userType}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <Lightbulb className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Your UX analysis will appear here. Try different prompts and settings to explore AI-assisted UX
                    analysis.
                  </p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Apply What You've Learned?</h2>
        <p className="text-muted-foreground mb-6">
          Take your AI playground experiments to the next level by applying them to real projects and earning
          certification.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild>
            <Link href="/trails">Explore Learning Trails</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/community">Join Community</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

