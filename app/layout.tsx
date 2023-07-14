import { getTagList } from '@/libs/microcms/functions';
import { LIMIT } from '@/constants';
import { Footer } from '@/components/layouts/Footer';

import './globals.scss';
import styles from './layout.module.css';
import { Providers } from './providers';
import { Header } from '@/components/layouts/Header';
import { mplus, notoSansJP, nunito } from './fonts';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'こみめも',
  description: 'がんばります',
  openGraph: {
    title: 'こみめも',
    description: 'がんばってかきます',
    images: '/og-image.png',
  },
  alternates: {
    canonical: '/',
  },
};

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
