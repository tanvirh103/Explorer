"use client";
export default function Transaction({ data }: any) {
  if (!data) {
    return (
      <div className="text-center py-8 text-red-500">
        Transaction not found!
      </div>
    );
  }
  return (
    <div className="pt-4 px-4 2xl:px-12 lg:px-8 pb-2 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto">
      <div className="border-b-2 border-[#eeeeee] pb-4">
        <p className="text-[20px] font-[500]">Transaction Details</p>
      </div>
      <div className="w-full bg-[#ffffff] flex justify-start border-1 border-[#eeeeee] rounded-[10px] mt-4 p-4 shadow-sm">
        <div className="ml-8">
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">Transaction Hash:</p>
            <p className="text-[14px] font-[500] ">{data.transactionHash||data.signature}</p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">Status:</p>
            <p className="text-[14px] font-[5500] ">{data.status}</p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">Block:</p>
            <p className="text-[14px] font-[500]">{data.block}</p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">Timestamp:</p>
            <p className="text-[14px] font-[5500]">{data.timestamp}</p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">From:</p>
            <p className="text-[14px] font-[500]">{data.from}</p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">To:</p>
            <p className="text-[14px] font-[5500]">{data.to}</p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">Value:</p>
            <p className="text-[14px] font-[500]">{data.value}</p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">Transaction Fee:</p>
            <p className="text-[14px] font-[5500] ">{data.transactionFee}</p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">Gas Price:</p>
            <p className="text-[14px] font-[500] ">{data.gasPrice}</p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">Created At:</p>
            <p className="text-[14px] font-[5500]">{data.timestamp}</p>
          </div>
          {/* <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Gas Fees:</p>
                        <p className="text-[14px] font-[5500]">{data.gasUsagePercent}</p>
                    </div>
                    <div className="flex justify-between gap-48 py-2">
                        <p className="text-[16px] font-[500]">Burnt & Txn Savings Fee:</p>
                        <p className="text-[14px] font-[5500]">{data.burntFees|| data.txnSavings}</p>
                    </div> */}
        </div>
      </div>
    </div>
  );
}
