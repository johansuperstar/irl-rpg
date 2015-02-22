var playerInfo = {
    "id": "e79127ad-0f86-4706-b4a9-7f244e966237",
    "name": "johansuperstar",
    "avatar": "commissar_avatar",
    "level": 17,
    "coins": 100,
    "xp": 4200,
    "xpForNextLevel": 4400,
    "xpForThisLevel": 3900,
    "stats": [
        {
            "stat": "Stamina",
            "value": 111
        },
        {
            "stat": "Intelligence",
            "value": 99
        },
        {
            "stat": "Strength",
            "value": 66
        },
        {
            "stat": "Spirit",
            "value": 50
        }
    ]
};

var playerActivities = [
    {
        "name": "Walk",
        "lastCompletedAt": "2015-02-16T11:56:50.371Z",
        "difficulty": "Easy",
        "gains": [
            {
                "stat": "Stamina",
                "value": 1
            },
            {
                "stat": "Spirit",
                "value": 1
            }
        ]
    },
    {
        "name": "Read book",
        "lastCompletedAt": "2015-02-13T11:56:50.371Z",
        "difficulty": "Easy",
        "gains": [
            {
                "stat": "Intelligence",
                "value": 1
            },
            {
                "stat": "Spirit",
                "value": 1
            }
        ]
    },
    {
        "name": "Go to the gym",
        "lastCompletedAt": "2015-02-13T11:56:50.371Z",
        "difficulty": "Medium",
        "gains": [
            {
                "stat": "Strength",
                "value": 2
            },
            {
                "stat": "Stamina",
                "value": 1
            }
        ]
    }
];

var playerTreats = [
    {
        "name": "Eat candy",
        "cost": 30
    },
    {
        "name": "Watch tv series episode",
        "cost": 10
    }
];

module.exports = {
    playerInfo: playerInfo,
    playerActivities: playerActivities,
    playerTreats: playerTreats
};
