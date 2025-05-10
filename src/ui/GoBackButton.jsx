import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function GoBackButton() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div
      className="absolute top-[2rem] left-[2rem] z-30 flex w-full cursor-pointer text-[1.8rem] text-blue-50 md:left-[4rem] lg:hidden"
      onClick={handleBack}
    >
      <FaArrowLeft />
    </div>
  );
}

export default GoBackButton;
