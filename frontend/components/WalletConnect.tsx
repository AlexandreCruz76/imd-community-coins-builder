import { useState } from 'react'

export default function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState('')

  const connectWallet = async () => {
    // Verificar se MetaMask está instalado
    if (typeof window.ethereum === 'undefined') {
      alert('Por favor, instale o MetaMask para continuar!')
      return
    }

    try {
      // Solicitar conexão
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (accounts.length > 0) {
        setIsConnected(true)
        setAddress(accounts[0])
      }
    } catch (error) {
      console.error('Erro ao conectar carteira:', error)
      alert('Erro ao conectar carteira. Por favor, tente novamente.')
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setAddress('')
  }

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  if (isConnected) {
    return (
      <div className="flex items-center space-x-4">
        <div className="bg-gray-800 px-4 py-2 rounded-lg">
          <span className="text-sm text-gray-400">Carteira:</span>
          <span className="ml-2 font-mono text-imd-primary">
            {formatAddress(address)}
          </span>
        </div>
        <button
          onClick={disconnectWallet}
          className="px-4 py-2 bg-red-600 rounded-lg text-sm hover:bg-red-700 transition-colors"
        >
          Desconectar
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={connectWallet}
      className="px-6 py-3 bg-imd-primary text-imd-dark rounded-lg font-bold hover:bg-imd-secondary transition-colors"
    >
      Conectar Carteira
    </button>
  )
}
