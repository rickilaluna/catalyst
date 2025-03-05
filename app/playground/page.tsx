import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Wand2, Lightbulb, Sparkles } from "lucide-react"

export default function PlaygroundPage() {
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
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
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
                    defaultValue="Create a modern dashboard layout with a sidebar navigation, stats cards at the top, and a main content area with a data table."
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Style</label>
                    <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>Minimal</option>
                      <option>Modern</option>
                      <option>Playful</option>
                      <option>Corporate</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Color Scheme</label>
                    <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>Light</option>
                      <option>Dark</option>
                      <option>Colorful</option>
                      <option>Monochrome</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full">
                  Generate Design <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 border rounded-md bg-secondary/30 p-4 flex items-center justify-center">
              <div className="text-center">
                <Lightbulb className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Your generated designs will appear here. Try different prompts and settings to explore AI-assisted
                  design possibilities.
                </p>
              </div>
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
                    defaultValue="Create a responsive navigation bar with a logo, links, and a mobile menu that collapses into a hamburger menu on small screens."
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Framework</label>
                    <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>React</option>
                      <option>Vue</option>
                      <option>HTML/CSS</option>
                      <option>Tailwind CSS</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Style Library</label>
                    <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>Tailwind CSS</option>
                      <option>CSS Modules</option>
                      <option>Styled Components</option>
                      <option>Plain CSS</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full">
                  Generate Code <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 border rounded-md bg-secondary/30 p-4 flex items-center justify-center">
              <div className="text-center">
                <Code className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Your generated code will appear here. Try different prompts and settings to explore AI-assisted code
                  generation.
                </p>
              </div>
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
                    defaultValue="A checkout form with multiple steps: customer information, shipping details, payment information, and order confirmation. The form has validation and progress indicators."
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Analysis Focus</label>
                    <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>Usability</option>
                      <option>Accessibility</option>
                      <option>Visual Design</option>
                      <option>Information Architecture</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">User Type</label>
                    <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
                      <option>General</option>
                      <option>Novice</option>
                      <option>Expert</option>
                      <option>Accessibility Needs</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full">
                  Analyze Design <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 border rounded-md bg-secondary/30 p-4 flex items-center justify-center">
              <div className="text-center">
                <Lightbulb className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Your UX analysis will appear here. Try different prompts and settings to explore AI-assisted UX
                  analysis.
                </p>
              </div>
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

