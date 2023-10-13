<template>
	<div class="d-flex justify-content-center align-items-center vh-100 login-background">
		<div class="container__login__wrapper shadow-lg">
			<div class="mb-5 text-center">
				<img src="/images/logo2.png" alt="logo" class="logo" />
			</div>

			<div class="mb-2 text-center">
				<span class="title">Войти в аккаунт</span>
			</div>

			<div class="mb-5 text-center">
				<span class="about"> Укажите свой логин и пароль, который вы вводили при регистрации </span>
			</div>

			<form :class="{ wrong: error }" @submit="onSubmit" @reset="onReset">
				<div class="mb-4 align-items-center custom-form">
					<div for="input_login" class="form-label">login</div>
					<div class="form-icon align-items-center">
						<iconPerson />
					</div>
					<input class="form-control" placeholder="Укажите свой логин" type="login" id="input_login" v-model="form.login" :disabled="isLoading" @input="clearError" required />
				</div>
				<div class="align-items-center custom-form">
					<div class="form-label">password</div>
					<div class="form-icon align-items-center">
						<iconLocker />
					</div>
					<input class="form-control" placeholder="Укажите свой пароль" type="password" id="input_password" v-model="form.password" :disabled="isLoading" @input="clearError" required />
				</div>

				<div v-if="error" class="wrong-login-password">Неправильно введен логин или пароль</div>

				<div class="mt-3 mb-5 d-flex justify-content-center align-items-center">
					<span class="save_login">Оставаться залогиненым</span>
					<div class="ms-3">
						<input type="checkbox" class="form-check-input" id="checkbox" v-model="form.rememberMe" :disabled="isLoading" />
					</div>
				</div>

				<div class="mb-4 text-center">
					<a href="#" class="forget_password"> Did you forget your password? </a>
				</div>

				<div class="text-center">
					<b-button v-if="isLoading" class="btn-login" disabled>
						<b-spinner small class="mr-1" />
					</b-button>
					<b-button v-else type="submit" class="btn-login"> АВТОРИЗОВАТЬСЯ </b-button>
				</div>
			</form>
		</div>
	</div>
</template>

<style src="./assets/Login.scss" lang="scss" scoped />

<script>
	import axios from "axios";
	import { SET_IS_LOGGED } from "./_loginStore.js";
	import { setAuthorization } from "../../helpers/general";

	import iconPerson from "../icons/iconPerson.vue";
	import iconLocker from "../icons/iconLocker.vue";

	export default {
		name: "Login",
		data() {
			return {
				form: {
					login: "",
					password: "",
					rememberMe: false
				},
				isLoading: false,
				error: null
			};
		},
		components: {
			iconPerson,
			iconLocker
		},
		computed: {},
		watch: {},
		methods: {
			async onSubmit(evt) {
				evt.preventDefault();
				this.isLoading = true;
				axios
					.post("/api/login", {
						login: this.form.login,
						password: this.form.password
					})
					.then((response) => {
						this.$store.dispatch(SET_IS_LOGGED, {
							userName: response.data.user.username,
							userInfo: response.data.user,
							token: response.data.access_token
						});

						setAuthorization(response.data.access_token);
						this.$router.push({ path: "/products" });
					})
					.catch((error) => {
						this.error = error.response.data.error;
					})
					.finally(() => (this.isLoading = false));
			},
			onReset(evt) {
				evt.preventDefault();
				this.form = {
					phone: "",
					password: "",
					rememberMe: false
				};
			},
			clearError() {
				this.error = null;
			}
		}
	};
</script>
