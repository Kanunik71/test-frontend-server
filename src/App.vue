<template>
    <div id="app">
        <header class="header">
            <b-container fluid>
                <h1 class="header__title">TestProject</h1>
            </b-container>
        </header>
        <main class="content">
            <router-view></router-view>
        </main>
        <footer class="footer">
            <b-container fluid>
                <div class="footer__copyright">© TestProject</div>
            </b-container>
        </footer>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>

<style lang="scss">
    * {
        padding:0;
        margin:0;
        box-sizing: border-box;
    }
    html {
        font-size: 14px;
        line-height: 18px;
        height: 100%;
    }
    body {
        min-width:320px;
        font-family: Tahoma, Arial, Verdana, sans-serif;
        color: #333;
        width: 100%;
        height: 100%;
        background: #f8f9f6;
    }
    .header {
        background-color: #f3f3f3;
        border-color: #e2e2e2;
        height:90px;
        display: flex;
        align-items: center;
        &__title {
            font-size:3rem;
            line-height:4rem;
            text-align:center;
            margin:0;
        }
    }
    .footer {
        background: #7e7e7e;
        color: #dbdbdb;
        height:80px;
        display: flex;
        align-items: center;
        &__copyright {
            font-size:1rem;
            line-height:2rem;
            text-align:center;
        }
    }
    .content {
        min-height: calc(100vh - 90px - 80px);
        overflow:hidden;
    }
</style>
