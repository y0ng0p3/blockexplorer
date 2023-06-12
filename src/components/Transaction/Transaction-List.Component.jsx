import styled from '@emotion/styled'
import TransactionItem from "./Transaction-Item.Component";

const Container = styled.rect`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

function TransactionList(props) {
  const { transactions, formatUnits } = props;
  const transactionItems = transactions.map((tx) => <TransactionItem key={tx.transactionHash} hash={tx.transactionHash} transactionIndex={tx.transactionIndex} gasUsed={tx.gasUsed} from={tx.from} to={tx.to} status={tx.status} formatUnits={formatUnits}/>);
  console.log({transactions, transactionItems});

  return (
    <Container>
      sdfd
      <ul>
        {transactionItems}
      </ul>
    </Container>
  );
}

export default TransactionList;
