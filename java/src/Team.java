public class Team {
    private String name;
    private String city;
    private String coach;
    private Championship cs;


    public Team(String name, String city, String coach, Championship cs){
        this.name = name;
        this.city = city;
        this.coach = coach;
        this.cs = cs;
    }

    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getCity(){
        return this.city;
    }
    public void setCity(String city){
        this.city = city;
    }

    public String getCoach(){
        return this.coach;
    }
    public void setCoach(String coach){
        this.coach = coach;
    }

    @Override
    public String toString(){
        return "Nom = " + name +  " Ville = " + city + " Coach = " + coach + " Championnat = " + this.cs;
    }
}
