"use client";

import type { NextPage } from "next";

const HowItWorks: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 bg-gray-100 min-h-screen">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2 text-indigo-600">LendArt</span>
            <span className="block text-4xl font-bold text-gray-800">How it works</span>
            <p className="text-gray-600 mt-4">
              Use your NFT as collateral to borrow cryptocurrency from lenders. Repay the loan, and reclaim your NFT.
            </p>
          </h1>
        </div>

        <div className="flex-grow bg-white shadow-md rounded-lg w-full mt-16 px-8 py-12 max-w-4xl">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">1. Listing an NFT</h2>
            <p className="mb-2 text-gray-700">a. <span className="font-semibold">Connect your wallet:</span> Link your digital wallet to start using the platform.</p>
            <p className="mb-2 text-gray-700">b. <span className="font-semibold">Customize your account:</span> Personalize your account settings and profile.</p>
            <p className="mb-2 text-gray-700">c. <span className="font-semibold">Set desired terms and list your NFT:</span> Define your loan terms and list your NFT for lending.</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">2. Making offers</h2>
            <p className="mb-2 text-gray-700">a. <span className="font-semibold">Find an NFT or entire collection to lend against:</span> Browse and select an NFT or a collection to offer a loan against.</p>
            <p className="mb-2 text-gray-700">b. <span className="font-semibold">Submit a loan offer or standing collection offer:</span> Propose a specific loan or a general offer for the collection.</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">3. Accepting offers</h2>
            <p className="mb-2 text-gray-700">a. <span className="font-semibold">Choose a loan offer:</span> Review and select a suitable loan offer for your NFT.</p>
            <p className="mb-2 text-gray-700">b. <span className="font-semibold">Execute the loan:</span> Complete the loan transaction to receive funds.</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">4. Repaying a loan</h2>
            <p className="mb-2 text-gray-700">a. <span className="font-semibold">Repay the loan amount with interest:</span> Pay back the borrowed amount plus any agreed-upon interest.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-indigo-700">5. Foreclosure</h2>
            <p className="mb-2 text-gray-700">If the loan is not repaid, the NFT is foreclosed and ownership is transferred to the lender.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
