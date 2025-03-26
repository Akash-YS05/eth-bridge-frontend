import { useConnect } from "wagmi"

export default function WalletOptions() {
  const { connectors, connect } = useConnect()

  return (
    <div className="bg-black/90 backdrop-blur-sm border border-gray-800 rounded-lg p-6 font-mono w-full max-w-md shadow-xl shadow-purple-900/10 top-1/2 left-1/2">
      <h1 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
        Connect Wallet
      </h1>

      <div className="space-y-3">
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            className="w-full py-3 px-4 bg-black hover:bg-gray-900 text-gray-100 rounded-lg transition-all duration-200 border border-gray-800 flex items-center justify-between group"
          >
            <span>{connector.name}</span>
            <span className="text-xs text-gray-500 group-hover:text-purple-400 transition-colors">→</span>
          </button>
        ))}
      </div>

      <div className="mt-6 text-xs text-gray-600 text-center">
        By connecting your wallet, you agree to our Terms of Service
      </div>
    </div>
  )
}

