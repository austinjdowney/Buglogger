<template>
  <div class="container-fluid flex-grow-1">
    <div class="note row border-right">
      <div class="col-md-3 pr-0 ml-1 border-right border-bottom">
        <!--WHY WON'T YOUR CREATOR POPULATE-->
        <img :src="noteProp.creator.picture" alt="">
        <b>{{ noteProp.creator.name }}</b>
      </div>
      <div class="col-md-7 pl-0 mx-1 border-right border-bottom">
        <b>{{ noteProp.body }}</b>
      </div>
      <div>
        <i class="fas fa-trash-alt    " @click="deleteNote" v-if="state.user.isAuthenticated && state.account.id === noteProp.creatorId"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { notesService } from '../services/NotesService'
export default {
  name: 'Note',
  props: {
    noteProp: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      account: computed(() => AppState.account),
      user: computed(() => AppState.user)
    })

    return {
      state,
      async deleteNote() {
        try {
          if (await Notification.confirmAction()) {
            await notesService.deleteNote(props.noteProp.id, props.noteProp.bug)
          }
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img{
  height: 40px;
    width: 40px;
  }
</style>
