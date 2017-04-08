import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'underscore';
import {EventEmitter} from 'events';
Vue.use(Vuex)

function sortList(a,b){
    return a.position_str > b.position_str;
}

// 这个可以写在modules中 import进来
const USER = {
    state:{
        
    },
    getters:{
        
    },
    mutations: {
        /**
         * 登录成功
         * @param {Object} state
         * @param {Object} user
         */
        SIGNIN(state, user) {
            state.weChatInfo = user;
            state.isLogin = true;
        }
    },
    actions: {
        SIGNIN({commit}, user) {
            commit('SIGNIN', user)
        }
    }
} 

var store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', 
    modules: {
        user:USER
    }    
})

module.exports =  _.extend({},store,EventEmitter.prototype,{
    addChangeListener(type,cbk){
        this.on(type,cbk)
    },
    
    removeChangeListener(type,cbk){
        this.removeListener(type,cbk);
    },

    emitEvent(type,data){
        this.emit(type,data);
    }
})