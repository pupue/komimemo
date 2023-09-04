'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormField } from '@/components/ui/FormField';
import { Button } from '@/components/ui/Button';
import { Toast } from '@/components/toast';
import { addContact } from '@/libs/firebase';
import { TOAST_TITLE_ERROR, TOAST_TITLE_THANKS } from '@/constants/messages';

export type Inputs = {
  name: string;
  email: string;
  content: string;
};

export type ToastType = {
  title: string;
  text: string;
  status: 'success' | 'error';
} | null;

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [toast, setToast] = useState<ToastType>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    try {
      const result = await addContact(data);
      setTimeout(() => {
        setIsLoading(false);
        setToast({
          title: result.status === 'success' ? TOAST_TITLE_THANKS : TOAST_TITLE_ERROR,
          text: result.message,
          status: result.status as 'success' | 'error',
        });
        if (result.status === 'success') {
          reset();
        }
      }, 2000);
    } catch (error) {
      setToast({
        text: 'お問い合わせの送信に失敗しました。後ほど再試行してください。',
        status: 'error',
        title: TOAST_TITLE_ERROR,
      });
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-2">
        <FormField
          label="お名前"
          type="text"
          name="name"
          register={register}
          registerOptions={{ required: '入力必須です' }}
          errorMessage={errors.name?.message}
        />
        <FormField
          label="メールアドレス"
          type="email"
          name="email"
          register={register}
          registerOptions={{
            pattern: {
              value: /^[A-Za-z0-9][A-Za-z0-9_.-]*@[A-Za-z0-9_.-]+\.[A-Za-z0-9]+$/,
              message: '無効なメールアドレスです',
            },
          }}
        />
        <FormField
          label="お問い合わせ内容"
          type="textarea"
          name="content"
          register={register}
          registerOptions={{ required: '入力必須です' }}
          errorMessage={errors.content?.message}
        />
      </div>
      <div className="max-w-[240px] mx-auto mt-5">
        <Button type="submit" isLoading={isLoading}>
          送信
        </Button>
      </div>
      <Toast
        title={toast?.title}
        text={toast?.text || ''}
        status={toast?.status as 'success' | 'error'}
        visible={toast !== null ? true : false}
        position="bottom-right"
      />
    </form>
  );
};
