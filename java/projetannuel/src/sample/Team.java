package sample;

public class Team {
    private String name;
    private String city;
    private String coach;
    private Championship championship;


    public Team(String name, String city, String coach, Championship championship){
        this.name = name;
        this.city = city;
        this.coach = coach;
        this.championship = championship;
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

    public Championship getChampionship(){
        return this.championship;
    }

    public void setChampionship(Championship championship){
        this.championship = championship;
    }

    @Override
    public String toString(){
        return "Nom = " + name +  " Ville = " + city + " Coach = " + coach + " Championnat = " + this.championship;
    }

    public boolean isFilled() throws Exception{
        if(this.name != null && this.city != null && this.coach != null && this.championship != null){
            return true;
        }
        throw new Exception("All fields must be filled.");
    }
}
