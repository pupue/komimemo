import { getTagList } from '@/libs/microcms/client';
import { LIMIT } from '@/constants';
import { Footer } from '@/components/layouts/Footer';

import './globals.scss';
import styles from './layout.module.css';
import { Nunito, Noto_Sans_JP, M_PLUS_Rounded_1c } from 'next/font/google';
import { Providers } from './providers';
import { Header } from '@/components/layouts/Header';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'こみいめも',
  description: 'がんばります',
  openGraph: {
    title: 'こみいめも',
    description: 'がんばってかきます',
    images: '/og-image.png',
  },
  alternates: {
    canonical: '/',
  },
};

const mplus = M_PLUS_Rounded_1c({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mplus',
});

export const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notosansjp',
});

export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: LIMIT,
  });
  return (
    <html lang="ja" className={`${nunito.className} ${mplus.variable} ${notoSansJP.variable}`}>
      <body>
        <Providers>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
