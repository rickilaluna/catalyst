"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { UserCircle, Menu, X } from "lucide-react"
import { useState } from "react"
import { useUser } from "@/app/contexts/UserContext"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const { user, logout, isAuthenticated } = useUser()
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    router.push("/")
  }
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
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
          {/* Primary Navigation - Most common user actions */}
          <div className="flex items-center space-x-4 mr-4">
            <Link 
              href="/accelerators" 
              className="flex items-center space-x-1 bg-primary/10 text-primary px-3 py-1.5 rounded-md font-medium text-sm hover:bg-primary/20 transition-colors"
            >
              <span>Start Learning</span>
            </Link>
            <Link 
              href="/playground" 
              className="flex items-center space-x-1 bg-secondary/20 px-3 py-1.5 rounded-md font-medium text-sm hover:bg-secondary/30 transition-colors"
            >
              <span>AI Playground</span>
            </Link>
          </div>

          {/* Secondary Navigation - Organized by logical sections */}
          <div className="flex items-center space-x-6 border-l pl-4">
            <div className="group relative">
              <Link href="/learning-hub" className="text-sm font-medium hover:text-primary group-hover:text-primary flex items-center">
                Learn
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-3 w-3"><path d="m6 9 6 6 6-6"/></svg>
              </Link>
              <div className="absolute left-0 top-full mt-1 w-48 rounded-md bg-card border shadow-lg hidden group-hover:block z-50">
                <div className="p-2 flex flex-col">
                  <Link href="/accelerators" className="text-sm px-3 py-2 rounded-md hover:bg-secondary/20">
                    Accelerators
                  </Link>
                  <Link href="/modules/design-basics" className="text-sm px-3 py-2 rounded-md hover:bg-secondary/20">
                    Modules
                  </Link>
                  <Link href="/learning-hub" className="text-sm px-3 py-2 rounded-md hover:bg-secondary/20">
                    Learning Hub
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <Link href="/ai-tools" className="text-sm font-medium hover:text-primary group-hover:text-primary flex items-center">
                Tools
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-3 w-3"><path d="m6 9 6 6 6-6"/></svg>
              </Link>
              <div className="absolute left-0 top-full mt-1 w-48 rounded-md bg-card border shadow-lg hidden group-hover:block z-50">
                <div className="p-2 flex flex-col">
                  <Link href="/ai-tools" className="text-sm px-3 py-2 rounded-md hover:bg-secondary/20">
                    AI Tools
                  </Link>
                  <Link href="/playground" className="text-sm px-3 py-2 rounded-md hover:bg-secondary/20">
                    AI Playground
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/community" className="text-sm font-medium hover:text-primary">
              Community
            </Link>
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <span className="hidden md:inline text-sm font-medium">Welcome, {user?.firstName}!</span>
              <Link href="/catalyst-hub" className="hidden md:flex items-center space-x-1 bg-primary/10 text-primary px-3 py-1.5 rounded-md font-medium text-sm hover:bg-primary/20 transition-colors">
                <span>My Dashboard</span>
              </Link>
              <div className="relative group">
                <button className="flex items-center">
                  <UserCircle className="h-6 w-6" />
                </button>
                <div className="absolute right-0 top-full mt-1 w-48 rounded-md bg-card border shadow-lg hidden group-hover:block z-50">
                  <div className="p-2 flex flex-col">
                    <div className="px-3 py-2 text-sm font-medium border-b mb-1">
                      {user?.firstName} {user?.lastName}
                    </div>
                    <Link href="/profile" className="text-sm px-3 py-2 rounded-md hover:bg-secondary/20">
                      Profile Settings
                    </Link>
                    <Link href="/catalyst-hub" className="text-sm px-3 py-2 rounded-md hover:bg-secondary/20">
                      My Dashboard
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="text-sm px-3 py-2 rounded-md hover:bg-secondary/20 text-left text-destructive hover:text-destructive"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              </div>
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
            </>
          )}
          
          {/* Mobile menu button - only visible on small screens */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu - slides in from the top when open */}
      <div className={`md:hidden absolute top-[57px] left-0 right-0 bg-background border-b z-50 shadow-lg transition-transform duration-200 ease-in-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="px-4 py-4 space-y-4">
          {/* Primary Mobile CTAs */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Link 
              href="/accelerators" 
              className="flex justify-center items-center space-x-1 bg-primary/10 text-primary px-3 py-2.5 rounded-md font-medium text-sm hover:bg-primary/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Start Learning</span>
            </Link>
            <Link 
              href="/playground" 
              className="flex justify-center items-center space-x-1 bg-secondary/20 px-3 py-2.5 rounded-md font-medium text-sm hover:bg-secondary/30 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Try AI Tools</span>
            </Link>
          </div>
          
          {/* All Mobile Nav Links */}
          <div className="space-y-1 border-t pt-3">
            <p className="px-2 text-xs font-medium text-muted-foreground mb-1">LEARN</p>
            <Link 
              href="/learning-hub" 
              className="block px-2 py-2 text-sm rounded-md hover:bg-secondary/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Learning Hub
            </Link>
            <Link 
              href="/accelerators" 
              className="block px-2 py-2 text-sm rounded-md hover:bg-secondary/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accelerators
            </Link>
            <Link 
              href="/modules/design-basics" 
              className="block px-2 py-2 text-sm rounded-md hover:bg-secondary/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Modules
            </Link>
          </div>
          
          <div className="space-y-1 border-t pt-3">
            <p className="px-2 text-xs font-medium text-muted-foreground mb-1">TOOLS</p>
            <Link 
              href="/ai-tools" 
              className="block px-2 py-2 text-sm rounded-md hover:bg-secondary/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Tools
            </Link>
            <Link 
              href="/playground" 
              className="block px-2 py-2 text-sm rounded-md hover:bg-secondary/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Playground
            </Link>
          </div>
          
          <div className="space-y-1 border-t pt-3">
            <p className="px-2 text-xs font-medium text-muted-foreground mb-1">COMMUNITY</p>
            <Link 
              href="/community" 
              className="block px-2 py-2 text-sm rounded-md hover:bg-secondary/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community Hub
            </Link>
          </div>
          
          {isAuthenticated && (
            <div className="space-y-1 border-t pt-3">
              <p className="px-2 text-xs font-medium text-muted-foreground mb-1">ACCOUNT</p>
              <Link 
                href="/catalyst-hub" 
                className="block px-2 py-2 text-sm rounded-md hover:bg-secondary/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                My Dashboard
              </Link>
              <Link 
                href="/profile" 
                className="block px-2 py-2 text-sm rounded-md hover:bg-secondary/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profile Settings
              </Link>
              <button 
                onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                className="w-full text-left px-2 py-2 text-sm rounded-md hover:bg-secondary/20 text-destructive"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

