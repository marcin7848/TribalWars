$(document).on("click", "#tw_account", async () => {
    let account = await getAccount();

    let html = 'Username: <input type="text" name="usernameTw" id="usernameTw" value="'+ account.username +'" size="10" maxlength="20"><br />' +
        'Password: <input type="password" name="passwordTw" id="passwordTw" value="'+ account.password +'" size="10" maxlength="20"><br />' +
        '<input type="submit" name="saveAccount" id="saveAccount" value="Save"><br />';

    setBotMenuBody(html);
});

$(document).on("click", "#saveAccount", async () => {
    let account = new Account(true, $("#usernameTw").val(), $("#passwordTw").val());

    setAccount(account).then(() => {
        showMessage_1('Account saved!');
    });
});