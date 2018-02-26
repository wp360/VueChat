<template>
    <div id="msg-list">
        <ul>
            <msg-item v-for="baseMsgObj in this.$store.state.msgList.baseMsg" :item="baseMsgObj" :key="baseMsgObj.mid"></msg-item>  
        </ul>
    </div>
</template>

<script>
import msgItem from "../wechat/msg-item";

export default {
  components: {
    msgItem
  }
};
</script>
<style>

