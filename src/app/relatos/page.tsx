'use client'

import { useEffect, useState } from 'react'
import { Relato } from '../types/Relato'

export default function RelatosPage() {
  const [relatos, setRelatos] = useState<Relato[]>([])
  const [form, setForm] = useState<Relato>({
    id: 0,
    local: '',
    tipo: '',
    risco: 1,
    descricao: '',
    autor: ''
  })

  // Buscar relatos
  const fetchRelatos = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/relatos')
      const data = await res.json()
      setRelatos(data)
    } catch (err) {
      console.error('Erro ao buscar relatos:', err)
    }
  }

  useEffect(() => {
    fetchRelatos()
  }, [])

  // Enviar novo relato
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('http://localhost:8080/api/relatos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      setForm({
        id: 0,
        local: '',
        tipo: '',
        risco: 1,
        descricao: '',
        autor: ''
      })
      fetchRelatos()
    } catch (err) {
      console.error('Erro ao enviar relato:', err)
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Relatos da Comunidade</h1>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full p-2 mb-2 text-black"
          value={form.autor}
          onChange={(e) => setForm({ ...form, autor: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Local do relato"
          className="w-full p-2 mb-2 text-black"
          value={form.local}
          onChange={(e) => setForm({ ...form, local: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Tipo (enchente, deslizamento, etc)"
          className="w-full p-2 mb-2 text-black"
          value={form.tipo}
          onChange={(e) => setForm({ ...form, tipo: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Nível de risco (1 a 5)"
          className="w-full p-2 mb-2 text-black"
          min={1}
          max={5}
          value={form.risco}
          onChange={(e) => setForm({ ...form, risco: Number(e.target.value) })}
          required
        />
        <textarea
          placeholder="Descrição do ocorrido"
          className="w-full p-2 mb-2 text-black"
          value={form.descricao}
          onChange={(e) => setForm({ ...form, descricao: e.target.value })}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
          Enviar
        </button>
      </form>

      <h2 className="text-xl font-semibold mt-6">Relatos recebidos</h2>
      <div className="mt-4">
        {relatos.length > 0 ? (
          relatos.map((relato) => (
            <div key={relato.id} className="bg-white text-black p-3 mb-3 rounded shadow">
              <p><strong>Autor:</strong> {relato.autor}</p>
              <p><strong>Local:</strong> {relato.local}</p>
              <p><strong>Tipo:</strong> {relato.tipo}</p>
              <p><strong>Risco:</strong> {relato.risco}</p>
              <p><strong>Descrição:</strong> {relato.descricao}</p>
            </div>
          ))
        ) : (
          <p>Nenhum relato encontrado.</p>
        )}
      </div>
    </div>
  )
}
