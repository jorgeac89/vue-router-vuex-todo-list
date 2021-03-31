import { createLocalVue, RouterLinkStub, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import New from 'new';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('New component', () => {
  it('renders correctly without text', () => {
    const store = new Vuex.Store({
      modules: {
        new: {
          namespaced: true,
          state: {
            todoText: ''
          },
          actions: {
            addTodo: jest.fn()
          }
        }
      }
    });
    expect(
      shallowMount(New, {
        store,
        localVue,
        stubs: {
          RouterLink: RouterLinkStub
        }
      })
    ).toMatchSnapshot();
  });

  it('renders correctly with text', () => {
    const store = new Vuex.Store({
      modules: {
        new: {
          namespaced: true,
          state: {
            todoText: 'Example todo'
          },
          actions: {
            addTodo: jest.fn()
          }
        }
      }
    });
    expect(
      shallowMount(New, {
        store,
        localVue,
        stubs: {
          RouterLink: RouterLinkStub
        }
      })
    ).toMatchSnapshot();
  });
});
