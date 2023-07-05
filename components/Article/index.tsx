import Link from 'next/link';
import TagList from '../TagList';
import PublishedDate from '../Date';
import ReadButton from '../ReadButton';
import { Divider } from '../ui/Divider';
import styles from './index.module.css';
import { type Article } from '@/libs/microcms/config';
import { formatRichText, createTableOfContents } from '@/libs/utils';
import { notoSansJP } from '@/app/layout';

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
          <p className="flex justify-center items-center font-bold text-lg text-center">
            <span>目次</span>
          </p>
          <ul className={`${notoSansJP.className} border-b border-[#333] pt-3 px-4 pb-4`}>
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
