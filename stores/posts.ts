import { defineStore } from "pinia";

export const useStore = defineStore("tabStore", () => {
  const selectedTab = ref("");

  function setSelectTab(tabId: string) {
    selectedTab.value = tabId;
  }

  return {
    setSelectTab,
    selectedTab,
  };
});
