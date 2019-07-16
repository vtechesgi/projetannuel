package test;

import org.junit.Assert;
import org.junit.Test;
import sample.Championship;
import sample.Team;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class TeamTest {

    private static List<Championship> championships  = new ArrayList<>(Arrays.asList(
            new Championship("Ligue 1", "France", 1, "Conforama"),
            new Championship("Serie A", "Italie", 1, "TIM"),
            new Championship("Ligue 2", "France", 2, "Domino\'s"),
            new Championship("Premier League", "Angleterre", 1, "Barclay's")
    ));

    private Team t1 = new Team("LiverpoolFC", "Liverpool", "Jurgen Klopp", championships.get(3));

    @Test
    public void nameMustBeString(){
        Assert.assertEquals("name".getClass(), t1.getName().getClass());
    }

    @Test
    public void cityMustBeString(){
        Assert.assertEquals("country".getClass(), t1.getCity().getClass());
    }

    @Test
    public void coachMustBeString(){
        Assert.assertEquals("coach".getClass(),t1.getCoach().getClass());
    }

    @Test
    public void championshipMustBeChampionship(){
        Assert.assertEquals(championships.get(0).getClass(), t1.getChampionship().getClass());
    }

    @Test
    public void fieldsMustBeFilled() throws Exception{
        Assert.assertTrue(t1.isFilled());
    }
}
