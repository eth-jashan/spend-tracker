const express = require("express");
var cors = require("cors");
const { ethers } = require("ethers");

const app = express();
const port = 4000;

app.listen(port, () => {
  console.log(`Ipfs Uploader listening on port ${port}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const router = express.Router();

const provider = new ethers.providers.JsonRpcProvider(
  "https://polygon-mumbai.g.alchemy.com/v2/8zhyGM-aq1wJ4TFspyVp-dOAQ27TWozK"
);

router.post(
  "/exec",
  async function (req, res, next) {
    const { intent, fnSig, from, contractAddress, gasLimit } = req.body;
    const txDetails = { intent, fnSig, from, contractAddress };
    console.log("tx details", txDetails);
    const { r, s, v } = getSignatureParameters(txDetails.intent);
    // contract.options.address = txDetails.contractAddress;
    console.log("rsv", r, s, v);
    const contract = new ethers.Contract(
      contractAddress,
      [
        {
          inputs: [
            {
              internalType: "address",
              name: "userAddress",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "functionSignature",
              type: "bytes",
            },
            {
              internalType: "bytes32",
              name: "sigR",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "sigS",
              type: "bytes32",
            },
            {
              internalType: "uint8",
              name: "sigV",
              type: "uint8",
            },
          ],
          name: "executeMetaTransaction",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "payable",
          type: "function",
        },
      ],
      provider.getSigner()
    );
    try {
      let tx = await contract.executeMetaTransaction(
        txDetails.from,
        txDetails.fnSig,
        r,
        s,
        v,
        {
          from: user,
          gas: gasLimit,
        }
      );

      req.txHash = tx.transactionHash;
    } catch (err) {
      console.log(err);
      next(err);
    }
    next();
  },
  (req, res, next) => {
    res.send({
      result: req.txHash,
    });
  }
);
