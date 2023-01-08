
function TransactionItem(props) {
  const { hash, transactionIndex, gasUsed, from, to, status, formatUnits } = props;

  return (
    <li>
      <div>Tx</div>
      <div>
        <div>Hash: {hash}</div>
        <div>Status: {status}</div>
      </div>
      <div>
        <div>From: {from}</div>
        <div>To: {to}</div>
      </div>
      <div>
        {/* <div>Gas Used: {formatUnits(gasUsed, 18)}</div> */}
        <div>Index: {transactionIndex}</div>
      </div>
    </li>
  );
}

export default TransactionItem;
