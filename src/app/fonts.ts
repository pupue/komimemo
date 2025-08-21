import { Nunito, Noto_Sans_JP, M_PLUS_1 } from 'next/font/google';

export const mplus = M_PLUS_1({
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
