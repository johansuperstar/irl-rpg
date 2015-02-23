<style>
.treat {
    padding: 15px;
    border-radius: 3px;
    border: 1px solid #ccc;
    margin-top: 20px;
}
</style>

<template>
<div class="treat">
    <h3>{{treat.name}}</h3>
    <button class="button" style="float: right;" v-on="click: performTreat(treat)">
        <span>&#10003;</span>
    </button>
    <p>
        Cost: {{treat.cost}}
    </p>
</div>
</template>

<script>
var request = require('superagent');

module.exports = {
    replace: true,
    computed: {
        completedToday: function() {
            return false;
        }
    },
    methods: {
        performTreat: function(treat) {
            console.log(treat);
        }
    }
};
</script>
