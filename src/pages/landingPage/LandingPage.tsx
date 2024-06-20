import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import constants from '../../js/constants.js'
import { useTranslation} from "react-i18next";
// @ts-ignore
import portrait from '../../assets/img/Mucha_Querformat-freisteller.png'
import { StyledInnerPageContainer } from '../../components/pageLayout.js';

const StyledPageContainer = styled.div`
    margin: 30px auto 60px auto;
    display: flex;
    flex-direction: column;
    justify-content: end;
    @media (max-width: ${constants.tabletScreenSize}) {
        min-height: 450px;
    }
`;

const StyledHaderBox = styled.div`
    min-height: 300px;
    display: flex;
    align-content: flex-end;
    flex-wrap: wrap;
    @media (max-width: ${constants.tabletScreenSize}) {
        min-height: 400px;
    }
    @media (max-width: ${constants.mobileScreenSize}) {
        min-height: 500px;
    }
`;

const StyledHeaderContainer = styled.div`
    background-color: ${constants.mainOrange};
    max-height: 150px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 10px;
    padding: 30px 20px;
    width: 100%;
    @media (max-width: ${constants.tabletScreenSize}) {
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        max-height: 200px;
      }
      @media (max-width: ${constants.tabletScreenSize}) {
        max-height: auto;
        padding: 10px 10px;
        background-color: transparent;
        gap: 0px;
        padding: 0px;
      }
`;

const StyledImg = styled.img`    
    max-height: 300px;
`;

const StyledSubTitle = styled.div`
    font-size: 18px;
`;

const StyledNameContainer = styled.div`
    text-align: end;
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

const StyledInnerPageFlexContainer = styled(StyledInnerPageContainer)`
    display: grid;
    grid-template-columns: auto;
    row-gap: 30px;
    margin: 40px auto;
`;

const StyledStatement = styled.div`
    line-height: normal;
    font-style: italic;
    font-size: 24px;
    border-radius: 0px 30px 30px;
    padding: 15px;
`;

const LandingPage = () => {
    const {t, i18n} = useTranslation('common');

    return (
        <StyledInnerPageFlexContainer> 
            <StyledHaderBox>
                <StyledHeaderContainer>
                    <StyledImg src={portrait} />
                    <StyledNameContainer>
                        <h1>
                            {t('topSection.me')}
                        </h1>
                        <StyledSubTitle>
                            {t('topSection.re')} &#x2022; {t('topSection.uxui')} &#x2022; {t('topSection.dev')}
                        </StyledSubTitle> 
                    </StyledNameContainer>
                    
                </StyledHeaderContainer>
            </StyledHaderBox>
            
            <StyledStatement>
                {t('topSection.statement')}
            </StyledStatement>
        </ StyledInnerPageFlexContainer>
    )
}

export default LandingPage;
