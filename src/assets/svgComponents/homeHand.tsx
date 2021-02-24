import React from 'react';

interface Props {
    height?: number;
    width?: number;
};

class HomeHand extends React.Component<Props> {
    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...this.props}>
                <path
                    d="M66.2 322.3c-7.6-12.9-6.8-16.8-21.9-90.8-4.3-21.1-4.4-43.1-10.1-64-3-11.1-6.8-22.2-.9-31.1 4.8-7.3 15.1-11.5 24-9.4 11.2 2.7 16.1 14.7 18.9 21.4 5 12.4 4.4 16.2 5.6 33.8.8 10.9 3.5 25.3 14.4 26.3 7.4.7 13.3-5.9 17.5-12 14.7-21.4 30.5-51.6 39.8-104.8 2.6-15 7.8-29.5 10.8-44.4 2.6-13.2 4.1-22.5 11.9-27.3 5.3-3.2 13.8-4.6 20-.3s7.1 12.2 7.2 13.7c.3 3.6-.2 7.2-1.5 10.5 0 0-8.3 22-23.6 99.9-.4 2-1.2 6.4 1.2 9.6s7.1 3.7 9.1 4c.8.1 1.6.1 2.4.1 1.7 0 3.4-.2 5.1-.5 2-.4 10-4.7 19.9-22.9 4-7.3 8.3-16.9 11-23.2 0 0 4-9.6 30.2-58.9 2.9-5.4 7.3-9.7 12.8-12.4 5.5-2.5 12.7-2 16.5 2.7 1.2 1.5 3.6 4.7 3 12.2-2.4 26.9-42.2 92.2-40.2 113 .2 1.9.7 7.5 4 8.9 3 1.3 6.8-1.3 8.4-2.5 10.6-7.4 20.4-15.9 29.2-25.4 19.1-21.8 41-43 52.9-48.2 3.2-1.4 6.9-2.5 10.3-1 4.3 1.8 5.8 6.9 6.2 8.1 2.8 8.8-5.8 21-28.1 45.3 0 0-10.7 11.7-35.8 43.8-3 3.8-9.5 12.4-7.2 21.2.4 1.6 1.1 3.1 2 4.5.8.3 1.7.5 2.6.6 5.9 1 14.3-.5 31.4-16.1 16.7-15.2 19.4-24.6 29-25.3 4-.1 7.9.9 11.3 3.1 2.3 3.2 3.8 7 4.3 10.9 2 18.9-23.1 31-51 59-10.6 10.6-23.9 28.1-40.3 51.1-24.4 34.2-27.1 45.2-45.1 58-14 9.7-30 16-46.8 18.4-44.5 6.6-78.2-15.9-84.8-20.6-14.6-10.4-26.7-23.7-35.6-39z"
                    fill="#ffa0b4"
                />
            </svg>
        )
    }
};

export default HomeHand;