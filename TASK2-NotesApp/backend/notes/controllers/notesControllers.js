import pool from "../../db.js";
export const getData = async (req, res) => {
  try {
    const [data] = await pool.query("SELECT * from notes");
    res.status(200).json({ data: data });
  } catch (error) {
    console.error(error);
    res.statusCode(500).json({ error });
  }
};

export const postData = async (req, res) => {
  try {
    const { header, content } = req.body;
    const sql = `INSERT INTO notes (header, content) VALUES(?, ?)`;
    const [data] = await pool.query(sql, [header, content]);
    res.status(201).json({ message: `Success`, data: data });
  } catch (error) {
    console.error(error);
    res.statusCode(500).json({ error });
  }
};

export const createTable = async (req, res) => {
  const sql = `CREATE TABLE IF NOT EXISTS notes (
        id INT AUTO_INCREMENT PRIMARY KEY,
      header VARCHAR(255) NOT NULL,
      content TEXT NOT NULL,
      created_at DATETIME DEFAULT NOW(),
      updated_at DATETIME DEFAULT NOW()
    )`;

  try {
    const data = await pool.query(sql);
    res.status(200).json({ message: "Table created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create table" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const sql = `DELETE FROM notes WHERE id = ?`;
    await pool.query(sql, [id]);
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete note" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id, header, content } = req.body;
    const sql = `UPDATE notes SET header = ?, content = ?, updated_at = NOW() WHERE id = ?`;
    await pool.query(sql, [header, content, id]);
    const [data] = await pool.query("SELECT * FROM notes WHERE id = ?", [id]);

    res
      .status(200)
      .json({ message: "Note updated successfully", data: data[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update note" });
  }
};
