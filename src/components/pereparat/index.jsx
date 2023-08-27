import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Delete from "./delete";
import CategoryAddForm from "./post";
import Put from "./put";
import TableAdd from "./table";
import { PereparatCategoryDelete, PereparatCategoryPut } from "../../redux/pereparat-category";
function PereparatComponent({ open, handleClose }) {
  const categorydelete = useSelector((state) => state.pereparatcategory);
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleDeleteModal = (e) => {
    setCategoryId(e.target.id);
    setOpenDelete(true);
  };
  const [openPut, setOpenPut] = useState(false);
  const handleClosePut = () => setOpenPut(false);
  const handlePutModal = (e) => {
    setCategoryId(e.currentTarget.id);
    setOpenPut(true);
  };
  const HandleDelete = (e) => {
    dispatch(PereparatCategoryDelete(e.currentTarget.id));
  };
  if (categorydelete.PereparatCategoryDelete.Success == true) {
    window.location.reload();
  }
  const HandlePut = () => {
    dispatch(PereparatCategoryPut(categoryId));
  };
  return (
    <>
      <CategoryAddForm Open={open} HandleClose={handleClose} />
      <TableAdd onClickDelete={handleDeleteModal} HandleDelete={HandleDelete} onClickPut={handlePutModal} />
      <Delete
        // HandleDelete={HandleDelete}
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
      />
      <Put
        put_id={categoryId}
        HandlePut={HandlePut}
        openPut={openPut}
        handleClosePut={handleClosePut}
      />
    </>
  );
}

export default PereparatComponent;
