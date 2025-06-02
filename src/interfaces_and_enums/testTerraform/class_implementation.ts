import { GetTsaResponse, TsaInfoDto } from './interfaces';

export class MyExport implements GetTsaResponse {
  data: TsaInfoDto[];
  total: number;
  options: {
    offset: number;
    limit: number;
    order: string;
  };

  constructor(data: GetTsaResponse) {
    this.data = data.data;
    this.total = data.total;
    this.options = data.options;
  }

  showData(): void {
    console.log(this.data);
    console.log(this.total);
  }
}
