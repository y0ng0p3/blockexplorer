import TransactionItem from "./Transaction-Item.Component";

function TransactionList(props) {
  const { blocks: transactions} = props;
  const transactionItems = transactions.map((tx) => <TransactionItem key={tx.hash} hash={tx.hash} index={tx.index} gasUsed={tx.gasUsed} from={tx.from} to={tx.to}/>);
  console.log({transactions, transactionItems});

  return (
    <ul>
      {transactionItems}
    </ul>
  );
}

export default TransactionList;
