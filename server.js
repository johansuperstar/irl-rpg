var express = require('express'),
    bodyParser = require('body-parser'),
    _ = require('lodash'),
    data = require('./app/player.js'),
    level = require('./app/level.js'),
    app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/api/player', function(req, res) {
    res.json(data.playerInfo);
});

app.get('/api/activities', function(req, res) {
    res.json(data.playerActivities);
});

app.post('/api/activity/complete', function(req, res) {
    var activity = req.body;

    var rewards = getActivityRewards(activity.difficulty);

    if (data.playerInfo.xp + rewards.xp >= data.playerInfo.xpForNextLevel) {
        data.playerInfo.level++;
        data.playerInfo.xpForThisLevel = data.playerInfo.xpForNextLevel;
        data.playerInfo.xpForNextLevel += level.xpForNextLevel(data.playerInfo.level);
    }

    data.playerInfo.xp += rewards.xp;
    data.playerInfo.coins += rewards.coins;

    activity.gains.forEach(function(gain) {
        var stat = _.find(data.playerInfo.stats, { stat: gain.stat });
        stat.value += gain.value;
    });

    res.send(data.playerInfo);
});

function getActivityRewards(difficulty) {
    if (difficulty === 'Easy') {
        return {
            xp: 25,
            coins: 10
        };
    }

    if (difficulty === 'Medium') {
        return {
            xp: 50,
            coins: 20
        };
    }

    if (difficulty === 'Hard') {
        return {
            xp: 75,
            coins: 30
        };
    }
}

app.get('/api/treats', function(req, res) {
    res.json(data.playerTreats);
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(1234);
console.log('server listening on port 1234');
