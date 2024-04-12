import { XCircle } from "lucide-react"

const EmptyState = () => {
  return (
    <div className="relative col-span-full h-80 bg-gray-50 w-full flex flex-col p-12 items-center justify-center">
      <XCircle className="h-8 w-8 text-red-500" />
      <h3 className="font-semibold text-xl">No Products Found</h3>
      <p className="text-zinc-500 text-sm">We Found No Search result product</p>
    </div>
  )
}

export default EmptyState