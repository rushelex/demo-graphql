import React, { FC } from "react";
import { useUserLazyQuery, useUserQuery } from "../../../__generated__/graphql";
import { UserAvatar } from "./UserAvatar";
import "../../../assets/styles/App.css";
import "./style.css";

export const User: FC = () => {
  /**
   * Получить юзера при вызове функции getUser
   */
  const [
    getUser,
    { data: userLazyData, loading: userLazyLoading, error: userLazyError },
  ] = useUserLazyQuery();

  const handleFetchUser = () => {
    getUser({
      variables: {
        userId: Math.floor(Math.random() * 10) + 1,
      },
    });
  };

  if (userLazyLoading) {
    return <>Загрузка...</>;
  }

  if (userLazyError) {
    return <>{userLazyError?.message}</>;
  }

  if (userLazyData) {
    return (
      <div className="user">
        <UserAvatar
          userName={userLazyData?.user.name}
          className="user__avatar"
        />

        <h1 className="user__name">Имя: {userLazyData.user.name}</h1>

        <p className="user__company">
          Компания: {userLazyData?.user.company.name}
        </p>
      </div>
    );
  }

  return (
    <button type="button" onClick={handleFetchUser}>
      Загрузить пользователя
    </button>
  );
};
