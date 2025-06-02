import { MyExport } from './class_implementation';
import { GetTsaResponse } from './interfaces';

const myObject: GetTsaResponse = {
  data: [
    {
      id: '001',
      tenantId: 'tenant-abc',
      name: 'Test Item',
    },
    {
      id: '002',
      tenantId: 'tenant-def',
      name: 'Second Item',
    },
  ],
  total: 2,
  options: {
    offset: 0,
    limit: 10,
    order: 'asc',
  },
};

const myFinalMethod = new MyExport(myObject);
myFinalMethod.showData();
