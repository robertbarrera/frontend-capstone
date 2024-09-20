import { render, screen } from '@testing-library/react';
import BookForm from './components/BookForm';
import Main from './components/Main';
import { MemoryRouter } from 'react-router-dom';

test('renders correct label for input', () => {
  render(<BookForm submitForm={() => {}} dispatch={() => {}} availableTimes={{ availableTimes: [] }} />);
  const dateLabel = screen.getByLabelText(/choose a date/i);
  expect(dateLabel).toBeInTheDocument();
});

test('renders correct available times', () => {
  const availableTimes = { availableTimes: ["17:00", "17:30", "18:00"] }; // Sample available times
  const dispatch = jest.fn();
  const submitForm = jest.fn();

  render(<BookForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />);

  availableTimes.availableTimes.forEach(time => {
      expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
  });
});

test('renders correct available times based on state in BookForm', () => {
  // Mock available times
  const availableTimes = ['17:00', '17:30', '18:00'];

  // Create a test wrapper for routing
  render(
    <MemoryRouter initialEntries={['/bookings']}>
      <Main />
    </MemoryRouter>
  );

  // Check if available times are rendered in BookForm
  expect(screen.getByText('17:00')).toBeInTheDocument();
  expect(screen.getByText('17:30')).toBeInTheDocument();
  expect(screen.getByText('18:00')).toBeInTheDocument();
});