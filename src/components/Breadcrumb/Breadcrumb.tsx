import Link from 'next/link';
import React from 'react';
import { AiOutlineHome, AiOutlineRight } from 'react-icons/ai';
import { Breadcrumbs } from './Breadcrumb.styled';
import { ILink } from '@/types/link';

type Props = {
  links?: ILink[];
};

export const Breadcrumb = ({ links }: Props) => {
  return (
    <Breadcrumbs>
      <Link
        href="/"
        aria-label="Home"
      >
        <AiOutlineHome className="icon" />
      </Link>
      {links?.map((link) => (
        <React.Fragment key={link.url}>
          <AiOutlineRight />
          <Link
            href={link.url}
            aria-label={link.label}
          >
            {link.label}
          </Link>
        </React.Fragment>
      ))}
    </Breadcrumbs>
  );
};
