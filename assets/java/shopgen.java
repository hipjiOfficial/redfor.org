// This code is my attempt at replicating the BOMBLINE shop generation.
// You can either input a day of the week, or uncomment the LocalDate.now() line to enter the day you want to generate.
// Epic cards are locked to always generate on Fridays*. Otherwise, a random shop will be generated based on the rarities I've calculated from my log.
//
//
//
//
//
// *In real life, epic shops generate at Friday, 12:00AM GMT+0. It may not be the same day for you, like in my case, the shop becomes epic on Thursday evenings.


package assets.java;
import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;
import java.time.LocalDate;

public class shopgen {
    public static final float commonChance = 0.42f;
    public static final float uncommonChance = 0.28f;
    public static final float rareChance = 0.25f;
    public static final Random RNG = new Random();

    public static class Card {
        public final String name;
        public final String rarity;

        public Card(String name, String rarity) {
            this.name = name;
            this.rarity = rarity;
        }

        @Override
        public String toString() {
            return rarity + ": " + name;
        }

        @Override
        public boolean equals(Object obj) {
            if (this == obj) return true;
            if (!(obj instanceof Card)) return false;
            Card other = (Card) obj;
            return name.equals(other.name);
        }

        @Override
        public int hashCode() {
            return name.hashCode();
        }
    }

    public static void main(String[] args) {   
        Scanner scnr = new Scanner(System.in);
        System.out.print("Enter the day of the week: ");
        String day = scnr.nextLine().toUpperCase();;
        //String day = LocalDate.now().getDayOfWeek().toString();
        generateShop(day);
        scnr.close();
    }

    public static void generateShop(String day) {
        if (day.equals("FRIDAY")) {
            ArrayList<Card> shop = new ArrayList<Card>();
            Card epic = epicCards.get(RNG.nextInt(epicCards.size()));
            shop.add(epic);

            for (int i = 0; i < 2; i++) {
                Card card;
                do {
                    card = pickWeightedCard();
                } while (shop.contains(card));
                shop.add(card);
            }

            sortShopByRarity(shop);
            System.out.println("Friday shop: " + shop);
        } else {
            ArrayList<Card> shop = new ArrayList<Card>();
            for (int i = 0; i < 3; i++) {
                Card card;
                do {
                    card = pickWeightedCard();
                } while (shop.contains(card));
                shop.add(card);
            }

            sortShopByRarity(shop);
            System.out.println("Shop: " + shop);
        }
    }

    public static Card pickWeightedCard() {
        float roll = RNG.nextFloat();
        if (roll < commonChance) {
            return commonCards.get(RNG.nextInt(commonCards.size()));
        }
        if (roll < commonChance + uncommonChance) {
            return uncommonCards.get(RNG.nextInt(uncommonCards.size()));
        }
        return rareCards.get(RNG.nextInt(rareCards.size()));
    }

    public static void sortShopByRarity(ArrayList<Card> shop) {
        shop.sort((a, b) -> Integer.compare(getRarityOrder(a.rarity), getRarityOrder(b.rarity)));
    }

    public static int getRarityOrder(String rarity) {
        switch (rarity) {
            case "Epic":
                return 0;
            case "Rare":
                return 1;
            case "Uncommon":
                return 2;
            case "Common":
                return 3;
            default:
                return 4;
        }
    }

    public static ArrayList<Card> commonCards = new ArrayList<Card>() {{
        add(new Card("321.png", "Common"));
        add(new Card("Are You Seizon.png", "Common"));
        add(new Card("Black Ice.png", "Common"));
        add(new Card("Blue Decay.png", "Common"));
        add(new Card("Bubble Gum.png", "Common"));
        add(new Card("Chalked.png", "Common"));
        add(new Card("Circuit.png", "Common"));
        add(new Card("Drama.png", "Common"));
        add(new Card("Duck.png", "Common"));
        add(new Card("Eat Up.png", "Common"));
        add(new Card("Emerald.png", "Common"));
        add(new Card("Galaxy.png", "Common"));
        add(new Card("Glitch.png", "Common"));
        add(new Card("Green Skulls.png", "Common"));
        add(new Card("Hearts N Flowers.png", "Common"));
        add(new Card("Hello.png", "Common"));
        add(new Card("Hyper Tension.png", "Common"));
        add(new Card("Junglist.png", "Common"));
        add(new Card("Lightning Bolt.png", "Common"));
        add(new Card("Meh.png", "Common"));
        add(new Card("Newborn Star.png", "Common"));
        add(new Card("Off We Go.png", "Common"));
        add(new Card("One Point For Me.png", "Common"));
        add(new Card("Ocean.png", "Common"));
        add(new Card("Pearly Whites.png", "Common"));
        add(new Card("Pentagon Dreams.png", "Common"));
        add(new Card("Pattern.png", "Common"));
        add(new Card("Pop Art.png", "Common"));
        add(new Card("Red Forest.png", "Common"));
        add(new Card("Ricochet.png", "Common"));
        add(new Card("Rhombus Space.png", "Common"));
        add(new Card("Seeing Grey.png", "Common"));
        add(new Card("Shinobi.png", "Common"));
        add(new Card("Splatter.png", "Common"));
        add(new Card("Teal Star.png", "Common"));
        add(new Card("Timebomb.png", "Common"));
        add(new Card("Vandalism.png", "Common"));
        add(new Card("Water Ops.png", "Common"));
        add(new Card("White Eye.png", "Common"));
    }};

