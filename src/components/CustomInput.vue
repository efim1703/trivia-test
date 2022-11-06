<template>
  <div class="input-container">
    <div class="title">
        {{ settingsForInput.title }}:
    </div>

    <input v-if="settingsForInput.type === 'text'" 
        :value="value" 
        @input="$emit('input', $event.target.value)" 
        class="input-text"
    />

    <div v-if="settingsForInput.type === 'date'" class="input-date" @keyup.capture="updateValue">
        <input
            v-if="showDay"
            v-model="day"
            ref="day"
            class="input-date__input input-date__input--day"
            type="number"
            placeholder="dd"
            @input="updateDay"
            @blur="day = day.padStart(2, 0)"
        >
        <span v-if="showDay && showMonth" class="input-date__divider">/</span>
        <input
            v-if="showMonth"
            v-model="month"
            ref="month"
            class="input-date__input input-date__input--month"
            type="number"
            placeholder="mm"
            @input="updateMonth"
            @blur="month = month.padStart(2, 0)"
        >
        <span v-if="showYear && (showDay || showMonth)" class="input-date__divider">/</span>
        <input
            v-if="showYear"
            v-model="year"
            ref="year"
            class="input-date__input input-date__input--year"
            type="number"
            placeholder="yyyy"
            @blur="year = year.padStart(4, 0)"
        >
    </div>

  </div>
</template>

<script>
export default {
    name: 'CustomInput',
    props: {
        value: {
            type: [Number, String],
            default: ''
        },
        settingsForInput: {
            type: Object,
            required: true
        },
        showDay: {
            type: Boolean,
            default: true,
        },
        showMonth: {
            type: Boolean,
            default: true,
        },
        showYear: {
            type: Boolean,
            default: true,
        },
    },
    mounted() {
        this.day = this.day.padStart(2,0)
        this.month = this.month.padStart(2,0)
        this.year = this.year.padStart(2,0)
    },
    data() {
        return {
            day: `${this.value ? new Date(this.reverseDate(this.value)).getDate() : ''}`,
            month: `${this.value ? new Date(this.reverseDate(this.value)).getMonth() + 1 : ''}`,
            year: `${this.value ? new Date(this.reverseDate(this.value)).getFullYear(): ''}`,   
        }
    },
    watch: {
        year(current, prev) {
            if (current > 9999) this.year = prev;
        },
    },
    methods: {
        updateValue() {
            const timestamp = `${this.year.padStart(4, 0)}-${this.month}-${this.day}`;
            
            if (Number.isNaN(timestamp)) return;

            this.$emit('input', this.reverseDate(timestamp));
        },
        updateDay() {
            if (!this.day.length || parseInt(this.day, 10) < 4) return;
            if (this.showMonth) this.$refs.month.select();
            else if (this.showYear) this.$refs.year.select();
        },
        updateMonth() {
            if (!this.month.length || parseInt(this.month, 10) < 2) return;
            if (this.showYear) this.$refs.year.select();
        },
        reverseDate(str) {
            return str.split("-").reverse().join("-")
        }
    },  
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.input-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;

    & .title {
        width: 35%;
    }

    & .input-text {
        flex: 1 1 auto;
        padding: 6px;
        border: 1px solid $grey;
        background: $grey-light;
        border-radius: 6px;
        transition: .3s;

        &:hover,
        &:focus {
            border: 1px solid $dark;
        }
    }

    & .input-date {
        $spacing: 0.5em;

        display: inline-flex;
        position: relative;
        overflow: hidden;
        background: $grey-light;
        border: 1px solid $grey;
        border-radius: 6px;
        transition: .3s;
        font-size: 14px;

        &:hover,
        &:focus {
            border: 1px solid $dark;
        }

        &__input {
            padding: $spacing;
            padding-right: $spacing / 2;
            padding-left: $spacing / 2;
            background: $grey-light;
            border: none;
            text-align: center;
            font-size: 14px;
            -moz-appearance: textfield; 

            &::-webkit-inner-spin-button {
                display: none; 
            }

            &:first-child {
                padding-left: $spacing;
            }

            &:last-child {
                padding-right: $spacing;
            }

            &:hover {
                outline: none;
            }

            &--day,
            &--month {
                width: 3em;
            }

            &--year {
                width: 4em;
            }
        }

        &__divider {
            padding-top: $spacing;
            padding-bottom: $spacing;
            pointer-events: none;
        }
}
}


</style>