import React from 'react';

import './searchbox.css';

type SearchProps = {
  placeholder: string;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
};
export const SearchBox = (props: SearchProps) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
};
