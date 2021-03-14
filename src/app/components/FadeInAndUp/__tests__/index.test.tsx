import * as React from 'react';
import { render } from '@testing-library/react';

import { FadeInAndUp } from '..';


describe('<FadeInAndUp  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<FadeInAndUp />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
