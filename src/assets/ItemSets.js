const itemDDragonLink = process.env.PUBLIC_URL + '/items/';
let items = [
    {
        name: `Giant's Belt`,
        id: 0,
        stat: `+200 Health`,
        image: `${itemDDragonLink}1011.png`
    },
    {
        name: `Chain Vest`,
        id: 1,
        stat: `+20 Armor`,
        image: `${itemDDragonLink}1031.png`
    },
    {
        name: `B. F. Sword`,
        id: 2,
        stat: `+40 Attack Damage`,
        image: `${itemDDragonLink}1038.png`
    },
    {
        name: `Recurve Bow`,
        id: 3,
        stat: `+15% Attack Speed`,
        image: `${itemDDragonLink}1043.png`
    },
    {
        name: `Negatron Cloak`,
        id: 4,
        stat: `+20 Magic Resist`,
        image: `${itemDDragonLink}1057.png`
    },
    {
        name: `Needlessly Large Rod`,
        id: 5,
        stat: `+20% Spell Damage`,
        image: `${itemDDragonLink}1058.png`
    },
    {
        name: `Tear of the Godess`,
        id: 6,
        stat: `+20 Starting Mana`,
        image: `${itemDDragonLink}3070.png`
    },
    {
        name: `Spatula`,
        id: 7,
        stat: `It must do something...`,
        image: `${itemDDragonLink}spatula.png`
    },
    {
        name: `Guardian Angel`,
        id: 8,
        stat: `Revives champ with 500 Health`,
        image: `${itemDDragonLink}3026.png`
    },
    {
        name: `Infinity Edge`,
        id: 9,
        stat: `Critical Strikes deal +100% damage`,
        image: `${itemDDragonLink}3031.png`
    },
    {
        name: `Seraph's Embrace`,
        id: 10,
        stat: `Regain 20 mana each time a spell is cast`,
        image: `${itemDDragonLink}3040.png`
    },
    {
        name: `Phantom Dancer`,
        id: 11,
        stat: `Wearer dodges all critical strikes`,
        image: `${itemDDragonLink}3046.png`
    },
    {
        name: `The Bloodthirster`,
        id: 12,
        stat: `Attacks heal for 35% of the damage`,
        image: `${itemDDragonLink}3072.png`
    },
    {
        name: `Thornmail`,
        id: 13,
        stat: `Reflect 35% of the damage taken from attacks`,
        image: `${itemDDragonLink}3075.png`
    },
    {
        name: `Warmog's Armor`,
        id: 14,
        stat: `Regenerate 3% max health per second`,
        image: `${itemDDragonLink}3083.png`
    },
    {
        name: `Runaan's Hurricane`,
        id: 15,
        stat: `Attacks 2 additional enemies. These additional attacks deal 25% damage.`,
        image: `${itemDDragonLink}3085.png`
    },
    {
        name: `Statikk Shiv`,
        id: 16,
        stat: `Every 3rd attack deals 100 splash magical damage.`,
        image: `${itemDDragonLink}3087.png`
    },
    {
        name: `Rabadon's Deathcap`,
        id: 17,
        stat: `Spell Damage +50% AP`,
        image: `${itemDDragonLink}3089.png`
    },
    {
        name: `Rapidfire Cannon`,
        id: 18,
        stat: `Wearer's attacks cannot be dodged. Attack Range is doubled.`,
        image: `${itemDDragonLink}3094.png`
    },
    {
        name: `Redemption`,
        id: 19,
        stat: `On death, heal all nearby allies for 1000 Health.`,
        image: `${itemDDragonLink}3107.png`
    },
    {
        name: `Knight's Vow`,
        id: 20,
        stat: `Wearer is also a Knight.`,
        image: `${itemDDragonLink}3109.png`
    },
    {
        name: `Frozen Heart`,
        id: 21,
        stat: `Adjacent enemies Attack Speed is 20% Slower.`,
        image: `${itemDDragonLink}3110.png`
    },
    {
        name: `Guinsoo's Rageblade`,
        id: 22,
        stat: `Attacks grant 3% Attack Speed. Stacks infinitely.`,
        image: `${itemDDragonLink}3124.png`
    },
    {
        name: `Youmuu's Ghostblade`,
        id: 23,
        stat: `Wearer is also an Assassin.`,
        image: `${itemDDragonLink}3142.png`
    },
    {
        name: `Hextech Gunblade`,
        id: 24,
        stat: `Heal for 25% of all damage dealt.`,
        image: `${itemDDragonLink}3146.png`
    },
    {
        name: `Blade of the Ruined King`,
        id: 25,
        stat: `Wearer is also a Blademaster.`,
        image: `${itemDDragonLink}3153.png`
    },
    {
        name: `Morellonomicon`,
        id: 26,
        stat: `Spells burn 2.5% of the enemy max HP per second.`,
        image: `${itemDDragonLink}3165.png`
    },
    {
        name: `Locket of the Iron Solari`,
        id: 27,
        stat: `On start of combat, adjacent allies get 200 shield.`,
        image: `${itemDDragonLink}3190.png`
    },
    {
        name: `Luden's Echo`,
        id: 28,
        stat: `Deal 200 splash damage on ability hit.`,
        image: `${itemDDragonLink}3285.png`
    },
    {
        name: `Titanic Hydra`,
        id: 29,
        stat: `Attacks deal 10% of the wearer's max HP as splash.`,
        image: `${itemDDragonLink}3748.png`
    },
    {
        name: `Sword of the Divine`,
        id: 30,
        stat: `Every 1s gain a 5% chance to gain 100% Critical Strike.`,
        image: `${itemDDragonLink}swordofthedivine.png`
    },
    {
        name: `Zeke's Herald`,
        id: 31,
        stat: `Allies two spaces to the left and right of the wearer gain +15% Attack Speed.`,
        image: `${itemDDragonLink}zekesherald.png`
    },
    {
        name: `Spear of Shojin`,
        id: 32,
        stat: `After casting, gain 15% of max mana per attack.`,
        image: `${itemDDragonLink}spearofshojin.png`
    },
    {
        name: `Zephyr`,
        id: 33,
        stat: `On start of combat banish an enemy.`,
        image: `${itemDDragonLink}zephyr.png`
    },
    {
        name: `Red Buff`,
        id: 34,
        stat: `Attacks burn for 2.5% max HP and disable healing.`,
        image: `${itemDDragonLink}redbuff.png`
    },
    {
        name: `Frozen Mallet`,
        id: 35,
        stat: `Wearer is also a Glacial.`,
        image: `${itemDDragonLink}3022.png`
    },
    {
        name: `Sword Breaker`,
        id: 36,
        stat: `Attacks have a chance to disarm.`,
        image: `${itemDDragonLink}swordbreaker.png`
    },
    {
        name: `Cursed Blade`,
        id: 37,
        stat: `Attacks have a low chance to Shrink (-1 enemy star level 1).`,
        image: `${itemDDragonLink}cursedblade.png`
    },
    {
        name: `Ionic Spark`,
        id: 38,
        stat: `Whenever an enemy casts a spell they take 200 damage.`,
        image: `${itemDDragonLink}ionicspark.png`
    },
    {
        name: `Hush`,
        id: 39,
        stat: `Attacks have a high chance to Silence.`,
        image: `${itemDDragonLink}hush.png`
    },
    {
        name: `Yuumi`,
        id: 40,
        stat: `Wearer is also a Sorcerer.`,
        image: `${itemDDragonLink}yuumi.png`
    },
    {
        name: `Darkin`,
        id: 41,
        stat: `Wearer is also a Demon.`,
        image: `${itemDDragonLink}darkin.png`
    },
    {
        name: `Force of Nature`,
        id: 42,
        stat: `Gain +1 team size.`,
        image: `${itemDDragonLink}4401.png`
    },
    {
        name: `Dragon's Claw`,
        id: 43,
        stat: `Gain 83% resistance to magic damage.`,
        image: `${itemDDragonLink}dragonsclaw.png`
    },
];


