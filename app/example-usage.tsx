import { PlaceholderImage } from "@/components/placeholder-image"

export default function ExamplePage() {
  return (
    <div className="space-y-4">
      <PlaceholderImage width={400} height={200} text="Accelerator Image" />

      <PlaceholderImage
        width={200}
        height={200}
        text="Avatar"
        bgColor="#f0f9ff"
        textColor="#0369a1"
        className="rounded-full"
      />
    </div>
  )
}

