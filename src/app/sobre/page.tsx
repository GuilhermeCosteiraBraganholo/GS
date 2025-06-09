"use client";
import React from "react";

export default function SobrePage() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Sobre o Projeto</h1>
      <p className="mb-4">
        O <strong>Mapa de Sobrevivência</strong> é uma iniciativa acadêmica desenvolvida para mapear e relatar áreas de risco
        em tempo real, com foco especial em regiões afetadas por enchentes, deslizamentos e rompimentos de barragens.
      </p>
      <p className="mb-4">
        A plataforma permite que cidadãos, voluntários e autoridades relatem incidentes, visualizem alertas, localizem abrigos e tomem decisões
        mais rápidas durante situações de emergência.
      </p>
      <p className="mb-4">
        Nosso objetivo é promover segurança, organização e comunicação eficaz em cenários de desastres, usando tecnologias como
        React/Next.js, APIs REST, banco de dados relacional e inteligência artificial.
      </p>
      <p className="italic">Inspirado na tragédia de Brumadinho, com a missão de prevenir novas perdas humanas e ambientais.</p>
    </div>
  );
}