package sample;

public class Player {
    private String name;
    private String firstName;
    private String position;
    private Integer age;
    private Integer height;
    private Double weight;

    public Player(String name, String firstName, String position, Integer age, Integer height, Double weight){
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

    public Integer getAge(){
        return this.age;
    }
    public void setAge(Integer age){
        this.age = age;
    }

    public Integer getHeight(){
        return this.height;
    }
    public void setHeight(Integer height){
        this.height = height;
    }

    public Double getWeight(){
        return this.weight;
    }
    public void setWeight(Double weight){
        this.weight = weight;
    }

    @Override
    public String toString(){
        return "Nom = " + name +  " Prénom = " + firstName + " Poste = " + position + " Age = "+ age + " Taille = " + height + " Poids = " + weight;
    }

    public boolean isFilled() throws Exception{
        if(this.name != null && this.firstName != null && this.position != null && this.age != 0 && this.height != 0 && this.weight != 0){
            return true;
        }
        throw new Exception("All fields must be filled.");
    }
}
