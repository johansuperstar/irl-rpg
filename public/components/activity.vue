<style>
.activity {
    padding: 15px;
    border-radius: 3px;
    border: 1px solid #ccc;
    margin-top: 20px;
}
</style>

<template>
<div class="activity">
    <p v-show="completedToday" class="completed-today">
        <span>&#10003;</span>
        Completed today
    </p>
    <h3>{{activity.name}}</h3>
    <button class="button" style="float: right;"
        v-on="click: performActivity(activity)"
        v-attr="disabled: completedToday">
        <span>&#10003;</span>
    </button>
    <p v-repeat="gain: activity.gains">
        <span style="font-size: 24px;">+{{gain.value}}</span> {{gain.stat}}
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
        performActivity: function(activity) {
            var self = this;

            request.post('api/activity/complete')
                .send(activity)
                .end(function(res) {
                    
                    var player = res.body;

                    // TODO: Send event to with new player data

                    activity.completedToday = true;
                });
        }
    }
};
</script>
