import { Link, useParams } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useEffect, useState } from "react";
import { productAPI } from "../APIs";

const ProductDetails = (props: any) => {
  const [product, setProduct] = useState<{
    thumbnail: string;
    title: string;
    category: string;
    price: number;
    description: string;
  }>();

  const [count, setCount] = useState<number>(1);

  const params = useParams();
  const id: number = +params.id!;

  useEffect(() => {
    try {
      productAPI(id).then((data) => setProduct(data));
      setCount(1);
    } catch (error) {
      console.log("error", error);
    }
  }, [id]);

  const handleCountIncrease = () => {
    if (count > 0) {
      setCount(count + 1);
    }
  };
  const handleCountDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    console.log("count", count);
    props.handlCount(id, count);
  };

  return (
    <div>
      <div className="md:mx-20">
        <div className="py-10 bg-gray-200 md:px-12 md:pt-10 ">
          <Link to="/">
            {" "}
            <HiArrowNarrowLeft className="w-12 h-8 font-semibold rounded text-red-500 hover:text-white hover:bg-red-500" />{" "}
          </Link>
          <div className="flex flex-col px-12 py-10 bg-white md:flex-row lg:pr-28 md:pr-16 md:shadow-xl">
            <div className="">
              <img
                className="object-cover rounded-md w-96 h-72"
                src={product?.thumbnail}
              />
            </div>

            <div className="space-y-2 md:pl-14">
              <h2 className="text-3xl font-bold "> {product?.title} </h2>
              <h4 className="pt-4 text-xl font-bold">${product?.price}.00</h4>
              <p className="pt-4 md:pr-20">{product?.description}</p>
              <div className="pt-4 space-x-1">
                <button
                  onClick={handleCountDecrease}
                  className=" text-base bg-gray-200 hover:bg-red-500  hover:text-white font-bold py-2 px-4 border  rounded-full"
                >
                  -
                </button>
                <input
                  value={count}
                  onChange={(e: any) => setCount(e.target.value)}
                  type="number"
                  min="1"
                  className="h-8 pl-3 pr-2 border border-gray-200 rounded w-14 "
                />
                <button
                  onClick={handleCountIncrease}
                  className="text-base bg-gray-200 hover:bg-red-500  hover:text-white font-bold py-2 px-4 border  rounded-full"
                >
                  +
                </button>
                <button
                  onClick={handleAddToCart}
                  className="h-8 text-white rounded w-52 bg-red-500 hover:bg-red-700 "
                >
                  ADD TO CART
                </button>
                <div className="flex w-full py-3 mt-5 border-t-2 border-gray-100">
                  <p className="mr-2 text-xl">Category:</p>{" "}
                  <p className="text-xl text-red-500">{product?.category}</p>
                </div>
                <div className="flex items-center justify-between max-w-full mt-6 md:pr-20">
                  <div>
                    {id > 1 && (
                      <Link
                        to={"/products/" + (id - 1)}
                        className=" h-8 px-3 py-0.5  text-red-500 font-semibold rounded border-2 border-red-500 hover:text-white hover:bg-red-500"
                      >
                        {" "}
                        Previous{" "}
                      </Link>
                    )}
                  </div>
                  <div>
                    {id < 30 && (
                      <Link
                        to={"/products/" + (id + 1)}
                        className=" h-8 px-3 py-0.5  text-red-500 font-semibold rounded border-2 border-red-500 hover:text-white hover:bg-red-500"
                      >
                        Next{" "}
                      </Link>
                    )}
                    )
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
