import styled from 'styled-components';
import React from 'react';
import constants from '../js/constants.js';
import { useNavigate } from "react-router-dom";
import { DefaultTFuncReturn } from 'i18next';

const StyledContentContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    color: ${constants.defaultTextColor};
`;

const StyledLabels = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    display: none;
`;

const StyledImg = styled.img`    
    display: block;
    margin: auto;
    max-width: 100%;
    margin-bottom: 10px;
`;

const StyledContent = styled.p`
    text-align: justify;
`;

type CardProps = {
    title: string;
    imgSrc: string;
    imgAlt: string;
    labels: DefaultTFuncReturn | JSX.Element ;
    children?: string | DefaultTFuncReturn | JSX.Element | JSX.Element[];
};

const DefaultCard = ({title, imgSrc, imgAlt, labels, children}:CardProps) =>{

    return (
        <div>
            <StyledImg src={imgSrc} alt={imgAlt} />
            <StyledContentContainer>
                <StyledLabels>
                    {labels}
                </StyledLabels>
                <h2>{title}</h2>
                <StyledContent>
                    {children}
                </StyledContent>
            </StyledContentContainer>
        </div>
    )
};

export default DefaultCard;