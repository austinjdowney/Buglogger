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
      <b>{{ bugProp.updatedAt }}</b>
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
  // async changeDate(bugProp) {
  //   const timeStr = bugProp.updatedAt
  //   // eslint-disable-next-line no-undef
  //   const newFormat = moment(timeStr).format('M/DD/YYYY')
  //   document.body.textContent = newFormat
  // },
  setup() {
    return {
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
