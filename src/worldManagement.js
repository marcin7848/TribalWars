$(document).on("click", "#addNewWorld", async () => {
    let account = await getAccount();
    console.log(account);
    if(!account || !account.isSet){
        showMessage_1("Before adding a new world set an Account!");
        return;
    }

    let newWorld = new World();

    let worldList = await getWorlds();
    worldList.worlds.push(newWorld);

    setWorlds(worldList).then(() => {
        clearBotMenuBody();
        $("#selectedWorld").append(new Option(newWorld.worldNumber.toString(), newWorld.worldNumber.toString()));
    });


});

$(document).on("click", "#removeWorld", async () => {
    let worldList = await getWorlds()
    let worlds = worldList.worlds;
    let selectedWorldNumber = $("#selectedWorld").val();
    worlds = worlds.filter((world) => {
        return world.worldNumber !== parseInt(selectedWorldNumber);
    });

    worldList.worlds = worlds;

    setWorlds(worldList).then(() => {
        clearBotMenuBody();
        $("#selectedWorld option[value="+selectedWorldNumber+"]").remove();
    });
});

$(document).on('change', '#selectedWorld', async () => {
    let selectedWorldNumber = $("#selectedWorld").val();
    let worldList = await getWorlds();
    let worlds = worldList.worlds;
    worlds.forEach(world => {
        world.selected = world.worldNumber === parseInt(selectedWorldNumber);
    });

    worldList.worlds = worlds;

    setWorlds(worldList).then(() => {
        clearBotMenuBody();
    });

});