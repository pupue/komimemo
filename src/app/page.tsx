import { getList } from '@/libs/microcms/functions';
import { LIMIT } from '@/constants';
import { Pagination } from '@/components/posts/Pagination';
import { ArticleList } from '@/components/posts/ArticleList';
import { LottieAnimation } from '@/components/LottieAnimation';

export const revalidate = 60;

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <>
      <LottieAnimation />
      <p className="text-center mb-12">日々の学びをアウトプットしていくよ</p>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} />
    </>
  );
}
