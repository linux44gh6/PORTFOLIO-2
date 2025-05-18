'use client'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import { FiGithub, FiExternalLink } from "react-icons/fi"

interface Project {
  _id:string
  title: string
  description?: string
  content?: ReactNode
  image?: string
  tags?: string[]
  github_link?: string
  live_link?: string
}

interface CardComponentProps {
  project: Project
  className?: string
  imagePriority?: boolean
}

export default function CardComponent({ 
  project, 
  className = "",
  imagePriority = false 
}: CardComponentProps) {

  console.log(project);
  return (
    <Card className={`group relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] ${className}`}>
      {/* Image with Gradient Overlay */}
      {project.image && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title || "Project image"}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={imagePriority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300" />
        </div>
      )}
      <CardHeader className="relative space-y-4">
        {/* Title with hover effect */}
        <CardTitle className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
          <Link href={`/project/${project._id}`}>{project.title}</Link>
        </CardTitle>

        {/* Tags */}
        {project.tags && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="rounded-full border border-primary/30 px-3 py-1 text-xs backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-primary/10"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-4">
        {/* Description with fade effect */}
        {project.description && (
          <p className="relative text-muted-foreground line-clamp-3">
            {project.description}
            <span className="absolute bottom-0 right-0 h-6 w-1/3 bg-gradient-to-l from-background to-transparent" />
          </p>
        )}

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-sm"
            >
              <FiGithub className="h-4 w-4" />
              Code
            </a>
          )}
          {project.live_link && (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-purple-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:shadow-lg"
            >
              <FiExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </CardContent>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Card>
  )
}