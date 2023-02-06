import React, {Component} from 'react';

class Battlefield extends Component {
componentDidMount() {
    this.props.giveCards()
}



    render() {

        return (
            <div>
                <div>
                    <div className="opponentCards">

                        <h3>Computer</h3>
                        <div>
                            <div>
                            Points: {this.props.state.countComputer}
                            </div>
                            {this.props.state.computerCard.value}
                            {this.props.state.computerCard.suit}                        </div>
                    </div>
                    <div className="myCards">
                        <h3>{this.props.name}</h3>
                        <div>
                            <div>
                            Points: {this.props.state.countPlayer}
                            </div>
                            {this.props.state.playerCard.value}
                            {this.props.state.playerCard.suit}
                        </div>
                    </div>
                    <button onClick={this.props.giveCards}>
                        Next move
                    </button>


                </div>

            </div>
        );

    }
}

export default Battlefield;