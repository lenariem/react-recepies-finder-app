import { render, screen } from "@testing-library/react";
import { server } from "../mocks/server";
import { rest } from "msw";
import App from "../App";
import { API_URL } from "../config";

describe("Server Error", () => {
    test("error response from server for loading categories on home page", async () => {
        // override default msw response for options endpoint with error response
        server.resetHandlers(
            rest.get(`${API_URL}categories.php`, (req, res, ctx) =>
                res(ctx.status(500))
            )
        );

        render(<App />);

        const errorMsg = await screen.findByText(/no results/i);
        expect(errorMsg).toBeInTheDocument();
    });
});
