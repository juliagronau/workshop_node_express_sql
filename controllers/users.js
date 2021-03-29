import pool from "../database/client.js";
import { body, validationResult } from "express-validator";

export const getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createNewUser = async (req, res) => {
  try {
    const { first_name, last_name } = req.body;
    const result = await pool.query(
      "INSERT INTO users (first_name, last_name) VALUES ($1, $2) RETURNING *;",
      [first_name, last_name]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name } = req.body;
    const result = await pool.query(
      "UPDATE users SET first_name=$1, last_name=$2 WHERE id=$3 RETURNING *;",
      [first_name, last_name, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM users WHERE id=$1;", [id]);
    res.json({ message: "User deleted successfully!" });
  } catch (error) {
    res.status(500).json(error);
  }
};
