import React from 'react';
import './MemoryCard.css';
import logo from './iconfinder_React.js_logo_1174949.png';

class MemoryCard extends React.Component {
    render() {
    var memoryCardInnerClass = "MemoryCardInner";
    if (this.props.isFlipped === true){
        memoryCardInnerClass += " flipped";
    }
        return (
        <div className="MemoryCard" onClick={this.props.pickCard}>
            <div className={memoryCardInnerClass}>
                <div className="MemoryCardBack">
                    <img src={logo} alt=""/>
                </div>
                <div className="MemoryCardFront">
                {this.props.symbol}
                </div>
            </div>
        </div>
        )
    }
}

export default MemoryCard;