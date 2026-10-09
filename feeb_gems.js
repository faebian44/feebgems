try {

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
elements.clay_soil.reactions.basalt = {elem1:["sapphire", "corundum"], chance: 0.0003, tempMin: 700}
elements.clay_soil.reactions.chromite = {
  elem1: [...Array(10).fill("ruby"), ...Array(10).fill("corundum"), "padparadscha"],
  chance: 0.0003, tempMin: 700
};
elements.molten_aluminum.reactions.oxygen = {elem1:"molten_alumina", elem2:null, chance: 0.1}
if (!elements.limestone.reactions) elements.limestone.reactions = {};
elements.limestone.reactions.water = { elem1:"fluorite", elem2:null, chance:0.0005, tempMin:55, tempMax:100 };
elements.glass_shard.reactions.glass_shard = { elem1:"quartz", chance:0.0005, tempMin:1000, tempMax:1450 };

elements.basalt.reactions.salt_water = { elem2:"pyrolusite", chance:0.00005 };
elements.mud.reactions.dirty_water = { elem1:"pyrolusite", chance:0.00005 };
elements.radiation.reactions.beryl = {elem1:"heliodor", chance:"0.01"};

for (var key in elements) {
  var r = elements[key].reactions;
  if (r && r.limestone && r.limestone.elem2 === "wet_sand") delete r.limestone;
}
elements.basalt.reactions.water = {elem2: [...Array(28).fill("quartz"), ...Array(4).fill("amethyst"), ...Array(4).fill("pyrolusite"), "citrine"], chance: 0.0002, tempMin: 55, tempMax: 100};

elements.molten_thermite.burnInto = ["molten_iron","molten_alumina"]
 
elements.porcelain_shard.breakInto = ["alumina", "alumina", "glass_shard"]
if (!elements.porcelain_shard.reactions) elements.porcelain_shard.reactions = {};
elements.porcelain_shard.reactions.molten_slag = {elem1:"molten_slag"} 
elements.clay.tempHigh = 600
elements.porcelain.tempHigh = 1850;
elements.porcelain.stateHigh = ["molten_glass", "molten_glass", "corundum"];
elements.porcelain_shard.tempHigh = 1850;
elements.porcelain_shard.stateHigh = ["molten_glass", "molten_glass", "corundum"];
if (!elements.clay_shard.reactions) elements.clay_shard.reactions = {};
elements.clay_shard.reactions.water = { elem1:"clay_soil", chance:0.0002 };
elements.clay_shard.reactions.molten_slag = {elem1:"molten_slag"} 
if (!elements.baked_clay.reactions) elements.baked_clay.reactions = {};
elements.baked_clay.reactions.water = { elem1:"clay_shard", elem2:"steam", chance:0.6, tempMin:300 };

if (elements.sandstone) {
  if (!elements.sandstone.reactions) elements.sandstone.reactions = {};
  elements.sandstone.reactions.magma = { elem1:"quartz", chance:0.0002 };
}

elements.clay_soil.stateHigh = ["molten_brick"]
elements.clay_soil.tempHigh = 1540
elements.magma.stateLow = [
  ...Array(120).fill("rock"),
  ...Array(120).fill("basalt"),
  ...Array(12).fill("chromite"),
  ...Array(4).fill("fluorite"),
  "beryl", "beryl",
  "dumortierite"
];
 
var acidProof = [
  "ruby", "sapphire", "corundum", "padparadscha",
  "beryl", "emerald", "aquamarine",
  "chrysoberyl", "alexandrite",
  "topaz", "alumina", "silver_coin",
  "quartz", "amethyst", "citrine"
];
 
elements.acid.ignore = (elements.acid.ignore || []).concat(acidProof);
elements.acid_gas.ignore = (elements.acid_gas.ignore || []).concat(acidProof);
 
elements.ruby = {
    color: ["#ff0000","#ff5e79","#ffafaf","#a11313"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 4000,
    tempHigh: 2050,
    hardness: 0.9,
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
    hardness: 0.9,
    stateHigh: ["molten_alumina"],
    breakInto:["alumina"],
    reactions:{
        "beryllium": {elem1:"padparadscha", elem2:null, chance:0.005, tempMin:1700, tempMax:2000},
        "light": {elem2:"laser", color2:['#2d1bce']}
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
  hardness: 0.9,
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
    hardness: 0.8,
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
    hardness: 0.8,
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
  hardness: 0.85,
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
  hardness: 0.85,
  tempHigh: 1870,
  stateHigh: ["molten_alumina", "beryllia"],
  breakInto: ["chrysoberyl"],
};

elements.heliodor = {
  color: ["#fcfbc8", "#f0d840", "#f5df1f", "#d8a826"],
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  hidden: true,
  density: 2700,
  tempHigh: 400,
  stateHigh: "aquamarine",
  breakInto: ["beryl"],
};

elements.morganite = {
  color: ["#f8bbca", "#ffe5f0", "#dfa1c5", "#fdb5c7"],
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  hidden: true,
  density: 2700,
  tempHigh: 1430,
  stateHigh: ["molten_glass", "molten_slag", "chrysoberyl"],
  breakInto: ["beryl"],
  reactions: {
    "fluorite": {elem1:"red_beryl", chance:0.0002, tempMin:500, tempMax:900},
    "radiation": {stain1:"#ff5faa", tempMin:400},
  },
};

elements.red_beryl = {
  color: ["#d31740", "#972c6a", "#ff4ca0", "#f32e2e", "#b41d1d", "#e6719d",],
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  hidden: true,
  density: 2700,
  tempHigh: 2430,
  stateHigh: ["molten_glass", "chrysoberyl", "chrysoberyl"],
};

elements.topaz = {
  color: ["#fddc70", "#ffb45e", "#f38c2b", "#d45810"],
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  density: 3550,
  tempHigh: 1870,
  hardness: 0.75,
  stateHigh: ["porcelain_shard", "porcelain_shard", "fluorite"],
  breakInto: ["sand", "alumina"],
  reactions: {
    "radiation": {stain1:"#3f8fdc", tempMin:200, tempMax:500 },
  },
};

elements.amethyst = {
  color: ["#5825b8", "#bf5eff", "#e4c3ff", "#c19bff"],
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  density: 2650,
  tempHigh: 450,
  hardness: 0.7,
  stateHigh: ["citrine"],
  stateHighColor: ["#f39b49", "#ffc061", "#ffd16e", "#fff4b4"],
  breakInto: ["sand"],
  reactions: {
    "light": {elem1: "quartz", chance: 0.001},
  },
};

elements.citrine = {
  color: ["#eeb844", "#f8cf77", "#f7df77", "#fffbc6"],
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  density: 2650,
  tempHigh: 2700,
  hardness: 0.7,
  stateHigh: ["molten_glass"],
  breakInto: ["sand"],
};

elements.rose_quartz = {
  color: ["#ff7996", "#fa8aab", "#ffafdb", "#ffb9d4"],
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  density: 2650,
  tempHigh: 1700,
  stateHigh: ["molten_glass"],
  breakInto: ["sand"],
  reactions: {
    "light": { elem1:"quartz", chance:0.005 },
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
};
 
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
            "electric":{ elem1:"molten_aluminum", elem2:null, chance:0.05}
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
    reactions:{
        "rust": {elem1:"sapphire", elem2:null, chance:0.002, tempMin:1600, tempMax:2000}, // // // /  /
    },
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
    color:["#444645",],
    behavior: behaviors.WALL,
    category: "solids",
    hidden: false,
    state: "solid",
    tempHigh: 1287,
    density: 1845,
    stateHigh: ["molten_beryllium"],
    hardness: 0.6,
    conduct: 0.4,
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
            "molten_iron":{elem1:"molten_steel"},
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
            "iron": {elem1:"aquamarine", elem2:null, chance:0.005, tempMin:900, tempMax:1400},
    },
},
 
elements.fluorite = {
  color: ["#b9b2c2", "#cdecdd", "#a49dac", "#dbd9a5"],
  behavior: behaviors.POWDER,
  category: "land",
  state: "solid",
  density: 3180,
  tempHigh: 1418,
  hardness: 0.4,
  stateHigh: "molten_slag",
  reactions: {
    rock:      { elem1:"topaz", chance:0.0005, tempMin:500, tempMax:900 },
    porcelain: { elem1:"topaz", elem2:null,    chance:0.005, tempMin:600, tempMax:1000 },
    porcelain_shard: { elem1:"topaz", elem2:null,    chance:0.005, tempMin:600, tempMax:1000 },
    acid: { elem1:"acid_gas" },
  },
};

elements.quartz = {
  color: ["#9a9b9e", "#ebf3f2", "#bfc1cf", "#c6cec8"],
  behavior: behaviors.POWDER,
  category: "powders",
  state: "solid",
  density: 2650,
  tempHigh: 1800,
  stateHigh: "molten_glass",
  breakInto: "sand",
  reactions: {
    "radiation": {elem1:"amethyst", chance:0.008},
  },
}

elements.pyrolusite = {
  color: ["#464653", "#3f3f47"],
  behavior: behaviors.POWDER,
  category: "land",
  state: "solid",
  hidden: true,
  density: 2500,
  tempHigh: 635,
  stateHigh: ["basalt", "rust"],
  breakInto: ["rock"],
  hardness: 0.4,
  reactions: {
        "beryl": {elem1:"morganite", chance:"0.001", tempMin:300, tempMax:530 },
  }
};

elements.dumortierite = {
  color: ["#3b4f9e", "#29387a", "#8693cf", "#5369b3"],
  behavior: behaviors.POWDER,
  category: "land",
  state: "solid",
  density: 2350, //
  hardness: 0.75,
  tempHigh: 1310,
  stateHigh: "porcelain_shard", 
  breakInto: ["alumina", "sand"],
  reactions: {
    "rock":   { elem1:"rose_quartz", chance:0.00005, tempMin:700, tempMax:800 },
    "quartz": { elem2:"rose_quartz", chance:0.002, tempMin:400, tempMax:800 },
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
        "bleach": {elem1:"paper", chance: 0.05},
    }
}

} catch (e) { alert("feeb_gems error: " + e.message + "\n" + e.stack); }
