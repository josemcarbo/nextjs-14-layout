import Image from "next/image";
import { Slide } from "@type/Slides";
import classNames from "classnames";

type Props = {
  item: Slide;
  isActive?: boolean;
}

export default function ServiceSlideItem({ item: { title, description, icon }, isActive = false }: Props) {
  return (
    <article className={
      classNames({
        "shadow-lg flex flex-col gap-4 sm:py-8 sm:px-6 lg:py-4 lg:px-3 xl:py-8 xl:px-6 sm:min-w-full sm:h-[326px] sm:justify-between sm:overflow-hidden lg:overflow-visible lg:justify-start lg:min-w-[230px] xl:min-w-[286px] lg:h-[366px] lg:mx-4 xl:mx-8": true,
        "bg-c-blue-500 text-white": isActive
      })
    }>
      <Image width={95.3} height={95.3} src={isActive ? `/icons/${icon}_a.svg` : `/icons/${icon}.svg`} alt={icon} />
      <h1 className="text-c-hd-2">{title}</h1>
      <p className={classNames({ "text-c-tx-4": true, "text-gray-400": !isActive })}>{description}</p>
      <div className={classNames({ "flex justify-start gap-3": true, "hidden": !isActive })}>
        <span className="text-c-hd-3">Leer más</span>
        <Image width={8} height={14} src="/icons/arrow_1.svg" alt="arrow" />
      </div>
    </article>
  );
}