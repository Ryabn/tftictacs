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

let unitSortByAS = [2, 10, 12, 5, 32, 1, 11, 26, 33, 35, 36, 43, 44, 8, 13, 14, 15, 17, 18, 20, 4, 9, 27, 28, 29, 31, 38, 39, 45, 19, 23, 24, 30, 34, 40, 42, 46, 49, 6, 3, 16, 0, 7, 22, 25, 41, 21, 37, 48, 50, 47];
let unitSortByDPS = [13, 14, 15, 38, 45, 35, 43, 44, 10, 12, 5, 32, 19, 8, 0, 2, 11, 3, 17, 4, 9, 27, 29, 31, 21, 1, 33, 41, 34, 6, 28, 7, 22, 42, 18, 39, 36, 20, 23, 26, 25, 24, 46, 49, 16, 30, 40, 37, 48, 50, 47];
let unitSortByHealth = [0, 15, 35, 11, 29, 21, 14, 5, 2, 17, 4, 6, 7, 22, 23, 8, 3, 27, 33, 34, 25, 30, 38, 10, 12, 9, 1, 28, 42, 18, 16, 45, 19, 31, 20, 26, 48, 39, 40, 37, 50, 13, 43, 24, 32, 47, 44, 41, 46, 49, 36];
let unitSortByRange = [36, 0, 29, 5, 2, 4, 23, 3, 27, 33, 34, 10, 12, 9, 1, 28, 18, 19, 20, 26, 37, 50, 13, 43, 24, 32, 44, 15, 14, 17, 30, 31, 41, 49, 35, 11, 21, 6, 8, 38, 42, 16, 45, 48, 39, 40, 47, 46, 7, 22, 25];
let unitSortByArmor = [36, 29, 2, 4, 27, 33, 34, 28, 19, 37, 15, 30, 31, 35, 11, 21, 6, 38, 42, 45, 48, 7, 25, 0, 23, 3, 10, 18, 13, 24, 14, 17, 49, 8, 16, 39, 40, 46, 22, 9, 20, 32, 5, 12, 1, 26, 50, 44, 41, 47, 43];

// SortByName has additional info beacuse it needs them to display in the nav
export const USortByName = unitSortByName;
export const TSortByName = traitSortByName;
export const ISortByName = itemSortByName;

export const UGroupByCost = unitGroupByCost;
export const USortByAS = unitSortByAS;
export const USortByDPS = unitSortByDPS;
export const USortByHealth = unitSortByHealth;
export const USortByRange = unitSortByRange;
export const USortByArmor = unitSortByArmor;

