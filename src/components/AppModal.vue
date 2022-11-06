<template>
    <div v-if="value" class="modal" @click="closeDialog()">
        <div class="modal-container" @click.stop="">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppModal',
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeDialog() {
            this.$emit('input', false)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0 0 0 / 20%);
    backdrop-filter: blur(5px);

    &-container {
        width: 100%;
        max-width: 480px;
        border-radius: 12px;
        background: $white;
        padding: 32px;
        box-shadow: 0px 8px 16px rgb(66 66 66 / 15%);
    }
}
</style>