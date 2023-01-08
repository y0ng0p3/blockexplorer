import TransactionItem from "./Transaction-Item.Component";

function TransactionList(props) {
  const { transactions, formatUnits } = props;
  const transactionItems = transactions.map((tx) => <TransactionItem key={tx.transactionHash} hash={tx.transactionHash} transactionIndex={tx.transactionIndex} gasUsed={tx.gasUsed} from={tx.from} to={tx.to} status={tx.status} formatUnits={formatUnits}/>);
  console.log({transactions, transactionItems});

  return (
    <ul>
      {transactionItems}
    </ul>
  );
}

export default TransactionList;
