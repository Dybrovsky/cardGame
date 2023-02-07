import React, {Component} from 'react';
import stl from './Finish.module.css';

class Finish extends Component {

    runAgain = () =>{
        this.props.fillArr()
        this.props.stateToStart()
    }

    render() {
        if (this.props.state.countPlayer === 5) {
            return (
                <div>
                <div className={stl.winnerField}>
                    {this.props.name} win!
                </div>
                    <div className={stl.winnerField}>
                    <button className={stl.button} onClick={()=>{this.runAgain()}}>Again</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className={stl.winnerField}>
                        Computer win!
                    </div>
                    <div className={stl.winnerField}>
                        <button className={stl.button} onClick={()=>{this.runAgain()}}>Again</button>
                    </div>
                </div>
            )
        }


    }
}

export default Finish;


