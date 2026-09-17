elements.aluminum.reactions.oxygen = {elem1:"alumina", chance: 0.1, tempMin: 300}

elements.copper.breakInto = ["copper_coin"]
elements.silver.breakInto = ["silver_coin"]
elements.midas_touch.reactions.confetti = {elem1:"money"}
elements.midas_touch.reactions.money = {elem1:"money"}
elements.bless.reactions.paper = {elem1:"money"}

elements.ruby = {
    color: ["#ff0000","#ff294d","#ff8989","#a11313"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 3800,
    tempHigh: 2050,
    stateHigh: ["oxygen", "molten_aluminum"],
    breakInto:["metal_scrap","metal_scrap","metal_scrap","oxygen"],
}

elements.alumina = {
    color: ["#ececea"],
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 3986,
    tempHigh: 2050,
    stateHigh: ["molten_alumina"],
}

elements.molten_alumina={
    color:["#ee250a","#c71c1c","#ff2600"],
    behavior: behaviors.MOLTEN,
    category: "liquids",
    hidden: true,
    state: "liquid",
    stateLow: "corundum",
    tempLow: 1800,
}

elements.corundum={
    color:["#e9e8e6","#ebe0d0","#ddc2b0"],
    behavior: behaviors.WALL,
    category: "solids",
    hidden: false,
    state: "solid",
}

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
        "mercury": {elem1:"amalgam", chance: 0.01},
        "midas_touch": {elem1:"gold_coin", color:["#718a7d"]},
        "oxygen": {elem1:"oxidized_copper", chance: 0.01},
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
        "mercury": {elem1:"amalgam", chance: 0.01},
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
    stateHigh: ["ash", "fire", "smoke"],
    burn: 0.12,
    burnTime: 120,
    burnInto: ["ash", "fire", "smoke"],
    reactions: {
        "body": {elem1:"air", chance: 0.1},
    }
}
