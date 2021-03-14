import * as React from 'react';
import { render } from '@testing-library/react';

import { FlickrItem } from '..';


describe('<FlickrItem  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<FlickrItem />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
