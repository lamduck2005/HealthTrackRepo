<template>
  <div>
    <AppHeader @toggle-sidebar="sidebarVisible = !sidebarVisible" />

    <AppSidebar v-model:visible="sidebarVisible" />

    <main class="p-flex-grow-1">
      <RouterView />
    </main>

    <AppFooter />
  </div>

  <Toast />
  <ConfirmDialog />
</template>

<script setup>
import { ref } from 'vue'
import { useThemeStore } from '@/store/themeStore'

import AppHeader from '@/components/layout/AppHeader.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import Toast from 'primevue/toast'
import ConfirmDialog from 'primevue/confirmdialog'

useThemeStore()

const sidebarVisible = ref(false)
</script>

<style>
html {
  --font-family: 'Open Sans', sans-serif;
  font-size: 14px;
}
body {
  margin: 0;
  padding: 0;
  background-color: var(--surface-ground);
  color: var(--text-color);
  font-family: var(--font-family);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main.p-flex-grow-1 {
  flex: 1 1 auto;
  padding: 1rem;
  background-color: var(--surface-ground);
}
</style>