<template>
    <div>
        <div class="title-modal">
            <slot name="title"></slot>
        </div>
        <div class="inputs-modal">
          <slot name="inputs" ></slot>
        </div>
        <div class="actions-modal">
            <custom-button @click="$emit('close-modal')">
                Отменить
            </custom-button>
            
            <custom-button @click="$emit('save-item')" color="#11d544">
                Сохранить
            </custom-button>
        </div>
    </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue'

export default {
  name: 'EditForm',
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
  margin-top: 24px;
}
</style>