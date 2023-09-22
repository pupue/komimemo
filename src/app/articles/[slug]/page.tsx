import { Metadata } from 'next';
import { Article as ArticleType, WithContext } from 'schema-dts';
import { getDetail } from '@/libs/microcms/functions';
import { Article } from '@/components/posts/Article';

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk: string;
  };
};

export const revalidate = 60;

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url || ''],
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  const jsonLd: WithContext<ArticleType> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    image: 'https://komimemo.vercel.app/ogp.png',
    datePublished: data.publishedAt,
    dateModified: data.updatedAt,
    author: {
      '@type': 'Person',
      name: 'Komiyama Reika',
      url: 'https://twitter.com/______komi',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Article data={data} />
    </>
  );
}
