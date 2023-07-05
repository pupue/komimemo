import { getList, getTag } from '@/libs/microcms/client';
import { LIMIT } from '@/constants';
import { Pagination } from '@/components/posts/Pagination';
import { ArticleList } from '@/components/posts/ArticleList';

type Props = {
  params: {
    tagId: string;
  };
};

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const { tagId } = params;
  const data = await getList({
    limit: LIMIT,
    filters: `tags[contains]${tagId}`,
  });
  const tag = await getTag(tagId);
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath={`/tags/${tagId}`} />
    </>
  );
}
