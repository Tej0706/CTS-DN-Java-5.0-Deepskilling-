//Author: Tejaswini G
import java.util.Scanner;

public class FinancialForecast {

    // Recursive method
    public static double predictFutureValue(double currentValue, double growthRate, int years) {

        // Base case: if no years left then return current value
        if (years == 0) {
            return currentValue;
        }

        // Recursive case
        return predictFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter current value: ");
        double currentValue = sc.nextDouble();

        System.out.print("Enter annual growth rate (%): ");
        double growthRate = sc.nextDouble() / 100;

        System.out.print("Enter number of years: ");
        int years = sc.nextInt();

        double futureValue = predictFutureValue(currentValue, growthRate, years);

        System.out.printf("Predicted Future Value after %d years = %.2f", years, futureValue);

        sc.close();
    }
}