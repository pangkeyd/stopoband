<template>
  <div>
    <form @submit.prevent="postMusic(music)" enctype="multipart/form-data">
      <input v-model="music.title" type="text">
      <input v-model="music.desc" type="text">
      <input v-model="music.tags"type="text">
      <h1>Select File</h1>
      <input type="file" @change="onFileChange" >
      <button class="btn btn-danger">Kirim</button>
    </form>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  data(){
    return{
      music:{
        title:'',
        desc:'',
        tags: '',
        image:''
      }
    }
  },
methods:{
  
    onFileChange(event){
      this.music.image = event.target.files[0].name
    console.log(this.music.image);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  ...mapActions([
    'postMusic'
  ])
}
}
</script>

<style>

</style>
