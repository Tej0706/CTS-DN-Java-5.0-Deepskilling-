--Author: Tejaswini G
--Exercise 1: Control Structures
-- Customer table
CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);

-- Loans table
CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE,
    FOREIGN KEY(CustomerID)
    REFERENCES Customers(CustomerID)
);


--Inserting values into Customers table
INSERT INTO Customers VALUES (1,'John',65,15000,'FALSE');
INSERT INTO Customers VALUES (2,'Mary',45,8000,'FALSE');
INSERT INTO Customers VALUES (3,'David',70,20000,'FALSE');

--Insering values into Loans table
INSERT INTO Loans VALUES (101,1,8.5,SYSDATE+20);
INSERT INTO Loans VALUES (102,2,9.0,SYSDATE+40);
INSERT INTO Loans VALUES (103,3,7.5,SYSDATE+15);

COMMIT;

SET SERVEROUTPUT ON;

--View the data in both the tables
SELECT * FROM Customers;

SELECT * FROM Loans;


-- Scenario 1: The bank wants to apply a discount to loan interest rates for customers above 60 years old.
-- Question: Write a PL/SQL block that loops through all customers, checks their age, and if they are above 60, apply a 1% discount to their current loan interest rates.

BEGIN
    FOR c in(SELECT CustomerID,Age FROM Customers)LOOP
        IF c.Age>60 THEN
            UPDATE Loans 
            SET InterestRate=InterestRate-1
            WHERE CustomerID=c.CustomerID;
            
            DBMS_OUTPUT.put_line('Discount applied to the customer ID ' ||c.CustomerID);
        END IF;
    END LOOP;
    COMMIT;
END;
/

SELECT * FROM Loans;

-- Scenario 2: A customer can be promoted to VIP status based on their balance.
-- Question: Write a PL/SQL block that iterates through all customers and sets a flag IsVIP to TRUE for those with a balance over $10,000.

BEGIN
    FOR c IN (
        SELECT CustomerID
        FROM Customers
        WHERE Balance > 10000
    )
    LOOP

        UPDATE Customers
        SET IsVIP = 'TRUE'
        WHERE CustomerID = c.CustomerID;

        DBMS_OUTPUT.PUT_LINE(
            'Customer updated to VIP: '
            || c.CustomerID
        );

    END LOOP;
    COMMIT;
END;
/


select * from Customers;


-- Scenario 3: The bank wants to send reminders to customers whose loans are due within the next 30 days.
-- Question: Write a PL/SQL block that fetches all loans due in the next 30 days and prints a reminder message for each customer.

BEGIN
    FOR l IN (
        SELECT LoanID,
               CustomerID,
               DueDate
        FROM Loans
        WHERE DueDate <= SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan '
            || l.LoanID
            || ' for Customer '
            || l.CustomerID
            || ' is due on '
            || TO_CHAR(l.DueDate,'DD-MON-YYYY')
        );
    END LOOP;
END;
/

