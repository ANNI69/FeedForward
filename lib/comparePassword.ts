import bcrypt from "bcryptjs";

export async function comparePassword(plaintextPassword: string, hash: string) {
  try {
    const isMatch: boolean = await bcrypt.compare(plaintextPassword, hash);
    // console.log(isMatch); // If password matches then display true
    return isMatch;
  } catch (err) {
    console.error(err);
    throw err; // Rethrow the error to handle it elsewhere if needed
  }
}
