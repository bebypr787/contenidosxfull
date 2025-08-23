import Link from 'next/link'
import { creators } from '@/lib/creators'

// Flatten packs across all creators
const allPacks = creators.flatMap((creator) =>
  creator.packs.map((pack) => ({ ...pack, creator: creator.username, creatorName: creator.name }))
)

export default function PacksPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Todos los Packs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {allPacks.map((pack) => (
          <div key={pack.id} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-1">{pack.title}</h3>
            <p className="text-gray-400 mb-1">Por {pack.creatorName}</p>
            <p className="text-gray-400 mb-3">Precio: ${pack.price}</p>
            <Link href={{ pathname: '/checkout', query: { pack: pack.id } }} className="bg-red-600 text-white px-3 py-2 rounded">Comprar</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
