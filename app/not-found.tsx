import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-muted-foreground">Could not find requested resource</p>
      <Link
        href="/"
        className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
} 