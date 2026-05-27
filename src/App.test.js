import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio home content', () => {
  render(<App />);
  const titleElement = screen.getByText(/Daksh Ghandat/i);
  expect(titleElement).toBeInTheDocument();
});
