let items = [
    {
        name: `Giant's Belt`,
        id: 0,
        stat: `+200 Health`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1011.png`
    },
    {
        name: `Chain Vest`,
        id: 1,
        stat: `+20 Armor`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1031.png`
    },
    {
        name: `B. F. Sword`,
        id: 2,
        stat: `+40 Attack Damage`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1038.png`
    },
    {
        name: `Recurve Bow`,
        id: 3,
        stat: `+15% Attack Speed`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1043.png`
    },
    {
        name: `Negatron Cloak`,
        id: 4,
        stat: `+20 Magic Resist`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1057.png`
    },
    {
        name: `Needlessly Large Rod`,
        id: 5,
        stat: `+20% Spell Damage`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1058.png`
    },
    {
        name: `Tear of the Godess`,
        id: 6,
        stat: `+20 Starting Mana`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3070.png`
    },
    {
        name: `Spatula`,
        id: 7,
        stat: `It must do something...`,
        image: `https://solomid-resources.s3.amazonaws.com/blitz/tft/items/spatula.png`
    },
    {
        name: `Guardian Angel`,
        id: 8,
        stat: `Revives champ with 500 Health`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3026.png`
    },
    {
        name: `Infinity Edge`,
        id: 9,
        stat: `Critical Strikes deal +100% damage`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3031.png`
    },
    {
        name: `Seraph's Embrace`,
        id: 10,
        stat: `Regain 20 mana each time a spell is cast`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3040.png`
    },
    {
        name: `Phantom Dancer`,
        id: 11,
        stat: `Wearer dodges all critical strikes`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3046.png`
    },
    {
        name: `The Bloodthirster`,
        id: 12,
        stat: `Attacks heal for 35% of the damage`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3072.png`
    },
    {
        name: `Thornmail`,
        id: 13,
        stat: `Reflect 35% of the damage taken from attacks`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3075.png`
    },
    {
        name: `Warmog's Armor`,
        id: 14,
        stat: `Regenerate 3% max health per second`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3083.png`
    },
    {
        name: `Runaan's Hurricane`,
        id: 15,
        stat: `Attacks 2 additional enemies. These additional attacks deal 50% damage.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3085.png`
    },
    {
        name: `Statikk Shiv`,
        id: 16,
        stat: `Every 3rd attack deals 100 splash magical damage.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3087.png`
    },
    {
        name: `Rabadon's Deathcap`,
        id: 17,
        stat: `Spell Damage +50% AP`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3089.png`
    },
    {
        name: `Rapidfire Cannon`,
        id: 18,
        stat: `Wearer's attacks cannot be dodged. Attack Range is doubled.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3094.png`
    },
    {
        name: `Redemption`,
        id: 19,
        stat: `On death, heal all nearby allies for 1000 Health.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3107.png`
    },
    {
        name: `Knight's Vow`,
        id: 20,
        stat: `Wearer is also a Knight.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3109.png`
    },
    {
        name: `Frozen Heart`,
        id: 21,
        stat: `Adjacent enemies Attack Speed is 20% Slower.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3110.png`
    },
    {
        name: `Guinsoo's Rageblade`,
        id: 22,
        stat: `Attacks grant 3% Attack Speed. Stacks infinitely.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3124.png`
    },
    {
        name: `Youmuu's Ghostblade`,
        id: 23,
        stat: `Wearer is also an Assassin.`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3142.png`
    },
    {
        name: `Hextech Gunblade`,
        id: 24,
        stat: ``,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3146.png`
    },
    {
        name: `Blade of the Ruined King`,
        id: 25,
        stat: ``,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3153.png`
    },
    {
        name: `Morellonomicon`,
        id: 26,
        stat: ``,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3165.png`
    },
    {
        name: `Locket of the Iron Solari`,
        id: 27,
        stat: ``,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3190.png`
    },
    {
        name: `Luden's Echo`,
        id: 28,
        stat: ``,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3185.png`
    },
    {
        name: `Titanic Hydra`,
        id: 29,
        stat: ``,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3748.png`
    },
    {
        name: `Unidentified`,
        id: 30,
        stat: `Figure it out`,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/1001.png`
    },
    {
        name: `Titanic Hydra`,
        id: 3748,
        stat: ``,
        image: `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/3748.png`
    },
];

let builds = [
    {
        name: `Giant's Belt`,
        index: 0,
        builds: [
            {
                withItem: 0,
                intoItem: 14,
            },
            {
                withItem: 1,
                intoItem: 30,
            },
            {
                withItem: 2,
                intoItem: 30,
            },
            {
                withItem: 3,
                intoItem: 29,
            },
            {
                withItem: 4,
                intoItem: 30,
            },
            {
                withItem: 5,
                intoItem: 26,
            },
            {
                withItem: 6,
                intoItem: 19,
            },
            {
                withItem: 7,
                intoItem: 30,
            }
        ]
    },
    {
        name: 'chainvest',
        index: 1,
        builds: [
            {
                withItem: 0,
                intoItem: 30,
            },
            {
                withItem: 1,
                intoItem: 13,
            },
            {
                withItem: 2,
                intoItem: 8,
            },
            {
                withItem: 3,
                intoItem: 11,
            },
            {
                withItem: 4,
                intoItem: 30,
            },
            {
                withItem: 5,
                intoItem: 27,
            },
            {
                withItem: 6,
                intoItem: 21,
            },
            {
                withItem: 7,
                intoItem: 20,
            }
        ]
    },
    {
        name: 'bfsword',
        index: 2,
        builds: [
            {
                withItem: 0,
                intoItem: 30,
            },
            {
                withItem: 1,
                intoItem: 8,
            },
            {
                withItem: 2,
                intoItem: 9,
            },
            {
                withItem: 3,
                intoItem: 25,
            },
            {
                withItem: 4,
                intoItem: 12,
            },
            {
                withItem: 5,
                intoItem: 24,
            },
            {
                withItem: 6,
                intoItem: 30,
            },
            {
                withItem: 7,
                intoItem: 23,
            }
        ]
    },
    {
        name: 'recurvebow',
        index: 3,
        builds: [
            {
                withItem: 0,
                intoItem: 29,
            },
            {
                withItem: 1,
                intoItem: 11,
            },
            {
                withItem: 2,
                intoItem: 25,
            },
            {
                withItem: 3,
                intoItem: 18,
            },
            {
                withItem: 4,
                intoItem: 30,
            },
            {
                withItem: 5,
                intoItem: 22,
            },
            {
                withItem: 6,
                intoItem: 16,
            },
            {
                withItem: 7,
                intoItem: 30,
            }
        ]
    },
    {
        name: 'negatroncloak',
        index: 4,
        builds: [
            {
                withItem: 0,
                intoItem: 30,
            },
            {
                withItem: 1,
                intoItem: 30,
            },
            {
                withItem: 2,
                intoItem: 12,
            },
            {
                withItem: 3,
                intoItem: 30,
            },
            {
                withItem: 4,
                intoItem: 3,
            },
            {
                withItem: 5,
                intoItem: 30,
            },
            {
                withItem: 6,
                intoItem: 30,
            },
            {
                withItem: 7,
                intoItem: 15,
            }
        ]
    },
    {
        name: 'rod',
        index: 5,
        builds: [
            {
                withItem: 0,
                intoItem: 26,
            },
            {
                withItem: 1,
                intoItem: 27,
            },
            {
                withItem: 2,
                intoItem: 24,
            },
            {
                withItem: 3,
                intoItem: 22,
            },
            {
                withItem: 4,
                intoItem: 30,
            },
            {
                withItem: 5,
                intoItem: 17,
            },
            {
                withItem: 6,
                intoItem: 28,
            },
            {
                withItem: 7,
                intoItem: 30,
            }
        ]
    },
    {
        name: 'tear',
        index: 6,
        builds: [
            {
                withItem: 0,
                intoItem: 19,
            },
            {
                withItem: 1,
                intoItem: 21,
            },
            {
                withItem: 2,
                intoItem: 30,
            },
            {
                withItem: 3,
                intoItem: 16,
            },
            {
                withItem: 4,
                intoItem: 30,
            },
            {
                withItem: 5,
                intoItem: 28,
            },
            {
                withItem: 6,
                intoItem: 10,
            },
            {
                withItem: 7,
                intoItem: 30,
            }
        ]
    },
    {
        name: 'spatula',
        index: 7,
        builds: [
            {
                withItem: 0,
                intoItem: 30,
            },
            {
                withItem: 1,
                intoItem: 20,
            },
            {
                withItem: 2,
                intoItem: 23,
            },
            {
                withItem: 3,
                intoItem: 30,
            },
            {
                withItem: 4,
                intoItem: 15,
            },
            {
                withItem: 5,
                intoItem: 30,
            },
            {
                withItem: 6,
                intoItem: 30,
            },
            {
                withItem: 7,
                intoItem: 30,
            }
        ]
    },
];

export const Items = items;
export const Builds = builds;
export const BaseItems = items.slice(0, 8);