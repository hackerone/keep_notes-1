<template>
<div class="site_header">
    <img alt="Add Notes" src="../assets/plus.png" class="add_btn" v-on:click="addNotes">
    <div>
        <input class="searchBox"/>
    </div>
</div>
</template>
<script>
export default {
  name: 'Header',
  props:['addNotes'],
  components: {
  }
}
</script>
<style lang="scss">
.site_header{
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 10vh;
}
.add_btn{
    height: 30px;
    width: 30px;
    -ms-flex-item-align: center;
    align-self: center;
    margin: 0 10px;
}
.searchBox{
    height: 40px;
    width: 70vw;
    border-radius: 10px;
    border: 1px solid #bbbbbb;
    box-shadow: 2px 3px #cccccc;
    padding: 0 5px;
    font-size: 20px;
}
</style>