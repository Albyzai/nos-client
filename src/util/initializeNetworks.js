import Neon, { rpc } from '@cityofzion/neon-js';

const nosLocalConfig = {
  name: 'nOSLocal',
  extra: {
    neoscan: 'http://10.123.3.28:4000/api/main_net'
  }
};

const nOSLocal = new rpc.Network(nosLocalConfig);
Neon.add.network(nOSLocal);
