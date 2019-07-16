package sample;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Main{
    private static List<Championship> championships  = new ArrayList<>(Arrays.asList(
            new Championship("Ligue 1", "France", 1, "Conforama"),
            new Championship("Serie A", "Italie", 1, "TIM"),
            new Championship("Ligue 2", "France", 2, "Domino\'s"),
            new Championship("Premier League", "Angmeterre", 1, "Barclay's")
    ));
    private static void displayChampionships(){
        System.out.println("Liste des championnats :");
        for(Championship championship : championships){
            System.out.println(championship);
        }
        System.out.println("\n");
    }
    private static List<Player> players = new ArrayList<>(Arrays.asList(
            new Player("Cantona", "Eric", "Boucher", 52, 188, 70.5),
            new Player("Courtois", "Thibaut", "rageux", 26, 199, 99.0)
    ));
    private static void displayPlayers() {
        System.out.println("Liste des joueurs : ");
        for(Player player : players){
            System.out.println(player);
        }
        System.out.println("\n");
    }
    private static List<Team> teams = new ArrayList<>(Arrays.asList(
            new Team("Paris-Saint-Germain", "Paris", "Thomas Tuchel", championships.get(0)),
            new Team("Olympique de Marseille", "Marseille", "Rudi Garcia", championships.get(2))
    ));
    private static void displayTeams() {
        System.out.println("Liste des équipes : ");
        for(Team team : teams){
            System.out.println(team);
        }
        System.out.println("\n");
    }
    private static void showMenu(){
        System.out.println("1. Afficher les joueurs\n2. Créer un joueur\n3. Afficher les équipes\n4. Créer une équipe\n5. Afficher les championnats\n6. Créer un championnat");
    }

    private static void addChampionship(Scanner sc){
        System.out.println("Entrez un championnat sous la forme : nom/pays/niveau/sponsor");
        String input = sc.nextLine();

        String [] splittedInput = input.split("/");
        Championship newCs = mapChampionship(splittedInput);
        championships.add(newCs);
        System.out.println("championnat ajouté !");
    }

    private static Championship mapChampionship(String[] splittedInput){
        String name = splittedInput[0];
        String country = splittedInput[1];
        int level = Integer.parseInt(splittedInput[2]);
        String sponsor = splittedInput[3];

        return new Championship(name, country, level, sponsor);
    }

    private static void addPlayer(Scanner sc) {
        System.out.println("Entrez un joueur sous la forme : nom/prenom/age/...");
        String input = sc.nextLine();

        String[] splittedInput = input.split("/");
        Player newPlayer = mapPlayer(splittedInput);
        players.add(newPlayer);
        System.out.println("joueur ajouté");
    }

    private static Player mapPlayer(String[] splittedInput) {
        String name = splittedInput[0];
        String firstName = splittedInput[1];
        String position = splittedInput[2];
        int age = Integer.parseInt(splittedInput[3]);
        int height = Integer.parseInt(splittedInput[4]);
        double weight = Double.parseDouble(splittedInput[5]);

        return new Player(name, firstName, position, age, height, weight);
    }
    private static void addTeam(Scanner sc) {
        System.out.println("Entrez une équipe sous la forme : nom/ville/coach/championnat");
        String input = sc.nextLine();

        String[] splittedInput = input.split("/");
        Team newTeam = mapTeam(splittedInput);
        teams.add(newTeam);
        System.out.println("équie ajoutée !");
    }

    private static Team mapTeam(String[] splittedInput) {
        String name = splittedInput[0];
        String city = splittedInput[1];
        String coach = splittedInput[2];
        Championship cs = championships.stream().filter(championship -> splittedInput[3].equals(championship.getName())).findAny().orElse(null);

        return new Team(name, city, coach, cs);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Choisissez un menu : \n");
        while(true) {
            showMenu();
            String result = sc.nextLine();
            switch (result) {
                case "1":
                    displayPlayers();
                    break;
                case "2":
                    addPlayer(sc);
                    break;
                case "3":
                    displayTeams();
                    break;
                case "4":
                    addTeam(sc);
                    break;
                case "5":
                    displayChampionships();
                    break;
                case "6":
                    addChampionship(sc);
                    break;
            }
        }
    }
}
