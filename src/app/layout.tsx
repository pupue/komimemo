import styles from './layout.module.css';
import { Providers } from './providers';
import { mplus, notoSansJP, nunito } from './fonts';
import { getTagList } from '@/libs/microcms/functions';
import { LIMIT } from '@/constants';
import './globals.scss';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { ThemeContainer } from '@/components/theme/ThemeContainer';

const siteName = 'こみめも';
const description =
  '現役ひよっこフロントエンドエンジニアによる日々の学びをアウトプットする場です。';
const url = 'https://komimemo.vercel.app/';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3302'),
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    images: '/ogp.png',
    url,
    siteName,
    locale: 'ja_JP',
    type: 'article',
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
    <html lang="ja" className={`${nunito.variable} ${mplus.variable} ${notoSansJP.variable}`}>
      <body>
        <Providers>
          <ThemeContainer>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
          </ThemeContainer>
        </Providers>
      </body>
    </html>
  );
}
