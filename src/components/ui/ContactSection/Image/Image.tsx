export default function ContactImage() {
  return (
    <div className="sm:hidden md:block relative w-[502px] h-[494px] mx-5 z-10 before:content-[''] before:absolute before:-left-4 before:-top-4 before:w-[175px] before:h-[318px] before:bg-c-blue-500 before:rounded-[10px] after:content-[''] after:absolute after:-right-[22px] after:-bottom-4 after:w-[175px] after:h-[305px] after:bg-c-blue-300 after:rounded-[10px] after:-z-10">
      <div className="bg-[url('/images/bg_1.png')] bg-no-repeat bg-contain absolute top-0 left-0 w-[199px] h-[358px]"></div>
      <div className="bg-[url('/images/bg_2.png')] bg-no-repeat bg-contain absolute top-0 left-[195px] w-[337px] h-[184px]"></div>
      <div className="bg-[url('/images/bg_3.png')] bg-no-repeat bg-contain absolute top-[176px] left-[195px] w-[141px] h-[184px]"></div>
      <div className="bg-[url('/images/bg_4.png')] bg-no-repeat bg-contain absolute top-[178px] left-[328px] w-[189px] h-[331px]"></div>
      <div className="bg-[url('/images/bg_5.png')] bg-no-repeat bg-contain absolute top-[334px] left-0 w-[335px] h-[174px]"></div>
    </div>
  )
}