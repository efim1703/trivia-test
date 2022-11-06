<template>
  <div class="page-wrapper">
    <div class="title-page">
      Список компаний :
    </div>

    <div class="company-list">
      <app-card 
        v-for="item in company" 
        :key="item.id"
        :item="item"
        type="company"
        class="company-card"
        @delete-card="deleteCard($event)"
        @edit-card="editCard($event)"
      />
      <custom-button class="add-button" @click="addItem()" color="#11d544">
          Создать
      </custom-button>
    </div>

    <app-modal v-model="modalDeleteIsShown">
      <delete-form @close-modal="modalDeleteIsShown = false" @delete-item="deleteItem()">
        Вы точно хотите удалить компанию?
      </delete-form>
    </app-modal>

    <app-modal v-model="modalEditIsShown">
      <edit-form @close-modal="closeEditModal()" @save-item="saveItem()">
        <template v-slot:title>
          <p>Редактировать компанию:</p>
        </template>
        <template v-slot:inputs>
          <custom-input 
            :settingsForInput="{ title: 'Название компании', type: 'text' }" 
            v-model="itemForModal.name" 
          />
        </template>
      </edit-form>

    </app-modal>
  </div>
</template>

<script>
import AppCard from '@/components/AppCard.vue'
import CustomButton from '@/components/CustomButton.vue'
import AppModal from '@/components/AppModal.vue'
import EditForm from '@/components/EditForm.vue'
import DeleteForm from '@/components/DeleteForm.vue'
import CustomInput from '@/components/CustomInput.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'CompanyPage',
  components: {
    AppCard,
    CustomButton,
    AppModal,
    EditForm,
    DeleteForm,
    CustomInput
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
    ...mapState('company', ['company'])
  },
  methods: {
    ...mapActions('company', ['updateCompany', 'deleteCompany', 'addCompany']),

    deleteCard(item) {
      this.modalDeleteIsShown = true
      this.itemIdForDelete = item.id
    },
    editCard(item) {
      this.modalEditIsShown = true
      item.type === 'company' ? this.setItemInModal(item.id) : false
    },
    setItemInModal(id) {
      let company = this.company.find(item => item.id == id);
      this.itemForModal = {
        id: company.id,
        name: company.name,
      }
    },
    closeEditModal() {
      this.modalEditIsShown = false
      this.itemForModal = {}
    },
    saveItem() {
      this.itemForModal.new === true ? this.addCompany(this.itemForModal) : this.updateCompany(this.itemForModal)
      this.closeEditModal()
    },
    addItem() {
      this.itemForModal = {
        id: Date.now().toString(36),
        name: '',
        new: true
      }
      this.modalEditIsShown = true
    },
    deleteItem() {
      this.deleteCompany(this.itemIdForDelete)
      this.modalDeleteIsShown = false
      this.itemIdForDelete = null
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/variables.scss';

  .page-wrapper {
    position: relative;

    & .title-page {
      font-size: 28px;
      font-weight: 700;
      margin: 42px 0;
    }

    & .company-list {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;

      & .company-card {
        flex: 1 1 calc(100%/4 - 30px);
      }

      & .add-button {
        max-height: 40px;
        max-width: 120px;
        margin: auto;
      }
    }
  }
</style>