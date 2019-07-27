let temp0;
let eachItem = (dothis) => {
  for(let i in temp0.children){
      if(i >= 0 && i < 50)
        dothis(temp0.children[i]);
    }
}
let units = [];
eachItem( (e) => {
    let unitCells = e.cells;
    let unitObj = {
        name: unitCells[0].innerText,
        stats: {
            dps: parseFloat(unitCells[5].innerText),
            as: parseFloat(unitCells[6].innerText),
            damage: parseInt(unitCells[7].innerText),
            range: parseInt(unitCells[8].innerText),
            armor: parseInt(unitCells[9].innerText),
            mr: parseInt(unitCells[10].innerText),
            health: unitCells[4].innerText.split(' / ').map(e => parseInt(e))
        }
    };
    units.push(unitObj);
});


/** Scripts to sort all units */

let unitData = [
    {
        name: 'Leona',
        id: 43,
        icon: `${unitIconLink}Leona.png`,
        splash: `${unitSplashLink}Leona.png`,
        cost: 4,
        origin: [ 16 ],
        class: [ 4 ],
        ability: 'After a 0.625s delay, calls down a solar ray that deals [ 175 / 250 / 325 ] magic damage and slows all enemies within it. The enemy in the center of the ray is stunned for [ 5 / 8 / 11 ] seconds.',
        stats: {
            dps: [ 25, 45, 89 ],
            as: 0.55,
            damage: [ 45, 81, 162 ],
            range: 1,
            armor: 55,
            mr: 20,
            health: [ 750, 1350, 2700 ],
            startingMana: 50,
            manaCost: 100,
            critChance: 25
        }
    },
]; // should be all the unit data

let unitSortByAS,
    unitSortByDPS,
    unitSortByDMG,
    unitSortByHealth,
    unitSortByHealth2,
    unitSortByHealth3,
    unitSortByRange,
    unitSortByArmor,
    unitSortByMR,
    unitSortByManaCost,
    unitSortByStartingMana;

let unitIconLink = 'unitIconLink';
let unitSplashLink = 'unitSplashLink';

unitSortByAS = units.sort( (a, b) => { return a.stats.as < b.stats.as ? 1 : a.stats.as === b.stats.as ? 0 : -1 });
console.log(JSON.stringify(unitSortByAS.map(e => { return e.id })))

unitSortByDPS = units.sort( (a, b) => { return a.stats.dps < b.stats.dps ? 1 : a.stats.dps === b.stats.dps ? 0 : -1 });
console.log(JSON.stringify(unitSortByDPS.map(e => { return e.id })))

unitSortByDMG = units.sort( (a, b) => { return a.stats.damage < b.stats.damage ? 1 : a.stats.damage === b.stats.damage ? 0 : -1 });
console.log(JSON.stringify(unitSortByDMG.map(e => { return e.id })))

unitSortByHealth = units.sort( (a, b) => { return a.stats.health[0] < b.stats.health[0] ? 1 : a.stats.health[0] === b.stats.health[0] ? 0 : -1 });
console.log(JSON.stringify(unitSortByHealth.map(e => { return e.id })))

unitSortByHealth2 = units.sort( (a, b) => { return a.stats.health[1] < b.stats.health[1] ? 1 : a.stats.health[1] === b.stats.health[1] ? 0 : -1 });
console.log(JSON.stringify(unitSortByHealth2.map(e => { return e.id })))

unitSortByHealth3 = units.sort( (a, b) => { return a.stats.health[1] < b.stats.health[1] ? 1 : a.stats.health[1] === b.stats.health[1] ? 0 : -1 });
console.log(JSON.stringify(unitSortByHealth3.map(e => { return e.id })))

unitSortByRange = units.sort( (a, b) => { return a.stats.range < b.stats.range ? 1 : a.stats.range === b.stats.range ? 0 : -1 });
console.log(JSON.stringify(unitSortByRange.map(e => { return e.id })))

unitSortByArmor = units.sort( (a, b) => { return a.stats.armor < b.stats.armor ? 1 : a.stats.armor === b.stats.armor ? 0 : -1 });
console.log(JSON.stringify(unitSortByArmor.map(e => { return e.id })))

unitSortByMR = units.sort( (a, b) => { return a.stats.mr < b.stats.mr ? 1 : a.stats.mr === b.stats.mr ? 0 : -1 });
console.log(JSON.stringify(unitSortByMR.map(e => { return e.id })))

unitSortByManaCost = units.sort( (a, b) => { return a.stats.manaCost < b.stats.manaCost ? 1 : a.stats.manaCost === b.stats.manaCost ? 0 : -1 });
console.log(JSON.stringify(unitSortByManaCost.map(e => { return e.id })))

unitSortByStartingMana = units.sort( (a, b) => { return a.stats.startingMana < b.stats.startingMana ? 1 : a.stats.startingMana === b.stats.startingMana ? 0 : -1 });
console.log(JSON.stringify(unitSortByStartingMana.map(e => { return e.id })))



// console.log(JSON.stringify(unitSortByAS.map(e => { return e.id }))
//     JSON.stringify(unitSortByDPS.map(e => { return e.id })),
//     JSON.stringify(unitSortByDMG.map(e => { return e.id })),
//     JSON.stringify(unitSortByHealth.map(e => { return e.id })),
//     JSON.stringify(unitSortByHealth2.map(e => { return e.id })),
//     JSON.stringify(unitSortByHealth3.map(e => { return e.id })),
//     JSON.stringify(unitSortByRange.map(e => { return e.id })),
//     JSON.stringify(unitSortByArmor.map(e => { return e.id })),
//     JSON.stringify(unitSortByMR.map(e => { return e.id })),
//     JSON.stringify(unitSortByManaCost.map(e => { return e.id })),
//     JSON.stringify(unitSortByStartingMana.map(e => { return e.id }))
// );