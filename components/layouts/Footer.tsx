import React from 'react';
import { Form } from '../contact/Form';

export const Footer = () => {
  return (
    <footer className="bg-[#f1f2f3] py-8 px-6 pb-2 mt-32">
      <div className="max-w-sm mx-auto">
        <p className="text-center mb-4">＼ なんでもどうぞ ／</p>
        <Form />
      </div>
      <p className="text-center text-xs text-[#999] mt-16">© Komimemo 2023</p>
    </footer>
  );
};
