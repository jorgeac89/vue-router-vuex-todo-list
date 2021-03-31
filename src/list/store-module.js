import { fetchTodosEndPoint } from 'config';
import mutationTypes from './mutation-types';
import actionTypes from './action-types';

const initialState = {
  fetching: false,
  fetched: false,
  todos: [],
  todosPerPage: 10,
  currentPage: 0,
  error: ''
};

const module = {
  namespaced: true,
  state: { ...initialState },
  mutations: {
    [mutationTypes.FETCH_TODOS_BEGINS]: state => {
      state.fetching = true;
      state.fetched = false;
    },
    [mutationTypes.FETCH_TODOS_SUCCESS]: (state, todos) => {
      state.fetching = false;
      state.fetched = true;
      state.todos = todos;
    },
    [mutationTypes.FETCH_TODOS_ERROR]: (state, error) => {
      state.fetching = false;
      state.fetched = false;
      state.error = error;
    },
    [mutationTypes.TOGGLE_TODO]: (state, todo) => {
      todo.completed = !todo.completed;
    },
    [mutationTypes.CHANGE_PAGE]: (state, pageNumber) => {
      state.currentPage = pageNumber;
    },
    [mutationTypes.ADD_TODO]: (state, newTodo) => {
      state.todos.push(newTodo);
    },
    [mutationTypes.REM_TODO]: (state, todoIndex) => {
      state.todos.splice(todoIndex, 1);
    }
  },
  actions: {
    [actionTypes.REMOVE_TODO]: (context, todoId) => {
      const todoIndex = context.state.todos.findIndex(
        todo => todo.id === todoId
      );
      context.commit(mutationTypes.REM_TODO, todoIndex);
      const lastPage = Math.floor(
        (context.state.todos.length - 1) / context.state.todosPerPage
      );
      if (lastPage < context.state.currentPage) {
        context.dispatch(actionTypes.CHANGE_TO_LAST_PAGE);
      }
    },
    [actionTypes.FETCH_TODOS]: context =>
      new Promise((resolve, reject) => {
        context.commit(mutationTypes.FETCH_TODOS_BEGINS);
        fetch(fetchTodosEndPoint)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(new Error(response.statusText));
          })
          .then(response => {
            const todos = response.map(todo => ({
              id: todo.id,
              title: todo.title,
              completed: todo.completed
            }));
            context.commit(mutationTypes.FETCH_TODOS_SUCCESS, todos);
            resolve(todos);
          })
          .catch(error => {
            context.commit(
              mutationTypes.FETCH_TODOS_ERROR,
              `Request failed: ${error.message}`
            );
            reject(error);
          });
      }),
    [actionTypes.CHANGE_TO_LAST_PAGE]: context => {
      const lastPage = Math.floor(
        (context.state.todos.length - 1) / context.state.todosPerPage
      );
      context.commit(mutationTypes.CHANGE_PAGE, lastPage);
    }
  },
  getters: {}
};

export default module;
