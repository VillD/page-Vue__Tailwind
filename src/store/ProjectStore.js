import { defineStore } from "pinia";

import imgSumary from "../img/sumary-component.jpg";
import imgLanding from "../img/landing-page.jpg";
import imgQr from "../img/qr-component.jpg";

export const useProjectStore = defineStore("ProjectStore", {
  state: () => {
    return {
      projects: [
        {
          id: 0,
          title: "Order",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ut dicta praesentium eaque delectus",
          image: imgSumary,
        },
        //   {
        //     id: 1,
        //     title: "Landing page",
        //     description:
        //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ut dicta praesentium eaque delectus",
        //     image: imgLanding,
        //   },
        {
          id: 2,
          title: "Qr Component",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ut dicta praesentium eaque delectus",
          image: imgQr,
        },
      ],
    };
  },

  //getters

  actions: {
    push() {
      const project = {
        id: 2,
        title: "Qr Component",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, ut dicta praesentium eaque delectus",
        image: imgQr,
      };
      this.projects.push(project);
    },
    pop() {
      this.projects.pop();
    },
  },
});
