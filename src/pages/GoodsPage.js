import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "../store/goodsSlice";
import { addGood } from "../store/cartSlice";

const GoodsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoods());
  }, []);

  const dataGoods = useSelector((state) => state.goods.goods);
  const increaseCounterCart = (el) => {
    dispatch(addGood(el));
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      {dataGoods.map((el, index) => [
        <div
          key={index}
          style={{
            border: "2px solid",
            width: "250px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <>
            <img
              src="https://kartinki.pics/uploads/posts/2021-07/1625597452_46-kartinkin-com-p-l-tetrad-smerti-art-art-krasivo-47.png"
              style={{ width: "250px", height: "300px" }}
            />
          </>
          <div>{el.title}</div>
          <button
            onClick={() => {
              increaseCounterCart(el);
            }}
          >
            Купить
          </button>
        </div>,
      ])}
    </div>
  );
};

export default GoodsPage;
