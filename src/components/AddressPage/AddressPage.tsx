import React, {ChangeEvent, FC, useState} from 'react';
import './AddressPage.scss';
import Title from "../Title/Title";
import { ReactComponent as IconSearch } from "./search_light.svg"
import {minQueryLength, token, url} from "../../constants";
import Spinner from "../Spinner/Spinner";

const AddressPage: FC = () => {

  const [addressList, setAddressList] = useState<string[]>([]);
  const [query, setQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = (event: ChangeEvent<{ value: string }>) => {
    setQuery(event?.currentTarget?.value);
  }

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {

    event.preventDefault();

    const options: any = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
      },
      body: JSON.stringify({query: query})
    }

    setLoading(true);

    fetch(url, options)
        .then(response => response.text())
        .then(result => {
          setAddressList(JSON.parse(result).suggestions.map((it: any) => it.value))
        })
        .catch(error => console.log("error", error))
        .finally(() => setLoading(false));

  }

  return (
      <div className="address-page">
        <Title title={'Поиск адресов'} subtitle={'Введите интересующий вас адрес'} />
        <form className="address-page__search search" onSubmit={handleSubmit}>
          <input
              value={query}
              onChange={handleChange}
              autoFocus
              className="search__input"
              type="text" required
              minLength={minQueryLength}
              placeholder="Введите интересующий вас адрес" />
          <button className="search__btn" type="submit">
        <span className="search__icon">
          <IconSearch className="img-common" />
        </span>
            <span className="search__text">
          Найти
        </span>
          </button>
        </form>

        {loading && <Spinner />}

        { !loading &&
          <section className="address-page__results">
            <Title title={'Адреса'} />
            {addressList.length > 0 ?
                <ul className="results">
                  {
                    addressList.map((address) => <li  key={address} className="results__item">{address}</li>)
                  }
                </ul>
                :
                <div className="results__no-items">Пока ничего</div>
            }

          </section>
        }

      </div>
  )

}

export default AddressPage;