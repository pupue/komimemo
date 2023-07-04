'use server';

import { client } from './config';

// フロント側から呼び出す用
export const incrementReadCount = async (contentId: string) => {
  const currentReadCount = await getReadCount(contentId);
  await updateReadCount(contentId, currentReadCount + 1);
};

// 読んだ更新
export const updateReadCount = async (contentId: string, count: number) => {
  await client.update({
    endpoint: 'blog',
    contentId,
    content: JSON.parse(`{"read":${count}}`),
  });
};

// 読んだを取得
export const getReadCount = async (contentId: string) => {
  const result = await client
    .get({
      customRequestInit: {
        cache: 'no-store',
      },
      endpoint: 'blog',
      contentId,
      queries: { fields: 'read' },
    })
    .then((res) => {
      console.log(res);
      return res.read;
    });

  return result;
};
