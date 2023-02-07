import React, {Component} from 'react';
import stl from './Battlefield.module.css'

class Battlefield extends Component {
componentDidMount() {
    this.props.giveCards()
}
    render() {
        return (
            <div>
                <div className={stl.cardContainer}>
                    <div>

                        <h3>Computer</h3>
                        <div>
                            <div className={stl.info}>
                            Points: {this.props.state.countComputer}
                            </div>
                            <div className={stl.playerCard}>
                                <div className={stl.card}>
                            {this.props.state.computerCard.value}
                            {this.props.state.computerCard.suit}                        </div>
                                </div>
                            </div>
                    </div>
                    <button className={stl.button} onClick={this.props.giveCards}>
                        Next move
                    </button>
                    <div>
                        <h3>{this.props.name}</h3>
                        <div>
                            <div className={stl.info}>
                            Points: {this.props.state.countPlayer}
                            </div>
                            <div className={stl.playerCard}>
                                <div className={stl.card}>
                            {this.props.state.playerCard.value}
                            {this.props.state.playerCard.suit}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        );

    }
}

export default Battlefield;