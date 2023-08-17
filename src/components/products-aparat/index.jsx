import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  AparatProductDelete,
  AparatProductPut,
  AparatProductGet,
} from "../../redux/product-aparat/index";
import Delete from "./delete";
import ProductAddForm from "./post";
import Put from "./put";
import TableAdd from "./table";
import CardAdd from "./card";
function AparatProductsComponent({ open, handleClose, cols, contentWidth }) {
  const dispatch = useDispatch();
  const [selectId, setSelectId] = useState(null);
  console.log('sid', selectId)
  const [productId, setProductId] = useState();
  const [loadings, setLoadings] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleDeleteModal = (e) => {
    setProductId(e.currentTarget.id);
    setOpenDelete(true);
  };

  useEffect(() => {
    dispatch(AparatProductGet());
  }, []);

  const [openPut, setOpenPut] = useState(false);
  const onClosePut = () => {
    setOpenPut(false);
  };
  const handlePutModal = (e) => {
    setProductId(e.currentTarget.id);
    setOpenPut(true);
  };
  const HandleDelete = async (e) => {
    await dispatch(AparatProductDelete(e.target.id));
    dispatch(AparatProductGet());
  };

  return (
    <>
      <ProductAddForm
        setSelectId={setSelectId}
        selectId={selectId}
        Open={open}
        HandleClose={handleClose}
        setLoadings={setLoadings}
      />
      {/* <TableAdd
        HandleDelete={HandleDelete}
        loadings={loadings}
        onClickPut={handlePutModal}
        setLoadings={setLoadings}
        selectId={selectId}
      /> */}
      <CardAdd
        contentWidth={contentWidth}
        cols={cols}
        HandleDelete={HandleDelete}
        onClickPut={handlePutModal}
        selectId={selectId}
      />
      <Delete
        productId={productId}
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
      />
      <Put
        setLoadings={setLoadings}
        setSelectId={setSelectId}
        selectId={selectId}
        put_id={productId}
        openPut={openPut}
        handleClosePut={onClosePut}
      />
    </>
  );
}

export default AparatProductsComponent;
