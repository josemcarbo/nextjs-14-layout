import { useTranslations } from "next-intl";
import Image from "next/image";
import NavBar from "@components/layout/NavBar/NavBar";

export default function Banner() {
  const t = useTranslations('banner');
  const translate = useTranslations('nav');

  return (
    <header className="w-full bg-c-blue-900 sm:h-[200px] md:h-[345px] lg:h-[500px] xl:h-[620px] 2xl:h-[722px] text-white sm:px-6 md:px-8 lg:px-8 xl:px-16 2xl:px-20 sm:py-6 md:py-5 2xl:py-10 flex lg:pb-8 items-center justify-between sm:gap-16 2xl:gap-36 relative bg-[url('/images/banner_bg.png')]">
      <div className="flex flex-col gap-8">
        <h1 className="lg:text-c-hd-xl sm:text-2xl md:text-4xl">{t('title')}</h1>
        <p className="lg:text-c-tx-2 sm:text-sm md:text-base">{t('subtitle')}</p>
      </div>
      <Image width={809} height={658} src="/images/banner.svg" alt="banner" className="md:mt-44 lg:mt-64 2xl:w-[809px] xl:w-[609px] lg:w-[435px] md:w-[335px] sm:hidden md:block" />
      <Image width={165} height={122} src="/images/banner_1.svg" alt="banner" className="absolute sm:w-[62px] sm:-bottom-5 sm:left-20 lg:w-[165px] lg:h-[122px] lg:-bottom-10 lg:left-60 -z-10" />
      <div className="w-full absolute sm:top-0 top-2 left-0">
        <NavBar home={translate("home")} service={translate("service")} about={translate("about")} tools={translate("tools")} partners={translate("partners")} button={translate("contactBtn")} />
      </div>
    </header>
  );
}