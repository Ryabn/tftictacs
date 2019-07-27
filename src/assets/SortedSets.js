let unitSortByName = [
    { name: 'Aatrox', id: 24, cost: 3 },
    { name: 'Ahri', id: 11, cost: 2 },
    { name: 'Akali', id: 37, cost: 4 },
    { name: 'Anivia', id: 45, cost: 5 },
    { name: 'Ashe', id: 25, cost: 3 },
    { name: 'Aurelion Sol', id: 38, cost: 4 },
    { name: 'Blitzcrank', id: 12, cost: 2 },
    { name: 'Brand', id: 39, cost: 4 },
    { name: 'Braum', id: 13, cost: 2 },
    { name: 'Cho\'Gath', id: 36, cost: 4 },
    { name: 'Darius', id: 10, cost: 1 },
    { name: 'Draven', id: 40, cost: 4 },
    { name: 'Elise', id: 14, cost: 2 },
    { name: 'Evelynn', id: 27, cost: 3 },
    { name: 'Fiora', id: 0, cost: 1 },
    { name: 'Gangplank', id: 28, cost: 3 },
    { name: 'Garen', id: 1, cost: 1 },
    { name: 'Gnar', id: 41, cost: 4 },
    { name: 'Graves', id: 2, cost: 1 },
    { name: 'Karthus', id: 46, cost: 5 },
    { name: 'Kassadin', id: 3, cost: 1 },
    { name: 'Katarina', id: 29, cost: 3 },
    { name: 'Kayle', id: 47, cost: 5 },
    { name: 'Kennen', id: 30, cost: 3 },
    { name: 'Kha\'zix', id: 4, cost: 1 },
    { name: 'Kindred', id: 42, cost: 4 },
    { name: 'Leona', id: 43, cost: 4 },
    { name: 'Lissandra', id: 15, cost: 2 },
    { name: 'Lucian', id: 16, cost: 2 },
    { name: 'Lulu', id: 17, cost: 2 },
    { name: 'Miss Fortune', id: 48, cost: 5 },
    { name: 'Mordekaiser', id: 5, cost: 1 },
    { name: 'Morgana', id: 31, cost: 3 },
    { name: 'Nidalee', id: 6, cost: 1 },
    { name: 'Poppy', id: 32, cost: 3 },
    { name: 'Pyke', id: 18, cost: 2 },
    { name: 'Rek\'Sai', id: 19, cost: 2 },
    { name: 'Rengar', id: 33, cost: 3 },
    { name: 'Sejuani', id: 44, cost: 4 },
    { name: 'Shen', id: 20, cost: 2 },
    { name: 'Shyvana', id: 34, cost: 3 },
    { name: 'Swain', id: 49, cost: 5 },
    { name: 'Tristana', id: 7, cost: 1 },
    { name: 'Twisted Fate', id: 21, cost: 2 },
    { name: 'Varus', id: 22, cost: 2 },
    { name: 'Vayne', id: 8, cost: 1 },
    { name: 'Vinegar', id: 35, cost: 3 },
    { name: 'Volibear', id: 26, cost: 3 },
    { name: 'Warwick', id: 9, cost: 1 },
    { name: 'Yasuo', id: 50, cost: 5 },
    { name: 'Zed', id: 23, cost: 2 }
];
let traitSortByName = [
    { name: 'Assassin', id: 0, color: '#451363' },
    { name: 'Blademaster', id: 1, color: '#BBCFE7' },
    { name: 'Brawler', id: 2, color: '#EC7D1E' },
    { name: 'Demon', id: 10, color: '#8D4269' },
    { name: 'Dragon', id: 11, color: '#C92B2C' },
    { name: 'Elementalist', id: 3, color: '#815A5E' },
    { name: 'Exile', id: 12, color: '#B8B7A3' },
    { name: 'Glacial', id: 13, color: '#66DFFF' },
    { name: 'Guardian', id: 4, color: '#F0D68A' },
    { name: 'Gunslinger', id: 5, color: '#956950' },
    { name: 'Imperial', id: 15, color: '#80000B' },
    { name: 'Knight', id: 6, color: '#8EA9D1' },
    { name: 'Ninja', id: 17, color: '#B61056' },
    { name: 'Noble', id: 16, color: '#EBDE16' },
    { name: 'Phantom', id: 19, color: '#52997F' },
    { name: 'Pirate', id: 18, color: '#808101' },
    { name: 'Ranger', id: 7, color: '#8DDABD' },
    { name: 'Robot', id: 14, color: '#BDAB69' },
    { name: 'Shapeshifter', id: 8, color: '#87456B' },
    { name: 'Sorcerer', id: 9, color: '#6075D9' },
    { name: 'Void', id: 21, color: '#594A73' },
    { name: 'Wild', id: 20, color: '#51B241' },
    { name: 'Yordle', id: 22, color: '#EA9069' }
];
let itemSortByName = [ 
    { name: 'B. F. Sword', id: 2 },
    { name: 'Blade of the Ruined King', id: 25 },
    { name: 'The Bloodthirster', id: 12 },
    { name: 'Chain Vest', id: 1 },
    { name: 'Cursed Blade', id: 37 },
    { name: 'Darkin', id: 41 },
    { name: 'Force of Nature', id: 42 },
    { name: 'Frozen Heart', id: 21 },
    { name: 'Frozen Mallet', id: 35 },
    { name: 'Giant\'s Belt', id: 0 },
    { name: 'Guardian Angel', id: 8 },
    { name: 'Guinsoo\'s Rageblade', id: 22 },
    { name: 'Hextech Gunblade', id: 24 },
    { name: 'Hush', id: 39 },
    { name: 'Infinity Edge', id: 9 },
    { name: 'Ionic Spark', id: 38 },
    { name: 'Knight\'s Vow', id: 20 },
    { name: 'Locket of the Iron Solari', id: 27 },
    { name: 'Luden\'s Echo', id: 28 },
    { name: 'Morellonomicon', id: 26 },
    { name: 'Needlessly Large Rod', id: 5 },
    { name: 'Negatron Cloak', id: 4 },
    { name: 'Phantom Dancer', id: 11 },
    { name: 'Rabadon\'s Deathcap', id: 17 },
    { name: 'Rapidfire Cannon', id: 18 },
    { name: 'Recurve Bow', id: 3 },
    { name: 'Red Buff', id: 34 },
    { name: 'Redemption', id: 19 },
    { name: 'Runaan\'s Hurricane', id: 15 },
    { name: 'Seraph\'s Embrace', id: 10 },
    { name: 'Spatula', id: 7 },
    { name: 'Spear of Shojin', id: 32 },
    { name: 'Statikk Shiv', id: 16 },
    { name: 'Sword Breaker', id: 36 },
    { name: 'Sword of the Divine', id: 30 },
    { name: 'Tear of the Godess', id: 6 },
    { name: 'Thornmail', id: 13 },
    { name: 'Titanic Hydra', id: 29 },
    { name: 'Warmog\'s Armor', id: 14 },
    { name: 'Youmuu\'s Ghostblade', id: 23 },
    { name: 'Yuumi', id: 40 },
    { name: 'Zeke\'s Herald', id: 31 },
    { name: 'Zephyr', id: 33 }
];

