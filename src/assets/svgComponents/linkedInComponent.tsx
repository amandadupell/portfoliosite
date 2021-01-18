import React from 'react';

interface Props {
    height?: number;
    width?: number;
};

class LinkedInLogo extends React.Component<Props> {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...this.props}>
                <path
                    d="M31.66 0H8.33A8.33 8.33 0 000 8.33v23.34A8.33 8.33 0 008.33 40h23.33A8.33 8.33 0 0040 31.67V8.33A8.33 8.33 0 0031.66 0zM13.33 31.67h-5V13.33h5zm-2.5-20.45a2.94 2.94 0 112.92-2.94 2.93 2.93 0 01-2.92 2.94zm22.5 20.45h-5v-9.34c0-5.62-6.67-5.19-6.67 0v9.34h-5V13.33h5v3c2.33-4.33 11.67-4.68 11.67 4.07z"
                    opacity={0.5}
                />
            </svg>
        )
    }
};

export default LinkedInLogo;
