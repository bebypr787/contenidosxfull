import Link from 'next/link'
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a ContenidosX</h1>
        <p className="text-lg mb-6">Explora perfiles de creadores y adquiere packs exclusivos.</p>
        <div className="space-x-4">
          <Link href="/creators" className="bg-red-600 text-white px-4 py-2 rounded-lg">Ver Creadores</Link>
          <Link href="/packs" className="bg-gray-700 text-white px-4 py-2 rounded-lg">Ver Packs</Link>
        </div>
      </div>
    </div>
  )
}
