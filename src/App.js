import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import './App.css';
import BlockList from './components/Block/Block-List.Component';

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
  const [tenLastBlocks, setTenLastBlock] = useState([]);
  // const [blockList, setBlockList] = useState([]);

  const getBlockNumber = async () => {
    setBlockNumber(await alchemy.core.getBlockNumber());
  };
  const getBlockWithTransactions = async (bkNumber) => {
    return await alchemy.core.getBlockWithTransactions(bkNumber);
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
      setTenLastBlock(tenLastBk);
    };
    getTenLastBlocks();
  }, [blockNumber]);

  return (
    <div>
      <div className="App">Block Number: {blockNumber}</div>
      {tenLastBlocks.length ? <BlockList blocks={tenLastBlocks}/> : <div>Loading...</div>}
    </div>
  );
}

export default App;
