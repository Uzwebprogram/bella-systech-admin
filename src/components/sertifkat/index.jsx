import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewsDelete, NewsPut } from "../../redux/news/index";
import Delete from "./delete";
import UslugyForm from "./post";
import Put from "./put";
import TableAdd from "./table";
import { SertificatDelete, SertificatPut , SertificatGet } from "../../redux/sertifikat";

import ImageGet from "./image-get";
function SertfikatComponent({ open, handleClose, cols }) {
  const newsdelete = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleDeleteModal = (e) => {
    setCategoryId(e.target.id);
    setOpenDelete(true);
  };
  const [openPut, setOpenPut] = useState(false);
  const onClosePut = () => {
    setOpenPut(false);
  };
  const handlePutModal = (e) => {
    setCategoryId(e.currentTarget.id);
    setOpenPut(true);
  };
  const HandleDelete = async(e) => {
    await dispatch(SertificatDelete(e.currentTarget.id));
    dispatch(SertificatGet())
  };
  if (newsdelete.newsDelete.Success == true) {
    window.location.reload();
  }
  const HandlePut = () => {
    dispatch(SertificatPut(categoryId));
  };
  return (
    <>
      <UslugyForm Open={open} HandleClose={handleClose} />
      {/* <TableAdd onClickDelete={handleDeleteModal} HandleDelete={HandleDelete} onClickPut={handlePutModal} /> */}
      <ImageGet onClickDelete={handleDeleteModal} HandleDelete={HandleDelete} onClickPut={handlePutModal} cols={cols} />
      <Delete
        // HandleDelete={HandleDelete}
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
      />
      <Put
        put_id={categoryId}
        HandlePut={HandlePut}
        openPut={openPut}
        handleClosePut={onClosePut}
      />
    </>
  );
}

export default SertfikatComponent;
