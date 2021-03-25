import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['String']>;
  me?: Maybe<User>;
  allProducts: Array<Product>;
  singleProduct: Product;
  myCart: Cart;
};


export type QuerySingleProductArgs = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['String']>;
  signUp?: Maybe<User>;
  logOut: Scalars['String'];
  logIn?: Maybe<User>;
  uploadImage: Scalars['String'];
  createProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
  deleteProduct?: Maybe<Product>;
  addToCart?: Maybe<Scalars['Boolean']>;
  removeFromCart: Scalars['String'];
};


export type MutationSignUpArgs = {
  data: SignUpInput;
};


export type MutationLogInArgs = {
  data: LogInInput;
};


export type MutationUploadImageArgs = {
  image: Scalars['String'];
};


export type MutationCreateProductArgs = {
  data: CreateProductInput;
};


export type MutationUpdateProductArgs = {
  data: UpdateProductInput;
};


export type MutationDeleteProductArgs = {
  id: Scalars['String'];
};


export type MutationAddToCartArgs = {
  data: AddToCartInput;
};


export type MutationRemoveFromCartArgs = {
  productId: Scalars['String'];
};


export type SignUpInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type LogInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  cart?: Maybe<Array<Maybe<CartItem>>>;
};

export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['String']>;
  brand: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  countInStock: Scalars['Int'];
  price: Scalars['Int'];
};

export type CreateProductInput = {
  brand: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  countInStock: Scalars['Int'];
  price: Scalars['Int'];
};

export type UpdateProductInput = {
  id: Scalars['String'];
  brand: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  countInStock: Scalars['Int'];
  price: Scalars['Int'];
};

export type CartItem = {
  __typename?: 'CartItem';
  product: Product;
  quantity: Scalars['Int'];
};

export type Cart = {
  __typename?: 'Cart';
  id?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<CartItem>>>;
};

export type AddToCartInput = {
  productId: Scalars['String'];
  quantity: Scalars['Int'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type SignupMutationVariables = Exact<{
  data: SignUpInput;
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signUp?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email' | 'phone'>
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logOut'>
);

export type LoginMutationVariables = Exact<{
  data: LogInInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { logIn?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email' | 'phone'>
  )> }
);

export type UploadImageMutationVariables = Exact<{
  image: Scalars['String'];
}>;


export type UploadImageMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'uploadImage'>
);

export type CreateProductMutationVariables = Exact<{
  data: CreateProductInput;
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'brand' | 'image' | 'price' | 'countInStock' | 'description'>
  )> }
);

export type UpdateProductMutationVariables = Exact<{
  data: UpdateProductInput;
}>;


export type UpdateProductMutation = (
  { __typename?: 'Mutation' }
  & { updateProduct?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'brand' | 'image' | 'price' | 'countInStock' | 'description'>
  )> }
);

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteProductMutation = (
  { __typename?: 'Mutation' }
  & { deleteProduct?: Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'brand' | 'image' | 'price' | 'countInStock'>
  )> }
);

export type AddToCartMutationVariables = Exact<{
  data: AddToCartInput;
}>;


export type AddToCartMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addToCart'>
);

export type RemoveFromCartMutationVariables = Exact<{
  productId: Scalars['String'];
}>;


export type RemoveFromCartMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeFromCart'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'name' | 'email'>
    & { cart?: Maybe<Array<Maybe<(
      { __typename?: 'CartItem' }
      & Pick<CartItem, 'quantity'>
      & { product: (
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'brand' | 'name' | 'price' | 'countInStock' | 'image'>
      ) }
    )>>> }
  )> }
);

export type AllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProductsQuery = (
  { __typename?: 'Query' }
  & { allProducts: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'brand' | 'name' | 'description' | 'countInStock' | 'price' | 'image'>
  )> }
);

export type AdminDisplayProductQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminDisplayProductQuery = (
  { __typename?: 'Query' }
  & { allProducts: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'brand' | 'name' | 'countInStock' | 'price' | 'image' | 'description'>
  )> }
);

export type SingleProductQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleProductQuery = (
  { __typename?: 'Query' }
  & { singleProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'brand' | 'name' | 'countInStock' | 'price' | 'image' | 'description'>
  ) }
);

export type MyCartQueryVariables = Exact<{ [key: string]: never; }>;


export type MyCartQuery = (
  { __typename?: 'Query' }
  & { myCart: (
    { __typename?: 'Cart' }
    & Pick<Cart, 'id'>
    & { products?: Maybe<Array<Maybe<(
      { __typename?: 'CartItem' }
      & Pick<CartItem, 'quantity'>
      & { product: (
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'brand' | 'name' | 'image' | 'price'>
      ) }
    )>>> }
  ) }
);


export const SignupDocument = gql`
    mutation Signup($data: SignUpInput!) {
  signUp(data: $data) {
    name
    email
    phone
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logOut
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: LogInInput!) {
  logIn(data: $data) {
    name
    email
    phone
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UploadImageDocument = gql`
    mutation uploadImage($image: String!) {
  uploadImage(image: $image)
}
    `;
export type UploadImageMutationFn = Apollo.MutationFunction<UploadImageMutation, UploadImageMutationVariables>;

/**
 * __useUploadImageMutation__
 *
 * To run a mutation, you first call `useUploadImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImageMutation, { data, loading, error }] = useUploadImageMutation({
 *   variables: {
 *      image: // value for 'image'
 *   },
 * });
 */
export function useUploadImageMutation(baseOptions?: Apollo.MutationHookOptions<UploadImageMutation, UploadImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadImageMutation, UploadImageMutationVariables>(UploadImageDocument, options);
      }
