import React from "react";
import ImageUploadDesign from "./upload";
import DraverCommon from "../../../common/Drawer";
import {
  DesignProductPut,
  UploadImageDesign,
  UploadImageDesign2,
} from "../../../../redux/product-aparat/design";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CommonBtn from "../../../common/CommonBtn";

const DesignProductPuts = ({
  setOpenAparatProduct,
  putAparatId,
  openAparatProduct,
}) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const dataDesign = useSelector(state => state.design.DesignProductGet.data)
  const dataDesignFilter = dataDesign.filter(e => e.id == putAparatId)
  const DoneSubmit = async (e) => {
    e.preventDefault();
    const body = {
      before: !dataImageDesign1.data ? dataDesignFilter.map(elem => elem.before)[0] : dataImageDesign1.data,
      after: !dataImageDesign2.data ? dataDesignFilter.map(elem => elem.before)[0] : dataImageDesign2.data,
      aparat: id,
    };
    await dispatch(DesignProductPut({ body, id: putAparatId }));
    setOpenAparatProduct();
    window.location.reload();
  };
  const dataImageDesign1 = useSelector(
    (state) => state.design?.uploadDesignProduct
  );
  const HandleChangeDesigns = async (e) => {
    await dispatch(UploadImageDesign(e));
  };
  const dataImageDesign2 = useSelector(
    (state) => state.design?.uploadDesignProduct2
  );
  const HandleChangeDesign2s = async (e) => {
    await dispatch(UploadImageDesign2(e));
  };
  return (
    <>
      <DraverCommon open={openAparatProduct} onClose={setOpenAparatProduct}>
        <form onSubmit={DoneSubmit}>
          {" "}
          <ImageUploadDesign
            HandleChange={HandleChangeDesigns}
            HandleChange2={HandleChangeDesign2s}
          />
          <CommonBtn
            type="submit"
            style={{
              margin: "20px auto 0 auto",
              padding: "12px 40px",
              border: "2px solid #fff",
            }}
          >
            Добавить
          </CommonBtn>
        </form>
      </DraverCommon>
    </>
  );
};

export default DesignProductPuts;
