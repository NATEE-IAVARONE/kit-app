import { NodeModulesManager } from '.';



class KitServer {
  modules = new NodeModulesManager();
}

export const kitServer = new KitServer();