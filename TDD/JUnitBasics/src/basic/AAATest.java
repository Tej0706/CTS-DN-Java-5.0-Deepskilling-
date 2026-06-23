//Author:Tejaswini G

package basic;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class AAATest {
	
	private Calculator calculator;

	@Before
	//Takes place before each and every test
	public void setUp() throws Exception {
		calculator = new Calculator();
        System.out.println("Setting up...");
	}

	@After
	//Takes place after each test is completed
	public void tearDown() throws Exception {
		 System.out.println("Cleaning up...");
	}

	@Test
	//Testing part
	public void testAddition() {
		// Arrange
        int num1 = 2;
        int num2 = 3;

        // Act
        int result = calculator.add(num1, num2);

        // Assert
        assertEquals(5, result);
	}

}
