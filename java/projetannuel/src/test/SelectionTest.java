package test;

import org.junit.Assert;
import org.junit.Test;
import sample.Player;
import sample.Selection;

public class SelectionTest {

    private Player p1 = new Player("Martin", "Kelig", "Gardien", 22, 173, 63.2);
    private Selection s1 = new Selection("WizardsTechnologies", "France", "Wizards", p1, "Coat", "Spaces");

    @Test
    public void nameMustBeString(){
        Assert.assertEquals("Selection".getClass(), s1.getName().getClass());
    }

    @Test
    public void countryMustBeString(){
        Assert.assertEquals("Pays".getClass(), s1.getCountry().getClass());
    }

    @Test
    public void nicknameMustBeString(){
        Assert.assertEquals("Nickname".getClass(), s1.getNickname().getClass());
    }

    @Test
    public void captainMustBePlayer(){
        Assert.assertEquals(p1.getClass(), s1.getCaptain().getClass());
    }

    @Test
    public void coachMustBeString(){
        Assert.assertEquals("coach".getClass(), s1.getCoach().getClass());
    }

    @Test
    public void stadiumMustBeString(){
        Assert.assertEquals("Stadium".getClass(), s1.getStadium().getClass());
    }
}
