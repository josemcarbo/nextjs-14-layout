'use client';

import classNames from "classnames";

type Props = {
  index: number,
  isActive: boolean,
  onHandleClick: (index: number) => any;
}

export default function Indicator({ index, isActive, onHandleClick }: Props) {
  const onClick = () => {
    onHandleClick(index);
  };

  return (
    <button onClick={onClick} className="w-[19px] h-[19px] rounded-full border border-black bg-c-blue-300 flex justify-center items-center">
      <div className={classNames({"rounded-full w-[5px] h-[5px]": true, "bg-c-blue-500": isActive, "bg-white": !isActive})}></div>
    </button>
  );

}