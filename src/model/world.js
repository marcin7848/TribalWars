class WorldList{
    worlds = [];

    constructor(worlds = []) {
        this.worlds = worlds;
    }
}

class World{
    worldNumber = 0;
    botActive = false;
    offTimeBot = "";
    mainVillageId = 0;
    selected = false;

    constructor(worldNumber = 0, botActive = false, offTimeBot = "", mainVillageId = 0, selected = false) {
        this.worldNumber = worldNumber;
        this.botActive = botActive;
        this.offTimeBot = offTimeBot;
        this.mainVillageId = mainVillageId;
        this.selected = selected;
    }
}