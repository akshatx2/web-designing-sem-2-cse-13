// Abstract Class
abstract class BankAccount {
    // Encapsulation: private data members
    private String accountNumber;
    private String accountHolderName;
    private double balance;

    // Constructor
    public BankAccount(String accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    // Getters
    public String getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    // Setter for balance
    public void setBalance(double balance) {
        this.balance = balance;
    }

    // Deposit method
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: ₹" + amount);
        } else {
            System.out.println("Invalid amount!");
        }
    }

    // Display details
    public void displayDetails() {
        System.out.println("Account Number : " + accountNumber);
        System.out.println("Account Holder : " + accountHolderName);
        System.out.println("Balance        : ₹" + balance);
    }

    // Abstract method (Abstraction)
    public abstract double calculateInterest();
}


// SavingsAccount Class
class SavingsAccount extends BankAccount {

    public SavingsAccount(String accountNumber,
                          String accountHolderName,
                          double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    public double calculateInterest() {
        return getBalance() * 0.04; // 4% interest
    }
}


// CurrentAccount Class
class CurrentAccount extends BankAccount {

    public CurrentAccount(String accountNumber,
                          String accountHolderName,
                          double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    public double calculateInterest() {
        return getBalance() * 0.02; // 2% interest
    }
}


// Main Class
public class Main {
    public static void main(String[] args) {

        // Create Savings Account object
        SavingsAccount sa = new SavingsAccount(
                "SA101",
                "Raunak",
                10000
        );

        sa.deposit(5000);

        System.out.println("\nSavings Account Details:");
        sa.displayDetails();
        System.out.println("Interest: ₹" + sa.calculateInterest());


        // Create Current Account object
        CurrentAccount ca = new CurrentAccount(
                "CA201",
                "Aman",
                20000
        );

        ca.deposit(3000);

        System.out.println("\nCurrent Account Details:");
        ca.displayDetails();
        System.out.println("Interest: ₹" + ca.calculateInterest());
    }
}