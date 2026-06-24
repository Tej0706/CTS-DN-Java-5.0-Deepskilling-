//Author: Tejaswini G
package com.logging.SLF4JDemo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
	//This is the Logger object
    private static final Logger logger =
            LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
    	//This is the Warning log
        logger.warn("This is a warning message");

        try {

            int result = 10 / 0;

        } catch (Exception e) {
        	//This is the Error log
            logger.error("An error occurred: Division by zero", e);

        }

    }
}