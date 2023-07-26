import Link from 'next/link';
import { Tag } from '@/libs/microcms/config';

type Props = {
  tag: Tag;
  hasLink?: boolean;
};

export const TagListItem = ({ tag, hasLink = true }: Props) => {
  if (hasLink) {
    return (
      <Link
        href={`/tags/${tag.id}`}
        className="text-[#005e94] dark:text-[#4EAFE7] text-sm font-bold lg:hover:opacity-[0.7]"
      >
        #{tag.name}
      </Link>
    );
  }
  return (
    <span className="text-[#005e94] dark:text-[#4EAFE7] text-sm font-bold lg:hover:opacity-[0.7]">
      #{tag.name}
    </span>
  );
};
