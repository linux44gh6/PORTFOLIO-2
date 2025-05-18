import { Project } from "@/Types";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="flex flex-col lg:flex-row gap-4 p-6">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/3 aspect-video overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col gap-4">
          <CardHeader className="p-0">
            <CardTitle className="text-2xl font-semibold tracking-tight">
              {project.title}
            </CardTitle>
            {project.date && (
              <CardDescription className="text-sm text-muted-foreground">
                {project.date}
              </CardDescription>
            )}
          </CardHeader>

          <CardContent className="p-0">
            <p className="text-sm text-muted-foreground line-clamp-3">
              {project.description}
            </p>
          </CardContent>

          {project.techStack && (
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="text-sm font-medium"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          )}

          <CardFooter className="p-0 mt-auto">
            <div className="flex gap-3">
              <Link href={`/project/${project._id}`}>
                <Button variant="default" size="sm">
                  View Details
                </Button>
              </Link>
              {project.github_link && (
                <Link href={project.github_link} target="_blank">
                  <Button variant="outline" size="sm">
                    GitHub
                  </Button>
                </Link>
              )}
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;