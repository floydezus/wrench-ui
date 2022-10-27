import React, {FC} from 'react';
import './UserCard.scss';
import { ReactComponent as IconPerson } from "./person.svg";

const UserCard: FC = () => {

  return (
      <div className="user-card">
        <span className="user-card__img">
          <IconPerson className="img-common" />
        </span>
        <div className="user-card__title">
          Имя Фамилия
        </div>
      </div>
  )

}

export default UserCard;