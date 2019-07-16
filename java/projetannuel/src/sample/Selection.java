package sample;

public class Selection {
    private String name;
    private String country;
    private String nickname;
    private Player captain;
    private String coach;
    private String stadium;

    public Selection(String name, String country, String nickname, Player captain, String coach, String stadium){
        this.name = name;
        this.country = country;
        this.nickname = nickname;
        this.captain = captain;
        this.coach = coach;
        this.stadium = stadium;
    }

    public String getName(){
        return this.name;
    }
    public void setName(String name){
        this.name = name;
    }
    public String getCountry(){
        return this.country;
    }
    public void setCountry(String country){
        this.country = country;
    }
    public String getNickname(){
        return this.nickname;
    }
    public void setNickname(String nickname){
        this.nickname = nickname;
    }
    public Player getCaptain(){
        return this.captain;
    }
    public void setCaptain(Player captain){
        this.captain = captain;
    }
    public String getCoach(){
        return this.coach;
    }
    public void setCoach(String coach){
        this.coach = coach;
    }
    public String getStadium(){
        return this.stadium;
    }
    public void setStadium(String stadium){
        this.stadium = stadium;
    }
}
