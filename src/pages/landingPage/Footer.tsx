import React from 'react';
import styled from 'styled-components';
import { LanguageSwitcher } from "../../components/languageSwitcher.js";
// @ts-ignore
import envelope from '../../assets/img/envelope.svg';
// @ts-ignore
import linkedIn from '../../assets/img/linkedin-logo.png';
import { IconLink, InternalLink } from '../../components/linkElement.js';
import { useTranslation } from 'react-i18next';
import constants from '../../js/constants.js';

const StyledFooterContainer = styled.div`
    border-top: 1px solid;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20px;
    flex-direction: row;
    @media (max-width: ${constants.mobileScreenSize}) {
        flex-direction: column;
    }
`;

const StyledSocialLinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

const Footer = () => {
    const [t, i18n] = useTranslation('common');
    
    return (
        <StyledFooterContainer>
            <LanguageSwitcher/>
            <InternalLink linkTo={'/impressum'}>{t('impressum.title')}</InternalLink>
            <StyledSocialLinkContainer>
                <IconLink linkTo='mailto:mail@juliamucha.de?subject=Mail from juliamucha.de' icon={envelope} alt='mail address' />
                <IconLink linkTo='https://www.linkedin.com/in/julia-mucha-b543a912a/' icon={linkedIn} alt='LinkedIn' />
            </StyledSocialLinkContainer>
        </StyledFooterContainer>
    )
}

export default Footer;
