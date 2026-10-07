elements.copper.breakInto = ["copper_coin"]
elements.silver.breakInto = ["silver_coin"]
 
elements.midas_touch.reactions.money = {};
elements.midas_touch.reactions.paper = { elem2:"money" };
elements.midas_touch.reactions.confetti = { elem2:"money" };
elements.midas_touch.reactions.copper_coin = { elem2:"gold_coin", color2:['#f58f8f', '#d06c6c', '#f58f8f'] };
elements.midas_touch.reactions.silver_coin = { elem2:"gold_coin", color2:['#c5c794', '#b0b27b', '#c5c794'] };
elements.bless.reactions.paper = {elem1:"money"}
elements.bless.reactions.confetti = {elem1:"money"}
 
elements.aluminum.reactions.oxygen = {elem1:"alumina", elem2:null, chance: 0.1, tempMin: 300}
elements.metal_scrap.reactions.oxygen = {elem1:"alumina", elem2:null, chance: 0.005, tempMin: 300}
elements.clay_soil.reactions.basalt = {elem1:["sapphire", "corundum"], chance: 0.0005, tempMin: 700}
elements.clay_soil.reactions.chromite = {
  elem1: [...Array(10).fill("ruby"), ...Array(10).fill("corundum"), "padparadscha"],
  chance: 0.0005, tempMin: 700
};
elements.molten_aluminum.reactions.oxygen = {elem1:"molten_alumina", elem2:null, chance: 0.1}
if (!elements.limestone.reactions) elements.limestone.reactions = {};
elements.limestone.reactions.steam = { elem1:"fluorite", elem2:null, chance:0.0005, tempMin:150, tempMax:500 };

elements.molten_thermite.burnInto = ["molten_iron","molten_alumina"]
 
elements.porcelain_shard.breakInto = ["alumina", "alumina", "glass_shard"]
if (!elements.porcelain_shard.reactions) elements.porcelain_shard.reactions = {};
elements.porcelain_shard.reactions.molten_slag = {elem1:"molten_slag"} 

elements.clay_soil.stateHigh = ["molten_brick"]
elements.clay_soil.tempHigh = 1540
elements.magma.stateLow = [
  ...Array(60).fill("rock"),
  ...Array(60).fill("basalt"),
  ...Array(6).fill("chromite"),
  ...Array(2).fill("fluorite"),
  "beryl"
];
 
var acidProof = [
  "ruby", "sapphire", "corundum", "padparadscha",
  "beryl", "emerald", "aquamarine",
  "chrysoberyl", "alexandrite",
  "topaz", "alumina", "silver_coin"
];
 
elements.acid.ignore = (elements.acid.ignore || []).concat(acidProof);
elements.acid_gas.ignore = (elements.acid_gas.ignore || []).concat(acidProof);
 
elements.ruby = {
    color: ["#ff0000","#ff294d","#ff8989","#a11313"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 4000 
    tempHigh: 2050,
    stateHigh: ["molten_alumina"],
    breakInto:["alumina"],
    reactions:{
        "light": { elem1:"laser", elem2:null},
    },
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
    reactions:{
        "beryllium": {elem1:"padparadscha", elem2:null, chance:0.005, tempMin:1700, tempMax:2000}
    },
}
 
elements.padparadscha = {
  color: ["#ff8989", "#ff7f29", "#ffb49d", "#df503d"],
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  hidden: true,
  density: 4000,
  tempHigh: 2050,
  stateHigh: ["molten_alumina"],
  breakInto: ["alumina"],
};
 
elements.emerald = {
    color: ["#3da51d","#31bd5b","#2bff47","#7cffae"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 2700,
    tempHigh: 1430,
    stateHigh: ["molten_glass", "molten_slag", "chrysoberyl"],
    breakInto:["beryl"],
}
 
elements.aquamarine = {
    color: ["#35afa9","#79bec7","#76f5f5","#cafffb"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 2700,
    tempHigh: 1430,
    stateHigh: ["molten_glass", "molten_slag", "chrysoberyl"],
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

elements.topaz = {
  color: ["#fddc70", "#ffb45e", "#f38c2b", "#d45810"],
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  density: 3550,
  tempHigh: 1870,
  stateHigh: ["porcelain_shard", "porcelain_shard", "fluorite"],
  breakInto: ["sand", "alumina"],
  reactions: {
    "radiation": { stain1:"#3f8fdc", tempMin:200, tempMax:500 },
  },
};

elements.alumina = {
    color: ["#ececea", "#eeeeeb", "#fffff5"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 3986,
    tempHigh: 2050,
    stateHigh: ["molten_alumina"],
    reactions: {
       "fluorite": { elem1:"topaz", elem2:null, chance:0.005, tempMin:600, tempMax:1000},
  },
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
        "oxygen": { elem1:"beryllia", elem2:null, chance:0.02, tempMin:700 },
        "radiation": { elem1:"neutron", elem2:null, chance:0.02, tempMin:700 },
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
    reactions:{
            "aluminum": {elem1:"molten_chromium", elem2:["molten_alumina","ruby"], chance:0.01, tempMin:1200},
            "charcoal": {elem1:"chromium", elem2:null, chance:0.005, tempMin:1200}
        },
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
 
elements.fluorite = {
  color: ["#b9b2c2", "#cdecdd", "#a49dac", "#dbd9a5"],
  behavior: behaviors.POWDER,
  category: "land",
  state: "solid",
  density: 3180,
  tempHigh: 1418,
  stateHigh: "molten_slag",
  reactions: {
    rock:      { elem1:"topaz", elem2:"topaz", chance:0.0005, tempMin:500, tempMax:900 },
    porcelain: { elem1:"topaz", elem2:null,    chance:0.005, tempMin:600, tempMax:1000 },
    porcelain_shard: { elem1:"topaz", elem2:null,    chance:0.005, tempMin:600, tempMax:1000 },
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
    }
}
 
elements.sulfur.reactions.silver_coin = elements.sulfur.reactions.silver;
elements.molten_sulfur.reactions.silver_coin = elements.molten_sulfur.reactions.silver;
 
elements.money={
    color:["#288544","#45c55a","#99c987"],
    behavior: behaviors.LIGHTWEIGHT,
    category: "powders",
    desc: "You're gonna be rich!",
    hidden: false,
    state: "solid",
    density: 1201,
    tempHigh: 1085,
    stateHigh: ["ash", "fire", "smoke"],
    burn: 0.12,
    burnTime: 120,
    burnInto: ["ash", "fire", "smoke"],
    reactions: {
        "body": {elem1:null, chance: 0.1},
        "termite": {elem1:null, chance: 0.05},
    }
}