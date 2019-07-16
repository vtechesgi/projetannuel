package test;

import org.junit.Assert;
import org.junit.Test;
import sample.Championship;

public class ChampionshipTest {

    private Championship c1 = new Championship("Ligue 3", "Zimbabwe", 1, "ESGI");

    @Test
    public void nameMustBeString(){
        Assert.assertEquals("Championnant".getClass(), c1.getName().getClass());
    }

    @Test
    public void countryMustBeString(){
        Assert.assertEquals("Pays".getClass(), c1.getCountry().getClass());
    }

    @Test
    public void levelMustBeInt(){
        Integer xdab = 14;
        Assert.assertEquals(xdab.getClass(), c1.getLevel().getClass());
    }

    @Test
    public void sponsorMustBeString(){
        Assert.assertEquals("sponsor".getClass(), c1.getSponsor().getClass());
    }

    @Test
    public void fieldsMustBeFilled() throws Exception{
        Assert.assertTrue(c1.isFilled());
    }
}
