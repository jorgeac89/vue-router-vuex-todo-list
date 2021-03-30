import { shallowMount } from '@vue/test-utils';
import Error404 from 'error-404';

describe('Error404 component', () => {
  it('renders correctly', () => {
    expect(shallowMount(Error404)).toMatchSnapshot()
  });
});
