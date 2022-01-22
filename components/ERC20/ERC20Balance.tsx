import React, { useRef, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
import { Web3Provider } from "@ethersproject/providers";
import { formatEther } from "@ethersproject/units";

import { Box, Button, Typography } from "@iotabots/components";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useEagerConnect, useInactiveListener } from "../../utils/hooks";
import { ProfilePicture } from "../ProfilePicture";
import Web3 from "web3";

declare global {
  interface library {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    provider: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }
}

const BENERGY_ABI = require("../../contracts/benergy.json");
const IOTABOTS_ABI = require("../../contracts/iotabots.json");

const Balance: React.FC = () => {
  const IOTABOTS_ADR = "0x55Ab23584315DCF58b1Ead853fF7d65D912C38fB";
  const BENERGY_ADR = "0xBe28b9e20E8720b14629DBf62d87f8934b516c11";
  const context = useWeb3React<Web3Provider>();
  const { connector, chainId, library, account, deactivate, active, error } =
    context;

  const [balance, setBalance] = React.useState();

  const init = async function (_account, _library) {
    const web3 = new Web3(_library.provider);

    let contract = new web3.eth.Contract(BENERGY_ABI, BENERGY_ADR);
    console.log("contract", contract);
    console.log("_account", _account);
    let data;
    try {
      data = await contract.methods.balanceOf(_account).call();
      console.log("data", data);
      setBalance(data);
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  React.useEffect(() => {
    console.log("balance", balance);
    console.log("account", account);
    console.log("chainId", chainId);
    console.log("library", library);
    if (!!account && !!library) {
      init(account, library);
    }
    return null;
  }, [account, library, chainId, balance]);

  return (
    <span>
      {/* eslint-disable-next-line no-nested-ternary */}
      BENERGY Balance: {balance === null ? null : balance ? balance : "-"}
    </span>
  );
};
const AmountOfBots: React.FC = () => {
  const IOTABOTS_ADR = "0x689143C6C67032C684c81F5fB82F3dB9942cc295";
  const BENERGY_ADR = "0x9807D12726D06cC03CB12afebCdbD3c3fc18f9d1";
  const context = useWeb3React<Web3Provider>();
  const { connector, chainId, library, account, deactivate, active, error } =
    context;

  const [amount, setAmount] = React.useState();

  const init = async function (_account, _library) {
    const web3 = new Web3(_library.provider);

    let contract = new web3.eth.Contract(IOTABOTS_ABI, IOTABOTS_ADR);
    console.log("contract", contract);
    console.log("_account", _account);
    let data;
    try {
      data = await contract.methods.walletOfOwner(_account).call();
      console.log("data", data);
      if (data.length > 0) {
        setAmount(data.length);
      }
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  React.useEffect(() => {
    console.log("balance", amount);
    console.log("account", account);
    console.log("chainId", chainId);
    console.log("library", library);
    if (!!account && !!library) {
      init(account, library);
    }
    return null;
  }, [account, library, chainId, amount]);

  return (
    <span>
      {/* eslint-disable-next-line no-nested-ternary */}
      AmountOfBots: {amount}
    </span>
  );
};

const RequestTokens: React.FC = () => {
  const IOTABOTS_ADR = "0x689143C6C67032C684c81F5fB82F3dB9942cc295";
  const BENERGY_ADR = "0x9807D12726D06cC03CB12afebCdbD3c3fc18f9d1";
  const context = useWeb3React<Web3Provider>();
  const { connector, chainId, library, account, deactivate, active, error } =
    context;

  const [balance, setBalance] = React.useState();
  const [contract, setContract] = React.useState();

  const requestTokens = async function () {
    console.log("requestTokens", context.library.provider);
    const web3 = new Web3(context.library.provider);
    let contract = new web3.eth.Contract(BENERGY_ABI, BENERGY_ADR);
    console.log("contract", contract);
    let data;
    try {
      data = await contract.methods
        .requestTokens()
        .send({ from: context.account, gasPrice: "0" });
      console.log("data", data);
      setBalance(data);
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const init = async function (_account, _library) {
    const web3 = new Web3(_library.provider);
    let contract = new web3.eth.Contract(BENERGY_ABI, BENERGY_ADR);
    console.log("contract", contract);
    console.log("_account", account);
    console.log("web3", web3);
  };

  React.useEffect(() => {
    console.log("balance", balance);
    console.log("account", account);
    console.log("chainId", chainId);
    console.log("library", library);
    if (!!account && !!library) {
      init(account, library);
    }
    return null;
  }, [account, library, chainId, balance]);

  return (
    <span>
      {/* eslint-disable-next-line no-nested-ternary */}
      <Button onClick={requestTokens}>Request Tokens</Button>
    </span>
  );
};

const ERC20Balance: React.FC = () => {
  const context = useWeb3React<Web3Provider>();
  const { connector, library, account, deactivate, active, error } = context;

  // handle logic to recognize the connector currently being activated
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [activatingConnector, setActivatingConnector] = React.useState<any>();
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  /* handle logic to eagerly connect to the injected ethereum provider, 
  if it exists and has granted access already */
  const triedEager = useEagerConnect();

  /* handle logic to connect in reaction to certain events on the 
  injected ethereum provider, if it exists */
  useInactiveListener({ suppress: !triedEager || !!activatingConnector });

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Balance />
      <br />
      <AmountOfBots />
      <br />
      <RequestTokens />
    </Box>
  );
};

export default ERC20Balance;
