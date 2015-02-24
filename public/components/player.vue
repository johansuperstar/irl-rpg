<style>

</style>

<template>
<div class="character">
    <img src="avatars/commissar_avatar.png" alt="{{player.avatar}}" class="avatar" />
    <h2 class="character-name">{{player.name}}</h2>
    <span class="character-level">{{player.level}}</span>

    <div class="stats">
        <div v-repeat="stat: player.stats" class="stat">
            <span class="stat-name">{{stat.stat}}:</span>
            <span>{{stat.value}}</span>
        </div>
    </div>

    <div class="xp">
        <p style="float: left; margin-right: 15px; font-size: 0.9em;">XP: {{player.xp}} / {{player.xpForNextLevel}}</p>

        <div class="xp-bar">
            <div class="xp-bar-inner" style="width: {{xpPercent}}%;"></div>
        </div>
    </div>

    <div class="coins" style="font-size: 0.9em;">
        Coins: {{player.coins}}
    </div>

    <div>
        <a href="#/settings">Settings</a>
    </div>
</div>
</template>

<script>
module.exports = {
    replace: true,
    computed: {
        xpPercent: function () {
            return (
                (this.player.xp - this.player.xpForThisLevel)
                /
                (this.player.xpForNextLevel - this.player.xpForThisLevel)
            ) * 100;
        }
    }
};
</script>
