import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM } from "../../../../../state/reducers/CategorySlice";
export const ReduxCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.Category.category);
  const save = (event) => {
    event.preventDefault();
    // console.log(event.target.name.value);

    const name = event.target.name.value;
    const id = event.target.id.value;
    const price = event.target.price.value;

    if (name !== "" && id !== "" && price !== "") {
      let category = { id: id, name: name, price: price };
      dispatch(ADD_ITEM(category));
    } else {
      alert("you must fill all inputs");
    }
  };
  return (
    <div className="w-100">
      <form onSubmit={(e) => save(e)}>
        <div class="form-group">
          <label>ID</label>
          <input type="text" name="id" placeholder="ID" class="form-control" />
        </div>
        <div class="form-group">
          <label>name</label>
          <input
            type="text"
            name="name"
            class="form-control"
            placeholder="Name"
          />
        </div>
        <div class="form-group">
          <label>price</label>
          <input
            name="price"
            type="text"
            class="form-control"
            placeholder="Price"
          />
        </div>
        <button type="submit" class="btn btn-dark mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};
