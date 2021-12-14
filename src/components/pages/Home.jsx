import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../../api";
import Preloader from "../Preloader/Preloader";
import CategoryList from "../CategoryList/CategoryList";
import Search from "../Search/Search";

export default function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleUserSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate({ pathname, search: `?search=${str}` });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog( search ?
        data.categories.filter((item) =>
          item.strCategory
            .toLowerCase()
            .includes(search.split('=')[1].toLowerCase())
        ) : data.categories
      );
    });
  }, [search]);

  return (
    <>
      <Search cb={handleUserSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}
