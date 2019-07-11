import React from 'react';
import { connect } from 'react-redux';

import MainBox from './MainBox.js';
import SettingBox from './SettingBox.js';
import './App.css';

import { changeSessionLength, changeBreakLength } from '../actions';

class App extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="ui container">
                <h1>pomodoro clock</h1>
                <div className="ui centered grid segment">
                    <div className="row">
                        <div className="ten wide column">
                            <MainBox />
                        </div>
                    </div>
                    <div className="row">
                        <div className="five wide column">
                            <SettingBox boxName="session" title="Session Length" timerLength={this.props.sessionLength} callback={this.props.changeSessionLength} id="session"/>
                        </div>
                        <div className="five wide column">
                            <SettingBox boxName="break" title="Break Length" timerLength={this.props.breakLength} callback={this.props.changeBreakLength} id="break"/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { sessionLength : state.countdown.sessionLength,
             breakLength : state.countdown.breakLength };
};

export default connect(mapStateToProps, { changeSessionLength, changeBreakLength })(App);