import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import '@testing-library/jest-dom';


describe("Contact us test cases", ()=>{

    beforeAll(()=>{
        console.log("Before All");
    })
    beforeEach(()=>{
        console.log("Before Each");
    })
    afterAll(()=>{
        console.log("After All");
    })
    afterEach(()=>{
        console.log("After Each");
    })


    test("Should load contact us Component",()=>{
        render(<Contact />);
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    
    test("Should load button inside contact Component",()=>{
        render(<Contact />);
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    })
    
    test("Should load input name inside contact Component",()=>{
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("name");
    
        expect(inputName).toBeInTheDocument();
    })
    
    test("Should load all input inside contact Component",()=>{
        render(<Contact />);
        const inputBoxex = screen.getAllByRole("textbox");
    
        expect(inputBoxex.length).toBe(2);
    })
})
