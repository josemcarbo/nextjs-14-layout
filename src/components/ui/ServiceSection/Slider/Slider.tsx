'use client';

import { useState } from "react"
import Image from "next/image"
import { Slide } from "@type/Slides"
import ServiceSlideItem from "./SlideItem/SlideItem"
import Indicator from "./Indicator/Indicator";

type Props = {
  items: Slide[]
}

export default function ServiceSlider({ items }: Props) {
  const [page, setPage] = useState<number>(0);

  const handlePrev = () => {
    if (page >= 1)
      setPage(page - 1);
    else
      setPage(items.length - 1)
  }

  const handleNext = () => {
    if (page < items.length - 1)
      setPage(page + 1);
    else
      setPage(0);
  }

  const visibleItems = (): Slide[] => [...items].concat(items);
  const handleIndicatorClick = (index: number) => {
    setPage(index);
  }

  return (
    <section className="flex flex-col sm:justify-center lg:justify-start gap-8">
      <div className="relative sm:overflow-hidden lg:overflow-visible lg:w-fit flex items-start justify-between transition-all">
        {
          visibleItems().slice(page, page + 2).map((item, i) => (
            <ServiceSlideItem key={item.id} item={item} isActive={i === 0} />
          ))
        }

        <Image onClick={handlePrev} className="rotate-180 absolute lg:-left-4 xl:left-0 top-1/2 cursor-pointer" width={17} height={27} src="/icons/arrow_b_1.svg" alt="arrow-left" />
        <Image onClick={handleNext} className="absolute lg:-right-6 xl:right-0 top-1/2 cursor-pointer" width={17} height={27} src="/icons/arrow_b_1.svg" alt="arrow-right" />
      </div>
      <footer className="w-full flex justify-center gap-6">
        {
          items.map((item, i) => (
            <Indicator key={item.id} index={i} isActive={i === page} onHandleClick={handleIndicatorClick} />
          ))
        }
      </footer>
    </section>
  )
}