<template>
  <div class="bugDetails container-fluid bg-warning" v-if="state.bug">
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
        <button type="button" class="btn text-light btn-outline-dark" v-if="state.bug.closed=== false" @click="closeBug">
          <b>close</b>
        </button>
        <!-- how to switch true and false to open and closed-->
        <div>
          <b> status:
          </b>
          <span v-if="state.bug.closed" class="text-danger">
            <b>Closed</b>
          </span>
          <span v-else class="text-success">
            <b>Open</b>
          </span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 ml-3">
        <div class="mx-3 description-box bg-white shadow locked-scroll">
          {{ state.bug.description }}
        </div>
      </div>
    </div>
    <div class="row ml-5 my-3">
      <h3 class="mx-2">
        Notes
      </h3>
      <button title="Open Create Note Form"
              type="button"
              class="btn btn-success text-light shadow"
              data-toggle="modal"
              data-target="#new-note-form"
      >
        <b> Add </b>
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
.card-width{
  border-radius:25px;
  box-shadow: 20px 10px 20px #474747
}
.description-box{
  box-sizing: border-box;
  border: 3px solid;
  outline-color: black;
  min-height: 10rem;
}
.locked-scroll{
  height:20vh;
  overflow-y: scroll;
  word-break: break-all;
}
</style>
