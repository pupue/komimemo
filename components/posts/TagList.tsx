import { TagListItem } from '@/components/posts/TagListItem';
import { Tag } from '@/libs/microcms/config';

type Props = {
  tags?: Tag[];
  hasLink?: boolean;
};

export const TagList = ({ tags, hasLink = true }: Props) => {
  if (!tags) {
    return null;
  }
  return (
    <ul className="flex justify-end flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag.id}>
          <TagListItem tag={tag} hasLink={hasLink} />
        </li>
      ))}
    </ul>
  );
};
