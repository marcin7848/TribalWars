$(document).on("click", "#tw_settings", async () => {
    let worlds = (await getWorlds()).worlds;
    if(worlds.length === 0){
        showMessage_1("You need to add a World before changing settings!");
        return;
    }

    let selectedWorldNumber = $("#selectedWorld").val();
    let world = new World();
    worlds.forEach(w => {
        if(w.worldNumber === parseInt(selectedWorldNumber))
            world = w;
    });

    let botActiveChecked = '';
    if(world.botActive)
        botActiveChecked = 'checked';

    let html = 'World number: <input type="text" name="worldNumber" id="worldNumber" value="'+ world.worldNumber +'" size="10" maxlength="20"><br />' +
        'Active bot for this world: <input type="checkbox" name="botActive" id="botActive" '+botActiveChecked+'><br />' +
        'Main Village Id: <input type="text" name="mainVillageId" id="mainVillageId" value="'+ world.mainVillageId +'" size="10" maxlength="20"><br />' +
        'Off Time bot: <input type="text" name="offTimeBot" id="offTimeBot" value="'+ world.offTimeBot +'" size="10" maxlength="1000">(format: "5:00-8:00,10:00-11:00")<br />' +
        '<input type="submit" name="saveSettings" id="saveSettings" value="Save"><br />';

    setBotMenuBody(html);
});

$(document).on("click", "#saveSettings", async () => {
    let worldList = await getWorlds();
    let worlds = worldList.worlds;
    let selectedWorldNumber = $("#selectedWorld").val();
    let newWorldNumber = $("#worldNumber").val();
    worlds.forEach(w => {
        if(w.worldNumber === parseInt(selectedWorldNumber)){
            w.worldNumber = parseInt(newWorldNumber);
            w.botActive = !!$("#botActive").is(":checked");
            w.mainVillageId = $("#mainVillageId").val();
            w.offTimeBot = $("#offTimeBot").val();
        }
    });

    worldList.worlds = worlds;

    setWorlds(worldList).then(() => {
        let selectedOption = $("#selectedWorld option[value="+selectedWorldNumber+"]");
        selectedOption.text(newWorldNumber);
        selectedOption.val(newWorldNumber);
        showMessage_1('Settings saved!');
    });
});