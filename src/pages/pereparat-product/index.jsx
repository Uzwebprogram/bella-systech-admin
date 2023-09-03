import React, { useEffect, useState } from "react";
import HeaderTopCommon from "../../components/common/HeaderTop";
import { WrapperContainer } from "../../style-App";
import { NewsGet } from "../../redux/news/index";
import { useDispatch } from "react-redux";
import HorizontalSidebar from "../../components/horizontal-sidebar";
import VerticalSidebar from "../../components/vertical-sidebar";
import PereparatAparatComponent from "../../components/products-pereparat";
import { PereparatGet } from "../../redux/pereparat";
function PeraparatProduct() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PereparatGet());
  }, []);
  return (


    window.localStorage.getItem("checked") == 'false' ? <HorizontalSidebar>
      <WrapperContainer style={{ marginTop: "90px" }}>
        <HeaderTopCommon
          title={"Профессиональная косметика продукты"}
          onClick={showDrawer}
          textBtn={"Добавить продукты"}
        />
        <PereparatAparatComponent handleClose={onClose} open={open} cols={4} contentWidth="65%" />
      </WrapperContainer>
    </HorizontalSidebar> : <VerticalSidebar>
      <WrapperContainer>
        <HeaderTopCommon
          title={"Профессиональная косметика продукты"}
          onClick={showDrawer}
          textBtn={"Добавить продукты"}
        />
        <PereparatAparatComponent handleClose={onClose} open={open} cols={6} contentWidth="72%" />
      </WrapperContainer>
    </VerticalSidebar>
  );
}
export default PeraparatProduct;
