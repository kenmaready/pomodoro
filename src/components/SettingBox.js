import React from 'react';

import TimerDisplay from './TimerDisplay.js';

class SettingBox extends React.Component {

    componentDidMount = () => {
        var up = document.getElementById(`${this.props.boxName}-increment`);
        up.addEventListener("click", this.upArrowClickedHandler);

        var down = document.getElementById(`${this.props.boxName}-decrement`);
        down.addEventListener("click", this.downArrowClickedHandler);
    }

    upArrowClickedHandler = () => {
        this.props.callback("up");
    }

    downArrowClickedHandler = () => {
        this.props.callback("down");
    }

    render() {
        return (
            <div className="ui segment my-centered" id={`${this.props.id}-label`}>
                <h4>{this.props.title}</h4>
                <TimerDisplay timerLength={this.props.timerLength} id={`${this.props.id}-length`}/>
                <i className="fas fa-arrow-circle-up my-control" id={`${this.props.boxName}-increment`}></i>
                &nbsp;   &nbsp;   &nbsp;
                <i className="fas fa-arrow-circle-down my-control" id={`${this.props.boxName}-decrement`}></i>
            </div>
        );
    }
};

export default SettingBox;