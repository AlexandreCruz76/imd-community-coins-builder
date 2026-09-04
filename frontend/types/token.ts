export interface Token {
  name: string
  symbol: string
  address: string
  totalSupply: string
  website?: string
  social?: string
  launchDate?: Date
  launcher?: string
}

export interface Agent {
  id: string
  name: string
  description: string
  icon: string
  color: string
  prompt: string
  source: string
}

export interface Contract {
  name: string
  address: string
  description: string
  explorer: string
}

export interface LaunchParams {
  tokenName: string
  tokenSymbol: string
  website?: string
  social?: string
}

export interface LaunchResult {
  success: boolean
  transactionHash?: string
  tokenAddress?: string
  error?: string
}

export interface Metrics {
  holders: number
  volume: number
  price: number
  marketCap: number
  backing: number
}
