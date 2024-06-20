import { DefaultTFuncReturn } from 'i18next';
import styled from 'styled-components';
import constants from '../js/constants';

const StyledLabel = styled.span`
    background: ${constants.darkBlue};
    padding: 5px 10px;
    border-radius: 5px;
    color: #ffffff;
`;

type LabelProps = {
    children?: string | DefaultTFuncReturn | JSX.Element | JSX.Element[];
};

export const Label = (props:LabelProps) => {
    return <StyledLabel>{props.children}</StyledLabel>;
}