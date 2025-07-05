require('dotenv').config();
const bs58 = require('bs58');
const readline = require('readline-sync');
const {
  Connection,
  clusterApiUrl,
  Keypair,
  PublicKey,
  LAMPORTS_PER_SOL,
} = require('@solana/web3.js');

// ---------------- CONFIG ---------------- //
const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");

// Load Phantom Seed
const seed = process.env.PHANTOM_SECRET;
const keypair = Keypair.fromSecretKey(bs58.decode(seed));
const wallet = keypair.publicKey;

console.log("Connected Wallet:", wallet.toBase58());

// Take token input from user
const tokenAddress = readline.question("Paste token address: ");
console.log("Token to buy:", tokenAddress);

// TODO: Add Raydium buy + auto-sell logic here
