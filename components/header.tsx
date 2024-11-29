import { Frame } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between h-16 px-4 border-b border-orange-500 bg-black">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-white">
        <Frame className="w-6 h-6 text-orange-500" />
        <span>Builderhut</span>
      </Link>
      <nav className="flex items-center gap-4">
        <Link href="/dashboard" className="text-white hover:text-orange-500">Dashboard</Link>
        <Link href="/templates" className="text-white hover:text-orange-500">Templates</Link>
        <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
          Upgrade
        </Button>
      </nav>
    </header>
  )
}

