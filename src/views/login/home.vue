<template>
    <div class="w-full h-screen bg-blue-300 flex justify-center items-center">
        <div class="w-[70vh] h-[50vh] bg-white flex flex-col justify-center items-center gap-5 rounded-3xl">
            <div class="uppercase text-5xl font-extrabold italic">login</div>
            <input class="border rounded-3xl pl-3 h-10 w-80" type="text" name="account" id="account"
                placeholder="Account">
            <input class="border rounded-3xl pl-3 h-10 w-80" type="password" name="password" id="password"
                placeholder="Password">
            <div class="flex flex-row w-80 gap-4">
                <div class="flex flex-row gap-2">
                    <input class="" type="checkbox" name="" id="">
                    <p>Show Password</p>
                </div>
                <div class="flex flex-row gap-2">
                    <input class="" type="checkbox" name="" id="">
                    <p>Remember Login</p>
                </div>
            </div>
            <button class="uppercase font-bold rounded-2xl w-40 h-12 bg-blue-300 text-white"
                type="button">login</button>
            <div class="flex flex-col items-center justify-center">
                <p>Don't have an account? <a class="text-green-500" href="#">Sign up</a></p>
                <p>Forgot your password? <a class="text-green-500" href="#">Reset Password</a></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>