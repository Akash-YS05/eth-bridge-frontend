import type React from "react"

import { useWriteContract } from "wagmi"
import { useState } from "react"

export function AllowUSDT() {
  const { data: hash, writeContract } = useWriteContract()
  const [amount, setAmount] = useState("1")
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await writeContract({
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        abi: [
          {
            constant: false,
            inputs: [
              {
                name: "_spender",
                type: "address",
              },
              {
                name: "_value",
                type: "uint256",
              },
            ],
            name: "approve",
            outputs: [
              {
                name: "",
                type: "bool",
              },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        functionName: "approve",
        args: ["0x2966473D85A76A190697B5b9b66b769436EFE8e5", BigInt(amount)],
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-black/90 backdrop-blur-sm border border-gray-800 rounded-lg p-6 font-mono w-full max-w-md shadow-xl shadow-purple-900/10 mx-auto">
      <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
        Approve USDT
      </h2>

      <form onSubmit={submit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="amount" className="text-xs text-gray-400 block">
            Amount to approve
          </label>
          <div className="relative">
            <input
              id="amount"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-gray-900/50 border border-gray-800 rounded-lg py-3 px-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500/50 font-mono"
              placeholder="Enter amount"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">USDT</div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 bg-gradient-to-r from-purple-900/80 to-blue-900/80 hover:from-purple-800 hover:to-blue-800 text-gray-100 rounded-lg transition-all duration-200 border border-gray-800 font-medium tracking-wide ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Approving..." : "Approve"}
        </button>

        {hash && (
          <div className="mt-4 p-3 bg-green-900/20 border border-green-900/30 rounded-lg">
            <div className="text-xs text-gray-400 mb-1">Transaction submitted</div>
            <div className="text-green-400 text-sm break-all font-mono">{hash}</div>
          </div>
        )}
      </form>
    </div>
  )
}

