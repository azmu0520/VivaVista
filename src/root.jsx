import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { data } from "./utilities/navbar";

const Root = () => {
  // useEffect(() => {
  //   navigate(token ? "/" : "/login");
  //   // eslint-disable-next-line
  // }, [token]);
  return (
    <Routes>
      <Route element={<Navbar />}>
        {data?.map(({ id, path, Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
      </Route>
      <Route path={"*"} element={<div>you are lost</div>} />
    </Routes>
  );
};

export default Root;
