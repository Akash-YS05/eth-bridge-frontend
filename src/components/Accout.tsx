import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi"
import {TotalSupply} from "../TotalSupply"
// import TotalBalance from "./TotalBalance"
import { TotalBalance } from "../TotalBalance"

export default function Account() {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! })

  return (
    <div className="bg-black/90 backdrop-blur-sm border border-gray-800 rounded-lg p-6 font-mono w-full max-w-md shadow-xl shadow-purple-900/10">
      <div className="space-y-6">
        {/* Header with avatar */}
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
            {ensAvatar ? (
              <img alt="ENS avatar" src={ensAvatar || "/placeholder.svg"} className="h-full w-full object-cover" />
            ) : (
              <div className="text-white text-xs">{address?.substring(2, 6)}</div>
            )}
          </div>
          <div className="flex-1 overflow-hidden">
            {address && (
              <div className="text-gray-100 truncate">
                {ensName ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-bold">
                    {ensName}
                  </span>
                ) : (
                  <span className="font-medium">
                    {address.substring(0, 6)}...{address.substring(address.length - 4)}
                  </span>
                )}
              </div>
            )}
            {address && ensName && (
              <div className="text-gray-500 text-xs truncate">
                {address.substring(0, 6)}...{address.substring(address.length - 4)}
              </div>
            )}
          </div>
        </div>

        {/* Balance and Supply */}
        <div className="space-y-4 border border-gray-800/50 rounded-lg p-4 text-white bg-black/50">
          <TotalBalance />
          <TotalSupply />
        </div>

        {/* Disconnect Button */}
        <button
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-900/80 to-blue-900/80 hover:from-purple-800 hover:to-blue-800 text-gray-100 rounded-lg transition-all duration-200 border border-gray-800 font-medium tracking-wide"
          onClick={() => disconnect()}
        >
          Disconnect
        </button>
      </div>
    </div>
  )
}

