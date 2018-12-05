import React, { createRef } from 'react';
import { setStickyHeader } from '../action';
import { connect } from 'react-redux';

class Sticky extends React.PureComponent {
    constructor(props) {
        super(props);
        this.stickyElementRef = React.createRef();
        this.checkPosition = this.checkPosition.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkPosition, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkPosition);
    }

    checkPosition = () => {
        const stickyElement = this.stickyElementRef.current;
        const { top } = stickyElement.getBoundingClientRect();
        
        this.props.setStickyHeader(top < -0);
    }

    render() {
        return (
            <div ref={this.stickyElementRef}>
                {this.props.children}
            </div>
        )
    }
}

const mapDispatchToState = (dispatch) => {
    return { setStickyHeader: (isStickyHeader) => dispatch(setStickyHeader(isStickyHeader)), }
}

export default connect(null, mapDispatchToState)(Sticky);