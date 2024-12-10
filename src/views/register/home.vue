<template>
    <div class="w-full h-screen bg-blue-300 flex justify-center items-center">
        <div class="w-[70vh] h-[60vh] bg-white flex flex-col justify-center items-center gap-5 rounded-3xl">
            <div class="uppercase text-5xl font-extrabold italic">register</div>
            <input class="border rounded-3xl pl-3 h-10 w-80" type="text" name="account" id="account"
                placeholder="Account">
            <input class="border rounded-3xl pl-3 h-10 w-80" type="text" name="password" id="password"
                placeholder="Password">
            <input class="border rounded-3xl pl-3 h-10 w-80" type="text" name="password" id="password"
                placeholder="Confirm Password">
            <input class="border rounded-3xl pl-3 h-10 w-80" type="text" name="full-name" id="full-name"
                placeholder="Full Name">
            <div class="w-80">
                <input class="m-2" type="checkbox" name="" id="">Show Password
            </div>
            <button class="uppercase font-bold rounded-2xl w-40 h-12 bg-blue-300 text-white"
                type="button">register</button>
            <div class="flex flex-col items-center justify-center">
                <p>You have an account? <a class="text-green-500" href="#">Sign in</a></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>