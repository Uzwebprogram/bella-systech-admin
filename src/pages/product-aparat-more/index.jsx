import React, { useEffect, useState } from "react";
import HeaderTopCommon from "../../components/common/HeaderTop";
import { WrapperContainer } from "../../style-App";
import { AparatProductGet } from "../../redux/product-aparat/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar";
import HorizontalSidebar from "../../components/horizontal-sidebar";
import VerticalSidebar from "../../components/vertical-sidebar";
import { AparatProductPost } from './../../redux/product-aparat/index';
import ProductAparatMoreComponent from './../../components/product-aparat-more/index';
import { useParams } from "react-router-dom";

function ProductAparatMore() {
   
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(AparatProductGet());
    }, []);
    return (

        window.localStorage.getItem("checked") == 'false' ? <HorizontalSidebar>
            <WrapperContainer style={{ marginTop: "90px" }}>
                <HeaderTopCommon
                    title={"Страница с подробностями об Аппараты"}
                    isBtn={false}
                />
                <ProductAparatMoreComponent />
            </WrapperContainer>
        </HorizontalSidebar> : <VerticalSidebar>
            <WrapperContainer>
                <HeaderTopCommon
                    title={"Страница с подробностями об Аппараты"}
                    isBtn={false}
                />
                <ProductAparatMoreComponent />
            </WrapperContainer>
        </VerticalSidebar>
    );
}
export default ProductAparatMore;
