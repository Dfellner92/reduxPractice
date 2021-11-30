import { buyCake, restockCake } from '../redux';
import { connect } from 'react-redux';

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <button onClick={props.restockCake}>Restock Cake</button>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes,           
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        restockCake: () => dispatch(restockCake())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
