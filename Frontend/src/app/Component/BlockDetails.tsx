export default function datas({data}:{data:any}){
  
    if (!data) {
      return <div className="text-center py-8 text-red-500">Block not found!</div>;
    }
    return(
        <div className="pt-4 px-4 2xl:px-12 lg:px-8 pb-2 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto">
            <div className="border-b-2 border-[#eeeeee] pb-4">
                <p className="text-[20px] font-[500]">Block #{data.blockInfo.blockHash}</p>
            </div>
            <div className="w-full bg-[#ffffff] flex justify-start border-1 border-[#eeeeee] rounded-[10px] mt-4 p-4 shadow-sm">
                <div className="ml-8">
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Block Height:</p>
                        <p className="text-[14px] font-[500] ">{data.blockInfo.blockNumber}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Block Hash:</p>
                        <p className="text-[14px] font-[5500] ">{data.blockInfo.hash}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Previous Hash:</p>
                        <p className="text-[14px] font-[500]">{data.blockInfo.previousBlockHash}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Merkle Root:</p>
                        <p className="text-[14px] font-[5500]">{data.blockInfo.merkleRoot}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Validator Public Key:</p>
                        <p className="text-[14px] font-[500]">{data.blockInfo.validator.publicKey}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Staking Balance:</p>
                        <p className="text-[14px] font-[5500]">{data.blockInfo.validator.stakingBalance}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Validator Signature:</p>
                        <p className="text-[14px] font-[500]">{data.blockInfo.validator.validatorSignature}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">POS Reward:</p>
                        <p className="text-[14px] font-[5500] ">{data.blockInfo.proofOfStake.stakingReward}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Created At:</p>
                        <p className="text-[14px] font-[500] ">{data.createdAt }</p>
                    </div>
                    {/* <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Gas Used:</p>
                        <p className="text-[14px] font-[5500]">{data.gas.used }</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Gas Limit:</p>
                        <p className="text-[14px] font-[5500]">{data.gas.gasLimit}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Base Fee Per Gas:</p>
                        <p className="text-[14px] font-[5500]">{data.baseFeePerGas}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Burnt Fees:</p>
                        <p className="text-[14px] font-[5500]">{data.burntFees}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Extra Data:</p>
                        <p className="text-[14px] font-[5500]">{data.extraData}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Timestamp:</p>
                        <p className="text-[14px] font-[5500]">{data.timestamp}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Status:</p>
                        <p className="text-[14px] font-[5500]">{data.status}</p>
                    </div> */}
                </div>
                
            </div>
        </div>
    )
}