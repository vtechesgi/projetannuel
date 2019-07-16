package sample;

public class Championship {
    private String name;
    private String country;
    private Integer level;
    private String sponsor;

    public Championship(String name, String country, Integer level, String sponsor){
        this.name = name;
        this.country = country;
        this.level = level;
        this.sponsor = sponsor;
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
    public Integer getLevel(){
        return this.level;
    }
    public void setLevel(Integer level){
        this.level = level;
    }
    public String getSponsor(){
        return this.sponsor;
    }
    public void setSponsor(String sponsor){
        this.sponsor = sponsor;
    }

    @Override
    public String toString(){
        return "Nom = " + this.name + " Pays = " + this.country + " Niveau = " + this.level + " Sponsor = " + this.sponsor;
    }

    public boolean isFilled() throws Exception{
        if(this.name != null && this.country != null && this.level != null && this.sponsor != null){
            return true;
        }
        throw new Exception("All fields must be filled.");
    }
}
