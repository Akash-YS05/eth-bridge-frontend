import { Connector, useConnect } from "wagmi"

export default function WalletOptions() {
    const { connectors, connect } = useConnect();

    return ( 
        <>
            {connectors.map((connector) => (
            <button key={connector.uid} onClick={() => connect({connector})}>
                {connector.name}
            </button>
            ))}
        </>
    )
}