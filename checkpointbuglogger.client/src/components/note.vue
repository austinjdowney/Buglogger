<template>
  <div class="note row border-right">
    <div class="col-md-3 mx-5 border-right border-bottom">
      <b>Creator Name</b>
    </div>
    <div class="col-md-9 mx-5 border-right border-bottom">
      <b>{{ noteProp.body }}</b>
    </div>
    <div>
      <i class="fas fa-trash-alt    " @click="deleteNote"></i>
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
          await notesService.deleteNote(props.noteProp.id, props.noteProp.bug)
          Notification.toast('Successfully Deleted Your Note', 'success')
        } catch (error) {
          Notification.toast('Error: ' + error, 'warning')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
