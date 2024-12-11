<template>
    <div class="w-full h-screen bg-blue-300 flex justify-center items-center">
        <div class="w-[70vh] h-[50vh] bg-white flex flex-col justify-center items-center gap-5 rounded-3xl">
            <div class="uppercase text-5xl font-extrabold italic">login</div>
            <input class="border rounded-3xl pl-3 h-10 w-80" type="text" name="account" v-model="account.account"
                id="account" placeholder="Account" />
            <input class="border rounded-3xl pl-3 h-10 w-80" type="password" name="password" id="password"
                v-model="account.password" placeholder="Password" />
            <div class="flex flex-row w-80 gap-4">
                <div class="flex flex-row gap-2">
                    <input class="" type="checkbox" name="" id="" />
                    <p>Show Password</p>
                </div>
                <div class="flex flex-row gap-2">
                    <input class="" type="checkbox" name="" id="" />
                    <p>Remember Login</p>
                </div>
            </div>
            <button class="uppercase font-bold rounded-2xl w-40 h-12 bg-blue-300 text-white" type="button"
                @click="handleLogin">
                login
            </button>
            <div class="flex flex-col items-center justify-center">
                <p>
                    Don't have an account?
                    <router-link class="text-green-500" to="/register">Sign up</router-link>
                </p>
                <p>
                    Forgot your password?
                    <a class="text-green-500" href="#">Reset Password</a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import api from "../../services/api";
import toast from "../../services/toast";
export default {
    data() {
        return {
            account: {},
        };
    },
    mounted() { },
    methods: {
        handleLogin() {
            api
                .post("login", this.account)
                .then((res) => {
                    if (res.status === 200) {
                        localStorage.setItem("token", res.data.token);
                        console.log('res.data: ', res.data);
                        this.$emitter.emit("login");
                        if (this.$route.query.redirect) {
                            this.$router.push(this.$route.query.redirect);
                        }
                        this.$router.push("/");
                    }
                })
                .catch((err) => {
                    console.log(err);
                    toast.toastrError(err.response.data.message);
                });
        },
    },
};
</script>
<style></style>
