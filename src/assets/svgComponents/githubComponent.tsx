import React from 'react';

interface Props {
    height?: number;
    width?: number;
};

class GithubLogo extends React.Component<Props> {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" {...this.props}>
                <path
                    d="M20 0C8.96 0 0 9.18 0 20.51c0 9.06 5.73 16.75 13.68 19.46 1 .19 1.37-.45 1.37-.99 0-.49-.02-1.78-.03-3.49-5.56 1.24-6.74-2.75-6.74-2.75-.91-2.37-2.22-3-2.22-3-1.82-1.27.14-1.25.14-1.25 2.01.15 3.06 2.11 3.06 2.11 1.78 3.13 4.68 2.23 5.82 1.7.18-1.33.7-2.23 1.27-2.74-4.44-.52-9.11-2.28-9.11-10.13 0-2.24.78-4.07 2.06-5.5-.21-.52-.89-2.6.2-5.43 0 0 1.68-.55 5.5 2.1 1.6-.45 3.31-.68 5.01-.69 1.7.01 3.41.24 5.01.69 3.82-2.65 5.49-2.1 5.49-2.1 1.09 2.82.4 4.91.2 5.43 1.28 1.43 2.06 3.26 2.06 5.5 0 7.88-4.68 9.61-9.13 10.12.72.63 1.36 1.88 1.36 3.8 0 2.74-.02 4.95-.02 5.63 0 .55.36 1.19 1.38.99C34.27 37.25 40 29.56 40 20.51 40 9.18 31.04 0 20 0z"
                    opacity={0.5}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#181616"
                />
            </svg>
        )
    }
};

export default GithubLogo;
