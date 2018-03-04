import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const SearchBar = () => {
    return (
      <form>
        <FormGroup>
          <ControlLabel>Search</ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter a search term..."
          />
        </FormGroup>
      </form>
    )
};

export default SearchBar;