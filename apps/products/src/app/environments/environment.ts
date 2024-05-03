import { Injectable } from "@angular/core";
import { IEnvironment } from "./types";

@Injectable({
  providedIn: 'root'
})
export class Environment implements IEnvironment {
  static instance: Environment;

  static get() {
    return Environment.instance || (Environment.instance = new Environment())
  }
  get production() {
    return false;
  }

  get tenant() {
    return import.meta?.env.NG_APP_TENANT || 'cl';
  }
}