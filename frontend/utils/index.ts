import { ethers } from 'ethers'

// Endereços do protocolo IMD
export const IMD_CONTRACTS = {
  launch: '0x73d1ae084F04f793A5bbd6B623d74400C9Fc3f42',
  hook: '0x51768F5dA32BA2008304cC81674da51aCb802888',
  token: '0xD34a99Bc0f67aE1bbd63C660e6d0b0dd03E263B7',
  poolManager: '0x000000000004444c5dc75cB358380D2e3dE08A90'
}

// Configurações do token
export const TOKEN_CONFIG = {
  TOTAL_SUPPLY: ethers.parseEther('1000000000'), // 1B tokens
  LAUNCH_FEE: 0.005, // 0.5%
  BURN_FEE: 0.005, // 0.5%
  LP_FEE: 0.01 // 1%
}

// Verificar se MetaMask está instalado
export const isMetaMaskInstalled = () => {
  return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'
}

// Conectar carteira
export const connectWallet = async () => {
  if (!isMetaMaskInstalled()) {
    throw new Error('MetaMask não está instalado!')
  }

  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  })

  return accounts[0]
}

// Obter provider
export const getProvider = () => {
  if (!isMetaMaskInstalled()) {
    throw new Error('MetaMask não está instalado!')
  }

  return new ethers.BrowserProvider(window.ethereum)
}

// Obter signer
export const getSigner = async () => {
  const provider = getProvider()
  return provider.getSigner()
}

// Formatar endereço
export const formatAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

// Formatar valor
export const formatValue = (value: bigint, decimals: number = 18) => {
  return ethers.formatUnits(value, decimals)
}

// Parse valor
export const parseValue = (value: string, decimals: number = 18) => {
  return ethers.parseUnits(value, decimals)
}
