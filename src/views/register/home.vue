<template>
    <div class="w-full h-screen bg-blue-300 flex justify-center items-center">
        <div class="w-[70vh] h-[60vh] bg-white flex flex-col justify-center items-center gap-5 rounded-3xl">
            <div class="uppercase text-5xl font-extrabold italic">register</div>
            <input v-model="account.account" class="border rounded-3xl pl-3 h-10 w-80" type="text" name="account"
                id="account" placeholder="Account" />
            <input v-model="account.password" class="border rounded-3xl pl-3 h-10 w-80" type="text" name="password"
                id="password" placeholder="Password" />
            <input v-model="account.comfirmPassword" class="border rounded-3xl pl-3 h-10 w-80" type="text"
                name="password" id="password" placeholder="Confirm Password" />
            <input v-model="account.fullName" class="border rounded-3xl pl-3 h-10 w-80" type="text" name="full-name"
                id="full-name" placeholder="Full Name" />
            <div class="w-80">
                <input class="m-2" type="checkbox" name="" id="" />Show Password
            </div>
            <button @click="handleRegister" class="uppercase font-bold rounded-2xl w-40 h-12 bg-blue-300 text-white"
                type="button">
                register
            </button>
            <div class="flex flex-col items-center justify-center">
                <p>
                    You have an account?
                    <router-link class="text-green-500" to="/login">Sign in</router-link>
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
    methods: {
        handleRegister() {
            if (this.account.password === this.account.comfirmPassword) {
                api
                    .post("register", this.account)
                    .then((res) => {
                        toast.toastrSuccess("Register success");
                        this.$router.push("/login");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            else {
                toast.toastrError("Password not match");
            }

        },
    }
};
</script>
<style></style>
