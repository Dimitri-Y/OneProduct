# Product API Documentation

Це документація для API продукту, яка дозволяє керувати продуктами та категоріями.

## Endpoints

### Створити продукт

- **Метод:** POST
- **URL:** `DB_HOST:/api/product`
- **Опис:** Створіть новий продукт із наданою інформацією.
- **Тіло запиту:**

  - `name` (string, required)
  - `description` (string, required)
  - `price` (decimal, required)
  - `imageUrl` (string, required)
  - `categoryId` (integer, required)
  - `stock` (integer, required)
  - **Відповідь:** повертає повну інформацію про продукт із бази даних.

- **Метод:** POST
- **URL:** `DB_HOST:/api/product`
- **Опис:** Створіть новий продукт із наданою інформацією.
- **Тіло запиту:**
  - `name` (string, required)
  - `description` (string, required)
  - `price` (decimal, required)
  - `imageUrl` (string, required)
  - `categoryId` (integer, required)
  - `stock` (integer, required)
- **Відповідь:** повертає повну інформацію про продукт із бази даних.(201)

### Отримати продукти за ідентифікатором категорії

- **Метод:** GET
- **URL:** `DB_HOST:/api/products/:categoryId`
- **Опис:** Отримайте всі продукти у вказаній категорії.
- **Відповідь:** повертає масив об’єктів JSON із такою інформацією (200):
  - `name` (string, required)
  - `description` (string, required)
  - `price` (decimal, required)
  - `imageUrl` (string, required)
  - `categoryId` (integer, required)
  - `stock` (integer, required)

### Отримайте продукт за ідентифікатором

- **Метод:** GET
- **URL:** `DB_HOST:/api/product/:id`
- **Опис:** Отримати детальну інформацію про вказаний товар.
- **Відповідь:** повертає об’єкт JSON із такою інформацією (200):
  - `name` (string, required)
  - `description` (string, required)
  - `price` (decimal, required)
  - `imageUrl` (string, required)
  - `categoryId` (integer, required)
  - `stock` (integer, required)

### Видалити продукт

- **Метод:** DELETE
- **URL:** `DB_HOST:/api/product/:id`
- **Опис:** Видалити вказаний продукт.
- **Відповідь:** повертає повідомлення про успішне видалення продукту з його product_id. (204)

### Оновити продукт

- **Метод:** PUT
- **URL:** `DB_HOST:/api/product/:id`
- **Опис:** оновіть будь-яке поле інформації про продукт, зокрема змініть категорію.
- **Відповідь:** повертає повну інформацію про продукт.(201)

### Отримати всі категорії

- **Метод:** GET
- **URL:** `DB_HOST:/api/categories`
- **Опис:** Отримати всі категорії.
- **Відповідь:** повертає назву категорії та її ідентифікатор. (200)
- `id`: (int)
- `name`: (string)

## Проміжне ПЗ

- `checkApiKey`: перевіряє, чи наданий ключ API дійсний. Якщо ключ недійсний або не наданий, він повертає повідомлення про відмову в доступі.(403 Access denied)
- `validateProduct`: перевіряє дані продукту в тілі запиту. (Помилка 400 All fields are required і перелічуються які поля неправильні)

## Контролери

Функція `ctrlShell` використовується для обгортання функцій контролера та обробки помилок. Доступні такі функції контролера:

- `addProduct`: створює новий продукт.
- `getProductByCategoryId`: отримує всі продукти у вказаній категорії.
- `getProductById`: отримує детальну інформацію про вказаний продукт.
- `updateProduct`: оновлює будь-яке поле інформації про продукт.
- `removeProduct`: видаляє вказаний продукт.
- `getCategories`: отримує всі категорії.

## Моделі

- `Product`: представляє продукт у базі даних.
- `Категорія`: представляє категорію в базі даних.

## Usage

Щоб використовувати цей API, вам потрібно включити ключ API в тіло запиту або заголовки. Ключ API – `apiKey123`. Усі запити, крім GET, будуть оброблені, лише якщо надано правильний ключ API.

## env оточення

використовувався ось такий

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=products
API_KEY=apiKey123
