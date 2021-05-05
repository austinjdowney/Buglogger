<template>
  <div class="flex-grow-1">
    <header>
      <Navbar />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <div class="bg-success text-dark text-center p-4">
        <span>
          <b> <i class="fas fa-bug icon"></i>   Made with <i class="fas fa-bug icon"></i> by Austin   <i class="fas fa-bug icon"></i></b>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
