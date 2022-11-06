<template>
  <div class="item-wrapper">
    <div class="title">
      {{ item.name }}
    </div>

    <div v-if="item.idCompany" class="text">
        <div> Год рождения: {{ item.dateOfBirth.replaceAll('-', '.') }} </div>
        <div> Компания: {{ companyName }} </div>
    </div>

    <div 
        class="delete icon"
        @click="deleteCard()"
    >
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4_349)"><path d="M10.207 5.79688C9.99998 5.79688 9.83224 5.96462 9.83224 6.17158V13.2535C9.83224 13.4604 9.99998 13.6283 10.207 13.6283C10.4139 13.6283 10.5817 13.4604 10.5817 13.2535V6.17158C10.5817 5.96462 10.4139 5.79688 10.207 5.79688Z" fill="white"/><path d="M5.78544 5.79688C5.57848 5.79688 5.41074 5.96462 5.41074 6.17158V13.2535C5.41074 13.4604 5.57848 13.6283 5.78544 13.6283C5.99241 13.6283 6.16015 13.4604 6.16015 13.2535V6.17158C6.16015 5.96462 5.99241 5.79688 5.78544 5.79688Z" fill="white"/><path d="M2.56294 4.76335V13.9953C2.56294 14.541 2.76303 15.0534 3.11256 15.4211C3.46048 15.7898 3.94467 15.9991 4.4514 16H11.541C12.0478 15.9991 12.532 15.7898 12.8798 15.4211C13.2293 15.0534 13.4294 14.541 13.4294 13.9953V4.76335C14.1242 4.57893 14.5745 3.90768 14.4815 3.19471C14.3884 2.48189 13.7811 1.94867 13.0622 1.94852H11.1437V1.48014C11.1459 1.08626 10.9902 0.708039 10.7113 0.42979C10.4325 0.151688 10.0537 -0.0031709 9.65982 4.92333e-05H6.33255C5.93867 -0.0031709 5.55986 0.151688 5.28103 0.42979C5.00219 0.708039 4.84646 1.08626 4.84865 1.48014V1.94852H2.93019C2.21122 1.94867 1.60393 2.48189 1.51084 3.19471C1.4179 3.90768 1.86813 4.57893 2.56294 4.76335ZM11.541 15.2506H4.4514C3.81075 15.2506 3.31236 14.7002 3.31236 13.9953V4.79629H12.68V13.9953C12.68 14.7002 12.1816 15.2506 11.541 15.2506ZM5.59806 1.48014C5.59558 1.28503 5.67227 1.09724 5.81074 0.959502C5.94906 0.821768 6.13729 0.746095 6.33255 0.749461H9.65982C9.85508 0.746095 10.0433 0.821768 10.1816 0.959502C10.3201 1.09709 10.3968 1.28503 10.3943 1.48014V1.94852H5.59806V1.48014ZM2.93019 2.69793H13.0622C13.4347 2.69793 13.7367 2.99989 13.7367 3.3724C13.7367 3.74491 13.4347 4.04688 13.0622 4.04688H2.93019C2.55768 4.04688 2.25571 3.74491 2.25571 3.3724C2.25571 2.99989 2.55768 2.69793 2.93019 2.69793Z" fill="white"/><path d="M7.9962 5.79688C7.78923 5.79688 7.62149 5.96462 7.62149 6.17158V13.2535C7.62149 13.4604 7.78923 13.6283 7.9962 13.6283C8.20317 13.6283 8.37091 13.4604 8.37091 13.2535V6.17158C8.37091 5.96462 8.20317 5.79688 7.9962 5.79688Z" fill="white"/></g><defs><clipPath id="clip0_4_349"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
    </div>

    <div 
        class="edit icon" 
        @click="editCard()"
    >
        <svg enable-background="new 0 0 15 15" viewBox="0 0 512.021 512.021" xmlns="http://www.w3.org/2000/svg"><path d="m495.891 119.983-103.863-103.863c-10.388-10.389-24.241-16.11-39.008-16.11s-28.621 5.721-39.009 16.109l-264.15 264.152c-.008.007-.016.014-.024.021s-.014.016-.021.024l-45.422 45.422c-2.813 2.813-4.394 6.628-4.394 10.606v160.667c0 8.284 6.716 15 15 15h160.666c3.978 0 7.793-1.581 10.606-4.394l45.419-45.419c.008-.008.016-.014.024-.021s.014-.016.021-.024l201.662-201.662c.002-.002.005-.004.007-.006s.004-.005.006-.007l62.48-62.478c21.507-21.507 21.508-56.505 0-78.017zm-274.782 310.372-139.452-139.455 180.474-180.474 139.456 139.453zm-51.656 51.656h-139.453v-139.453l30.444-30.444 139.451 139.456zm305.225-305.223-51.878 51.877-139.456-139.453 51.879-51.879c4.722-4.722 11.042-7.322 17.796-7.322s13.074 2.601 17.795 7.322l103.862 103.862c9.813 9.814 9.813 25.781.002 35.593z"/></svg>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AppCard',
  props: {
    item: {
        type: Object,
        default: null
    },
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState('company', [ 'company' ]),
    companyName() {
        console.log(this.company.find(({ id }) => id === this.item.idCompany ));
        return this.company.find(({ id }) => id === this.item.idCompany ).name
    }
  },
  methods: {
    deleteCard() {
        const item = this.company ? { id: this.company.id, type: 'company' } : { id: this.user.id, type: 'user' }
        this.$emit('delete-card', item)
    },
    editCard() {
        const item = this.company ? { id: this.company.id, type: 'company' } : { id: this.user.id, type: 'user' }
        this.$emit('edit-card', item)
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.item-wrapper {
    text-align: center;
    background: $white;
    color: $primary;
    border-radius: 12px;
    box-shadow: 0px 8px 16px rgb(66 66 66 / 15%);
    position: relative;

    &:hover {
        cursor: pointer;

        .icon {
            opacity: 1;
        }
    }
}
.title {
    padding: 32px 24px;
    font-size: 20px;
    font-weight: 500;
}
.text {
    font-weight: 500;
    padding: 0px 32px 24px;

    & div:first-child {
        margin-bottom: 8px;
    }
}

.icon {
    opacity: 0;
    position: absolute;
    top: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 10px;
    transition: ease .5s;
}
.delete {
    right: -10px;
    background: $red;
}
.edit {
    right: 22px;
    background: $blue;

    & svg {
        width: 15px;
        height: 15px;
        fill: $white;
    }
}
</style>