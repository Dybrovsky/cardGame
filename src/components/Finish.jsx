import React, {Component} from 'react';

class Finish extends Component {


    render() {
        if (this.props.state.countPlayer === 5) {
            return (
                <div>
                    {this.props.name} win!
                    <button onClick={}>Again</button>
                </div>
            )
        } else {
            return (
                <div>
                    Computer win!
                    <button>Again</button>
                </div>
            )
        }


    }
}

export default Finish;


