export default function AlertasPage() {
    return (
      <section className="p-6">
        <h1 className="text-3xl font-bold text-blue-800 text-center mb-4">Alertas Emitidos</h1>
        <p className="text-center text-gray-700 mb-8">
          Alertas oficiais e colaborativos para situações de risco iminente.
        </p>
  
        <div className="space-y-4">
          <AlertaCard tipo="⚠️ Emergência" texto="Barragem sob risco de rompimento em Brumadinho." />
          <AlertaCard tipo="🌧️ Chuvas Intensas" texto="Volume de chuvas acima do normal em Belo Horizonte." />
          <AlertaCard tipo="🚧 Interdição" texto="Rodovia SP-332 interditada por deslizamento." />
        </div>
      </section>
    );
  }
  
  function AlertaCard({ tipo, texto }: { tipo: string; texto: string }) {
    return (
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg shadow">
        <h2 className="font-bold text-yellow-800">{tipo}</h2>
        <p className="text-gray-700">{texto}</p>
      </div>
    );
  }
  