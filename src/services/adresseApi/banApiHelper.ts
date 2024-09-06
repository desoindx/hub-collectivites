import { Feature, GeoJsonProperties, Point } from "geojson";
import { AddressCollectivite } from "@/services/adresseApi/types";

export const mapAddressApiToCollectiviteAddress = (
  nationalBaseAddress: Feature<Point, GeoJsonProperties>,
): AddressCollectivite => ({
  banId: nationalBaseAddress.properties?.id,
  nomCollectivite: nationalBaseAddress.properties?.city,
  codeInsee: nationalBaseAddress.properties?.citycode,
  codePostal: nationalBaseAddress.properties?.postcode,
  long: nationalBaseAddress.geometry.coordinates[0]!,
  lat: nationalBaseAddress.geometry.coordinates[1]!,
  banInfo: nationalBaseAddress.properties,
});