// let builds = [
//     {
//         name: `Giant's Belt`,
//         index: 0,
//         builds: [
//             {
//                 withItem: 0,
//                 intoItem: 14,
//             },
//             {
//                 withItem: 1,
//                 intoItem: 34,
//             },
//             {
//                 withItem: 2,
//                 intoItem: 31,
//             },
//             {
//                 withItem: 3,
//                 intoItem: 29,
//             },
//             {
//                 withItem: 4,
//                 intoItem: 33,
//             },
//             {
//                 withItem: 5,
//                 intoItem: 26,
//             },
//             {
//                 withItem: 6,
//                 intoItem: 19,
//             },
//             {
//                 withItem: 7,
//                 intoItem: 35,
//             }
//         ]
//     },
//     {
//         name: 'chainvest',
//         index: 1,
//         builds: [
//             {
//                 withItem: 0,
//                 intoItem: 34,
//             },
//             {
//                 withItem: 1,
//                 intoItem: 13,
//             },
//             {
//                 withItem: 2,
//                 intoItem: 8,
//             },
//             {
//                 withItem: 3,
//                 intoItem: 11,
//             },
//             {
//                 withItem: 4,
//                 intoItem: 36,
//             },
//             {
//                 withItem: 5,
//                 intoItem: 27,
//             },
//             {
//                 withItem: 6,
//                 intoItem: 21,
//             },
//             {
//                 withItem: 7,
//                 intoItem: 20,
//             }
//         ]
//     },
//     {
//         name: 'bfsword',
//         index: 2,
//         builds: [
//             {
//                 withItem: 0,
//                 intoItem: 31,
//             },
//             {
//                 withItem: 1,
//                 intoItem: 8,
//             },
//             {
//                 withItem: 2,
//                 intoItem: 9,
//             },
//             {
//                 withItem: 3,
//                 intoItem: 30,
//             },
//             {
//                 withItem: 4,
//                 intoItem: 12,
//             },
//             {
//                 withItem: 5,
//                 intoItem: 24,
//             },
//             {
//                 withItem: 6,
//                 intoItem: 32,
//             },
//             {
//                 withItem: 7,
//                 intoItem: 23,
//             }
//         ]
//     },
//     {
//         name: 'recurvebow',
//         index: 3,
//         builds: [
//             {
//                 withItem: 0,
//                 intoItem: 29,
//             },
//             {
//                 withItem: 1,
//                 intoItem: 11,
//             },
//             {
//                 withItem: 2,
//                 intoItem: 30,
//             },
//             {
//                 withItem: 3,
//                 intoItem: 18,
//             },
//             {
//                 withItem: 4,
//                 intoItem: 37,
//             },
//             {
//                 withItem: 5,
//                 intoItem: 22,
//             },
//             {
//                 withItem: 6,
//                 intoItem: 16,
//             },
//             {
//                 withItem: 7,
//                 intoItem: 25,
//             }
//         ]
//     },
//     {
//         name: 'negatroncloak',
//         index: 4,
//         builds: [
//             {
//                 withItem: 0,
//                 intoItem: 33,
//             },
//             {
//                 withItem: 1,
//                 intoItem: 36,
//             },
//             {
//                 withItem: 2,
//                 intoItem: 12,
//             },
//             {
//                 withItem: 3,
//                 intoItem: 37,
//             },
//             {
//                 withItem: 4,
//                 intoItem: 43,
//             },
//             {
//                 withItem: 5,
//                 intoItem: 38,
//             },
//             {
//                 withItem: 6,
//                 intoItem: 39,
//             },
//             {
//                 withItem: 7,
//                 intoItem: 15,
//             }
//         ]
//     },
//     {
//         name: 'rod',
//         index: 5,
//         builds: [
//             {
//                 withItem: 0,
//                 intoItem: 26,
//             },
//             {
//                 withItem: 1,
//                 intoItem: 27,
//             },
//             {
//                 withItem: 2,
//                 intoItem: 24,
//             },
//             {
//                 withItem: 3,
//                 intoItem: 22,
//             },
//             {
//                 withItem: 4,
//                 intoItem: 38,
//             },
//             {
//                 withItem: 5,
//                 intoItem: 17,
//             },
//             {
//                 withItem: 6,
//                 intoItem: 28,
//             },
//             {
//                 withItem: 7,
//                 intoItem: 40,
//             }
//         ]
//     },
//     {
//         name: 'tear',
//         index: 6,
//         builds: [
//             {
//                 withItem: 0,
//                 intoItem: 19,
//             },
//             {
//                 withItem: 1,
//                 intoItem: 21,
//             },
//             {
//                 withItem: 2,
//                 intoItem: 32,
//             },
//             {
//                 withItem: 3,
//                 intoItem: 16,
//             },
//             {
//                 withItem: 4,
//                 intoItem: 39,
//             },
//             {
//                 withItem: 5,
//                 intoItem: 28,
//             },
//             {
//                 withItem: 6,
//                 intoItem: 10,
//             },
//             {
//                 withItem: 7,
//                 intoItem: 41,
//             }
//         ]
//     },
//     {
//         name: 'spatula',
//         index: 7,
//         builds: [
//             {
//                 withItem: 0,
//                 intoItem: 35,
//             },
//             {
//                 withItem: 1,
//                 intoItem: 20,
//             },
//             {
//                 withItem: 2,
//                 intoItem: 23,
//             },
//             {
//                 withItem: 3,
//                 intoItem: 25,
//             },
//             {
//                 withItem: 4,
//                 intoItem: 15,
//             },
//             {
//                 withItem: 5,
//                 intoItem: 40,
//             },
//             {
//                 withItem: 6,
//                 intoItem: 41,
//             },
//             {
//                 withItem: 7,
//                 intoItem: 42,
//             }
//         ]
//     },
// ];
let compositions = {
    8 : [ 1, 2 ],
    9 : [ 2, 2 ],
    10 : [ 6, 6 ],
    11 : [ 1, 3 ],
    12 : [ 2, 4 ],
    13 : [ 1, 1 ],
    14 : [ 0, 0 ],
    15 : [ 4, 7 ],
    16 : [ 3, 6 ],
    17 : [ 5, 5 ],
    18 : [ 3, 3 ],
    19 : [ 0, 6 ],
    20 : [ 1, 7 ],
    21 : [ 1, 6 ],
    22 : [ 3, 5 ],
    23 : [ 2, 7 ],
    24 : [ 2, 5 ],
    25 : [ 3, 7 ],
    26 : [ 0, 5 ],
    27 : [ 1, 5 ],
    28 : [ 5, 6 ],
    29 : [ 0, 3 ],
    30 : [ 2, 3 ],
    31 : [ 0, 2 ],
    32 : [ 2, 6 ],
    33 : [ 0, 4 ],
    34 : [ 0, 1 ],
    35 : [ 0, 7 ],
    36 : [ 1, 4 ],
    37 : [ 3, 4 ],
    38 : [ 4, 5 ],
    39 : [ 4, 6 ],
    40 : [ 5, 7 ],
    41 : [ 6, 7 ],
    42 : [ 7, 7 ],
    43 : [ 4, 4 ]
};

let decompositions = [
    [ 14, 34, 31, 29, 33, 26, 19, 35 ],
    [ 34, 13,  8, 11, 36, 27, 21, 20 ],
    [ 31,  8,  9, 30, 12, 24, 32, 23 ],
    [ 29, 11, 30, 18, 37, 22, 16, 25 ],
    [ 33, 36, 12, 37, 43, 38, 39, 15 ],
    [ 26, 27, 24, 22, 38, 17, 28, 40 ],
    [ 19, 21, 32, 16, 39, 28, 10, 41 ],
    [ 35, 20, 23, 25, 15, 40, 41, 42 ]
]

let itemStats = {

}

export const Items = items;
// export const Builds = builds;
export const Compositions = compositions;
export const Decompositions = decompositions;
export const BaseItems = items.slice(0, 8);
export const TotalItems = items.length;