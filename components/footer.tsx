import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-8 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Catalyst</h3>
            <p className="text-sm text-muted-foreground">
              Empowering UX designers with AI skills through interactive learning.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/trails" className="text-muted-foreground hover:text-primary">
                  Learning Trails
                </Link>
              </li>
              <li>
                <Link href="/playground" className="text-muted-foreground hover:text-primary">
                  AI Playground
                </Link>
              </li>
              <li>
                <Link href="/certification" className="text-muted-foreground hover:text-primary">
                  Certification
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-primary">
                  Forums
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="text-muted-foreground hover:text-primary">
                  Project Showcase
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Catalyst. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

