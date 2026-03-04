// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WalletInfinity title', () => {
    render(<App />);
    const titleElement = screen.getByText(/WalletInfinity/i);
    expect(titleElement).toBeInTheDocument();
});
