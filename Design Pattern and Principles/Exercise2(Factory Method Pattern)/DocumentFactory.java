//Abstract class is used so that it can be extended by child classes to create specific doumnets
public abstract class DocumentFactory {
    //Method to create a document, which will be implemented by child classes
    public abstract Document createDocument();
}