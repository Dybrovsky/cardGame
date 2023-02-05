import React, {Component} from 'react';

class Battlefield extends Component {
    render() {
        // console.log(this.props.state.countPlayer)
        // console.log(this.props.state.countComputer)
        // console.log('play',this.props.state.player)
        // console.log('comp',this.props.state.computer)
        return (
            <div>
                <h2>Computer</h2>
                <div>
                    <div className="opponentCards">
                        Computer
                        {this.props.state.computerCard}
                        {this.props.state.countComputer}
                    </div>
                    <div className="myCards">
                        I
                        {this.props.state.playerCard}
                        {this.props.state.countPlayer}
                    </div>
                    <h3>{this.props.name}</h3>
                    <button onClick={this.props.givenCards}>
                        Next move
                    </button>

                </div>
            </div>
        );

    }
}

export default Battlefield;