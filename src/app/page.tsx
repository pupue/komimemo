import { getList } from '@/libs/microcms/functions';
import { LIMIT } from '@/constants';
import { Pagination } from '@/components/posts/Pagination';
import { ArticleList } from '@/components/posts/ArticleList';
import { DownIcon } from '@/components/ui/icons/down-icon';
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
      <div className="text-sm border border-[#333] dark:border-white">
        <details>
          <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
            <span>
              どっちが安いか比較するアプリ{' '}
              <a
                href="https://cheaper.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                cheaper
              </a>{' '}
              をリリースしました
            </span>
            <span className="down-icon">
              <DownIcon />
            </span>
          </summary>
          <div className="px-4">
            <div className="border-t border-dashed py-4">
              <p>どっちが安いか毎回電卓で計算するのが面倒という母（と自分）のために作りました。</p>
              <p>毎回色が変わるブタちゃんからのメッセージに癒されてください。</p>
            </div>
          </div>
        </details>
      </div>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} />
    </>
  );
}
