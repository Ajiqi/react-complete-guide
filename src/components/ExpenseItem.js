import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>May 15th 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">RM 250</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
