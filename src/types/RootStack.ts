export type RootStackParamList = {
  AccountsListPage: undefined;
  AccountsCreatePage: undefined;
  AccountsDetailPage: {accountId: string};

  MenuListPage: undefined;

  TransactionsListPage: undefined;
  TransactionsDetailPage: {transactionId: string};
  TransactionsEditPage: {transactionId: string} | undefined;
  TransactionsNewPage: undefined;

  HomeFeedPageProps: undefined;

  PublicSignInPage: undefined;
  PublicSignUpPage: undefined;
  PublicLandingPage: undefined;
};
