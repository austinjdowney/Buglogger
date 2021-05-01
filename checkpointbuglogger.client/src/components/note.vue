<template>
  <div class="note row border-right">
    <div class="col-md-3 mx-5 border-right border-bottom">
      <b>{{ noteProp.creator.name }}</b>
    </div>
    <div class="col-md-9 mx-5 border-right border-bottom">
      <b>{{ noteProp.body }}</b>
    </div>
    <div>
      <i class="fas fa-trash-alt    " @click="deleteNote"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Note',
  props: {
    noteProp: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
