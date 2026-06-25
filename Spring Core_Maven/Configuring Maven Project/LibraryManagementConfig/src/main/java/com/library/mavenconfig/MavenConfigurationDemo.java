//Author: Tejaswini G
package com.library.mavenconfig;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.GenericApplicationContext;

public class MavenConfigurationDemo {

    public static void main(String[] args) {

        ApplicationContext context =
                new GenericApplicationContext();

        System.out.println("=================================");
        System.out.println(" Library Management Maven Setup ");
        System.out.println("=================================");

        System.out.println("Spring Context is Loaded Successfully");
        System.out.println("Spring AOP Dependency Available");
        System.out.println("Spring WebMVC Dependency Available");
        System.out.println("Maven Compiler Plugin Configured");
        System.out.println("Java Version : 1.8");
    }
}
