import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import constants from '../js/constants.js';
import { DefaultTFuncReturn } from 'i18next';

const StyledSection = styled.div`
    display: flex;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;


const StyledHeaderBox = styled.div`
    display: flex;
    align-content: flex-end;
    flex-wrap: wrap;
`;

const StyledHeaderContainer = styled.div`
    background-color: ${constants.mainOrange};
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 10px;
    padding: 20px 20px;
    width: 100%;
    @media (max-width: ${constants.tabletScreenSize}) {
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
      }
      @media (max-width: ${constants.tabletScreenSize}) {
        max-height: auto;
        padding: 10px 10px;
        background-color: transparent;
        gap: 0px;
        padding: 0px;
      }
`;

const StyledNameContainer = styled.div`
    text-align: ${(props: {align:string}) => {
        if(props.align == 'right'){
            return 'end';
        } else {
            return 'start';
        }
    }};
    padding-right: 10px;
    width: 100%;
    @media (max-width: ${constants.tabletScreenSize}) {
        text-align: center;
    }
    @media (max-width: ${constants.tabletScreenSize}) {
        background-color: ${constants.mainOrange};
        padding: 10px;
    }
`;

const StyledSubTitle = styled.div`
    font-size: 18px;
`;

const StyledStatement = styled.div`
    line-height: normal;
    font-size: 24px;
    border: ${constants.mainOrange};
    border-style: solid;
    border-radius: ${(props: {align:string}) => {
        if(props.align == 'right'){
            return '30px 0px 30px 30px';
        } else {
            return '0px 30px 30px';
        }
    }};
    padding: 15px;
`;

type SectionProps = {
    title: string;
    subTitle?: string;
    children: string | DefaultTFuncReturn | JSX.Element | JSX.Element[];
    alignment?: 'left' | 'right';
};

export const HighlightSection = ({title, subTitle, alignment, children}:SectionProps) => {
    return(
        <StyledSection> 
            <StyledHeaderBox>
                <StyledHeaderContainer>
                    <StyledNameContainer align={alignment? alignment : 'left'}>
                        <h2>
                            {title}
                        </h2>
                        {subTitle  &&  
                            (
                                <StyledSubTitle>
                                    {subTitle}
                                </StyledSubTitle>
                            )
                        }
                    </StyledNameContainer> 
                </StyledHeaderContainer>
            </StyledHeaderBox>
            
            <StyledStatement align={alignment? alignment : 'left'}>
                {children}
            </StyledStatement>

        </StyledSection>
    )
}