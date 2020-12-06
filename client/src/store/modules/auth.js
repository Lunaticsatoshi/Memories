import {AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, LOGOUT_USER } from "../types";
import {api, setAuthorization, removeAuthorization} from "../api";
import {setToken, getToken, removeToken} from "../helpers";
import router from "../../router";

const state = {
    token: getToken(),
    status: '',
    error: null
}
const getters = {
    isLoggedIn: state => !!state.token,
    status: state => state.status,
    error: state => state.error
}
const actions = {
    async login({commit}, user){
        commit(AUTH_REQUEST);
        try {
            let res = api.post("/login", user)
            if(res.data.success){
                const token = res.data.accessToken
                setToken(token);
                setAuthorization(token);
                commit(AUTH_SUCCESS, token)
            }

        } catch (error) {
            commit(AUTH_ERROR, error)
        }
    },
    async logout({commit}) {
        removeToken();
        commit(LOGOUT_USER);
        removeAuthorization();
        router.push('/login');
    }
}
const mutations = {
    [AUTH_REQUEST](state){
        state.error = null,
        state.status = 'Loading'
    },
    [AUTH_SUCCESS](state,token){
        state.token = token,
        state.error = null,
        state.status = 'Success'
    },
    [AUTH_ERROR](state, error){
        state.error = error.response.data.error
    },
    [LOGOUT_USER](state){
        state.error = null
        state.status = ''
        state.token = ''
    }
}
export default{
    state,
    getters,
    actions,
    mutations
}
