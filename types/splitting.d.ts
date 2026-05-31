declare module "splitting" {
  type SplitTarget = Element | Element[] | NodeListOf<Element>;

  type SplittingOptions = {
    target?: SplitTarget;
    by?: string;
    key?: string;
    whitespace?: boolean;
  };

  export default function Splitting(
    options?: SplittingOptions
  ): Array<Record<string, Element[]>>;
}
