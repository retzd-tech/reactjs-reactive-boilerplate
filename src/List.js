import React, {Component} from 'react';
import ReactCardFlip from "react-card-flip";
import Back from "./Back";
import Front from "./Front";
import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
  }

  handleOnMouseEnter = () => {
    this.setState({ isFlipped : true });
  };

  handleOnMouseLeave = () => {
    this.setState({ isFlipped : false });
  };

  render() {
    return (
        <div className="container--card"
             onMouseEnter={this.handleOnMouseEnter}
             onMouseLeave={this.handleOnMouseLeave}>
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
            <Front/>
            <Back/>
          </ReactCardFlip>
        </div>
    )
  }
}

export default List;