export type UploadImageMutationHookResult = ReturnType<typeof useUploadImageMutation>;
export type UploadImageMutationResult = Apollo.MutationResult<UploadImageMutation>;
export type UploadImageMutationOptions = Apollo.BaseMutationOptions<UploadImageMutation, UploadImageMutationVariables>;
export const CreateProductDocument = gql`
    mutation createProduct($data: CreateProductInput!) {
  createProduct(data: $data) {
    id
    name
    brand
    image
    price
    countInStock
    description
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation updateProduct($data: UpdateProductInput!) {
  updateProduct(data: $data) {
    id
    name
    brand
    image
    price
    countInStock
    description
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation deleteProduct($id: String!) {
  deleteProduct(id: $id) {
    id
    name
    brand
    image
    price
    countInStock
  }
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const AddToCartDocument = gql`
    mutation addToCart($data: AddToCartInput!) {
  addToCart(data: $data)
}
    `;
export type AddToCartMutationFn = Apollo.MutationFunction<AddToCartMutation, AddToCartMutationVariables>;

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, options);
      }
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;
export const RemoveFromCartDocument = gql`
    mutation removeFromCart($productId: String!) {
  removeFromCart(productId: $productId)
}
    `;
export type RemoveFromCartMutationFn = Apollo.MutationFunction<RemoveFromCartMutation, RemoveFromCartMutationVariables>;

/**
 * __useRemoveFromCartMutation__
 *
 * To run a mutation, you first call `useRemoveFromCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromCartMutation, { data, loading, error }] = useRemoveFromCartMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useRemoveFromCartMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFromCartMutation, RemoveFromCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFromCartMutation, RemoveFromCartMutationVariables>(RemoveFromCartDocument, options);
      }
export type RemoveFromCartMutationHookResult = ReturnType<typeof useRemoveFromCartMutation>;
export type RemoveFromCartMutationResult = Apollo.MutationResult<RemoveFromCartMutation>;
export type RemoveFromCartMutationOptions = Apollo.BaseMutationOptions<RemoveFromCartMutation, RemoveFromCartMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    name
    email
    cart {
      quantity
      product {
        id
        brand
        name
        price
        countInStock
        image
      }
    }
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const AllProductsDocument = gql`
    query allProducts {
  allProducts {
    id
    brand
    name
    description
    countInStock
    price
    image
  }
}
    `;

/**
 * __useAllProductsQuery__
 *
 * To run a query within a React component, call `useAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
      }
export function useAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
        }
export type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>;
export type AllProductsLazyQueryHookResult = ReturnType<typeof useAllProductsLazyQuery>;
export type AllProductsQueryResult = Apollo.QueryResult<AllProductsQuery, AllProductsQueryVariables>;
export const AdminDisplayProductDocument = gql`
    query adminDisplayProduct {
  allProducts {
    id
    brand
    name
    countInStock
    price
    image
    description
  }
}
    `;

/**
 * __useAdminDisplayProductQuery__
 *
 * To run a query within a React component, call `useAdminDisplayProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminDisplayProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminDisplayProductQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminDisplayProductQuery(baseOptions?: Apollo.QueryHookOptions<AdminDisplayProductQuery, AdminDisplayProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminDisplayProductQuery, AdminDisplayProductQueryVariables>(AdminDisplayProductDocument, options);
      }
export function useAdminDisplayProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminDisplayProductQuery, AdminDisplayProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminDisplayProductQuery, AdminDisplayProductQueryVariables>(AdminDisplayProductDocument, options);
        }
export type AdminDisplayProductQueryHookResult = ReturnType<typeof useAdminDisplayProductQuery>;
export type AdminDisplayProductLazyQueryHookResult = ReturnType<typeof useAdminDisplayProductLazyQuery>;
export type AdminDisplayProductQueryResult = Apollo.QueryResult<AdminDisplayProductQuery, AdminDisplayProductQueryVariables>;
export const SingleProductDocument = gql`
    query singleProduct($id: String!) {
  singleProduct(id: $id) {
    id
    brand
    name
    countInStock
    price
    image
    description
  }
}
    `;

/**
 * __useSingleProductQuery__
 *
 * To run a query within a React component, call `useSingleProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleProductQuery(baseOptions: Apollo.QueryHookOptions<SingleProductQuery, SingleProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleProductQuery, SingleProductQueryVariables>(SingleProductDocument, options);
      }
export function useSingleProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleProductQuery, SingleProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleProductQuery, SingleProductQueryVariables>(SingleProductDocument, options);
        }
export type SingleProductQueryHookResult = ReturnType<typeof useSingleProductQuery>;
export type SingleProductLazyQueryHookResult = ReturnType<typeof useSingleProductLazyQuery>;
export type SingleProductQueryResult = Apollo.QueryResult<SingleProductQuery, SingleProductQueryVariables>;
export const MyCartDocument = gql`
    query myCart {
  myCart {
    id
    products {
      product {
        id
        brand
        name
        image
        price
      }
      quantity
    }
  }
}
    `;

/**
 * __useMyCartQuery__
 *
 * To run a query within a React component, call `useMyCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyCartQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyCartQuery(baseOptions?: Apollo.QueryHookOptions<MyCartQuery, MyCartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyCartQuery, MyCartQueryVariables>(MyCartDocument, options);
      }
export function useMyCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyCartQuery, MyCartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyCartQuery, MyCartQueryVariables>(MyCartDocument, options);
        }
export type MyCartQueryHookResult = ReturnType<typeof useMyCartQuery>;
export type MyCartLazyQueryHookResult = ReturnType<typeof useMyCartLazyQuery>;
export type MyCartQueryResult = Apollo.QueryResult<MyCartQuery, MyCartQueryVariables>;