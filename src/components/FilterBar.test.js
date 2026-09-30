import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterBar from './FilterBar';

describe('FilterBar', () => {
  const defaultProps = {
    filters: {
      name: '',
      type: '',
      legendary: ''
    },
    types: ['Fire', 'Water', 'Grass'],
    onFilterChange: jest.fn(),
    onClearFilters: jest.fn()
  };

  it('should render label with text "Search by Pokemon Name:"', () => {
    render(<FilterBar {...defaultProps} />);
    const label = screen.getByText('Search by Pokemon Name:');
    expect(label).toBeInTheDocument();
  });

  it('should render label with text "Filter by Pokemon Type:"', () => {
    render(<FilterBar {...defaultProps} />);
    const label = screen.getByText('Filter by Pokemon Type:');
    expect(label).toBeInTheDocument();
  });
});
