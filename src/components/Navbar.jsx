import {Link} from 'react-router-dom'
export default function Navbar () {
  const regions = [
    {
      region: "Europe",
      id: 1,
      path:'/europe'
    },
    {
      region: "Asia",
      id: 2,
      path:'/asia'
    },
    {
      region: "Americas",
      id: 3,
      path:'/americas'
    },
    {
      region: "Africa",
      id: 4,
      path:'/africa'
    },
    {
      region: "Oceania",
      id: 5,
      path:'/oceania'
    },
  ];
  return (
    <>
    <nav className="flex justify-between px-10 h-14 items-center bg-green-600 mb-10">
      {regions.map((el) => {
        return (
          <Link to={el.path} className="text-2xl font-bold text-slate-100 pointer cursor-pointer" key={el.id}>
            {el.region}
          </Link>
        );
      })}
      </nav>
    </>
  );
}
