import { shallowMount } from '@vue/test-utils';
import BottomBar from 'common/bottom-bar';

describe('BottomBar component', () => {
  it('renders correctly', () => {
    expect(shallowMount(BottomBar)).toMatchSnapshot()
  });
});
