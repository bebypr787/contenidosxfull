import { useRouter } from 'next/router'
import Link from 'next/link'
import { creators } from '@/lib/creators'

export default function Checkout() {
  const router = useRouter()
  const { pack } = router.query

  // Find selected pack
  let selectedPack
  if (pack) {
    creators.forEach((creator) => {
      const found = creator.packs.find(p => p.id === pack)
      if (found) selectedPack = { ...found, creator: creator.name }
    })
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <Link href="/" className="text-gray-400">&larr; Volver</Link>
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      {selectedPack ? (
        <div className="bg-gray-800 p-4 rounded-lg mb-4">
          <h2 className="text-2xl font-semibold">{selectedPack.title}</h2>
          <p className="text-gray-400">Creador: {selectedPack.creator}</p>
          <p className="text-gray-400 mb-4">Precio: ${selectedPack.price}</p>
        </div>
      ) : (
        <p className="mb-4">Suscripción mensual por $10</p>
      )}
      <button className="bg-green-600 text-white w-full py-2 rounded">Pagar (Demo)</button>
      <p className="text-xs text-gray-500 mt-2">Este es un checkout de demostración. No se realiza ningún cargo real.</p>
    </div>
  )
}
