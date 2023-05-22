import { useState } from "react";
import useLogin from "@/hooks/useLogin";
import useSignup from "@/hooks/useSignup";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const useSignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, signup } = useSignup();
  const router = useRouter();
  const { login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email and password
    if (!email || !password) {
      toast.error("Complete seu email ou senha.");
      return;
    }

    signup(email, password);
    await login(email, password);

    router.push("/");
  };
  return { email, password, setEmail, setPassword, handleSubmit };
};

export default useSignupForm;
