elements.copper.breakInto = ["copper_coin"]
elements.silver.breakInto = ["silver_coin"]

elements.confetti.reactions.midas_touch = {elem1:"money"}
elements.paper.reactions.midas_touch = {elem1:"money"}
elements.bless.reactions.paper = {elem1:"money"}
elements.bless.reactions.confetti = {elem1:"money"}

elements.aluminum.reactions.oxygen = {elem1:"alumina", elem2:null, chance: 0.1, tempMin: 300}
elements.metal_scrap.reactions.oxygen = {elem1:"alumina", elem2:null, chance: 0.005, tempMin: 300}
elements.clay_soil.reactions.basalt = {elem1:["sapphire", "corundum"], chance: 0.0005, tempMin: 700}
elements.clay_soil.reactions.chromite = {elem1:["ruby", "corundum"], chance: 0.0005, tempMin: 700}
elements.molten_aluminum.reactions.oxygen = {elem1:"molten_alumina", elem2:null, chance: 0.1}

elements.clay_soil.stateHigh = ["molten_brick"]
elements.clay_soil.tempHigh = 1540
elements.magma.stateLow = [
  ...Array(60).fill("rock"),
  ...Array(60).fill("basalt"),
  ...Array(6).fill("chromite"),
  "beryl"
];

elements.midas_touch.ignore = ["money"]

