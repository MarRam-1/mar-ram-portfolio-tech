import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the navbar brand', () => {
  render(<App />);
  const logo = screen.getByAltText(/mariana logo/i);
  expect(logo).toBeInTheDocument();
});
