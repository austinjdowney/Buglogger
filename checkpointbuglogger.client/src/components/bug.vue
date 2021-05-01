<template>
  <div class="bug row bug-info border-right">
    <!-- Route parameter getting set with the Params object -->
    <p class="col-2 mr-4 border-right border-bottom">
      <router-link style="color: orange" :to="{name: 'BugDetails', params: { id: bugProp.id }}">
        <b>{{ bugProp.title }}</b>
      </router-link>
    </p>
    <div class="col-2 mx-5 border-right border-bottom">
      <b>{{ bugProp.creator.name }}</b>
    </div>
    <div class="col-2 mx-5 border-right border-bottom">
      <b>{{ bugProp.closed }}</b>
    </div>
    <div class="col-2 ml-5 border-right border-bottom">
      <b>{{ new Date( bugProp.updatedAt).toLocaleString(en, times) }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bug',
  props: {
    bugProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      times: {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.bug-info{
min-width:20rem;
word-break: break-all;
}
.router-link:hover{
color: var(--dark)
}
</style>
