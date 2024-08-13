import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "../../components/languageSwitcher.js";
// @ts-ignore
import envelope from '../../assets/img/envelope.svg';
// @ts-ignore
import linkedIn from '../../assets/img/linkedin-in-brands-solid.svg';
// @ts-ignore
import medium from '../../assets/img/medium-brands-solid.svg';
// @ts-ignore
import xing from '../../assets/img/xing-brands-solid.svg';
import { IconLink } from '../../components/linkElement.js';
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
            <Link to="/impressum">{t('legalDisclosure.title')}</Link>
            <StyledSocialLinkContainer>
                <IconLink linkTo='mailto:mail@juliamucha.de?subject=Mail from juliamucha.de' icon={envelope} alt='mail address' />
                <IconLink linkTo='https://www.linkedin.com/in/julia-mucha-b543a912a/' icon={linkedIn} alt='LinkedIn' />
                <IconLink linkTo='https://www.xing.com/profile/Julia_Mucha026906' icon={xing} alt='Xing' />
                <IconLink linkTo='https://medium.com/@julia.mucha' icon={medium} alt='Medium' />
            </StyledSocialLinkContainer>
        </StyledFooterContainer>
    )
}

export default Footer;
