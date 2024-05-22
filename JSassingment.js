/*
Assessment Requirements
Indian. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step Indian
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name, age, number, ethnicity) {
  const metadata = {
    Name: name,
    Age: age,
    Number: number,
    Ethnicity: ethnicity,
  };
  NFTs.push(metadata);
  console.log("Minted: " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\nID: \t\t" + (i + 1));
    console.log("Name: \t\t" + NFTs[i].Name);
    console.log("Age: \t\t" + NFTs[i].Age);
    console.log("Number: \t" + NFTs[i].Number);
    console.log("Ethnicity: \t" + NFTs[i].Ethnicity);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log('\n' +NFTs.length);
}

// call your functions below this line
mintNFT("Nikhil", "20", "6390224849", "Indian");
mintNFT("Ankit", "22", "8576545328", "Indian");
mintNFT("Vivek", "21", "6473822637", "Indian");
mintNFT("Prakash", "21", "9373625242", "Indian");

listNFTs();
getTotalSupply();
