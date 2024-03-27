import { Button } from "react-bootstrap";

export function SearchBar() {
    return (
        <>
            <label htmlFor="searchBox">Search Products:</label><br />
            <input 
                type="search" 
                id="searchBox" 
                name="searchBox"
                placeholder="Search ..." />
            <Button
                variant="primary"
                onClick={() => {
                    console.log("call search")
                }}>
                Search
            </Button>
        </>
    )

}