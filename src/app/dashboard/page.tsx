'use client'
import { useState } from 'react'
import { ArrowRight, Book, Globe, Grid, Layout, Plus, Settings, User } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Dashboard() {
  const [selectedTemplate, setSelectedTemplate] = useState('blank')

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 p-4">
        <h1 className="mb-8 text-2xl font-bold text-orange-500">Portfolio SaaS</h1>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start text-white">
            <Layout className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white">
            <Grid className="mr-2 h-4 w-4" />
            Templates
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white">
            <Globe className="mr-2 h-4 w-4" />
            Domains
          </Button>
          <Button variant="ghost" className="w-full justify-start text-white">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-8">
        <h2 className="mb-6 text-3xl font-bold">Welcome back, User!</h2>

        <Tabs defaultValue="create" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="create">Create Portfolio</TabsTrigger>
            <TabsTrigger value="manage">Manage Portfolios</TabsTrigger>
          </TabsList>
          <TabsContent value="create">
            <Card className="bg-zinc-800">
              <CardHeader>
                <CardTitle>Create New Portfolio</CardTitle>
                <CardDescription>Choose a template or start from scratch</CardDescription>
              </CardHeader>
              <CardContent>
                <Label htmlFor="template">Select Template</Label>
                <Select onValueChange={setSelectedTemplate} defaultValue={selectedTemplate}>
                  <SelectTrigger id="template" className="bg-zinc-700">
                    <SelectValue placeholder="Select a template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blank">Blank Template</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="creative">Creative</SelectItem>
                    <SelectItem value="minimal">Minimal</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
              <CardFooter>
                <Button className="bg-orange-500 text-white hover:bg-orange-600">
                  Create Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="manage">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-zinc-800">
                <CardHeader>
                  <CardTitle>My Portfolio</CardTitle>
                  <CardDescription>Last updated: 2 days ago</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>myportfolio.com</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="mr-2">
                    Edit
                  </Button>
                  <Button variant="outline">View</Button>
                </CardFooter>
              </Card>
              <Card className="flex items-center justify-center bg-zinc-800 p-6">
                <Button variant="ghost" className="h-32 w-full">
                  <Plus className="mr-2 h-6 w-6" />
                  Create New Portfolio
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mt-8 bg-zinc-800">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-24 flex-col items-center justify-center">
              <Plus className="mb-2 h-6 w-6" />
              New Portfolio
            </Button>
            <Button variant="outline" className="h-24 flex-col items-center justify-center">
              <Globe className="mb-2 h-6 w-6" />
              Manage Domains
            </Button>
            <Button variant="outline" className="h-24 flex-col items-center justify-center">
              <Book className="mb-2 h-6 w-6" />
              View Tutorials
            </Button>
            <Button variant="outline" className="h-24 flex-col items-center justify-center">
              <User className="mb-2 h-6 w-6" />
              Account Settings
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}