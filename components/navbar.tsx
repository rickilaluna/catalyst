"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { UserCircle } from "lucide-react"
import { useUser } from "@/app/contexts/UserContext"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const { user, logout, isAuthenticated } = useUser()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/app-icon.png"
            alt="Catalyst Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-bold text-2xl text-primary">Catalyst</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/catalyst-hub" className="text-sm font-medium hover:text-primary">
            Catalyst Hub
          </Link>
          <Link href="/accelerators" className="text-sm font-medium hover:text-primary">
            Accelerators
          </Link>
          <Link href="/modules/design-basics" className="text-sm font-medium hover:text-primary">
            Modules
          </Link>
          <Link href="/ai-tools" className="text-sm font-medium hover:text-primary">
            AI Tools
          </Link>
          <Link href="/playground" className="text-sm font-medium hover:text-primary">
            AI Playground
          </Link>
          <Link href="/community" className="text-sm font-medium hover:text-primary">
            Community
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <span className="text-sm font-medium">Welcome, {user?.firstName}!</span>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                Log out
              </Button>
              <Link href="/profile">
                <UserCircle className="h-6 w-6" />
              </Link>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">Sign up</Button>
              </Link>
              <Link href="/profile" className="md:hidden">
                <UserCircle className="h-6 w-6" />
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

