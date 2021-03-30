<template>
  <div id="app">
    <Header/>
    <router-view class="container flex-grow-1"/>
    <BottomBar/>
  </div>
</template>

<script>
import { Header, BottomBar } from "common";

export default {
  name: 'AppComponent',
  components: {
    Header,
    BottomBar
  }
}
</script>
