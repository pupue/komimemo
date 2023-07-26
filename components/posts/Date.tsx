import { formatDate } from '@/libs/utils';

type Props = {
  date: string;
};

export const Date = ({ date }: Props) => {
  return (
    <span className="text-gray-500 text-sm font-bold dark:text-gray-100">{formatDate(date)}</span>
  );
};
