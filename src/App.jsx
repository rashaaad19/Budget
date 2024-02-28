import classes from "./App.module.css";
import Button from "./UI/Button";
import Layout from "./UI/Layout";
import Card from "./components/Card";
import Form from "./components/Form";
import buttonStyle from "./UI/Button.module.css";

import { useSelector } from "react-redux";
import { currencyFormatter } from "./utilties/functions";
import ConfirmCard from "./components/ConfirmCard";
function App() {
  const items = useSelector((state) => state.budget.items);
  const category = useSelector((state) => state.budget.currentFilter);
  const filteredItems = useSelector((state) => state.budget.filteredItems);
  const displayData = category === "all" ? items : filteredItems;
  const totalBalance = items.reduce((acc, curr) => {
    if (curr.type === "expenses") {
      return (acc -= curr.price);
    }
    if (curr.type === "income") {
      return (acc += curr.price);
    }
  }, 0);

  console.log(totalBalance<1)
  return (
    <Layout>
      <div className={classes.balanceContainer}>
        <div className={classes.balance}>
          <h1>Balance: </h1>
          <p className={totalBalance < 1 ? classes.redError : {}}>
            {currencyFormatter(totalBalance)}
          </p>
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
            category === "all" && buttonStyle.active
          }`}
        />
        <Button
          title="Income"
          type="filter"
          filterType="income"
          className={`${buttonStyle.filterBtn} ${
            category === "income" && buttonStyle.active
          }`}
        />
        <Button
          title="Expenses"
          type="filter"
          filterType="expenses"
          className={`${buttonStyle.filterBtn} ${
            category === "expenses" && buttonStyle.active
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
            id={item.id}
          />
        ))}
      </div>
      <Form />
      <ConfirmCard />
    </Layout>
  );
}

export default App;
