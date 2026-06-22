
// Represents a product available on the e-commerce platform.

public class Product {

    int productId;
    String productName;
    String category;

    // Constructor is used to initialize product details.
    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    // Displays the product information.
    public void displayProduct() {
        System.out.println(
                "Product ID : " + productId +
                ", Name : " + productName +
                ", Category : " + category);
    }
}