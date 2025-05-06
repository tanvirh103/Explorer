export default function datas({ data }: { data: any }) {
  if (!data) {
    return (
      <div className="text-center py-8 text-red-500">Block not found!</div>
    );
  }
  return (
    <div className="pt-4 px-4 2xl:px-12 lg:px-8 pb-2 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto">
      <div className="border-b-2 border-[#eeeeee] pb-4">
        <p className="text-[20px] font-[500]">
          Block #{data.blockInfo.blockHash}
        </p>
      </div>
      <div className="w-full bg-[#ffffff] flex justify-start border-1 border-[#eeeeee] rounded-[10px] mt-4 p-4 shadow-sm">
        <div className="mx-4">
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">Block Height:</p>
            <p className="text-[14px] font-[500] ">
              {data.blockInfo.blockNumber}
            </p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">Block Hash:</p>
            <p className="text-[14px] font-[5500] ">{data.blockInfo.hash}</p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">Previous Hash:</p>
            <p className="text-[14px] font-[500]">
              {data.blockInfo.previousBlockHash}
            </p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">Merkle Root:</p>
            <p className="text-[14px] font-[5500]">
              {data.blockInfo.merkleRoot}
            </p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">Validator Public Key:</p>
            <p className="text-[14px] font-[500]">
              {data.blockInfo.validator.publicKey}
            </p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">Staking Balance:</p>
            <p className="text-[14px] font-[5500]">
              {data.blockInfo.validator.stakingBalance}
            </p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">Validator Signature:</p>
            <p className="text-[14px] font-[500]">
              {data.blockInfo.validator.validatorSignature}
            </p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">POS Reward:</p>
            <p className="text-[14px] font-[5500] ">
              {data.blockInfo.proofOfStake.stakingReward}
            </p>
          </div>
          <div className="flex justify-between gap-48 py-2">
            <p className="text-[16px] font-[500]">Created At:</p>
            <p className="text-[14px] font-[500] ">{data.createdAt}</p>
          </div>
          <div className="rounded-[8px] bg-[#FFFFFF] border-1 shadow-md border-[#eeeeee] mt-4">
            <div className="border-b-2 border-[#eeeeee] px-4 py-4">
              <p className="text-[16px] font-[500]">Transactions</p>
            </div>
            <div className="p-4">
              <table className="w-full">
                <tbody>
                  {data.transactions.map((tx: any, index: any) => (
                    <tr key={index} className="border-b-1 border-[#eeeeee]">
                      <td className="">
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 162 162"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24.4857 58.0621C9.06083 76.1025 21.1325 110.641 46.8853 109.769C53.4511 109.125 59.6262 106.351 64.4693 101.871C69.3124 97.3913 72.5579 91.4508 73.7112 84.9551C75.345 79.2241 75.0631 73.1165 72.9085 67.5604C70.7538 62.0043 66.8442 57.3035 61.7737 54.1724C52.0493 49.1425 38.0999 47.4659 28.8449 54.1724C27.2333 55.2796 25.7686 56.5866 24.4857 58.0621Z"
                            stroke="black"
                            strokeWidth="6.8406"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M49.2994 69.128C47.2204 65.0371 41.5199 64.5006 41.1175 69.9328C40.7151 75.365 46.3485 77.9135 48.4946 82.0044C54.4634 93.1372 38.502 97.094 37.2948 83.2116"
                            stroke="black"
                            strokeWidth="6.8406"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M44.9378 59.2031V64.9707"
                            stroke="black"
                            strokeWidth="6.8406"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M45.2751 93.8096V98.1017"
                            stroke="black"
                            strokeWidth="6.8406"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M119.046 69.128C116.9 65.0371 111.199 64.5006 110.797 69.9328C110.395 75.365 116.028 77.9135 118.241 82.0044C124.143 93.1372 108.182 97.094 107.041 83.2116"
                            stroke="black"
                            strokeWidth="6.8406"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M114.888 59.2031C114.888 61.148 114.888 64.9707 114.888 64.9707"
                            stroke="black"
                            strokeWidth="6.8406"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M114.888 93.8096C114.888 95.6874 114.888 98.1017 114.888 98.1017"
                            stroke="black"
                            strokeWidth="6.8406"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M95.7728 54.1742C78.9396 71.8122 88.0604 107.289 114.886 107.826C121.688 107.58 128.212 105.061 133.415 100.673C138.618 96.2841 142.2 90.2788 143.59 83.6156C145.661 77.8266 145.722 71.5087 143.763 65.6807C141.804 59.8528 137.94 54.8544 132.793 51.4916C127.952 48.3921 122.354 46.6783 116.608 46.5364C110.862 46.3946 105.187 47.83 100.199 50.6868C98.6053 51.6906 97.1217 52.8595 95.7728 54.1742Z"
                            stroke="black"
                            strokeWidth="6.8406"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M57.614 123.519C62.5767 123.519 67.4725 122.781 72.3682 122.647C77.2639 122.513 82.7632 122.647 87.9943 122.647C90.8781 122.647 93.8289 122.647 96.7798 122.647"
                            stroke="black"
                            strokeWidth="6.8406"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M89.8037 114.532C93.9617 117.55 98.388 120.232 102.546 123.183"
                            stroke="black"
                            strokeWidth="6.8406"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M102.546 123.114C97.9216 125.113 93.6958 127.93 90.0723 131.43"
                            stroke="black"
                            strokeWidth="6.8406"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M107.041 32.1085C102.346 32.1085 97.5847 31.4379 92.8901 31.3038C88.1956 31.1696 82.2268 31.3038 76.9287 31.3038C73.9108 31.3038 70.8258 31.3038 67.8079 31.3038"
                            stroke="black"
                            strokeWidth="6.8406"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M74.6493 23.1885C70.4913 26.2064 66.1321 28.889 61.907 31.9069"
                            stroke="black"
                            strokeWidth="6.8406"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M62.0413 31.9092C66.7259 33.8405 71.0036 36.6392 74.6494 40.1581"
                            stroke="black"
                            strokeWidth="6.8406"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </td>
                      <td className="p-2 text-[14px] font-[500] w-40 truncate inline-block ">{tx.signature}</td>
                      <td className="p-2 text-[14px] font-[500]">
                        <p className="w-40 truncate inline-block">
                          From{" "}
                          <span className="text-[#0d4c8f] ">{tx.from}</span>{" "}
                        </p>
                        <p className="w-40 truncate inline-block">
                          To <span className="text-[#0d4c8f] ">{tx.to}</span>
                        </p>
                      </td>
                      <td className="p-2 text-[14px] font-[500] w-[50px]">
                        {tx.status}
                      </td>
                      <td className="p-2 w-[50px]">
                        <span className="text-[14px] border border-[#eeeeee] rounded-[8px] px-3 py-1 ">
                          {tx.value}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
  );
}
