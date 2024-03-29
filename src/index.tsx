import * as React from "react";
import Unlock from "./components/Unlock";
import Send from "./components/Send";
import AuthenticateComponent from "./components/Authenticate";
import Ledger from "./components/Ledger";
import { useWebWalletLogin } from "./components/Unlock/Login/Wallet";
import WalletConnect from "./components/WalletConnect";
import { ContextProvider as Context, useContext, useDispatch } from "./context";
import useSendTransaction from "./helpers/useSend";
import useSendTransactions from "./helpers/useSendTransactions";
import { useRefreshAccount } from "./helpers/accountMethods";
import newTransaction from "./helpers/newTransaction";
import {
  RouteType as RouteInterface,
  NetworkType as NetworkInterface,
  RawTransactionType as RawTransactionInterface,
} from "./helpers/types";
import SendTransactions from "components/SendTransactions";

export type NetworkType = NetworkInterface;
export type RouteType = RouteInterface;
export type RawTransactionType = RawTransactionInterface;

const Authenticate = ({
  children,
  routes,
  unlockRoute,
}: {
  children: React.ReactNode;
  routes: RouteType[];
  unlockRoute: string;
}) => {
  return (
    <AuthenticateComponent routes={routes} unlockRoute={unlockRoute}>
      {children}
      <Send />
      <SendTransactions />
    </AuthenticateComponent>
  );
};

const Pages = { Unlock, Ledger, WalletConnect };

export {
  Authenticate,
  Pages,
  useRefreshAccount,
  useSendTransaction,
  useSendTransactions,
  useWebWalletLogin,
  newTransaction,
  Context,
  useContext,
  useDispatch,
};
