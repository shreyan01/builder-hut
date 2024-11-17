'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { useRouter } from "next/navigation"

export default function Component() {
  const router=useRouter()
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const handleGoogleSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };
  const handleFacebookSignIn = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
    });

    if (error) {
      console.error('Error signing in with Facebook:', error.message);
    }
  };
  const handleSignUp = async () => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username
        }
      }
    });

    if (error) setError(error.message);
    setLoading(false);
  };
  const handleSignIn = async () => {
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      router.push('/dashboard'); // Redirect to dashboard
    }
    
    setLoading(false);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 relative overflow-hidden">
      {/* Orange blur blobs */}
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-orange-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-orange-700 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      
      <Card className="w-full max-w-md border-orange-600 bg-zinc-950/80 text-white backdrop-blur-sm rounded-2xl p-6">
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
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-400 rounded-md px-2"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <Input
                    id="password"
                    required
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    className="border-zinc-800 bg-zinc-900 text-white rounded-md px-2"
                  />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 rounded-md" onClick={handleSignIn}>
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
                  <Button onClick={handleFacebookSignIn} variant="outline" className="flex items-center justify-center w-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 rounded-md py-2">
                    <FaFacebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                  <Button variant="outline" onClick={handleGoogleSignIn} className="flex items-center justify-center w-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 rounded-md py-2">
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
                    className="border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-400 rounded-md px-2"
                    onChange={(e)=>setUsername(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-signup" className="text-white">Email</Label>
                  <Input
                    id="email-signup"
                    placeholder="m@example.com"
                    required
                    type="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    className="border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-400 rounded-md px-2"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-signup" className="text-white">Password</Label>
                  <Input
                    id="password-signup"
                    required
                    type="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    className="border-zinc-800 bg-zinc-900 text-white rounded-md px-2"
                  />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 rounded-md" onClick={handleSignUp}>
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
                  <Button onClick={handleFacebookSignIn} variant="outline" className="flex items-center justify-center w-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 rounded-md py-2">
                    <FaFacebook className="mr-2 h-4 w-4" />
                    Facebook
                  </Button>
                  <Button onClick={handleGoogleSignIn} variant="outline" className="flex items-center justify-center w-full bg-zinc-900 border-zinc-800 hover:bg-zinc-800 rounded-md py-2">
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