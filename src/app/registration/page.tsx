'use client'

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { createUser } from "@/services"
import { toast } from "sonner"

type FormData = {
    name: string
  email: string
  password: string
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
        name:'',
      email: '',
      password: ''
    }
  })

  const onSubmit = async(data: FormData) => {
    const id=toast.loading("Creating user...")
    console.log("Form data:", data)
    const result=await createUser(data)
    if(result.success===true){
        toast.success("User created successfully",{id})
    }else{
        toast.error(result.message,{id})
    }
    
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted px-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                {...register("name", { required: "Name is required" })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Your Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full bg-color1 text-white hover:bg-color1/90">
              Login
            </Button>
          </form>
            <p>Already have an account?<Link href={'/login'}><span className="text-blue-600 font-bold">SingIn</span></Link></p>

        </CardContent>
      </Card>
    </div>
  )
}

export default RegisterPage
