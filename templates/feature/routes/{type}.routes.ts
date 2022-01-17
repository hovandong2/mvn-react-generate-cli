import { RouteItemDef } from "@app/types/route.types";

import { {typeCap}PathsEnum } from "../constants/{type}.paths";
import {typeCap}Screen from "../screens/{typeCap}Screen/{typeCap}Screen";

const {typeUPPER}_SCREEN: RouteItemDef = {
  id: "{type}",
  path: {typeCap}PathsEnum.{typeUPPER},
  navigationTitle: "{type}.navigationTitle",
  component: {typeCap}Screen,
};

export const {typeUPPER}_ROUTES = [{typeUPPER}_SCREEN];
