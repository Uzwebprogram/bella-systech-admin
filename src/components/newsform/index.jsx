import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { DeleteContact, GetContact } from "../../redux/contact/index";
import Delete from "./delete";
import TableAdd from "./table";
import { useSelector } from "react-redux";
import { DeleteNewForm, GetNewForm } from "../../redux/new-form";
function NewsFormComponent() {
  const contactdelete = useSelector((state) => state.newsform);
  const dispatch = useDispatch();
  const [contactId, setContactId] = useState();
  const [openDelete, setOpenDelete] = useState(false);
  const handleCloseDelete = () => setOpenDelete(false);
  const handleDeleteModal = (e) => {
    setContactId(e.currentTarget.id);
    setOpenDelete(true);
  };

  useEffect(() => {
    dispatch(GetNewForm());
  }, []);

  const HandleDelete = async (e) => {
    await dispatch(DeleteNewForm(e.currentTarget.id));
    dispatch(GetNewForm());
  };
  console.log(contactdelete);
  if (contactdelete.deleteNewForm?.Success == true) {
    window.location.reload();
  }

  return (
    <>
      <TableAdd onClickDelete={handleDeleteModal} HandleDelete={HandleDelete} />
    </>
  );
}

export default NewsFormComponent;
