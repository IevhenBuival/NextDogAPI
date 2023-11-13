export type TBreedItem = {
  id: string;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
  height: {
    imperial: string;
    metric: string;
  };
  weight: {
    imperial: string;
    metric: string;
  };
};
export type TDogItem = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: TBreedItem[];
  myfavourite: TFavourite[];
};
export type TFavourite = {
  lenth: number;
  id: string;
  user_id: string;
  image_id: string;
  sub_id: string;
  created_at: string;
  image: {
    id: string;
    url: string;
  };
};
