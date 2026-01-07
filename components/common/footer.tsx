import { footerConfig } from '@/config/footer';
import React from 'react';

import Wrapper from './wrapper';

export default function Footer() {
  return (
    <Wrapper className="py-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-neutral-500 text-center text-sm">
          {footerConfig.text} <b>{footerConfig.developer}</b> <br /> &copy;{' '}
          {new Date().getFullYear()}. {footerConfig.copyright}
        </p>
      </div>
    </Wrapper>
  );
}
