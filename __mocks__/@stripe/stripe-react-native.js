// __mocks__/@stripe/stripe-react-native.js
export const StripeProvider = ({ children }) => children;
export const useStripe = () => ({
  confirmPayment: jest.fn(),
  handleCardAction: jest.fn(),
  createPaymentMethod: jest.fn(),
});
