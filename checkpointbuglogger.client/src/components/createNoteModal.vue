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
          <div class="modal-body">
            <div class="row">
              Reported By: {{ state.user.name }}
            </div>
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input type="text"
                   class="form-control"
                   id="description"
                   placeholder="Description..."
                   minlength="3"
                   maxlength="50"
                   rows="6"
                   v-model="state.newNote.description"
            >
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          Close
        </button>
        <button type="submit" class="btn btn-primary">
          Create
        </button>
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
          state.newNote = {}
          await notesService.addNote(state.newNote)
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
