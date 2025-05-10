import { Spinner } from "react-bootstrap";

function Button({ children, loading }) {
  return (
    <button
      type="submit"
      className="h-[4.7rem] w-[90%] !rounded-lg bg-[#0fb87f] !text-[1.8rem] tracking-wider text-white transition duration-200 hover:bg-[#14835e]"
      disabled={loading}
    >
      {loading ? <Spinner animation="border" /> : children}
    </button>
  );
}

export default Button;
