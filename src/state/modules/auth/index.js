import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const module = {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};

export default module;
