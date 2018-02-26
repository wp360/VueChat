<template>
    <transition name="search-fade">
        <div class="search-top">
            <header id="wx-header">
                <div>
                    <span class="iconfont icon-return-arrow" @click="$router.back()"></span>
                </div>
                <div class="total-search">
                    <div class="search-tool">
                        <i class="iconfont icon-search"></i>
                        <input type="text" placeholder="搜索">
                    </div>
                </div>
            </header>
            <article>
                <h3>搜索指定内容</h3>
                <div class="search-content">
                    <span class="search-tag">朋友圈</span>
                    <span class="search-tag">文章</span>
                    <span class="search-tag-special">公众号</span>
                    <span class="search-tag">小说</span>
                    <span class="search-tag">音乐</span>
                    <span class="search-tag-special">表情</span>
                </div>
            </article>
        </div>
    </transition>
</template>

<style lang="scss" scope>
.search-top {
    position: absolute;
    background: #fff;
    width: 100%;
    top: 0;
    bottom: 0;
    padding-top: 40px;
    z-index: 100;
    #wx-header {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
        display: flex;
        a {
            flex: flex-basis;
        }
        .total-search {
            display: flex;
            margin-top: 5px;
            height: 30px;
            flex: 1;
            .search-tool {
                width: 100%;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #12da26;
                input {
                    flex: 1;
                    margin-top: 5px;
                    border: none;
                    font-size: 15px;
                    background-color: transparent;
                    outline: none;
                    color: white;
                }
            }
            .icon-search {
                margin: 0 10px 0 5px;
                font-size: 20px;
            }
        }
    }
    article {
        h3 {
            margin: 50px 0 20px;
            font-size: 14px;
            font-weight: normal;
            color: #aaa;
            text-align: center;
        }
        .search-content {
            display: flex;
            flex-wrap: wrap;
            margin: 0 20px;
            font-size: 13px;
            .search-tag {
                width: 32%;
                margin-top: 5px;
                margin-bottom: 20px;
                text-align: center;
                color: #12da26;
                border-right: 1px solid #ddd;
            }
            .search-tag-special {
                width: 32%;
                margin-top: 5px;
                text-align: center;
                color: #12da26;
            }
        }
    }
}
.search-fade-enter-active {
    transition: all .3s ease-in;
}
.search-fade-enter {
    opacity: 0;
}
</style>
