import { ArticleListItem } from '@/components/posts/ArticleListItem';
import { ArticleType } from '@/libs/microcms/config';

type Props = {
  articles?: ArticleType[];
};

export const ArticleList = ({ articles }: Props) => {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul>
      {articles.map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </ul>
  );
};
