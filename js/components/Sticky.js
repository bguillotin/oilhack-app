import React, { createRef } from 'react';
import { setStickyHeader, setPosition } from '../action';
import { connect } from 'react-redux';

class Sticky extends React.PureComponent {
    constructor(props) {
        super(props);
        this.stickyElementRef = React.createRef();
        // Bind function.
        this.checkPosition = this.checkPosition.bind(this);
        this.changePositionUp = this.changePositionUp.bind(this);
        this.changePositionDown = this.changePositionDown.bind(this);
        this.timerUp = this.timerUp.bind(this);
        this.timerDown = this.timerDown.bind(this);

        this.state = {
            isScrollUnderTop: false,
            intervalId: 0,
            incrementOrDecrement: 1
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkPosition, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkPosition);
    }

    changePositionDown() {
        let id = setInterval(this.timerDown, 10);
        this.setState({ intervalId: id})
    }

    changePositionUp() {
        let id = setInterval(this.timerUp, 5);
        this.setState({ intervalId: id})
    }
    
    timerDown() {
        if (this.props.position === 0) {
            clearInterval(this.state.intervalId);
        } else {
            this.props.setPosition(this.props.position + 1);
        }
    }

    timerUp() {
        if (this.props.position === -50) {
            clearInterval(this.state.intervalId);
            this.props.setStickyHeader(false);
        } else {
            this.props.setPosition(this.props.position - 1);
        }
    }
    
    checkPosition = () => {
        const stickyElement = this.stickyElementRef.current;
        const { top } = stickyElement.getBoundingClientRect();
        
        let isScrollUnderTop = (top < 0);
        
        if (isScrollUnderTop && !this.state.isScrollUnderTop) {
            this.setState({ isScrollUnderTop: true, incrementOrDecrement: 1 });
            this.changePositionDown();
            this.props.setStickyHeader(isScrollUnderTop);
        } else if (!isScrollUnderTop && this.state.isScrollUnderTop) {
            this.setState({ isScrollUnderTop: false,  incrementOrDecrement: -1 });
            this.changePositionUp();
        }
    }

    render() {
        return (
            <div ref={this.stickyElementRef}>
                {this.props.children}
            </div>
        )
    }
}

const mapDispatchToState = (dispatch) => ({ 
    setStickyHeader: (isStickyHeader) => dispatch(setStickyHeader(isStickyHeader)), 
    setPosition: (position) => dispatch(setPosition(position))
})

const mapStateToProps = (state) => ({ position: state.position })

export default connect(mapStateToProps, mapDispatchToState)(Sticky);