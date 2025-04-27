'use client'
import { blockDetails } from "../Content/blockDetails";

export default function BlockDetails({id}:{id:any}){
    const blockDetail = blockDetails.find((block) => block.blockHeight === parseInt(id, 10));
    if (!blockDetail) {
      return <div className="text-center py-8 text-red-500">Block not found!</div>;
    }
    return(
        <div className="pt-4 px-4 2xl:px-12 lg:px-8 pb-2 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto">
            <div className="border-b-2 border-[#eeeeee] pb-4">
                <p className="text-[20px] font-[500]">Block #{id}</p>
            </div>
            <div className="w-full bg-[#ffffff] flex justify-start border-1 border-[#eeeeee] rounded-[10px] mt-4 p-4 shadow-sm">
                <div className="ml-8">
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Block Height:</p>
                        <p className="text-[14px] font-[500] ">{blockDetail.blockHeight}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Block Hash:</p>
                        <p className="text-[14px] font-[5500] ">{blockDetail.hash}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Parent Hash:</p>
                        <p className="text-[14px] font-[500]">{blockDetail.parentHash}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Transactions:</p>
                        <p className="text-[14px] font-[5500]">{blockDetail.transactions.internalTransactions}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Withdrawals:</p>
                        <p className="text-[14px] font-[500]">{blockDetail.withdrawals}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Fee Recipient:</p>
                        <p className="text-[14px] font-[5500]">{blockDetail.feeRecipient}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Block Reward:</p>
                        <p className="text-[14px] font-[500]">{blockDetail.blockReward}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Total Difficulty:</p>
                        <p className="text-[14px] font-[5500] ">{blockDetail.totalDifficulty}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Size:</p>
                        <p className="text-[14px] font-[500] ">{blockDetail.size }</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Gas Used:</p>
                        <p className="text-[14px] font-[5500]">{blockDetail.gas.used }</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Gas Limit:</p>
                        <p className="text-[14px] font-[5500]">{blockDetail.gas.gasLimit}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Base Fee Per Gas:</p>
                        <p className="text-[14px] font-[5500]">{blockDetail.baseFeePerGas}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Burnt Fees:</p>
                        <p className="text-[14px] font-[5500]">{blockDetail.burntFees}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Extra Data:</p>
                        <p className="text-[14px] font-[5500]">{blockDetail.extraData}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Timestamp:</p>
                        <p className="text-[14px] font-[5500]">{blockDetail.timestamp}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Status:</p>
                        <p className="text-[14px] font-[5500]">{blockDetail.status}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}