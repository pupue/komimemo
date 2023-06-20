'use client';
import { Stack, Button, Container } from '@chakra-ui/react';
import styles from './index.module.css';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';

export default function ContactForm() {
  const handleSubmit = () => {
    null;
  };

  return (
    <Container maxW="md">
      <form onSubmit={handleSubmit}>
        <Stack spacing={1}>
          <Input label="お名前" />
          <Input label="メールアドレス" type="email" />
          <Textarea label="メッセージ" />
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
