import BlockItem from "./Block-Item.Component";

function BlockList(props) {
  const { blocks} = props;
  const blockItems = blocks.map((bk) => <BlockItem key={bk.number} number={bk.number} timestamp={bk.timestamp} nonce={bk.nonce} txn={bk.transactions.length}/>);

  return (
    <ul>
      {blockItems}
    </ul>
  );
}

export default BlockList;
