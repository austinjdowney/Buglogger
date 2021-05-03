<template>
  <div class="bug row bug-info border-right">
    <!-- Route parameter getting set with the Params object -->
    <p class="list-item col-sm-2 mx-4 border-right border-bottom">
      <router-link style="color: orange" :to="{name: 'BugDetails', params: { id: bugProp.id }}">
        <b>{{ bugProp.title }}</b>
      </router-link>
    </p>
    <div class="list-item col-sm-2 mx-4 border-right border-bottom">
      <img :src="bugProp.creator.picture" alt="">
      <b>{{ bugProp.creator.name }}</b>
    </div>
    <div class="list-item col-sm-2 mx-4 border-right border-bottom">
      <span v-if="bugProp.closed" class="text-danger"> <b> Closed </b></span>
      <span v-else> <b> Open </b></span>

      <!-- <p v-if="bug.closed==false">
        <span>Open</span>
      </p>
      <p v-else>
        <span>Closed</span>
      </p> -->
    </div>
    <div class="list-item col-sm-2 mx-5 border-right border-bottom">
      <b>{{ new Date( bugProp.updatedAt).toLocaleString('en', 'times') }}</b>
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
img{
    height: 25px;
    width: 25px;
  }
.bug-info{
min-width:20rem;
word-break: break-all;
}
.router-link:hover{
color: var(--dark)
}
@media only screen and (max-width: 768) {
.list-item{
  flex-direction: row;
}
}
</style>
