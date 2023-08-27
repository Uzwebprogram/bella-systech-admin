import React, { useEffect, useState } from "react";
import HeaderTopCommon from "../../components/common/HeaderTop";
import { WrapperContainer } from "../../style-App";
import { AparatProductGet } from "../../redux/product-aparat/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar";
import HorizontalSidebar from "../../components/horizontal-sidebar";
import VerticalSidebar from "../../components/vertical-sidebar";
import { AparatProductPost } from '../../redux/product-aparat/index';
import ProductAparatMoreComponent from '../../components/product-aparat-more/index';
import { useParams } from "react-router-dom";
import ProductPereparatMoreComponent from "../../components/product-pereparat-more";
import { PereparatGet } from "../../redux/pereparat";

function ProductPereparatMore() {
   
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(PereparatGet());
    }, []);
    return (

        window.localStorage.getItem("checked") == 'false' ? <HorizontalSidebar>
            <WrapperContainer style={{ marginTop: "90px" }}>
                <HeaderTopCommon
                    title={"Страница с подробностями об Перепараты"}
                    isBtn={false}
                />
                <ProductPereparatMoreComponent />
            </WrapperContainer>
        </HorizontalSidebar> : <VerticalSidebar>
            <WrapperContainer>
                <HeaderTopCommon
                    title={"Страница с подробностями об Перепараты"}
                    isBtn={false}
                />
                <ProductPereparatMoreComponent />
            </WrapperContainer>
        </VerticalSidebar>
    );
}
export default ProductPereparatMore;
