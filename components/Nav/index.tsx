import styles from './index.module.css';
import { Tag } from '@/libs/microcms/config';
import TagList from '@/components/TagList';
import SearchField from '@/components/SearchField';

type Props = {
  tags: Tag[];
};

export default function Nav({ tags }: Props) {
  return (
    <nav className={styles.nav}>
      <SearchField />
      <TagList tags={tags} />
    </nav>
  );
}
