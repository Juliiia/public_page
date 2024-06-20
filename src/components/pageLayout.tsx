import styled from 'styled-components';
import constants from '../js/constants.js'
import { DefaultTFuncReturn } from 'i18next';

export const StyledPage = styled.div`
    max-width: ${constants.sectionMaxWidthDefault};
    margin: 10px auto;
    @media (min-width: ${constants.monitorScreenSize}) {
        max-width: ${constants.maxPageWidthLarge};
    }
`;

export const StyledInnerPageContainer = styled.div`
    padding: 10px;
    max-width: inherit;
`;

const StyledBlogPage = styled.div`
    display: grid;
    grid-template-columns: auto;
    row-gap: 100px;
    margin-top: 40px;
    @media (min-width: ${constants.monitorScreenSize}) {
        grid-template-columns: 45% 45%;
        justify-content: space-between;
    }
`;

type PageProps = {
    title: string;
    children: string | DefaultTFuncReturn | JSX.Element | JSX.Element[];
}

export const BlogPageStructure = (props:PageProps) => {
    return (
        <StyledInnerPageContainer>
            <h1>{props.title}</h1>
            <StyledBlogPage>
              {props.children}  
            </StyledBlogPage>
        </StyledInnerPageContainer>
    )
}