"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function Searchbar() {
  const [blockdetails, setBlockdetails] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlockchainData = async () => {
      const response = await axios.get(`http://192.168.10.30:4005/blockchain`, {
        headers: {
          "access-control-allow-origin": "*",
          "content-type": "application/json; charset=utf-8",
        },
      });
      setBlockdetails(response.data);
    };

    fetchBlockchainData();

    // const socket = io("http://192.168.10.30:4005");
    // socket.on("notify_explorer", () => {
    //   fetchBlockchainData();
    // });

    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  const totalTransactionValue = blockdetails.reduce(
    (blockAcc: any, block: any) => {
      const txSum = Array.isArray(block?.transactions)
        ? block?.transactions.reduce(
            (txAcc: any, tx: any) => txAcc + (tx.value || 0),
            0
          )
        : 0;
      return blockAcc + txSum;
    },
    0
  );
  const lastBlock = blockdetails[blockdetails.length - 1];
  const lastBlockHash = lastBlock?.blockInfo?.blockHash || null;
  const lastBlockNumber = lastBlock?.blockInfo?.blockNumber || null;

  const transactions = lastBlock?.transactions || [];
  const lastTransaction = transactions[transactions.length - 1] || {};
  const lastTransactionHash = lastTransaction.signature || null;

  return (
    <div className="relative bg-gradient-to-br from-[#0d4c8f] via-[#81baff]  to-[#0d4c8f] h-[200px]">
      <div className="pt-4 px-4 2xl:px-12 lg:px-8 pb-2 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto">
        <div className="mb-2">
          <p className="text-[20px] font-[600] text-[#FFFFFF]">
            The Blockchain Explorer
          </p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search by blockhash"
            className="w-[450px] h-[40px] bg-[#FFFFFF] rounded-[6px] px-4 focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-4 pt-4 pb-4 w-full border-0 px-4 bg-[#FFFFFF] rounded-[8px] mt-8 border-[#eeeeee] shadow-md">
          <div className="border-b-1 border-[#eeeeee] p-2">
            <p className="font-[500] text-[16px] flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                height="24px"
                width="24px"
                version="1.1"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512"
              >
                <g>
                  <g>
                    <path d="m256,11c-135.1,0-245,109.9-245,245s109.9,245 245,245c135.1,0 245-109.9 245-245s-109.9-245-245-245zm0,449.2c-112.6,0-204.2-91.6-204.2-204.2 0-112.6 91.6-204.2 204.2-204.2 112.6,0 204.2,91.6 204.2,204.2 0,112.6-91.6,204.2-204.2,204.2z" />
                    <path d="m268.8,224.8v-66.5c11,4.8 17.8,13.8 20.4,27.2l43-5.6c-2.9-17-9.8-30.6-20.4-40.7-10.7-10.2-25-16.3-43-18.5v-16.8h-24.7v16.8c-19.5,1.9-35.1,9.2-46.9,21.9-11.7,12.6-17.6,28.3-17.6,46.9 0,18.4 5.2,34 15.6,46.9 10.4,12.9 26.7,22.5 48.9,28.8v71.3c-6.1-2.9-11.7-7.7-16.7-14.3-5-6.6-8.4-14.4-10.2-23.5l-44.4,4.8c3.4,22.3 11.2,39.6 23.5,51.9s28.2,19.6 47.8,21.9v31h24.7v-31.8c22.1-3.2 39.4-11.8 51.8-25.9 12.4-14.1 18.6-31.4 18.6-51.9 0-18.4-4.9-33.4-14.8-45.2-9.9-11.8-28.4-21.3-55.6-28.7zm-24.7-8.2c-36.1-11.8-24.2-58.9 0-58.9v58.9zm24.7,122.2v-66.4c36.2,7 33.1,59.5 0,66.4z" />
                  </g>
                </g>
              </svg>{" "}
              Total Amount
            </p>
            <p className="font-[500] text-[14px] text-[#0d4c8f] ml-8">
              ${totalTransactionValue}
            </p>
          </div>
          <div className="border-b-1 border-[#eeeeee] p-2">
            <p className="font-[500] text-[16px] flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                height="24px"
                width="24px"
                version="1.1"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512"
              >
                <g>
                  <g>
                    <path d="m256,11c-135.1,0-245,109.9-245,245s109.9,245 245,245c135.1,0 245-109.9 245-245s-109.9-245-245-245zm0,449.2c-112.6,0-204.2-91.6-204.2-204.2 0-112.6 91.6-204.2 204.2-204.2 112.6,0 204.2,91.6 204.2,204.2 0,112.6-91.6,204.2-204.2,204.2z" />
                    <path d="m268.8,224.8v-66.5c11,4.8 17.8,13.8 20.4,27.2l43-5.6c-2.9-17-9.8-30.6-20.4-40.7-10.7-10.2-25-16.3-43-18.5v-16.8h-24.7v16.8c-19.5,1.9-35.1,9.2-46.9,21.9-11.7,12.6-17.6,28.3-17.6,46.9 0,18.4 5.2,34 15.6,46.9 10.4,12.9 26.7,22.5 48.9,28.8v71.3c-6.1-2.9-11.7-7.7-16.7-14.3-5-6.6-8.4-14.4-10.2-23.5l-44.4,4.8c3.4,22.3 11.2,39.6 23.5,51.9s28.2,19.6 47.8,21.9v31h24.7v-31.8c22.1-3.2 39.4-11.8 51.8-25.9 12.4-14.1 18.6-31.4 18.6-51.9 0-18.4-4.9-33.4-14.8-45.2-9.9-11.8-28.4-21.3-55.6-28.7zm-24.7-8.2c-36.1-11.8-24.2-58.9 0-58.9v58.9zm24.7,122.2v-66.4c36.2,7 33.1,59.5 0,66.4z" />
                  </g>
                </g>
              </svg>{" "}
              Latest Transaction Hash
            </p>
            <p className="font-[500] text-[14px] text-[#0d4c8f] ml-8 w-[80px] truncate">
              {lastTransactionHash}
            </p>
          </div>
          <div className="border-b-1 border-[#eeeeee] p-2">
            <p className="font-[500] text-[16px] flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                height="24px"
                width="24px"
                version="1.1"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512"
              >
                <g>
                  <g>
                    <path d="m256,11c-135.1,0-245,109.9-245,245s109.9,245 245,245c135.1,0 245-109.9 245-245s-109.9-245-245-245zm0,449.2c-112.6,0-204.2-91.6-204.2-204.2 0-112.6 91.6-204.2 204.2-204.2 112.6,0 204.2,91.6 204.2,204.2 0,112.6-91.6,204.2-204.2,204.2z" />
                    <path d="m268.8,224.8v-66.5c11,4.8 17.8,13.8 20.4,27.2l43-5.6c-2.9-17-9.8-30.6-20.4-40.7-10.7-10.2-25-16.3-43-18.5v-16.8h-24.7v16.8c-19.5,1.9-35.1,9.2-46.9,21.9-11.7,12.6-17.6,28.3-17.6,46.9 0,18.4 5.2,34 15.6,46.9 10.4,12.9 26.7,22.5 48.9,28.8v71.3c-6.1-2.9-11.7-7.7-16.7-14.3-5-6.6-8.4-14.4-10.2-23.5l-44.4,4.8c3.4,22.3 11.2,39.6 23.5,51.9s28.2,19.6 47.8,21.9v31h24.7v-31.8c22.1-3.2 39.4-11.8 51.8-25.9 12.4-14.1 18.6-31.4 18.6-51.9 0-18.4-4.9-33.4-14.8-45.2-9.9-11.8-28.4-21.3-55.6-28.7zm-24.7-8.2c-36.1-11.8-24.2-58.9 0-58.9v58.9zm24.7,122.2v-66.4c36.2,7 33.1,59.5 0,66.4z" />
                  </g>
                </g>
              </svg>{" "}
              Total Final Block
            </p>
            <p className="font-[500] text-[14px] text-[#0d4c8f] ml-8">
              {lastBlockNumber}
            </p>
          </div>
          <div className="p-2">
            <p className="font-[500] text-[16px] flex gap-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 161 162"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.4231 32.1738C26.8002 35.7953 33.9091 39.3498 41.2862 43.1724"
                  stroke="black"
                  strokeWidth="4.96279"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.2847 43.1044L64.6232 29.6914"
                  stroke="black"
                  strokeWidth="4.96279"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.6219 43.0391C41.6219 51.6233 41.6219 68.7919 41.6219 68.7919"
                  stroke="black"
                  strokeWidth="4.96279"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M65.2962 29.2236C65.5861 33.3989 65.5861 37.5894 65.2962 41.7647V52.7633C65.2962 53.7022 65.2962 54.7753 64.6926 55.4459C64.089 56.1165 62.8819 56.4519 62.01 56.9884C59.9981 58.0614 58.0532 59.2015 56.1083 60.3416C54.1635 61.4817 42.0247 68.993 41.4211 69.1271C39.5364 68.5267 37.734 67.6931 36.056 66.6457L30.2884 63.829C27.5387 62.4206 24.7891 60.9452 21.9724 59.6039C20.9076 59.1582 19.8954 58.5959 18.9545 57.9273C18.5305 57.1495 18.366 56.2566 18.485 55.3788C18.485 53.9034 18.485 46.258 18.485 43.9778C18.2819 39.9789 18.2819 35.9722 18.485 31.9732C18.485 30.8331 22.0394 29.2907 23.649 28.3517L29.886 24.5961C33.8753 21.7822 38.23 19.5259 42.8295 17.8896C46.7924 19.055 50.5984 20.6991 54.1635 22.7854C58.1821 24.3489 61.9367 26.5203 65.2962 29.2236Z"
                  stroke="black"
                  strokeWidth="6.63941"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M95.6732 32.1738C103.05 35.7953 110.092 39.4168 117.469 43.1724"
                  stroke="black"
                  strokeWidth="4.96279"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M117.469 43.1044L140.875 29.6914"
                  stroke="black"
                  strokeWidth="4.96279"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M117.872 43.0391C117.872 51.6233 117.872 68.7919 117.872 68.7919"
                  stroke="black"
                  strokeWidth="4.96279"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M141.546 29.2236C141.802 33.4 141.802 37.5882 141.546 41.7647V52.7633C141.546 53.7022 141.882 54.7753 141.01 55.4459C140.138 56.1165 139.199 56.4519 138.26 56.9884L132.358 60.3416C129.81 61.8171 118.342 68.993 117.738 69.1271C115.827 68.541 114.001 67.7067 112.306 66.6457L106.606 63.829C103.789 62.4206 101.039 60.9452 98.2225 59.6039C97.1723 59.1286 96.163 58.5678 95.2046 57.9273C94.8121 57.1387 94.6494 56.2555 94.7351 55.3788C94.7351 53.9034 94.7351 46.258 94.7351 43.9778C94.532 39.9789 94.532 35.9722 94.7351 31.9732C95.1375 30.8331 98.2896 29.2907 99.8991 28.3517L106.203 24.5961C110.161 21.7707 114.496 19.5133 119.08 17.8896C123.047 19.0421 126.855 20.6868 130.414 22.7854C134.421 24.3728 138.172 26.5422 141.546 29.2236Z"
                  stroke="black"
                  strokeWidth="6.63941"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M96.8816 107.422C104.326 111.043 111.368 114.665 118.745 118.421"
                  stroke="black"
                  strokeWidth="4.96279"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M118.746 118.352L142.085 104.939"
                  stroke="black"
                  strokeWidth="4.96279"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M119.08 118.287C119.08 126.871 119.08 144.04 119.08 144.04"
                  stroke="black"
                  strokeWidth="4.96279"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M142.82 104.404C143.071 108.581 143.071 112.769 142.82 116.946V128.011C142.82 128.95 142.82 130.023 142.217 130.627C141.362 131.227 140.465 131.765 139.534 132.236L133.632 135.59C131.017 137.065 119.616 144.241 118.945 144.375C117.083 143.718 115.287 142.887 113.58 141.894L107.879 139.077L99.4963 134.785C98.429 134.372 97.4156 133.832 96.4784 133.175C96.0588 132.396 95.8946 131.504 96.0089 130.627C96.0089 129.151 96.0089 121.506 96.0089 119.226C95.8058 115.227 95.8058 111.22 96.0089 107.221C96.0089 106.081 99.5634 104.539 101.173 103.6L107.946 99.7099C111.873 96.912 116.159 94.6562 120.689 93.0034C124.652 94.1688 128.458 95.8128 132.023 97.8991C135.903 99.5619 139.537 101.751 142.82 104.404Z"
                  stroke="black"
                  strokeWidth="6.63941"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.1545 104.203C26.7999 107.824 33.5064 111.513 41.0176 115.201"
                  stroke="black"
                  strokeWidth="4.96279"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.0161 115.134L64.3546 101.721"
                  stroke="black"
                  strokeWidth="4.96279"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.3534 115.068C41.3534 123.652 41.3534 140.821 41.3534 140.821"
                  stroke="black"
                  strokeWidth="4.96279"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M65.0264 101.253C65.3162 105.428 65.3162 109.619 65.0264 113.794V124.793C65.0264 125.799 65.3617 126.805 64.4898 127.475C63.6342 128.054 62.7376 128.569 61.8073 129.018L55.9056 132.371C53.29 133.846 41.822 141.089 41.2184 141.156C39.3469 140.551 37.5477 139.741 35.8532 138.742L30.0856 135.858L21.7696 131.633C20.6922 131.214 19.6769 130.65 18.7517 129.957C18.3326 129.176 18.1464 128.291 18.2152 127.408C18.2152 125.933 18.2152 118.287 18.2152 116.007C17.9787 112.009 17.9787 108.001 18.2152 104.003C18.2152 102.862 21.7025 101.387 23.3792 100.381L29.6162 96.6254C33.6135 93.8248 37.9664 91.5694 42.5597 89.9189C46.5225 91.0843 50.3286 92.7284 53.8936 94.8147C57.9122 96.3782 61.6669 98.5496 65.0264 101.253Z"
                  stroke="black"
                  strokeWidth="6.63941"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.6874 69.2622C41.6874 72.9508 41.6874 80.2608 41.6874 80.2608"
                  stroke="black"
                  strokeWidth="4.96279"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M64.826 101.989C69.99 101.989 80.318 101.989 80.318 101.989"
                  stroke="black"
                  strokeWidth="4.96279"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M96.145 56.7886L79.6471 56.3862"
                  stroke="black"
                  strokeWidth="4.96279"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M119.951 90.5868C120.354 86.2946 119.951 77.1738 119.951 77.1738"
                  stroke="black"
                  strokeWidth="4.96279"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Latest Block
            </p>
            <p className="font-[500] text-[14px] text-[#0d4c8f] ml-8 w-30 truncate">
              {lastBlockHash}
            </p>
          </div>

          <div className=" p-2">
            <p className="font-[500] text-[16px] flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                height="24px"
                width="24px"
                version="1.1"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512"
              >
                <g>
                  <g>
                    <path d="m256,11c-135.1,0-245,109.9-245,245s109.9,245 245,245c135.1,0 245-109.9 245-245s-109.9-245-245-245zm0,449.2c-112.6,0-204.2-91.6-204.2-204.2 0-112.6 91.6-204.2 204.2-204.2 112.6,0 204.2,91.6 204.2,204.2 0,112.6-91.6,204.2-204.2,204.2z" />
                    <path d="m268.8,224.8v-66.5c11,4.8 17.8,13.8 20.4,27.2l43-5.6c-2.9-17-9.8-30.6-20.4-40.7-10.7-10.2-25-16.3-43-18.5v-16.8h-24.7v16.8c-19.5,1.9-35.1,9.2-46.9,21.9-11.7,12.6-17.6,28.3-17.6,46.9 0,18.4 5.2,34 15.6,46.9 10.4,12.9 26.7,22.5 48.9,28.8v71.3c-6.1-2.9-11.7-7.7-16.7-14.3-5-6.6-8.4-14.4-10.2-23.5l-44.4,4.8c3.4,22.3 11.2,39.6 23.5,51.9s28.2,19.6 47.8,21.9v31h24.7v-31.8c22.1-3.2 39.4-11.8 51.8-25.9 12.4-14.1 18.6-31.4 18.6-51.9 0-18.4-4.9-33.4-14.8-45.2-9.9-11.8-28.4-21.3-55.6-28.7zm-24.7-8.2c-36.1-11.8-24.2-58.9 0-58.9v58.9zm24.7,122.2v-66.4c36.2,7 33.1,59.5 0,66.4z" />
                  </g>
                </g>
              </svg>{" "}
              Last Finalized Block
            </p>
            <p className="font-[500] text-[14px] text-[#0d4c8f] ml-8 w-30 truncate">
              {lastBlockHash}
            </p>
          </div>
          <div className="p-2">
            <p className="font-[500] text-[16px] flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
                height="24px"
                width="24px"
                version="1.1"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512"
              >
                <g>
                  <g>
                    <path d="m256,11c-135.1,0-245,109.9-245,245s109.9,245 245,245c135.1,0 245-109.9 245-245s-109.9-245-245-245zm0,449.2c-112.6,0-204.2-91.6-204.2-204.2 0-112.6 91.6-204.2 204.2-204.2 112.6,0 204.2,91.6 204.2,204.2 0,112.6-91.6,204.2-204.2,204.2z" />
                    <path d="m268.8,224.8v-66.5c11,4.8 17.8,13.8 20.4,27.2l43-5.6c-2.9-17-9.8-30.6-20.4-40.7-10.7-10.2-25-16.3-43-18.5v-16.8h-24.7v16.8c-19.5,1.9-35.1,9.2-46.9,21.9-11.7,12.6-17.6,28.3-17.6,46.9 0,18.4 5.2,34 15.6,46.9 10.4,12.9 26.7,22.5 48.9,28.8v71.3c-6.1-2.9-11.7-7.7-16.7-14.3-5-6.6-8.4-14.4-10.2-23.5l-44.4,4.8c3.4,22.3 11.2,39.6 23.5,51.9s28.2,19.6 47.8,21.9v31h24.7v-31.8c22.1-3.2 39.4-11.8 51.8-25.9 12.4-14.1 18.6-31.4 18.6-51.9 0-18.4-4.9-33.4-14.8-45.2-9.9-11.8-28.4-21.3-55.6-28.7zm-24.7-8.2c-36.1-11.8-24.2-58.9 0-58.9v58.9zm24.7,122.2v-66.4c36.2,7 33.1,59.5 0,66.4z" />
                  </g>
                </g>
              </svg>{" "}
              Block Height
            </p>
            <p className="font-[500] text-[14px] text-[#0d4c8f] ml-8">
              {lastBlockNumber}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
