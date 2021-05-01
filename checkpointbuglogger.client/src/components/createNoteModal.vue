<template>
  <div class="modal"
       id="new-note-form"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            ADD COMMENT
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="addNote">
          <div class="modal-body ml-3">
            <div class="row">
              Reported By: {{ state.user.name }}
            </div>
          </div>
          <div class="form-group ml-3">
            <label for="body">Message</label>
            <input type="text"
                   class="form-control"
                   id="body"
                   placeholder="Message..."
                   minlength="3"
                   v-model="state.newNote.body"
            >
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-warning" data-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-success">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { notesService } from '../services/NotesService'
import { AppState } from '../AppState'
import $ from 'jquery'
export default {
  name: 'CreateNoteModal',
  props: {
    noteProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      newNote: {},
      notes: computed(() => AppState.notes),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account)
    })
    return {
      state,
      async addNote() {
        try {
          await notesService.addNote(state.newNote)
          state.newNote = {}
          $('#new-note-form').modal('hide')
          Notification.toast('Successfully Created Bug Report', 'success')
        } catch (error) {
          Notification.toast('error:' + error, 'warning')
        }
      }
    }
  },
  components: {}
}

</script>

<style lang="scss" scoped>
</style>
