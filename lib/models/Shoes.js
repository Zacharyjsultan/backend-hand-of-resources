const pool = require('../utils/pool');

class Shoes {
  id;
  brand;
  sole;
  weight;
  cost;

  constructor(row) {
    this.id = row.id;
    this.brand = row.brand;
    this.sole = row.sole;
    this.cost = row.cost;
  }

  static async getAll() {
    const { rows } = await pool.query(`
    SELECT * from shoes;
    `);
    return rows.map((row) => new Shoes(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
    SELECT * FROM shoes WHERE id = $1`,
      [id]
    );
    return new Shoes(rows[0]);
  }

  static async insert({ brand, sole, cost }) {
    const { rows } = await pool.query(
      `
    INSERT INTO shoes (brand, sole, cost) 
    VALUES ($1, $2, $3 ) RETURNING *
    `,
      [brand, sole, cost]
    );
    return new Shoes(rows[0]);
  }
  static async delete(id) {
    const { rows } = await pool.query(
      `
    DELETE from yarn
    WHERE id = $1
    RETURNING *
    `,
      [id]
    );
    return new Shoes(rows[0]);
  }
}

module.exports = { Shoes };
