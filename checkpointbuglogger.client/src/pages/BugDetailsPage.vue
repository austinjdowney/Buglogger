<template>
  <div class="bugDetails container-fluid" v-if="state.bug">
    <div class="row">
      <div class="col-10">
        <h1 class="report-headline ml-4 mt-4">
          <b> Title: {{ state.bug.title }} </b>
        </h1>
        <h2 class="ml-4">
          Reported by:
          <img class="rounded-circle" :src="state.bug.creator.picture" alt="">
          {{ state.bug.creator.name }}
        </h2>
      </div>
      <div class="col-2 mt-4">
        <button type="button" class="btn btn-warning" @click="closeBug">
          close
        </button>
        <!-- how to switch true and false to open and closed-->
        <div>
          status: {{ state.bug.closed }}
        </div>
      </div>
    </div>
    <div class="row bg-white">
      <div class="col-md-12 ml-3">
        {{ state.bug.description }}
      </div>
    </div>
    <div class="row">
      <h3>
        Notes
      </h3>
      <button title="Open Create Note Form"
              type="button"
              class="btn btn-success text-dark shadow"
              data-toggle="modal"
              data-target="#new-note-form"
      >
        Add
      </button>
      <Create-note-modal />
    </div>
    <div class="row justify-content-center">
      <div class="card card-width mx-3-5 mb-4">
        <div class="card-body bg-success card-width">
          <div class="card-title d-flex flex-direction-row justify-content-between border-bottom">
            <div class="col-6">
              <h4 class="mx-3 border-bottom border-right">
                Reported By
              </h4>
            </div>
            <div class="col-6">
              <h4 class="mx-3 border-bottom border-right">
                Description
              </h4>
            </div>
          </div>
          <p class="card-text locked-scroll" v-if="state.notes">
            <ul>
              <!--inject note component-->
              <Note v-for="note in state.notes" :key="note.id" :note-prop="note" />
            </ul>
          </p>
        </div>
      </div>
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
      notes: computed(() => AppState.notes),
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
      route,
      async closeBug(bug) {
        try {
          await bugsService.closeBug(bug.id)
          Notification.toast('Successfully Changed Status', 'success')
        } catch (error) {
          Notification.toast('Error: ' + error, 'warning')
        }
      }

    }
  }
}
</script>

<style scoped lang="scss">
img{
  height: 40px;
    width: 40px;
  }
.report-headline{
  font-family: 'Black Ops One', cursive;
}
</style>
