<template>
  <Sidebar v-model:visible="visible" header="Menu">
    <PanelMenu :model="items" />
  </Sidebar>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const visible = defineModel('visible')
const $router = useRouter()

const items = ref([
    {
        label: 'Trang chủ',
        icon: 'pi pi-home',
        command: () => { $router.push('/'); visible.value = false; }
    },
    {
        label: 'Tập luyện',
        icon: 'pi pi-bolt',
        items: [
            { label: 'Ghi buổi tập', command: () => { $router.push('/workouts/log'); visible.value = false; } },
            { label: 'Lịch sử tập', command: () => { $router.push('/workouts'); visible.value = false; } }
        ]
    },
    {
        label: 'Dinh dưỡng',
        icon: 'pi pi-apple',
        command: () => { $router.push('/nutrition'); visible.value = false; }
    },
    {
        label: 'Hồ sơ',
        icon: 'pi pi-user',
        command: () => { $router.push('/profile'); visible.value = false; }
    }
])
</script>
