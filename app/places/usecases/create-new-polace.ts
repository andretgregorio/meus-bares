type CreateNewPlaceCommand = {
  name: string;
  websiteUrl: string;
  tags: string[];
};

type Place = {
  id?: string;
  name: string;
  websiteUrl: string;
  tags: string[];
};

export function createNewPlace(params: CreateNewPlaceCommand): Promise<Place> {
  const place: Place = {
    id: "1234",
    name: params.name,
    websiteUrl: params.websiteUrl,
    tags: params.tags,
  };

  return Promise.resolve(place);
}
