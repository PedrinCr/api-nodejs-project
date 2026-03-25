import { createUsr, loginUsr } from '../services/auth_service.js';

export async function register(req, res) {
  const data = req.body;

  try {
    const user = await createUsr(data);

    if (user) {
      return res.status(201).json({ message: 'User created!' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function login(req, res) {
  const data = req.body;
  console.log(data);

  try {
    const user = await loginUsr(data);

    return res.status(200).json(user);
  } catch (err) {
    return res.status(403).json({ error: err.message });
  }
}
