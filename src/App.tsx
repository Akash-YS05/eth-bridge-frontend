"use client"

import { useAccount, WagmiProvider } from "wagmi"
import "./App.css"
import { config } from "./config"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import WalletOptions from "./components/connect-wallet"
import Account from "./components/Accout"
import { AllowUSDT } from "./components/AllowUSDT"
import { useState } from "react"

const client = new QueryClient()

function ConnectedContent() {
  const [activeTab, setActiveTab] = useState<"account" | "approve">("account")

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-4 flex border border-gray-800 rounded-lg overflow-hidden">
        <button
          onClick={() => setActiveTab("account")}
          className={`flex-1 py-2 text-center text-sm ${
            activeTab === "account" ? "bg-gray-900 text-gray-100" : "bg-black text-gray-500 hover:text-gray-300"
          }`}
        >
          Account
        </button>
        <button
          onClick={() => setActiveTab("approve")}
          className={`flex-1 py-2 text-center text-sm ${
            activeTab === "approve" ? "bg-gray-900 text-gray-100" : "bg-black text-gray-500 hover:text-gray-300"
          }`}
        >
          Approve USDT
        </button>
      </div>

      {activeTab === "account" ? <Account /> : <AllowUSDT />}
    </div>
  )
}

function ConnectWallet() {
  const { isConnected } = useAccount()

  if (isConnected) {
    return <ConnectedContent />
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <WalletOptions />
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 to-[#28231d] flex items-center justify-center p-4">
      <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
          <ConnectWallet />
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  )
}

export default App

