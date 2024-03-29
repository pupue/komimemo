import Link from 'next/link';
import { TagList } from '@/components/posts/TagList';
import { Date } from '@/components/posts/Date';
import { ReadButton } from '@/components/posts/ReadButton';
import { Divider } from '@/components/ui/Divider';
import { type ArticleType } from '@/libs/microcms/config';
import { formatRichText, createTableOfContents } from '@/libs/utils';
import { notoSansJP } from '@/app/fonts';

type Props = {
  data: ArticleType;
};

export const Article = ({ data }: Props) => {
  const tableOfContents = createTableOfContents(data.content);

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="flex items-center sm:mb-10 sm:text-sm">
        <Date date={data.publishedAt || data.createdAt} />
      </div>
      <h1 className="text-center font-bold text-3xl leading-[1.4] mb-5 sm:text-4xl sm:mb-2">
        {data.title}
      </h1>
      <TagList tags={data.tags} />

      {tableOfContents.length > 0 && (
        <div data-style="toc" className="w-full my-8">
          <p className="flex justify-center items-center font-bold text-lg text-center before:content-[''] before:bg-[#263238] before:h-[1px] before:w-full after:content-[''] after:bg-[#263238] after:h-[1px] after:w-full">
            <span className="shrink-0 px-4">目次</span>
          </p>
          <ul className={`${notoSansJP.className} border-b border-[#333] pt-3 px-4 pb-4`}>
            {tableOfContents.map((toc) => (
              <li key={toc?.id} className={`toc-${toc?.name} mb-1`}>
                <Link href={`#${toc?.id}`} className="lg:hover:opacity-[0.7]">
                  {toc?.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        data-style="content"
        className="w-full max-w-3xl"
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />

      <Divider />

      <ReadButton id={data.id} />
    </div>
  );
};
