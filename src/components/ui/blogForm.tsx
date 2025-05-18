/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { createBlog } from "@/services/actions/createBlog";

const BlogForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    await createBlog(data);
    reset();
    setImagePreview(null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted px-4">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-color3 mb-8">
          Create a Blog
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Title</label>
              <input
                {...register("title", { required: true })}
                placeholder="Enter blog title"
                className="input input-bordered w-full"
              />
              {errors.title && <p className="text-red-500 text-sm">Title is required</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Author Name</label>
              <input
                {...register("author", { required: true })}
                placeholder="Enter author name"
                className="input input-bordered w-full"
              />
              {errors.author && <p className="text-red-500 text-sm">Author is required</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Publish Date</label>
              <input
                type="date"
                {...register("date", { required: true })}
                className="input input-bordered w-full"
              />
              {errors.date && <p className="text-red-500 text-sm">Date is required</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Total Likes</label>
              <input
                type="number"
                {...register("likes", { required: true })}
                placeholder="0"
                className="input input-bordered w-full"
              />
              {errors.likes && <p className="text-red-500 text-sm">Likes required</p>}
            </div>
          </div>

          {/* Image uploader */}
          <div>
            <label className="block text-sm font-semibold mb-1">Blog Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              onChange={handleImageChange}
              className="file-input file-input-bordered w-full"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-3 rounded-md w-40 h-40 object-cover"
              />
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-1">Description</label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Enter blog description"
              rows={4}
              className="textarea textarea-bordered w-full"
            />
            {errors.description && <p className="text-red-500 text-sm">Description required</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-color3 to-color4 hover:opacity-90 transition"
          >
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
