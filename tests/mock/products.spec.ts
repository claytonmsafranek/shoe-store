import { expect, test } from "@playwright/test"

test("should support product search and add to cart", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    
    // assure products display
    await expect(page.getByText("Product 1")).toBeVisible();
    await expect(page.getByText("Product 2")).toBeVisible();
    await expect(page.getByText("Product 3")).toBeVisible();
    
    // search for a product
    await page.getByPlaceholder("Search ...").fill("Product 1");
    await expect(page.getByText("Product 1")).toBeVisible();
    await expect(page.getByText("Product 2")).toBeHidden();
    await expect(page.getByText("Product 3")).toBeHidden();
    
    // add product to cart
    await page.getByRole("button", { name: "Add Product 1 to cart" }).click();

    // now the cart nav link should show 1 item
    await expect(page.getByRole("link", { name: "Cart (1)" })).toBeVisible();

})