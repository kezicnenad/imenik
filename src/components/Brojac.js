import React from 'react';
import {connect} from 'react-redux';
import { addToCount, subtractFromCount, setCount } from '../redux/Redux';

function Brojac({count, addOne, subtractOne, reset}) {
    return(
        <div>
            <span>
                <button onClick={subtractOne}> - </button>
                <span className="counter"> Broj: {count} </span>
                <button onClick={addOne}> + </button>
            </span>
            <span>
                <button onClick={reset}>Resetiraj broj</button>
            </span>
        </div>
    );
}

function mapStateToProps(state) {
    return {
      count: state,
    };
  }
  
  const mapDispatchToProps = {
    addOne: () => addToCount(1),  
    subtractOne: () => subtractFromCount(1),
    reset: () => setCount(0),
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Brojac);  