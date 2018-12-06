import React, { createRef } from 'react';
import { setStickyHeader, setPosition } from '../action';
import { connect } from 'react-redux';

class Sticky extends React.PureComponent {
    constructor(props) {
        super(props);
        this.stickyElementRef = React.createRef();
        // Bind function.
        this.checkPosition = this.checkPosition.bind(this);
        this.changePosition = this.changePosition.bind(this);
        this.updatePosition = this.updatePosition.bind(this);

        this.state = {
            id: 0,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkPosition, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkPosition);
    }

    changePosition() {
        this.state.id = setInterval(this.updatePosition, 30);
    }

    updatePosition() {
        if (this.props.position === 0) {
            clearInterval(this.state.id);
        } else {
            this.props.setPosition(this.props.position+1);
        }
    }
    
    checkPosition = () => {
        const stickyElement = this.stickyElementRef.current;
        const { top } = stickyElement.getBoundingClientRect();
        let isScrollUnderTop = (top < 0);
        
        if (isScrollUnderTop) {
            this.changePosition();
        } else {
            this.props.setPosition(-50);
        }
        
        this.props.setStickyHeader(isScrollUnderTop);
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