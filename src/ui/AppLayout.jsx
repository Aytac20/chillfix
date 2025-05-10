import { Outlet, useNavigation } from "react-router-dom";
import Header from "../features/Header/Header";
import Loader from "./Loader";

function AppLayout() {
  const navigator = useNavigation();
  const isLoading = navigator.state === "loading";
  return (
    <div className="grid h-screen w-full grid-cols-[0fr_1fr] lg:grid-cols-[30rem_1fr] lg:gap-[2rem] lg:px-[8rem] lg:py-[4rem]">
      <div className="grid h-screen w-full rounded-[2rem] bg-[#222433]">
        <Header />
      </div>
      <main>
        {isLoading && <Loader />}
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
