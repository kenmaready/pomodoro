import React from 'react';
import { connect } from 'react-redux';

import TimerDisplay from './TimerDisplay.js';
import PlayBar from './PlayBar.js';
import chime from './chime.wav';

class MainBox extends React.Component {


    componentDidMount() {
        this.beeper = document.getElementById("beep");
    }

    componentDidUpdate() {
        if (this.props.minutes==='00' && this.props.seconds==='00') {
            this.beeper.currentTime = 0;
            this.beeper.play();
        }
    }

    sessionOrBreak = () => {
        if (this.props.activeTimer==='SESSION_TIMER') {
            return "Session";
        } else {
            return "Break"
        }
    }

    render() {
        return (
            <div className="ui segment my-centered">
                <h3 id="timer-label">Time Remaining in {this.sessionOrBreak()}:</h3>
                <TimerDisplay timerLength={`${this.props.minutes}:${this.props.seconds}`} id="time-left" />
                <audio className="clip" src={chime} id="beep"></audio>
                <PlayBar />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { minutes: Math.floor(state.countdown.clock / 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}),
             seconds: (state.countdown.clock % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}),
             activeTimer : state.countdown.activeTimer };
};

export default connect(mapStateToProps)(MainBox);