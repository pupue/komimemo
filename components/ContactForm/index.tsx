'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Stack, Button, Container } from '@chakra-ui/react';
import styles from './index.module.css';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Container maxW="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={1}>
          <input type="text" {...register('name')} />
          {/* <Input label="お名前" {...register('name')} /> */}
          <Input label="メールアドレス" type="email" {...register('email')} />
          <Textarea label="メッセージ" {...register('message')} />
        </Stack>
        <div className="flex justify-center mt-6">
          <Button type="submit" colorScheme="blue" className={styles.button}>
            送信
          </Button>
        </div>
      </form>
    </Container>
  );
}
