import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi"
import { TotalSupply } from "../TotalSupply";
import { TotalBalance } from "../TotalBalance";

export default function Account() {
    const {address} = useAccount();
    const {disconnect} = useDisconnect();
    const {data: ensName} = useEnsName({address});
    const {data:ensAvatar} = useEnsAvatar({name: ensName!});
    //ensName is the name of the user's wallet address

    return (
        <div>
            {ensAvatar && <img alt="ENS avatar" src={ensAvatar}/>}
            {address && <div>{ensName ? `${ensName}: (${address})` : address}</div>}
            <button onClick={() => disconnect()
            }> Disconnect </button>
            <TotalBalance/>
            <TotalSupply/>
        </div>
    )
}