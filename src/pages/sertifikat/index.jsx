import React, { useEffect, useState } from "react";
import HeaderTopCommon from "../../components/common/HeaderTop";
import { WrapperContainer } from "../../style-App";
import { useDispatch } from "react-redux";
import HorizontalSidebar from "../../components/horizontal-sidebar";
import VerticalSidebar from "../../components/vertical-sidebar";
import NewsComponent from "../../components/news";
import { NewsGet } from "../../redux/news";
import SertfikatComponent from "../../components/sertifkat";
function Sertifkat() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(NewsGet());
  }, []);
  return (


    window.localStorage.getItem("checked") == 'false' ? <HorizontalSidebar>
      <WrapperContainer style={{ marginTop: "90px" }} >
        <HeaderTopCommon
          title={"Сертификат"}
          onClick={showDrawer}
          textBtn={"Добавить Сертификат"}
        />
        <SertfikatComponent handleClose={onClose} open={open} cols={3} />
      </WrapperContainer>
    </HorizontalSidebar> : <VerticalSidebar>
      <WrapperContainer>
        <HeaderTopCommon
          title={"Сертификат"}
          onClick={showDrawer}
          textBtn={"Добавить Сертификат"}
        />
        <SertfikatComponent handleClose={onClose} open={open} cols={3} />
      </WrapperContainer>
    </VerticalSidebar>
  );
}
export default Sertifkat;
