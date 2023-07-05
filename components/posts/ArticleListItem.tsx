import Link from 'next/link';
import { TagList } from '@/components/posts/TagList';
import { Date } from '@/components/posts/Date';
import { ArticleType } from '@/libs/microcms/config';

type Props = {
  article: ArticleType;
};

export const ArticleListItem = ({ article }: Props) => {
  return (
    <li className="border-b py-10">
      <Link href={`/articles/${article.id}`} className="inline-block lg:hover:opacity-[0.7]">
        <Date date={article.publishedAt || article.createdAt} />
        <div className="text-xl font-bold mb-2 sm:text-2xl">{article.title}</div>
      </Link>
      <div>
        <TagList tags={article.tags} hasLink={true} />
      </div>
    </li>
  );
};
