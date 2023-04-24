export type RootStackParamList = {
  AccountsListPage: undefined;
  AccountsCreatePage: undefined;
  AccountsDetailPage: {accountId: string};
  //   Profile: {userId: string};
  //   Feed: {sort: 'latest' | 'top'} | undefined;

  TransactionsListPage: undefined;
  TransactionsDetailPage: {transactionId: string};
  TransactionsFormPage: {transactionId: string} | undefined;

  MenuListPage: undefined;
};
