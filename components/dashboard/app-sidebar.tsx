'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()

  const navItems = [
    {
      label: 'Portfolios',
      icon: 'mdi:briefcase-outline',
      href: '/dashboard',
    },
    {
      label: 'Deployment',
      icon: 'mdi:cloud-upload-outline',
      href: '/dashboard/deployment',
    },
    {
      label: 'Templates',
      icon: 'mdi:file-document-outline',
      href: '/dashboard/templates',
    },
    {
      label: 'Billing',
      icon: 'mdi:credit-card-outline',
      href: '/dashboard/billing',
    },
  ]

  return (
    <aside 
      className={`fixed left-0 top-0 h-screen bg-black transition-all duration-300 ease-in-out ${
        collapsed ? 'w-16' : 'w-64'
      } p-4`}
    >
      <div className="flex flex-col h-full">
        {/* Navigation Items */}
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => router.push(item.href)}
              className={`w-full flex items-center px-2 py-3 text-white hover:bg-white/10 rounded-lg transition-colors ${
                collapsed ? 'justify-center' : 'justify-start space-x-3'
              }`}
            >
              <Icon icon={item.icon} className="h-6 w-6" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mt-auto w-full flex items-center justify-center px-2 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <Icon 
            icon={collapsed ? 'mdi:chevron-right' : 'mdi:chevron-left'} 
            className="h-6 w-6"
          />
        </button>
      </div>
    </aside>
  )
}

export default Sidebar