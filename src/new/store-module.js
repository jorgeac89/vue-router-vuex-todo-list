import router from 'src/router';
import listMutationTypes from 'list/mutation-types';
import listActionTypes from 'list/action-types';
import mutationTypes from './mutation-types';
import actionTypes from './action-types';

const initialState = {
  todoText: ''
};

const module = {
  namespaced: true,
  state: { ...initialState },
  mutations: {
    [mutationTypes.CHANGE_TODO_TEXT]: (state, newTodoText) => {
      state.todoText = newTodoText;
    }
  },
  actions: {
    [actionTypes.ADD_TODO]: context => {
      const newTodo = {
        id: new Date().getTime(),
        title: context.state.todoText,
        completed: false
      };
      if (!context.rootState.list.fetching && !context.rootState.list.fetched) {
        context
          .dispatch(`list/${listActionTypes.FETCH_TODOS}`, null, { root: true })
          .then(() => {
            context.commit(`list/${listMutationTypes.ADD_TODO}`, newTodo, {
              root: true
            });
            context.dispatch(
              `list/${listActionTypes.CHANGE_TO_LAST_PAGE}`,
              null,
              { root: true }
            );
          });
      } else {
        context.commit(`list/${listMutationTypes.ADD_TODO}`, newTodo, {
          root: true
        });
        context.dispatch(`list/${listActionTypes.CHANGE_TO_LAST_PAGE}`, null, {
          root: true
        });
      }
      context.commit(mutationTypes.CHANGE_TODO_TEXT, initialState.todoText);
      router.push('/');
    }
  },
  getters: {}
};

export default module;
