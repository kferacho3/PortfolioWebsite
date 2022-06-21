import React, { useRef, useEffect, useState, Component} from 'react';

const Canv = () => {
    return <Canvas id='/fun'></Canvas>
}

class Canvas extends Component {
    componentDidMount() {
        const c = this.canvas.getContext('2d');

    }
    render() {
        const {width, height} = this.props;

        return (
            <canvas ref= {node => (this.canvas = node)}
            width = {width}
            height={height}
            />
        );
    }
}