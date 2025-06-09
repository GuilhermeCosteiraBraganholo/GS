'use client'; // 🟢 Faz a página rodar no cliente, permitindo usar MapView com Leaflet

import dynamic from 'next/dynamic';

const MapView = dynamic(() => import('@/components/MapView'), {
  ssr: false,
});

export default function MapaPage() {
  return (
    <section className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center">
        Mapa de Áreas de Risco
      </h1>

      <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
        Acompanhe em tempo real as regiões afetadas por enchentes, deslizamentos e outros eventos extremos.
        Este mapa é colaborativo e será abastecido por dados oficiais e relatos da comunidade.
      </p>

      <div className="max-w-5xl mx-auto">
        <MapView />
      </div>
    </section>
  );
}
