import styled from 'styled-components';
import React from 'react';
import constants from '../js/constants.js'
import {DefaultTFuncReturn} from "i18next";

const StyledSMainSectionDiv = styled.div`
    padding: 10px;
    max-width: ${constants.sectionMaxWidthDefault};
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;
// TODO later:     @media (min-width: ${constants.laptopScreenSize}) {flex-direction: row;}

const StyledColoredTitle = styled.h2`
    font-size: ${constants.fontSizeSectionTitle};
    font-weight: bold;
`;

const StyledTitle = styled.h2`
    font-size: ${constants.fontSizeSectionTitle};
    font-weight: bold;
`;

const StyledSubSectionTitle = styled.h3`
    font-size: ${constants.fontSizeSubSectionTitle};
    font-weight: bold;
`;

type SectionProps = {
    level?: number;
    title: string | DefaultTFuncReturn | JSX.Element | JSX.Element[];
    children?: string | JSX.Element | JSX.Element[];
};

const DefaultSection = ({level = 1, title, children}:SectionProps) => {

    return (
        <StyledSMainSectionDiv>
            {level == 1 ? 
                <StyledTitle>{title}</StyledTitle>
                :
                <StyledSubSectionTitle>{title}</StyledSubSectionTitle>
            }
            
            {children}
        </StyledSMainSectionDiv>
    )
};

export default DefaultSection;