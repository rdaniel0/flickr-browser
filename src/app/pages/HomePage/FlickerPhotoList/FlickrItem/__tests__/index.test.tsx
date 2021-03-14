import * as React from 'react';
import { render } from '@testing-library/react';

import { FlickrItem } from '..';

describe('<FlickrItem  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <FlickrItem
        item={{
          title: 'photo',
          link: 'google.com',
          media: { m: '' },
          date_taken: '',
          tags: '',
          author: '',
        }}
      />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
