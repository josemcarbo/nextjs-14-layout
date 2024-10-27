import ContactImage from "@/components/ui/ContactSection/Image/Image";
import ContactDescription from "./Description/Description";

export default function ContactSection() {
  return (
    <section className="w-full sm:flex-col sm:mt-32 lg:mt-0 sm:items-center xl:items-start xl:flex-row flex justify-between sm:gap-16 lg:gap-8">
      <ContactImage />
      <ContactDescription/>
    </section>
  );
}