import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

const agentData = {
  estrategista: {
    name: 'Estrategista de Lançamento',
    description: 'Define conceito, narrativa e tokenomics',
    icon: '🎯',
    color: 'from-blue-500 to-purple-600',
    prompt: `Você é um estrategista de launch de tokens. Sua tarefa é criar:
- Nome e símbolo curtos e memoráveis
- Tese de valor em 1 frase
- Utilidade prática (acesso, votação, perks, drops)
- Distribuição inicial (comunidade, tesouraria, time, marketing, reservas)
- Estratégia de lançamento em 7 dias

Use como referência o protocolo IMD Community Coins, onde:
- Tokens são precificados em IMD via bonding curve
- Oferta fixa de 1B tokens
- Fee de 0,5% para o launcher em cada trade
- Pool ETH/IMD compartilhada

Entregue um plano claro e executável.`,
    source: 'Documentação IMD'
  },
  designer: {
    name: 'Designer de Identidade',
    description: 'Cria identidade visual e assets',
    icon: '🎨',
    color: 'from-pink-500 to-rose-600',
    prompt: `Você é um designer de identidade para tokens. Sua tarefa é criar:
- Logo (descrição textual ou SVG)
- Paleta de cores (3-5 cores)
- Banner para X/Telegram
- Ícones e elementos visuais

O estilo deve ser: [meme/serious/premium/gamer]
O token se chama: [NOME]
Símbolo: [SYM]

Entregue descrições claras que possam ser implementadas por ferramentas de design.`,
    source: 'Referências visuais de tokens virais'
  },
  desenvolvedor: {
    name: 'Desenvolvedor de Contrato',
    description: 'Prepara e valida contrato do token',
    icon: '💻',
    color: 'from-green-500 to-emerald-600',
    prompt: `Você é um desenvolvedor Solidity especializado em Uniswap v4 e hooks.
Sua tarefa é:
- Criar contrato ERC-20 com supply fixo de 1B
- Implementar metadata (nome, símbolo, website, social)
- Validar integração com o launchpad IMD
- Garantir compatibilidade com ERC-6909 e PoolManager

Use como referência:
- Contrato de launch: 0x73d1ae084F04f793A5bbd6B623d74400C9Fc3f42
- Hook: 0x51768F5dA32BA2008304cC81674da51aCb802888
- IMD token: 0xD34a99Bc0f67aE1bbd63C660e6d0b0dd03E263B7

Entregue código pronto para deploy e checklist de validação.`,
    source: 'Documentação IMD e contratos verificados'
  },
  operador: {
    name: 'Operador de Launch',
    description: 'Executa o lançamento na chain',
    icon: '🚀',
    color: 'from-orange-500 to-red-600',
    prompt: `Você é um operador de launch de tokens. Sua tarefa é:
- Configurar wallet com ETH para gas
- Validar endereços dos contratos do protocolo
- Executar chamada para launch() com parâmetros corretos
- Verificar transação no explorer
- Documentar hash do launch e endereço do token

Use como referência:
- Contrato de launch: 0x73d1ae084F04f793A5bbd6B623d74400C9Fc3f42
- Rede e explorer apropriados

Entregue relatório de execução com hash, status e próximos passos.`,
    source: 'Documentação IMD'
  },
  gestor: {
    name: 'Gestor de Comunidade',
    description: 'Constrói e engaja comunidade pós-lançamento',
    icon: '👥',
    color: 'from-yellow-500 to-orange-600',
    prompt: `Você é um gestor de comunidade para tokens. Sua tarefa é:
- Criar calendário de conteúdo para 7 dias
- Escrever posts para X/Telegram
- Planejar giveaways e campanhas
- Definir métricas de engajamento (holders, volume, retenção)

Use como referência:
- Tokenomics definido pelo Estrategista
- Identidade visual criada pelo Designer
- Fee de 0,5% para o launcher

Entregue plano executável com textos prontos e cronograma.`,
    source: 'Melhores práticas de community building'
  },
  analista: {
    name: 'Analista de Mercado',
    description: 'Monitora performance e ajusta estratégia',
    icon: '📊',
    color: 'from-indigo-500 to-blue-600',
    prompt: `Você é um analista de mercado para tokens. Sua tarefa é:
- Monitorar volume, holders e preço
- Analisar impacto da pool ETH/IMD compartilhada
- Identificar oportunidades de crescimento
- Alertar sobre riscos de venda generalizada

Use como referência:
- Documentação IMD sobre curva e backing
- Dados on-chain do token lançado

Entregue relatório semanal com métricas e recomendações.`,
    source: 'Documentação IMD e dados on-chain'
  }
}

export default function AgentPage() {
  const router = useRouter()
  const { id } = router.query
  
  const agent = agentData[id as keyof typeof agentData]

  if (!agent) {
    return (
      <div className="min-h-screen bg-imd-dark text-white p-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Agente não encontrado</h1>
          <Link href="/agents" className="text-imd-primary hover:underline">
            ← Voltar para Agentes
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-imd-dark text-white p-8">
      <Head>
        <title>{agent.name} - IMD Community Coins</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        <Link
          href="/agents"
          className="inline-block mb-8 text-imd-primary hover:underline"
        >
          ← Voltar para Agentes
        </Link>

        <div className={`bg-gradient-to-r ${agent.color} p-8 rounded-xl mb-8`}>
          <div className="text-6xl mb-4">{agent.icon}</div>
          <h1 className="text-3xl font-bold mb-2">{agent.name}</h1>
          <p className="text-white/80 text-lg">{agent.description}</p>
        </div>

        <div className="bg-gray-900 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Prompt</h2>
          <pre className="bg-gray-800 p-6 rounded-lg overflow-x-auto text-sm whitespace-pre-wrap">
            {agent.prompt}
          </pre>
        </div>

        <div className="bg-gray-900 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Fonte de Aplicação</h2>
          <p className="text-gray-400">{agent.source}</p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/launch"
            className="inline-block px-6 py-3 bg-imd-primary text-imd-dark rounded-lg font-bold hover:bg-imd-secondary transition-colors"
          >
            Usar este Agente no Launch
          </Link>
        </div>
      </div>
    </div>
  )
}
