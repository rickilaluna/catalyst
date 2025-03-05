'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface AcceleratorCardProps {
  id: string
  title: string
  description: string
  level: string
  duration: string
  modules: number
  image: string
  imageAlt: string
}

export function AcceleratorCard({
  id,
  title,
  description,
  level,
  duration,
  modules,
  image,
  imageAlt,
}: AcceleratorCardProps) {
  const [imgSrc, setImgSrc] = useState(image)

  return (
    <Link href={`/accelerators/${id}`} className="group block">
      <div className="relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
        <div className="relative h-48 w-full">
          <Image
            src={imgSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgSrc("/images/accelerators/placeholder.jpg")}
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {duration}
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              {modules} modules
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Badge variant="secondary">{level}</Badge>
            <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
} 