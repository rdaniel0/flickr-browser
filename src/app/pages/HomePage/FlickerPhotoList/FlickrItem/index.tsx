/**
 *
 * FlickrItem
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';

import { Photo } from 'services/FlickrApi/Models';
import { A } from 'app/components/A';
import { FadeInAndUp } from 'app/components/FadeInAndUp';

interface Props {
  item: Photo;
}

export function FlickrItem(props: Props) {
  const { title, link, media, author, date_taken, tags } = props.item;

  // Transform the author text, since it comes in the format 'nobody@flickr.com("author")'
  const authorShort = author.substring(
    author.lastIndexOf('("') + 2,
    author.lastIndexOf('")'),
  );

  const formattedDate = moment(date_taken).format('ddd DD MMM YYYY');

  return (
    <FadeInAndUp>
      <Wrapper>
        <Header>
          <LabelWrapper className="title">
            <Label bold>{title}</Label>
          </LabelWrapper>
          <Label>
            by{' '}
            <A
              href={`https://www.flickr.com/search/people/?username=${authorShort}`}
            >
              {authorShort}
            </A>
          </Label>
        </Header>
        <ImageBox>
          <A href={link}>
            <Img alt={title} src={media.m} />
            <OverlayWrapper>
              <Label>To full image</Label>
            </OverlayWrapper>
          </A>
        </ImageBox>
        <Footer>
          <LabelWrapper>
            <Label>Taken: {formattedDate}</Label>
          </LabelWrapper>
          <LabelWrapper>
            <Label>Tags: {tags}</Label>
          </LabelWrapper>
        </Footer>
      </Wrapper>
    </FadeInAndUp>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 30rem;
  min-width: 15rem;
  margin: 5px;
`;

const Header = styled.div`
  background: white;
  border-radius: 5px 5px 0 0;
  padding: 5px;
`;

const Footer = styled.div`
  background: white;
  border-radius: 0 0 5px 5px;
  padding: 5px;
`;

const Img = styled.img`
  min-width: 100%;
  object-fit: cover;
`;

const LabelWrapper = styled.div`
  display: flex;
`;

const OverlayWrapper = styled.div`
  position: absolute;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;

  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0px 5px;
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.8));

  visibility: 'hidden';
  opacity: 0;
  transition: visibility 0.35s ease-in-out, opacity 0.35s ease-in-out;
`;

const ImageBox = styled.div`
  position: relative;
  &:hover ${OverlayWrapper} {
    opacity: 1;
    visibility: 'visible';
  }
`;

const Label = styled.label<{ bold?: boolean }>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-weight: ${(props: { bold?: boolean }) => props.bold && 'bold'};
`;
