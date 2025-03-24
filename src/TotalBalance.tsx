import { useReadContract } from 'wagmi'

export function TotalBalance() {
  const { data, isLoading, error } = useReadContract({
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    abi: [
      {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    ],
    functionName: 'balanceOf',
    args: ["0xb25060DB54765467e4c7c97d153B76f77D356857"]
  })

  return (
    <div>
        Balance  - {JSON.stringify(data?.toString())}
    </div>
  )
}