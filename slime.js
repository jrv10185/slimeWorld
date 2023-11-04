class Slime{
    constructor(name, sex, attack, defense, hitPoints, magicPoints, slimeClass, level, skill1, skill2, skill3, skill4, expNeeded) {
        this.name = name;
        this.sex = sex;
        this.attack = attack;
        this.defense = defense;
        this.hitPoints = hitPoints;
        this.magicPoints = magicPoints;
        this.slimeClass = slimeClass;
        this.level = level;
        this.skill1 = skill1;
        this.skill2 = skill2;
        this.skill3 = skill3;
        this.skill4 = skill4;
        this.expNeeded = expNeeded;
    }
}
var names =["Bob","Mindy"]
var sexes =["Male","Female"];
var classes = ["Barbarian", "Bard", "Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard"];
var skills = ["Attack Skill", "Defense Skill", "Healing Skill", "Magic Skill"];

// Function to generate a random slime
function generateRandomSlime() {
    var name = names[Math.floor(Math.random() * names.length)];
    var sex = sexes[Math.floor(Math.random() * sexes.length)];
    var slimeClass = classes[Math.floor(Math.random() * classes.length)];

    //set class-dependent ranges
    var attributeRanges = {
        "Barbarian": {attack: [15, 18], defense:[14, 17], hitPoints: [12, 16], magicPoints: [0, 2]},
        "Bard": {attack: [11, 14], defense:[11, 14], hitPoints: [6, 10], magicPoints: [4, 10]},
        "Cleric": {attack: [11, 14], defense:[12, 16], hitPoints: [8, 12], magicPoints: [4, 10]},
        "Druid": {attack: [11, 14], defense:[11, 14], hitPoints: [8, 12], magicPoints: [4, 10]},
        "Fighter": {attack: [16, 10], defense:[14, 17], hitPoints: [10, 14], magicPoints: [0, 2]},
        "Monk": {attack: [11, 16], defense:[11, 14], hitPoints: [6, 10], magicPoints: [0, 2]},
        "Paladin": {attack: [15, 18], defense:[14, 17], hitPoints: [10, 14], magicPoints: [0, 6]},
        "Ranger": {attack: [11, 16], defense:[11, 14], hitPoints: [8, 12], magicPoints: [0, 6]},
        "Rogue": {attack: [11, 14], defense:[11, 14], hitPoints: [6, 10], magicPoints: [0, 2]},
        "Sorcer": {attack: [11, 14], defense:[11, 14], hitPoints: [4, 8], magicPoints: [8, 14]},
        "Warlock": {attack: [11, 16], defense:[11, 14], hitPoints: [6, 10], magicPoints: [6, 12]},
        "Wizard": {attack: [11, 14], defense:[10, 13], hitPoints: [4, 8], magicPoints: [8, 14]}
    };

    var attributeRange = attributeRanges[slimeClass];

    var attack = Math.floor(Math.random() * (attributeRange.attack[1] - attributeRange.attack[0] + 1)) + attributeRange.attack[0];
    var defense = Math.floor(Math.random() * (attributeRange.defense[1] - attributeRange.defense[0] + 1)) + attributeRange.defense[0];
    var hitPoints = Math.floor(Math.random() * (attributeRange.hitPoints[1] - attributeRange.hitPoints[0] + 1)) + attributeRange.hitPoints[0];
    var magicPoints = Math.floor(Math.random() * (attributeRange.magicPoints[1] - attributeRange.magicPoints[0] + 1)) + attributeRange.magicPoints[0];
    
    var level =  1; 
    var skill1 = skills[Math.floor(Math.random() * skills.length)];
    var skill2 = skills[Math.floor(Math.random() * skills.length)];
    var skill3 = skills[Math.floor(Math.random() * skills.length)];
    var skill4 = skills[Math.floor(Math.random() * skills.length)];
    var expNeeded = 10;

    return new Slime(name, sex, attack, defense, hitPoints, magicPoints, slimeClass, level, skill1, skill2, skill3, skill4, expNeeded);
}

function levelUp(slime, slimeClass){
    slime.expNeeded = 15;
    switch (slimeClass) {
        case "Barbarian":
            slime.attack += 2;
            slime.defense += 2;
            slime.hitPoints += 12;
            slime.magicPoints += 1;
            break;
        case "Bard":
            slime.attack += 1;
            slime.defense += 1;
            slime.hitPoints += 6;
            slime.magicPoints += 4;
            break;
        case "Cleric":
            slime.attack += 1;
            slime.defense += 1;
            slime.hitPoints += 8;
            slime.magicPoints += 6;
            break;
        case "Druid":
            slime.attack += 1;
            slime.defense += 1;
            slime.hitPoints += 8;
            slime.magicPoints += 6;
            break;
        case "Fighter":
            slime.attack += 2;
            slime.defense += 2;
            slime.hitPoints += 10;
            slime.magicPoints += 1;
            break;
        case "Monk":
            slime.attack += 1;
            slime.defense += 1;
            slime.hitPoints += 6;
            slime.magicPoints += 1;
            break;
        case "Paladin":
            slime.attack += 2;
            slime.defense += 2;
            slime.hitPoints += 10;
            slime.magicPoints += 4;
            break;
        case "Ranger":
            slime.attack += 2;
            slime.defense += 1;
            slime.hitPoints += 8;
            slime.magicPoints += 4;
            break;
        case "Rogue":
            slime.attack += 2;
            slime.defense += 1;
            slime.hitPoints += 6;
            slime.magicPoints += 1;
            break;
        case "Sorcerer":
            slime.attack += 1;
            slime.defense += 1;
            slime.hitPoints += 4;
            slime.magicPoints += 8;
            break;
        case "Warlock":
            slime.attack += 1;
            slime.defense += 1;
            slime.hitPoints += 6;
            slime.magicPoints += 6;
            break;
        case "Wizard":
            slime.attack += 1;
            slime.defense += 1;
            slime.hitPoints += 4;
            slime.magicPoints += 8;
            break;
        default:
            console.log("Unknown class. Stats not updated.");
    }
}

