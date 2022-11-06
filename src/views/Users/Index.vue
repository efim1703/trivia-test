<template>
  <div>
    <div class="title">
      Список пользователей :
    </div>
    
    <div class="users-list">
      <app-card 
        v-for="item in users" 
        :key="item.id"
        :item="item"
        type="user"
        class="users-card"
        @delete-card="deleteCard($event)"
        @edit-card="editCard($event)"
      />
      <custom-button class="add-button" @click="addItem()" color="#11d544">
          Создать
      </custom-button>
    </div>

    <app-modal v-model="modalDeleteIsShown">
      <delete-form @close-modal="modalDeleteIsShown = false" @delete-item="deleteItem()">
        Вы точно хотите удалить пользователя?
      </delete-form>
    </app-modal>

    <app-modal v-model="modalEditIsShown">
      <edit-form @close-modal="closeEditModal()" @save-item="saveItem()">
        <template #title>
          <p>Редактировать пользователя:</p>
        </template>
        <template #inputs>
          <div>
            <custom-input 
              :settingsForInput="{ title: 'ФИО', type: 'text' }" 
              v-model="itemForModal.name" 
            />
            <custom-input 
              :settingsForInput="{ title: 'Дата рождения', type: 'date' }" 
              v-model="itemForModal.dateOfBirth" 
            />
            <custom-select 
              :settingsForSelect="{ title: 'Компания', options: company, optionIsActive: itemForModal.company }" 
              @option-change="itemForModal.company = $event"
            />
          </div>
        </template>
      </edit-form>
    </app-modal>
  </div>
</template>

<script>
import AppCard from '@/components/AppCard.vue'
import CustomButton from '@/components/CustomButton.vue'
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
    CustomButton,
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
    ...mapActions('users', ['updateUser', 'deleteUser', 'addUser']),

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
        dateOfBirth: user.dateOfBirth,
        company: user.company
      }
    },
    closeEditModal() {
      this.modalEditIsShown = false
      this.itemForModal = {}
    },
    saveItem() {
      this.itemForModal.new === true ? this.addUser(this.itemForModal) : this.updateUser(this.itemForModal)
      this.closeEditModal()
    },
    deleteItem() {
      this.deleteUser(this.itemIdForDelete)
      this.modalDeleteIsShown = false
      this.itemIdForDelete = null
    },
    addItem() {
      this.itemForModal = {
        id: Date.now().toString(36),
        name: '',
        dateOfBirth: '',
        company: '',
        new: true
      }
      this.modalEditIsShown = true
    },
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

  & .add-button {
    max-height: 40px;
    max-width: 120px;
    margin: auto;
  }
}

</style>