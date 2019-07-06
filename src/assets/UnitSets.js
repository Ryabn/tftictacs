let traitIconLink = process.env.PUBLIC_URL + '/icons/trait_icon_';
const classes = [
    {
        name: 'Assassins',
        text: 'Assassins leap to the farthest enemy at the start of combat and deal additional Critical Strike Damage.',
        image: `${traitIconLink}assassin.png`,
        id: 0,
        color: '#451363',
        bonus: [{
                count: 3,
                text: '+150% critical strike damage.'
            },
            {
                count: 6,
                text: '+350% critical strike damage.'
            }
        ],
        units: [ 4, 18, 23, 27, 29, 33, 37 ]
    },
    {
        name: 'Blademasters',
        text: 'Blademasters have a 35% chance to strike additional times each attack.',
        image: `${traitIconLink}blademaster.png`,
        id: 1,
        color: '#BBCFE7',
        bonus: [{
                count: 3,
                text: 'One additional strike.'
            },
            {
                count: 6,
                text: 'Two additional strikes.'
            }
        ],
        units: [ 0, 20, 24, 28, 40, 50 ]
    },
    {
        name: 'Brawlers',
        text: 'Brawlers receive bonus maximum health.',
        image: `${traitIconLink}brawler.png`,
        id: 2,
        color: '#EC7D1E',
        bonus: [{
                count: 2,
                text: '+300 Bonus health.'
            },
            {
                count: 4,
                text: '+700 Bonus health.'
            }
        ],
        units: [ 9, 12, 19, 26, 36 ]
    },
    {
        name: 'Elementalists',
        text: 'Elementalists gain double mana from attacks.',
        image: `${traitIconLink}elementalist.png`,
        id: 3,
        color: '#815A5E',
        bonus: [
            {
                count: 3,
                text: 'At the start of combat, summon an Elemental.'
            }
        ],
        units: [ 15, 30, 39, 45 ]
    },
    {
        name: 'Guardians',
        text: '',
        image: `${traitIconLink}guardian.png`,
        id: 4,
        color: '#F0D68A',
        bonus: [
            {
                count: 2,
                text: 'At the start of combat, all Guardians and adjacent allies receive +30 armor.'
            }
        ],
        units: [ 13, 43 ]
    },
    {
        name: 'Gunslingers',
        text: 'After attacking, Gunslingers have a 50% chance to fire additional attacks.',
        image: `${traitIconLink}gunslinger.png`,
        id: 5,
        color: '#956950',
        bonus: [
            {
                count: 2,
                text: 'Attack another random enemy.'
            },
            {
                count: 4,
                text: 'Attack all enemies in range.'
            }
        ],
        units: [ 2, 7, 16, 28, 48 ]
    },
    {
        name: 'Knights',
        text: 'Knights block damage from basic attacks.',
        image: `${traitIconLink}knight.png`,
        id: 6,
        color: '#8EA9D1',
        bonus: [
            {
                count: 2,
                text: '20 damage blocked.'
            },
            {
                count: 4,
                text: '40 damage blocked.'
            },
            {
                count: 6,
                text: '80 damage blocked.'
            }
        ],
        units: [ 1, 5, 10, 32, 44, 47 ]
    },
    {
        name: 'Rangers',
        text: 'Rangers have a chance to double their attack speed for the next 3s.',
        image: `${traitIconLink}ranger.png`,
        id: 7,
        color: '#8DDABD',
        bonus: [
            {
                count: 2,
                text: '25% chance.'
            },
            {
                count: 4,
                text: '65% chance.'
            }
        ],
        units: [ 8, 22, 25, 42 ]
    },
    {
        name: 'Shapeshifters',
        text: 'Shapeshifters gain bonus maximum Health when they transform.',
        image: `${traitIconLink}shapeshifter.png`,
        id: 8,
        color: '#87456B',
        bonus: [
            {
                count: 3,
                text: '+100% max health'
            }
        ],
        units: [ 6, 14, 34, 41, 49 ]
    },
    {
        name: 'Sorcerers',
        text: 'Sorcerers gain double mana from attacking and allies have increased spell damage.',
        image: `${traitIconLink}sorcerer.png`,
        id: 9,
        color: '#6075D9',
        bonus: [
            {
                count: 3,
                text: '+35% spell damage'
            },
            {
                count: 6,
                text: '+100% spell damage'
            }
        ],
        units: [ 3, 11, 17, 31, 35, 38, 46 ]
    },
];
const origins = [
    {
        name: 'Demon',
        text: 'Attacks from Demons have a chance to burn all of an enemy\'s mana and deal that much true damage.',
        image: `${traitIconLink}demon.png`,
        id: 10,
        color: '#8D4269',
        bonus: [{
                count: 2,
                text: '+40% change on hit to Mana Burn'
            },
            {
                count: 4,
                text: '+60% change on hit to Mana Burn'
            },
            {
                count: 6,
                text: '+80% change on hit to Mana Burn'
            }
        ],
        units: [ 14, 22, 24, 27, 31, 39, 49 ]
    },
    {
        name: 'Dragon',
        text: '',
        image: `${traitIconLink}dragon.png`,
        id: 11,
        color: '#C92B2C',
        bonus: [{
                count: 2,
                text: 'Dragons are immune to Magic damage'
            }
        ],
        units: [ 34, 38 ]
    },
    {
        name: 'Exile',
        text: '',
        image: `${traitIconLink}exile.png`,
        id: 12,
        color: '#B8B7A3',
        bonus: [{
                count: 1,
                text: 'If an Exile has no adjacent allies at the start of combat, they gain a shield equal to a 100% max health.'
            }
        ],
        units: [ 50 ]
    },
    {
        name: 'Glacial',
        text: 'On hit, Glacials have a chance to stun for 2s.',
        image: `${traitIconLink}glacial.png`,
        id: 13,
        color: '#66DFFF',
        bonus: [
            {
                count: 2,
                text: '25% chance'
            },
            {
                count: 4,
                text: '35% chance'
            },
            {
                count: 6,
                text: '45% chance'
            },
        ],
        units: [ 13, 15, 25, 26, 44, 45 ]
    },
    {
        name: 'Robot',
        text: '',
        image: `${traitIconLink}robot.png`,
        id: 14,
        color: '#BDAB69',
        bonus: [
            {
                count: 1,
                text: ' Robots start combat at full mana.'
            }
        ],
        units: [ 12 ]
    },
    {
        name: 'Imperial',
        text: 'Imperials deal Double Damage.',
        image: `${traitIconLink}imperial.png`,
        id: 15,
        color: '#80000B',
        bonus: [
            {
                count: 2,
                text: '1 random Imperial'
            },
            {
                count: 4,
                text: 'All Imperials'
            }
        ],
        units: [ 10, 29, 40, 49 ]
    },
    {
        name: 'Noble',
        text: 'Nobles grant +100 Armor and heal for 35 on hit',
        image: `${traitIconLink}noble.png`,
        id: 16,
        color: '#EBDE16',
        bonus: [
            {
                count: 3,
                text: '1 random ally'
            },
            {
                count: 6,
                text: 'All allies'
            }
        ],
        units: [ 0, 1, 8, 16, 43, 47 ]
    },
    {
        name: 'Ninja',
        text: 'Ninjas gain a percentage of Attack Damage.',
        image: `${traitIconLink}ninja.png`,
        id: 17,
        color: '#B61056',
        bonus: [
            {
                count: 1,
                text: '1 Ninja only: Ninja gains +40% Attack Damage'
            },
            {
                count: 4,
                text: '4 Ninjas: All Ninjas gain +80% Attack Damage'
            }
        ],
        units: [ 20, 23, 30, 37 ]
    },
    {
        name: 'Pirate',
        text: '',
        image: `${traitIconLink}pirate.png`,
        id: 18,
        color: '#808101',
        bonus: [
            {
                count: 3,
                text: 'Earn up to 4 additional gold after combat against another player.'
            }
        ],
        units: [ 2, 18, 28, 48 ]
    },
    {
        name: 'Phantom',
        text: '',
        image: `${traitIconLink}phantom.png`,
        id: 19,
        color: '#52997F',
        bonus: [
            {
                count: 2,
                text: 'Curse a random enemy at the start of combat, setting their HP to 100.'
            }
        ],
        units: [ 5, 42, 46 ]
    },
    {
        name: 'Wild',
        text: 'Attacks generate stacks of Fury (up to 5). Each stack of Fury grants 7% Attack Speed.',
        image: `${traitIconLink}wild.png`,
        id: 20,
        color: '#51B241',
        bonus: [
            {
                count: 2,
                text: 'Wild allies only'
            },
            {
                count: 4,
                text: 'All allies'
            }
        ],
        units: [ 6, 9, 11, 33, 41 ]
    },
    {
        name: 'Void',
        text: '',
        image: `${traitIconLink}void.png`,
        id: 21,
        color: '#594A73',
        bonus: [
            {
                count: 3,
                text: 'Your team\'s basic attacks ignore 50% of the enemy\'s Armor.'
            }
        ],
        units: [ 3, 4, 19, 36 ]
    },
    {
        name: 'Yordle',
        text: 'Attacks against ally Yordles have a chance to miss.',
        image: `${traitIconLink}yordle.png`,
        id: 22,
        color: '#EA9069',
        bonus: [
            {
                count: 3,
                text: '25% chance to miss.'
            },
            {
                count: 6,
                text: '60% chance to miss.'
            }
        ],
        units: [ 7, 17, 30, 32,35, 41 ]
    }    

];
const unitIconLink = process.env.PUBLIC_URL + '/units/';
const unitSplashLink = process.env.PUBLIC_URL + '/units/tft_';
const units = [{
        name: 'Fiora',
        id: 0,
        icon: `${unitIconLink}Fiora.png`,
        splash: `${unitSplashLink}fiora.png`,
        cost: 1,
        origin: ['Noble'],
        class: ['Blademaster'],
        ability: 'Becomes immune to damage and spells for 1.5s, and then stuns for 1.5s and deals [ 100 / 175 / 250 ] magic damage to the closest enemy.',
        stats: {
            dps: [ 28, 50, 101 ],
            as: 0.7,
            damage: [ 40, 72, 144 ],
            range: 1,
            armor: 25,
            mr: 20,
            health: [ 400, 720, 1440 ],
            critChance: 25
        }
    },
    {
        name: 'Garen',
        id: 1,
        icon: `${unitIconLink}Garen.png`,
        splash: `${unitSplashLink}garen.png`,
        cost: 1,
        origin: ['Noble'],
        class: ['Knight'],
        ability: 'Garen rapidly spins his sword around his body for 4s, becoming immune to magic damage and dealing up to [ 450 / 585 / 720 ] damage to nearby enemies. (9 ticks dealing [ 50 / 65 / 80 ] damage per tick)',
        stats: {
            dps: [ 30, 54, 109 ],
            as: 0.55,
            damage: [ 55, 99, 198 ],
            range: 1,
            armor: 35,
            mr: 20,
            health: [ 600, 1080, 2160 ],
            critChance: 25
        },
        notes: [
            'Morellonomicon procs on every tick of Garen\'s spin dealing up to 22.5% of a unit\'s max health'
        ]
    },
    {
        name: 'Graves',
        id: 2,
        icon: `${unitIconLink}Graves.png`,
        splash: `${unitSplashLink}graves.png`,
        cost: 1,
        origin: ['Pirate'],
        class: ['Gunslinger'],
        ability: 'Basic attacks deal [ 5% / 10% / 15% ] increased physical damage and hit all enemies in front of him.',
        stats: {
            dps: [ 28, 50, 99 ],
            as: 0.5,
            damage: [ 55, 99, 198 ],
            range: 1,
            armor: 20,
            mr: 20,
            health: [ 500, 900, 1800 ],
            critChance: 25
        }
    },
    {
        name: 'Kassadin',
        id: 3,
        icon: `${unitIconLink}Kassadin.png`,
        splash: `${unitSplashLink}kassadin.png`,
        cost: 1,
        origin: ['Void'],
        class: ['Sorcerer'],
        ability: '(Passive) Basic attacks steal [ 20 / 40 / 60 ] mana, converting it into a shield for 4 seconds.',
        stats: {
            dps: [ 29, 53, 105 ],
            as: 0.65,
            damage: [ 45, 81, 162 ],
            range: 1,
            armor: 25,
            mr: 20,
            health: [ 550, 990, 1980 ],
            critChance: 25
        }
    },
    {
        name: 'Kha\'zix',
        id: 4,
        icon: `${unitIconLink}Khazix.png`,
        splash: `${unitSplashLink}khazix.png`,
        cost: 1,
        origin: ['Void'],
        class: [0],
        ability: 'Deals [ 150 / 250 / 350 ] magic damage to the target enemy. This ability deals [ 400 / 600 / 800 ] extra magic damage if the target has no allies adjacent to them.',
        stats: {
            dps: [ 30, 54, 108 ],
            as: 0.6,
            damage: [ 50, 90, 180 ],
            range: 1,
            armor: 20,
            mr: 20,
            health: [ 500, 900, 1800 ],
            critChance: 25
        }
    },
    {
        name: 'Mordekaiser',
        id: 5,
        icon: `${unitIconLink}Mordekaiser.png`,
        splash: `${unitSplashLink}mordekaiser.png`,
        cost: 1,
        origin: ['Phantom'],
        class: ['Knight'],
        ability: 'Slams his mace in front of him, dealing [ 200 / 325 / 450 ] magic damage to two enemies in a line 3 hexes away.',
        stats: {
            dps: [ 25, 45, 90 ],
            as: 0.5,
            damage: [ 50, 90, 180 ],
            range: 1,
            armor: 35,
            mr: 20,
            health: [ 500, 900, 1800 ],
            critChance: 25
        }
    },
    {
        name: 'Nidalee',
        id: 6,
        icon: `${unitIconLink}Nidalee.png`,
        splash: `${unitSplashLink}nidalee.png`,
        cost: 1,
        origin: ['Wild'],
        class: ['Shapeshifter'],
        ability: 'After a .5s delay, heals herself and the weakest ally for [ 150 / 375 / 600 ] over 6 seconds, then transforms into a melee attacker, gaining [ 20 / 70 / 120 ] attack damage.',
        stats: {
            dps: [ 33, 59, 117 ],
            as: 0.65,
            damage: [ 50, 90, 180 ],
            range: 3,
            armor: 20,
            mr: 20,
            health: [ 500, 900, 1800 ],
            critChance: 25
        }
    },
    {
        name: 'Tristana',
        id: 7,
        icon: `${unitIconLink}Tristana.png`,
        splash: `${unitSplashLink}tristana.png`,
        cost: 1,
        origin: ['Yordle'],
        class: ['Gunslinger'],
        ability: 'Places a bomb on her current target that detonates after 4 seconds or 4 attacks, dealing [ 150 / 225 / 300  ] magic damage to enemies up to 2 hexes away. The damage is increased by 50 percent with each attack.',
        stats: {
            dps: [ 35, 63, 126 ],
            as: 0.7,
            damage: [ 50, 90, 180 ],
            range: 4,
            armor: 20,
            mr: 20,
            health: [ 500, 900, 1800 ],
            critChance: 25
        }
    },
    {
        name: 'Vayne',
        id: 8,
        icon: `${unitIconLink}Vayne.png`,
        splash: `${unitSplashLink}vayne.png`,
        cost: 1,
        origin: ['Noble'],
        class: ['Ranger'],
        ability: '(Passive) Every third attack against the same target deals [ 8% / 10% / 12% ] percent of the target’s maximum health as bonus true damage.',
        stats: {
            dps: [ 27, 49, 97 ],
            as: 0.6,
            damage: [ 45, 81, 162 ],
            range: 3,
            armor: 25,
            mr: 20,
            health: [ 550, 990, 1980 ],
            critChance: 25
        },
        notes: [
            'Vayne\'s passive stacks with other Vaynes. For ex. if 3 Vaynes attack the same target, they will instantly proc her passive if they all auto together'
        ]
    },
    {
        name: 'Warwick',
        id: 9,
        icon: `${unitIconLink}Warwick.png`,
        splash: `${unitSplashLink}warwick.png`,
        cost: 1,
        origin: ['Wild'],
        class: [ 2 ],
        ability: 'Pounces onto the lowest health enemy, stunning them for 1.5s dealing [ 150 / 225 / 300 ] magic damage over 3 hits and healing over the duration.',
        stats: {
            dps: [ 30, 54, 108 ],
            as: 0.6,
            damage: [ 50, 90, 180 ],
            range: 1,
            armor: 30,
            mr: 20,
            health: [ 600, 1080, 2160 ],
            critChance: 25
        },
    },
    {
        name: 'Darius',
        id: 10,
        icon: `${unitIconLink}Darius.png`,
        splash: `${unitSplashLink}darius.png`,
        cost: 1,
        origin: ['Imperial'],
        class: ['Knight'],
        ability: 'Deals [ 150 / 200 / 250 ] magic damage to all nearby enemies and heals himself for [ 100 / 150 / 200 ] for each enemy hit.',
        stats: {
            dps: [ 25, 45, 90 ],
            as: 0.5,
            damage: [ 50, 90, 180 ],
            range: 1,
            armor: 25,
            mr: 20,
            health: [ 600, 1080, 2160 ],
            critChance: 25
        },
    },
    {
        name: 'Ahri',
        id: 11,
        icon: `${unitIconLink}Ahri.png`,
        splash: `${unitSplashLink}ahri.png`,
        cost: 2,
        origin: ['Wild'],
        class: ['Sorcerer'],
        ability: 'Fires an orb in a line that returns to her, dealing [ 100 / 175 / 250 ] magic damage to enemies it passes through.',
        stats: {
            dps: [ 28, 50, 99 ],
            as: 0.55,
            damage: [ 50, 90, 180 ],
            range: 3,
            armor: 20,
            mr: 20,
            health: [ 450, 810, 1620 ],
            critChance: 25
        },
    },
    {
        name: 'Blitzcrank',
        id: 12,
        icon: `${unitIconLink}Blitzcrank.png`,
        splash: `${unitSplashLink}blitzcrank.png`,
        cost: 2,
        origin: ['Robot'],
        class: [2],
        ability: 'Pulls the farthest enemy into melee range, stunning them for 2.5s, dealing [ 100 / 450 / 800 ] magic damage, and knocks them up.',
        stats: {
            dps: [ 25, 45, 90 ],
            as: 0.5,
            damage: [ 50, 90, 180 ],
            range: 1,
            armor: 35,
            mr: 20,
            health: [ 600, 1080, 2160 ],
            critChance: 25
        },
    },
    {
        name: 'Braum',
        id: 13,
        icon: `${unitIconLink}Braum.png`,
        splash: `${unitSplashLink}braum.png`,
        cost: 2,
        origin: ['Glacial'],
        class: ['Guardian'],
        ability: 'Raises a barrier for 4 seconds that redirects all incoming damage to Braum, and reduces damage he takes through the shield by [ 60 / 75 / 90 ].',
        stats: {
            dps: [ 24, 43, 86 ],
            as: 0.6,
            damage: [ 40, 72, 144 ],
            range: 1,
            armor: 25,
            mr: 20,
            health: [ 750, 1350, 2700 ],
            critChance: 25
        }
    },
    {
        name: 'Elise',
        id: 14,
        icon: `${unitIconLink}Elise.png`,
        splash: `${unitSplashLink}elise.png`,
        cost: 2,
        origin: ['Demon'],
        class: ['Shapeshifter'],
        ability: 'Summons [ 2 / 3 / 4 ] Spiderlings with 500 health each and transforms into a spider for 60 seconds, gaining [ 60% / 90% / 120% ] life steal. ',
        stats: {
            dps: [ 24, 43, 86 ],
            as: 0.6,
            damage: [ 40, 72, 144 ],
            range: 2,
            armor: 25,
            mr: 20,
            health: [ 500, 900, 1800 ],
            critChance: 25
        }
    },
    {
        name: 'Lissandra',
        id: 15,
        icon: `${unitIconLink}Lissandra.png`,
        splash: `${unitSplashLink}lissandra.png`,
        cost: 2,
        origin: ['Glacial'],
        class: ['Elementalist'],
        ability: 'Encases the target in ice, stunning them for 1.5s and dealing [ 225 / 300 / 375  ] magic damage to nearby enemies. She also creates a 2x2 zone for 3 seconds that slows enemies within it for 3 seconds. If Lissandra is below 50 percent health, she instead encases herself for 2 seconds, becoming untargetable.',
        stats: {
            dps: [ 24, 43, 86 ],
            as: 0.6,
            damage: [ 40, 72, 144 ],
            range: 2,
            armor: 20,
            mr: 20,
            health: [ 450, 810, 1620 ],
            critChance: 25
        }
    },
    {
        name: 'Lucian',
        id: 16,
        icon: `${unitIconLink}Lucian.png`,
        splash: `${unitSplashLink}lucian.png`,
        cost: 2,
        origin: ['Noble'],
        class: ['Gunslinger'],
        ability: 'Dashes away from nearby enemies and then attacks twice on his next attack. The first attack deals physical damage while the second deals magic damage.',
        stats: {
            dps: [ 42, 76, 152 ],
            as: 0.65,
            damage: [ 65, 117, 234 ],
            range: 3,
            armor: 25,
            mr: 20,
            health: [ 600, 1080, 2160 ],
            critChance: 25
        }
    },
    {
        name: 'Lulu',
        id: 17,
        icon: `${unitIconLink}Lulu.png`,
        splash: `${unitSplashLink}lulu.png`,
        cost: 2,
        origin: ['Yordle'],
        class: ['Sorcerer'],
        ability: 'Grants [ 0 / 1 / 2 ] allies [ 300 / 475 / 650 ] bonus health for 6 seconds, knocking up enemies near them for 1.25s.',
        stats: {
            dps: [ 30, 54, 108 ],
            as: 0.6,
            damage: [ 50, 90, 180 ],
            range: 2,
            armor: 25,
            mr: 20,
            health: [ 500, 900, 1800 ],
            critChance: 25
        }
    },
    {
        name: 'Pyke',
        id: 18,
        icon: `${unitIconLink}Pyke.png`,
        splash: `${unitSplashLink}pyke.png`,
        cost: 2,
        origin: ['Pirate'],
        class: [0],
        ability: 'Dashes behind the furthest enemy, creating and afterimage that, after 1s, deals [ 150 / 200 / 250 ] magic damage and stuns all enemies it passes through for [ 2 / 2.5 / 3 ] seconds. Pyke starts with 50 mana',
        stats: {
            dps: [ 36, 65, 130 ],
            as: 0.6,
            damage: [ 60, 108, 216 ],
            range: 1,
            armor: 25,
            mr: 20,
            health: [ 600, 1080, 2160 ],
            critChance: 25
        }
    },
    {
        name: 'Rek\'Sai',
        id: 19,
        icon: `${unitIconLink}RekSai.png`,
        splash: `${unitSplashLink}reksai.png`,
        cost: 2,
        origin: ['Void'],
        class: [2],
        ability: 'Burrows into the ground, becoming untargetable for 2 seconds while healing each .5s for 300/400/500 health in total. She then unburrows, dealing [ 150 / 200 / 250 ] magic damage and knocking up the closest enemy for 1s.',
        stats: {
            dps: [ 26, 47, 94 ],
            as: 0.65,
            damage: [ 40, 72, 144 ],
            range: 1,
            armor: 20,
            mr: 20,
            health: [ 650, 1170, 2340 ],
            critChance: 25
        }
    },
    {
        name: 'Shen',
        id: 20,
        icon: `${unitIconLink}Shen.png`,
        splash: `${unitSplashLink}shen.png`,
        cost: 2,
        origin: ['Ninja'],
        class: [1],
        ability: 'Creates a zone around himself allowing allies inside to dodge all attacks for [ 3 / 4 / 5 ] seconds. Shen starts with 50 mana.',
        stats: {
            dps: [ 39, 70, 140 ],
            as: 0.6,
            damage: [ 65, 117, 234 ],
            range: 1,
            armor: 30,
            mr: 20,
            health: [ 650, 1170, 2340 ],
            critChance: 25
        }
    },
    {
        name: 'Twisted Fate',
        id: 21,
        icon: `${unitIconLink}TwistedFate.png`,
        splash: `${unitSplashLink}twistedfate.png`,
        cost: 2,
        origin: ['Pirate'],
        class: [' '],
        ability: 'Twisted Fate throws a card that either stuns for [ 2 / 3 / 4 ] seconds, [ 200 / 300 / 400 ] deals damage around his target, or restores [ 20 / 35 / 50 ] mana to himself and nearby allies',
        stats: {
            dps: [ '-', '-', '-'],
            as: '-',
            damage: ['-', '-', '-'],
            range: 3,
            armor: '-',
            mr: '-',
            health: [ 450, 810, 1620 ],
            critChance: 25
        }
    },
    {
        name: 'Varus',
        id: 22,
        icon: `${unitIconLink}Varus.png`,
        splash: `${unitSplashLink}Varus.png`,
        cost: 2,
        origin: ['Demon'],
        class: ['Ranger'],
        ability: 'After charging for a 1.5 seconds, fires an arrow up to 8 hexes away, dealing [ 400 / 600 / 800 ] magic damage to all enemies hit.',
        stats: {
            dps: [ 35, 63, 126 ],
            as: 0.7,
            damage: [ 50, 90, 180 ],
            range: 4,
            armor: 25,
            mr: 20,
            health: [ 500, 900, 1800 ],
            critChance: 25
        }
    },
    {
        name: 'Zed',
        id: 23,
        icon: `${unitIconLink}Zed.png`,
        splash: `${unitSplashLink}Zed.png`,
        cost: 2,
        origin: ['Ninja'],
        class: [0],
        ability: 'Throws a shuriken dealing [ 200 / 300 / 400 ] magic damage to enemies in a line 4 hexes away.',
        stats: {
            dps: [ 39, 70, 140 ],
            as: 0.65,
            damage: [ 60, 108, 216 ],
            range: 1,
            armor: 25,
            mr: 20,
            health: [500, 900, 1800],
            critChance: 25
        }
    },
    {
        name: 'Aatrox',
        id: 24,
        icon: `${unitIconLink}Aatrox.png`,
        splash: `${unitSplashLink}Aatrox.png`,
        cost: 3,
        origin: ['Demon'],
        class: [1],
        ability: 'Deals [ 350 / 600 / 850 ] magic damage to all enemies in a circle.',
        stats: {
            dps: [42, 76, 152],
            as: 0.65,
            damage: [65, 117, 234],
            range: 1,
            armor: 25,
            mr: 20,
            health: [ 750, 1350, 2700 ],
            critChance: 25
        }
    },
    {
        name: 'Ashe',
        id: 25,
        icon: `${unitIconLink}Ashe.png`,
        splash: `${unitSplashLink}Ashe.png`,
        cost: 3,
        origin: ['Glacial'],
        class: ['Ranger'],
        ability: 'Fires an arrow that stuns and deals [ 200 / 400 / 600 ] magic damage to the first enemy hit. The stun lasts longer for each hex it travels ([1 / 1.5 / 2] seconds).',
        stats: {
            dps: [ 42, 76, 151 ],
            as: 0.7,
            damage: [ 60, 108, 216 ],
            range: 4,
            armor: 20,
            mr: 20,
            health: [ 550, 990, 1980 ],
            critChance: 25
        }
    },
    {
        name: 'Volibear',
        id: 26,
        icon: `${unitIconLink}Volibear.png`,
        splash: `${unitSplashLink}Volibear.png`,
        cost: 3,
        origin: ['Glacial'],
        class: [2],
        ability: 'For 20 seconds, empowers his basic attacks to bounce to [ 3 / 4 / 5 ] enemies within 1 hex, dealing [ 70% / 90% / 100% ] physical damage to secondary targets, and applying on-hit effects.',
        stats: {
            dps: [ 41, 74, 149 ],
            as: 0.55,
            damage: [ 75, 135, 270 ],
            range: 1,
            armor: 35,
            mr: 20,
            health: [ 650, 1170, 2340 ],
            critChance: 25
        }
    },
    {
        name: 'Evelynn',
        id: 27,
        icon: `${unitIconLink}Evelynn.png`,
        splash: `${unitSplashLink}Evelynn.png`,
        cost: 3,
        origin: ['Demon'],
        class: [0],
        ability: 'Deals [ 200 / 250 / 300 ] magic damage to the 3 closest enemies and blinks back 3 hexes. Damage is increased against enemies below 50 percent health by [ 3 / 4 / 5 ] times.',
        stats: {
            dps: [ 30, 54, 108 ],
            as: 0.6,
            damage: [ 50, 90, 180 ],
            range: 1,
            armor: 20,
            mr: 20,
            health: [ 550, 990, 1980 ],
            critChance: 25
        }
    },
    {
        name: 'Gangplank',
        id: 28,
        icon: `${unitIconLink}Gangplank.png`,
        splash: `${unitSplashLink}Gangplank.png`,
        cost: 3,
        origin: ['Pirate'],
        class: ['Gunslinger', 1],
        ability: '(Passive) Periodically spawns Powder Kegs. (Active) Detonates all active Powder Kegs, dealing [ 200 / 325 / 450 ] magic damage to enemies caught in the blast.',
        stats: {
            dps: [ 33, 59, 119 ],
            as: 0.6,
            damage: [ 55, 99, 198 ],
            range: 1,
            armor: 20,
            mr: 20,
            health: [ 600, 1080, 2160 ],
            critChance: 25
        }
    },
    {
        name: 'Katarina',
        id: 29,
        icon: `${unitIconLink}Katarina.png`,
        splash: `${unitSplashLink}Katarina.png`,
        cost: 3,
        origin: ['Imperial'],
        class: ['Assassin'],
        ability: 'Channels for 2.5 seconds and fires daggers at [ 3 / 5 / 7 ] nearby enemies, dealing [ 40 / 60 / 80 ] magic damage per tick (6 ticks per second) and reducing healing on them for 3 seconds.',
        stats: {
            dps: [ 30, 54, 108 ],
            as: 0.6,
            damage: [ 50, 90, 180 ],
            range: 1,
            armor: 20,
            mr: 20,
            health: [ 450, 810, 1620 ],
            critChance: 25
        }
    },
    {
        name: 'Kennen',
        id: 30,
        icon: `${unitIconLink}Kennen.png`,
        splash: `${unitSplashLink}Kennen.png`,
        cost: 3,
        origin: ['Ninja', 'Yordle'],
        class: ['Elementalist'],
        ability: 'Summons a storm around him for 3 seconds dealing [ 50 / 80 / 110 ] magic damage every .5s to nearby enemies, stunning them for 1.5s after 3 hits. Kennen starts with 50 mana.',
        stats: {
            dps: [ 46, 82, 164 ],
            as: 0.65,
            damage: [ 70, 126, 252 ],
            range: 2,
            armor: 20,
            mr: 20,
            health: [ 550, 990, 1980 ],
            critChance: 25
        }
    },
    {
        name: 'Morgana',
        id: 31,
        icon: `${unitIconLink}Morgana.png`,
        splash: `${unitSplashLink}Morgana.png`,
        cost: 3,
        origin: ['Demon'],
        class: ['Sorcerer'],
        ability: 'Fires chains to nearby enemies up to 3 hexes away, dealing [ 250 / 350 / 450 ] magic damage, and slowing them by 20 percent while the chains hold. After 3 seconds if the chains held, deals additional magic damage and stuns enemies for [ 2 / 4 / 6 ] seconds. Morganna starts with 50 mana.',
        stats: {
            dps: [ 30, 54, 108 ],
            as: 0.6,
            damage: [ 50, 90, 180 ],
            range: 2,
            armor: 20,
            mr: 20,
            health: [ 650, 1170, 2340 ],
            critChance: 25
        }
    },
    {
        name: 'Poppy',
        id: 32,
        icon: `${unitIconLink}Poppy.png`,
        splash: `${unitSplashLink}Poppy.png`,
        cost: 3,
        origin: ['Yordle'],
        class: ['Knight'],
        ability: 'After a .75s delay, swings her hammer at the closest enemy, dealing [ 300 / 400 / 500 ] magic damage, knocking them up for 1s, and stunning them for [ 1.5 / 2.5 / 3.5 ] seconds.',
        stats: {
            dps: [ 25, 45, 90 ],
            as: 0.5,
            damage: [ 50, 90, 180 ],
            range: 1,
            armor: 30,
            mr: 20,
            health: [ 800, 1350, 2700 ],
            critChance: 25
        }
    },
    {
        name: 'Rengar',
        id: 33,
        icon: `${unitIconLink}Rengar.png`,
        splash: `${unitSplashLink}Rengar.png`,
        cost: 3,
        origin: ['Wild'],
        class: [0],
        ability: 'Leaps at the weakest enemy, dealing [ 210% / 320% / 430% ] physical damage, and gaining [ 50% / 65% / 80% ] attack speed and 25% critical strike chance for 6 seconds.',
        stats: {
            dps: [ 30, 54, 109 ],
            as: 0.55,
            damage: [ 55, 99, 198 ],
            range: 1,
            armor: 20,
            mr: 20,
            health: [ 550, 990, 1980 ],
            critChance: 25
        }
    },
    {
        name: 'Shyvana',
        id: 34,
        icon: `${unitIconLink}Shyvana.png`,
        splash: `${unitSplashLink}Shyvana.png`,
        cost: 3,
        origin: ['Dragon'],
        class: ['Shapeshifter'],
        ability: 'Dashes and transforms into a ranged attacker for 60 seconds gaining [ 50 / 90 / 130 ] attack damage and attack range. When transformed, her attacks set enemies on fire, dealing [ 200 / 300 / 400 ] magic damage over time.',
        stats: {
            dps: [ 33, 59, 117 ],
            as: 0.65,
            damage: [ 50, 90, 180 ],
            range: 1,
            armor: 20,
            mr: 20,
            health: [ 550, 990, 1980 ],
            critChance: 25
        }
    },
    {
        name: 'Vinegar',
        id: 35,
        icon: `${unitIconLink}Veigar.png`,
        splash: `${unitSplashLink}Veigar.png`,
        cost: 3,
        origin: ['Yordle'],
        class: ['Sorcerer'],
        ability: 'Deals [ 300 / 500 / 700 ] magic damage to the target enemy. If the target is a lower star level than Veigar, the target is executed.',
        stats: {
            dps: [ 25, 45, 89 ],
            as: 0.55,
            damage: [ 45, 81, 162 ],
            range: 3,
            armor: 20,
            mr: 20,
            health: [ 450, 810, 1620 ],
            critChance: 25
        }
    },
    {
        name: 'Cho\'Gath',
        id: 36,
        icon: `${unitIconLink}Chogath.png`,
        splash: `${unitSplashLink}Chogath.png`,
        cost: 4,
        origin: ['Void'],
        class: ['Brawler'],
        ability: 'After a 1.5s delay, deals [ 200 / 400 / 600 ] magic damage and knocks up all enemies in a 3x3 area, stunning them for [ 2 / 2.25 / 2.5 ] seconds. Cho\'Gath starts with 50 mana.',
        stats: {
            dps: [ 39, 69, 139 ],
            as: 0.55,
            damage: [ 70, 126, 252 ],
            range: 1,
            armor: 20,
            mr: 20,
            health: [1100, 1980, 3960],
            critChance: 25
        }
    },
    {
        name: 'Akali',
        id: 37,
        icon: `${unitIconLink}Akali.png`,
        splash: `${unitSplashLink}Akali.png`,
        cost: 4,
        origin: ['Ninja'],
        class: [1],
        ability: 'Deals [ 200 / 375 / 550 ] magic damage to all enemies in a cone.',
        stats: {
            dps: [ 53, 95, 189 ],
            as: 0.75,
            damage: [ 70, 126, 252 ],
            range: 1,
            armor: 20,
            mr: 20,
            health: [ 700, 1260, 2520 ],
            critChance: 25
        }
    },
    {
        name: 'Aurelion Sol',
        id: 38,
        icon: `${unitIconLink}AurelionSol.png`,
        splash: `${unitSplashLink}AurelionSol.png`,
        cost: 4,
        origin: ['Dragon'],
        class: ['Sorcerer'],
        ability: 'After a .35s delay, deals [ 250 / 450 / 650 ] magic damage to all enemies in a line.',
        stats: {
            dps: [ 24, 43, 86 ],
            as: 0.6,
            damage: [ 40, 72, 144 ],
            range: 3,
            armor: 20,
            mr: 20,
            health: [ 600, 1080, 2160 ],
            critChance: 25
        }
    },
    {
        name: 'Brand',
        id: 39,
        icon: `${unitIconLink}Brand.png`,
        splash: `${unitSplashLink}Brand.png`,
        cost: 4,
        origin: ['Demon'],
        class: ['Elementalist'],
        ability: 'Unleashes a fireball that bounces [ 4 / 4 / 6 ] times between enemies, dealing [ 200 / 300 / 400 ] magic damage with each bounce.',
        stats: {
            dps: [ 36, 65, 130 ],
            as: 0.6,
            damage: [ 60, 108, 216 ],
            range: 3,
            armor: 25,
            mr: 20,
            health: [ 700, 1260, 2520 ],
            critChance: 25
        }
    },
    {
        name: 'Draven',
        id: 40,
        icon: `${unitIconLink}Draven.png`,
        splash: `${unitSplashLink}Draven.png`,
        cost: 4,
        origin: ['Imperial'],
        class: [1],
        ability: '(Passive) Basic attacks grant [ 150% / 200% / 250% ] bonus on-hit physical damage and [ 30% / 45% / 60% ] attack speed for 8 seconds, stacking up to two times.',
        stats: {
            dps: [ 49, 88, 176 ],
            as: 0.65,
            damage: [ 75, 135, 270 ],
            range: 3,
            armor: 25,
            mr: 20,
            health: [ 700, 1260, 2520 ],
            critChance: 25
        }
    },
    {
        name: 'Gnar',
        id: 41,
        icon: `${unitIconLink}Gnar.png`,
        splash: `${unitSplashLink}Gnar.png`,
        cost: 4,
        origin: ['Wild', 'Yordle'],
        class: ['Shapeshifter'],
        ability: 'Transforms into a melee attacker for 60 seconds, gaining [ 300 / 600 / 900 ] health, [ 30 / 60 / 90 ] attack damage, and jumping behind the farthest enemy. After his jump, Gnar shoves all surrounding enemies 2 hexes toward his team, stunning them for 2 seconds and dealing [ 200 / 300 / 400 ] magic damage.',
        stats: {
            dps: [ 31, 57, 113 ],
            as: 0.7,
            damage: [ 45, 81, 162 ],
            range: 2,
            armor: 35,
            mr: 20,
            health: [ 850, 1530, 3060 ],
            critChance: 25
        }
    },
    {
        name: 'Kindred',
        id: 42,
        icon: `${unitIconLink}Kindred.png`,
        splash: `${unitSplashLink}Kindred.png`,
        cost: 4,
        origin: ['Phantom'],
        class: ['Ranger'],
        ability: 'Creates a zone around herself for [ 4 / 5 / 6 ] seconds that prevents nearby allies from dying. Additionally allies in the zone cannot have their health go below a [ 300 / 600 / 900 ] depending on Kindred’s level.',
        stats: {
            dps: [ 36, 64, 129 ],
            as: 0.65,
            damage: [ 55, 99, 198 ],
            range: 3,
            armor: 20,
            mr: 20,
            health: [ 600, 1080, 2160 ],
            critChance: 25
        }
    },
    {
        name: 'Leona',
        id: 43,
        icon: `${unitIconLink}Leona.png`,
        splash: `${unitSplashLink}Leona.png`,
        cost: 4,
        origin: ['Noble'],
        class: ['Knight'],
        ability: 'After a .625s delay, calls down a solar ray that deals [ 175 / 250 / 325 ] magic damage and slows all enemies within it. The enemy in the center of the ray is stunned for [ 5 / 8 / 11 ] seconds. Leona starts with 50 mana.',
        stats: {
            dps: [ 25, 45, 89 ],
            as: 0.55,
            damage: [ 45, 81, 162 ],
            range: 1,
            armor: 55,
            mr: 20,
            health: [ 750, 1350, 2700 ],
            critChance: 25
        }
    },
    {
        name: 'Sejuani',
        id: 44,
        icon: `${unitIconLink}Sejuani.png`,
        splash: `${unitSplashLink}Sejuani.png`,
        cost: 4,
        origin: ['Glacial'],
        class: ['Knight'],
        ability: 'Creates a large glacial storm that detonates after 2 seconds dealing [ 100 / 175 / 250 ] magic damage and stunning enemies within it for [ 3 / 4 / 5 ] seconds. Sejuani starts with 50 mana.',
        stats: {
            dps: [ 25, 45, 89 ],
            as: 0.55,
            damage: [ 45, 81, 162 ],
            range: 1,
            armor: 35,
            mr: 25,
            health: [ 850, 1530, 3060 ],
            critChance: 25
        }
    },
    {
        name: 'Anivia',
        id: 45,
        icon: `${unitIconLink}Anivia.png`,
        splash: `${unitSplashLink}Anivia.png`,
        cost: 5,
        origin: ['Glacial'],
        class: ['Elementalist'],
        ability: 'Channels a large hailstorm for 8 seconds, dealing magic damage every second totaling [ 700 / 950 / 1200 ] damage and slowing the attack speed of enemies inside it by [ 50 / 70 / 90 ].',
        stats: {
            dps: [ 24, 43, 86 ],
            as: 0.6,
            damage: [ 40, 72, 144 ],
            range: 3,
            armor: 20,
            mr: 20,
            health: [ 650, 1170, 2340 ],
            critChance: 25
        }
    },
    {
        name: 'Karthus',
        id: 46,
        icon: `${unitIconLink}Karthus.png`,
        splash: `${unitSplashLink}Karthus.png`,
        cost: 5,
        origin: ['Phantom'],
        class: ['Sorcerer'],
        ability: 'Channel for 3 seconds to deal [ 350 / 550 / 850 ] magic damage to 4/7/10 random enemies, depending on Karthus’ level.',
        stats: {
            dps: [ 42, 76, 152 ],
            as: 0.65,
            damage: [ 65, 117, 234 ],
            range: 3,
            armor: 25,
            mr: 20,
            health: [ 850, 1530, 3060 ],
            critChance: 25
        }
    },
    {
        name: 'Kayle',
        id: 47,
        icon: `${unitIconLink}Kayle.png`,
        splash: `${unitSplashLink}Kayle.png`,
        cost: 5,
        origin: ['Noble'],
        class: ['Knight'],
        ability: 'Targets the [ 1 / 2 / 3 ] weakest allies, making them immune to damage and dealing [ 500 / 800 / 1100 ] magic damage at the end of the [ 2 / 3 / 4 ] second duration.',
        stats: {
            dps: [ 66, 119, 238 ],
            as: 1.1,
            damage: [ 60, 108, 216 ],
            range: 3,
            armor: 35,
            mr: 20,
            health: [ 800, 1440, 2880 ],
            critChance: 25
        }
    },
    {
        name: 'Miss Fortune',
        id: 48,
        icon: `${unitIconLink}MissFortune.png`,
        splash: `${unitSplashLink}MissFortune.png`,
        cost: 5,
        origin: ['Pirate'],
        class: ['Gunslinger'],
        ability: 'Channels for 3 seconds and fires 14 waves of bullets in a cone, dealing [ 800 / 1250 / 1700 ] total magic damage.',
        stats: {
            dps: [ 64, 115, 230 ],
            as: 0.85,
            damage: [ 75, 135, 270 ],
            range: 3,
            armor: 20,
            mr: 20,
            health: [ 650, 1170, 2340 ],
            critChance: 25
        }
    },
    {
        name: 'Swain',
        id: 49,
        icon: `${unitIconLink}Swain.png`,
        splash: `${unitSplashLink}Swain.png`,
        cost: 5,
        origin: ['Imperial', 'Demon'],
        class: ['Shapeshifter'],
        ability: 'Transforms for 6 seconds, dealing [ 50 / 100 / 150 ] magic damage to all nearby enemies with each tick while healing [ 50 / 90 / 130 ] for each tick. At the end of the transformation, sends out a burst of energy dealing [ 300 / 600 / 900 ] magic damage to nearby enemies.',
        stats: {
            dps: [ 42, 76, 152 ],
            as: 0.65,
            damage: [ 65, 117, 234 ],
            range: 2,
            armor: 25,
            mr: 20,
            health: [ 850, 1530, 3060 ],
            critChance: 25
        }
    },
    {
        name: 'Yasuo',
        id: 50,
        icon: `${unitIconLink}Yasuo.png`,
        splash: `${unitSplashLink}Yasuo.png`,
        cost: 5,
        origin: ['Exile'],
        class: [1],
        ability: 'Stabs foward, dealing [ 150 / 250 / 350 ] magic dmaage to two enemies in a line 2 hexes away. On third cast, instead launches a tornado, dealing the same magic damage and knocking enemies up for 1.25s in a line 6 hexes away.',
        stats: {
            dps: [ 65, 117, 234 ],
            as: 1,
            damage: [ 65, 117, 234 ],
            range: 1,
            armor: 35,
            mr: 20,
            health: [ 700, 1260, 2520 ],
            critChance: 25
        }
    },
];

export const Units = units;
export const Classes = classes;
export const Origins = origins;
export const Traits = classes.concat(origins);