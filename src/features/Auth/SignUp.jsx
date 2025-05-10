import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Logo from "../Header/Logo";
import PasswordComp from "./PasswordComp";

import Button from "../../ui/Button";
import AuthLink from "../../ui/AuthLink";
import { useAuth } from "../../Hooks/useAuthActions";
export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const { signUp, loading } = useAuth();
  const handleRegister = async (e) => {
    e.preventDefault();
    const success = await signUp(email, password);
    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="grid h-screen w-full items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="flex w-[40rem] flex-col items-center gap-[1rem] rounded-2xl bg-[#2D2F3E] px-[4rem] py-[10rem]"
      >
        <Logo />

        <div className="mb-[1rem] flex h-[4.5rem] w-[90%] items-center gap-[2rem] rounded-[0.5rem] bg-[#51545c71] p-4 transition-all duration-300 hover:bg-[#70748088]">
          <span className="text-2xl">
            <FaUser />
          </span>
          <input
            type="text"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            required
            className="bg-transparent"
            aria-label="First Name"
            autoComplete="given-name"
          />
        </div>

        <div className="mb-[1rem] flex h-[4.5rem] w-[90%] items-center gap-[2rem] rounded-[0.5rem] bg-[#51545c71] p-4 transition-all duration-300 hover:bg-[#70748088]">
          <span className="text-2xl">
            <MdEmail />
          </span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
            autoComplete="email"
          />
        </div>

        <PasswordComp
          password={password}
          passwordType={passwordType}
          setPassword={setPassword}
          setPasswordType={setPasswordType}
          loading={loading}
          autoComplete="new-password"
        />

        <AuthLink to={"/signin"}>Sign in</AuthLink>

        <Button loading={loading}>Sign up</Button>
      </form>
    </div>
  );
}
