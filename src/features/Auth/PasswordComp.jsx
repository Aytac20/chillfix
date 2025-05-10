import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function PasswordComp({
  passwordType,
  password,
  setPassword,
  setPasswordType,
  loading,
}) {
  return (
    <div className="flex h-[4.5rem] w-[90%] items-center justify-between rounded-[0.5rem] bg-[#51545c71] p-4 transition-all duration-300 hover:bg-[#70748088] focus:border-2">
      <div className="flex items-center gap-[2rem]">
        <span className="text-2xl">
          <RiLockPasswordFill />
        </span>
        <input
          type={passwordType}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="button"
        onClick={() =>
          setPasswordType(passwordType === "password" ? "text" : "password")
        }
        disabled={loading}
      >
        {passwordType === "password" ? (
          <FaEyeSlash className="text-4xl" />
        ) : (
          <FaRegEye className="text-4xl" />
        )}
      </button>
    </div>
  );
}

export default PasswordComp;
