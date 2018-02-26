<template>
    <div id="app">
        <welcome></welcome>  
        <div class="outter" :class="{ 'hideLeft': $route.path.split('/').length > 2}">
            <header class="app-header header-fixed">
                <div class="header-left">
                    <span class="home-title">微信</span>
                </div>
                <div class="header-right">
                    <router-link to="/search" class="search" tag="div">
                        <i class="iconfont icon-search"></i>
                    </router-link>
                    <div class="add" @click="showMore">
                        <i class="iconfont icon-tips-jia"></i>
                        <more v-if="showMoreMenu"></more>
                    </div>
                </div>
            </header>
            <section class="app-content content-fixed">
                <keep-alive>
                    <router-view name="default"></router-view>
                </keep-alive>
            </section>
            <footer class="app-footer">
                <bottom-nav></bottom-nav>
            </footer>
        </div>
        <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
            <router-view name="subPage" class="sub-page"></router-view>
        </transition>
    </div>
</template>

<script>
import bottomNav from './components/common/bottom-nav'
import welcome from './components/common/welcome'
import more from './components/common/more'

export default {
    name: 'app',
    components: {
        bottomNav,
        welcome,
        more
    },
    data() {
        return {
            'enterAnimate': '',
            'leaveAnimate': '',
            'showMoreMenu': false
        }
    },
    watch: {
        '$route'(to, from) {
            const toDepth = to.path.split('/').length 
            const fromDepth = from.path.split('/').length

            this.enterAnimate = toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft"
            this.leaveAnimate = toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight"
            if (toDepth === 3) {
                    this.leaveAnimate = "animated fadeOutRight"
                }
        }
    },
    methods: {
        showMore: function() {
            if (this.showMoreMenu == true) {
                this.showMoreMenu = false
            } else {
                this.showMoreMenu = true
            }
        }
    }
}
</script>

<style> 
    @import 'assets/css/lib/weui.min.css';
    @import 'assets/css/normalize.css';
    @import '../static/iconfont.css';
    @import 'assets/css/lib/animate.css';
</style>
<style lang="scss">
    @import 'assets/css/common.scss';
    @import 'assets/css/base.scss';
</style>
