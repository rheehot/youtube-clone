import React, { useState } from 'react';

import { Paper, TextField } from '@material-ui/core';

interface SearchBarProps {
  onFormSubmit(searchTerm: string): void
}

const SearchBar: React.FC<SearchBarProps> = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    onFormSubmit(searchTerm);
    e.preventDefault();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }

  return (
    <Paper elevation={8} style={{ padding: '25px' }}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Search..." onChange={handleChange} />
      </form>
    </Paper>
  );
}

export default SearchBar;