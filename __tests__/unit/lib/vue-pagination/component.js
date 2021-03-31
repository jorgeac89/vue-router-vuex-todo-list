import { shallowMount } from '@vue/test-utils';
import VuePagination from 'lib/vue-pagination';

const labels = {
  previousLabel: 'Previous',
  nextLabel: 'Next',
  breakLabel: '...'
};

const cssClasses = {
  containerClass: 'container',
  pageClass: 'page',
  pageLinkClass: 'page-link',
  previousClass: 'previous',
  previousLinkClass: 'previous-link',
  nextClass: 'next',
  nextLinkClass: 'next-link',
  breakClass: 'break',
  breakLinkClass: 'break-link',
  activeClass: 'active',
  activeLinkClass: 'active-link',
  disabledClass: 'disabled'
};

describe('VuePagination component', () => {
  it('renders correctly when the number of pages is 0', () => {
    expect(
      shallowMount(VuePagination, {
        propsData: {
          ...labels,
          initialPage: 0,
          forcePage: 0,
          pageCount: 0,
          marginPagesDisplayed: 1,
          pageRangeDisplayed: 1,
          onPageChange: jest.fn(),
          ...cssClasses
        }
      })
    ).toMatchSnapshot();
  });

  it('renders correctly when there are not enough pages to break the list and the first page is the active one', () => {
    expect(
      shallowMount(VuePagination, {
        propsData: {
          ...labels,
          initialPage: 0,
          forcePage: 0,
          pageCount: 2,
          marginPagesDisplayed: 1,
          pageRangeDisplayed: 1,
          onPageChange: jest.fn(),
          ...cssClasses
        }
      })
    ).toMatchSnapshot();
  });

  it('renders correctly when there are not enough pages to break the list and the last page is the active one', () => {
    expect(
      shallowMount(VuePagination, {
        propsData: {
          ...labels,
          initialPage: 1,
          forcePage: 1,
          pageCount: 2,
          marginPagesDisplayed: 1,
          pageRangeDisplayed: 1,
          onPageChange: jest.fn(),
          ...cssClasses
        }
      })
    ).toMatchSnapshot();
  });

  it('renders correctly when the list should be broken on the right side', () => {
    expect(
      shallowMount(VuePagination, {
        propsData: {
          ...labels,
          initialPage: 0,
          forcePage: 0,
          pageCount: 3,
          marginPagesDisplayed: 1,
          pageRangeDisplayed: 1,
          onPageChange: jest.fn(),
          ...cssClasses
        }
      })
    ).toMatchSnapshot();
  });

  it('renders correctly when the list should be broken on the left side', () => {
    expect(
      shallowMount(VuePagination, {
        propsData: {
          ...labels,
          initialPage: 2,
          forcePage: 2,
          pageCount: 3,
          marginPagesDisplayed: 1,
          pageRangeDisplayed: 1,
          onPageChange: jest.fn(),
          ...cssClasses
        }
      })
    ).toMatchSnapshot();
  });

  it('renders correctly when the list should be broken on both sides', () => {
    expect(
      shallowMount(VuePagination, {
        propsData: {
          ...labels,
          initialPage: 2,
          forcePage: 2,
          pageCount: 5,
          marginPagesDisplayed: 1,
          pageRangeDisplayed: 1,
          onPageChange: jest.fn(),
          ...cssClasses
        }
      })
    ).toMatchSnapshot();
  });
});
