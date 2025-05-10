import "./Loader.css";

function Loader() {
  return (
    <div className="bg-opacity-50 fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black backdrop-blur-lg">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
