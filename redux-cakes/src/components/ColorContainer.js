import { useDispatch, useSelector } from "react-redux";
import { colorGreen, colorRed } from "../redux";

const ColorContainer = () => {
  const color = useSelector((state) => state.colors.color);

  const dispatch = useDispatch()

  return (
    <div>
      <h4 style={{color: `${color}`}}>This line is now {color}</h4>
      <button onClick={() => dispatch(colorRed())}>Set Red</button>
      <button onClick={() => dispatch(colorGreen())}>Set Green</button>
    </div>
  );
};

export default ColorContainer;