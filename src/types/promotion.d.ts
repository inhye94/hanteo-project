export interface IPromotionType {
  id: string;
  title: string;
  period: string;
  action?: string;
  imageSrc: string;
  description: string;
  state?: string;
  linkUrl?: string;
}
