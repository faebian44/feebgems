elements.aluminum.reactions.oxygen = {elem1:"alumina", chance: 0.1, tempMin: 300}

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