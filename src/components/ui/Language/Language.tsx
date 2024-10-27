'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Language() {
  const pathname = usePathname();

  return (
    <button>
      <div>
        {
          pathname.indexOf('en') !== -1 ? (
            <Link href="/es">
              <Image
                className='sm:w-[54px] sm:h-[36px] lg:w-[27px] lg:h-[18px]'
                src={`/icons/en.svg`}
                alt="en"
                width={27}
                height={18}
              />
            </Link>
          )
            : (
              <Link href="/en">
                <Image
                  className='sm:w-[54px] sm:h-[36px] lg:w-[27px] lg:h-[18px]'
                  src={`/icons/es.svg`}
                  alt="es"
                  width={27}
                  height={18}
                />
              </Link>
            )
        }
      </div>
    </button>
  );
}