// Step 1: Create a variable to hold your NFTs
let NFTs =[];

// Step 2: Function to mint an NFT
function mintNFTs(_name , _owner, _shape, _color,_description){
  // Create an NFT object
  const nft = {
    "Name" : _name ,
    "Owner": _owner,
    "shape": _shape,
    "color": _color,
    "Description" : _description
  };
  // Store the NFT in the array
  NFTs.push(nft);
  console.log("Minted : " + _name);
}

// Step 3: Function to list all NFTs
function NFTlist(){
  for(let i=0; i<NFTs.length;i++){
    // Loop through the array of NFTs and print their metadata
    console.log("\nNFT - " + (i+1));
    console.log(" \nName  : " + NFTs[i].Name);
    console.log("Owner : " + NFTs[i].Owner);
    console.log("shape : " + NFTs[i].shape);
    console.log("color : " + NFTs[i].color);
    console.log("Description : " + NFTs[i].Description);
  }
}

// Step 4: Function to get the total supply of NFTs
function getTotalSupply(){
  console.log("\nTotal No. of NFTs are " + NFTs.length);
}
// Call your functions below this line

// Minting some NFTs
mintNFTs("Tiger","john","circle","Yellow","Unique tiger art");
mintNFTs("Dare Dog","willey","Pentagon","Red","Unique Dog punk");
mintNFTs("cute cat","Amie","Square","white","Unique cat cluster");
mintNFTs("Roarlion","Marie","triangle","orange","Unique roaring lion");

// Listing all NFTs
NFTlist();

// Printing the total supply of NFTs
getTotalSupply();



