<template>
  <div class="">
    <div class="title">
      Список пользователей :
    </div>
    
    <div class="users-list">
      <app-card 
        v-for="item in users" 
        :key="item.id"
        :item="item"
        class="users-card"
        @delete-card="deleteCard($event)"
        @edit-card="editCard($event)"
      />
    </div>

    <app-modal v-model="modalDeleteIsShown">
      <delete-form @close-modal="modalDeleteIsShown = false" @delete-item="deleteItem()">
        Вы точно хотите удалить пользователя?
        
      </delete-form>
    </app-modal>

    <app-modal v-model="modalEditIsShown">
      <edit-form @close-modal="closeEditModal()" @save-item="saveItem()">
        <template v-slot:title>
          <p>Редактировать пользователя:</p>
        </template>
        <template v-slot:inputs>
          <div>
            <custom-input :settingsForInput="{ title: 'ФИО', type: 'text' }" v-model="itemForModal.name" />
            <custom-input :settingsForInput="{ title: 'Дата рождения', type: 'date' }" v-model="itemForModal.date" />
            <custom-select 
              :settingsForSelect="{ title: 'Компания', options: company, optionIsActive: itemForModal.company }" 
              @option-change="$emit('option-change', $event)"
            />
          </div>
        </template>
      </edit-form>
    </app-modal>
  </div>
</template>

<script>
import AppCard from '@/components/AppCard.vue'
import AppModal from '@/components/AppModal.vue'
import DeleteForm from '@/components/DeleteForm.vue'
import EditForm from '@/components/EditForm.vue'
import CustomInput from '@/components/CustomInput.vue'
import CustomSelect from '@/components/CustomSelect.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'UsersPage',
  components: {
    AppCard,
    AppModal,
    DeleteForm,
    EditForm,
    CustomInput,
    CustomSelect
  },
  data() {
    return {
      modalDeleteIsShown: false,
      modalEditIsShown: false,
      itemForModal: {},
      itemIdForDelete: null
    }
  },
  computed: {
    ...mapState('users', ['users']),
    ...mapState('company', ['company']),
    
  },
  methods: {
    ...mapActions('users', ['updateUser', 'deleteUser']),

    deleteCard(item) {
      this.modalDeleteIsShown = true
      this.itemIdForDelete = item.id
    },
    editCard(item) {
      this.modalEditIsShown = true
      item.type === 'user' ? this.setItemInModal(item.id) : false
    },
    setItemInModal(id) {
      let user = this.users.find(item => item.id == id);
      this.itemForModal = {
        id: user.id,
        name: user.name,
        date: user.dateOfBirth,
        company: this.company[1]
      }
    },
    closeEditModal() {
      this.modalEditIsShown = false
      this.itemForModal = {}
    },
    saveItem() {
      this.updateUser(this.itemForModal)
      this.closeEditModal()
    },
    deleteItem() {
      this.deleteUser(this.itemIdForDelete)
      this.modalDeleteIsShown = false
      this.itemIdForDelete = null
    },
    itemForCard(item) {
      item.company = this.company.find(company => company.id == item.idCompany).name
      console.log(item);
      return item
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.title {
  font-size: 28px;
  font-weight: 700;
  margin: 42px 0;
}
.users-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  & .users-card {
    flex: 1 1 calc(100%/3 - 30px);
  }
}
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