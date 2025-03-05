import { AcceleratorCard } from "@/components/accelerator-card"

interface Accelerator {
  id: string
  title: string
  description: string
  level: string
  duration: string
  modules: number
  image: string
  imageAlt: string
}

export default function AcceleratorsPage() {
  const accelerators: Accelerator[] = [
    {
      id: "introduction",
      title: "Introduction to AI in UX Design",
      description: "Learn the fundamentals of AI and how it's transforming UX design",
      level: "Beginner",
      duration: "4 hours",
      modules: 5,
      image: "/images/accelerators/intro-ai-ux.jpg",
      imageAlt: "AI and UX Design Fundamentals",
    },
    {
      id: "design-builder",
      title: "From Designer to Design Builder",
      description: "Learn to use AI tools to transition from design to implementation",
      level: "Intermediate",
      duration: "6 hours",
      modules: 7,
      image: "/images/accelerators/design-builder.jpg",
      imageAlt: "Design to Implementation with AI",
    },
    {
      id: "analysis-iteration",
      title: "AI for UX Analysis & Iteration",
      description: "Master advanced AI techniques for user testing and design optimization",
      level: "Advanced",
      duration: "8 hours",
      modules: 9,
      image: "/images/accelerators/analysis-iteration.jpg",
      imageAlt: "UX Analysis and Iteration with AI",
    },
    {
      id: "generative-design",
      title: "Generative Design with AI",
      description: "Explore how AI can generate design variations and creative solutions",
      level: "Intermediate",
      duration: "5 hours",
      modules: 6,
      image: "/images/accelerators/generative-design.jpg",
      imageAlt: "Generative Design with AI",
    },
    {
      id: "ai-ethics",
      title: "Ethics in AI-Assisted Design",
      description: "Understand the ethical considerations when using AI in design",
      level: "All Levels",
      duration: "3 hours",
      modules: 4,
      image: "/images/accelerators/ai-ethics.jpg",
      imageAlt: "Ethics in AI-Assisted Design",
    },
    {
      id: "ai-collaboration",
      title: "Collaborating with AI",
      description: "Learn effective ways to collaborate with AI tools in design teams",
      level: "Intermediate",
      duration: "4 hours",
      modules: 5,
      image: "/images/accelerators/ai-collaboration.jpg",
      imageAlt: "AI Collaboration in Design Teams",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4">UX Learning Accelerators</h1>
        <p className="text-xl text-muted-foreground">
          Accelerate your UX design journey with AI-powered learning paths
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {accelerators.map((accelerator) => (
          <AcceleratorCard key={accelerator.id} {...accelerator} />
        ))}
      </div>
    </div>
  )
}

