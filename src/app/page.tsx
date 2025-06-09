import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-12 bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
        Mapa de Sobrevivência
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
        Um projeto colaborativo para identificar, relatar e agir em áreas de risco. Salve vidas, compartilhe informações e encontre ajuda em momentos críticos.
      </p>

      <Link href="/mapa">
        <button className="bg-blue-700 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-800 transition">
          Acessar o Mapa
        </button>
      </Link>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <FeatureCard
          title="📍 Mapeamento em Tempo Real"
          description="Visualize zonas de risco diretamente no mapa com base em dados colaborativos."
        />
        <FeatureCard
          title="📢 Alertas e Relatos"
          description="Receba avisos de emergência e veja relatos atualizados da população."
        />
        <FeatureCard
          title="🏠 Abrigos Seguros"
          description="Encontre os abrigos mais próximos em situações de emergência."
        />
      </div>
    </section>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
