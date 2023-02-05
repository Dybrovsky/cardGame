import React from 'react';
import {game} from "../utils/constants";
import Battlefield from "./Battlefield";

class Start extends React.Component {


    setName = (event) => {
        this.props.setName(event.target.value)
    }

    setPage = () => {
        this.props.setPage(game)

    }


    render() {

        return (
            <div>
                <h1>Ready for war</h1>
                <input value={this.props.name} onChange={this.setName} type="text" aria-label={'Your name'}/>
                <div>
                    <button  onClick={this.setPage}>Start!</button>
                </div>
            </div>
        );
    }
}



export default Start;