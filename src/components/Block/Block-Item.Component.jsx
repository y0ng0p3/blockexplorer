
function BlockItem(props) {
  const { number, timestamp, nonce, txn } = props;

  return (
    <li>
      <div>Bk</div>
      <div>
        <div>Bkn: {number}</div>
        <div>timestamp: {timestamp}</div>
      </div>
      <div>
        <div>nonce: {nonce}</div>
        <div>Txn: {txn}</div> 
      </div>
    </li>
  );
}

export default BlockItem;
