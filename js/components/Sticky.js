import React, { createRef } from 'react';
import { setStickyHeader, setPosition, setScrolling } from '../action';
import { connect } from 'react-redux';

class Sticky extends React.PureComponent {
    constructor(props) {
        super(props);
        // Create an element reference.
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
            incrementOrDecrement: 1,
            isScrolling: props.isScrolling,
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
        const { top } = this.stickyElementRef.current.getBoundingClientRect();
        const { isScrolling } = this.props;
        let timeoutValue = 0;
        let isScrollUnderTop = (top < 0);
        
        if (isScrollUnderTop && !this.state.isScrollUnderTop) {
            if (isScrolling) {
                timeoutValue = 350;
                this.props.setScrolling(false);
            } else {
                this.props.setStickyHeader(isScrollUnderTop);
            }
            // Add timeout in case automatic scrolling.
            setTimeout(() => {
                this.changePositionDown();  
                this.props.setStickyHeader(isScrollUnderTop);  
            }, timeoutValue);
            this.setState({ isScrollUnderTop: true, incrementOrDecrement: 1 });
            
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
    setPosition: (position) => dispatch(setPosition(position)),
    setScrolling: (isScrolling) => dispatch(setScrolling(isScrolling))
})

const mapStateToProps = (state) => ({ position: state.position, isScrolling: state.isScrolling })

export default connect(mapStateToProps, mapDispatchToState)(Sticky);