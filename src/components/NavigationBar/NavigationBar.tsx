import React, {FC, memo, useEffect, useState} from 'react';
import './NavigationBar.scss';
import { ReactComponent as IconHome } from "./icons/home.svg";
import { ReactComponent as IconSearch } from "./icons/search.svg";
import { ReactComponent as IconTable } from "./icons/tables.svg";
import { ReactComponent as IconMap } from "./icons/map.svg";
import { ReactComponent as IconWidget } from "./icons/widgets.svg";
import { ReactComponent as IconSettings } from "./icons/settings.svg";
import { ReactComponent as IconExit } from "./icons/exit.svg";
import { ReactComponent as IconProfile } from "./icons/profile.svg";
import { ReactComponent as IconFinance} from "./icons/finances.svg";
import {Link} from "react-router-dom";

const NavigationBar: FC = () => {

  const [currentTab, setCurrentTab] = useState<string>('main');
  const [settingIsOpen, setSettingsOpen] = useState<boolean>(false);

  const toggleSettings = (event: React.SyntheticEvent<HTMLElement>) => {
    event.preventDefault();
    setSettingsOpen(prev => !prev);
  }

  const changeTab = (event: React.SyntheticEvent<HTMLElement>) => {
    setCurrentTab(event.currentTarget.id);
  }

  useEffect(() => {
    const tabItem = document.querySelector('.navbar__item.is-active');
    tabItem?.classList.remove('is-active');
    const tabItems = document.querySelectorAll('.navbar__item');
    tabItems.forEach(e => {
      if (currentTab === e.id)  {
        e.classList.add('is-active')
      }
    });
  }, [currentTab])

  return (
      <nav className="navbar">
        <header className="navbar__header">
          Меню
        </header>
        <ul className="navbar__list">
          <li className="navbar__item" key="main" id="main" onClick={changeTab}>
            <Link role="tab" className="item" to={'/'}>
              <span className="item__icon"><IconHome className="img-common" /></span>
              <span className="item__text">Главная</span>
            </Link>
          </li>
          <li className="navbar__item" key="address" id="address" onClick={changeTab}>
            <Link role="tab" className="item" to={"/address"}>
              <span className="item__icon"><IconSearch className="img-common" /></span>
              <span className="item__text">Поиск адресов</span>
            </Link>
          </li>
          <li className="navbar__item" key="table" id="table" onClick={changeTab}>
            <Link role="tab" className="item" to={'#'}>
              <span className="item__icon"><IconTable className="img-common" /></span>
              <span className="item__text">Таблицы</span>
            </Link>
          </li>
          <li className="navbar__item" key="map" id="map" onClick={changeTab}>
            <Link role="tab" className="item" to={"#"}>
              <span className="item__icon"><IconMap className="img-common" /></span>
              <span className="item__text">Карты</span>
            </Link>
          </li>
          <li className="navbar__item" key="widget" id="widget" onClick={changeTab}>
            <Link role="tab" className="item" to={"#"}>
              <span className="item__icon"><IconWidget className="img-common" /></span>
              <span className="item__text">Виджеты</span>
            </Link>
          </li>
          <li className="navbar__item">
            <div role="tab" className="item item--complex" id="settings" key="settings">
              <div className={`item__parent ${settingIsOpen ? 'is-open': 'is-close'}`} onClick={toggleSettings}>
                <span className="item__icon"><IconSettings className="img-common" /></span>
                <span className="item__text">Настройки</span>
              </div>
              {
                settingIsOpen &&
                <div className="item__children">
                  <ul className="navbar__list">
                    <li className="navbar__item navbar__item--children" key="profile" id="profile" onClick={changeTab}>
                      <Link role="tab" className="item" to={"#"}>
                        <span className="item__icon"><IconProfile className="img-common" /></span>
                        <span className="item__text">Настройки профиля</span>
                      </Link>
                    </li>
                    <li className="navbar__item navbar__item--children" key="finance" id="finance" onClick={changeTab}>
                      <Link role="tab" className="item" to={"#"}>
                        <span className="item__icon"><IconFinance className="img-common" /></span>
                        <span className="item__text">Управление финансами</span>
                      </Link>
                    </li>
                  </ul>
              </div>
              }
            </div>
          </li>
          <li className="navbar__item" key="exit" id="exit" onClick={changeTab}>
            <Link role="tab" className="item" to={"#"}>
              <span className="item__icon"><IconExit className="img-common" /></span>
              <span className="item__text">Выход</span>
            </Link>
          </li>
        </ul>
      </nav>
  )

}

export default memo(NavigationBar);