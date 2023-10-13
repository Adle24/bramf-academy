export const SET_IS_LOGGED = "SET_IS_LOGGED";
export const LOGOUT = "LOGOUT";

export const loginStore = {
	state: {
		isLogged: localStorage.isLogged !== undefined,
		userName: localStorage.userName === undefined ? "No name" : localStorage.userName,
		userInfo: localStorage.userInfo === undefined ? null : JSON.parse(localStorage.userInfo),
		token: localStorage.token === undefined ? null : localStorage.token
	},
	getters: {
		MY_USER_INFO: (state) => {
			return state.userInfo;
		}
	},
	mutations: {
		[SET_IS_LOGGED](state, { userName = "No name", userInfo = null, token = null }) {
			state.isLogged = true;
			localStorage.setItem("isLogged", "true");
			state.userName = userName;
			state.userInfo = userInfo;
			localStorage.setItem("userName", userName);
			localStorage.setItem("userInfo", JSON.stringify(userInfo));
			localStorage.setItem("token", token);

			state.token = token;
		},
		[LOGOUT](state) {
			state.isLogged = false;
			localStorage.removeItem("isLogged");
			state.userName = "No name";
			state.userInfo = null;
			localStorage.removeItem("userName");
			localStorage.removeItem("userInfo");
			localStorage.removeItem("token");

			state.token = null;
		}
	},
	actions: {
		[SET_IS_LOGGED]({ commit }, payload) {
			commit(SET_IS_LOGGED, payload);
		},
		[LOGOUT]({ commit }) {
			commit(LOGOUT);
		}
	}
};
