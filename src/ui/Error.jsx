import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center gap-[2rem]">
        <h1 className="!text-[10rem]">404</h1>
        <h2>
          {error?.data?.message || error?.message || "Something went wrong."}
        </h2>

        <button
          onClick={() => navigate(-1)}
          tabIndex={0}
          role="button"
          aria-pressed="false"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigate(-1);
          }}
          className="!rounded-full border-[1px] px-4 py-2 !text-2xl transition-all duration-300 hover:bg-[#29293b] hover:text-white"
        >
          &larr; Go Back
        </button>
      </div>
    </div>
  );
}

export default Error;
