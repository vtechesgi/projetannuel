package test;

import org.junit.Assert;
import org.junit.Test;
import sample.Player;

import static java.lang.Character.getType;


public class PlayerTest {
    private Player p1 = new Player("Mbappe", "Kyllian", "Attaquant", 20, 178, 78.0);

    @Test
    public void shouldValidNominal() throws Exception{
        Assert.assertTrue(p1.isFilled());
    }

    @Test
    public void NameMustBeString(){
        Assert.assertSame("ouiLaVie".getClass(), p1.getName().getClass());
    }

    @Test
    public void FirstNameMustBeString(){
        Assert.assertSame("ouiLaVie".getClass(), p1.getFirstName().getClass());
    }

    @Test
    public void PositionMustBeString(){
        Assert.assertSame("Gardien".getClass(), p1.getPosition().getClass());
    }

    @Test
    public void AgeMustBeInt(){
        Assert.assertEquals(getType(14), getType(p1.getAge()));
    }

    @Test
    public void HeightMustBeInt(){
        Integer xdab = 14;
        Assert.assertEquals(xdab.getClass(), p1.getHeight().getClass());
    }

    @Test
    public void WeightMustBeDouble(){
        Double x = 14.14;
        Assert.assertEquals(x instanceof Double, p1.getWeight() instanceof Double);
    }
}