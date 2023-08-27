import React, { useEffect, useState } from "react";
import HeaderTopCommon from "../../components/common/HeaderTop";
import { WrapperContainer } from "../../style-App";
import { useDispatch } from "react-redux";
import Sidebar from "../../components/sidebar";
import ContactComponent from "../../components/contact/index";
import HorizontalSidebar from "../../components/horizontal-sidebar";
import VerticalSidebar from "../../components/vertical-sidebar";
import { GetNewForm } from "../../redux/new-form";
import NewsFormComponent from "../../components/newsform";
function NewsForm() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetNewForm());
  }, []);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (


    window.localStorage.getItem("checked") == 'false' ? <HorizontalSidebar>
      <WrapperContainer style={{ marginTop: "90px" }}>
        <HeaderTopCommon title={"Записи на семинар"} onClick={handleOpen} isBtn={false} />
        <NewsFormComponent handleClose={handleClose} open={open} />
      </WrapperContainer>

    </HorizontalSidebar> : <VerticalSidebar>
      <WrapperContainer>
        <HeaderTopCommon title={"Записи на семинар"} onClick={handleOpen} isBtn={false} />
        <NewsFormComponent handleClose={handleClose} open={open} />
      </WrapperContainer>

    </VerticalSidebar>
  );
}
export default NewsForm;
