//Author: Tejaswini G

public class DocumentManagementSystem {

    public static void main(String[] args) {
        //Creating factories for each document type
        DocumentFactory wordFactory = new WordFactory();
        DocumentFactory pdfFactory = new PdfFactory();
        DocumentFactory excelFactory = new ExcelFactory();
        //Creating documents using the respective factories
        Document wordFile = wordFactory.createDocument();
        Document pdfFile = pdfFactory.createDocument();
        Document excelFile = excelFactory.createDocument();
        System.out.println("Documents Created Successfully\n");
        wordFile.openDocument();
        pdfFile.openDocument();
        excelFile.openDocument();
    }
}