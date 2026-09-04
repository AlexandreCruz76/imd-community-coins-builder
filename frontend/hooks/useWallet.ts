import { useState, useEffect } from 'react'
import { isMetaMaskInstalled, connectWallet, getProvider } from '../utils'

export function useWallet() {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState('')
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const checkConnection = async () => {
      if (isMetaMaskInstalled()) {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        })

        if (accounts.length > 0) {
          setIsConnected(true)
          setAddress(accounts[0])
        }
      }
    }

    checkConnection()
  }, [])

  const connect = async () => {
    setIsConnecting(true)
    setError(null)

    try {
      const account = await connectWallet()
      setIsConnected(true)
      setAddress(account)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao conectar')
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnect = () => {
    setIsConnected(false)
    setAddress('')
  }

  return {
    isConnected,
    address,
    isConnecting,
    error,
    connect,
    disconnect,
    formatAddress: (addr: string) => `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }
}
