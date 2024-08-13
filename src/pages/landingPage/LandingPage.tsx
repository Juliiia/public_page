import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import { useTranslation} from "react-i18next";
// @ts-ignore
import { StyledInnerPageContainer } from '../../components/pageLayout.js';
import { HighlightSection } from '../../components/highlightSection.js';

const StyledInnerPageFlexContainer = styled(StyledInnerPageContainer)`
    display: grid;
    grid-template-columns: auto;
    row-gap: 90px;
    margin: 30px auto 80px auto;
`;

const LandingPage = () => {
    const {t, i18n} = useTranslation('common');

    return (
    <>
        <h1>{t('greeting.title')}</h1>
        <p>{t('greeting.content')}</p>
        
        <StyledInnerPageFlexContainer> 
            <HighlightSection 
            title={t('service.re.title')} 
            subTitle={t('service.re.subTitle')}  
            alignment='right' >
                {t('service.re.description')}  
            </HighlightSection>

            <HighlightSection 
            title={t('service.traceability.title')}
            subTitle={t('service.traceability.subTitle')} 
            alignment='left' >
                {t('service.traceability.description')}
            </HighlightSection>

        </ StyledInnerPageFlexContainer>
    </> 
    )
}

export default LandingPage;
