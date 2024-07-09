const dotenv = require("dotenv");
dotenv.config();
const mysql2 = require("mysql2");

class DBConnection {
  constructor() {
    this.db = mysql2.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      multipleStatements: true,
    });

    this.checkConnection();
  }

  checkConnection() {
    this.db.getConnection((err, connection) => {
      if (err) {
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
          console.error("Database connection was closed.");
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
          console.error("Database has too many connections.");
        }
        if (err.code === "ECONNREFUSED") {
          console.error("Database connection was refused.");
        }
      }
      if (connection) {
        connection.release();
      }
      return;
    });
  }

  query = async (sql, values) => {
    return new Promise((resolve, reject) => {
      const callback = (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      };
      this.db.query(sql, values, callback);
    }).catch((err) => {
      const mysqlErrorList = Object.keys(HttpStatusCodes);
      err.status = mysqlErrorList.includes(err.code)
        ? HttpStatusCodes[err.code]
        : err.status;
      throw err;
    });
  };
}

const HttpStatusCodes = Object.freeze({
  ER_TRUNCATED_WRONG_VALUE_FOR_FIELD: 422,
  ER_DUP_ENTRY: 409,
});

const db = new DBConnection();

const createDatabaseAndTables = async () => {
  const sql = `
        DROP DATABASE IF EXISTS ${process.env.DB_NAME};
        CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};
    `;

  try {
    await db.query(sql);
    await db.query(`USE ${process.env.DB_NAME};`);

    const tableQueries = `
            DROP TABLE IF EXISTS products;
            DROP TABLE IF EXISTS categories;

            CREATE TABLE IF NOT EXISTS categories (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS products (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT,
                price DECIMAL(10, 2),
                imageUrl VARCHAR(1000),
                categoryId INT,
                stock INT,
                FOREIGN KEY (categoryId) REFERENCES categories(id)
            );
        `;

    await db.query(tableQueries);

    const insertCategories = `
            INSERT INTO categories (name) VALUES ('meat'), ('milk'), ('fruits');
        `;

    await db.query(insertCategories);

    const insertProducts = `
            INSERT INTO products (name, description, price, imageUrl, categoryId, stock)
            VALUES 
                ('chicken wing', 'chicken', 199.00, 'https://www.google.com/imgres?q=checken%20wing&imgurl=https%3A%2F%2Fwww.allrecipes.com%2Fthmb%2FAtViolcfVtInHgq_mRtv4tPZASQ%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2FALR-187822-baked-chicken-wings-4x3-5c7b4624c8554f3da5aabb7d3a91a209.jpg&imgrefurl=https%3A%2F%2Fwww.allrecipes.com%2Frecipe%2F187822%2Fbaked-chicken-wings%2F&docid=t2fYqPA-Fx-https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.centralmeats.com%2Fregular-chicken-wing&psig=AOvVaw08KaXz82CvhGXM-5083mzQ&ust=1720612054996000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiA4d7xmYcDFQAAAAAdAAAAABAE', 1, 100),
                ('cheese', 'kg cheese', 150.00, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthline.com%2Fnutrition%2Fhealthiest-cheese&psig=AOvVaw2sbAnRRd_loF2r60G0qRBC&ust=1720612025963000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNDFybnxmYcDFQAAAAAdAAAAABAE', 2, 200),
                ('lemon', 'lemon', 40.99, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthline.com%2Fnutrition%2F6-lemon-health-benefits&psig=AOvVaw1GzUOVsHBTrLemT-q9FiuN&ust=1720611985650000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCx_KXxmYcDFQAAAAAdAAAAABAE', 3, 150);
        `;

    await db.query(insertProducts);

    console.log("Database and tables created successfully!");
  } catch (err) {
    console.error("Error creating database and tables:", err);
  } finally {
    db.db.end();
  }
};

createDatabaseAndTables();
