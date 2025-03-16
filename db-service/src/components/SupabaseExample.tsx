'use client'

import { useState, useEffect } from 'react'
import { useSupabase } from '@/hooks/useSupabase'

interface ExampleData {
  id: number
  created_at: string
  name: string
}

export function SupabaseExample() {
  const supabase = useSupabase()
  const [data, setData] = useState<ExampleData[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        // Reemplaza 'example_table' con el nombre de tu tabla real
        const { data, error } = await supabase
          .from('example_table')
          .select('*')
          .limit(10)
        
        if (error) {
          throw error
        }
        
        setData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido')
        console.error('Error fetching data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [supabase])

  if (loading) return <div>Cargando datos...</div>
  if (error) return <div>Error: {error}</div>
  if (!data) return <div>No hay datos disponibles</div>

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Datos de Supabase</h2>
      <div className="border rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de creación</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(item.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 