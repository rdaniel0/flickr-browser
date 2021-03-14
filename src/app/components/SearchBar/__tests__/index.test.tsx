import * as React from 'react';
import { render } from '@testing-library/react';

import { SearchBar } from '..';

describe('<SearchBar  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <SearchBar onChange={text => console.log(text)} initialValue="puppies" />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
