import { Provider } from "react-redux";
import Header from "../components/Header";
import { render, screen, fireEvent } from '@testing-library/react';
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("Should load Header component with a login button",() => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
         </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name : "Login"});
    expect(loginButton).toBeInTheDocument();
});

it("Should load Header component with a cart item 0",() => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
         </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/)
    expect(cartItems).toBeInTheDocument();
});

it("Should change login button to login on click",() => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
         </BrowserRouter>
    );

    const loginButton = screen.getByRole("button")
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
});