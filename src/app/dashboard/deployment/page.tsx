'use client'
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Plus, Globe, Rocket, ShoppingCart } from 'lucide-react'
import AppSidebar from "@/components/dashboard/app-sidebar"

interface Domain {
  id: number
  name: string
  deployedPortfolio?: string
  status: 'active' | 'inactive'
}

interface Portfolio {
  id: number
  name: string
}

export default function Deployment() {
  const [domains, setDomains] = useState<Domain[]>([
    { id: 1, name: 'example.com', deployedPortfolio: 'Portfolio 1', status: 'active' },
    { id: 2, name: 'mysite.com', status: 'inactive' },
  ])
  
  const [portfolios] = useState<Portfolio[]>([
    { id: 1, name: 'Portfolio 1' },
    { id: 2, name: 'Portfolio 2' },
  ])

  const [selectedPortfolio, setSelectedPortfolio] = useState("")
  const [selectedDomain, setSelectedDomain] = useState("")

  const handleDeploy = () => {
    if (selectedPortfolio && selectedDomain) {
      setDomains(domains.map(domain => 
        domain.name === selectedDomain 
          ? { ...domain, deployedPortfolio: selectedPortfolio, status: 'active' }
          : domain
      ))
    }
  }

  return (
    <div className="bg-black flex flex-col min-h-screen">
      <Header />
      <AppSidebar />
      <main className="flex-grow p-6 ml-64">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6">Deployment</h1>

          {/* Domains Section */}
          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white">Your Domains</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <Plus className="w-4 h-4 mr-2" /> Deploy to Domain
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-black text-white border border-orange-500">
                  <DialogHeader>
                    <DialogTitle>Deploy to Domain</DialogTitle>
                    <DialogDescription className="text-orange-500">
                      Choose a portfolio and domain to deploy
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Select onValueChange={setSelectedPortfolio}>
                      <SelectTrigger className="bg-black border-orange-500">
                        <SelectValue placeholder="Select Portfolio" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border border-orange-500">
                        {portfolios.map((portfolio) => (
                          <SelectItem key={portfolio.id} value={portfolio.name}>
                            {portfolio.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select onValueChange={setSelectedDomain}>
                      <SelectTrigger className="bg-black border-orange-500">
                        <SelectValue placeholder="Select Domain" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border border-orange-500">
                        {domains.map((domain) => (
                          <SelectItem key={domain.id} value={domain.name}>
                            {domain.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleDeploy} className="bg-orange-500 hover:bg-orange-600">
                      <Rocket className="w-4 h-4 mr-2" /> Deploy
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {domains.map((domain) => (
                <Card key={domain.id} className="bg-black border-orange-500">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Globe className="w-5 h-5 mr-2" /> {domain.name}
                    </CardTitle>
                    <CardDescription className="text-orange-500">
                      {domain.deployedPortfolio 
                        ? `Deployed: ${domain.deployedPortfolio}`
                        : 'Not deployed'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      domain.status === 'active' 
                        ? 'bg-green-500/20 text-green-500'
                        : 'bg-gray-500/20 text-gray-500'
                    }`}>
                      {domain.status}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Domain Purchase Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Purchase Custom Domain</h2>
            <Card className="bg-black border-orange-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" /> Custom Domains
                </CardTitle>
                <CardDescription className="text-orange-500">
                  Get your unique domain name
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white">
                <p>Purchase a custom domain to make your portfolio stand out.</p>
                <ul className="mt-4 space-y-2">
                  <li>• Professional web presence</li>
                  <li>• Free SSL certificate</li>
                  <li>• 24/7 support</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Browse Domains
                </Button>
              </CardFooter>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}
