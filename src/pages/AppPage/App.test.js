import { render, screen } from "@testing-library/react";
import App from ".";


test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Order now our selection of punk beers/i
  );
  expect(linkElement).toBeInTheDocument();
});
