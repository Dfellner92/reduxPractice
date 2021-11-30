import { useSelector } from "react-redux";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  return (
    <div>
      <div>Num of Cakes - {numOfCakes}</div>
    </div>
  );
};

export default HooksCakeContainer;
