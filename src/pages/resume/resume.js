import React from 'react';
import { PageContainer } from '../constants';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';

class Resume extends React.Component {

    state = { pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    render() {
        const { pageNumber } = this.state;

        return (
            <>
                <PageContainer>
                    <Document
                        file="/RESUME2022.pdf"
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                </PageContainer>
            </>
        );
    }
};

export default Resume;
