import { transactionTable, transactionThead, transactionTh, transactionTd, transactionTr } from '../TransactionHistory/TransactionHistory.module.css';

function TransactionHistory({items}) {
    return (
        <table className={transactionTable}>
  <thead className={transactionThead}>
    <tr className={transactionTr}>
      <th className={transactionTh}>Type</th>
      <th className={transactionTh}>Amount</th>
      <th className={transactionTh}>Currency</th>
    </tr>
  </thead>
  <tbody>
  {items.map(({ type, amount, currency, id }) => (
          <tr className={transactionTr} key={id}>
            <td className={transactionTd}>{type}</td>
            <td className={transactionTd}>{amount}</td>
            <td className={transactionTd}>{currency}</td>
          </tr>
        ))}
  </tbody>
</table>
    )

}


export default TransactionHistory;