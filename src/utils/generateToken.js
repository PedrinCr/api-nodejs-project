import jwt from 'jsonwebtoken';

export function createToken(userId) {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '12h',
  });

  return token;
}

export async function validateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Token required!' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const isValid = await jwt.verify(token, process.env.JWT_SECRET);
    req.userId = isValid.id;
    next();
  } catch {
    res.status(403).json({ error: 'Invalid token!' });
  }
}
