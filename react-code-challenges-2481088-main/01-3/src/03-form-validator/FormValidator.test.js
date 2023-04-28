import { render, screen, fireEvent } from '@testing-library/react';
import FormValidator from './FormValidator';

test('submitting the form with valid input shows success message', () => {
  render(<FormValidator />);
  

  // Fill in form fields
  const emailInput = screen.queryByPlaceholderText(/your@email.com/i);
  const passwordInput = screen.queryByPlaceholderText(/password/i);
  const passwordConfirmInput = screen.queryByPlaceholderText(/password-confirm/i);
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });
  fireEvent.change(passwordConfirmInput, { target: { value: 'password123' } });

  // Submit form
  const submitButton = screen.getByText(/submit/i);
  fireEvent.click(submitButton);

  // Expect success message to be displayed
  const successMessage = screen.getByText(/User created!/i);
  expect(successMessage).toBeInTheDocument();
});

// test('submitting the form with invalid input shows error message', () => {
//   render(<FormValidator />);

//   // Fill in form fields with invalid input
//   const emailInput = screen.getByLabelText(/email/i);
//   const passwordInput = screen.getByLabelText(/password/i);
//   const passwordConfirmInput = screen.getByLabelText(/confirm password/i);
//   fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
//   fireEvent.change(passwordInput, { target: { value: 'short' } });
//   fireEvent.change(passwordConfirmInput, { target: { value: 'notmatching' } });

//   // Submit form
//   const submitButton = screen.getByText(/submit/i);
//   fireEvent.click(submitButton);

//   // Expect error message to be displayed
//   const errorMessage = screen.getByText(/all fields must be filled in, an email must have exactly one @ sign, passwords must be 8 characters or longer, passwords must match/i);
//   expect(errorMessage).toBeInTheDocument();
// });