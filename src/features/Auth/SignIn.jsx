import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Header/Logo";
import { MdEmail } from "react-icons/md";
import PasswordComp from "./PasswordComp";
import { useAuth } from "../../Hooks/useAuthActions";
import Button from "../../ui/Button";
import AuthLink from "../../ui/AuthLink";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const { signIn, loading } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const success = await signIn(email, password);
    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="grid h-screen w-full items-center justify-center">
      <form
        onSubmit={handleSignIn}
        autoComplete="off"
        className="flex w-[40rem] flex-col items-center gap-[1rem] rounded-2xl bg-[#2D2F3E] px-[4rem] py-[10rem]"
        style={loading ? { pointerEvents: "none", opacity: 0.6 } : {}}
      >
        <div>
          <Logo />
        </div>
        <div className="flex h-[4.5rem] w-[90%] items-center gap-[2rem] rounded-[0.5rem] bg-[#51545c71] p-4 transition-all duration-300 hover:bg-[#70748088]">
          <span className="text-2xl">
            <MdEmail />
          </span>
          <input
            type="email"
            placeholder="Email"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            disabled={loading}
          />
        </div>
        <PasswordComp
          password={password}
          passwordType={passwordType}
          setPassword={setPassword}
          setPasswordType={setPasswordType}
          loading={loading}
        />

        <AuthLink to={"/signup"}>Sign up</AuthLink>

        <Button loading={loading}>Sign in</Button>
      </form>
    </div>
  );
}
