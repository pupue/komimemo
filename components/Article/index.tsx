import Link from 'next/link';
import TagList from '../TagList';
import PublishedDate from '../Date';
import ReadButton from '../ReadButton';
import { Divider } from '../ui/Divider';
import styles from './index.module.css';
import { type Article } from '@/libs/microcms/config';
import { formatRichText, createTableOfContents } from '@/libs/utils';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  const tableOfContents = createTableOfContents(data.content);

  return (
    <main className={styles.main}>
      <div className={styles.meta}>
        {data.writer && (
          <div className={styles.writer}>
            <picture>
              <source
                type="image/webp"
                srcSet={`${data.writer?.image?.url}?fm=webp&fit=crop&w=48&h=48 1x, ${data.writer?.image?.url}?fm=webp&fit=crop&w=48&h=48&dpr=2 2x`}
              />
              <img
                src={data.writer?.image?.url}
                alt=""
                className={styles.writerIcon}
                width={data.writer?.image?.width}
                height={data.writer?.image?.height}
              />
            </picture>
            <span className={styles.writerName}>{data.writer?.name}</span>
          </div>
        )}
        <PublishedDate date={data.publishedAt || data.createdAt} />
      </div>
      <h1 className={styles.title}>{data.title}</h1>
      <TagList tags={data.tags} />

      {tableOfContents.length > 0 && (
        <div className={styles.toc}>
          <p>目次</p>
          <ul>
            {tableOfContents.map((toc) => (
              <li key={toc?.id} className={styles[`toc-${toc?.name}`]}>
                <Link href={`#${toc?.id}`}>{toc?.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />

      <Divider />

      <ReadButton id={data.id} />
    </main>
  );
}
