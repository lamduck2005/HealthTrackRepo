<template>
  <div class="p-m-4">
    <h1>Dashboard (Trang chủ)</h1>
    <p>Đây là trang chính sau khi đăng nhập.</p>

    <div class="p-d-flex p-gap-2">
      <Button label="Ghi Workout" icon="pi pi-bolt" @click="$router.push('/workouts/log')" />
      <Button label="Ghi Bữa ăn" icon="pi pi-apple" @click="$router.push('/nutrition')" severity="success" />
    </div>

    <div class="card p-4 mt-4">
      <h2 class="text-xl mb-3">Kiểm tra Xác nhận</h2>
      <div class="p-d-flex p-gap-2">
        <Button
          label="Xóa (Modal)"
          icon="pi pi-trash"
          severity="danger"
          @click="confirmDeleteGlobal"
        />
        <ConfirmPopup />
        <Button
          label="Xóa (Popup)"
          icon="pi pi-trash"
          severity="warning"
          @click="confirmDeleteLocal($event)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast'
import { useConfirm } from 'primevue/useconfirm'

const toast = useToast()
const confirm = useConfirm()

const confirmDeleteGlobal = () => {
    confirm.require({
        message: 'Bạn có chắc chắn muốn xóa không? (Dialog Toàn cục)',
        header: 'Xác nhận Xóa',
        icon: 'pi pi-exclamation-triangle',
        severity: 'danger',
        acceptLabel: 'Đúng, Xóa đi!',
        rejectLabel: 'Hủy bỏ',
        accept: () => {
            toast.add({ severity: 'success', summary: 'Đã xóa', life: 3000 })
        },
        reject: () => {
            toast.add({ severity: 'info', summary: 'Đã hủy', life: 3000 })
        }
    })
}

const confirmDeleteLocal = (event) => {
    confirm.require({
        target: event.currentTarget,
        message: 'Xóa mục này?',
        icon: 'pi pi-info-circle',
        acceptLabel: 'Xóa',
        rejectLabel: 'Hủy',
        accept: () => {
            toast.add({ severity: 'success', summary: 'Đã xóa (Local)', life: 3000 })
        },
        reject: () => {
        }
    })
}
</script>
