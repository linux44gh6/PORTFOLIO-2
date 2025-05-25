'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createContact } from "@/services/actions/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline, MdLocationPin } from "react-icons/md";
import { toast } from "sonner";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  service: z.string().min(1, "Select a service"),
  message: z.string().optional(),
});

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

const onSubmit = async (data: any) => {
  const toastId = toast.loading("Sending...");

  try {
    const result = await createContact(data);
    if (result?.success === true) {
      toast.success(result?.message || "Message sent successfully!", {
        id: toastId,
      });
    } else {
      toast.error(result?.message || "Something went wrong. Please try again.", {
        id: toastId,
      });
    }
  } catch (error) {
    toast.error("Failed to send message. Please check your connection.", {
      id: toastId,
    });
    console.error("Contact form error:", error);
  }
};


  return (
    <section id="contact-section" className="">
      <div className="flex flex-col lg:flex-row w-full md:w-[90%] lg:w-[90%] mx-auto min-h-screen gap-10">
        {/* Form Section */}
        <div className="w-full md:max-w-[700px] bg-color3 rounded-2xl shadow-xl px-10 py-14">
          <div className="mb-10">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-color1 to-yellow-50 inline-block text-transparent bg-clip-text">
              Let’s work together!
            </h1>
            <p className="mt-3 text-base text-yellow-50">
              I design and code beautifully simple things, and I love what I do. Just simple like that!
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full">
                <Input
                  placeholder="First Name"
                  className="bg-black text-yellow-50 focus-visible:ring-color1"
                  {...register("firstName")}
                />
                {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>}
              </div>
              <div className="w-full">
                <Input
                  placeholder="Last Name"
                  className="bg-black text-yellow-50 focus-visible:ring-color1"
                  {...register("lastName")}
                />
                {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>}
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full">
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-black text-yellow-50 focus-visible:ring-color1"
                  {...register("email")}
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
              </div>
              <div className="w-full">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-black text-yellow-50 focus-visible:ring-color1"
                  {...register("phone")}
                />
                {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            {/* Service */}
            <div>
              <Select onValueChange={(value) => setValue("service", value)}>
                <SelectTrigger className="bg-black text-yellow-50 focus:ring-color1">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web development">Web Development</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && <p className="text-sm text-red-500 mt-1">{errors.service.message}</p>}
            </div>

            {/* Message */}
            <div>
              <Textarea
                placeholder="Your message..."
                className="bg-black text-yellow-50 focus-visible:ring-color1"
                rows={5}
                {...register("message")}
              />
            </div>

            <Button
              type="submit"
              className="w-full lg:w-[200px] rounded-full bg-gradient-to-r from-color1 to-color4 text-yellow-50 text-lg transition-all duration-200 hover:brightness-110"
            >
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full text-yellow-50 space-y-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-color1 to-yellow-50 inline-block text-transparent bg-clip-text">
            Contact Info
          </h1>

          <div className="flex items-center gap-4">
            <span className="bg-gradient-to-t from-color4 to-color3 rounded-full p-3">
              <FiPhoneCall className="text-3xl text-white" />
            </span>
            <div>
              <h2 className="text-xl font-semibold">Phone</h2>
              <p className="text-base">01781613674</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="bg-gradient-to-t from-color4 to-color3 rounded-full p-3">
              <MdOutlineMailOutline className="text-3xl text-white" />
            </span>
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p className="text-base">abireshan32@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="bg-gradient-to-t from-color4 to-color3 rounded-full p-3">
              <MdLocationPin className="text-3xl text-white" />
            </span>
            <div>
              <h2 className="text-xl font-semibold">Address</h2>
              <p className="text-base">Chaybithi, Basabo, Dhaka</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
