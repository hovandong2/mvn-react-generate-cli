import { RouteItemDef } from "@app/types/route.types";

import { {typeCap}PathsEnum } from "../constants/{type}.paths";
import {typeCap}Screen from "../screens/{typeCap}Screen/{typeCap}Screen";
import {typeCap}AddScreen from "../screens/{typeCap}Screen/screens/{typeCap}AddScreen/{typeCap}AddScreen";
import {typeCap}DetailScreen from "../screens/{typeCap}Screen/screens/{typeCap}DetailScreen/{typeCap}DetailScreen";
import {typeCap}EditScreen from "../screens/{typeCap}Screen/screens/{typeCap}EditScreen/{typeCap}EditScreen";
// import {typeCap}Routes from "./productsRoutes";

const {typeUPPER}_ADD_SCREEN: RouteItemDef = {
  id: "{type}-new",
  path: {typeCap}PathsEnum.{typeUPPER}_ADD,
  component: {typeCap}AddScreen,
  hideInNavigation: true,
};

const {typeUPPER}_EDIT_SCREEN: RouteItemDef = {
  id: "{type}-edit",
  path: {typeCap}PathsEnum.{typeUPPER}_EDIT,
  component: {typeCap}EditScreen,
  hideInNavigation: true,
};

const {typeUPPER}_DETAIL_SCREEN: RouteItemDef = {
  id: "{type}-detail",
  path: {typeCap}PathsEnum.{typeUPPER}_DETAIL,
  component: {typeCap}DetailScreen,
  hideInNavigation: true,
};

const {typeUPPER}_SCREEN: RouteItemDef = {
  id: "{type}",
  path: {typeCap}PathsEnum.{typeUPPER},
  navigationTitle: "{type}.navigationTitle",
  component: {typeCap}Screen,
};

export const {typeUPPER}_ROUTES = [
  {typeUPPER}_ADD_SCREEN,
  {typeUPPER}_EDIT_SCREEN,
  {typeUPPER}_DETAIL_SCREEN,
  {typeUPPER}_SCREEN,
];
