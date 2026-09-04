import Head from 'next/head'

const contracts = [
  {
    name: 'Contrato de Launch',
    address: '0x73d1ae084F04f793A5bbd6B623d74400C9Fc3f42',
    description: 'Onde vive launch(); qualquer um pode chamar.',
    explorer: 'https://etherscan.io/address/0x73d1ae084F04f793A5bbd6B623d74400C9Fc3f42'
  },
  {
    name: 'Hook',
    address: '0x51768F5dA32BA2008304cC81674da51aCb802888',
    description: 'Curvas, reservas, taxas — todo o trade passa por aqui.',
    explorer: 'https://etherscan.io/address/0x51768F5dA32BA2008304cC81674da51aCb802888'
  },
  {
    name: 'IMD Token',
    address: '0xD34a99Bc0f67aE1bbd63C660e6d0b0dd03E263B7',
    description: 'O token no qual todas as moedas são precificadas.',
    explorer: 'https://etherscan.io/address/0xD34a99Bc0f67aE1bbd63C660e6d0b0dd03E263B7'
  },
  {
    name: 'PoolManager',
    address: '0x000000000004444c5dc75cB358380D2e3dE08A90',
    description: 'Guarda todos os tokens e claims ERC-6909.',
    explorer: 'https://etherscan.io/address/0x000000000004444c5dc75cB358380D2e3dE08A90'
  }
]

export default function Contracts() {
  return (
    <div className="min-h-screen bg-imd-dark text-white p-8">
      <Head>
        <title>Contratos - IMD Community Coins</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-imd-primary mb-8 text-center">
          Contratos do Protocolo
        </h1>

        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Endereços importantes do protocolo IMD Community Coins.
          Todos são verificados no Etherscan.
        </p>

        <div className="space-y-6">
          {contracts.map((contract, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-imd-primary transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold mb-2">{contract.name}</h2>
                  <p className="text-gray-400 mb-4">{contract.description}</p>
                  <div className="bg-gray-800 p-3 rounded-lg font-mono text-sm break-all">
                    {contract.address}
                  </div>
                </div>
                <a
                  href={contract.explorer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 px-4 py-2 bg-imd-primary text-imd-dark rounded-lg font-bold hover:bg-imd-secondary transition-colors whitespace-nowrap"
                >
                  Ver no Etherscan
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-900 rounded-lg p-6 border border-gray-800">
          <h2 className="text-xl font-bold mb-4">Pool ETH/IMD</h2>
          <p className="text-gray-400 mb-4">
            A única pool por onde todo o volume do launchpad é roteado.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Fee:</span> 1%
            </div>
            <div>
              <span className="text-gray-500">Tick Spacing:</span> 200
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-gray-700 rounded-lg font-bold hover:bg-gray-600 transition-colors"
          >
            ← Voltar ao Início
          </a>
        </div>
      </div>
    </div>
  )
}
