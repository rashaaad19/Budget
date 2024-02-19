import classes from "./App.module.css";
import Button from "./UI/Button";
import Layout from "./UI/Layout";
import Card from "./components/Card";
import buttonStyle from "./UI/Button.module.css";

import { useSelector } from "react-redux";
import { currencyFormatter } from "./utilties/functions";
function App() {
  const items = useSelector((state) => state.budget.items);
  const filteredItems = useSelector((state) => state.budget.filteredItems);
  const currentBtn = useSelector((state) => state.ui.current);
  const displayData = filteredItems.length > 0 ? filteredItems : items;

  const totalBalance = items.reduce((acc, curr) => {
    if (curr.type === "expenses") {
      return (acc -= curr.price);
    }
    if (curr.type === "income") {
      return (acc += curr.price);
    }
  }, 0);
  return (
    <Layout>
      <div className={classes.balanceContainer}>
        <div className={classes.balance}>
          <h1>Balance: </h1>
          <p>{currencyFormatter(totalBalance)}</p>
        </div>
        <Button
          title="Add New"
          type="add"
          className={`${buttonStyle.addBtn}`}
        />
      </div>
      <div className={classes.filterContainer}>
        <Button
          title="All"
          type="filter"
          filterType="all"
          className={`${buttonStyle.filterBtn} ${
            currentBtn === "all" && buttonStyle.active 
          }`}
        />
        <Button
          title="Income"
          type="filter"
          filterType="income"
          className={`${buttonStyle.filterBtn} ${
            currentBtn === "income" && buttonStyle.active 
          }`}
        />
        <Button
          title="Expenses"
          type="filter"
          filterType="expenses"
          className={`${buttonStyle.filterBtn} ${
            currentBtn === "expenses" && buttonStyle.active 
          }`}
        />
      </div>

      <div className={classes.cardsContainer}>
        {displayData.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            price={item.price}
            date={item.date}
            type={item.type}
          />
        ))}
      </div>
    </Layout>
  );
}

export default App;
