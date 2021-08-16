import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//store-file: goods - mas for results of search

export default new Vuex.Store({
    state: {
        goods: []
    },
    mutations: {
        updateState(state, props) {
            state.goods = props;
        }
    },
    actions: {
        updateTitle({commit}, props){
            commit('updateState', props);
        }
    },
  modules: {},
});
