import { useState } from 'react'
import Head from 'next/head'

export default function Launch() {
  const [step, setStep] = useState(1)
  const [tokenName, setTokenName] = useState('')
  const [tokenSymbol, setTokenSymbol] = useState('')
  const [website, setWebsite] = useState('')
  const [social, setSocial] = useState('')

  const handleNext = () => {
    if (step < 5) setStep(step + 1)
  }

  const handlePrev = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleLaunch = () => {
    // Aqui seria implementada a lógica de lançamento
    console.log('Launching token:', { tokenName, tokenSymbol, website, social })
    alert('Função de lançamento será implementada!')
  }

  return (
    <div className="min-h-screen bg-imd-dark text-white p-8">
      <Head>
        <title>Lançar Token - IMD Community Coins</title>
      </Head>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-imd-primary mb-8 text-center">
          Lançar Token
        </h1>

        {/* Progresso */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                s <= step ? 'bg-imd-primary text-imd-dark' : 'bg-gray-700'
              }`}
            >
              {s}
            </div>
          ))}
        </div>

        {/* Conteúdo do step */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Informações Básicas</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome do Token</label>
                  <input
                    type="text"
                    value={tokenName}
                    onChange={(e) => setTokenName(e.target.value)}
                    className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-imd-primary focus:outline-none"
                    placeholder="Ex: IMD Community Token"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Símbolo</label>
                  <input
                    type="text"
                    value={tokenSymbol}
                    onChange={(e) => setTokenSymbol(e.target.value)}
                    className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-imd-primary focus:outline-none"
                    placeholder="Ex: ICT"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">2. Identidade Visual</h2>
              <p className="text-gray-400 mb-4">
                Use o Agente Designer para criar sua identidade visual.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Website</label>
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-imd-primary focus:outline-none"
                    placeholder="https://seusite.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Rede Social</label>
                  <input
                    type="text"
                    value={social}
                    onChange={(e) => setSocial(e.target.value)}
                    className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-imd-primary focus:outline-none"
                    placeholder="@seuusuario"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">3. Configurações Técnicas</h2>
              <p className="text-gray-400 mb-4">
                Use o Agente Desenvolvedor para configurar o contrato.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Contratos do Protocolo:</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>Launch: 0x73d1ae084F04f793A5bbd6B623d74400C9Fc3f42</li>
                  <li>Hook: 0x51768F5dA32BA2008304cC81674da51aCb802888</li>
                  <li>IMD: 0xD34a99Bc0f67aE1bbd63C660e6d0b0dd03E263B7</li>
                </ul>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">4. Preparação</h2>
              <p className="text-gray-400 mb-4">
                Use o Agente Operador para preparar a execução.
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Checklist:</h3>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>✓ Wallet configurada</li>
                  <li>✓ ETH para gas disponível</li>
                  <li>✓ Endereços validados</li>
                  <li>✓ Parâmetros definidos</li>
                </ul>
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">5. Lançamento</h2>
              <p className="text-gray-400 mb-4">
                Execute o lançamento na chain.
              </p>
              <div className="bg-imd-primary text-imd-dark p-4 rounded-lg">
                <h3 className="font-bold mb-2">Resumo do Token:</h3>
                <p><strong>Nome:</strong> {tokenName}</p>
                <p><strong>Símbolo:</strong> {tokenSymbol}</p>
                <p><strong>Website:</strong> {website}</p>
                <p><strong>Social:</strong> {social}</p>
              </div>
            </div>
          )}
        </div>

        {/* Botões de navegação */}
        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            disabled={step === 1}
            className="px-6 py-3 bg-gray-700 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
          >
            Anterior
          </button>
          
          {step < 5 ? (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-imd-primary text-imd-dark rounded-lg font-bold hover:bg-imd-secondary transition-colors"
            >
              Próximo
            </button>
          ) : (
            <button
              onClick={handleLaunch}
              className="px-6 py-3 bg-imd-primary text-imd-dark rounded-lg font-bold hover:bg-imd-secondary transition-colors"
            >
              Lançar Token
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
