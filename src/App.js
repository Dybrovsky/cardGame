import './App.css';
import Start from "./components/Start";
import Battlefield from "./components/Battlefield";
import Finish from "./components/Finish";
import React from "react";
import {game, start} from "./utils/constants";

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
        const cards = []

        for(let i=1; i<= 36; i++){
            cards.push(i)
        }

        const shuffledCards = cards.sort((a, b) => 0.5 - Math.random());

        this.setState({
            cards: shuffledCards,
        })

    };


    givenCards = () => {

        const computerCard = this.state.cards.pop();
        const playerCard = this.state.cards.pop();

        const IfIAmWin = playerCard > computerCard;
        const pointComputer = IfIAmWin ? 0 : 1;
        const pointPlayer = IfIAmWin ? 1 : 0;


        this.setState({
            computerCard: computerCard,
            playerCard: playerCard,
        })

        this.setState(prevState => ({
            countPlayer: prevState.countPlayer + pointPlayer,
            countComputer: prevState.countComputer + pointComputer,
        }))



    }

    componentDidMount() {
        this.fillArray()
    }



    render() {
        switch (this.state.activePage) {
            case start:
                return <Start state={this.state}  name={this.state.name} setName={this.setName} setPage={this.setPage}
                              fill={this.fillArray}/>
            case game:
                return <Battlefield state={this.state}  fillArray={this.fillArray} givenCards={this.givenCards}
                                    name={this.state.name} setPage={this.setPage}/>
            default:
                return <Finish/>


        }


    }
}

export default App;
