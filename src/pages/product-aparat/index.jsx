import React, { useEffect, useState } from "react";
import HeaderTopCommon from "../../components/common/HeaderTop";
import { WrapperContainer } from "../../style-App";
import { NewsGet } from "../../redux/news/index";
import { useDispatch } from "react-redux";
import HorizontalSidebar from "../../components/horizontal-sidebar";
import VerticalSidebar from "../../components/vertical-sidebar";
import { AparatGet } from "../../redux/aparat";
import AparatProductsComponent from "../../components/products-aparat";
function AparatProduct() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AparatGet());
  }, []);
  return (


    window.localStorage.getItem("checked") == 'false' ? <HorizontalSidebar>
      <WrapperContainer style={{ marginTop: "90px" }}>
        <HeaderTopCommon
          title={"Аппараты продукты"}
          onClick={showDrawer}
          textBtn={"Добавить продукты"}
        />
        <AparatProductsComponent handleClose={onClose} open={open} cols={4} contentWidth="65%" />
      </WrapperContainer>
    </HorizontalSidebar> : <VerticalSidebar>
      <WrapperContainer>
        <HeaderTopCommon
          title={"Аппараты продукты"}
          onClick={showDrawer}
          textBtn={"Добавить продукты"}
        />
        <AparatProductsComponent handleClose={onClose} open={open} cols={6} contentWidth="72%" />
      </WrapperContainer>
    </VerticalSidebar>
  );
}
export default AparatProduct;
