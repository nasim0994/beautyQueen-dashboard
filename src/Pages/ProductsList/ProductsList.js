import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaUserEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const ProductsList = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(`https://beauty-queen-server.vercel.app/products`).then((res) =>
        res.json()
      ),
  });

  return (
    <div>
      <div className="overflow-x-auto w-full text-sm bg-base-100 shadow-lg rounded-md">
        <table className="table w-full text-neutral">
          {/* head */}
          <thead>
            <tr className="border-b">
              <th className="bg-transparent">Product</th>
              <th className="bg-transparent">Category</th>
              <th className="bg-transparent">Price</th>
              <th className="bg-transparent">Stock</th>
              <th className="bg-transparent">Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <img
                        src={product.thumbnail}
                        alt=""
                        className="w-8 h-8 rounded-full"
                      />
                    </div>

                    <div className="text-[15px]">{product.title}</div>
                  </div>
                </td>
                <td>
                  {product.category}/{product.subCategory}
                </td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <div className="flex gap-4 items-center text-neutral/70">
                    <button className="hover:text-neutral duration-200">
                      <FaUserEdit className="text-lg" />
                    </button>
                    <button className="hover:text-red-500 duration-200">
                      <AiFillDelete className="text-lg" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;
