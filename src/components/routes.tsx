import LandingPage from "../pages/landingPage/LandingPage";
import { useRoutes } from "react-router-dom";
import { PortfolioPage } from "../pages/PortfolioPage";
import { BlogPage } from "../pages/BlogPage";
import { AboutPage } from "../pages/AboutPage";
import { Impressum } from "../pages/Impressum";


// Thanks to: https://medium.com/@ahsan-ali-mansoor/define-react-routes-with-better-approach-typescript-d07de782b517
export const Routes = () => {
    return useRoutes([
        {
            path: '*',
            element: <LandingPage />,
        },
        {
            path: 'portfolio',
            element: <PortfolioPage />,
        },
        {
            path: 'blog',
            element: <BlogPage />,
        },
        {
            path: 'about',
            element: <AboutPage />,
        },
        {
            path: 'impressum',
            element: <Impressum />,
        },
    ]);
  };
  