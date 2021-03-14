/**
 *
 * A
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  href: string;
  children: any;
}

export function A(props: Props) {
  return (
    <Link href={props.href} target="_blank">
      {props.children}
    </Link>
  );
}

const Link = styled.a``;
