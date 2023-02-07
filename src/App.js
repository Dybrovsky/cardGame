import './App.css';
import Start from "./components/start/Start";
import Battlefield from "./components/battlefield/Battlefield";
import Finish from "./components/finish/Finish";
import React from "react";
import {game, start} from "./utils/constants";
import battlefield from "./components/battlefield/Battlefield";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            countPlayer: 0,
            countComputer: 0,
            count: 0,
            activePage: start,
            cards: [],
            playerCard: [],
            computerCard: [],
        };

    }


    stateToStart = () =>{
        this.setState({
            name: this.state.name,
            countPlayer: 0,
            countComputer: 0,
            count: 0,
            activePage: game,
            playerCard: [],
            computerCard: [],
        })

    }

    setName = (name) => {
        this.setState({
            name: name
        })
    }

    setPage = (page) => {
        this.setState({
            activePage: page
        })
    }

    fillArray = () => {

        const deck = [];
        const suits = ['♡', '♣', '♢', '♠'];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 2; j <= 14; j++) {
                let v = j;
                if (j === 11)
                    v = 'J'
                if (j === 12)
                    v = 'Q'
                if (j === 13)
                    v = 'K'
                if (j === 14)
                    v = 'A'
                deck.push({suit: suits[i], rank: j, value: v})
            }
        }
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }

        this.setState({
            cards: deck
        })

    }


    giveCards = () => {

        const computerCard = this.state.cards.pop();
        const playerCard = this.state.cards.pop();

        const pointComputer = playerCard.rank === computerCard.rank ? 0 : (playerCard.rank > computerCard.rank ? 0 : 1);
        const pointPlayer = playerCard.rank === computerCard.rank ? 0 : (playerCard.rank > computerCard.rank ? 1 : 0);
        this.setState({
            computerCard: computerCard,
            playerCard: playerCard,
        })

        this.setState(prevState => ({
            countPlayer: prevState.countPlayer + pointPlayer,
            countComputer: prevState.countComputer + pointComputer,
        }))
        if (this.state.countComputer === 5 || this.state.countPlayer ===5 )
            this.setPage('game')

    }

    componentDidMount() {
        this.fillArray()
    }


    render() {

        if (this.state.countComputer === 5 || this.state.countPlayer === 5) {
            return <Finish stateToStart={this.stateToStart}  setPage={this.setPage} state={this.state} name={this.state.name}
            fillArr={this.fillArray}/>
        } else {
            switch (this.state.activePage) {
                case start:
                    return <Start state={this.state} name={this.state.name} setName={this.setName}
                                  setPage={this.setPage}/>
                case game:
                    return <Battlefield state={this.state} giveCards={this.giveCards}
                                        name={this.state.name} setPage={this.setPage}/>
                default:
                    return <Finish/>


            }
        }

    }


}

export default App;