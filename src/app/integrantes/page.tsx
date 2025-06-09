export default function IntegrantesPage() {
  const membros = [
    { nome: "Guilherme Costeira Braganholo", rm: "RM560628", turma: "1TDSPA" },
    { nome: "Julio Cesar Dias Vilella", rm: "RM560494", turma: "1TDSPA" },
    { nome: "Gabriel Nakamura Ogata", rm: "RM560671", turma: "1TDSPA" },
  ];

  return (
    <section className="p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Integrantes</h1>
      <ul className="space-y-3">
        {membros.map((membro, index) => (
          <li key={index} className="bg-white shadow rounded-lg p-4">
            <strong>{membro.nome}</strong> — {membro.rm} ({membro.turma})
          </li>
        ))}
      </ul>
    </section>
  );
}
