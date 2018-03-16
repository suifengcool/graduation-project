<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>I have use</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
    </ul>

    <h2>Go to pages</h2>
    <ul>
      <li>
        <router-link to="/test">test</router-link>
      </li>
    </ul>

    <h2>Maybe you need a demo about vuex</h2>
    <ul>
      <li>
        <router-link to="/demo/todo">todo</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Vue2.0'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>