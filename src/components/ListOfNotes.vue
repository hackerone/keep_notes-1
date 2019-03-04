<template>
<div class="list_content">
   <div class="notes_box" v-for="(notes,index) in getNotes" :key="index">
      <b> Notes :</b> {{notes.content}}<br/>
       <b>KeyWords: </b>{{notes.keywords}}
    </div>
</div>
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'

import { mapGetters, mapActions } from "vuex";
Vue.use(Vuex)
export default {
  name: 'ListOfNotes',
  components: {
  },
  computed:{
    ...mapGetters({
      getNotes:'GET_NOTES'
    })
  },
  methods: {
    ...mapActions({
        'fetchNotesFromDB': 'FETCH_NOTES_FROM_DB'
    })
  },
  mounted(){
      const vm = this;
      vm.fetchNotesFromDB().then((response)=>{
          // eslint-disable-next-line 
          console.log('response',response);
          // eslint-disable-next-line 
          console.log('store',vm.$store);
      })
  }
}
</script>
<style lang="scss">
.list_content{
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 100%;
}
.notes_box{
    border-radius: 10px; 
    border: 1px solid #cccccc;
    box-shadow: 2px 3px #bbbbbb;
    padding: 10px;
    margin: 10px;
    width: 80vw;
}

</style>