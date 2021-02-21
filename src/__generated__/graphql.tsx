import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type PostInput = {
  userId: Scalars['Int'];
  title: Scalars['String'];
  body: Scalars['String'];
};

export type PostUpdateInput = {
  userId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type CommentInput = {
  postId: Scalars['Int'];
  userId: Scalars['Int'];
  body: Scalars['String'];
};

export type CommentUpdateInput = {
  body?: Maybe<Scalars['String']>;
};

export type PaginationInput = {
  limit?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type PostWithPagination = {
  __typename?: 'PostWithPagination';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  totalPages: Scalars['Int'];
  data?: Maybe<Array<Post>>;
};

export type UserWithPagination = {
  __typename?: 'UserWithPagination';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  totalPages: Scalars['Int'];
  data?: Maybe<Array<User>>;
};

export type CommentWithPagination = {
  __typename?: 'CommentWithPagination';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  totalPages: Scalars['Int'];
  data?: Maybe<Array<Comment>>;
};

export type Query = {
  __typename?: 'Query';
  user: User;
  users: UserWithPagination;
  post: Post;
  posts: PostWithPagination;
  comment: Comment;
  comments: CommentWithPagination;
};


export type QueryUserArgs = {
  userId: Scalars['Int'];
};


export type QueryUsersArgs = {
  pagination?: Maybe<PaginationInput>;
};


export type QueryPostArgs = {
  postId: Scalars['ID'];
};


export type QueryPostsArgs = {
  pagination?: Maybe<PaginationInput>;
};


export type QueryCommentArgs = {
  commentId: Scalars['ID'];
};


export type QueryCommentsArgs = {
  pagination?: Maybe<PaginationInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPost: Post;
  updatePost: Post;
  deletePost: Post;
  addComment: Comment;
  updateComment: Comment;
  deleteComment: Comment;
};


export type MutationAddPostArgs = {
  data: PostInput;
};


export type MutationUpdatePostArgs = {
  postId: Scalars['ID'];
  data: PostUpdateInput;
};


export type MutationDeletePostArgs = {
  postId: Scalars['ID'];
};


export type MutationAddCommentArgs = {
  data: CommentInput;
};


export type MutationUpdateCommentArgs = {
  commentId: Scalars['ID'];
  data: CommentUpdateInput;
};


export type MutationDeleteCommentArgs = {
  commentId: Scalars['ID'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  author: User;
  comments: Array<Comment>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  body: Scalars['String'];
  post: Post;
  author: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  address?: Maybe<Address>;
  phone: Scalars['String'];
  website: Scalars['String'];
  company: Company;
  posts: Array<Post>;
};

export type Company = {
  __typename?: 'Company';
  name: Scalars['String'];
  catchPhrase: Scalars['String'];
  bs: Scalars['String'];
};

export type Address = {
  __typename?: 'Address';
  street: Scalars['String'];
  suite: Scalars['String'];
  city: Scalars['String'];
  zipcode: Scalars['String'];
  geo: Geo;
};

export type Geo = {
  __typename?: 'Geo';
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type PostFragment = (
  { __typename?: 'User' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'username'>
    ) }
  )> }
);

export type UserQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'name' | 'phone'>
    & { company: (
      { __typename?: 'Company' }
      & Pick<Company, 'name'>
    ) }
    & PostFragment
  ) }
);

export const PostFragmentDoc = gql`
    fragment Post on User {
  posts {
    id
    title
    body
    author {
      username
    }
  }
}
    `;
export const UserDocument = gql`
    query User($userId: Int!) {
  user(userId: $userId) {
    name
    phone
    company {
      name
    }
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    