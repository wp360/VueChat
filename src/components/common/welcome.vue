<template>
    <div id="welcome" :class="{hide: hide}">
      <!--<h1>{{data.user}}</h1>-->
      <img src="../../assets/images/launchimage.png" alt="launchimage" />
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            data:[],
            hide: false
        }
    },
    mounted() {
        axios.get('/data')
        .then(res=>{
          if(res.status == 200){
            this.data = res.data[0];
          }
        })
        setTimeout(() => {
            this.hide = true
        }, 1500)
    }
}
</script>

<style lang="scss" scope>
#welcome {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #000b17;
    z-index: 20;
    transition: .3s;
    img {
        width: 95%;
    }
}
#welcome.hide {
    opacity: 0;
    visibility: hidden;
}
</style>
