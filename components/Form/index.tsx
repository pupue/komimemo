'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  Stack,
} from '@chakra-ui/react';
import styles from './index.module.css';

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <FormControl isRequired isInvalid={errors.name ? true : false}>
          <FormLabel className={styles.label} htmlFor="name">
            お名前
          </FormLabel>
          <Input
            id="name"
            {...register('name', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}
          />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email ? true : false}>
          <FormLabel className={styles.label} htmlFor="email">
            メールアドレス
          </FormLabel>
          <Input id="email" type="email" {...register('email')} />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={errors.message ? true : false}>
          <FormLabel className={styles.label} htmlFor="message">
            メッセージ
          </FormLabel>
          <Textarea id="message" {...register('message')} />
          <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
        </FormControl>
      </Stack>

      <Button
        className={styles.button}
        colorScheme="blue"
        display="flex"
        mt={6}
        mx="auto"
        isLoading={isSubmitting}
        type="submit"
      >
        送信
      </Button>
    </form>
  );
}
