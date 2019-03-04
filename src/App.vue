<template>
  <div id="app">
    <Header :addNotes="addNotes" ></Header>
    <Content v-show="newNotes"></Content>
    <ListOfNotes></ListOfNotes>
  </div>
</template>

<script>
import Header from './components/Header';
import Content from './components/Content';
import ListOfNotes from './components/ListOfNotes';

export default {
  name: 'app',
  data() {
    return{
      newNotes:false
    }
  },
  components: {
    Header,
    Content,
    ListOfNotes
  },
  methods:{
    addNotes(){
      const vm = this;
      vm.newNotes = !vm.newNotes;
    }
  }
}
</script>

<style lang="scss">
.app {
  display: flex;
  align-content: center;
  justify-content: center;
}

</style>
