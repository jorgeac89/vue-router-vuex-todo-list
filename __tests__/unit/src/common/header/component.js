import { shallowMount } from '@vue/test-utils';
import Header from 'common/header';

describe('Header component', () => {
  it('renders correctly', () => {
    expect(shallowMount(Header)).toMatchSnapshot()
  });
});
