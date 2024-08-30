import React, { useContext } from "react";
import EAItem from "./EAItem";
import { EAContext } from "./EAContext";

const EAList = () => {
  const { filterItems } = useContext(EAContext);
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-responsive table-bordered">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filterItems &&
              filterItems.map((item, index) => (
                <EAItem key={index} index={index} item={item} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EAList;
