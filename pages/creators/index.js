import Link from 'next/link'
import { creators } from '@/lib/creators'

export default function CreatorsPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Creadores</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {creators.map((creator) => (
          <Link key={creator.username} href={`/creators/${creator.username}`} className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700">
            <div className="flex items-center space-x-4">
              <img src={creator.avatar} alt={creator.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                <h2 className="text-xl font-semibold">{creator.name}</h2>
                <p className="text-sm text-gray-400">@{creator.username}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
