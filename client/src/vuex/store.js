import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import default from 'vuex';

const http =  axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
  detail: []
}

const mutations={
  resultDetail(state,payload){
    state.checkout = payload
  }
}
const actions={
  getDetail({commit}, dataDetail){
    http.get('/detail',dataDetail)
    .then(({data})=>{
      commit('resultDetail',data)
    })
    .catch(err=>{
      res.send(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})
export default store 