import styled from 'styled-components';
import React from 'react';
import constants from '../js/constants.js'
import { DefaultTFuncReturn } from 'i18next';
// @ts-ignore
import externalLinkIcon from '../assets/img/external-link.png';

const StyledColorLink = styled.a`
    padding: 3px;
`;

export const StyledSimpleLink = styled.a`
    text-decoration: underline;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    text-align: left;
`;

const StyledIconLabelDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;

const StyledSocialImg = styled.img`
    height: 45px;
    max-width: inherit;
    padding: 5px;
`;

const StyledSmallIcon = styled.img`
    height: 16px;
`;

type LinkProps = {
    linkTo: string;
    children?: string | DefaultTFuncReturn | JSX.Element | JSX.Element[];
}

type ScrollToProps = {
    scrollTo: (c: string) => void;
    children: string | JSX.Element | JSX.Element[];
}

type LinkToProps = {
    linkTo: string;
    newTab: boolean;
    children?: string | JSX.Element | JSX.Element[];
}

type IconLinkTo = {
    icon: string;
    alt: string;
    linkTo: string;
    label?: string;
}

type GeneralTypes = ScrollToProps | LinkToProps;

const isLinkToComponent = (props: GeneralTypes): props is LinkToProps => {
    return 'linkTo' in props;
}

const isScrollToProps = (props: GeneralTypes): props is ScrollToProps => {
    return 'scrollTo' in props;
}

const ScrollToComponent = (props:ScrollToProps) => {
    return (
        <StyledSimpleLink
            onClick={() => props.scrollTo('test')}
        >
            {props.children}
        </StyledSimpleLink>
    )
}

export const InternalLink = (props:LinkProps) => {
    return <StyledSimpleLink href={props.linkTo}> {props.children} </StyledSimpleLink>
}

export const LinkOpenInNewTab = (props:LinkProps) => {
    return (
        <StyledSimpleLink href={props.linkTo} target="_blank"> 
            <StyledSmallIcon src={externalLinkIcon} />
            {props.children} 
        </StyledSimpleLink>
    )
}

export const IconLink = (props:IconLinkTo) => {
    return (
        <StyledColorLink href={props.linkTo} target="_blank">
            <StyledIconLabelDiv>
                <StyledSocialImg src={props.icon} alt={props.alt}/>
                {props.label && props.label}
            </StyledIconLabelDiv>
        </StyledColorLink>
    )
}
