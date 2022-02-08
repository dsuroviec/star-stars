import { getByLabelText, render, screen } from "@testing-library/react";
import Home from "../pages/index";
import userEvent from "@testing-library/user-event";

test("Header exists and reached homepage", () => {
  render(<Home />);

  const heading = screen.getByRole("heading", {
    name: /Star Scout/i,
  });

  expect(heading).toBeInTheDocument();
});

test("Button is disabled when search is empty", async () => {
  const user = userEvent.setup();
  render(<Home />);

  const button = screen.getByRole("button", { name: /Search Input/ });
  expect(button).toBeDisabled();

  await user.type(
    screen.getByRole("textbox", { name: "Search" }),
    "testString"
  );

  expect(button).toBeEnabled();
});

test("Gets the data props need for UI", async () => {
  const user = userEvent.setup();
  const { debug } = render(<Home />);

  await user.type(
    screen.getByRole("textbox", { name: "Search" }),
    "testString"
  );

  await user.click(screen.getByRole("button", { name: /Search Input/ }));
  debug();

  expect(screen.queryByText("Height: 172cm")).toBeInTheDocument();
});
