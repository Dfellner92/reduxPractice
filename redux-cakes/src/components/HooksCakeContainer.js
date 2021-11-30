import { useDispatch, useSelector } from "react-redux";
import { buyCake, restockCake, buyIceCream, restockIceCream } from "../redux";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const numOfIceCream = useSelector((state) => state.iceCream.numIceCream);

  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      <button onClick={() => dispatch(restockCake())}>Restock Cake</button>
      <br />
      <h2>Num of Ice Cream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
      <button onClick={() => dispatch(restockIceCream())}>Restock Ice Cream</button>
    </div>
  );
};

export default HooksCakeContainer;
