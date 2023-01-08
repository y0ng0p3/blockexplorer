import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import './App.css';
import BlockList from './components/Block/Block-List.Component';
import TransactionList from './components/Transaction/Transaction-List.Component';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [blockList, setBlockList] = useState([]);
  const [transactionList, setTransactionList] = useState([]);

  const getBlockNumber = async () => {
    setBlockNumber(await alchemy.core.getBlockNumber());
  };
  const getBlockWithTransactions = async (bkNumber) => {
    return await alchemy.core.getBlockWithTransactions(bkNumber);
  }
  const getTransactionReceipt = async (hash) => {
    return await alchemy.core.getTransactionReceipt(hash);
  }
  const getTransactionReceipts = async (bkNumber) => {
    return await alchemy.core.getTransactionReceipts(bkNumber);
  }
  const formatUnits = (value, unit) => {
    // return alchemy.core.formatUnits(value, unit);
  }

  useEffect(() => {
    getBlockNumber();
  }, []);
  useEffect(() => {
    async function getTenLastBlocks() {
      let tenLastBk = [];
      for (let i = blockNumber; i > blockNumber - 10; --i) {
        tenLastBk.push(await getBlockWithTransactions(i));
      }
      setBlockList(tenLastBk);
    };
    getTenLastBlocks();
  }, [blockNumber]);
  useEffect(() => {
    async function getTenLastTransactions() {
      const firstBlockTxHash = blockList[0].transactions.map((tx) => tx.hash);
      let tenLastTx = [];
      for (let i = 0; i < 10; i++) {
        tenLastTx.push(await getTransactionReceipt(firstBlockTxHash[i]));
      }
      console.log(tenLastTx);
      setTransactionList(tenLastTx);
    };
    getTenLastTransactions();
  }, [blockList]);

  return (
    <div>
      <div className="App">Block Number: {blockNumber}</div>
      {blockList.length ? <BlockList blocks={blockList}/> : <div>Loading Blocks...</div>}
      {transactionList.length ? <TransactionList transactions={transactionList} formatUnits={formatUnits}/> : <div>Loading Transactions...</div>}
    </div>
  );
}

export default App;
