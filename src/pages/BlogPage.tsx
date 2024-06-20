import { useTranslation } from "react-i18next";
import DefaultCard from "../components/defaultCard";
import { LinkOpenInNewTab } from "../components/linkElement";
import { BlogPageStructure } from '../components/pageLayout';
// @ts-ignore
import placeholder from '../assets/img/placeholder.png'
import { Label } from "../components/label";

export const BlogPage = () => {
    const [t, i18n] = useTranslation('common');
    
    return(
        <BlogPageStructure title={t('blogPage.title')} >
            
            <DefaultCard 
                title={t('blogPage.benefitsPaper.title')} 
                imgSrc={placeholder} 
                imgAlt={"Deco"} 
                labels={
                    <>
                        <Label>{t('tags.re')}</Label>
                        <Label>{t('tags.traceability')}</Label>
                    </>
                }>

                <>
                    {t('blogPage.benefitsPaper.content')}
                    <br/>
                    <LinkOpenInNewTab linkTo={"https://ieeexplore.ieee.org/abstract/document/9920099"}>
                        {t('blogPage.benefitsPaper.linkIEEE')}
                    </LinkOpenInNewTab>
                </>

            </DefaultCard>

            <DefaultCard 
                title={t('blogPage.slrPaper.title')} 
                imgSrc={placeholder} 
                imgAlt={"Deco"} 
                labels={
                    <>
                        <Label>{t('tags.re')}</Label>
                        <Label>{t('tags.traceability')}</Label>
                    </>
                }>

                <>
                    {t('blogPage.slrPaper.content')}
                    <br/>
                    <LinkOpenInNewTab linkTo={"https://link.springer.com/article/10.1007/s00766-023-00412-z"}>
                        {t('blogPage.slrPaper.linkArticle')}
                    </LinkOpenInNewTab>
                    <LinkOpenInNewTab linkTo={"https://open.fau.de/handle/openfau/14468"}>
                        {t('blogPage.slrPaper.linkTechReport')}
                    </LinkOpenInNewTab>
                </>

            </DefaultCard>

            <DefaultCard 
                title={t('blogPage.diss.title')} 
                imgSrc={placeholder} 
                imgAlt={"Deco"} 
                labels={
                    <>
                        <Label>{t('tags.re')}</Label>
                        <Label>{t('tags.traceability')}</Label>
                        <Label>{t('tags.uxui')}</Label>
                    </>
                }>

                <>
                    {t('blogPage.diss.content')}
                    <br/>
                    <LinkOpenInNewTab linkTo={"https://open.fau.de/items/285fa87c-b3f9-4a2a-a7b1-3aa22f24e3c1"}>
                        {t('blogPage.diss.linkPublication')}
                    </LinkOpenInNewTab>
                </>

            </DefaultCard>

        </BlogPageStructure>
    )
}