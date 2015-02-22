var vm = new Vue({
    el: '#app',
    data: {
        player: '',
        activities: '',
        treats: ''
    },
    compiled: function() {
        this.getPlayer();
        this.getActivities();
        this.getTreats();
    },
    computed: {
        xpPercent: function () {
            return (
                    (this.player.xp - this.player.xpForThisLevel)
                    /
                    (this.player.xpForNextLevel - this.player.xpForThisLevel)
                ) * 100;
        },
        completedToday: function() {
            return false;
        }
    },
    methods: {
        getPlayer: function() {
            var self = this;
            superagent.get('api/player')
                .end(function(res) {
                    self.player = res.body;
                });
        },
        getActivities: function() {
            var self = this;
            superagent.get('api/activities')
                .end(function(res) {
                    self.activities = res.body;
                });
        },
        getTreats: function() {
            var self = this;
            superagent.get('api/treats')
                .end(function(res) {
                    self.treats = res.body;
                });
        },
        performActivity: function(activity) {
            var self = this;

            superagent.post('api/activity/complete')
                .send(activity)
                .end(function(res) {
                    console.log(res.body);
                    if (self.player.level != res.body.level) {
                        alert("Congratulations! \nYou are now level " + res.body.level);
                    }

                    self.player = res.body;
                    activity.completedToday = true;
                });
        }
    }
});


var play = function () { console.log("play"); };
var newActivity = function () { console.log("newActivity"); };
var newTreat = function () { console.log("newTreat"); };
var settings = function () { console.log("settings"); };

var routes = {
    '/': play,
    '/new-activity': newActivity,
    '/new-treat': newTreat,
    '/settings': settings
};

var router = Router(routes);

router.init();
