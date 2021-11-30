import { useDispatch, useSelector } from "react-redux";
import { buyCake, restockCake } from "../redux";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <button onClick={() => dispatch(restockCake())}>Restock Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
