public class Player {
    private String name;
    private String firstName;
    private String position;
    private int age;
    private int height;
    private double weight;

    public Player(String name, String firstName, String position, int age, int height, double weight){
        this.name = name;
        this.firstName = firstName;
        this.position = position;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getFirstName(){
        return this.firstName;
    }
    public void setFirstName(String firstName){
        this.firstName = firstName;
    }

    public String getPosition(){
        return this.position;
    }
    public void setPosition(String position){
        this.position = position;
    }

    public int getAge(){
        return this.age;
    }
    public void setAge(int age){
        this.age = age;
    }

    public int getHeight(){
        return this.height;
    }
    public void setHeight(int height){
        this.height = height;
    }

    public double getWeight(){
        return this.weight;
    }
    public void setWeight(double weight){
        this.weight = weight;
    }

    @Override
    public String toString(){
        return "Nom = " + name +  " Prénom = " + firstName + " Poste = " + position + " Age = "+ age + " Taille = " + height + " Poids = " + weight;
    }
}
