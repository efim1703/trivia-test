<template>
  <div class="select-container">
    <div class="select-title">
        {{ settingsForSelect.title }}:
    </div>

    <div class="select">
        <p 
            :class="[{ 'border-radius-bottom-none select-focus' : showOptions }, 'title']" 
            @click="clickSelect()"
        >
            <span >{{ settingsForSelect.optionIsActive.name }}  </span>
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264" stroke="#B4B4B4"/></svg>
        </p>

        <div class="options" v-if="showOptions">
            <p
                v-for="option in settingsForSelect.options"
                :key="option.id"
                @click="clickOption(option)"
            >
                {{ option.name }}
            </p>
        </div>
    </div>


  </div>
</template>

<script>
export default {
    name: 'CustomSelect',
    props: {
        settingsForSelect: {
            type: Object,
            required: true
        },
    },
    
    data() {
        return {
            showOptions: false,
        }
    },
    methods: {
        clickSelect() {
            this.showOptions = !this.showOptions
        },
        clickOption(option) {
            this.$emit('option-change',option.id);
            this.showOptions = false
        }
    } 
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.select-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;

    & .select-title {
        width: 35%;
    }

    & .select {
        position: relative;
        flex: 1 1 auto;
        color: $dark;
        font-size: 14px;
        cursor: pointer;

        & .title {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 6px;
            background: $grey-light;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 6px;
            border: 1px solid $grey;
            transition: .3s;

            &:hover,
            &.select-focus {
                border: 1px solid $dark;
            }
            
            & svg {
                margin-left: 6px;
            }
        }

        & .options {
            position: absolute;
            top: 36px;
            right: 0;
            left: 0;
            text-align: center;
            background: $grey-light;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 0px 0px 4px 4px;
            z-index: 999;

            & p {
                padding: 6px 0px;
            }
    
        }
        }
    
    
}

</style>