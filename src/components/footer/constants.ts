import styled from 'styled-components';
import { $orange } from '../../assets/colors';

export interface Props {
};

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 130px;
    justify-content: space-between;
    position: fixed;

    right: 0;
    bottom: 0;

    padding-bottom: 50px;
    padding-right: 50px;
`;
