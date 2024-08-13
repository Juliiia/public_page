import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import { useTranslation} from "react-i18next";
// @ts-ignore
import { StyledInnerPageContainer } from '../../components/pageLayout.js';
import { HighlightSection } from '../../components/highlightSection.js';

const StyledInnerPageFlexContainer = styled(StyledInnerPageContainer)`
    display: grid;
    grid-template-columns: auto;
    row-gap: 60px;
    margin: 60px auto 80px auto;
`;

const LandingPage = () => {
    const {t, i18n} = useTranslation('common');

    return (
        <StyledInnerPageFlexContainer> 

            <HighlightSection 
            title='Systematische Erhebung und Dokumentation von Anforderungen' 
            subTitle='Durchführung &#x2022; Beratung' 
            alignment='right' >
                Gezielte Anforderungserhebung: Durchführung von Workshops und Interviews zur Sammlung und Dokumentation von Anforderungen. 
                Dokumentation: Erstellung von umfassenden und nachvollziehbaren Anforderungsdokumenten.
            </HighlightSection>

            <HighlightSection 
            title='Entwicklung einer maßgeschneiderten Traceability-Strategie' 
            subTitle='Beratung' 
            alignment='left' >
                Projekt- und Team-spezifische Anpassungen: Entwicklung einer Traceability-Strategie, die auf den spezifischen Kontext Ihres Projekts und die Arbeitsweise Ihres Teams zugeschnitten ist.
            </HighlightSection>

        </ StyledInnerPageFlexContainer>
    )
}

export default LandingPage;
