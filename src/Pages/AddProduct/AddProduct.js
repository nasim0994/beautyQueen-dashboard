import React, { useState, useRef } from "react";
import "./AddProduct.css";
import JoditEditor from "jodit-react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import ButtonSpinner from "../../components/ButtonSpinner/ButtonSpinner";
import ImageUploader from "react-images-upload";
import Swal from "sweetalert2";
import Select from "react-select";
const sizes = [
  { value: "32", label: "32" },
  { value: "34", label: "34" },
  { value: "36", label: "36" },
  { value: "38", label: "38" },
  { value: "40", label: "40" },
  { value: "42", label: "42" },
  { value: "44", label: "44" },
];

const AddProduct = () => {
  const editor = useRef(null);
  const { register, handleSubmit, reset } = useForm();

  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [pictures, setPictures] = useState([]);

  const onDrop = (picture) => {
    setPictures([...pictures, picture]);
  };

  const { data: categories = {}, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch(`https://beauty-queen-server.vercel.app/categories`, {}).then(
        (res) => res.json()
      ),
  });

  const handelAddProduct = (data) => {
    setLoading(true);

    const product = {
      category: data.category,
      subCategory: data.subCategory,
      title: data.title,
      price: parseInt(data.price),
      discountPercentage: parseInt(data.discountPercentage),
      stock: parseInt(data.stock),
      brand: data.brand,
      thumbnail: data.thumbnail,
      pictures: pictures,
      description: details,
      size: selectedSize,
      rating: parseInt(5),
    };

    fetch("https://beauty-queen-server.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("success", "Product post Success", "success");
          setLoading(false);
          reset();
          setDetails("");
          setSelectedSize(null);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit(handelAddProduct)}
        className="w-[95%] md:w-[80%] mx-auto card card-body shadow-2xl bg-white"
      >
        {/* Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Title</span>
          </label>
          <input
            type="text"
            {...register("title")}
            placeholder="Product Title"
            className="input input-bordered"
            required
          />
        </div>

        {/* Category */}
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Category:</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered w-full "
            >
              {categories?.map((category) => (
                <option defaultValue={category.title} className="text-base">
                  {category.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Sub-Category:</span>
            </label>
            <select
              {...register("subCategory", { required: true })}
              className="select select-bordered w-full"
            >
              {categories?.map((category) =>
                category?.dropdown?.map((subCategory) => (
                  <option
                    defaultValue={subCategory.title}
                    className="text-base"
                  >
                    {subCategory.title}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>

        {/* Price */}
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              {...register("price")}
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Discount Percentage
              </span>
            </label>
            <input
              type="number"
              {...register("discountPercentage")}
              placeholder="0%"
              className="input input-bordered"
              defaultValue="0"
              required
            />
          </div>
        </div>

        {/* stock + brand */}
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Stock</span>
            </label>
            <input
              type="number"
              {...register("stock")}
              placeholder="stock"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Brand (optional)</span>
            </label>
            <input
              type="text"
              {...register("brand")}
              placeholder="brand"
              className="input input-bordered"
            />
          </div>
        </div>

        {/* Thumbnail + size */}
        <div className="grid md:grid-cols-2 items-center gap-4">
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">
                Product Thumbnail
              </span>
            </label>
            <input
              {...register("thumbnail")}
              type="text"
              className="input w-full input-bordered"
              placeholder="thumbnail url"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">
                Available Size (optional)
              </span>
            </label>
            <Select
              isMulti={true}
              defaultValue={selectedSize}
              onChange={setSelectedSize}
              options={sizes}
            />
          </div>
        </div>

        {/* Description */}
        <div className="form-control ">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <JoditEditor
            ref={editor}
            value={details}
            tabIndex={1}
            onBlur={(newContent) => setDetails(newContent)}
          />
        </div>

        <button type="submit" className="btn">
          {loading ? <ButtonSpinner /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
