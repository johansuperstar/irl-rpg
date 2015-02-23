<style>
.activities-list { padding-left: 0; }
</style>

<template>
<div class="half">
    <ul class="activities-list">
        <li v-repeat="activity: activities">
            <div v-component="activity-item" v-with="activity:activity"></div>
        </li>
    </ul>
    <a class="button button-full-width" href="#/new-activity">Add new</a>
</div>

<div class="half">
    <ul class="treats-list">
        <li v-repeat="treat: treats">
            <div v-component="treat-item" v-with="treat:treat"></div>
        </li>
    </ul>
    <a class="button button-full-width" href="#/new-treat">Add new</a>
</div>
</template>

<script>
var request = require('superagent');

module.exports = {
    data: function() {
        return {
            activities: '',
            treats: ''
        };
    },
    compiled: function() {
        this.getActivities();
        this.getTreats();
    },
    methods: {
        getActivities: function() {
            var self = this;
            request.get('api/activities')
                .end(function(res) {
                    self.activities = res.body;
                });
        },
        getTreats: function() {
            var self = this;
            request.get('api/treats')
                .end(function(res) {
                    self.treats = res.body;
                });
        }
    },
    components: {
        'activity-item': require('../components/activity.vue'),
        'treat-item': require('../components/treat.vue')
    }
};
</script>