let unitGroupByCost = { 
    '1': [ 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    '2': [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 ],
    '3': [ 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 26 ],
    '4': [ 37, 38, 39, 36, 40, 41, 42, 43, 44 ],
    '5': [ 45, 46, 47, 48, 49, 50 ] 
};


let unitSortByAS = [47,50,0,48,40,21,37,25,22,7,41,26,30,46,49,24,16,23,28,42,34,6,3,8,19,20,39,18,31,9,17,4,29,27,13,45,38,14,15,36,1,33,11,44,43,35,2,32,12,10,5];
let unitSortByDPS = [47,50,48,40,37,26,30,24,49,16,46,25,20,23,36,18,39,28,42,7,22,34,6,41,33,1,27,29,4,9,17,31,21,3,2,11,0,8,19,5,10,12,32,43,44,35,13,15,14,38,45];
let unitSortByDMG = [26,40,48,36,30,37,20,46,16,49,24,50,27,39,18,23,25,47,2,1,33,42,28,32,12,10,5,11,31,17,9,4,29,6,34,22,7,35,44,43,8,3,41,45,38,14,15,13,19,0,21];
let unitSortByHealth = [36,46,49,44,47,32,24,43,41,13,26,40,50,39,28,48,37,20,31,34,45,19,16,18,1,42,12,10,9,38,30,27,25,33,8,3,23,5,17,4,6,22,7,2,11,29,35,14,15,21,0];
let unitSortByHealth2 = [36,46,49,44,47,32,24,43,41,13,26,40,50,39,28,37,48,20,31,34,45,19,16,18,1,42,12,10,9,38,27,30,25,33,8,3,23,5,17,4,6,22,7,14,2,11,29,35,15,21,0];
let unitSortByHealth3 = [36,46,49,44,47,32,24,43,41,13,26,40,50,39,28,37,48,20,31,34,45,19,16,18,1,42,12,10,9,38,27,30,25,33,8,3,23,5,17,4,6,22,7,14,2,11,29,35,15,21,0];
let unitSortByRange = [25,22,7,46,47,40,39,48,45,16,42,38,8,6,11,35,21,49,41,31,30,17,14,15,36,44,32,24,43,13,26,50,28,37,20,34,19,18,1,12,10,9,27,33,3,23,5,4,2,29,0];
let unitSortByArmor = [43,32,47,44,50,1,12,5,41,26,20,9,22,46,40,39,16,8,49,17,14,24,13,18,10,3,23,0,25,7,48,45,42,38,6,11,35,21,31,30,15,36,28,37,34,19,27,33,4,2,29];
let unitSortByMR = [44,43,32,47,50,1,12,5,41,26,20,9,22,46,40,39,16,8,49,17,14,24,13,18,10,3,23,0,25,7,48,45,42,38,6,11,35,21,31,30,15,36,28,37,34,19,27,33,4,2,29];
let unitSortByManaCost = [44,12,20,9,17,42,31,30,15,36,19,41,39,18,38,43,47,1,5,49,10,25,48,45,6,28,34,29,46,32,26,22,14,24,23,0,11,35,27,33,40,13,7,21,4,16,50,37,8,3,2];
let unitSortByStartingMana = [20,44,9,42,31,30,36,18,43,47,12,17,15,19,41,39,38,1,5,49,10,25,48,45,6,28,34,29,46,32,26,22,14,24,23,0,11,35,27,33,40,13,7,21,4,16,50,37,8,3,2];

// SortByName has additional info beacuse it needs them to display in the nav

export const USortByName = unitSortByName;
export const TSortByName = traitSortByName;
export const ISortByName = itemSortByName;

export const UGroupByCost = unitGroupByCost;
export const USortByAS = unitSortByAS;
export const USortByDPS = unitSortByDPS;
export const USortByDMG = unitSortByDMG;
export const USortByHealth = unitSortByHealth;
export const USortByHealth2 = unitSortByHealth2;
export const USortByHealth3 = unitSortByHealth3;
export const USortByRange = unitSortByRange;
export const USortByArmor = unitSortByArmor;
export const USortByMR = unitSortByMR;
export const USortByManaCost = unitSortByManaCost;
export const USortByStartingMana = unitSortByStartingMana;

