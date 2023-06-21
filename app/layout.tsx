import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import './globals.css';
import styles from './layout.module.css';
import { Nunito, Noto_Sans_JP, M_PLUS_Rounded_1c } from 'next/font/google';

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

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notosansjp',
});

export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
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
        <Header />
        <Nav tags={tags.contents} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
