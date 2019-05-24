public class Championship {

    private String name;
    private String country;
    private int level;
    private String sponsor;

    public Championship(String name, String country, int level, String sponsor){
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
    public int getLevel(){
        return this.level;
    }
    public void setLevel(int level){
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
}
