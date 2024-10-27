import ServiceDescription from "@components/ui/ServiceSection/Description/Description";
import ServiceSlider from "@components/ui/ServiceSection/Slider/Slider";
import { Slide } from "@type/Slides";

export default async function ServiceSection() {
  const slides: Slide[] = await fetch("https://react-frontend.pages.dev/slides.json")
    .then(response => response.json())
    .catch(e => console.log("Fetch: ", e));

  return (
    <section className="w-full sm:flex-col lg:flex-row flex justify-between gap-16">
      <ServiceDescription />
      <ServiceSlider items={slides} />
    </section>
  );
}