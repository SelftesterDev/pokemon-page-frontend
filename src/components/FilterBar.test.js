import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterBar from './FilterBar';

describe('FilterBar', () => {
  const mockTypes = ['Fire', 'Water', 'Grass'];
  const mockFilters = { name: '', type: '', legendary: '' };
  const mockOnFilterChange = jest.fn();
  const mockOnClearFilters = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render "Search by Pokemon Name:" label', () => {
    render(
      <FilterBar
        filters={mockFilters}
        types={mockTypes}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
      />
    );
    expect(screen.getByText('Search by Pokemon Name:')).toBeInTheDocument();
  });

  test('should render "Filter by Pokemon Type:" label', () => {
    render(
      <FilterBar
        filters={mockFilters}
        types={mockTypes}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
      />
    );
    expect(screen.getByText('Filter by Pokemon Type:')).toBeInTheDocument();
  });

  test('should render both updated labels together', () => {
    render(
      <FilterBar
        filters={mockFilters}
        types={mockTypes}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
      />
    );
    expect(screen.getByText('Search by Pokemon Name:')).toBeInTheDocument();
    expect(screen.getByText('Filter by Pokemon Type:')).toBeInTheDocument();
  });

  test('should render Legendary Status label unchanged', () => {
    render(
      <FilterBar
        filters={mockFilters}
        types={mockTypes}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
      />
    );
    expect(screen.getByText('Legendary Status:')).toBeInTheDocument();
  });

  test('should have correct input and select IDs', () => {
    render(
      <FilterBar
        filters={mockFilters}
        types={mockTypes}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
      />
    );
    const nameInput = screen.getByPlaceholderText('Enter Pokemon name...');
    expect(nameInput).toHaveAttribute('id', 'name-filter');
    const typeSelect = screen.getByDisplayValue('All Types');
    expect(typeSelect).toHaveAttribute('id', 'type-filter');
  });
});
