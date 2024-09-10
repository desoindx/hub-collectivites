import { Feature, GeoJsonProperties, Point } from "geojson";
import { AddressCollectivite, BanAPIResponse } from "@/services/adresseApi/types";
import { mapAddressApiToCollectiviteAddress } from "@/services/adresseApi/banApiHelper";

const fetchAddressFromBanApi = async (
  keyword: string,
  limit: number,
  type?: string,
): Promise<Feature<Point, GeoJsonProperties>[]> => {
  if (keyword?.trim()?.length < 3) {
    return [];
  }
  const response = await fetch(
    `https://api-adresse.data.gouv.fr/search/?q=${keyword}&limit=${limit}${type ? `&type=${type}` : ""}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  );
  const result = (await response.json()) as BanAPIResponse;
  if ("code" in result) {
    throw new Error(result.message);
  }
  return result.features;
};

export const fetchCollectiviteFromBanApi = async (
  keyword: string,
  limit: number = 10,
): Promise<AddressCollectivite[]> => {
  try {
    const results = await fetchAddressFromBanApi(keyword, limit, "municipality");
    return results.map(mapAddressApiToCollectiviteAddress);
  } catch (e: any) {
    return [];
  }
};
