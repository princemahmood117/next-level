import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/appError";
import { IJwtPayload } from "../auth/auth.interface";
import { IProduct } from "./product.interface";
import { Product } from "./product.model";
import User from "../user/user.model";

const createProduct = async (
  productData: Partial<IProduct>,
  authUser: IJwtPayload,
) => {
  const newProduct = new Product({
    ...productData,
    authUser: authUser.userId,
  });

  const result = await newProduct.save();
  return result;
};

const getAllProduct = async (query: Record<string, unknown>) => {
  const result = await Product.find();
  return result;
};

const getSingleProduct = async (productId: string) => {
  

  const product = await Product.findById(productId)
 
  return product
};

const updateProduct = async (
  productId: string,
  payload: Partial<IProduct>,
  authUser: IJwtPayload,
) => {
  const user = await User.findById(authUser.userId);

  if (user?.role !== "admin") {
    throw new AppError(StatusCodes.NOT_FOUND, "You are not authorized");
  }
  const product = await Product.findOne({
    _id: productId,
  });

  if (!product) {
    throw new AppError(StatusCodes.NOT_FOUND, "Product Not Found");
  }

  const result = await Product.findByIdAndUpdate(productId, payload, {
    new: true,
  });

  return result;
};

const deleteProduct = async (productId: string, authUser: IJwtPayload) => {
  const user = await User.findById(authUser.userId);

  if (user?.role !== "admin") {
    throw new AppError(StatusCodes.NOT_FOUND, "You are not authorized");
  }
  const product = await Product.findOne({
    _id: productId,
  });

  if (!product) {
    throw new AppError(StatusCodes.NOT_FOUND, "Product Not Found");
  }
  return await Product.findByIdAndDelete(productId);
};

export const ProductService = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
