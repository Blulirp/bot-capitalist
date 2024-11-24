const TelegramApi = require('node-telegram-bot-api');
const {roleSelection, menuButton} = require('./options');
const token = '7772251191:AAEf8CetnXAVLvu49pUwrZwedNsrWLI1hAM';

const bot = new TelegramApi(token, {polling: true})



const roleText = `♨️Отличный выбор, за тобой большое будущее! Получи на это стартовый капитал в размере 10 000💲и заработай все деньги этого мира.♨️

ПОМНИ, если вдруг твое начало будет не самым приятным, ты всегда сможешь пополнить свой баланс пассивным доходом, который зависит от твоего уровня. 

♕Он растет от максимального количества твоего баланса.
Напиши команду "Уровень" и узнай сколько можешь получить.♕

✿ Псс, в телеграмм канале Capitalist можно найти промокодики))`;

const start = () => {
// ================= Обработка сообщений =================
    bot.setMyCommands([
        {command: '/start', description: 'Начало работы бота'},
        {command: '/info', description: 'Информация про бота'},
        {command: '/menu', description: 'Меню действий игрока'},
        {command: '/profile', description: 'Ваш профиль'},
     ])
    
     bot.on( 'message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        const userName = msg.from.first_name;
        
     if(text === '/start'){
        return bot.sendMessage(chatId, `Добро пожаловать, хочешь заработать миллионы и обогнать всех? Берись за дело.`, roleSelection);

     }
     if(text === '/menu'){
        return bot.sendMessage(chatId, 'Доступные действия:', menuButton);

     }
     if(text === '/profile'){
        return bot.sendMessage(chatId, `Имя: ${userName}
Уровень: 0
Премиум: нет
Зарегестрирован с: 19.11.2024
баланс: 1000$`);
     }
     return bot.sendMessage(chatId, 'я тебя не понимаю');
    }) 
// ================= Обработка нажатия кнопок =================
    bot.on('callback_query', msg => {
      const data = msg.data;
      const chatId = msg.message.chat.id;

      
      if(data == 1) {
        bot.sendMessage(chatId, `Теперь ты акционер`);
        bot.sendMessage(chatId, roleText);
      }
      
      if(data == 2) {
        bot.sendMessage(chatId, `Теперь ты меняла`);
        bot.sendMessage(chatId, roleText);
      }
      if(data == help){
        bot.sendMessage(chatId, `1. Профиль - информация о игроке, его баланс, его id и др
2. Рынок валют - показывает все их текущие курсы (изначально лучше добавлять немного валют, а потом со временем добавлять новые в качестве обновлений.)
3. Рынок Крипто - тоже самое, что и в рынке валют.
4. Тренды - показывает предположительные изменения курсов на ближайшие 24 часа( очевидно, что где то верные, где то нет)
5. Купить валюту {название} {количество}
6. Купить Квалюту {название} {количество}\
7. Рейтинг Активов - топ самых богатых игроков в Долларах. (разделы рейтинга: 1. самый богатый на данный момент, 2. Топ тех, кто больше заработал за неделю, 3.Топ тех, кто больше заработал за месяц
8...`);
      }
      
      console.log(msg);
    })
}

start();