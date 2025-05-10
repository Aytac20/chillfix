import { Link } from "react-router-dom";

function AuthLink({ children, to }) {
  return (
    <p className="ml-7 self-start text-[1.5rem] tracking-wide">
      Don’t have an account?{" "}
      <Link
        to={to}
        className="!hover:text-blue-500 ml-2 !text-[#0fb87f] !underline"
      >
        {children}
      </Link>
    </p>
  );
}

export default AuthLink;
