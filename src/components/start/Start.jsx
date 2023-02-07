import React from 'react';
import {game} from "../../utils/constants";
import stl from './Start.module.css'

class Start extends React.Component {


    setName = (event) => {
        this.props.setName(event.target.value)
    }

    setPage = () => {
        this.props.setPage(game)

    }


    render() {

        return (
            <div className={stl.cardGameWindow}>
                <h1>Ready for war</h1>
                <input className={stl.nameField} value={this.props.name} onChange={this.setName} type="text" aria-label={'Your name'}/>
                <div>
                    <button className={stl.button} onClick={this.setPage}>Start!</button>
                </div>
            </div>
        );
    }
}



export default Start;