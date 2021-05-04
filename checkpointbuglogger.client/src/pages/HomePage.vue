<template>
  <div class="container-fluid bg-dark flex-grow-1">
    <div class="row">
      <div class="col-md-8 my-4 ml-4">
        <h1 class="report-headline ml-5 text-light">
          <span>
            Current Bug
          </span>
          <button title="Open Create Bug Form"
                  type="button"
                  class="btn btn-success text-light shadow"
                  data-toggle="modal"
                  data-target="#new-bug-form"
                  v-if="state.user.isAuthenticated"
          >
            Report
          </button>
        </h1>
      </div>
      <Create-bug-report-modal />
      <div class="col-md-3 mt-5">
        <input type="checkbox" id="" name="sortClosed" @click="state.checkbox = !state.checkbox" />
        <!--PUT @click="sortClosed"-->
        <span class="text-light"> Hide Closed </span>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="card card-width mx-3-5 mb-4">
        <div class="card-body bg-success card-width">
          <div class="card-title d-flex flex-direction-row justify-content-between border-bottom">
            <div class="">
              <p class="mx-3 border-bottom border-right">
                <b> Title </b>
              </p>
            </div>
            <div class="">
              <p p class="mx-3 border-bottom border-right">
                <b> Reported By </b>
              </p>
            </div>
            <div class="">
              <p class="mx-3 border-bottom border-right">
                <b> Status </b>
              </p>
            </div>
            <div class="">
              <p class="mx-3 border-bottom border-right">
                <b> Last Modified </b>
              </p>
            </div>
          </div>
          <div class="card-text locked-scroll">
            <div v-if="state.checkbox=== true">
              <Bug v-for="bug in state.bugs" :key="bug.id" :bug-prop="bug" />
            </div>
            <div v-else>
              <Bug v-for="bug in state.filtered" :key="bug.id" :bug-prop="bug" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted, reactive } from 'vue'
import { bugsService } from '../services/BugsService'
import Notification from '../utils/Notification'
import { useRoute } from 'vue-router'
export default {
  name: 'Home',
  setup() {
    const route = useRoute()
    const state = reactive({
      bugs: computed(() => AppState.bugs),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      filtered: computed(() => AppState.bugs.filter(bug => bug.closed !== true)),
      checkbox: true
    })

    onMounted(async() => {
      try {
        await bugsService.getAllBugs()
      } catch (error) {
        Notification.toast('error:' + error, 'warning')
      }
    })
    return {
      state,
      route
      // async sortClosed() {
      //   try {
      //     await bugsService.sortClosed()
      //   } catch (error) {
      //     Notification.toast('Error: ' + error, 'warning')
      //   }
      // }
    }
  }

}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
.report-headline{
  font-family: 'Black Ops One', cursive;
}
.card-width{
  //min-width: 69rem;
  border-radius:25px;
  box-shadow: 20px 10px 20px #474747
}

.locked-scroll{
  height:70vh;
  overflow-y: scroll;
  overflow-x:hidden
}
span{
  text-shadow: 1px 2px;
}

@media only screen and (max-width: 768) {
  .report-headline{
  font-family: 'Black Ops One', cursive;
}
.card-title{
  flex-grow: 1;
}
}
</style>
