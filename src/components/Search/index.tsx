import {SearchTypes} from './types';
import s from './Search.module.scss';
import cn from 'classnames';
import React, {FC, useState} from "react";
import InputText from "../InputText";
import Button from "../Button";
import SearchIcon from './img/search.svg';
import {useRouter} from "next/router";

const Search: FC<SearchTypes> = ({className, ...restProps}) => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleGoToSearch() {
    router.push({
      pathname: '/search/',
      query: {
        q: search
      }
    });
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleGoToSearch();
    }
  };

  return (
    <div className={cn(s.wrapper, className)} {...restProps}>
      <InputText
        className={s.input}
        placeholder="Поиск"
        value={search}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
      />
      <Button className={s.button} onClick={handleGoToSearch}>
        <SearchIcon/>
      </Button>
    </div>
  );
};

export default Search;
