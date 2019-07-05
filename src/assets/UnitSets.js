const classes = [{
        name: 'Assassin',
        text: 'Assassins leap to the farthest enemy at the start of combat and deal additional Critical Strike Damage.',
        image: ``,
        bonus: [{
                count: 3,
                text: '+150% critical strike damage.'
            },
            {
                count: 6,
                text: '+350% critical strike damage.'
            }
        ]
    },
    {
        name: 'Blademaster',
        text: 'Blademasters have a 35% chance to strike additional times each attack.',
        bonus: [{
                count: 3,
                text: 'One additional strike.'
            },
            {
                count: 6,
                text: 'Two additional strikes.'
            }
        ]
    },
    {
        name: 'Brawler',
        text: 'Brawlers receive bonus maximum health.',
        bonus: [{
                count: 2,
                text: '+300 Bonus health.'
            },
            {
                count: 4,
                text: '+700 Bonus health.'
            }
        ]
    },
];
const origins = {

};
const unitIconLink = process.env.PUBLIC_URL + '/units/';
const unitSplashLink = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/';
const units = [{
        name: 'Fiora',
        id: 0,
        icon: `${unitIconLink}Fiora.png`,
        splash: `${unitSplashLink}Fiora_0.jpg`,
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
        splash: `${unitSplashLink}Garen_0.jpg`,
        cost: 1,
        origin: ['Noble'],
        class: ['Knight'],
        ability: 'Garen rapidly spins his sword around his body for 4s, becoming immune to magic damage and dealing up to[ 450 / 585 / 720 ] damage to nearby enemies. (9 ticks dealing [ 50 / 65 / 80 ] damage per tick)',
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
            'Morellonomicon procs on every tick of Garen\'s spin dealing up to 22.5% of a unit\'s maxx health'
        ]
    },
    {
        name: 'Graves',
        id: 2,
        icon: `${unitIconLink}Graves.png`,
        splash: `${unitSplashLink}Graves_0.jpg`,
        cost: 1,
        origin: ['Pirate'],
        class: ['Gunslinger'],
        ability: 'Basic attacks deal [ 5% / 10% / 15% ] increased physical damage and hit all enemies in front of him.',
        stats: {
            dps: [ 28 / 50 / 99 ],
            as: 0.5,
            damage: [ 55 / 99 / 198 ],
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
        splash: `${unitSplashLink}Kassadin_0.jpg`,
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
        splash: `${unitSplashLink}Khazix_0.jpg`,
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
        splash: `${unitSplashLink}Mordekaiser_0.jpg`,
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
        splash: `${unitSplashLink}Nidalee_0.jpg`,
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
        splash: `${unitSplashLink}Tristana_0.jpg`,
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
        splash: `${unitSplashLink}Vayne_0.jpg`,
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
        splash: `${unitSplashLink}Warwick_0.jpg`,
        cost: 1,
        origin: ['Wild'],
        class: [2],
        ability: 'Pounces onto the lowest health enemy, stunning them for 1.5s dealing [ 150 / 225 / 300 ] magic damage over 3 hits and healing over the duration.',
        stats: {
            dps: 30,
            as: 0.6,
            damage: 50,
            range: 1,
            armor: 30,
            mr: 20,
            health: [
                600,
                1080,
                2160
            ]
        }
    },
    {
        name: 'Darius',
        id: 10,
        icon: `${unitIconLink}Darius.png`,
        splash: `${unitSplashLink}Darius_0.jpg`,
        cost: 1,
        origin: ['Imperial'],
        class: ['Knight'],
        ability: 'Deals [ 150 / 200 / 250 ] magic damage to all nearby enemies and heals himself for [ 100 / 150 / 200 ] for each enemy hit.',
        stats: {
            dps: 25,
            as: 0.5,
            damage: 50,
            range: 1,
            armor: 25,
            mr: 20,
            health: [
                600,
                1080,
                2160
            ]
        }
    },
    {
        name: 'Ahri',
        id: 11,
        icon: `${unitIconLink}Ahri.png`,
        splash: `${unitSplashLink}Ahri_0.jpg`,
        cost: 2,
        origin: ['Wild'],
        class: ['Sorcerer'],
        ability: 'Fires an orb in a line that returns to her, dealing [ 100 / 175 / 250 ] magic damage to enemies it passes through.',
        stats: {
            dps: 28,
            as: 0.55,
            damage: 50,
            range: 3,
            armor: 20,
            mr: 20,
            health: [
                450,
                810,
                1620
            ]
        }
    },
    {
        name: 'Blitzcrank',
        id: 12,
        icon: `${unitIconLink}Blitzcrank.png`,
        splash: `${unitSplashLink}Blitzcrank_0.jpg`,
        cost: 2,
        origin: ['Robot'],
        class: [2],
        ability: 'Pulls the farthest enemy into melee range, stunning them for 2.5s, dealing [ 100 / 450 / 800 ] magic damage, and knocks them up.',
        stats: {
            dps: 25,
            as: 0.5,
            damage: 50,
            range: 1,
            armor: 35,
            mr: 20,
            health: [
                600,
                1080,
                2160
            ]
        }
    },
    {
        name: 'Braum',
        id: 13,
        icon: `${unitIconLink}Braum.png`,
        splash: `${unitSplashLink}Braum_0.jpg`,
        cost: 2,
        origin: ['Glacial'],
        class: ['Guardian'],
        ability: 'Raises a barrier for 4 seconds that redirects all incoming damage to Braum, and reduces damage he takes through the shield by [ 60 / 75 / 90 ].',
        stats: {
            dps: 24,
            as: 0.6,
            damage: 40,
            range: 1,
            armor: 25,
            mr: 20,
            health: [
                750,
                1350,
                2700
            ]
        }
    },
    {
        name: 'Elise',
        id: 14,
        icon: `${unitIconLink}Elise.png`,
        splash: `${unitSplashLink}Elise_0.jpg`,
        cost: 2,
        origin: ['Demon'],
        class: ['Shapeshifter'],
        ability: 'Summons [ 2 / 3 / 4 ] Spiderlings with 500 health each and transforms into a spider for 60 seconds, gaining [ 60% / 90% / 120% ] life steal. ',
        stats: {
            dps: 24,
            as: 0.6,
            damage: 40,
            range: 2,
            armor: 25,
            mr: 20,
            health: [
                500,
                900,
                1800
            ]
        }
    },
    {
        name: 'Lissandra',
        id: 15,
        icon: `${unitIconLink}Lissandra.png`,
        splash: `${unitSplashLink}Lissandra_0.jpg`,
        cost: 2,
        origin: ['Glacial'],
        class: ['Elementalist'],
        ability: 'Encases the target in ice, stunning them for 1.5s and dealing [ 225 / 300 / 375  ] magic damage to nearby enemies. She also creates a 2x2 zone for 3 seconds that slows enemies within it for 3 seconds. If Lissandra is below 50 percent health, she instead encases herself for 2 seconds, becoming untargetable.',
        stats: {
            dps: 24,
            as: 0.6,
            damage: 40,
            range: 2,
            armor: 20,
            mr: 20,
            health: [
                450,
                810,
                1620
            ]
        }
    },
    {
        name: 'Lucian',
        id: 16,
        icon: `${unitIconLink}Lucian.png`,
        splash: `${unitSplashLink}Lucian_0.jpg`,
        cost: 2,
        origin: ['Noble'],
        class: ['Gunslinger'],
        ability: 'Dashes away from nearby enemies and then attacks twice on his next attack. The first attack deals physical damage while the second deals magic damage.',
        stats: {
            dps: 42,
            as: 0.65,
            damage: 65,
            range: 3,
            armor: 25,
            mr: 20,
            health: [
                600,
                1080,
                2160
            ]
        }
    },
    {
        name: 'Lulu',
        id: 17,
        icon: `${unitIconLink}Lulu.png`,
        splash: `${unitSplashLink}Lulu_0.jpg`,
        cost: 2,
        origin: ['Yordle'],
        class: ['Sorcerer'],
        ability: 'Grants [ 0 / 1 / 2 ] allies [ 300 / 475 / 650 ] bonus health for 6 seconds, knocking up enemies near them for 1.25s.',
        stats: {
            dps: 30,
            as: 0.6,
            damage: 50,
            range: 2,
            armor: 25,
            mr: 20,
            health: [
                500,
                900,
                1800
            ]
        }
    },
    {
        name: 'Pyke',
        id: 18,
        icon: `${unitIconLink}Pyke.png`,
        splash: `${unitSplashLink}Pyke_0.jpg`,
        cost: 2,
        origin: ['Pirate'],
        class: [0],
        ability: 'Dashes behind the furthest enemy, creating and afterimage that, after 1s, deals [ 150 / 200 / 250 ] magic damage and stuns all enemies it passes through for [ 2 / 2.5 / 3 ] seconds. Pyke starts with 50 mana',
        stats: {
            dps: 36,
            as: 0.6,
            damage: 60,
            range: 1,
            armor: 25,
            mr: 20,
            health: [
                600,
                1080,
                2160
            ]
        }
    },
    {
        name: 'Rek\'Sai',
        id: 19,
        icon: `${unitIconLink}RekSai.png`,
        splash: `${unitSplashLink}RekSai_0.jpg`,
        cost: 2,
        origin: ['Void'],
        class: [2],
        ability: 'Burrows into the ground, becoming untargetable for 2 seconds while healing each .5s for 300/400/500 health in total. She then unburrows, dealing [ 150 / 200 / 250 ] magic damage and knocking up the closest enemy for 1s.',
        stats: {
            dps: 26,
            as: 0.65,
            damage: 40,
            range: 1,
            armor: 20,
            mr: 20,
            health: [
                650,
                1170,
                2340
            ]
        }
    },
    {
        name: 'Shen',
        id: 20,
        icon: `${unitIconLink}Shen.png`,
        splash: `${unitSplashLink}Shen_0.jpg`,
        cost: 2,
        origin: ['Ninja'],
        class: [1],
        ability: 'Creates a zone around himself allowing allies inside to dodge all attacks for [ 3 / 4 / 5 ] seconds. Shen starts with 50 mana.',
        stats: {
            dps: 39,
            as: 0.6,
            damage: 65,
            range: 1,
            armor: 30,
            mr: 20,
            health: [
                650,
                1170,
                2340
            ]
        }
    },
    {
        name: 'Twisted Fate',
        id: 21,
        icon: `${unitIconLink}TwistedFate.png`,
        splash: `${unitSplashLink}TwistedFate_0.jpg`,
        cost: 2,
        origin: ['Pirate'],
        class: [' '],
        ability: 'Twisted Fate throws a card that either stuns for [ 2 / 3 / 4 ] seconds, [ 200 / 300 / 400 ] deals damage around his target, or restores [ 20 / 35 / 50 ] mana to himself and nearby allies',
        stats: {
            dps: null,
            as: null,
            damage: null,
            range: 3,
            armor: null,
            mr: null,
            health: [
                450,
                810,
                1620
            ]
        }
    },
    {
        name: 'Varus',
        id: 22,
        icon: `${unitIconLink}Varus.png`,
        splash: `${unitSplashLink}Varus_0.jpg`,
        cost: 2,
        origin: ['Demon'],
        class: ['Ranger'],
        ability: 'After charging for a 1.5 seconds, fires an arrow up to 8 hexes away, dealing [ 400 / 600 / 800 ] magic damage to all enemies hit.',
        stats: {
            dps: 35,
            as: 0.7,
            damage: 50,
            range: 4,
            armor: 25,
            mr: 20,
            health: [
                500,
                900,
                1800
            ]
        }
    },
    {
        name: 'Zed',
        id: 23,
        icon: `${unitIconLink}Zed.png`,
        splash: `${unitSplashLink}Zed_0.jpg`,
        cost: 2,
        origin: ['Ninja'],
        class: [0],
        ability: 'Throws a shuriken dealing [ 200 / 300 / 400 ] magic damage to enemies in a line 4 hexes away.',
        stats: {
            dps: 39,
            as: 0.65,
            damage: 60,
            range: 1,
            armor: 25,
            mr: 20,
            health: [500, 900, 1800]
        }
    },
    {
        name: 'Aatrox',
        id: 24,
        icon: `${unitIconLink}Aatrox.png`,
        splash: `${unitSplashLink}Aatrox_0.jpg`,
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
            health: [ 750 / 1350 / 2700 ],
            critChance: 25
        }
    },
    {
        name: 'Ashe',
        id: 25,
        icon: `${unitIconLink}Ashe.png`,
        splash: `${unitSplashLink}Ashe_0.jpg`,
        cost: 3,
        origin: ['Glacial'],
        class: ['Ranger'],
        ability: 'Fires an arrow that stuns and deals [ 200 / 400 / 600 ] magic damage to the first enemy hit. The stun lasts longer for each hex it travels ([1 / 1.5 / 2] seconds).',
        stats: {
            dps: 42,
            as: 0.7,
            damage: 60,
            range: 4,
            armor: 20,
            mr: 20,
            health: [
                550,
                990,
                1980
            ]
        }
    },
    {
        name: 'Cho\'Gath',
        id: 26,
        icon: `${unitIconLink}Chogath.png`,
        splash: `${unitSplashLink}Chogath_0.jpg`,
        cost: 3,
        origin: ['Void'],
        class: ['Brawler'],
        ability: 'After a 1.5s delay, deals [ 200 / 400 / 600 ] magic damage and knocks up all enemies in a 3x3 area, stunning them for [ 2 / 2.25 / 2.5 ] seconds. Cho\'Gath starts with 50 mana.',
        stats: {
            dps: 39,
            as: 0.55,
            damage: 70,
            range: 1,
            armor: 20,
            mr: 20,
            health: [
                1100,
                2000,
                4000
            ]
        }
    },
    {
        name: 'Evelynn',
        id: 27,
        icon: `${unitIconLink}Evelynn.png`,
        splash: `${unitSplashLink}Evelynn_0.jpg`,
        cost: 3,
        origin: ['Demon'],
        class: [0],
        ability: 'Deals [ 200 / 250 / 300 ] magic damage to the 3 closest enemies and blinks back 3 hexes. Damage is increased against enemies below 50 percent health by [ 3 / 4 / 5 ] times.',
        stats: {
            dps: 30,
            as: 0.6,
            damage: 50,
            range: 1,
            armor: 20,
            mr: 20,
            health: [
                550,
                990,
                1980
            ]
        }
    },
    {
        name: 'Gangplank',
        id: 28,
        icon: `${unitIconLink}Gangplank.png`,
        splash: `${unitSplashLink}Gangplank_0.jpg`,
        cost: 3,
        origin: ['Pirate'],
        class: ['Gunslinger', 1],
        ability: '(Passive) Periodically spawns Powder Kegs. (Active) Detonates all active Powder Kegs, dealing [ 200 / 325 / 450 ] magic damage to enemies caught in the blast.',
        stats: {
            dps: 33,
            as: 0.6,
            damage: 55,
            range: 1,
            armor: 20,
            mr: 20,
            health: [
                600,
                1080,
                2160
            ]
        }
    },
    {
        name: 'Katarina',
        id: 29,
        icon: `${unitIconLink}Katarina.png`,
        splash: `${unitSplashLink}Katarina_0.jpg`,
        cost: 3,
        origin: ['Imperial'],
        class: ['Assassin'],
        ability: 'Channels for 2.5 seconds and fires daggers at [ 3 / 5 / 7 ] nearby enemies, dealing [ 40 / 60 / 80 ] magic damage per tick (6 ticks per second) and reducing healing on them for 3 seconds.',
        stats: {
            dps: 30,
            as: 0.6,
            damage: 50,
            range: 1,
            armor: 20,
            mr: 20,
            health: [
                450,
                810,
                1620
            ]
        }
    },
    {
        name: 'Kennen',
        id: 30,
        icon: `${unitIconLink}Kennen.png`,
        splash: `${unitSplashLink}Kennen_0.jpg`,
        cost: 3,
        origin: ['Ninja', 'Yordle'],
        class: ['Elementalist'],
        ability: 'Summons a storm around him for 3 seconds dealing [ 50 / 80 / 110 ] magic damage every .5s to nearby enemies, stunning them for 1.5s after 3 hits. Kennen starts with 50 mana.',
        stats: {
            dps: 46,
            as: 0.65,
            damage: 70,
            range: 2,
            armor: 20,
            mr: 20,
            health: [
                550,
                990,
                1980
            ]
        }
    },
    {
        name: 'Morgana',
        id: 31,
        icon: `${unitIconLink}Morgana.png`,
        splash: `${unitSplashLink}Morgana_0.jpg`,
        cost: 3,
        origin: ['Demon'],
        class: ['Sorcerer'],
        ability: 'Fires chains to nearby enemies up to 3 hexes away, dealing [ 250 / 350 / 450 ] magic damage, and slowing them by 20 percent while the chains hold. After 3 seconds if the chains held, deals additional magic damage and stuns enemies for [ 2 / 4 / 6 ] seconds. Morganna starts with 50 mana.',
        stats: {
            dps: 30,
            as: 0.6,
            damage: 50,
            range: 2,
            armor: 20,
            mr: 20,
            health: [
                650,
                1170,
                2340
            ]
        }
    },
    {
        name: 'Poppy',
        id: 32,
        icon: `${unitIconLink}Poppy.png`,
        splash: `${unitSplashLink}Poppy_0.jpg`,
        cost: 3,
        origin: ['Yordle'],
        class: ['Knight'],
        ability: 'After a .75s delay, swings her hammer at the closest enemy, dealing [ 300 / 400 / 500 ] magic damage, knocking them up for 1s, and stunning them for [ 1.5 / 2.5 / 3.5 ] seconds.',
        stats: {
            dps: 25,
            as: 0.5,
            damage: 50,
            range: 1,
            armor: 30,
            mr: 20,
            health: [
                800,
                1350,
                2700
            ]
        }
    },
    {
        name: 'Rengar',
        id: 33,
        icon: `${unitIconLink}Rengar.png`,
        splash: `${unitSplashLink}Rengar_0.jpg`,
        cost: 3,
        origin: ['Wild'],
        class: [0],
        ability: 'Leaps at the weakest enemy, dealing [ 210% / 320% / 430% ] physical damage, and gaining [ 50% / 65% / 80% ] attack speed and 25% critical strike chance for 6 seconds.',
        stats: {
            dps: 30,
            as: 0.55,
            damage: 55,
            range: 1,
            armor: 20,
            mr: 20,
            health: [
                550,
                990,
                1980
            ]
        }
    },
    {
        name: 'Shyvana',
        id: 34,
        icon: `${unitIconLink}Shyvana.png`,
        splash: `${unitSplashLink}Shyvana_0.jpg`,
        cost: 3,
        origin: ['Dragon'],
        class: ['Shapeshifter'],
        ability: 'Dashes and transforms into a ranged attacker for 60 seconds gaining [ 50 / 90 / 130 ] attack damage and attack range. When transformed, her attacks set enemies on fire, dealing [ 200 / 300 / 400 ] magic damage over time.',
        stats: {
            dps: 33,
            as: 0.65,
            damage: 50,
            range: 1,
            armor: 20,
            mr: 20,
            health: [
                550,
                990,
                1980
            ]
        }
    },
    {
        name: 'Vinegar',
        id: 35,
        icon: `${unitIconLink}Veigar.png`,
        splash: `${unitSplashLink}Veigar_0.jpg`,
        cost: 3,
        origin: ['Yordle'],
        class: ['Sorcerer'],
        ability: 'Deals [ 300 / 500 / 700 ] magic damage to the target enemy. If the target is a lower star level than Veigar, the target is executed.',
        stats: {
            dps: 25,
            as: 0.55,
            damage: 45,
            range: 3,
            armor: 20,
            mr: 20,
            health: [
                450,
                810,
                1620
            ]
        }
    },
    {
        name: 'Volibear',
        id: 36,
        icon: `${unitIconLink}Volibear.png`,
        splash: `${unitSplashLink}Volibear_0.jpg`,
        cost: 3,
        origin: ['Glacial'],
        class: [2],
        ability: 'For 20 seconds, empowers his basic attacks to bounce to [ 3 / 4 / 5 ] enemies within 1 hex, dealing [ 70% / 90% / 100% ] physical damage to secondary targets, and applying on-hit effects.',
        stats: {
            dps: 41,
            as: 0.55,
            damage: 75,
            range: 1,
            armor: 35,
            mr: 20,
            health: [
                650,
                1170,
                2340
            ]
        }
    },
    {
        name: 'Akali',
        id: 37,
        icon: `${unitIconLink}Akali.png`,
        splash: `${unitSplashLink}Akali_0.jpg`,
        cost: 4,
        origin: ['Ninja'],
        class: [1],
        ability: 'Deals [ 200 / 375 / 550 ] magic damage to all enemies in a cone.',
        stats: {
            dps: 53,
            as: 0.75,
            damage: 70,
            range: 1,
            armor: 20,
            mr: 20,
            health: [
                700,
                1260,
                2520
            ]
        }
    },
    {
        name: 'Aurelion Sol',
        id: 38,
        icon: `${unitIconLink}AurelionSol.png`,
        splash: `${unitSplashLink}AurelionSol_0.jpg`,
        cost: 4,
        origin: ['Dragon'],
        class: ['Sorcerer'],
        ability: 'After a .35s delay, deals [ 250 / 450 / 650 ] magic damage to all enemies in a line.',
        stats: {
            dps: 24,
            as: 0.6,
            damage: 40,
            range: 3,
            armor: 20,
            mr: 20,
            health: [
                600,
                1080,
                2160
            ]
        }
    },
    {
        name: 'Brand',
        id: 39,
        icon: `${unitIconLink}Brand.png`,
        splash: `${unitSplashLink}Brand_0.jpg`,
        cost: 4,
        origin: ['Demon'],
        class: ['Elementalist'],
        ability: 'Unleashes a fireball that bounces [ 4 / 4 / 6 ] times between enemies, dealing [ 200 / 300 / 400 ] magic damage with each bounce.',
        stats: {
            dps: 36,
            as: 0.6,
            damage: 60,
            range: 3,
            armor: 25,
            mr: 20,
            health: [
                700,
                1260,
                2520
            ]
        }
    },
    {
        name: 'Draven',
        id: 40,
        icon: `${unitIconLink}Draven.png`,
        splash: `${unitSplashLink}Draven_0.jpg`,
        cost: 4,
        origin: ['Imperial'],
        class: [1],
        ability: '(Passive) Basic attacks grant bonus on-hit physical damage and attack speed for 8 seconds, stacking up to two times.',
        stats: {
            dps: 49,
            as: 0.65,
            damage: 75,
            range: 3,
            armor: 25,
            mr: 20,
            health: [
                700,
                1260,
                2520
            ]
        }
    },
    {
        name: 'Gnar',
        id: 41,
        icon: `${unitIconLink}Gnar.png`,
        splash: `${unitSplashLink}Gnar_0.jpg`,
        cost: 4,
        origin: ['Wild', 'Yordle'],
        class: ['Shapeshifter'],
        ability: 'Transforms into a melee attacker for 60 seconds, gaining health, attack damage, and jumping behind the farthest enemy. After his jump, Gnar shoves all surrounding enemies 2 hexes toward his team, stunning them for 2 seconds and dealing magic damage.',
        stats: {
            dps: 31,
            as: 0.7,
            damage: 45,
            range: 2,
            armor: 35,
            mr: 20,
            health: [
                850,
                1530,
                3060
            ]
        }
    },
    {
        name: 'Kindred',
        id: 42,
        icon: `${unitIconLink}Kindred.png`,
        splash: `${unitSplashLink}Kindred_0.jpg`,
        cost: 4,
        origin: ['Phantom'],
        class: ['Ranger'],
        ability: 'Creates a zone around herself for several seconds that prevents nearby allies from dying. Additionally allies in the zone cannot have their health go below a 300/600/900 depending on Kindred’s level.',
        stats: {
            dps: 36,
            as: 0.65,
            damage: 55,
            range: 3,
            armor: 20,
            mr: 20,
            health: [
                600,
                1080,
                2160
            ]
        }
    },
    {
        name: 'Leona',
        id: 43,
        icon: `${unitIconLink}Leona.png`,
        splash: `${unitSplashLink}Leona_0.jpg`,
        cost: 4,
        origin: ['Noble'],
        class: ['Knight'],
        ability: 'After a .625s delay, calls down a solar ray that deals magic damage and slows all enemies within it. The enemy in the center of the ray is stunned.',
        stats: {
            dps: 25,
            as: 0.55,
            damage: 45,
            range: 1,
            armor: 55,
            mr: 20,
            health: [
                750,
                1350,
                2700
            ]
        }
    },
    {
        name: 'Sejuani',
        id: 44,
        icon: `${unitIconLink}Sejuani.png`,
        splash: `${unitSplashLink}Sejuani_0.jpg`,
        cost: 4,
        origin: ['Glacial'],
        class: ['Knight'],
        ability: 'Creates a large glacial storm that detonates after 2 seconds dealing magic damage and stunning enemies within it.',
        stats: {
            dps: 25,
            as: 0.55,
            damage: 45,
            range: 1,
            armor: 35,
            mr: 25,
            health: [
                850,
                1530,
                3060
            ]
        }
    },
    {
        name: 'Anivia',
        id: 45,
        icon: `${unitIconLink}Anivia.png`,
        splash: `${unitSplashLink}Anivia_0.jpg`,
        cost: 5,
        origin: ['Glacial'],
        class: ['Elementalist'],
        ability: 'Channels a large hailstorm for 8 seconds, dealing magic damage every second and slwoing the attack speed of enemies inside it.',
        stats: {
            dps: 24,
            as: 0.6,
            damage: 40,
            range: 3,
            armor: 20,
            mr: 20,
            health: [
                650,
                1170,
                2340
            ]
        }
    },
    {
        name: 'Karthus',
        id: 46,
        icon: `${unitIconLink}Karthus.png`,
        splash: `${unitSplashLink}Karthus_0.jpg`,
        cost: 5,
        origin: ['Phantom'],
        class: ['Sorcerer'],
        ability: 'Channel for 3 seconds to deal magic damage to 4/7/10 random enemies, depending on Karthus’ level.',
        stats: {
            dps: 42,
            as: 0.65,
            damage: 65,
            range: 3,
            armor: 25,
            mr: 20,
            health: [
                850,
                1530,
                3060
            ]
        }
    },
    {
        name: 'Kayle',
        id: 47,
        icon: `${unitIconLink}Kayle.png`,
        splash: `${unitSplashLink}Kayle_0.jpg`,
        cost: 5,
        origin: ['Noble'],
        class: ['Knight'],
        ability: 'Targets the weakest allies, making them immune to damage and dealing magic damage at the end of the duration.',
        stats: {
            dps: 66,
            as: 1.1,
            damage: 60,
            range: 3,
            armor: 35,
            mr: 20,
            health: [
                800,
                1440,
                2880
            ]
        }
    },
    {
        name: 'Miss Fortune',
        id: 48,
        icon: `${unitIconLink}MissFortune.png`,
        splash: `${unitSplashLink}MissFortune_0.jpg`,
        cost: 5,
        origin: ['Pirate'],
        class: ['Gunslinger'],
        ability: 'Channels for 3 seconds and first 14 waves of bullets in a cone, dealing magic damage with each wave.',
        stats: {
            dps: 64,
            as: 0.85,
            damage: 75,
            range: 3,
            armor: 20,
            mr: 20,
            health: [
                650,
                1170,
                2340
            ]
        }
    },
    {
        name: 'Swain',
        id: 49,
        icon: `${unitIconLink}Swain.png`,
        splash: `${unitSplashLink}Swain_0.jpg`,
        cost: 5,
        origin: ['Imperial', 'Demon'],
        class: ['Shapeshifter'],
        ability: 'Transforms for 6 seconds, dealing magic damage to all nearby enemies with each tick while healing for each tick. At the end of the transformation, sends out a burst of energy dealing magic damage to nearby enemies.',
        stats: {
            dps: 42,
            as: 0.65,
            damage: 65,
            range: 2,
            armor: 25,
            mr: 20,
            health: [
                850,
                1530,
                3060
            ]
        }
    },
    {
        name: 'Yasuo',
        id: 50,
        icon: `${unitIconLink}Yasuo.png`,
        splash: `${unitSplashLink}Yasuo_0.jpg`,
        cost: 5,
        origin: ['Exile'],
        class: [1],
        ability: 'Stabs foward, dealing magic dmaage to two enemies in a line 2 hexes away. On third cast, instead launches a tornado, dealing the same magic damage and knocking enemies up for 1.25s in a line 6 hexes away.',
        stats: {
            dps: 65,
            as: 1,
            damage: 65,
            range: 1,
            armor: 35,
            mr: 20,
            health: [
                700,
                1260,
                2520
            ]
        }
    },
];

export const Units = units;
export const Classes = classes;
export const Origins = origins;