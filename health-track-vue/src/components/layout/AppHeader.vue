<template>
  <header class="app-header">
    <div class="header-content">
      <div class="header-left">
        <Button
          icon="pi pi-bars"
          text
          rounded
          class="menu-toggle"
          @click="emit('toggle-sidebar')"
        />
        <RouterLink to="/" class="logo-link">
          <img alt="logo" src="/favicon.ico" class="logo-img" />
          <span class="logo-text">HealthTrack</span>
        </RouterLink>
      </div>

      <div class="header-center">
        <Menubar :model="menuItems" class="custom-menubar">
          <template #item="{ item, props }">
            <RouterLink v-if="item.route" :to="item.route" custom v-slot="{ navigate, href }">
              <a :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon"></span>
                <span>{{ item.label }}</span>
              </a>
            </RouterLink>
          </template>
        </Menubar>
      </div>

      <div class="header-right">
        <Button
          :icon="themeStore.isDarkMode ? 'pi pi-sun' : 'pi pi-moon'"
          text
          rounded
          @click="themeStore.toggleDarkMode()"
          v-tooltip.bottom="themeStore.isDarkMode ? 'Chế độ sáng' : 'Chế độ tối'"
        />
        <Avatar icon="pi pi-user" shape="circle" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useThemeStore } from '@/store/themeStore'

const themeStore = useThemeStore()
const emit = defineEmits(['toggle-sidebar'])

const menuItems = ref([
  {
    label: 'Trang chủ',
    icon: 'pi pi-home',
    route: '/'
  },
  {
    label: 'Tập luyện',
    icon: 'pi pi-bolt',
    items: [
      {
        label: 'Ghi buổi tập',
        icon: 'pi pi-plus',
        route: '/workouts/log'
      },
      {
        label: 'Lịch sử',
        icon: 'pi pi-history',
        route: '/workouts'
      }
    ]
  },
  {
    label: 'Dinh dưỡng',
    icon: 'pi pi-apple',
    route: '/nutrition'
  },
  {
    label: 'Hồ sơ',
    icon: 'pi pi-user',
    route: '/profile'
  }
])
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--surface-overlay);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--surface-border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.menu-toggle {
  display: none;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--text-color);
}

.logo-img {
  width: 32px;
  height: 32px;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  white-space: nowrap;
}

.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: 0 2rem;
}

.custom-menubar {
  background: transparent;
  border: none;
  padding: 0;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 960px) {
  .menu-toggle {
    display: inline-flex;
  }

  .header-center {
    display: none;
  }

  .logo-text {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  .header-content {
    padding: 0.5rem 1rem;
  }

  .header-left {
    gap: 0.5rem;
  }
}
</style>