    public static ArrayList<Card> uncommonCards = new ArrayList<Card>() {{
        add(new Card("Beyond.png", "Uncommon"));
        add(new Card("Binary.png", "Uncommon"));
        add(new Card("Cat.png", "Uncommon"));
        add(new Card("Crackshot.png", "Uncommon"));
        add(new Card("Dansen.png", "Uncommon"));
        add(new Card("Electroshock.png", "Uncommon"));
        add(new Card("Foggy.png", "Uncommon"));
        add(new Card("Funky.png", "Uncommon"));
        add(new Card("Global Unification.png", "Uncommon"));
        add(new Card("Graph Paper Sketches.png", "Uncommon"));
        add(new Card("Good Weather.png", "Uncommon"));
        add(new Card("Instagib.png", "Uncommon"));
        add(new Card("Inside Universe.png", "Uncommon"));
        add(new Card("MOAB.png", "Uncommon"));
        add(new Card("Neva Catch Me.png", "Uncommon"));
        add(new Card("Notebook Sketch.png", "Uncommon"));
        add(new Card("Peace In War.png", "Uncommon"));
        add(new Card("Rage.png", "Uncommon"));
        add(new Card("Rave.png", "Uncommon"));
        add(new Card("Retro Rampage.png", "Uncommon"));
        add(new Card("Runt.png", "Uncommon"));
        add(new Card("Safeguard.png", "Uncommon"));
        add(new Card("Savages.png", "Uncommon"));
        add(new Card("Sneaky.png", "Uncommon"));
        add(new Card("Take It Easy.png", "Uncommon"));
        add(new Card("To Pay Respects.png", "Uncommon"));
        add(new Card("Vandalism.png", "Uncommon"));
    }};

    public static ArrayList<Card> rareCards = new ArrayList<Card>() {{
        add(new Card("9 Hour Work Day.png", "Rare"));
        add(new Card("Another Niko.png", "Rare"));
        add(new Card("Anime Blufor.png", "Rare"));
        add(new Card("Anime Redfor.png", "Rare"));
        add(new Card("Bombhawks.png", "Rare"));
        add(new Card("Childhood Memories.png", "Rare"));
        add(new Card("Crossroads.png", "Rare"));
        add(new Card("Freakout.png", "Rare"));
        add(new Card("Gone Fishing.png", "Rare"));
        add(new Card("Imageboard.png", "Rare"));
        add(new Card("May Heaven Grant You Fortune.png", "Rare"));
        add(new Card("Mesmerizer.png", "Rare"));
        add(new Card("Mega Bombers.png", "Rare"));
        add(new Card("Niko.png", "Rare"));
        add(new Card("Party All The Time.png", "Rare"));
        add(new Card("Present Day.png", "Rare"));
        add(new Card("Rude Bomber.png", "Rare"));
        add(new Card("See-Through.png", "Rare"));
        add(new Card("The Choice.png", "Rare"));
        add(new Card("To Hell With Me.png", "Rare"));
        add(new Card("What Am I Fighting For.png", "Rare"));
    }};

    public static ArrayList<Card> epicCards = new ArrayList<Card>() {{
        add(new Card("Ascii White.gif", "Epic"));
        add(new Card("Dead On.gif", "Epic"));
        add(new Card("Defuse The Bomb.gif", "Epic"));
        add(new Card("Double Team.gif", "Epic"));
        add(new Card("Hi There.gif", "Epic"));
        add(new Card("Lightweight.gif", "Epic"));
        add(new Card("My Bombsite Was Burned To A Crisp.gif", "Epic"));
        add(new Card("Slashd.gif", "Epic"));
        add(new Card("Throwing Knife.gif", "Epic"));
        add(new Card("Toxic.gif", "Epic"));
        add(new Card("You Are An Idiot.gif", "Epic"));
    }};
}
