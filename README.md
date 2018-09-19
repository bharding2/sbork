# sbork

First there was SPARQ, a nfl player rating tool created by Nike.  They had an open calculator on their website, and all was good.  Then they took it down.  Maybe they realized they could sell it for lots of money to NFL teams.  Who knows?  It is a mystery, but it was gone

Then there was pSPARQ.  [Zach Whitman](https://3sigmaathlete.com/) decided it was weird that the Nike formula was no longer public, so he recreated the forumla and pSPARQ was born.  This was great!  SPARQ was coming back into the light!  Wrong.  This formula is not not shared either, but an amazing and well beloved blog is created

Enter SPORK, a close approximation of pSPARQ made using linear regression by [Josh Hersmeyer](http://jhermsmeyer.com/sparq-scores).  This is great!  SPARQ is back in the hands of the curious.  But this is just some numbers, not an implementation.  Beautiful, beautiful numbers.

So now there is SBORK, an implementation of SPORK.  It incorportates positional averages based on a study done by [Revenge of the Birds](https://www.revengeofthebirds.com/2013/4/4/4181650/2013-nfl-draft-a-look-at-the-average-nfl-combine-number-over-a-5-yr) on combine averages using 5 years of player data into a calculation module.  Eventually the hope is that it will be a repository for player data presented in a way that is easy to incorporate into an excel dataset.  For now it is just a slow, slow work in progress