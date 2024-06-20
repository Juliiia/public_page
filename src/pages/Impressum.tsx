import { LinkOpenInNewTab } from "../components/linkElement";
import { OneColumnPageStructure } from "../components/pageLayout"
import { useTranslation } from "react-i18next";

export const Impressum = () => {
    const [t, i18n] = useTranslation('common');
    
    return (
        <OneColumnPageStructure title={t('legalDisclosure.title')} >
            <>
                <p>
                    {t('legalDisclosure.id')}
                    {t('legalDisclosure.represented')}
                    <a href='mailto:mail@juliamucha.de'>mail(at)juliamucha.de</a><br/><br/>

                    {t('legalDisclosure.contact')}
                </p> 
                <p>
                    {t('legalDisclosure.disclaimer')}
                </p>
                <span>
                Impressum vom <LinkOpenInNewTab linkTo="https://www.impressum-generator.de">Impressum Generator</LinkOpenInNewTab> der <LinkOpenInNewTab linkTo="https://www.kanzlei-hasselbach.de/">Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht</LinkOpenInNewTab>
                </span>
            </>           
        </OneColumnPageStructure>
    )
}