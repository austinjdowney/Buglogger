<template>
  <div class="bugDetails" v-if="state.bug">
    <h1>
      Title: {{ state.bug.title }}
    </h1>
    <div class="row">
      <h3>Reported by: {{ state.bug.creator.name }}</h3>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted, reactive } from 'vue'
import { bugsService } from '../services/BugsService'
import { notesService } from '../services/NotesService'
import Notification from '../utils/Notification'
import { useRoute } from 'vue-router'
export default {
  name: 'BugDetails',
  // props: {
  //   bugProp: {
  //     type: Object,
  //     required: true
  //   }
  // },
  setup() {
    const route = useRoute()
    const state = reactive({
      bug: computed(() => AppState.activeBug),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account)
    })

    onMounted(async() => {
      try {
        await bugsService.getBugById(route.params.id)
        await notesService.getNotesByBugId(route.params.id)
      } catch (error) {
        Notification.toast('error:' + error, 'warning')
      }
    })
    return {
      state,
      route
      // add this to createNoteModal
      // async addNote() {
      //   try {
      //     state.newNote.bugId = route.params.id
      //     await notesService.addList(state.newNote)
      //     state.newNote = {}
      //     Notification.toast('Successfully Created Note', 'success')
      //   } catch (error) {
      //     Notification.toast('error:' + error, 'warning')
      //   }
      // }
    }
  }

}
</script>
