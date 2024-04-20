console.log('#54. JavaScript homework example file')

/*
 *
 * #1
 *
 * Функціональні вимоги:
 * 1. Вхідні параметри:
 *  - `filename`: Ім'я файлу, в який буде здійснено запис.
 *  - `content`: Вміст, який необхідно записати в файл.
 *
 * 2. Операції з файлами:
 *  - Використання функції `writeFileAsync(filename, content)`: асинхронний запис вмісту в файл за допомогою засобів Node.js.
 *
 * 3. Логування:
 *  - Логування повідомлення "Файл успішно записано" у випадку успішного запису:
 *     console.log('Файл успішно записано')
 *  - Логування помилок у консоль у випадку виникнення помилок при записі файлу:
 *     console.error('Помилка при записі файлу:', error)
 *
 * Технічні вимоги:
 * - Використання сучасних можливостей JavaScript (ES6+), зокрема асинхронних функцій (async/await).
 * - Належне управління помилками та виключеннями для гарантування стійкості функціоналу.
 * - Код має бути чистим, добре структурованим, із зрозумілими назвами змінних та функцій.
 * - Підготовка функції для легкої інтеграції у тести, наприклад, використовуючи JEST для мокування залежностей і перевірки поведінки функції.
 *
 */

// #3
import { readFile, unlink, writeFile } from 'fs/promises'

async function writeFileAsync(filename, content) {
  try {
    await writeFile(filename, content) // Записуємо вміст у файл
    console.log('Файл успішно записано')
  } catch (error) {
    console.error('Помилка при записі файлу:', error)
    return error // Повертаємо помилку для можливості тестування
  }
}

// ! Приклад використання:
writeFileAsync('example.txt', 'Привіт, це тестовий файл!')

/*
 *
 * #2
 *
 * Функціональні вимоги:
 * 1. Вхідні параметри:
 *  - `filename`: Ім'я файлу, з якого буде здійснено читання.
 *
 * 2. Операції з файлами:
 *  - Використання функції `readFileAsync(filename)`: асинхронне читання вмісту файлу за допомогою засобів Node.js.
 *
 * 3. Логування:
 *  - Логування повідомлення "Файл успішно прочитано" у випадку успішного читання:
 *     console.log('Файл успішно прочитано:', content)
 *  - Логування помилок у консоль у випадку виникнення помилок при читанні файлу:
 *     console.error('Помилка при читанні файлу:', error)
 *  - Специфічна обробка помилки, коли файл не існує:
 *     console.error('Файл не існує:', filename)
 *
 * Технічні вимоги:
 * - Використання сучасних можливостей JavaScript (ES6+), зокрема асинхронних функцій (async/await).
 * - Належне управління помилками та виключеннями для гарантування стійкості функціоналу.
 * - Код має бути чистим, добре структурованим, із зрозумілими назвами змінних та функцій.
 * - Підготовка функції для легкої інтеграції у тести, наприклад, використовуючи JEST для мокування залежностей і перевірки поведінки функції.
 *
 */

async function readFileAsync(filename) {
  try {
    const content = await readFile(filename, 'utf8')
    console.log('Файл успішно прочитано:', content)
    return content // Повертаємо вміст файла
  } catch (error) {
    // Обробка помилки, коли файл не існує
    if (error.code === 'ENOENT') {
      console.error('Файл не існує:', filename)
    } else {
      console.error('Помилка при читанні файлу:', error)
    }
    return null // Повертаємо null у випадку помилки
  }
}

// ! Приклад використання:
readFileAsync('example.txt')
  .then((content) => {
    console.log('Прочитаний вміст:', content)
  })
  .catch((error) => {
    console.error('Помилка:', error)
  })

/*
 *
 * #3
 *
 * Функціональні вимоги:
 * 1. Вхідні параметри:
 *  - `filename`: Ім'я файлу, який потрібно видалити.
 *
 * 2. Операції з файлами:
 *  - Використання функції `deleteFileAsync(filename)`: асинхронне видалення файлу за допомогою засобів Node.js з використанням функції `unlink` з модуля `fs/promises`.
 *
 * 3. Логування:
 *  - Логування повідомлення "Файл успішно видалено" у випадку успішного видалення:
 *     console.log('Файл успішно видалено')
 *  - Логування помилок у консоль у випадку виникнення помилок при видаленні файлу:
 *     console.error('Помилка при видаленні файлу:', error)
 *  - Специфічна обробка помилки, коли файл не існує:
 *     console.error('Файл не існує:', filename)
 *
 * Технічні вимоги:
 * - Використання сучасних можливостей JavaScript (ES6+), зокрема асинхронних функцій (async/await).
 * - Належне управління помилками та виключеннями для гарантування стійкості функціоналу.
 * - Код має бути чистим, добре структурованим, із зрозумілими назвами змінних та функцій.
 * - Підготовка функції для легкої інтеграції у тести, наприклад, використовуючи JEST для мокування залежностей і перевірки поведінки функції.
 *
 */

async function deleteFileAsync(filename) {
  try {
    await unlink(filename)
    console.log('Файл успішно видалено')
  } catch (error) {
    // Обробка помилки, якщо файл не існує
    if (error.code === 'ENOENT') {
      console.error('Файл не існує:', filename)
    } else {
      console.error('Помилка при видаленні файлу:', error)
    }
  }
}

// Приклад використання:
writeFileAsync('example.txt', 'Привіт, це тестовий файл!').then(() => {
  deleteFileAsync('example.txt')
})

export { writeFileAsync, readFileAsync, deleteFileAsync }
