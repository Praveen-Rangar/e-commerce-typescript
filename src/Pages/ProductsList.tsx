import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import { nextpgeapi, productList } from "../APIs";
import Loading from "../Components/Loading";

const ProductsList = () => {
  const [nextPurl, setNextPurl] = useState(1);
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    productList().then((res) => {
      setdata(res.data);
      console.log("res", res);
      setLoading(false);
    });
  }, []);

  const NextPageClick = () => {
    setLoading(true);
    setNextPurl(nextPurl + 1);
    nextpgeapi(nextPurl).then((res) => {
      setdata(res.data);
      setLoading(false);
    });
  };
  const PreviuosPageClick = () => {
    setNextPurl(nextPurl - 1);
    nextpgeapi(nextPurl).then((res) => {
      setdata(res.data);
      setLoading(false);
    });
  };

  let filtereddata = data.filter(
    (ele: {
      id: number;
      thumbnail: string;
      category: string;
      title: string;
      price: number;
    }) => ele.title.toLowerCase().includes(text.toLowerCase())
  );

  const handleText = (e: any) => {
    setText(e.target.value);
  };

  const handleSortChange = (e: any) => {
    setSort(e.target.value);

    document.getElementById("products")?.blur();
  };

  if (sort === "by title") {
    filtereddata.sort((a: any, b: any) => (a.title < b.title ? -1 : 1));
  } else if (sort === "low to high") {
    filtereddata.sort((a: any, b: any) => a.price - b.price);
  } else if (sort === "high to low") {
    filtereddata.sort((a: any, b: any) => b.price - a.price);
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="m-10">
      <div className="flex space-x-80">
        <input
          onChange={handleText}
          type="text"
          id="first_name"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          required
        />
        <select
          value={sort}
          onChange={handleSortChange}
          className="border-2 border-red-500 rounded-md"
          name="products"
          id="products"
        >
          <option value="default">default sorting</option>
          <option value="by title">sort by title</option>
          <option value="low to high">sort by price: low to high</option>
          <option value="high to low">sort by price high to low</option>
        </select>
      </div>
      <div className="flex flex-wrap">
        {filtereddata.map(
          (ele: {
            id: number;
            thumbnail: string;
            category: string;
            title: string;
            price: number;
          }) => (
            <Product
              key={ele.id}
              thumbnail={ele.thumbnail}
              category={ele.category}
              title={ele.title}
              price={ele.price}
              id={ele.id}
            />
          )
        )}
      </div>

      <div className="flex space-x-6">
        <button onClick={PreviuosPageClick} className="text-red-500">
          Previous
        </button>

        <button onClick={NextPageClick} className="text-red-500">
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
