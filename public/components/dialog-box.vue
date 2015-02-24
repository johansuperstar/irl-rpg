<style>
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    opacity: 0.07;
    background-color: black;
}

.dialog {
    position: absolute;
    top: 50px;
    left: 37.5%;
    width: 25%;
    height: 200px;
    border-radius: 5px;
    border: 1px solid #ddd;
    background-color: #fff;
    z-index: 100;
    margin: 0 auto;
    padding: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.close {
    position: absolute;
    top: 10px;
    left: 92%;
    width: 20px;
    height: 20px;
    background-color: #eee;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
}
</style>

<template>
<div v-show="shouldShow()">
    <div class="overlay"></div>
    <div class="dialog">
        <span class="close" v-on="click: close">x</span>
        <h1>{{message.heading}}</h1>
        <p>{{message.text}}</p>
    </div>
</div>
</template>

<script>
module.exports = {
    replace: true,
    methods: {
        close: function() {
            this.message.heading = '';
            this.message.text = '';
        },
        shouldShow: function() {
            return this.message.heading !== '' && this.message.text !== '';
        }
    }
};
</script>
