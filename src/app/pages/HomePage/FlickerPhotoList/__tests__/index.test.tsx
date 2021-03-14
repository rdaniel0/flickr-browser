import * as React from 'react';
import { render } from '@testing-library/react';

import { FlickerPhotoList } from '..';


describe('<FlickerPhotoList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<FlickerPhotoList />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
