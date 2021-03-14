import * as React from 'react';
import { render } from '@testing-library/react';

import { LoadingWrapper } from '..';

describe('<LoadingWrapper  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<LoadingWrapper isLoading={false} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
