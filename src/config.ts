import { mainnet } from "viem/chains";
import { createConfig, http, injected } from "wagmi";

export const config = createConfig({
    chains: [mainnet],
    connectors: [injected()],       //the wallets that the user has already connected to
    transports: {
        //connect to the specific blockchain
        [mainnet.id]: http(),
    }
})