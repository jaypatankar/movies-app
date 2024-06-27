import * as bcrypt from 'bcryptjs';

export async function hashPassword(password: string) {
  const saltRounds = 10; // Adjust salt rounds as needed
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
}