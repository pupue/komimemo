import styles from './layout.module.css';
import { getTag } from '@/libs/microcms/functions';
import { TagListItem } from '@/components/posts/TagListItem';

type Props = {
  children: React.ReactNode;
  params: {
    tagId: string;
  };
};

export default async function TagsLayout({ children, params }: Props) {
  const { tagId } = params;
  const tag = await getTag(tagId);
  return (
    <div>
      <p className={styles.title}>
        <TagListItem tag={tag} hasLink={false} />
        の記事一覧
      </p>
      <div>{children}</div>
    </div>
  );
}
