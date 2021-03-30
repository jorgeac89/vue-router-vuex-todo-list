<template src="./view.html"></template>

<script>
  import { mapActions, mapMutations } from 'vuex';
  import mutationTypes from './mutation-types';
  import actionTypes from  './action-types';

  export default {
    name: 'NewComponent',
    computed: {
      todoText: {
        get() {
          return this.$store.state.new.todoText;
        },
        set(newTodoText) {
          this.onChangeTodoText(newTodoText);
        }
      }
    },
    methods: {
      ...mapMutations('new', {
        onChangeTodoText: mutationTypes.CHANGE_TODO_TEXT
      }),
      ...mapActions('new', {
        onAddTodo: actionTypes.ADD_TODO
      })
    }
  }
</script>
