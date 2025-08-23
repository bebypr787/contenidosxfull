import { useRouter } from 'next/router'
import { creators } from '@/lib/creators'
import Link from 'next/link'

export default function CreatorProfile() {
  const router = useRouter()
  const { username } = router.query
  const creator = creators.find(c => c.username === username)

  if (!creator) return <p className="p-4">Cargando...</p>

  return (
    <div className="p-4">
      <Link href="/creators" className="text-gray-400">&larr; Volver</Link>
      <div className="flex items-center space-x-6 mt-4">
        <img src={creator.avatar} alt={creator.name} className="w-24 h-24 rounded-full" />
        <div>
          <h1 className="text-3xl font-bold">{creator.name}</h1>
          <p className="text-gray-400">@{creator.username}</p>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Packs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {creator.packs.map((pack) => (
          <div key={pack.id} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{pack.title}</h3>
            <p className="text-gray-400 mb-4">Precio: ${pack.price}</p>
            <Link href={{ pathname: '/checkout', query: { pack: pack.id } }} className="bg-red-600 text-white px-3 py-2 rounded">Comprar Pack</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
