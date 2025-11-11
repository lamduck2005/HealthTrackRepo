<template>
  <div class="p-d-flex p-ai-center p-jc-center" style="height: 100vh;">
    <div class="card p-4" style="width: 400px;">
      <h2 class="p-text-center p-mb-4">Đăng nhập</h2>
      <form @submit.prevent="handleLogin">
        <div class="p-field p-mb-3">
          <label for="username" class="p-d-block p-mb-2">Tên đăng nhập</label>
          <InputText id="username" class="p-w-full" v-model="username" />
        </div>
        <div class="p-field p-mb-3">
          <label for="password">Mật khẩu</label>
          <Password id="password" v-model="password" class="p-w-full" :feedback="false" toggleMask />
        </div>
        <Button label="Đăng nhập" type="submit" class="p-w-full" />
      </form>
      <div class="p-text-center p-mt-3">
        Chưa có tài khoản? <RouterLink to="/register">Đăng ký ngay</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'primevue';
import { ref } from 'vue';

const toast = useToast()

const username = ref('')
const password = ref('');

const handleLogin = () => {
  console.log("Đang đăng nhập:", username.value, password.value);
  toast.add({ severity: 'success', summary: 'Thành công', detail: 'Đăng nhập thành công', life: 3000 });
};
</script>
