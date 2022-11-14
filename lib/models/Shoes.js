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
}

module.exports = { Shoes };
