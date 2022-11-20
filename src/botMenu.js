const showMenu = () => {
    document.body.insertAdjacentHTML("afterend", '<div class="tribalWars_menuBox" id="tribalWars_menuBox"></div>');
    $("#tribalWars_menuBox").append('<div class="tribalWars_menuBox_outside"><div class="tribalWars_menuBox_relative">' +
        '<div class="tribalWars_menuBox_main" id="tribalWars_menuBox_main">' +
        '<div class="tribalWars_menuBox_closed" id="tribalWars_menuBox_closed">' +
        '<span>Open</span>' +
        '</div>' +
        '</div>' +
        '<div></div>');
}

showMenu();

$(document).on("click", ".tribalWars_menuBox_closed", () => {
    generateMenu();
});

const generateMenu = async () => {
    let tribalWars_menuBox_main = $("#tribalWars_menuBox_main");
    tribalWars_menuBox_main.html('');
    let worldList = await getWorlds();
    let worldsString = await convertWorldsToStringForSelect(worldList.worlds);
    chrome.storage.local.get(['villages'], (value) => {
        tribalWars_menuBox_main.animate({width: "1550px", height: "650px"}, 1000, () =>{
            $("#tribalWars_menuBox_main").append('' +
                '<div class="tribalWars_menuBox_title">Manage Tribal Wars BOT</div>' +
                '<div class="tribalWars_menuBox_worldChooseBox">' +
                '<select class="selectWorld" name="selectedWorld" id="selectedWorld">' +
                worldsString +
                '</select>' +
                '<div class="addNewWorld" id="addNewWorld" title="Add new world">+</div>' +
                '<div class="addNewWorld" id="removeWorld" title="Remove world">-</div>' +
                '</div>' +
                '<div class="tribalWars_menuBox_buttons">' +
                '<div class="tribalWars_menuBox_button" id="tw_account">Account</div>' +
                '<div class="tribalWars_menuBox_button" id="tw_settings">Settings</div>' +
                '<div class="tribalWars_menuBox_button" id="tw_villages">Villages</div>' +
                '<div class="tribalWars_menuBox_button" id="tw_hauls">Hauls</div>' +
                '<div class="tribalWars_menuBox_button" id="tw_ranks">Ranks</div>' +
                '</div>' +
                '<div class="tribalWars_menuBox_messages">' +
                '<div class="tribalWars_menuBox_message" id="message_1"></div>' +
                '<div class="tribalWars_menuBox_message" id="message_2"></div>' +
                '</div>' +
                '<div class="tribalWars_menuBox_body" id="tribalWars_menuBox_body"></div>'
            );
        });
    });
}

$(document).on("click", ".tribalWars_menuBox_title", () => {
    let tribalWars_menuBox_main = $("#tribalWars_menuBox_main");
    tribalWars_menuBox_main.html('');
    tribalWars_menuBox_main.animate({width: "40px", height: "40px"}, 1000, () =>{
        $("#tribalWars_menuBox_main").append('' +
            '<div class="tribalWars_menuBox_closed" id="tribalWars_menuBox_closed">' +
            '<span>Open</span>' +
            '</div>'
        );
    });
});





