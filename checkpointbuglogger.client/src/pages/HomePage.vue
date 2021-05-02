<template>
  <div class="container-fluid bg-warning flex-grow-1">
    <div class="row">
      <div class="col-md-8 my-4 ml-4">
        <h1 class="report-headline ml-5">
          <span>
            Current Bug
          </span>
          <button title="Open Create Bug Form"
                  type="button"
                  class="btn btn-success text-dark shadow"
                  data-toggle="modal"
                  data-target="#new-bug-form"
          >
            Report
          </button>
          <Create-bug-report-modal />
        </h1>
      </div>
      <div class="col-md-3 mt-5">
        <input type="checkbox" id="openClose" name="openClose" />
        <!--PUT @click="sortClosed"-->
        <span class=""> Hide Closed </span>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="card card-width mx-3-5 mb-4">
        <div class="card-body bg-success card-width">
          <div class="card-title d-flex flex-direction-row justify-content-between border-bottom">
            <h4 class="mx-3 border-bottom border-right">
              Title
            </h4>
            <h4 class="mx-3 border-bottom border-right">
              Reported By
            </h4>
            <h4 class="mx-3 border-bottom border-right">
              Status
            </h4>
            <h4 class="mx-3 border-bottom border-right">
              Last Modified
            </h4>
          </div>
          <p class="card-text locked-scroll">
            <ul>
              <Bug v-for="bug in state.bugs" :key="bug.id" :bug-prop="bug" />
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
import Notification from '../utils/Notification'
import { useRoute } from 'vue-router'
export default {
  name: 'Home',
  setup() {
    const route = useRoute()
    const state = reactive({
      bugs: computed(() => AppState.bugs)
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
</style>
