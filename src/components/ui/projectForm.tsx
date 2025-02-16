

import { createProject } from '@/actions/createProject';
import Form from 'next/form'
const ProjectForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <Form action={createProject}>
          <h2 className="text-2xl font-semibold mb-6 text-color3 text-center">
            Create Project
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Project Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter blog title"
              />
            </div>
            <div>
              <label
                htmlFor="live_url"
                className="block text-sm font-medium text-gray-700"
              >
               Live URL
              </label>
              <input
                type="url"
                name="live_url"
                id="live_url"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter author name"
              />
            </div>
            {/* Publish Date */}
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Publish Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              />
            </div>
            {/* Total Likes */}
            <div>
              <label
                htmlFor="GITHUB_URL"
                className="block text-sm font-medium text-gray-700"
              >
                GITHUB_URL
              </label>
              <input
                type="url"
                name="github_url"
                id="total_likes"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter total likes"
              />
            </div>
          </div>
          {/* project Image (URL Input) */}
          <div className="my-5">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Project Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Paste image URL here"
            />
          </div>
          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter blog description"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-color3 to-color4 text-white py-2 px-4 rounded-md hover:bg-color2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create
          </button>
        </Form>
      </div>
    </div>
  );
};

export default ProjectForm;
