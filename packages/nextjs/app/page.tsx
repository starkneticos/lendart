"use client";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">LendArt</span>
            <span className="block text-4xl font-bold">Leverage your NFTs for Loans</span>
            <p>Use your NFT as collateral to borrow cryptocurrency from lenders. Repay the loan, and reclaim your NFT.</p>
          </h1>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          
        </div>
      </div>
    </>
  );
};

export default Home;
