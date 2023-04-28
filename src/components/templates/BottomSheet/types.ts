export type BottomSheetProps = {
  title?: string;
  description?: string;
};

export type BottomSheetHandle = {
  show: (props: BottomSheetProps) => void;
  hide: () => void;
};
