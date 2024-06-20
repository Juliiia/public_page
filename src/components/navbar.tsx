import styled from 'styled-components';
import constants from '../js/constants.js';
import { Link, useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next";
// @ts-ignore
import logo from '../assets/img/logo.png';

const StyledNavbarDiv = styled.div`
	height: 50px;
	position: sticky;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 10px;
    background-color: ${constants.transparentWithe};
    z-index: 100;
    @media (max-width: ${constants.mobileScreenSize}) {
        height: 100px;
    }
`;

const StyledNavbarPagelinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    flex-direction: row;
    @media (max-width: ${constants.mobileScreenSize}) {
        flex-direction: column;
        gap: 0px;
        min-width: auto;
        align-items: flex-start;
    }
`;

const StyledNavbarItem = styled.span`
    padding: 10px 5px;
`;

const StyledNavbarLogo = styled.img`    
    height: 45px;
    display: block;
    padding: 5px;
    cursor: pointer;
    height: inherit;
`;


const Navbar = () => {
    const [t, i18n] = useTranslation('common');
    const navigate = useNavigate();

    return (
        <StyledNavbarDiv>
            <StyledNavbarLogo
                src={logo}
                alt="Logo"
                onClick={() => {
                    navigate('/');
                }}
            />

            <StyledNavbarPagelinks>
                <StyledNavbarItem>
                    <Link to="/portfolio">{t('portfolioPage.title')}</Link>
                </StyledNavbarItem>

                <StyledNavbarItem>
                    <Link to="/blog">{t('blogPage.title')}</Link>
                </StyledNavbarItem>
            </StyledNavbarPagelinks>
        </StyledNavbarDiv>
    )
}


export default Navbar;
