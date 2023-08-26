import React, { useEffect, useState } from "react";
import HeaderTopCommon from "../../components/common/HeaderTop";
import { WrapperContainer } from "../../style-App";
import { NewsGet } from "../../redux/news/index";
import { useDispatch } from "react-redux";
import HorizontalSidebar from "../../components/horizontal-sidebar";
import VerticalSidebar from "../../components/vertical-sidebar";
import BlogComponent from "../../components/blog";
function Blog() {
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
      <WrapperContainer style={{ marginTop: "90px" }}>
        <HeaderTopCommon
          title={"Партнеры"}
          onClick={showDrawer}
          textBtn={"Добавить партнеры"}
        />
        <BlogComponent handleClose={onClose} open={open} cols={3} />
      </WrapperContainer>
    </HorizontalSidebar> : <VerticalSidebar>
      <WrapperContainer>
        <HeaderTopCommon
          title={"Партнеры"}
          onClick={showDrawer}
          textBtn={"Добавить партнеры"}
        />
        <BlogComponent handleClose={onClose} open={open} cols={4} />
      </WrapperContainer>
    </VerticalSidebar>
  );
}
export default Blog;
