<template>
  <div class="modal"
       id="new-bug-form"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            New Bug Report
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form @submit.prevent="addBug">
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label for="title">Title:</label>
                  <input type="text"
                         class="form-control"
                         id="title"
                         placeholder="Title..."
                         v-model="state.newBug.title"
                         required
                  >
                </div>
              </div>
              <div class="col-6">
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
                     maxlength="20"
                     rows="4"
                     v-model="state.newBug.description"
              >
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-primary">
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
import { bugsService } from '../services/BugsService'
import { AppState } from '../AppState'
import $ from 'jquery'
export default {
  name: 'CreateBugReportModal',
  props: {
    bugProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    const state = reactive({
      newBug: {},
      bugs: computed(() => AppState.bugs),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account)
    })
    return {
      state,
      async addBug() {
        try {
          state.newBug = {}
          await bugsService.addBug(state.newBug)
          $('#new-bug-form').modal('hide')
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
