import { useSelector } from "react-redux";

const Data = () => {
  const expenses = useSelector(state => state.budget.expenses);
  console.log(expenses)
  return <div>
    
  </div>;
};

export default Data;
