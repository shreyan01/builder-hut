'use client'
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Check, CreditCard, Zap, Crown, Rocket } from 'lucide-react'
import AppSidebar from "@/components/dashboard/app-sidebar"

interface PricingTier {
  id: number
  name: string
  price: string
  description: string
  features: string[]
  icon: React.ReactNode
  popular?: boolean
}

const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: "Starter",
    price: "$0",
    description: "Perfect for trying out our services",
    icon: <Zap className="w-6 h-6 text-orange-500" />,
    features: [
      "1 Portfolio Website",
      "Basic Templates",
      "Community Support",
      "Basic Analytics",
      "Custom Domain Support"
    ]
  },
  {
    id: 2,
    name: "Pro",
    price: "$12",
    description: "For professionals and growing portfolios",
    icon: <Crown className="w-6 h-6 text-orange-500" />,
    popular: true,
    features: [
      "5 Portfolio Websites",
      "Premium Templates",
      "Priority Support",
      "Advanced Analytics",
      "Custom Domain Support",
      "Remove Watermark",
      "Custom CSS Injection"
    ]
  },
  {
    id: 3,
    name: "Enterprise",
    price: "$29",
    description: "For large teams and organizations",
    icon: <Rocket className="w-6 h-6 text-orange-500" />,
    features: [
      "Unlimited Portfolios",
      "Custom Templates",
      "24/7 Priority Support",
      "Enterprise Analytics",
      "Multiple Custom Domains",
      "Team Management",
      "API Access",
      "Custom Branding"
    ]
  }
]

export default function Billing() {
  return (
    <div className="bg-black flex flex-col min-h-screen">
      <Header />
      <AppSidebar />
      <main className="flex-grow p-6 ml-64">
        <div className="max-w-6xl mx-auto">
          {/* Current Plan Section */}
          <section className="mb-12">
            <h1 className="text-3xl font-bold text-white mb-6">Billing</h1>
            <Card className="bg-black border-orange-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-orange-500" />
                  Current Subscription
                </CardTitle>
                <CardDescription className="text-orange-500">
                  Your current plan and billing details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white font-semibold">Free Plan</p>
                    <p className="text-sm text-gray-400">Billing cycle: Monthly</p>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Manage Subscription
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Pricing Tiers */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Available Plans</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pricingTiers.map((tier) => (
                <Card 
                  key={tier.id} 
                  className={`bg-black relative ${
                    tier.popular 
                      ? 'border-orange-500 border-2' 
                      : 'border-orange-500/50'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      {tier.icon}
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="text-orange-500">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <ul className="space-y-2">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-400">
                          <Check className="w-4 h-4 mr-2 text-orange-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={`w-full ${
                        tier.popular 
                          ? 'bg-orange-500 hover:bg-orange-600' 
                          : 'bg-black border border-orange-500 hover:bg-orange-500/10'
                      }`}
                    >
                      {tier.price === "$0" ? "Current Plan" : "Upgrade"}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
