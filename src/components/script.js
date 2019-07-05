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
let unitStats = [
    {
      name: Aatrox,
      stats: {
        dps: 42,
        as: 0.65,
        damage: 65,
        range: 1,
        armor: 25,
        mr: 20,
        health: [
          650,
          1170,
          2340
        ]
      }
    },
    {
      name: Ahri,
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
      name: Akali,
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
      name: Anivia,
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
      name: Ashe,
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
      name: Aurelion-Sol,
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
      name: Blitzcrank,
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
      name: Brand,
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
      name: Braum,
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
      name: ChoGath,
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
      name: Darius,
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
      name: Draven,
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
      name: Elise,
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
      name: Evelynn,
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
      name: Fiora,
      stats: {
        dps: 28,
        as: 0.7,
        damage: 40,
        range: 1,
        armor: 25,
        mr: 20,
        health: [
          400,
          720,
          1440
        ]
      }
    },
    {
      name: Gangplank,
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
      name: Garen,
      stats: {
        dps: 30,
        as: 0.55,
        damage: 55,
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
      name: Gnar,
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
      name: Graves,
      stats: {
        dps: 28,
        as: 0.5,
        damage: 55,
        range: 1,
        armor: 20,
        mr: 20,
        health: [
          500,
          900,
          1800
        ]
      }
    },
    {
      name: Karthus,
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
      name: Kassadin,
      stats: {
        dps: 29,
        as: 0.65,
        damage: 45,
        range: 1,
        armor: 25,
        mr: 20,
        health: [
          550,
          990,
          1980
        ]
      }
    },
    {
      name: Katarina,
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
      name: Kayle,
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
      name: Kennen,
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
      name: KhaZix,
      stats: {
        dps: 30,
        as: 0.6,
        damage: 50,
        range: 1,
        armor: 20,
        mr: 20,
        health: [
          500,
          900,
          1800
        ]
      }
    },
    {
      name: Kindred,
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
      name: Leona,
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
      name: Lissandra,
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
      name: Lucian,
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
      name: Lulu,
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
      name: Miss-Fortune,
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
      name: Mordekaiser,
      stats: {
        dps: 25,
        as: 0.5,
        damage: 50,
        range: 1,
        armor: 35,
        mr: 20,
        health: [
          500,
          900,
          1800
        ]
      }
    },
    {
      name: Morgana,
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
      name: Nidalee,
      stats: {
        dps: 33,
        as: 0.65,
        damage: 50,
        range: 3,
        armor: 20,
        mr: 20,
        health: [
          500,
          900,
          1800
        ]
      }
    },
    {
      name: Poppy,
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
      name: Pyke,
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
      name: RekSai,
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
      name: Rengar,
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
      name: Sejuani,
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
      name: Shen,
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
      name: Shyvana,
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
      name: Swain,
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
      name: Tristana,
      stats: {
        dps: 35,
        as: 0.7,
        damage: 50,
        range: 4,
        armor: 20,
        mr: 20,
        health: [
          500,
          900,
          1800
        ]
      }
    },
    {
      name: Twisted-Fate,
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
      name: Varus,
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
      name: Vayne,
      stats: {
        dps: 27,
        as: 0.6,
        damage: 45,
        range: 3,
        armor: 25,
        mr: 20,
        health: [
          550,
          990,
          1980
        ]
      }
    },
    {
      name: Veigar,
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
      name: Volibear,
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
      name: Warwick,
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
      name: Yasuo,
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
    }
  ]