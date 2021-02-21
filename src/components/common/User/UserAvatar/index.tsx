import React, { CSSProperties, FC, ReactElement } from "react";
import avatar from "../../../../assets/images/avatar.jpg";
import "./style.css";

interface UserAvatarProps {
  userName?: string | undefined;
  className?: string | undefined;
  style?: CSSProperties | undefined;
}

export const UserAvatar: FC<UserAvatarProps> = ({
  userName,
  className,
  style,
}: UserAvatarProps): ReactElement => {
  return (
    <div className={`avatar ${className}`} style={style}>
      <img src={avatar} alt={userName} />
    </div>
  );
};

UserAvatar.defaultProps = {
  userName: "",
  className: "",
  style: {},
};
