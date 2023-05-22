import { useState } from "react";
import useLogin from "@/hooks/useLogin";
import { toast } from "react-toastify";

const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email and password
    if (!email || !password) {
      toast.error("Complete seu email ou senha.");
      return;
    }

    await login(email, password);

    setEmail("");
    setPassword("");
  };

  return { email, password, setEmail, setPassword, handleSubmit };
};

export default useLoginForm;
