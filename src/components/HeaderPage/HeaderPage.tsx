import React, {FC} from 'react';
import './HeaderPage.scss';
import Logo from "../Logo/Logo";
import UserCard from "../UserCard/UserCard";

const HeaderPage: FC =  () => {

  return (
      <header className="header-page">
        <div className="container header-page__container">
          <div className="header-page__start">
            <Logo />
          </div>
          <div className="header-page__end">
            <UserCard />
          </div>
        </div>
      </header>
  )

}

export default HeaderPage;