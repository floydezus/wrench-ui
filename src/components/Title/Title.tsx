import React, {FC} from 'react';
import './Title.scss';

type TitleProps = {
  title: string
  subtitle?: string;
}

const Title: FC<TitleProps> = (props) => {

  return (
      <React.Fragment>
        <h2 className="title">
          {props.title}
        </h2>
        {
          props.subtitle &&
          <p className="title__sub">
            {props.subtitle}
          </p>
        }
      </React.Fragment>

  )

}

export default Title;