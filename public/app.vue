<style>
body {
    margin: 0 auto;
    max-width: 900px;
    padding-left: 20px;
    padding-right: 20px;
    font-family: sans-serif;
}

.half { width: 50%; float:left;}

[v-cloak] { display: none; }

ul { list-style: none; }

.button {
    padding: 6px 10px;
    border-radius: 3px;
    background-color: #fff;
    border: 1px solid #ccc;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: #000;
}

.button-full-width { width: 100%; }

.button:hover {
    opacity: 0.8;
}

.button:disabled {
    background-color: #aaa;
}

.button:disabled:hover {
    opacity: 1;
}

.button-blue {
    background-color: blue;
    border: none;
    color: white;
}

.button-green {
    background-color: green;
    border: none;
    color: white;
}

.button-red {
    background-color: red;
    border: none;
    color: white;
}

.nav-active {
    background-color: #ddd;
    border: 1px solid #ccc;
}

.character {
    padding-top: 15px;
}

.avatar {
    display: inline-block;
    float: left;
}

.character-name {
    display: inline-block;
}

.stats {
    font-size: 12px;
    display: inline-block;
    background-color: #eee;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 10px;
    float: right;
    margin-top: 10px;
}

.stat {
    width: 50%;
    float: left;
}

.stat-name {
    font-weight: bold;
}

.character-level {
    background-color: yellow;
    color: #333;
    font-size: 24px;
    padding: 10px;
    border-radius: 36px;
    display: inline-block;
    box-shadow: 1px 1px 1px #333;
    text-align: center;
}

.xp {
    padding-top: 5px;
    padding-bottom: 5px;
}

.xp-bar {
    overflow: hidden;
    border: 1px solid #aaa;
    border-radius: 3px;
    height: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
}

.xp-bar-inner {
    background-color: #5cb85c;
    height: 100%;
    border-radius: 2px;
    transition: width .6s ease;
}

.activities-list { padding-left: 0; }

.activity {
    padding: 15px;
    border-radius: 3px;
    border: 1px solid #ccc;
    margin-top: 20px;
}

.treats-list { padding-left: 0; }

.completed-today {
    color: rgb(92, 184, 92);
    font-weight: bold;
}

</style>

<template>
<div v-component="player"></div>
<div style="width: 100%;" v-component={{view}}></div>
</template>

<script>
module.exports = {
    el: '#app',
    data: {
        view: ''
    },
    components: {
        'play-view': require('./views/play-view.vue'),
        player: require('./components/player.vue')
    }
};
</script>
