import React from 'react';
import './MemoryCard.css';
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
                    <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt=""/>
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