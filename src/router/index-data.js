import { lazy } from "react";
import Cookies from "universal-cookie";
const Login = lazy(() => import("../pages/login/index"));
const AddAdmin = lazy(() => import("../pages/add_admin/index"));
const Contact = lazy(() => import("../pages/contact/index"));
const Category = lazy(() => import("../pages/category/index"));
const Product = lazy(() => import("../pages/products/index"));
const Blog = lazy(() => import("../pages/blog/index"));
const News = lazy(() => import("../pages/news/index"))
const Project = lazy(() => import("../pages/projects/index"))
const Aparat = lazy(() => import("./../pages/aparat/index"))
const Peraparat = lazy(() => import("./../pages/pereparat/index"))
const PeraparatProduct = lazy(() => import("./../pages/pereparat-product"))
const ProductPereparatMore = lazy(() => import("./../pages/product-pereparat-more/index"))
const AparatProduct = lazy(() => import("./../pages/product-aparat/index"))
const AparatProductMore = lazy(() => import('../pages/product-aparat-more/index'))
const Sertfikat = lazy(() => import("./../pages/sertifikat/index"))
const NewsForm = lazy(() => import("./../pages/newsform/index"))
const cookie = new Cookies();


export const RouterData = [
  {
    id: 1,
    path: "/",
    component: <Login />,
  },
  {
    id: 2,
    path: "/adminadd",
    component: cookie.get("token") ? <AddAdmin /> : null,
  },
  {
    id: 3,
    path: "/contact",
    component: cookie.get("token") ? <Contact /> : null,
  },
  {
    id: 4,
    path: "/category",
    component: cookie.get("token") ? <Category /> : null,
  },
  {
    id: 5,
    path: "/sertfikat",
    component: cookie.get("token") ? <Sertfikat /> : null,
  },
  {
    id: 5,
    path: "/product",
    component: cookie.get("token") ? <Product /> : null,
  },
  {
    id: 6,
    path: "/partners",
    component: cookie.get("token") ? <Blog /> : null,
  },
  {
    id: 7,
    path: "/project",
    component: cookie.get("token") ? <Project /> : null,
  },
  {
    id: 8,
    path: "/news",
    component: cookie.get("token") ? <News /> : null,
  },
  {
    id: 8,
    path: "/news-form",
    component: cookie.get("token") ? <NewsForm /> : null,
  },
  {
    id: 9,
    path: "/category-aparat",
    component: cookie.get("token") ? <Aparat /> : null,
  },
  {
    id: 9,
    path: "/category-pereparat",
    component: cookie.get("token") ? <Peraparat /> : null,
  },
  {
    id: 10,
    path: "/pereparat-product",
    component: cookie.get("token") ? <PeraparatProduct /> : null,
  },
  {
    id: 11,
    path: "/aparat-product",
    component: cookie.get("token") ? <AparatProduct /> : null,
  },
  {
    id:12,
    path: "/aparat-product-more/:id",
    component: cookie.get("token") ? <AparatProductMore /> : null,
  },
  {
    id:12,
    path: "/pereparat-product-more/:id",
    component: cookie.get("token") ? <ProductPereparatMore /> : null,
  },
];


