import Image from "next/image";

type ButtonProps = {
  label: string;
  type?: 'button' | 'submit';
  icon?: boolean
};

export default function ButtonWrapper({ label, type = 'button', icon = false }: ButtonProps) {
  return (
    <button
      className="bg-c-blue-500 shadow-3xl shadow-c-blue-200 rounded-full px-9 py-2 w-fit flex items-center gap-3"
      type={type}>
      <span className="sm:text-base lg:text-xl text-white">{label}</span>
      {
        icon && <Image width={26} height={19} alt="arrow" src="/icons/arrow.svg" className="sm:w-[18px] sm:h-[11px] lg:w-[26px] lg:h-[19px]" />
      }
    </button>
  );
}