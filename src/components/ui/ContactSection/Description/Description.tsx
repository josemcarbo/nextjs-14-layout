import ButtonWrapper from "@components/ui/Button/Button";
import { useTranslations } from "next-intl";

export default function ContactDescription() {
  const t = useTranslations('contact');

  return (
    <article className="flex flex-col gap-6 sm:text-left sm:max-w-full xl:text-right xl:max-w-[420px]">
      <h2 className="text-c-hd-3 text-c-blue-500">Sobre nosotros</h2>
      <h1 className="text-c-hd-1">{t('title')}</h1>
      <p className="text-c-tx-3">Usted debe tener un sólido conocimiento de HTML y CSS. Debe comprender la arquitectura de componentes de React. Debe tener buena atención al detalle, organización del código, habilidades de comunicación efectiva y capacidad para trabajar en equipo.</p>
      <h3 className="text-c-hd-2">Usa Context para acceder a los títulos 
      de abajo desde la sección anterior</h3>
      <ul className="flex flex-col gap-4">
        <li className="relative pr-8 after:content-[''] after:absolute after:w-[19px] after:h-[19px] after:border after:border-c-blue-300 after:rounded-full  after:top-1 after:right-0 before:absolute before:top-[11px] before:right-[7px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-c-blue-300 before:content-[''] before:z-10">Pruebas y depuración de problemas</li>
        <li className="relative pr-8 after:content-[''] after:absolute after:w-[19px] after:h-[19px] after:border after:border-c-blue-300 after:rounded-full  after:top-1 after:right-0 before:absolute before:top-[11px] before:right-[7px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-c-blue-300 before:content-[''] before:z-10">Traduce diseños a código</li>
        <li className="relative pr-8 after:content-[''] after:absolute after:w-[19px] after:h-[19px] after:border after:border-c-blue-300 after:rounded-full  after:top-1 after:right-0 before:absolute before:top-[11px] before:right-[7px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-c-blue-300 before:content-[''] before:z-10">Optimización y rendimiento</li>
      </ul>
    </article>
  )
}