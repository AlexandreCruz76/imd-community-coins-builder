import Head from 'next/head'
import Link from 'next/link'

const agents = [
  {
    id: 'estrategista',
    name: 'Estrategista de Lançamento',
    description: 'Define conceito, narrativa e tokenomics',
    icon: '🎯',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'designer',
    name: 'Designer de Identidade',
    description: 'Cria identidade visual e assets',
    icon: '🎨',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 'desenvolvedor',
    name: 'Desenvolvedor de Contrato',
    description: 'Prepara e valida contrato do token',
    icon: '💻',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'operador',
    name: 'Operador de Launch',
    description: 'Executa o lançamento na chain',
    icon: '🚀',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'gestor',
    name: 'Gestor de Comunidade',
    description: 'Constrói e engaja comunidade pós-lançamento',
    icon: '👥',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    id: 'analista',
    name: 'Analista de Mercado',
    description: 'Monitora performance e ajusta estratégia',
    icon: '📊',
    color: 'from-indigo-500 to-blue-600'
  }
]

export default function Agents() {
  return (
    <div className="min-h-screen bg-imd-dark text-white p-8">
      <Head>
        <title>Agentes - IMD Community Coins</title>
      </Head>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-imd-primary mb-8 text-center">
          Agentes do Builder
        </h1>

        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Cada agente tem uma função específica no processo de lançamento de tokens.
          Clique em um agente para ver seu prompt detalhado.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <Link
              key={agent.id}
              href={`/agents/${agent.id}`}
              className={`bg-gradient-to-r ${agent.color} p-6 rounded-xl hover:scale-105 transition-transform duration-200`}
            >
              <div className="text-4xl mb-4">{agent.icon}</div>
              <h2 className="text-xl font-bold mb-2">{agent.name}</h2>
              <p className="text-white/80">{agent.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gray-700 rounded-lg font-bold hover:bg-gray-600 transition-colors"
          >
            ← Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  )
}
