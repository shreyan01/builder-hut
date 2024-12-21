'use client'
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Header } from "@/components/header"
import { Eye, Code, Sparkles } from 'lucide-react'
import Image from "next/image"
import AppSidebar from "@/components/dashboard/app-sidebar"

interface Template {
  id: number
  name: string
  description: string
  image: string
  category: 'minimal' | 'creative' | 'professional'
  features: string[]
}

const templates: Template[] = [
  {
    id: 1,
    name: "Minimal Portfolio",
    description: "Clean and minimalistic design perfect for developers",
    image: "/templates/minimal.jpg",
    category: "minimal",
    features: ["Dark/Light mode", "Responsive design", "Blog section", "Project showcase"]
  },
  {
    id: 2,
    name: "Creative Studio",
    description: "Bold and artistic layout for creative professionals",
    image: "/templates/creative.jpg",
    category: "creative",
    features: ["Animation effects", "Gallery grid", "Contact form", "Social media integration"]
  },
  {
    id: 3,
    name: "Professional Resume",
    description: "Traditional layout focusing on work experience",
    image: "/templates/professional.jpg",
    category: "professional",
    features: ["Resume download", "Skills section", "Timeline view", "Testimonials"]
  },
  // Add more templates as needed
]

export default function Templates() {
  return (
    <div className="bg-black flex flex-col min-h-screen">
      <Header />
      <AppSidebar />
      <main className="flex-grow p-6 ml-64">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-white">Templates</h1>
            <div className="flex gap-2">
              <Button variant="outline" className="border-orange-500 text-orange-500">
                All Templates
              </Button>
              <Button variant="outline" className="border-orange-500 text-orange-500">
                Minimal
              </Button>
              <Button variant="outline" className="border-orange-500 text-orange-500">
                Creative
              </Button>
              <Button variant="outline" className="border-orange-500 text-orange-500">
                Professional
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <Card key={template.id} className="bg-black border-orange-500 overflow-hidden">
                <div className="relative aspect-video w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                  <Image
                    src={template.image}
                    alt={template.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-orange-500" />
                    {template.name}
                  </CardTitle>
                  <CardDescription className="text-orange-500">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">Features:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {template.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1 border-orange-500 text-orange-500">
                        <Eye className="w-4 h-4 mr-2" /> Preview
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-black text-white border border-orange-500 max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>{template.name}</DialogTitle>
                        <DialogDescription className="text-orange-500">
                          Preview of the template
                        </DialogDescription>
                      </DialogHeader>
                      <div className="aspect-video w-full bg-gray-900 rounded-lg">
                        {/* Add iframe or preview content here */}
                      </div>
                      <DialogFooter>
                        <Button className="bg-orange-500 hover:bg-orange-600">
                          Use This Template
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  
                  <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
                    <Code className="w-4 h-4 mr-2" /> Use Template
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
