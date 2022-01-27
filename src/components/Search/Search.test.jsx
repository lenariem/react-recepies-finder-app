import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe("Search component:", () => {
    let searchInput;

    beforeEach(() => {
        render(<App />);
        searchInput = screen.getByPlaceholderText("Search by category...");
    });

    test("rendering search input element", () => {
        expect(searchInput).toBeInTheDocument;
    });

    test("rendering search button element", () => {
        const searchBtn = screen.getByRole("button", { name: /search/i });
        expect(searchBtn).toBeInTheDocument;
    });

    test("search term displays correct", () => {
        userEvent.clear(searchInput);
        userEvent.type(searchInput, "hello");

        expect(searchInput.value).toBe("hello");
    });

    test("user types incorrect search term", async () => {
        const errorMsg = screen.getByText(/no results/i);
        
        userEvent.clear(searchInput);
        userEvent.type(searchInput, "chacin");

        await expect(errorMsg).toBeInTheDocument;
    });

    test("user types correct search term", async () => {
        const searchBtn = screen.getByRole("button", { name: /search/i });
        const searchResult = screen.findByRole("img", { name: /chicken/i });

        userEvent.clear(searchInput);
        userEvent.type(searchInput, "chicken");
        userEvent.click(searchBtn);

        await expect(searchResult).toBeInTheDocument;
    });

    test("searching is case insensitive and starts on enter press key", async () => {
        const searchBtn = screen.getByRole("button", { name: /search/i });
        const searchResult = screen.findByRole("img", { name: /vegetarian/i });

        userEvent.clear(searchInput);
        userEvent.type(searchInput, "VeGetaRiAN {enter}");
        //userEvent.click(searchBtn);

        await expect(searchResult).toBeInTheDocument;
    });
});
