const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Настройка body-parser для обработки JSON и URL-encoded данных
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Отправка статических файлов (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Пример обработчика для регистрации
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Здесь будет логика для сохранения данных в базу данных
    console.log('User registered:', username, email);

    res.send('Registration successful!');
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});