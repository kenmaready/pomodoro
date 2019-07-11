import React from 'react';

class TimerDisplay extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="ui segment">
                <h1 className="timer" id={this.props.id}>{this.props.timerLength}</h1>
            </div>
        );
    }
};

export default TimerDisplay;