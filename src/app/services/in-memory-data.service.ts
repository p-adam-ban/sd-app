import { Injectable } from '@angular/core';


import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {  
    let users: UserData[] = [
      { id: 101, name: 'admin', age:12, nationality:"HU" },
      { id: 12, name: 'Béla', age:54, nationality:"HU"  },
      { id: 13, name: 'Gyuri', age:25, nationality:"HU"  },
      { id: 14, name: 'Géza', age:56, nationality:"HU"  },
      { id: 15, name: 'Juli', age:15, nationality:"HU"  },
      { id: 16, name: 'Tamara', age:92, nationality:"HU"  },
      { id: 17, name: 'Gábor', age:62, nationality:"HU"  },
      { id: 18, name: 'Balázs', age:72, nationality:"HU"  },
      { id: 21, name: 'admin2', age:32, nationality:"HU"  },
      { id: 22, name: 'Béla2', age:18, nationality:"HU"  },
      { id: 23, name: 'Gyuri2', age:52, nationality:"HU"  },
      { id: 24, name: 'Géza2', age:62, nationality:"HU"  },
      { id: 25, name: 'Juli2', age:17, nationality:"HU"  },
      { id: 26, name: 'Tamara2', age:32, nationality:"HU"  },
      { id: 27, name: 'Gábor2', age:42, nationality:"HU"  },
      { id: 28, name: 'Balázs2', age:12, nationality:"HU"  }
    ];
    return {users};
  }
}


