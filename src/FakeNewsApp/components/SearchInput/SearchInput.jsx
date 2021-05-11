import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchInput.css';

const SearchInput = ({value, onChange, onKeyPress}) => (
  <InputGroup className="c-search-input mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>
        <FontAwesomeIcon icon={faSearch} />
      </InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Type for serach"
      type="search"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  </InputGroup>
)

export default SearchInput;
