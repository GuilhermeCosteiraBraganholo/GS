export default function AbrigosPage() {
    return (
      <section className="p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Abrigos Seguros</h1>
        <p className="text-gray-700 mb-6">
          Locais cadastrados como abrigos temporários para situações de emergência.
        </p>
  
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <AbrigoCard nome="Escola Municipal Aurora" local="Rua das Acácias, 120 - MG" capacidade={120} />
          <AbrigoCard nome="Centro Comunitário Nova Esperança" local="Av. Brasil, 765 - SP" capacidade={200} />
        </div>
      </section>
    );
  }
  
  function AbrigoCard({ nome, local, capacidade }: { nome: string; local: string; capacidade: number }) {
    return (
      <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition text-left">
        <h2 className="text-blue-700 font-semibold text-lg">{nome}</h2>
        <p className="text-gray-600">{local}</p>
        <p className="text-gray-500 text-sm">Capacidade: {capacidade} pessoas</p>
      </div>
    );
  }
  