import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  // curl --location --request POST "https://api.imgbb.com/1/upload?expiration=600&key=YOUR_CLIENT_API_KEY" --form "image=R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  const { register, handleSubmit ,reset} = useForm();
  //   const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  // console.log("", img_hosting_url);
    const onSubmit = (data) => {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgResponse) => {
          if (imgResponse.success) {
            const imgURL = imgResponse.data.display_url;
            const { name, price, category, recipe } = data;
            const newItem = {
              name,
              price: parseFloat(price),
              category,
              recipe,
              image: imgURL,
            };
            console.log(newItem);
            axiosSecure.post("/menu", newItem).then((data) => {
              console.log("after posting new menu item", data.data);
              console.log(data);
              if (data.data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Item added successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          }
        });
    };

  return (
    <div className="w-full mx-10">
      <SectionTitle
        subHeading="---What's new?---"
        heading="ADD AN ITEM"
      ></SectionTitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-200 w-5/6 mx-auto px-5"
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Recipe name*</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category name*</span>
            </label>
            <select
              defaultValue="Pick One"
              className="select select-bordered"
              {...register("category")}
            >
              <option disabled>Pick one</option>
              <option>Pizza</option>
              <option>Salad</option>
              <option>Soup</option>
              <option>Drinks</option>
              <option>Dessert</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              {...register("price")}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            {...register("recipe")}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
          ></textarea>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input
            type="file"
            {...register("image")}
            className="file-input file-input-bordered w-full"
          />
        </div>
        <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
