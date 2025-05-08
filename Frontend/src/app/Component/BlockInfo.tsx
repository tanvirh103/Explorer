"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
export default function BlockInfo() {
  const [blockchainData, setBlockdetails] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlockchainData = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_IP}/blockchain`,
        {
          headers: {
            "access-control-allow-origin": "*",
            "content-type": "application/json; charset=utf-8",
          },
        }
      );
      setBlockdetails(response.data);
    };

    fetchBlockchainData();

    const socket = io(process.env.NEXT_PUBLIC_IP, {
      withCredentials: true,
      transports: ["websocket"],
      extraHeaders: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    socket.on("notify_explorer", () => {
      console.log("notify_explorer triggered");
      fetchBlockchainData();
    });

    socket.on("connect", () => {
      console.log("socket.connected"); // true
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  const sortedBlocks = [...blockchainData].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return (
    <div className="2xl:mt-22 lg:mt-40 md:mt-40 sm:mt-[400px]  items-center px-4 2xl:px-12 lg:px-8 pt-4 pb-4 max-w-[1400px] lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(550px,_1fr))] gap-4 pt-4 pb-4 w-full">
        <div className="rounded-[8px] bg-[#FFFFFF] border-1 shadow-md border-[#eeeeee] ">
          <div className="border-b-2 border-[#eeeeee] px-4 py-4">
            <p className="text-[16px] font-[500]">Latest Blocks</p>
          </div>
          <div className="p-4">
            <table className="w-full border-collapse">
              <tbody>
                {sortedBlocks.map((block: any, index: number) => (
                  <tr key={block._id} className="border-b-1 border-[#eeeeee]">
                    <td>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 162 162"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.848 42.9731C30.5678 44.1802 26.1415 45.3874 26.1415 48.4724C26.1415 51.5573 30.0313 53.1669 32.3786 54.5082C44.249 61.2147 55.9853 68.3235 67.7887 75.2312L74.4952 78.9868C75.8365 79.7916 77.3119 81.1329 78.9215 80.8646C80.847 80.2544 82.676 79.3738 84.3537 78.2491C87.9082 76.3042 91.0602 74.1582 94.7488 72.0121L128.281 50.8196C129.689 49.9478 131.165 48.8747 131.366 47.2652C131.567 45.6556 129.555 43.5766 127.678 42.4365L92.7368 21.6465C89.3503 19.1626 85.3253 17.6969 81.1346 17.4214C77.452 17.8326 73.9277 19.1456 70.8737 21.2441L44.0478 36.8031"
                          stroke="black"
                          strokeWidth="6.70647"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M79.5248 80.8643C79.5248 85.8941 79.5248 90.7898 79.5248 95.7526V111.982V144.442"
                          stroke="black"
                          strokeWidth="6.70647"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M26.074 48.5396C25.3363 67.7871 25.001 87.0347 25.4033 106.349C25.3083 109.078 25.6942 111.802 26.5434 114.397C28.153 118.354 33.2499 120.634 36.402 122.914C39.554 125.195 45.0533 128.548 49.8149 131.163C54.5765 133.779 59.8746 136.73 65.0386 139.211C69.7119 142.38 75.1098 144.318 80.7317 144.845C85.4013 143.635 89.7953 141.541 93.6752 138.675C98.1015 136.126 102.595 133.578 107.088 130.962C111.582 128.347 116.88 124.926 121.708 121.841L128.75 117.214C131.015 116.089 132.954 114.404 134.384 112.318C135.104 110.633 135.557 108.845 135.725 107.02C136.452 99.2855 136.676 91.512 136.395 83.7485C136.395 75.969 135.725 68.0554 136.395 60.3429C136.731 57.4914 136.731 54.6102 136.395 51.7587C136.133 50.1367 135.493 48.5994 134.525 47.2711C133.558 45.9429 132.292 44.861 130.829 44.1133"
                          stroke="black"
                          strokeWidth="6.70647"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M37.5439 76.9087L38.2816 106.685"
                          stroke="black"
                          strokeWidth="6.70647"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </td>
                    <td className="p-2 text-[14px] font-[500]">
                      <p className="text-[#0d4c8f]  w-[90] truncate inline-block">
                        <Link href={`/block/${block.blockInfo.blockHash}`}>
                          {block.blockInfo.blockHash}
                        </Link>
                      </p>
                      <p>
                        {new Date(block.blockInfo.timestamp).toLocaleString()}
                      </p>
                    </td>
                    <td className="p-2 text-[14px] font-[500]">
                      <p className="w-40 truncate">
                        Miner:{" "}
                        <span className="text-[#0d4c8f] ">
                          {block.blockInfo.validator.publicKey}
                        </span>
                      </p>
                    </td>
                    <td className="p-2 text-[14px] font-[500]"></td>
                    <td className="p-2">
                      <span className="text-[14px] border border-[#eeeeee] rounded-[8px] px-3 py-1 inline-block">
                        {block.blockInfo.proofOfStake.stakingReward}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="rounded-[8px] bg-[#FFFFFF] border-1 shadow-md border-[#eeeeee] ">
          <div className="border-b-2 border-[#eeeeee] px-4 py-4">
            <p className="text-[16px] font-[500]">Latest Transactions</p>
          </div>
          <div className="p-4">
            {sortedBlocks.flatMap((block, blockIndex) => (
              <table key={blockIndex} className="w-full border-collapse">
                <tbody>
                  {block.transactions.map((tx: any, txIndex: number) => (
                    <tr
                      key={tx.signature + txIndex}
                      className="border-b-1 border-[#eeeeee]"
                    >
                      <td className="">
                        <svg
                          width="28"
                          height="28"
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
                      <td className="p-2 text-[14px] font-[500] ">
                        <p className="text-[#0d4c8f] w-40 truncate">
                          <Link href={`/transaction/${tx.signature}`}>
                            {tx.signature}
                          </Link>
                        </p>
                      </td>
                      <td className="p-2 text-[14px] font-[500] w-40 truncate inline-block">
                        <p className="">
                          From <span className="text-[#0d4c8f]">{tx.from}</span>{" "}
                        </p>
                        <p className="">
                          To <span className="text-[#0d4c8f]">{tx.to}</span>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
