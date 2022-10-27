import React, {FC} from 'react';
import './Logo.scss';
import { ReactComponent as IconLogo } from "./wrench.svg";
import {Link} from "react-router-dom";

const Logo: FC = () => {

  return (
      <Link to="/" className="logo">
          <span className="logo__img">
          <IconLogo className="img-common" />
        </span>
          <div className="logo__title">
            Wrench CRM
          </div>
      </Link>

  )

}

export default Logo;