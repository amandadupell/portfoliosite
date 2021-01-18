import React from 'react';

interface Props {
    height?: number;
    width?: number;
    onClick(): void;
};

class Arrow extends React.Component<Props> {
    render() {
        return (
            <svg
                id="arrow_svg__Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x={0}
                y={0}
                viewBox="0 0 195 15"
                xmlSpace="preserve"
                {...this.props}
            >
                <style>
                    {".arrow_svg__st0{fill:none;stroke:#000;stroke-miterlimit:10}"}
                </style>
                <path
                    className="arrow_svg__st0"
                    d="M0 7.5h189.54M190.5 7.5L175.64 14V1z"
                />
            </svg>
        )
    }
};

export default Arrow;
