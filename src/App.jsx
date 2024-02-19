import classes from "./App.module.css";
import Button from "./UI/Button";
import Layout from "./UI/Layout";
import Card from "./components/Card";
import buttonStyle from "./UI/Button.module.css";

import { useSelector } from "react-redux";
function App() {
  const items = useSelector((state) => state.budget.items);
  const filteredItems=useSelector(state=>state.budget.filteredItems)
  const displayData=filteredItems.length>0?filteredItems:items
  console.log(filteredItems);

  return (
    <Layout>
      <div className={classes.filterContainer}>
        <Button title="All" type="all" className={`${buttonStyle.filterBtn}`} />
        <Button
          title="Income"
          type="income"
          className={`${buttonStyle.filterBtn}`}
        />
        <Button
          title="Expenses"
          type="expenses"
          className={`${buttonStyle.filterBtn}`}
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
