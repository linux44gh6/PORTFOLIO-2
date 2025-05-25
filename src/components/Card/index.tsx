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
import { motion } from "framer-motion"

interface Project {
  _id: string
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
  delay?: number
}

export default function CardComponent({
  project,
  className = "",
  imagePriority = false,
  delay = 0,
}: CardComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className={`relative ${className}`}
    >
      <Card className="overflow-hidden bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl shadow-lg transition-all duration-300">
        {/* Image */}
        {project.image && (
          <div className="relative w-full h-48 rounded-t-3xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center"
              priority={imagePriority}
            />
          </div>
        )}

        <CardHeader className="px-6 pt-6 pb-2 space-y-2">
          <CardTitle className="text-xl font-bold text-white">
            <Link href={`/project/${project._id}`} className="hover:underline">
              {project.title}
            </Link>
          </CardTitle>

          {/* Tags */}
          {project.tags && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/10 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </CardHeader>

        <CardContent className="px-6 pb-6 space-y-4">
          {/* Description */}
          {project.description && (
            <p className="text-sm text-white/80 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-white border border-white/20 rounded-lg hover:bg-white/10 transition-all"
              >
                <FiGithub className="w-4 h-4" />
                Code
              </a>
            )}
            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm text-black bg-white rounded-lg hover:bg-gray-100 transition-all font-medium"
              >
                <FiExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
