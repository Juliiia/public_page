import React, {useState} from 'react'
import { useRoutes } from 'react-router-dom';
import Navbar from "./components/navbar";
import {RouteObject} from "react-router";
import LandingPage from "./pages/landingPage/LandingPage";
import Footer from './pages/landingPage/Footer';
import { PortfolioPage } from './pages/PortfolioPage';
import { BlogPage } from './pages/BlogPage';
import { AboutPage } from './pages/AboutPage';
import { Impressum } from './pages/Impressum';
import { StyledPage } from './components/pageLayout';

function App() {
    const [navbarButtonClicked, setNavbarButtonClicked] = useState('');

    const routes: RouteObject[] = [
        {
            path: '*',
            element: <LandingPage />,
        },
        {
            path: '/portfolio',
            element: <PortfolioPage />,
        },
        {
            path: '/blog',
            element: <BlogPage />,
        },
        {
            path: '/about',
            element: <AboutPage />,
        },
        {
            path: '/impressum',
            element: <Impressum />,
        },
    ];

    const content = useRoutes(routes);
 //https://dev.to/coderamrin/how-to-build-a-portfolio-website-with-react-tailwind-css-fni

    return (
    <>
        <Navbar />
        <StyledPage>
            {content}
        </StyledPage>
        <Footer />
    </>
  )
}

export default App
