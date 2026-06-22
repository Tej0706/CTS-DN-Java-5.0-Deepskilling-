
public class Logger {

    // Holds the single instance of Logger
    private static Logger loggerInstance;

    // Private constructor to prevent instantiation from outside the class
    private Logger() {
        System.out.println("Logger initialized...");
    }

    // Returns the single instance of Logger
    public static Logger getInstance() {

        if (loggerInstance == null) {
            loggerInstance = new Logger();
        }

        return loggerInstance;
    }

    // Method to write log messages
    public void writeLog(String message) {
        System.out.println("[LOG] " + message);
    }
}