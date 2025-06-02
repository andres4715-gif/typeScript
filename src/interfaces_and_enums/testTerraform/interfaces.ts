export interface Pagination {
  total: number;
  options: {
    offset: number;
    limit: number;
    order: string;
  };
}

export interface GetTsaResponse extends Pagination {
  data: TsaInfoDto[];
}

export interface TsaInfoDto {
  id: string;
  tenantId: string;
  name: string;
}
