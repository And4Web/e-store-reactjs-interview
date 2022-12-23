import * as actionTypes from "./types";
import axios from "axios";

const productCategories = [
  {
    Id: 1,
    Category: "Kids",
    SubCategory: [
      {
        Id: 1,
        Name: "Dresses",
      },
      {
        Id: 2,
        Name: "Jacket",
      },
    ],
  },
  {
    Id: 2,
    Category: "Men",
    SubCategory: [
      {
        Id: 1,
        Name: "TShirt",
      },
      {
        Id: 2,
        Name: "Jacket",
      },
    ],
  },
];

// const product = [
//   {
//     Id: 1,
//     imageSrc: require("../../../assets/img/shop/shop-1.jpg"),
//     name: "Product 1",
//     price: "$10.00",
//   },
//   {
//     Id: 2,
//     imageSrc: require("../../../assets/img/shop/shop-2.jpg"),
//     name: "Product 2",
//     price: "$20.00",
//   },
//   {
//     Id: 3,
//     imageSrc: require("../../../assets/img/shop/shop-3.jpg"),
//     name: "Product 3",
//     price: "$25.00",
//   },
// ];

export const getProductCategories = () => async (dispatch) => {
  let tempCategories = [];

  await axios({
    method: "get",
    url: "http://localhost:5000/api/products/get-categories",
  }).then((res) => {
    // console.log('Category data RESPONSE FROM API: ', res.data)
    let parentCat = res.data.data.filter(
      (item) => item.parentcategoryid === null
    );
    parentCat.map((cat) => {
      let t = {
        Id: cat.id,
        Category: cat.category,
        SubCategory: res.data.data
          .filter((item) => item.parentcategoryid === cat.id)
          .map((subCat) => {
            return {
              Id: subCat.id,
              Name: subCat.category,
            };
          }),
      };
      return tempCategories.push(t);
    });
  }).catch(err=>{
    console.log("Error getting Categories from server:", err.message);
  });

  dispatch({
    type: actionTypes.PRODUCT_CATEGORY,
    // data: productCategories
    data: tempCategories,
  });
};

export const getProducts = () => async (dispatch) => {
  let tempProduct;

  await axios({
    method: "get",
    url: "http://localhost:5000/api/products/get-products",
  }).then((res) => {
    let data = res.data.data;
    // console.log("Product Data response from API: ", data);
    tempProduct = data.map((item) => {
      return {
        Id: item.id,
        imageSrc: `http://localhost:5000/${item.productimg}`,
        name: item.productname,
        price: item.price,
      };
    });
    
  }).catch(err=>{
    console.log("Error getting Products from server:", err.message);
  });

  dispatch({
    type: actionTypes.PRODUCT,
    // data: product,
    data: tempProduct,
  });
};
