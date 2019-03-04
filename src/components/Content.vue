<template>
<div class="content">
   <textarea class="text_box" v-on:keyup="saveNotes" v-model="text_notes"></textarea>
</div>
</template>
<script>
export default {
  name: 'Content',
  data() {
    return{
      text_notes:''
    }
  },
  components: {
  },
    methods:{
        saveNotes(){
            // eslint-disable-next-line
            console.log("text",this.text_notes)
            
        }
    }
}
</script>
<style lang="scss">
.content{
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin: 10%;
    
}
.text_box{
    height: 20vh;
    width: 100%;
    border-radius: 10px; 
    border: 1px solid #cccccc;
    box-shadow: 2px 3px #bbbbbb;
    padding: 10px;
}

</style>