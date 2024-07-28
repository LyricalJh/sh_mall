import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist, createJSONStorage } from "zustand/middleware";

const LoginStore = (set) => ({
  login: null,

  setLoginSession: (_login) => set((state) => ({ login: _login })),
});

const persistConfig = {
  name: "LoginStore",
  storage: createJSONStorage(() => sessionStorage),
};

const useLoginStore = create(
  devtools(persist(LoginStore, persistConfig), { name: persistConfig.name })
);
export default useLoginStore;
