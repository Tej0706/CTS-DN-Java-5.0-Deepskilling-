//Author:Tejaswini G

package basic;

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {

    @Test
    //Testing part
    public void testAddition() {

        Calculator calculator = new Calculator();

        int result = calculator.add(10, 7);

        assertEquals(17, result);
    }
}