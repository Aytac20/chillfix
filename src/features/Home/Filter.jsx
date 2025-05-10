import Dropdown from "react-bootstrap/Dropdown";
const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 16, name: "Animation" },
];

function Filter({ setMinRating, setGenre }) {
  return (
    <div className="flex items-center gap-[1rem]">
      <Dropdown className="ml-2.5 font-['Poppins']">
        <Dropdown.Toggle className="!flex items-center !rounded-[4rem] !border-transparent !bg-[#222433] !px-5 !py-[1rem] !text-[#a8a3a3]">
          <span className="mr-2 text-2xl tracking-wider">All movies</span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="animate-fadeIn animate-duration-200 !mt-[1.8rem] w-[30rem] !rounded-lg !border-transparent !bg-[#222433] !p-3 !text-2xl !shadow-lg">
          <div className="grid grid-cols-2 gap-3">
            {genres.map((g) => (
              <Dropdown.Item
                key={g.id}
                className="!rounded-2xl !text-[#a8a3a3] !transition-colors !duration-150 hover:!bg-[#2d2f3e] hover:!text-[#d3cfcf]"
                onClick={() => {
                  setGenre(g.id);
                  setMinRating("");
                }}
              >
                {g.name}
              </Dropdown.Item>
            ))}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Filter;
