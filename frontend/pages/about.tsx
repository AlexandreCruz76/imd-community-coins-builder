import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-imd-dark text-white p-8">
      <Head>
        <title>Sobre - IMD Community Coins</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-imd-primary mb-8 text-center">
          Sobre o IMD Community Coins
        </h1>

        <div className="space-y-8">
          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Visão Geral</h2>
            <p className="text-gray-400 leading-relaxed">
              Todo token lançado aqui é precificado em um único ativo: IMD. Não é em ETH e não é contra uma pool de liquidez própria. Você negocia com ETH, mas, por baixo, cada moeda fica sobre uma curva de bonding denominada em IMD. Assim, comprar qualquer moeda compra IMD, e todo o volume do launchpad passa por uma única pool ETH/IMD.
            </p>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">A Curva</h2>
            <p className="text-gray-400 leading-relaxed">
              Cada moeda nasce com oferta fixa de 1 bilhão e uma relação de produto constante: k = virtualImd × virtualCoin. Comprar retira moeda da curva e traz IMD para dentro, então o preço sobe ao longo de um caminho fixo e publicado. Não há livro de ordens nem provedor de liquidez tradicional; o preço é função apenas de quanto já foi vendido/comprado.
            </p>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">O Hook</h2>
            <p className="text-gray-400 leading-relaxed">
              Cada moeda recebe uma pool Uniswap v4 pareada com ETH nativo, com um hook acoplado, e essa pool não tem liquidez própria. Ela existe para que wallets, roteadores e exploradores enxerguem um par ETH/moeda comum. Quando um swap chega, o beforeSwap do hook consome a operação inteira e o AMM central não faz nada.
            </p>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">ERC-6909</h2>
            <p className="text-gray-400 leading-relaxed">
              O PoolManager da Uniswap v4 guarda todos os tokens e controla quem possui o quê usando claims ERC-6909. O hook usa esses claims como sua contabilidade: o supply inteiro de uma moeda é depositado uma vez no lançamento e depois não se move mais até alguém comprar.
            </p>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Taxas</h2>
            <ul className="text-gray-400 space-y-2">
              <li>• 1% para os provedores de liquidez da pool ETH/IMD</li>
              <li>• 0,5% da perna ETH para quem lançou a moeda</li>
              <li>• 0,5% da perna IMD é queimado</li>
            </ul>
          </section>

          <section className="bg-gray-900 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Aviso Importante</h2>
            <p className="text-gray-400 leading-relaxed">
              Todo token aqui é lançado por quem chamou launch() — qualquer pessoa, permissionless, pagando apenas o gas. Nome e símbolo são texto livre escolhido por essa pessoa. Nada impede que uma moeda se chame "IMD" ou copie o nome de outra já existente, e o launchpad não revisa, endossa nem audita nenhum deles. A única identidade confiável de uma moeda é o endereço do contrato.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center space-x-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-gray-700 rounded-lg font-bold hover:bg-gray-600 transition-colors"
          >
            ← Voltar ao Início
          </Link>
          <Link
            href="https://communitycoins.imd.fun/docs"
            target="_blank"
            className="inline-block px-6 py-3 bg-imd-primary text-imd-dark rounded-lg font-bold hover:bg-imd-secondary transition-colors"
          >
            Documentação Oficial
          </Link>
        </div>
      </div>
    </div>
  )
}
