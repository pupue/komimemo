import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/libs/microcms/config';
import styles from './index.module.css';
import TagList from '../TagList';
import PublishedDate from '../Date';
import { Divider } from '../ui/Divider';

type Props = {
  article: Article;
};

export default function ArticleListItem({ article }: Props) {
  return (
    <li className={styles.list}>
      <Link href={`/articles/${article.id}`} className="flex gap-5">
        <dl className={styles.content}>
          <dt className={styles.title}>{article.title}</dt>
          <dd>
            <TagList tags={article.tags} hasLink={false} />
          </dd>
          <dd className={styles.date}>
            <PublishedDate date={article.publishedAt || article.createdAt} />
          </dd>
        </dl>
      </Link>
    </li>
  );
}
