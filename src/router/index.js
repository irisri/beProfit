import Vue from "vue";
import Router from "vue-router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Buefy from "buefy";
import { library } from "@fortawesome/fontawesome-svg-core";
// internal icons

import {
  faTrash,
  faPlus,
  faArrowUp,
  faAngleRight,
  faCaretDown,
  faCaretUp,
  faPenToSquare,
  faAngleLeft,
  faXmark
} from "@fortawesome/free-solid-svg-icons";

import "buefy/dist/buefy.css";

import MainData from "@/components/MainData";

library.add(
  faTrash,
  faPlus,
  faArrowUp,
  faAngleRight,
  faCaretDown,
  faCaretUp,
  faPenToSquare,
  faAngleLeft,
  faXmark
);

Vue.component("vue-fontawesome", FontAwesomeIcon);
Vue.use(Router);
Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas"
});

export default new Router({
  routes: [
    {
      path: "/",
      name: "MainData",
      component: MainData
    }
  ]
});
