import Link from 'next/link';
import React from 'react';
import { AiOutlineHome, AiOutlineRight } from 'react-icons/ai';
import { Breadcrumbs } from './Breadcrumb.styled';

type Props = {
  links?: {
    label: string;
    url: string;
  }[];
};

export const Breadcrumb = ({ links }: Props) => {
  return (
    <Breadcrumbs>
      <Link href="/">
        <AiOutlineHome className="icon" />
      </Link>
      {links?.map((link) => (
        <React.Fragment key={link.label}>
          <AiOutlineRight />
          <Link href={link.url}>{link.label}</Link>
        </React.Fragment>
      ))}
    </Breadcrumbs>
  );
};
