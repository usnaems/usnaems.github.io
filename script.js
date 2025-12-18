// Скрипт 1: Идущие часики в заголовке (Title)
function updateTitleClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.title = timeString + " | Таинственный остров";
}

// Запускаем обновление заголовка каждую секунду (1000 мс)
setInterval(updateTitleClock, 1000);


// Скрипт 2: Вывести текущую дату в pop up (alert)
function showDate() {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    alert("Сегодняшняя дата: " + dateString);
}


// Скрипт 3: Изменение цвета фона при нажатии на кнопку
let currentColorIndex = 0;

function changeColor() {
   
    const safeColors = [
        '#f4f4f9', // 0. Светло-серый
        '#e3f2fd', // 1. Нежно-голубой
        '#f1f8e9', // 2. Мятный
        '#fff3e0', // 3. Светло-оранжевый
        '#f3e5f5', // 4. Лавандовый
        '#e0f7fa'  // 5. Цвет морской пены
    ];
    currentColorIndex++;

    if (currentColorIndex >= safeColors.length) {
        currentColorIndex = 0;
    }

    document.body.style.backgroundColor = safeColors[currentColorIndex];
}