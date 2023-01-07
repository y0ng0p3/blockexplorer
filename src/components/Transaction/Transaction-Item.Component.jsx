
function TransactionItem(props) {
  const { hash, index, gasUsed, from, to } = props;

  return (
    <li>
      <div>Tx</div>
      <div>
        <div>Hash: {hash}</div>
        <div>Index: {index}</div>
      </div>
        <div>Gas Used: {gasUsed}</div>
      <div>From: {from}</div> 
      <div>To: {to}</div>
    </li>
  );
}

export default TransactionItem;