elements.ruby = {
    color: ["#ff0000","#ff294d","#ff8989","#a11313"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 4000,
    tempHigh: 2050,
    stateHigh: ["molten_alumina"],
    breakInto:["alumina"],
}

elements.sapphire = {
    color: ["#1900ff","#5845ff","#2b63ff","#7cb9ff"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 4000,
    tempHigh: 2050,
    stateHigh: ["molten_alumina"],
    breakInto:["alumina"],
}

elements.emerald = {
    color: ["#3da51d","#31bd5b","#2bff47","#7cffae"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 2700,
    tempHigh: 1430,
    stateHigh: ["molten_glass", "molten_glass", "chrysoberyl"],
    breakInto:["beryl"],
}

elements.aquamarine = {
    color: ["#35afa9","#79bec7","#76f5f5","#cafffb"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 2700,
    tempHigh: 1430,
    stateHigh: ["molten_glass", "molten_glass", "chrysoberyl"],
    breakInto:["beryl"],
}

elements.chrysoberyl = {
  color: ["#c4bc34", "#abb152", "#e2c12d", "#fdf895"],
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  hidden: true,
  density: 3700,
  tempHigh: 1870,
  stateHigh: ["molten_alumina", "molten_beryllia"],
  breakInto: ["alumina", "beryllia"],
  reactions:{
        "glass_shard": { elem1:"beryl", elem2:null, chance:0.005, tempMin:900, tempMax:1400 }, 
        "sand": { elem1:"beryl", elem2:null, chance:0.0005, tempMin:900, tempMax:1400 },
        "chromite": { elem1:"alexandrite", chance:0.0003, tempMin:700 },
        "chromium": { elem1:"alexandrite", elem2:null, chance:0.005, tempMin:900, tempMax:1400 },
    },
};

elements.alexandrite = {
  color: ["#46e0a0", "#3a9e88", "#3a3b8b", "#b633a5", "#e051aa"],
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  hidden:true,
  density: 3730,
  tempHigh: 1870,
  stateHigh: ["molten_alumina", "beryllia"],
  breakInto: ["chrysoberyl"],
};

elements.alumina = {
    color: ["#ececea", "#eeeeeb", "#fffff5"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 3986,
    tempHigh: 2050,
    stateHigh: ["molten_alumina"],
}

elements.beryllia = {
  color: ["#f4f4f0", "#e8e8e2", "#fafaf7"],
  behavior: behaviors.POWDER,
  category: "powders",
  hidden: true,
  state: "solid",
  density: 3010,
  tempHigh: 2530,
  stateHigh: ["molten_beryllia"],
  reactions:{
        "alumina": { elem1:"chrysoberyl", elem2:null, chance:0.01, tempMin:1200 },
        "magnesium": { elem1:"beryllium", elem2:null, chance:0.005, tempMin:1200 },
    },
};

elements.molten_alumina={
    color:["#ee380a","#c71c1c","#ff5e00"],
    behavior: behaviors.MOLTEN,
    category: "liquids",
    hidden: true,
    state: "liquid",
    stateLow: "corundum",
    tempLow: 1850,
    tempHigh: 4050,
    stateHigh: ["molten_aluminum", "oxygen"],
    reactions:{
            "molten_iron":{elem1:"sapphire", elem2:null, tempMin: 1805},
            "molten_metal_scrap":{elem1:["ruby","sapphire","sapphire","sapphire","corundum"], elem2:null, tempMin: 1805, chance: 0.4},
            "molten_slag":{elem1:["ruby","sapphire","sapphire","sapphire","corundum","corundum","corundum","corundum","corundum","corundum"], tempMin: 1805, chance: 0.01},
            "magma":{elem1:["ruby","sapphire","sapphire","sapphire","corundum","corundum","corundum","corundum","corundum","corundum"], tempMin: 1805, chance: 0.01},
            "molten_chromium":{elem1:"ruby", elem2:null, tempMin: 1805},
        },
}

elements.molten_beryllia = {
    color: ["#ff8147", "#ff9a2e", "#ff9870"],
    behavior: behaviors.MOLTEN,
    category: "liquids",
    hidden: true,
    state: "liquid",
    density: 2700,
    tempLow: 2430,
    stateLow: "beryllia",
};

elements.corundum={
    color:["#e9e8e6","#ebe0d0","#ddc2b0","#855f79","#dfe9b4"],
    behavior: behaviors.POWDER,
    category: "powders",
    hidden: false,
    state: "solid",
    tempHigh: 2050,
    density: 4020,
    stateHigh: ["molten_alumina"],
    breakInto:["alumina"],
}

elements.chromium={
    color:["#f5f5f5","#b4b9bb","#9898a0","#abb5be"],
    behavior: behaviors.WALL,
    category: "solids",
    hidden: false,
    state: "solid",
    tempHigh: 1907,
    density: 7192,
    stateHigh: ["molten_chromium"],
    breakInto:["metal_scrap"],
    conduct: 0.35,
    hardness: 0.85,
}

elements.beryllium={
    color:["#747272","#434744","#343436",],
    behavior: behaviors.WALL,
    category: "solids",
    hidden: false,
    state: "solid",
    tempHigh: 1287,
    density: 1845,
    stateHigh: ["molten_beryllium"],
    hardness: 0.6,
    reactions:{
        oxygen: { elem1:"beryllia", elem2:null, chance:0.02, tempMin:700 },
        },
}

elements.molten_chromium={
    color:["#ff6a07","#ff9900","#ff4800"],
    behavior: behaviors.MOLTEN,
    category: "liquids",
    hidden: true,
    state: "liquid",
    stateLow: "chromium",
    density: 6300,
    tempLow: 1807,
    reactions:{
            "magma":{elem1:"molten_slag"},
        },
}

elements.molten_beryllium={
    color:["#ff8f45","#ffa318","#ff7f16"],
    behavior: behaviors.MOLTEN,
    category: "liquids",
    hidden: true,
    state: "liquid",
    stateLow: "beryllium",
    density: 1755,
    tempLow: 1187,
    reactions:{
            "magma": {elem1:"molten_slag"},
            "oxygen": { elem1:"beryllia", elem2:null, chance:0.1 }
        },
}

elements.chromite={
    color:["#2e2e30","#2e2e30","#b4c47d","#c9f5ed"],
    behavior: behaviors.POWDER,
    category: "land",
    hidden: false,
    state: "solid",
    tempHigh: 1590,
    density: 2500,
    stateHigh: ["molten_chromium", "molten_iron"],
    breakInto:["metal_scrap", "sand"],
    hardness: 0.55,
}

elements.beryl = {
  name: "Beryl",
  color: ["#bfe3d0", "#a9d6c0", "#d3ecdf"],
  behavior: behaviors.POWDER,
  category: "land",
  state: "solid",
  density: 2700,
  tempHigh: 1450,
  stateHigh: ["molten_glass", "molten_glass", "chrysoberyl"],
  reactions:{
            "chromite":{elem1:"emerald", chance:0.0005, tempMin:700},
            "basalt": {elem1:"aquamarine", chance:0.0005, tempMin:700},
            "chromium": {elem1:"emerald", elem2:null, chance:0.005, tempMin:900, tempMax:1400},
            "iron": {elem1:"aquamarine", elem2:null, chance:0.005, tempMin:900, tempMax:1400}
    },
};

elements.copper_coin={
    color:["#b95920","#e24608","#ff976e","#ffcdab"],
    behavior: behaviors.POWDER,
    category: "powders",
    hidden: false,
    state: "solid",
    density: 8960,
    tempHigh: 1085,
    stateHigh: ["molten_copper"],
    reactions: {
        "body": {elem1:null, chance: 0.005},
        "mercury": {elem1:"amalgam", elem2:null, chance: 0.01},
        "midas_touch": {elem1:"gold_coin", color:["#718a7d"]},
        "oxygen": {elem1:"oxidized_copper", elem2:null, chance: 0.01},
    }
}

elements.silver_coin={
    color:["#656669","#92a0ac","#cdd1d6","#fdfeff"],
    behavior: behaviors.POWDER,
    category: "powders",
    hidden: false,
    state: "solid",
    density: 10497,
    tempHigh: 962,
    stateHigh: ["molten_silver"],
    reactions: {
        "body": {elem1:null, chance: 0.01},
        "mercury": {elem1:"amalgam", elem2:null, chance: 0.05},
        "midas_touch": {elem1:"gold_coin", color:["#718a7d"]}
    }
}

elements.money={
    color:["#288544","#45c55a","#99c987"],
    behavior: behaviors.LIGHTWEIGHT,
    category: "powders",
    desc: "You're gonna be rich!",
    hidden: false,
    state: "solid",
    density: 1201,
    tempHigh: 1085,
    ignore: ["midas_touch"],
    stateHigh: ["ash", "fire", "smoke"],
    burn: 0.12,
    burnTime: 120,
    burnInto: ["ash", "fire", "smoke"],
    reactions: {
        "body": {elem1:null, chance: 0.1},
        "termite": {elem1:null, chance: 0.05},
    }
}
