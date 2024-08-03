import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_ITEM,
  ADD_ITEM,
} from "../../../../../state/reducers/CategorySlice";
import { ReduxCounter } from "./ReduxCounter";

export const ReduxInfo = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.Category.category);
  return (
    <div className="light-color d-flex justify-content-between">
      <div className="w-50" style={{ marginRight: "1rem" }}>
        <table className="table table-dark">
          <thead>
            <tr className="bg-secondary-color">
              <th className="light-color">ID</th>
              <th className="light-color">Name</th>
              <th className="light-color">Price</th>
              <th>delete!!</th>
            </tr>
          </thead>
          <tbody>
            {category.map((i) => (
              <tr key={i.id}>
                <th>{i.id}</th>
                <td>{i.name}</td>
                <td>{i.price}</td>
                <td onClick={() => dispatch(REMOVE_ITEM(i.id))}>
                  <i className="fa fa-trash trash"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-50">
        <span className="text-color">add item</span>
        <ReduxCounter />
      </div>
    </div>
  );
};
