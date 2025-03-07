"use server";
import {signIn} from "@/auth";

const signupWithGoogle = async () => {
  await signIn("google");
};

export default signupWithGoogle;
