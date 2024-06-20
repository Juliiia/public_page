import DefaultCard from "../components/defaultCard";
import DefaultSection from "../components/defaultSection"
import { useTranslation } from "react-i18next";
// @ts-ignore
import climbingDiaryBanner from '../assets/img/climbingdiary_banner.png'
// @ts-ignore
import qdacityBanner from '../assets/img/qdacity_banner.png'
import { LinkOpenInNewTab } from "../components/linkElement";
import { Label } from "../components/label";
import { BlogPageStructure } from "../components/pageLayout";

export const PortfolioPage = () => {
    const {t, i18n} = useTranslation('common');
    
    return(
        <BlogPageStructure title={t('portfolioPage.title')} >
            <DefaultCard 
                title={t('portfolioPage.qdacity.title')} 
                imgSrc={qdacityBanner} 
                imgAlt={"Banner image deco"} 
                labels={
                    <>
                        <Label>{t('tags.re')}</Label>
                        <Label>{t('tags.uxui')}</Label>
                    </>
                }>

                    <>
                        {t('portfolioPage.qdacity.content')}

                        <LinkOpenInNewTab linkTo={"https://drive.google.com/file/d/1bQE1HZPUHa6jy1pGhDNcm6UerQQCKDIx/view?usp=drive_link"}>
                            {t('portfolioPage.qdacity.linkToProjectDetails')}
                        </LinkOpenInNewTab>
                        <LinkOpenInNewTab linkTo={"https://qdacity.com/"}>
                            {t('portfolioPage.qdacity.linkToPage')}
                        </LinkOpenInNewTab>
                    </>

            </DefaultCard>
            <DefaultCard 
                title={t('portfolioPage.climbingDiary.title')} 
                imgSrc={climbingDiaryBanner} 
                imgAlt={"Banner image deco"} 
                labels={
                    <>
                        <Label>{t('tags.re')}</Label>
                        <Label>{t('tags.uxui')}</Label>
                    </>
                }>

                    <>
                        {t('portfolioPage.climbingDiary.content')}

                        <LinkOpenInNewTab linkTo={"https://drive.google.com/file/d/1gdIgXGtVGqzzz11ZWAypN0szLfLpr2QK/view?usp=drive_link"}>
                            {t('portfolioPage.climbingDiary.linkToProjectDetails')}
                        </LinkOpenInNewTab>
                        <LinkOpenInNewTab linkTo={"https://github.com/LorenMucha/Climbing-Diary-App"}>
                            {t('portfolioPage.climbingDiary.linkToGithub')}
                        </LinkOpenInNewTab>
                    </>

            </DefaultCard>
        </BlogPageStructure>
    )
}