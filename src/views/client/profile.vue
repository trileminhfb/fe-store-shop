<template>
    <div class="w-full h-fit flex justify-center mt-32 p-5">
        <div class="w-[80vw] h-full flex justify-center items-start flex-row border border-black rounded-3xl">
            <div class="flex-1 h-full">
                <div class="h-full w-full p-20 flex flex-col gap-5 items-center">
                    <div class="bg-white w-80 h-80 rounded-full overflow-hidden border-8 border-blue-500">
                        <img class="h-full object-cover" :src="itemPath" alt="" />
                    </div>
                    <div class="w-full font-semibold flex flex-col items-center text-2xl">
                        <p class="text-4xl font-extrabold">{{ user.fullName }}</p>
                        <p>{{ roleName }}</p>
                    </div>
                </div>
            </div>
            <div class="flex-1 h-full">
                <div class="h-full w-full p-20 flex flex-col gap-5 items-start font-bold text-2xl">
                    <div class="flex flex-row w-full">
                        <p class="flex flex-1">Account</p>
                        <input class="flex flex-1 border border-black rounded-2xl pl-5" type="text"
                            :value="user.account" disabled />
                    </div>
                    <div class="flex flex-row w-full">
                        <p class="flex flex-1">Full Name</p>
                        <input class="flex flex-1 border border-black rounded-2xl pl-5" type="text"
                            v-model="user.fullName" />
                    </div>
                    <div class="flex flex-row w-full">
                        <p class="flex flex-1">BirthDay</p>
                        <input class="flex flex-1 border border-black rounded-2xl pl-5" type="date"
                            v-model="user.birth" />
                    </div>
                    <div class="flex flex-row w-full">
                        <p class="flex flex-1">Email</p>
                        <input class="flex flex-1 border border-black rounded-2xl pl-5" type="text"
                            v-model="user.email" />
                    </div>
                    <div class="flex flex-row w-full">
                        <p class="flex flex-1">Phone Number</p>
                        <input class="flex flex-1 border border-black rounded-2xl pl-5" type="text"
                            v-model="user.phoneNumber" />
                    </div>
                    <div class="flex flex-col w-full gap-5">
                        <p>Address</p>
                        <input class="border border-black rounded-2xl pl-5 h-20 font-normal text-base" type="text"
                            v-model="user.address" />
                    </div>
                    <button class="bg-orange-500 h-10 w-20 rounded-full" type="button" @click="saveProfile">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from "@/services/api";
import item from "@/components/images/item/item.png";

export default {
    data() {
        return {
            itemPath: item,
            user: {}, // Lưu dữ liệu người dùng
            roleName: "", // Lưu vai trò người dùng
        };
    },
    methods: {
        // Gọi API lấy thông tin người dùng
        async fetchUserData() {
            try {
                const response = await api.get("/user/1"); // Thay 1 bằng ID người dùng từ hệ thống
                this.user = response.data.data;
                this.roleName = response.data.data.role?.nameRole || "Unknown Role";
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        },
        // Lưu thông tin người dùng
        async saveProfile() {
            try {
                const response = await api.put(`/user/${this.user.id}`, {
                    fullName: this.user.fullName,
                    birth: this.user.birth,
                    email: this.user.email,
                    phoneNumber: this.user.phoneNumber,
                    address: this.user.address,
                });
                alert(response.data.message || "Profile updated successfully");
            } catch (error) {
                console.error("Error updating profile:", error);
                alert("Failed to save profile.");
            }
        },
    },
    mounted() {
        this.fetchUserData(); // Lấy dữ liệu khi component được mount
    },
};
</script>

<style>
/* Thêm styles nếu cần */
</style>
