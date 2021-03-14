import * as React from 'react';
import { render } from '@testing-library/react';

import { A } from '..';


describe('<A  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<A />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
