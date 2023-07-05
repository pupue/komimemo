import Link from 'next/link';
import TagList from '../TagList';
import PublishedDate from '../Date';
import styles from './index.module.css';
import { ArticleType } from '@/libs/microcms/config';

type Props = {
  article: ArticleType;
};

export default function ArticleListItem({ article }: Props) {
  return (
    <li className="border-b py-10">
      <Link href={`/articles/${article.id}`} className="inline-block lg:hover:opacity-[0.7]">
        <div className={styles.content}>
          <div className={styles.date}>
            <PublishedDate date={article.publishedAt || article.createdAt} />
          </div>
          <div className={styles.title}>{article.title}</div>
        </div>
      </Link>
      <div>
        <TagList tags={article.tags} hasLink={true} />
      </div>
    </li>
  );
}
