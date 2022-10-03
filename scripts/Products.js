import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        //clickEvent.target is the smallest area where we want click event to happen. Store in variable itemClicked.
        const itemClicked = clickEvent.target

        //If the id of the item clicked starts with "product" then split the id on the (--).
        //!  How does the [, productId] variable function?
        if (itemClicked.id.startsWith("product")) {
            const [, productId] = itemClicked.id.split("--")

            for (const product of products) {
                if (product.id === parseInt(productId)) {
                    window.alert(`${product.name} costs ${product.price}`)
                }
            }
        }
    }
)