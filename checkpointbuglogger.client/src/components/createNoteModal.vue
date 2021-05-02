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
            <b>ADD NOTE</b>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="addNote">
          <div class="modal-body ml-3">
            <div class="row">
              Reported By:
              <img :src="state.user.picture" alt="" class="mx-2">
              {{ state.user.name }}
            </div>
          </div>
          <div class="form-group ml-3">
            <label for="body">Message</label>
            <textarea class="form-control input-box locked-scroll"
                      cols="20"
                      rows="10"
                      wrap="hard"
                      placeholder="Description..."
                      minlength="3"
                      v-model="state.newNote.body"
                      id="description"
            >
              </textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn text-light btn-warning" data-dismiss="modal">
              <b>Close</b>
            </button>
            <button type="submit" class="btn text-light btn-success">
              <b> Create</b>
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
import Notification from '../utils/Notification'
import { useRoute } from 'vue-router'

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
    const route = useRoute()
    const state = reactive({
      newNote: {},
      notes: computed(() => AppState.notes),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account)
    })
    return {
      state,
      route,
      async addNote() {
        try {
          state.newNote.bug = route.params.id
          await notesService.addNote(state.newNote, route.params.id)
          state.newNote = {}
          $('#new-note-form').modal('hide')
          Notification.toast('Successfully Created New Note', 'success')
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
img{
  height: 30px;
    width: 30px;
  }
.locked-scroll{
  height:20vh;
  overflow-y: scroll;
  word-break: break-all;
}
.input-box{
    min-height: 10rem
  }
</style>
