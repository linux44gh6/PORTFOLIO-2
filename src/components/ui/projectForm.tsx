/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { createProject } from "@/services/actions/createProject";
import { useState } from "react";
import { sendImageToCloudinary } from "@/constant";
import { toast } from "sonner";

const techStackOptions = [
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "MongoDB",
  "Express.js",
  "PostgreSql",
  "MySql",
  "Prisma",
  "Docker",
  "TypeScript",
];

type ProjectFormValues = {
  title: string;
  live_link: string;
  github_link: string;
  date: string;
  image: File | null;
  description: string;
  techStack: string[];
};

export default function ProjectForm() {
  const form = useForm<ProjectFormValues>({
    defaultValues: {
      title: "",
      live_link: "",
      github_link: "",
      date: "",
      image: null,
      description: "",
      techStack: [],
    },
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (values: any) => {
    console.log(values);
    try {
      const uploadedUrl = await sendImageToCloudinary(values.image);
      values.image = uploadedUrl;

      const result = await createProject(values);
      if (result.success) {
        toast.success(result.message);
       // Optional: reset form after submission
        setImagePreview(null);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error((error as Error).message || "An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center text-color3">Create Project</h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter project title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="live_link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Live URL</FormLabel>
                    <FormControl>
                      <Input type="url" placeholder="https://example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Publish Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="github_link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GitHub URL</FormLabel>
                    <FormControl>
                      <Input type="url" placeholder="https://github.com/..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormItem>
              <FormLabel>Technology Stack</FormLabel>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {techStackOptions.map((tech) => (
                  <label key={tech} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={tech}
                      checked={form.watch("techStack").includes(tech)}
                      onChange={(e) => {
                        const current = form.getValues("techStack") || [];
                        const updated = e.target.checked
                          ? [...current, tech]
                          : current.filter((item) => item !== tech);
                        form.setValue("techStack", updated, { shouldValidate: true });
                      }}
                    />
                    <span>{tech}</span>
                  </label>
                ))}
              </div>
              <FormMessage />
            </FormItem>

            <FormItem>
              <FormLabel>Upload Project Image</FormLabel>
              <FormControl>
                <Input type="file" accept="image/*" onChange={handleImageChange} />
              </FormControl>
              {imagePreview && (
                <img src={imagePreview} alt="Preview" className="mt-2 w-40 h-40 object-cover rounded-md" />
              )}
              <FormMessage />
            </FormItem>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter project description..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-color3 text-white hover:bg-color4">
              Create
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
