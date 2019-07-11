import React from 'react';
import { connect } from 'react-redux';

import { advanceTimer, resetTimer } from '../actions';

class PlayBar extends React.Component {
    constructor(props) {
        super(props);
        this.ON = 1;
        this.OFF = 0;
        this.PLAY_BUTTON = "fas fa-play-circle my-control"
        this.PAUSE_BUTTON = "fas fa-pause-circle my-control"
        this.state = { timerStatus: this.OFF, startStopIcon: this.PLAY_BUTTON, timer: null };
    }
    
    onResetClick = () => {
        this.setState({ timerStatus: this.OFF, startStopIcon: this.PLAY_BUTTON });
        clearInterval(this.state.timer);
        var sounds = document.getElementsByTagName('audio');
        for (let i = 0; i < sounds.length; i++) { 
            sounds[i].pause();
            sounds.currentTime=0.0000;
        }
        this.props.resetTimer();
    }

    onStartStopClick = () => {
        if (this.state.timerStatus) {
            this.setState({ timerStatus: this.OFF, startStopIcon: this.PLAY_BUTTON});
            clearInterval(this.state.timer);
        } else {
            this.setState({ timerStatus: this.ON, startStopIcon: this.PAUSE_BUTTON });
            this.setState({ timer: setInterval(this.props.advanceTimer, 1000) });
        }
    }

    render() {
        return (
            <div className="ui segment">
                <i className={this.state.startStopIcon} onClick={this.onStartStopClick} id="start_stop"></i>
                &nbsp; &nbsp; &nbsp;
                <i className="fas fa-history my-control" onClick={this.onResetClick} id="reset"></i>
            </div>
        );
    }
};

export default connect(null, { advanceTimer, resetTimer })(PlayBar);
