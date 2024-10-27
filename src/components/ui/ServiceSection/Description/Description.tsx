import ButtonWrapper from "@components/ui/Button/Button";

export default function ServiceDescription() {
  return (
    <article className="flex flex-col gap-6">
      <h2 className="sm:text-xl lg:text-xl text-c-blue-500">Servicios</h2>
      <h1 className="sm:text-2xl lg:text-c-hd-1">Esta info te llega desde un servicio externo</h1>
      <p className="sm:text-sm lg:text-c-tx-3">Consultando el servicio en
        https://react-frontend.pages.dev/slides.json, debes usar Context para enviar los datos que necesitas en la sección de abajo. A la derecha tiene un slide o carrusel.</p>
      <ButtonWrapper label="Ver más" icon={true} />
    </article>
  )
}