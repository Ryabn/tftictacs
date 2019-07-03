const classes = [
    {
        name: 'Assassin',
        text: 'Assassins leap to the farthest enemy at the start of combat and deal additional Critical Strike Damage.',
        image: ``,
        bonus: [
            {
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
        bonus: [
            {
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
        bonus: [
            {
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
const unitImageLink = 'http://ddragon.leagueoflegends.com/cdn/9.13.1/img/champion/';
const units = [
    {
        name: 'Fiora',
        image: `${unitImageLink}Fiora.png`,
        cost: 1,
        origin: ['Noble'],
        class: ['Blademaster'],
        ability: 'Becomes immune to damage and spells for 1.5s, and then stuns for 1.5s and deals magic damage to the closest enemy.',
    },
    {
        name: 'Graves',
        image: `${unitImageLink}Graves.png`,
        cost: 1,
        origin: ['Pirate'],
        class: ['Gunslinger'],
        ability: 'Basic attacks deal increased physical damage and hit all enemies in front of him.'
    },
    {
        name: 'Kassadin',
        image: `${unitImageLink}Kassadin.png`,
        cost: 1,
        origin: ['Void'],
        class: ['Sorcerer'],
        ability: '(Passive) Basic attacks steal mana, converting it into a shield for 4 seconds.'
    },
    {
        name: 'Kha\'zix',
        image: `${unitImageLink}Khazix.png`,
        cost: 1,
        origin: ['Void'],
        class: [ 0 ],
        ability: 'Deals magic damage to the target enemy. This ability deals extra magic damage if the target has no allies adjacent to them.'
    },
    {
        name: 'Mordekaiser',
        image: `${unitImageLink}Mordekaiser.png`,
        cost: 1,
        origin: ['Phantom'],
        class: ['Knight'],
        ability: 'Slams his mace in front of him, dealing magic damage to two enemies in a line 3 hexes away.'
    },
    {
        name: 'Nidalee',
        image: `${unitImageLink}Nidalee.png`,
        cost: 1,
        origin: ['Wild'],
        class: ['Shapeshifter'],
        ability: 'After a .5s delay, heals herself and the weakest ally over 6 seconds, then transforms into a melee attacker, gaining attack damage.'
    },
    {
        name: 'Tristana',
        image: `${unitImageLink}Tristana.png`,
        cost: 1,
        origin: ['Yordle'],
        class: ['Gunslinger'],
        ability: 'Places a bomb on her current target that detonates after 4 seconds or 3 attacks, dealing magic damage to enemies up to 2 hexes away. The damage is increased by 50 percent with each attack. '
    },
    {
        name: 'Vayne',
        image: `${unitImageLink}Vayne.png`,
        cost: 1,
        origin: ['Noble'],
        class: ['Ranger'],
        ability: '(Passive) Every third attack against the same target deals a percentage of the target’s maximum health as bonus true damage.'
    },
    {
        name: 'Warwick',
        image: `${unitImageLink}Warwick.png`,
        cost: 1,
        origin: ['Wild'],
        class: [ 2 ],
        ability: 'Pounces onto the lowest health enemy, stunning them for 1.5s dealing magic damage over 3 hits and healing over the duration.'
    },
    {
        name: 'Darius',
        image: `${unitImageLink}Darius.png`,
        cost: 1,
        origin: ['Imperial'],
        class: ['Knight'],
        ability: 'Deals magic damage to all nearby enemies and heals himself for each enemy hit.'    
    },
    {
        name: 'Ahri',
        image: `${unitImageLink}Ahri.png`,
        cost: 2,
        origin: ['Wild'],
        class: ['Sorcerer'], 
        ability: 'Fires an orb in a line that returns to her, dealing magic damage to enemies it passes through.'
    },
    {
        name: 'Blitzcrank',
        image: `${unitImageLink}Blitzcrank.png`,
        cost: 2,
        origin: ['Robot'],
        class: [ 2 ],
        ability: 'Pulls the farthest enemy into melee range, stunning them for 2.5s, dealing magic damage, and knocks them up.'
    },
    {
        name: 'Braum',
        image: `${unitImageLink}Braum.png`,
        cost: 2,
        origin: ['Glacial'],
        class: ['Guardian'],
        ability: 'Raises a barrier for 4 seconds that redirects all incoming damage to Braum, and reduces the damage he takes through the shield.'
    },
    {
        name: 'Elise',
        image: `${unitImageLink}Elise.png`,
        cost: 2,
        origin: ['Demon'],
        class: ['Shapeshifter'],
        ability: 'Summons Spiderlings and transforms into a spider for 60 seconds, gaining life steal. '
    },
    {
        name: 'Lissandra',
        image: `${unitImageLink}Lissandra.png`,
        cost: 2,
        origin: ['Glacial'],
        class: ['Elementalist'],
        ability: 'Encases the target in ice, stunning them for 1.5s and dealing magic damage to nearby enemies. She also creates a 2x2 zone for 3 seconds that slows enemies within it for 3 seconds. If Lissandra is below 50 percent health, she instead encases herself for 2 seconds, becoming untargetable.'
    },
    {
        name: 'Lucian',
        image: `${unitImageLink}Lucian.png`,
        cost: 2,
        origin: ['Noble'],
        class: ['Gunslinger'],
        ability: 'Dashes away from nearby enemies and then attacks twice on his next attack. The first attack deals physical damage while the second deals magic damage. '
    },
    {
        name: 'Lulu',
        image: `${unitImageLink}Lulu.png`,
        cost: 2,
        origin: ['Yordle'],
        class: ['Sorcerer'],
        ability: 'Grants 1, 2, or 3 allies — depending on Lulu’s level — bonus health for 6 seconds, knocking up enemies near them for 1.25s.' 
    },
    {
        name: 'Pyke',
        image: `${unitImageLink}Pyke.png`,
        cost: 2,
        origin: ['Pirate'],
        class: [ 0 ],
        ability: 'Dashes behind the furthest enemy, creating and afterimage that, after 1s, deals magic damage and stuns all enemies it passes through. '
    },
    {
        name: 'Rek\'Sai',
        image: `${unitImageLink}Reksai.png`,
        cost: 2,
        origin: ['Void'],
        class: [ 2 ],
        ability: 'Burrows into the ground, becoming untargetable for 2 seconds while healing each .5s for 300/400/500 — depending on Rek’Sai’s level — health in total. She then unburrows, dealing magic damage and knocking up the closest enemy. '
    },
    {
        name: 'Shen',
        image: `${unitImageLink}Shen.png`,
        cost: 2,
        origin: ['Ninja'],
        class: [ 1 ],
        ability: 'Creates a zone around himself allowing allies inside to dodge all attacks. '
    },
    {
        name: 'Varus',
        image: `${unitImageLink}Varus.png`,
        cost: 2,
        origin: ['Demon'],
        class: ['Ranger'],
        ability: 'After charging for a few seconds, fires an arrow up to 8 hexes away, dealing magic damage to all enemies hit. '
    },
    {
        name: 'Zed',
        image: `${unitImageLink}Zed.png`,
        cost: 2,
        origin: ['Ninja'],
        class: [ 0 ],
        ability: 'Throws a shuriken dealing magic damage to enemies in a line 4 hexes away.'
    },
    {
        name: 'Aatrox',
        image: `${unitImageLink}Aatrox.png`,
        cost: 3,
        origin: ['Demon'],
        class: [ 1 ],
        ability: 'Deals magic damage to all enemies in a circle.'
    },
    {
        name: 'Ashe',
        image: `${unitImageLink}Ashe.png`,
        cost: 3,
        origin: ['Glacial'],
        class: ['Ranger'],
        ability: 'Fires an arrow that stuns and deals magic damage to the first enemy hit. The stun lasts longer for each hex it travels.'
    },
    {
        name: 'Cho\'Gath',
        image: `${unitImageLink}Chogath.png`,
        cost: 3,
        origin: ['Void'],
        class: ['Brawler'],
        ability: 'After a 1.5s delay, deals magic damage and knocks up all enemies in a 3x3 area, stunning them. '
    },
    {
        name: 'Evelynn',
        image: `${unitImageLink}Evelynn.png`,
        cost: 3,
        origin: ['Demon'],
        class: [ 0 ],
        ability: 'Deals magic damage tot he 3 closest enemies and blinks back 3 hexes. Damage is increased against enemies below 50 percent health. '
    },
    {
        name: 'Gangplank',
        image: `${unitImageLink}Gangplank.png`,
        cost: 3,
        origin: ['Pirate'],
        class: ['Gunslinger'],
        ability: '(Passive) Periodically spawns Powder Kegs. (Active) Detonates all active Powder Kegs, dealing magic damage to enemies caught in the blast. '
    },
    {
        name: 'Katarina',
        image: `${unitImageLink}Katarina.png`,
        cost: 3,
        origin: ['Imperial'],
        class: ['Assassin'],
        ability: 'Channels for 2.5 seconds and fires daggers at nearby enemies, dealing magic damage per tick and reducing healing on them for 3 seconds.'
    },
    {
        name: 'Kennen',
        image: `${unitImageLink}Kennen.png`,
        cost: 3,
        origin: ['Ninja', 'Yordle'],
        class: ['Elementalist'],
        ability: 'Summons a strom around him for 3 seconds dealing magic damage every .5s to nearby enemies, stunning them for 1.5s after 3 hits.'
    },
    {
        name: 'Morgana',
        image: `${unitImageLink}Morgana.png`,
        cost: 3,  
        origin: ['Demon'],
        class: ['Sorcerer'],
        ability: 'Fires chains to nearby enemies up to 3 hexes away, dealing magic damage, and slowing them by 20 percent while the chains hold. After 3 seconds if the chains held, deals additional magic damage and stuns enemies. '
    },
    {
        name: 'Poppy',
        image: `${unitImageLink}Poppy.png`,
        cost: 3,    
        origin: ['Yordle'],
        class: ['Knight'],
        ability: 'After a .75s delay, swings her hammer at the closest enemy, dealing magic damage, knocking them up, and stunning them.'
    },
    {
        name: 'Rengar',
        image: `${unitImageLink}Rengar.png`,
        cost: 3,    
        origin: ['Wild'],
        class: [ 0 ],
        ability: 'Leaps at the weakest enemy, dealing physical damage, and gaining attack speed and critical strike chance for 6 seconds. '
    },
    {
        name: 'Shyvana',
        image: `${unitImageLink}Shyvana.png`,
        cost: 3,
        origin: ['Dragon'],
        class: ['Shapeshifter'],
        ability: 'Dashes and transforms into a ranged attacker for 60 seconds gaining attack damage and attack range. When transformed, her attacks set enemies on fire, dealing magic damage over time.'
    },
    {
        name: 'Vinegar',
        image: `${unitImageLink}Veigar.png`,
        cost: 3,    
        origin: ['Yordle'],
        class: ['Sorcerer'],
        ability: 'Deals magic damage to the target enemy. If the target is a lower star level than Veigar, the target is executed.'
    },
    {
        name: 'Volibear',
        image: `${unitImageLink}Volibear.png`,
        cost: 3,    
        origin: ['Glacial'],
        class: [ 2 ],
        ability: 'For 20 seconds, empowers his basic attacks to bounce to enemies within 1 hex, dealing physical damage to secondary targets, and applying on-hit effects.'
    },
    {
        name: 'Akali',
        image: `${unitImageLink}Akali.png`,
        cost: 4,    
        origin: ['Ninja'],
        class: [ 1 ],
        ability: 'Deals magic damage to all enemies in a cone.'
    },
    {
        name: 'Aurelion Sol',
        image: `${unitImageLink}AurelionSol.png`,
        cost: 4,  
        origin: ['Dragon'],
        class: ['Sorcerer'],
        ability: 'After a .35s delay, deals magic damage to all enemies in a line.'
    },
    {
        name: 'Brand',
        image: `${unitImageLink}Brand.png`,
        cost: 4,  
        origin: ['Demon'],
        class: ['Elementalist'],
        ability: 'Unleashes a fireball that bounces several times between enemies, dealing magic damage with each bounce.'
    },
    {
        name: 'Aurelion Sol',
        image: `${unitImageLink}AurelionSol.png`,
        cost: 4,  
        origin: ['Dragon'],
        class: ['Sorcerer'],
        ability: 'After a .35s delay, deals magic damage to all enemies in a line.'
    },
    {
        name: 'Draven',
        image: `${unitImageLink}Draven.png`,
        cost: 4,
        origin: ['Imperial'],
        class: [ 1 ],
        ability: '(Passive) Basic attacks grant bonus on-hit physical damage and attack speed for 8 seconds, stacking up to two times.'
    },
    {
        name: 'Gnar',
        image: `${unitImageLink}Gnar.png`,
        cost: 4,
        origin: ['Wild', 'Yordle'],
        class: ['Shapeshifter'],
        ability: 'Transforms into a melee attacker for 60 seconds, gaining health, attack damage, and jumping behind the farthest enemy. After his jump, Gnar shoves all surrounding enemies 2 hexes toward his team, stunning them for 2 seconds and dealing magic damage. '
    },
    {
        name: 'Kindred',
        image: `${unitImageLink}Kindred.png`,
        cost: 4,
        origin: ['Phantom'],
        class: ['Ranger'],
        ability: 'Creates a zone around herself for several seconds that prevents nearby allies from dying. Additionally allies in the zone cannot have their health go below a 300/600/900 depending on Kindred’s level.'
    },
    {
        name: 'Leona',
        image: `${unitImageLink}Leona.png`,
        cost: 4,
        origin: ['Noble'],
        class: ['Knight'],
        ability: 'After a .625s delay, calls down a solar ray that deals magic damage and slows all enemies within it. The enemy in the center of the ray is stunned. '
    },
    {
        name: 'Sejuani',
        image: `${unitImageLink}Sejuani.png`,
        cost: 4,
        Origin: ['Glacial'],
        Class: ['Knight'],
        Ability: 'Creates a large glacial storm that detonates after 2 seconds dealing magic damage and stunning enemies within it. '
    },
    {
        name: 'Anivia',
        image: `${unitImageLink}.png`,
        cost: 5,
        origin: ['Glacial'],
        class: ['Elementalist'],
        ability: 'Channels a large hailstorm for 8 seconds, dealing magic damage every second and slwoing the attack speed of enemies inside it.'
    },
    {
        name: 'Karthus',
        image: `${unitImageLink}Karthus.png`,
        cost: 5,
        origin: ['Phantom'],
        class: ['Sorcerer'],
        ability: 'Channel for 3 seconds to deal magic damage to 4/7/10 random enemies, depending on Karthus’ level.'
    },
    {
        name: 'Kayle',
        image: `${unitImageLink}Kayle.png`,
        cost: 5,
        origin: ['Noble'],
        class: ['Knight'],
        ability: 'Targets the weakest allies, making them immune to damage and dealing magic damage at the end of the duration. '
    },
    {
        name: 'Miss Fortune',
        image: `${unitImageLink}MissFortune.png`,
        cost: 5,
        origin: ['Pirate'],
        class: ['Gunslinger'],
        ability: 'Channels for 3 seconds and first 14 waves of bullets in a cone, dealing magic damage with each wave.'
    },
    {
        name: 'Swain',
        image: `${unitImageLink}Swain.png`,
        cost: 5,
        Origin: ['Imperial'],
        Class: ['Shapeshifter'],
        Ability: 'Transforms for 6 seconds, dealing magic damage to all nearby enemies with each tick while healing for each tick. At the end of the transformation, sends out a burst of energy dealing magic damage to nearby enemies.'
    },
    {
        name: 'Yasuo',
        image: `${unitImageLink}Yasuo.png`,
        cost: 5,
        origin: ['Exile'],
        class: [ 1 ],
        ability: 'Stabs foward, dealing magic dmaage to two enemies in a line 2 hexes away. On third cast, instead launches a tornado, dealing the same magic damage and knocking enemies up for 1.25s in a line 6 hexes away. '
    },
];

export const Units = units;
export const Classes = classes;
export const Origins = origins;