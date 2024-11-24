module.exports = {
    roleSelection: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
              [{text: 'Акционер', callback_data: '1'}, {text: 'Меняла', callback_data: '2'}]
          ]
        })
      },
      
    menuButton: {
        reply_markup: JSON.stringify({
          inline_keyboard: [
              [{text: 'Помощь', callback_data: 'help'}, {text: 'Профиль', callback_data: 'profile'}],
              [{text: 'Рынок валют', callback_data: 'currencyMarket'}]
          ]
        })
      }
}