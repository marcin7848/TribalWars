const phpMailerPage = 'https://tribalwarsemailtest.000webhostapp.com';

const sendEmail = (subject, body) => {
    fetch(phpMailerPage + '/tribalwarsemail.php?subject='+subject+'&body='+body)
        .then((response) => {
            response.json().then((data) => {

            });
        });
}

const isBotActive = () => {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({value: "getIsBotActive"}, (response) => {
            resolve(response.isBotActive);
        });
    });
}

const showMessage_1 = (p, time= 3000) => {
    $("#message_1").text(p);
    setTimeout(() => {$("#message_1").text("");}, time);
}

const showMessage_2 = (p, time= 3000) => {
    $("#message_2").text(p);
    setTimeout(() => {$("#message_2").text("");}, time);
}

const setBotMenuBody = (html) => {
    let tribalWars_menuBox_body = $("#tribalWars_menuBox_body");
    tribalWars_menuBox_body.html('');
    tribalWars_menuBox_body.append('' + html);
}

const clearBotMenuBody = () => {
    let tribalWars_menuBox_body = $("#tribalWars_menuBox_body");
    tribalWars_menuBox_body.html('');
}

const changeLocation = (justReload = true, href = "", afterTimeMs = 500) => {
    if(justReload){
        setTimeout(() => {
            location.reload();
        }, afterTimeMs);
    }
    else{
        setTimeout(() => {
            window.location.href = href;
        }, afterTimeMs);
    }
}

const getAccount = () => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['tw_account'], (result) => {
            if(result.tw_account && JSON.parse(result.tw_account).isSet) {
                resolve(JSON.parse(result.tw_account));
            }
            else
                resolve(new Account());
        });
    });
}

const setAccount = (account) => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.set({tw_account: JSON.stringify(account)}, () => {
            resolve();
        });
    });
}

const getWorlds = () => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(['tw_worlds'], (result) => {
            if(result.tw_worlds)
                resolve(JSON.parse(result.tw_worlds));
            else
                resolve(new WorldList([]));
        });
    });
}

const setWorlds = (worldList) => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.set({tw_worlds: JSON.stringify(worldList)}, () => {
            resolve();
        });
    });
}

const convertWorldsToStringForSelect = (worlds) =>{
    return new Promise((resolve, reject) => {
        let worldsOptions = '';
        worlds.forEach(world => {
            let selected = '';
            if(world.selected)
                selected = 'selected';
            worldsOptions += '<option value="'+world.worldNumber+'" '+selected+'>'+world.worldNumber+'</option>';
        });

        resolve(worldsOptions);
    });
}