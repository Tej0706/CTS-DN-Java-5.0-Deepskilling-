//Author: Tejaswini G

import java.util.Scanner;
//This class implements two search algorithms: Linear Search and Binary Search to find a product by its ID.
public class Search 
{
    int productId;
    String productName;
    String productCategory;
    int searchId;

    //Linear Search: Checks one by one until it finds the target or reaches the end of the array.
    public static Product linearSearch(Product[] products, int searchId) {

        for (Product product : products) 
        {

            if (product.productId == searchId) 
            {
                return product;
            }
        }

        return null;
    }

    //Binary Search: Works only on sorted data.
    public static Product binarySearch(Product[] products, int searchId) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = left + (right - left) / 2;

            //Checks if the product ID is in the middle of the array
            if (products[mid].productId == searchId) 
            {
                return products[mid];
            }

            if (products[mid].productId < searchId) 
            {
                left = mid + 1;
            } 
            else 
            {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) 
    {
        //Acccepts the input using the Scanner Class from the user.
        Scanner s=new Scanner(System.in);
        System.out.println("Enter the number of products:");

        //Number of products
        int t=s.nextInt();
        Product[] products = new Product[t];

        //Accepts the product details
        for(int i=0;i<t;i++)
        {
            System.out.println("Enter product ID, Name and Category for product " + (i + 1) + ":");
            int productId=s.nextInt();
            String productName=s.next();
            String productCategory=s.next();
            
            products[i] = new Product(productId, productName, productCategory);

        }
        System.out.println("Enter the product ID to search:");
        int searchId = s.nextInt();

            
        System.out.println("Using Linear Search");

        Product linearResult=linearSearch(products, searchId);
        if (linearResult != null) 
        {
            linearResult.displayProduct();
        } 
        else 
        {
            System.out.println("Product not found");
        }

        System.out.println("\nUsing Binary Search");

        Product binaryResult = binarySearch(products, searchId);
        if (binaryResult != null) 
        {
            binaryResult.displayProduct();
        } 
        else 
        {
            System.out.println("Product not found");
        }
        
        
    }
}