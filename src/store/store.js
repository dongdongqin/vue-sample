import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {todoLists:[]},
  getters: {
    todoCount(state){
      return state.todoLists.length;
    }},
  mutations: {
    //新増 TodoList item
    ONADDTODO(state,item){
      state.todoLists.push(item);
    },
    //删除 TodoList item
    ONDELTODO(state,index){
      state.todoLists.splice(index,1);
    }
    },
  actions: {
    onAddTodo(context,item){
  if(item.value!=""){
    context.commit("ONADDTODO",item);
  }
},
  onDelTodo({commit},index){
    //commit=context.commit
    commit("ONDELTODO",index);
  }},
  modules: {}
  })

export default store;
