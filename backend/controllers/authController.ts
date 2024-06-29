import { Request, RequestHandler, Response } from "express";
import User from "../models/userModel";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { email, name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, password: hashedPassword, email });
    await user.save();
    console.log(`User ${email} registered successfully`);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Registration failed' });
  }
}

export const loginUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
    return res.status(401).json({ error: 'Authentication failed' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
    return res.status(401).json({ error: 'Authentication failed' });
    }
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET ?? 'rizzin', {
    expiresIn: '1h',
    });
    console.log(`User ${email} logged in successfully with token ${token}`);
    res.status(200).json({ token: token });
    } catch (error) {
    res.status(500).json({ error: 'Login failed' });
    }
}
