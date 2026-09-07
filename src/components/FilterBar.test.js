import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterBar from './FilterBar';

describe('FilterBar Component', () => {
  const mockFilters = {
    name: '',
    type: '',
    legendary: ''
  };

  const mockTypes = ['Fire', 'Water', 'Grass'];
  const mockOnFilterChange = jest.fn();
  const mockOnClearFilters = jest.fn();

  const renderFilterBar = () => {
    return render(
      <FilterBar
        filters={mockFilters}
        types={mockTypes}
        onFilterChange={mockOnFilterChange}
        onClearFilters={mockOnClearFilters}
      />
    );
  };

  it("should render 'Search by Pokemon Name:' label", () => {
    renderFilterBar();
    const label = screen.getByText('Search by Pokemon Name:');
    expect(label).toBeInTheDocument();
  });

  it("should render 'Filter by Pokemon Type:' label", () => {
    renderFilterBar();
    const label = screen.getByText('Filter by Pokemon Type:');
    expect(label).toBeInTheDocument();
  });

  it("should render 'Legendary Status:' label (unchanged)", () => {
    renderFilterBar();
    const label = screen.getByText('Legendary Status:');
    expect(label).toBeInTheDocument();
  });

  it('should have correct htmlFor attributes linking to inputs', () => {
    renderFilterBar();
    const nameLabel = screen.getByText('Search by Pokemon Name:');
    const typeLabel = screen.getByText('Filter by Pokemon Type:');
    const legendaryLabel = screen.getByText('Legendary Status:');

    expect(nameLabel).toHaveAttribute('htmlFor', 'name-filter');
    expect(typeLabel).toHaveAttribute('htmlFor', 'type-filter');
    expect(legendaryLabel).toHaveAttribute('htmlFor', 'legendary-filter');
  });
});
