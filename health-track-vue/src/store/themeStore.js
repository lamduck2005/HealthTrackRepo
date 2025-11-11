import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {

    // Lấy từ localStorage hoặc OS preference
    const getInitialTheme = () => {
        try {
            const saved = localStorage.getItem('healthtrack-theme')
            if (saved !== null) {
                return saved === 'dark'
            }
        } catch (e) {
            // localStorage không khả dụng
        }
        // Fallback to OS preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    const isDarkMode = ref(getInitialTheme())

    function toggleDarkMode() {
        isDarkMode.value = !isDarkMode.value
    }

    function updateHtmlClass() {
        const htmlEl = document.documentElement
        if (isDarkMode.value) {
            htmlEl.classList.add('p-dark')
        } else {
            htmlEl.classList.remove('p-dark')
        }
    }

    // Auto-persist khi state thay đổi
    watch(isDarkMode, (newValue) => {
        updateHtmlClass()
        try {
            localStorage.setItem('healthtrack-theme', newValue ? 'dark' : 'light')
        } catch (e) {
            // localStorage không khả dụng
        }
    }, { immediate: true })

    return { isDarkMode, toggleDarkMode }
})
