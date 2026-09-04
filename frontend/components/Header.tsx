import Link from 'next/link'
import WalletConnect from './WalletConnect'

export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-imd-primary rounded-lg flex items-center justify-center">
              <span className="text-imd-dark font-bold">IMD</span>
            </div>
            <span className="text-xl font-bold">Community Coins</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/launch"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Lançar Token
            </Link>
            <Link
              href="/agents"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Agentes
            </Link>
            <Link
              href="/contracts"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contratos
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Sobre
            </Link>
          </nav>

          <WalletConnect />
        </div>
      </div>
    </header>
  )
}
