import { createLocalVue, RouterLinkStub, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import List from 'list';
import { todos1To10 } from 'mocks/responses';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('List component', () => {
  it('renders correctly during fetching data', () => {
    const store = new Vuex.Store({
      modules: {
        list: {
          namespaced: true,
          state: {
            todosPerPage: 10,
            fetching:true,
            fetched: false,
            todos: [],
            pageCount: 0,
            currentPage: 0,
            error: ''
          },
          actions: {
            removeTodo: jest.fn(),
            fetchTodos: jest.fn(),
            changeToLastPage: jest.fn(),
          }
        }
      }
    });
    expect(shallowMount(List, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })).toMatchSnapshot();
  });

  it('renders correctly without elements to display', () => {
    const store = new Vuex.Store({
      modules: {
        list: {
          namespaced: true,
          state: {
            todosPerPage: 10,
            fetching:false,
            fetched: true,
            todos: [],
            pageCount: 0,
            currentPage: 0,
            error: ''
          },
          actions: {
            removeTodo: jest.fn(),
            fetchTodos: jest.fn(),
            changeToLastPage: jest.fn(),
          }
        }
      }
    });
    expect(shallowMount(List, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })).toMatchSnapshot();
  });

  it('renders correctly with elements to display', () => {
    const store = new Vuex.Store({
      modules: {
        list: {
          namespaced: true,
          state: {
            todosPerPage: 10,
            fetching:false,
            fetched: true,
            todos: todos1To10.response,
            pageCount: 1,
            currentPage: 0,
            error: ''
          },
          actions: {
            removeTodo: jest.fn(),
            fetchTodos: jest.fn(),
            changeToLastPage: jest.fn(),
          }
        }
      }
    });
    expect(shallowMount(List, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })).toMatchSnapshot();
  });

  it('renders correctly when an error occurs', () => {
    const store = new Vuex.Store({
      modules: {
        list: {
          namespaced: true,
          state: {
            todosPerPage: 10,
            fetching:false,
            fetched: true,
            todos: [],
            pageCount: 0,
            currentPage: 0,
            error: 'Error message.'
          },
          actions: {
            removeTodo: jest.fn(),
            fetchTodos: jest.fn(),
            changeToLastPage: jest.fn(),
          }
        }
      }
    });
    expect(shallowMount(List, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })).toMatchSnapshot();
  });
});
