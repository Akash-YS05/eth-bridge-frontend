
import { useAccount, WagmiProvider } from 'wagmi'
import './App.css'
import { config } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import WalletOptions from './components/connect-wallet';
import Account from './components/Accout';
import { AllowUSDT } from './components/AllowUSDT';

const client = new QueryClient();

function ConnectWallet() {
  const {isConnected} = useAccount();
  if (isConnected) return <Account/>
  return <WalletOptions/>
}

function App() {

  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
          {/* <WalletOptions/> */}
          <ConnectWallet/>
          <AllowUSDT/>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

export default App
