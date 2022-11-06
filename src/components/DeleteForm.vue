<template>
    <div>
        <div class="title-modal">
            <slot />
        </div>
        <div class="actions-modal">
            <custom-button @click="$emit('close-modal')">
                Отменить
            </custom-button>
            
            <custom-button @click="$emit('delete-item')" color="#dd0909">
                Удалить
            </custom-button>
        </div>
    </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue'

export default {
  name: 'DeleteForm',
  components: {
    CustomButton
  },
}
</script>

<style lang="scss" scoped>

.title-modal {
  text-align: center;
  font-size: 22px;
  margin-bottom: 24px;
}
.actions-modal {
  display: flex;
  gap: 20px;
  justify-content: center;
}
</style>