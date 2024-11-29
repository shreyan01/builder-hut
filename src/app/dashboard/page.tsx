'use client'

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Plus, Edit, Trash2 } from 'lucide-react'

interface Portfolio {
  id: number
  name: string
  framework: string
}

export default function Dashboard() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([])
  const [newPortfolioName, setNewPortfolioName] = useState("")
  const [newPortfolioFramework, setNewPortfolioFramework] = useState("")

  const handleCreatePortfolio = () => {
    if (newPortfolioName.trim() && newPortfolioFramework) {
      setPortfolios([
        ...portfolios,
        { id: portfolios.length + 1, name: newPortfolioName, framework: newPortfolioFramework }
      ])
      setNewPortfolioName("")
      setNewPortfolioFramework("")
    }
  }

  const handleDeletePortfolio = (id: number) => {
    setPortfolios(portfolios.filter(portfolio => portfolio.id !== id))
  }

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6">Portfolios</h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Dialog>
              <DialogTrigger asChild>
                <Card className="bg-black border-dashed border-2 border-orange-500 hover:border-white cursor-pointer transition-colors">
                  <CardContent className="flex items-center justify-center h-full">
                    <Plus className="w-12 h-12 text-orange-500" />
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="bg-black text-white border border-orange-500">
                <DialogHeader>
                  <DialogTitle>Create New Portfolio</DialogTitle>
                  <DialogDescription className="text-orange-500">Add a new portfolio to your dashboard.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Portfolio name"
                      value={newPortfolioName}
                      onChange={(e) => setNewPortfolioName(e.target.value)}
                      className="bg-black border-orange-500 text-white"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="framework">Framework</Label>
                    <Select onValueChange={setNewPortfolioFramework} value={newPortfolioFramework}>
                      <SelectTrigger className="bg-black border-orange-500 text-white">
                        <SelectValue placeholder="Select a framework" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border border-orange-500">
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="sveltekit">SvelteKit</SelectItem>
                        <SelectItem value="astro">Astro</SelectItem>
                        <SelectItem value="nuxt">Nuxt.js</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handleCreatePortfolio} className="bg-orange-500 hover:bg-orange-600 text-white">
                    Create Portfolio
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {portfolios.map((portfolio) => (
              <Card key={portfolio.id} className="bg-black border-orange-500">
                <CardHeader>
                  <CardTitle className="text-white">{portfolio.name}</CardTitle>
                  <CardDescription className="text-orange-500">Framework: {portfolio.framework}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white">Click to view or edit this portfolio.</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                    <Edit className="w-4 h-4 mr-2" /> Edit
                  </Button>
                  <Button variant="destructive" onClick={() => handleDeletePortfolio(portfolio.id)} className="bg-orange-500 text-white hover:bg-orange-600">
                    <Trash2 className="w-4 h-4 mr-2" /> Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {portfolios.length === 0 && (
            <div className="text-center mt-12">
              <p className="text-white text-xl mb-6">
                Oops! Looks like you haven&apos;t created a portfolio yet.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Create Your First Portfolio</Button>
                </DialogTrigger>
                <DialogContent className="bg-black text-white border border-orange-500">
                  <DialogHeader>
                    <DialogTitle>Create New Portfolio</DialogTitle>
                    <DialogDescription className="text-orange-500">Add a new portfolio to your dashboard.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Portfolio name"
                        value={newPortfolioName}
                        onChange={(e) => setNewPortfolioName(e.target.value)}
                        className="bg-black border-orange-500 text-white"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="framework">Framework</Label>
                      <Select onValueChange={setNewPortfolioFramework} value={newPortfolioFramework}>
                        <SelectTrigger className="bg-black border-orange-500 text-white">
                          <SelectValue placeholder="Select a framework" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border border-orange-500">
                          <SelectItem value="next">Next.js</SelectItem>
                          <SelectItem value="sveltekit">SvelteKit</SelectItem>
                          <SelectItem value="astro">Astro</SelectItem>
                          <SelectItem value="nuxt">Nuxt.js</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleCreatePortfolio} className="bg-orange-500 hover:bg-orange-600 text-white">
                      Create Portfolio
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

