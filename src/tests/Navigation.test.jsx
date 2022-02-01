import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Navigation:", () => {
    beforeEach(() => {
        render(<App />);
    });

    test("logo and about link in menu", () => {
        //home page
        expect(
            screen.getByText(/what would you like to cook today?/i)
        ).toBeInTheDocument();

        //navigate to about page
        const leftClick = { button: 0 };
        userEvent.click(screen.getByText(/about/i), leftClick);
        expect(screen.getByText(/about this app/i)).toBeInTheDocument();

        //back to home page with logo
        userEvent.click(screen.getByRole("img", { name: /logo/i }));
        expect(
            screen.getByText(/what would you like to cook today?/i)
        ).toBeInTheDocument();
    });

    test("home link in menu", async () => {
        const seafoodOpenBtn = await screen.findByTestId("seafoodOpenBtn");
        userEvent.click(seafoodOpenBtn);
        const homeLink = await screen.findByRole("link", { name: /home/i });
        userEvent.click(homeLink);

        expect(
            screen.getByText(/what would you like to cook today?/i)
        ).toBeInTheDocument();
    });

    test("navigation with buttons", async () => {
        const seafoodOpenBtn = await screen.findByTestId("seafoodOpenBtn");
        userEvent.click(seafoodOpenBtn);
        const salmonRecipe = await screen.findByRole("img", {
            name: /baked salmon with fennel & tomatoes recipe/i,
        });
        userEvent.click(salmonRecipe);
        const goBackBtn = await screen.findByRole("button", {
            name: /go back/i,
        });
        userEvent.click(goBackBtn);
        expect(await screen.findByText(/baked salmon with fennel & tomatoes/i)).toBeInTheDocument();

        const backMainBtn = screen.getByRole('link', {  name: /arrow_back go back to main page/i});
        userEvent.click(backMainBtn);
        expect(
            await screen.findByText(/what would you like to cook today?/i)
        ).toBeInTheDocument();
    });
});
