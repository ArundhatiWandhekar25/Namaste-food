import Body from "../components/Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../__test__/Mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})
it("should render the body component with search button",async()=>{
    
    await act(async ()=>render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))
    const cardAtLoad = screen.getAllByTestId("resCard");
    expect(cardAtLoad.length).toBe(28);

    const searchBtn = screen.getByRole("button",{ name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchBtn);
    const cardAfterSearch = screen.getAllByTestId("resCard");
    expect(cardAfterSearch.length).toBe(5);
    expect(searchBtn).toBeInTheDocument();
})