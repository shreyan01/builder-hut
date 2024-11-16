'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaFacebook, FaGoogle } from 'react-icons/fa'

export default function Component() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 relative overflow-hidden">
      {/* Orange blur blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <Card className="w-full max-w-md border-zinc-800 bg-zinc-950/80 text-white backdrop-blur-sm rounded-2xl p-6">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription className="text-zinc-400">
            Choose your preferred authentication method
          </CardDescription>
        </CardHeader>
        <CardContent className="p-3 space-y-6 rounded-md">
          <Tabs defaultValue="signin" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 bg-zinc-900 rounded-lg p-3">
              <TabsTrigger value="signin" className="data-[state=active]:bg-orange-600 rounded-lg text-lg py-2">Sign In</TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-orange-600 rounded-lg text-lg py-2">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    placeholder="m@example.com"
                    required
                    type="email"
                    className="border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-400 rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <Input
                    id="password"
                    required
                    type="password"
                    className="border-zinc-800 bg-zinc-900 text-white rounded-md"
                  />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 rounded-md">
                  Sign In
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-zinc-700" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-zinc-950 px-2 text-zinc-400">Or continue with</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex items-center justify-center w-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 rounded-md py-2">
                    <FaFacebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center w-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 rounded-md py-2">
                    <FaGoogle className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="signup">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-400 rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-signup" className="text-white">Email</Label>
                  <Input
                    id="email-signup"
                    placeholder="m@example.com"
                    required
                    type="email"
                    className="border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-400 rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-signup" className="text-white">Password</Label>
                  <Input
                    id="password-signup"
                    required
                    type="password"
                    className="border-zinc-800 bg-zinc-900 text-white rounded-md"
                  />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 rounded-md">
                  Sign Up
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-zinc-700" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-zinc-950 px-2 text-zinc-400">Or continue with</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex items-center justify-center w-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 rounded-md py-2">
                    <FaFacebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                  <Button variant="outline" className="flex items-center justify-center w-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 rounded-md py-2">
                    <FaGoogle className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}