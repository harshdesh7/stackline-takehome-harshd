import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../store";
import { RootState } from "../store";
import result from "../stackline_frontend_assessment_data_2021.json";
import SalesTable from "./SalesTable";
import ProductCard from "./ProductCard";

const DataLoader: React.FC = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.items.data);

  useEffect(() => {
    dispatch(loadData(result));
  }, [dispatch]);

  return (
    <>
      <img src="../assets/stackline_logo.svg"></img>
      {items.map((item) => (
        <div>
          <ProductCard
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            brand={item.brand}
            tags={item.tags}
          ></ProductCard>
          <SalesTable sales={item.sales}></SalesTable>
        </div>
      ))}
    </>
  );
};

export default DataLoader;
