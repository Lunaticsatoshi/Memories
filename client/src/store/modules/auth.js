import {AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, LOGOUT_USER, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from "../types";
import {setAuthorization, removeAuthorization} from "../api";
import { setToken, getToken, removeToken} from "../helpers";
import router from "../../router";
import axios from "axios";

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
            const {email, password} = user;
            let res = await axios.post('http://localhost:5000/api/v1/login', {email, password})
            if(res.data.success){
                const token = res.data.accessToken
                setToken(token);
                setAuthorization(token);
                commit(AUTH_SUCCESS, token)
            }
            return res;

        } catch (error) {
            commit(AUTH_ERROR, error)
        }
    },
    async logout({commit}) {
        removeToken();
        commit(LOGOUT_USER);
        removeAuthorization();
        router.push('/login');
    },

    async register({commit}, user){
        commit(REGISTER_REQUEST);
        try {
            const {userName, email, password } = user;
            let res = await axios.post('http://localhost:5000/api/v1/register', {userName, email, password})
            if(res.data.success){
                commit(REGISTER_SUCCESS);
                // router.push('/login');
            }
            return res;
        } catch (error) {
            commit(REGISTER_ERROR, error)
        }
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
        state.error = error.res.data.error
    },
    [REGISTER_REQUEST](state){
        state.error = null,
        state.state = 'Loading'
    },
    [REGISTER_SUCCESS](state){
        state.error = null,
        state.state = 'Success'
    },
    [REGISTER_ERROR](state, error){
        state.error = error.res.data.error
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
