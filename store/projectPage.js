import { create } from "zustand";
import { devtools } from "zustand/middleware";

const pageStore = set => {
  return {
    byPages: {},
    allPages: [],
    setPages: pageList => {
      const pageIds = [];

      pageList.forEach(item => {
        const { pageId, pageName } = item;

        pageIds.push({ [pageId]: pageName });

        set(state => {
          state.byPages = {
            ...state.byPages,
            [pageId]: {
              name: pageName,
              node_id: pageId,
            },
          };

          return state;
        });
      });

      set(state => {
        state.allPages = pageIds;

        return state;
      });
    },
  };
};

const usePageListStore = create(devtools(pageStore));

export default usePageListStore;