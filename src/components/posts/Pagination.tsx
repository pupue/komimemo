import Link from 'next/link';
import { LIMIT } from '@/constants';

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

export const Pagination = ({ totalCount, current = 1, basePath = '', q }: Props) => {
  const pages = Array.from({ length: Math.ceil(totalCount / LIMIT) }).map((_, i) => i + 1);

  return (
    <ul className="flex justify-center items-center p-6 mt-6">
      {pages.map((p) => (
        <li className="mx-1" key={p}>
          {current !== p ? (
            <Link
              href={`${basePath}/p/${p}` + (q ? `?q=${q}` : '')}
              className="flex items-center justify-center w-9 aspect-square rounded-sm dark:text-gray-800"
            >
              {p}
            </Link>
          ) : (
            <span className="flex items-center justify-center w-9 aspect-square rounded-md bg-[#f1f2f3] text-gray-800">
              {p}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};
