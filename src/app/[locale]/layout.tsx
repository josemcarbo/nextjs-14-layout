import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Banner from '@components/layout/Banner/Banner';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <div className='2xl:max-w-[1512px] xl:max-w-[1280px] lg:max-w-[1024px] mx-auto pb-40'>
      <Banner />
      <main className="sm:px-8 sm:mt-24 md:px-20 lg:px-20 xl:px-36 md:mt-36 w-full flex flex-col lg:gap-32">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </main>
    </div>
  );
}